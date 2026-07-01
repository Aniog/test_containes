import './App.css'

function App() {
  return (
    <main className="app-loading-shell">
      <div className="app-loading-content" role="status" aria-live="polite">
        <h1 className="app-title">Welcome</h1>
        <p className="app-loading-text">
          Your application is ready. Start building your project!
        </p>
      </div>
    </main>
  )
}

export default App
