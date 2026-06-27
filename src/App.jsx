import './App.css'

/**
 * This project's primary page is the static `/generators` hub rendered
 * directly from `index.html` (a fully self-contained HTML file with inline
 * CSS and JS). That static page is what the user sees at `/` and at
 * `/generators`. React is not used to render the hub.
 *
 * This `App` component exists for compatibility with the project's
 * React/Vite scaffolding only. It is not mounted by the current
 * `index.html`, but is retained so that any tooling that imports it
 * continues to work.
 */
function App() {
  return (
    <main className="app-loading-shell">
      <div className="app-loading-content" role="status" aria-live="polite">
        <p className="app-loading-text">
          The Strikingly AI Generators hub is rendered as static HTML from
          index.html.
        </p>
      </div>
    </main>
  )
}

export default App
