import { Rocket, Layout, Database, Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Rocket className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold tracking-tight">Strk Agent App</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors">Documentation</a>
            <a href="#" className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors">Components</a>
            <a href="#" className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors">Support</a>
          </nav>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Welcome to Your New <span className="text-blue-600">Web Project</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
              Your development environment is ready. Start building your next big idea with React, Tailwind CSS, and shadcn/ui.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-all shadow-lg active:scale-95">
                Get Started
              </button>
              <button className="w-full sm:w-auto px-8 py-3 bg-white text-slate-900 font-bold rounded-lg border-2 border-slate-200 hover:bg-slate-50 transition-all active:scale-95">
                Explore Features
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-all group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Modern UI</h3>
              <p className="text-slate-600">Built with Tailwind CSS for rapid styling and a modern look and feel.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-all group">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Database Ready</h3>
              <p className="text-slate-600">Connect to persistent storage easily using the built-in database integration tool.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-all group">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Powered</h3>
              <p className="text-slate-600">Collaborate with our AI agent to modify and expand your application in real-time.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm">
            © 2026 Strk Agent Project. Built with passion for developers.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
