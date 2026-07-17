import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
          Project Ready
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed">
          Your new React application has been successfully initialized. I'm ready to help you build something amazing!
        </p>
        <div className="pt-4 grid grid-cols-2 gap-4 text-sm font-medium">
          <div className="p-3 bg-slate-50 rounded-lg text-slate-700">
            Vite + React
          </div>
          <div className="p-3 bg-slate-50 rounded-lg text-slate-700">
            Tailwind CSS
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
