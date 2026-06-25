import './App.css'

// This project's /generators page is server-rendered directly in /index.html
// as a single static HTML document, per the project brief. React is not
// mounted on that page — the brief requires every generator card and link to
// appear in the initial HTML source, which a client-side React mount would
// break. This component is kept only as a fallback for any future route that
// chooses to mount React.
function App() {
  return (
    <main className="app-loading-shell">
      <div className="app-loading-content" role="status" aria-live="polite">
        <p className="app-loading-text">Strikingly AI Generators</p>
      </div>
    </main>
  )
}

export default App
