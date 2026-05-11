import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { parse } from '@babel/parser'
import _traverse from '@babel/traverse'
const traverse = _traverse.default ?? _traverse

const CONFIG_FILENAME = 'strk-img-config.json'
const CACHE_FILENAME  = '.strk-cache.json'
const CACHE_TTL_MS = 30 * 24 * 60 * 60 * 1000
const CACHE_MAX_ENTRIES = 500

let configPath = ''
let cachePath  = ''
let configData = {}
let cacheData  = {}
let pendingFlush = null
let _writtenByPlugin = false
let _dirty = false
let _isBuild = false

// ---------------------------------------------------------------------------
// Native .env parser (no dotenv)
// Called in buildStart() where we have the confirmed Vite root path.
// Loads .env.local first (higher priority), then .env.
// Does NOT overwrite vars already set in the real environment.
// ---------------------------------------------------------------------------
function loadEnvFile(root) {
  const candidates = ['.env.local', '.env']
  let loaded = false
  for (const name of candidates) {
    const envPath = path.resolve(root, name)
    if (!fs.existsSync(envPath)) continue
    const lines = fs.readFileSync(envPath, 'utf-8').split('\n')
    for (const raw of lines) {
      const line = raw.trim()
      if (!line || line.startsWith('#')) continue
      const eq = line.indexOf('=')
      if (eq === -1) continue
      const key = line.slice(0, eq).trim()
      let val = line.slice(eq + 1).trim()
      if ((val.startsWith('"') && val.endsWith('"')) ||
          (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1)
      }
      if (key && !(key in process.env)) {
        process.env[key] = val
      }
    }
    console.log('[strk-img] Loaded env from ' + envPath)
    loaded = true
  }
  if (!loaded) {
    console.warn(
      '[strk-img] WARNING: No .env file found in ' + root + '\n' +
      '[strk-img]   Copy .env.example to .env and add your UNSPLASH_ACCESS_KEY'
    )
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const hashQuery = q => crypto.createHash('md5').update(q).digest('hex').slice(0, 8)
const isSameJson = (a, b) => JSON.stringify(a) === JSON.stringify(b)

function readJson(p) {
  try { return JSON.parse(fs.readFileSync(p, 'utf-8')) }
  catch { return {} }
}

function writeJson(p, data) {
  fs.writeFileSync(p, JSON.stringify(data, null, 2), 'utf-8')
}

function normalizeCacheData(raw) {
  const now = Date.now()
  const out = {}
  for (const [k, v] of Object.entries(raw || {})) {
    if (!v) continue
    const results = Array.isArray(v) ? v : v.results
    if (!Array.isArray(results)) continue
    out[k] = {
      results,
      _ts: typeof v._ts === 'number' ? v._ts : now,
    }
  }
  return out
}

function isExpiredCacheEntry(entry, now) {
  if (!entry || !Array.isArray(entry.results)) return true
  const ts = typeof entry._ts === 'number' ? entry._ts : 0
  return now - ts > CACHE_TTL_MS
}

function pruneCacheData() {
  const now = Date.now()
  const rows = Object.entries(cacheData)
    .filter(([, v]) => !isExpiredCacheEntry(v, now))
    .sort((a, b) => (b[1]._ts || 0) - (a[1]._ts || 0))
    .slice(0, CACHE_MAX_ENTRIES)
  cacheData = Object.fromEntries(rows)
}

function buildSharpUrl(rawUrl, targetWidth, dpr = 2) {
  if (!rawUrl) return rawUrl
  let url
  try {
    url = new URL(rawUrl)
  } catch {
    return rawUrl
  }
  const width = Math.max(800, Math.round((Number(targetWidth) || 1600) * dpr))
  url.searchParams.set('w', String(width))
  url.searchParams.set('q', '90')
  url.searchParams.set('fit', 'max')
  url.searchParams.set('fm', 'jpg')
  return url.toString()
}

// ---------------------------------------------------------------------------
// JSX/TSX parser
// Returns: Array<{ imgId, query, ratio, width, kind }>
// ---------------------------------------------------------------------------
export function extractStrkEntries(code) {
  let ast
  try {
    ast = parse(code, {
      sourceType: 'module',
      plugins: ['jsx', 'typescript'],
      errorRecovery: true,
    })
  } catch { return [] }

  // Pass 1: build id -> textContent map
  const idTextMap = {}
  traverse(ast, {
    JSXOpeningElement(np) {
      const attrs = np.node.attributes || []
      const idAttr = attrs.find(a => a.type === 'JSXAttribute' && a.name?.name === 'id')
      if (!idAttr) return
      const idVal =
        idAttr.value?.type === 'StringLiteral' ? idAttr.value.value
        : idAttr.value?.expression?.value
      if (!idVal) return
      const parent = np.parentPath
      if (!parent?.node?.children) return
      const text = parent.node.children
        .filter(c => c.type === 'JSXText')
        .map(c => c.value.trim()).filter(Boolean).join(' ')
      if (text) idTextMap[idVal] = text
    },
  })

  // Pass 2: collect strk entries
  const entries = []
  const resolveQuery = raw =>
    raw ? raw.replace(/\[([^\]]+)\]/g, (_, id) => idTextMap[id] || '').trim() : ''

  traverse(ast, {
    JSXOpeningElement(np) {
      const attrs = np.node.attributes || []
      const getAttr = name => {
        const a = attrs.find(a => a.type === 'JSXAttribute' && a.name?.name === name)
        if (!a) return null
        if (a.value === null) return true
        if (a.value?.type === 'StringLiteral') return a.value.value
        if (a.value?.expression?.type === 'StringLiteral') return a.value.expression.value
        return null
      }

      const imgRaw = getAttr('data-strk-img')
      const imgId  = getAttr('data-strk-img-id')
      if (imgRaw && imgId)
        entries.push({ imgId, query: resolveQuery(imgRaw),
          ratio: getAttr('data-strk-img-ratio') || '16x9',
          width: getAttr('data-strk-img-width') || '800', kind: 'img' })

      const bgRaw = getAttr('data-strk-bg')
      const bgId  = getAttr('data-strk-bg-id')
      if (bgRaw && bgId)
        entries.push({ imgId: bgId, query: resolveQuery(bgRaw),
          ratio: getAttr('data-strk-bg-ratio') || '16x9',
          width: getAttr('data-strk-bg-width') || '1600', kind: 'bg' })
    },
  })
  return entries
}

// ---------------------------------------------------------------------------
// Unsplash API
// ---------------------------------------------------------------------------
async function fetchUnsplash(query, perPage) {
  perPage = perPage || 10
  const key = process.env.UNSPLASH_ACCESS_KEY
  if (!key || key === 'your_key_here') {
    console.warn('[strk-img] UNSPLASH_ACCESS_KEY missing in .env -- skipping: ' + query)
    return []
  }

  const url = new URL('https://api.unsplash.com/search/photos')
  url.searchParams.set('query', query)
  url.searchParams.set('per_page', String(perPage))
  url.searchParams.set('orientation', 'landscape')

  let res
  try {
    res = await fetch(url.toString(), {
      headers: { Authorization: 'Client-ID ' + key },
    })
  } catch (err) {
    console.warn('[strk-img] Network error: ' + err.message)
    return []
  }

  if (!res.ok) {
    const body = await res.text().catch(() => '')
    console.warn('[strk-img] Unsplash ' + res.status + ' for "' + query + '"' + (body ? ' -- ' + body.slice(0, 120) : ''))
    return []
  }

  const json = await res.json()
  return (json.results || []).map(p => ({
    id:          p.id,
    url:         p.urls?.regular || p.urls?.full,
    thumb:       p.urls?.thumb,
    alt:         p.alt_description || p.description || query,
    credit:      p.user?.name,
    creditUrl:   p.user?.links?.html,
    unsplashUrl: p.links?.html,
    color:       p.color,
  }))
}

// ---------------------------------------------------------------------------
// Process entries
// ---------------------------------------------------------------------------
async function processEntries(entries) {
  const now = Date.now()
  await Promise.all(entries.map(async ({ imgId, query, ratio, width }) => {
    if (!query) return
    const ex = configData[imgId]
    // Preserve any existing entry that already has results (manual or previously fetched)
    if (ex && ex.results && ex.results.length > 0) return

    const h = hashQuery(query)
    const cacheHit = cacheData[h]
    if (cacheHit && !isExpiredCacheEntry(cacheHit, now)) {
      const next = { query, ratio, width, results: cacheHit.results, cached: true }
      if (!isSameJson(ex, next)) {
        configData[imgId] = next
        _dirty = true
      }
      return
    } else if (cacheHit && isExpiredCacheEntry(cacheHit, now)) {
      delete cacheData[h]
      _dirty = true
    }

    console.log('[strk-img] Searching: "' + query + '"')
    const results = await fetchUnsplash(query)

    if (results.length > 0) {
      const cacheNext = { results, _ts: now }
      if (!isSameJson(cacheData[h], cacheNext)) {
        cacheData[h] = cacheNext
        _dirty = true
      }
      const next = { query, ratio, width, results }
      if (!isSameJson(ex, next)) {
        configData[imgId] = next
        _dirty = true
      }
      console.log('[strk-img] Got ' + results.length + ' results for "' + query + '"')
    } else {
      const next = { query, ratio, width, results: [] }
      if (!isSameJson(ex, next)) {
        configData[imgId] = next
        _dirty = true
      }
    }
  }))
}

// ---------------------------------------------------------------------------
// Flush to disk
// ---------------------------------------------------------------------------
function flushToDisk() {
  if (!_dirty) return
  pruneCacheData()
  _writtenByPlugin = true
  writeJson(configPath, configData)
  writeJson(cachePath, cacheData)
  _dirty = false
  setTimeout(function() { _writtenByPlugin = false }, 300)
  console.log('[strk-img] Config written')
}

function scheduleFlush(server) {
  if (pendingFlush) clearTimeout(pendingFlush)
  pendingFlush = setTimeout(async function() {
    pendingFlush = null
    flushToDisk()
    if (server) {
      const mod = server.moduleGraph.getModuleById(configPath)
      if (mod) server.moduleGraph.invalidateModule(mod)
      server.ws.send({ type: 'full-reload' })
    }
  }, 400)
}

function inlineBuildImageSources(code) {
  let ast
  try {
    ast = parse(code, {
      sourceType: 'module',
      plugins: ['jsx', 'typescript'],
      errorRecovery: true,
      ranges: true,
    })
  } catch {
    return code
  }

  const patches = []
  const pushPatch = (start, end, text) => {
    if (typeof start !== 'number' || typeof end !== 'number') return
    if (start > end) return
    patches.push({ start, end, text })
  }

  traverse(ast, {
    JSXOpeningElement(np) {
      const attrs = np.node.attributes || []
      const getAttrNode = name =>
        attrs.find(a => a.type === 'JSXAttribute' && a.name?.name === name)
      const getAttrVal = name => {
        const a = getAttrNode(name)
        if (!a) return null
        if (a.value?.type === 'StringLiteral') return a.value.value
        if (a.value?.expression?.type === 'StringLiteral') return a.value.expression.value
        return null
      }

      const imgId = getAttrVal('data-strk-img-id')
      if (imgId) {
        const srcAttr = getAttrNode('src')
        const url = configData[imgId]?.results?.[0]?.url
        if (srcAttr?.value?.type === 'StringLiteral' && url) {
          pushPatch(srcAttr.value.start, srcAttr.value.end, JSON.stringify(url))
        }
      }

      const bgId = getAttrVal('data-strk-bg-id')
      if (bgId) {
        const bgEntry = configData[bgId]
        const url = buildSharpUrl(bgEntry?.results?.[0]?.url, bgEntry?.width, 2)
        if (!url) return
        const styleAttr = getAttrNode('style')
        const urlExpr = JSON.stringify('url(' + url + ')')
        const mergedStyleExprFromRaw = raw =>
          `{ ...(${raw}), backgroundImage: ${urlExpr}, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 1 }`
        if (styleAttr?.value?.type === 'JSXExpressionContainer') {
          const raw = code.slice(styleAttr.value.expression.start, styleAttr.value.expression.end)
          const mergedAttr = `style={${mergedStyleExprFromRaw(raw)}}`
          pushPatch(styleAttr.start, styleAttr.end, mergedAttr)
        } else if (styleAttr) {
          const replacedAttr = `style={{ backgroundImage: ${urlExpr}, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 1 }}`
          pushPatch(styleAttr.start, styleAttr.end, replacedAttr)
        } else {
          const styleExpr = `{{ backgroundImage: ${urlExpr}, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 1 }}`
          const insertPos = np.node.selfClosing ? np.node.end - 2 : np.node.end - 1
          pushPatch(insertPos, insertPos, ` style=${styleExpr}`)
        }
      }
    },
  })

  if (!patches.length) return code
  patches.sort((a, b) => b.start - a.start)
  let out = code
  for (const p of patches) {
    out = out.slice(0, p.start) + p.text + out.slice(p.end)
  }
  return out
}

// ---------------------------------------------------------------------------
// Plugin export
// ---------------------------------------------------------------------------
export default function strkImgPlugin() {
  let server = null

  return {
    name: 'vite-plugin-strk-img',
    enforce: 'pre',

    // config() hook runs first and gives us the resolved Vite root
    config(cfg) {
      const root = cfg.root ? path.resolve(cfg.root) : process.cwd()
      loadEnvFile(root)
    },

    configResolved(rc) {
      _isBuild = rc.command === 'build'
    },

    buildStart() {
      configPath = path.resolve(process.cwd(), 'src', CONFIG_FILENAME)
      cachePath  = path.resolve(process.cwd(), CACHE_FILENAME)
      configData = readJson(configPath)
      cacheData  = normalizeCacheData(readJson(cachePath))
      _dirty = false

      const key = process.env.UNSPLASH_ACCESS_KEY
      const keyStatus = (key && key !== 'your_key_here')
        ? ('set (' + key.slice(0, 8) + '...)')
        : 'NOT SET -- add UNSPLASH_ACCESS_KEY to .env'
      console.log('[strk-img] Ready. UNSPLASH_ACCESS_KEY: ' + keyStatus)
    },

    async transform(code, id) {
      if (!/\.(jsx|tsx)$/.test(id))     return null
      if (id.includes(CONFIG_FILENAME)) return null
      if (id.includes(CACHE_FILENAME))  return null

      const entries = extractStrkEntries(code)
      if (!entries.length) return null

      await processEntries(entries)
      if (_dirty) scheduleFlush(server)
      if (_isBuild) {
        const transformed = inlineBuildImageSources(code)
        if (transformed !== code) return { code: transformed, map: null }
      }
      return null
    },

    async buildEnd() {
      if (pendingFlush) { clearTimeout(pendingFlush); pendingFlush = null }
      flushToDisk()
    },

    closeBundle() {
      flushToDisk()
    },

    configureServer(s) {
      server = s
      s.watcher.add(configPath)
    },

    handleHotUpdate({ file }) {
      if (file.includes(CONFIG_FILENAME) && _writtenByPlugin) {
        return []
      }
    },
  }
}
