import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-slate-900 text-white p-6 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Project Started</h1>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 text-center">
          <h2 className="text-3xl font-bold mb-4">Hello!</h2>
          <p className="text-slate-600 mb-6">
            The application is ready for your specific requirements. What should we build next?
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-opacity-90 font-medium transition-all">
              Add Features
            </button>
            <button className="bg-slate-100 text-slate-900 px-6 py-2 rounded-lg hover:bg-slate-200 font-medium transition-all">
              Read Docs
            </button>
          </div>
        </div>
      </main>

      <footer className="mt-auto py-8 text-center text-slate-500 text-sm">
        <p>© 2026 My Project. Built with Strk.</p>
      </footer>
    </div>
  )
}

export default App
