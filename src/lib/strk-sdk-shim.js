/**
 * Local shim for @strikingly/sdk
 * Provides ImageHelper and DataClient for the NeuralBuild app.
 */

// ---------------------------------------------------------------------------
// ImageHelper
// ---------------------------------------------------------------------------
export const ImageHelper = {
  /**
   * Populate data-strk-img and data-strk-bg elements from the config.
   * @param {Object} config  - contents of strk-img-config.json
   * @param {Element} container - DOM container to search within
   */
  loadImages(config, container) {
    if (!config || !container) return

    // Handle <img data-strk-img-id="...">
    container.querySelectorAll('[data-strk-img-id]').forEach(el => {
      const id = el.getAttribute('data-strk-img-id')
      const entry = config[id]
      if (!entry) return
      const url = entry.results?.[0]?.url
      if (!url) return
      if (el.tagName === 'IMG') {
        el.src = url
        el.style.opacity = '1'
      }
    })

    // Handle elements with data-strk-bg-id (background images)
    container.querySelectorAll('[data-strk-bg-id]').forEach(el => {
      const id = el.getAttribute('data-strk-bg-id')
      const entry = config[id]
      if (!entry) return
      const url = entry.results?.[0]?.url
      if (!url) return
      el.style.backgroundImage = `url(${url})`
      el.style.backgroundSize = 'cover'
      el.style.backgroundPosition = 'center'
    })
  },
}

// ---------------------------------------------------------------------------
// DataClient — PostgREST-style query builder
// ---------------------------------------------------------------------------
export class DataClient {
  constructor(projectUrl, anonKey) {
    // projectUrl may be the full form_entities URL or just the base
    this._baseUrl = projectUrl
    this._anonKey = anonKey
  }

  from(tableName) {
    return new QueryBuilder(this._baseUrl, this._anonKey, tableName)
  }
}

class QueryBuilder {
  constructor(baseUrl, anonKey, tableName) {
    this._baseUrl = baseUrl
    this._anonKey = anonKey
    this._tableName = tableName
    this._method = 'GET'
    this._body = null
    this._filters = []
    this._orderBy = null
    this._rangeFrom = null
    this._rangeTo = null
    this._isSingle = false
    this._isMaybeSingle = false
    this._selectFields = '*'
  }

  select(fields = '*') {
    this._selectFields = fields
    return this
  }

  insert(payload) {
    this._method = 'POST'
    this._body = payload
    return this
  }

  update(payload) {
    this._method = 'PATCH'
    this._body = payload
    return this
  }

  delete() {
    this._method = 'DELETE'
    return this
  }

  eq(field, value) {
    this._filters.push({ type: 'eq', field, value })
    return this
  }

  neq(field, value) {
    this._filters.push({ type: 'neq', field, value })
    return this
  }

  ilike(field, value) {
    this._filters.push({ type: 'ilike', field, value })
    return this
  }

  in(field, values) {
    this._filters.push({ type: 'in', field, value: values })
    return this
  }

  is(field, value) {
    this._filters.push({ type: 'is', field, value })
    return this
  }

  gte(field, value) {
    this._filters.push({ type: 'gte', field, value })
    return this
  }

  order(field, { ascending = true } = {}) {
    this._orderBy = { field, ascending }
    return this
  }

  range(from, to) {
    this._rangeFrom = from
    this._rangeTo = to
    return this
  }

  limit(n) {
    this._rangeTo = (this._rangeFrom ?? 0) + n - 1
    return this
  }

  single() {
    this._isSingle = true
    return this._execute()
  }

  maybeSingle() {
    this._isMaybeSingle = true
    return this._execute()
  }

  // Calling .select().single() chains — make select() return this for chaining
  // but also allow awaiting the builder directly for list queries
  then(resolve, reject) {
    return this._execute().then(resolve, reject)
  }

  async _execute() {
    try {
      // Build URL
      const url = new URL(this._baseUrl)

      // Append table name as path segment if not already in URL
      if (!url.pathname.endsWith(this._tableName)) {
        url.pathname = url.pathname.replace(/\/$/, '') + '/' + this._tableName
      }

      // Query params for GET
      if (this._method === 'GET') {
        if (this._selectFields && this._selectFields !== '*') {
          url.searchParams.set('select', this._selectFields)
        }
        this._filters.forEach(f => {
          if (f.type === 'eq') url.searchParams.set(f.field, `eq.${f.value}`)
          else if (f.type === 'neq') url.searchParams.set(f.field, `neq.${f.value}`)
          else if (f.type === 'ilike') url.searchParams.set(f.field, `ilike.${f.value}`)
          else if (f.type === 'in') url.searchParams.set(f.field, `in.(${f.value.join(',')})`)
          else if (f.type === 'is') url.searchParams.set(f.field, `is.${f.value}`)
          else if (f.type === 'gte') url.searchParams.set(f.field, `gte.${f.value}`)
        })
        if (this._orderBy) {
          url.searchParams.set('order', `${this._orderBy.field}.${this._orderBy.ascending ? 'asc' : 'desc'}`)
        }
        if (this._rangeFrom !== null) {
          url.searchParams.set('offset', String(this._rangeFrom))
          if (this._rangeTo !== null) {
            url.searchParams.set('limit', String(this._rangeTo - this._rangeFrom + 1))
          }
        }
      } else if (this._method !== 'GET') {
        // For mutations, add filters as query params
        this._filters.forEach(f => {
          if (f.type === 'eq') url.searchParams.set(f.field, `eq.${f.value}`)
        })
      }

      const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }
      if (this._anonKey && this._anonKey !== 'xx') {
        headers['Authorization'] = `Bearer ${this._anonKey}`
      }

      const fetchOpts = {
        method: this._method,
        headers,
      }
      if (this._body !== null) {
        fetchOpts.body = JSON.stringify(this._body)
      }

      const res = await fetch(url.toString(), fetchOpts)
      const json = await res.json().catch(() => null)

      if (!res.ok) {
        return { data: null, error: { message: json?.message || `HTTP ${res.status}` } }
      }

      return { data: json, error: null }
    } catch (err) {
      return { data: null, error: { message: err.message || 'Network error' } }
    }
  }
}

// Also export User and Auth stubs (not used in this app but prevents import errors)
export const User = {
  getBrowserId() {
    let id = localStorage.getItem('_strk_bid')
    if (!id) { id = crypto.randomUUID(); localStorage.setItem('_strk_bid', id) }
    return id
  },
  async upsert(data) { console.warn('[strk-sdk] User.upsert stub called', data); return { id: null } },
  async create(data) { console.warn('[strk-sdk] User.create stub called', data); return { id: null } },
  async edit(id, data) { console.warn('[strk-sdk] User.edit stub called', id, data); return {} },
}

export const Auth = {
  async signUp(c) { console.warn('[strk-sdk] Auth.signUp stub'); return { user: null, session: null, error: null } },
  async signInWithPassword(c) { console.warn('[strk-sdk] Auth.signInWithPassword stub'); return { user: null, session: null, error: null } },
  async getSession() { return { session: null, error: null } },
  async getUser() { return { user: null, error: null } },
  async signOut() { return { error: null } },
  async resetPassword(email, opts) { return { data: null, error: null } },
  async updatePassword(pw) { return { user: null, error: null } },
}

export const API = {
  async uploadImage(siteId, domain, file) { console.warn('[strk-sdk] API.uploadImage stub'); return null },
  async uploadFile(siteId, domain, file) { console.warn('[strk-sdk] API.uploadFile stub'); return null },
}
