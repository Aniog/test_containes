import './App.css'

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
          Welcome to Your App
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          This is your new project. Start building something amazing by editing the source files.
        </p>
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <a
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors"
          >
            React Docs
          </a>
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors"
          >
            Tailwind CSS
          </a>
        </div>
      </div>
    </main>
  )
}

export default App
