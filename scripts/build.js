// Static build script for the /generators hub page.
//
// The brief requires view-source: to contain every card, every link, and
// every heading. With a Vite SPA, the dev server only serves the empty
// <div id="root"> shell, so we build a fully-rendered static HTML file here
// and serve it directly.
//
// Steps:
//  1. Compile Tailwind CSS via PostCSS (catches all the utility classes used
//     in JSX and outputs a single minified CSS string).
//  2. Bundle src/App.jsx with esbuild targeting Node CJS so we can require
//     the result and render it with react-dom/server.
//  3. Render the App to a string.
//  4. Read the index.html shell, inline the CSS into <head>, and inject the
//     rendered HTML into the #root element. The vanilla JS for search /
//     show-all / FAQ accordions stays inline (already in index.html).
//  5. Write the result to dist/index.html.
//
// Run: node scripts/build.js [--watch]
// Then serve dist/ with any static server (the dev runner does this for you).

import fs from "node:fs"
import fsp from "node:fs/promises"
import path from "node:path"
import { createRequire } from "node:module"
import { fileURLToPath } from "node:url"
import { build } from "esbuild"
import postcss from "postcss"
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"
import React from "react"
import { renderToString } from "react-dom/server"

const require = createRequire(import.meta.url)

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PROJECT_ROOT = path.resolve(__dirname, "..")
const SRC_CSS = path.resolve(PROJECT_ROOT, "src/index.css")
const SRC_APP = path.resolve(PROJECT_ROOT, "src/App.jsx")
const INDEX_HTML = path.resolve(PROJECT_ROOT, "index.html")
const DIST_DIR = path.resolve(PROJECT_ROOT, "dist")
const OUT_HTML = path.resolve(DIST_DIR, "index.html")
const TMP_BUNDLE = path.resolve(PROJECT_ROOT, ".cache/ssr-bundle.cjs")

const isWatch = process.argv.includes("--watch")

function logStep(label) {
  console.log(`\n\x1b[36m[build]\x1b[0m ${label}`)
}

async function compileCss() {
  logStep("Compiling Tailwind CSS…")
  const raw = await fsp.readFile(SRC_CSS, "utf-8")
  const result = await postcss([
    tailwindcss({ config: path.resolve(PROJECT_ROOT, "tailwind.config.js") }),
    autoprefixer(),
  ]).process(raw, { from: SRC_CSS, to: "index.css" })
  return result.css
}

async function bundleApp() {
  logStep("Bundling React app for SSR…")
  await fsp.mkdir(path.dirname(TMP_BUNDLE), { recursive: true })
  await build({
    entryPoints: [SRC_APP],
    bundle: true,
    outfile: TMP_BUNDLE,
    platform: "node",
    format: "cjs",
    target: "node18",
    jsx: "automatic",
    loader: { ".js": "jsx", ".jsx": "jsx" },
    alias: {
      "@": path.resolve(PROJECT_ROOT, "src"),
    },
    define: {
      "process.env.NODE_ENV": JSON.stringify("production"),
    },
    // Suppress warnings about source map file naming; we don't ship maps.
    logLevel: "info",
    // Keep React internal CJS modules working; we render in Node, not browser.
    external: [],
  })
  // Bust require cache so re-runs pick up new code in watch mode.
  delete require.cache[TMP_BUNDLE]
  // eslint-disable-next-line no-undef
  const mod = require(TMP_BUNDLE)
  return mod.default || mod.App
}

async function buildOnce() {
  const t0 = Date.now()
  try {
    const [css, App] = await Promise.all([compileCss(), bundleApp()])

    logStep("Rendering React tree to static HTML…")
    const appHtml = renderToString(React.createElement(App))

    logStep("Assembling final index.html…")
    const shell = await fsp.readFile(INDEX_HTML, "utf-8")
    const finalHtml = shell
      .replace(
        /<style id="inline-tailwind"><\/style>/,
        `<style id="inline-tailwind">\n${css}\n</style>`,
      )
      .replace(
        /<div id="root"><!--ssr-outlet--><\/div>/,
        `<div id="root">${appHtml}</div>`,
      )

    await fsp.mkdir(DIST_DIR, { recursive: true })
    await fsp.writeFile(OUT_HTML, finalHtml, "utf-8")

    const ms = Date.now() - t0
    const kb = (Buffer.byteLength(finalHtml, "utf-8") / 1024).toFixed(1)
    console.log(
      `\n\x1b[32m[build]\x1b[0m Wrote dist/index.html (${kb} KB) in ${ms} ms`,
    )
  } catch (err) {
    console.error("\n\x1b[31m[build] FAILED\x1b[0m")
    console.error(err && err.stack ? err.stack : err)
    process.exitCode = 1
  }
}

async function main() {
  await buildOnce()
  if (isWatch) {
    console.log(
      "\n\x1b[33m[build] watch mode\x1b[0m — re-running on changes to src/** and index.html",
    )
    const watch = async (label) => {
      console.log(`[build] change: ${label} → rebuilding`)
      await buildOnce()
    }
    // Debounce file events
    let pending = null
    const debouncedWatch = (label) => {
      if (pending) clearTimeout(pending)
      pending = setTimeout(() => watch(label), 80)
    }
    fs.watch(path.resolve(PROJECT_ROOT, "src"), { recursive: true }, (_e, f) =>
      debouncedWatch(`src/${f}`),
    )
    fs.watch(INDEX_HTML, () => debouncedWatch("index.html"))
    fs.watch(path.resolve(PROJECT_ROOT, "tailwind.config.js"), () =>
      debouncedWatch("tailwind.config.js"),
    )
  }
}

main()
