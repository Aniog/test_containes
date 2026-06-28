import './App.css'

function App() {
  return (
    <main className="root-shell">
      <section className="root-card" aria-labelledby="root-title">
        <p className="root-eyebrow">Strikingly AI</p>
        <h1 id="root-title" className="root-title">
          Build faster with Strikingly AI
        </h1>
        <p className="root-description">
          Browse our generator directory to find the right starting point, or jump
          straight into the AI site builder.
        </p>
        <div className="root-actions">
          <a className="root-button root-button-primary" href="/generators">
            Browse generators
          </a>
          <a className="root-button root-button-secondary" href="/s/ai_site_builder">
            Start with AI builder
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
