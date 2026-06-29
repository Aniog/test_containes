import './App.css'

function App() {
  return (
    <main className="app-shell">
      <section className="app-card" aria-labelledby="app-title">
        <p className="app-eyebrow">Strikingly AI</p>
        <h1 id="app-title" className="app-title">
          Generators hub ready
        </h1>
        <p className="app-description">
          Browse the published generators directory or jump straight into the AI
          builder.
        </p>
        <div className="app-actions">
          <a className="app-button app-button--primary" href="/generators">
            Open AI Generators
          </a>
          <a className="app-button app-button--ghost" href="/s/ai_site_builder">
            Open AI Builder
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
