import './App.css'

function App() {
  return (
    <main className="app-shell">
      <div className="app-card">
        <p className="app-eyebrow">Strikingly AI</p>
        <h1 className="app-title">AI Generators Hub</h1>
        <p className="app-copy">
          Browse the full generators directory or jump straight into the AI site
          builder.
        </p>
        <div className="app-actions">
          <a className="app-button app-button--primary" href="/generators">
            Open Generators Hub
          </a>
          <a className="app-button app-button--secondary" href="/s/ai_site_builder">
            Start with AI Builder
          </a>
        </div>
      </div>
    </main>
  )
}

export default App
