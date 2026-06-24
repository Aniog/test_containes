import './App.css'

function App() {
  return (
    <main className="app-loading-shell">
      <div className="app-loading-content" role="status" aria-live="polite">
        <div className="app-loading-spinner" aria-hidden="true" />
      </div>
    </main>
  )
}

export default App
