import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <header className="border-b border-slate-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">V</span>
            </div>
            <span className="text-xl font-bold tracking-tight">ViteApp</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600">Features</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600">Pricing</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600">About</a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </div>
        </nav>
      </header>

      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 mb-8">
              Build your next big idea <span className="text-indigo-600">faster</span>
            </h1>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
              Welcome to your new Vite-powered React application. Start editing src/App.jsx to create something amazing.
            </p>
            <div className="flex items-center justify-center gap-4">
              <button 
                onClick={() => setCount((count) => count + 1)}
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200/50"
              >
                Count is {count}
              </button>
              <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-50 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6 font-bold">1</div>
                <h3 className="text-xl font-bold mb-4">Fast Refresh</h3>
                <p className="text-slate-600">Lightning-fast hot module replacement for a smooth development experience.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6 font-bold">2</div>
                <h3 className="text-xl font-bold mb-4">Styled with Tailwind</h3>
                <p className="text-slate-600">Rapidly build modern interfaces with the world's most popular CSS framework.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6 font-bold">3</div>
                <h3 className="text-xl font-bold mb-4">React + Vite</h3>
                <p className="text-slate-600">The perfect combination of a powerful UI library and a modern build tool.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm">
          &copy; 2026 ViteApp. Created with help from Strikingly Agent.
        </div>
      </footer>
    </div>
  )
}

export default App
