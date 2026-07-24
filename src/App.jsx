import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-semibold text-lg text-slate-900">My App</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
              Get Started
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Welcome to Your App
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            A clean starting point built with React, Tailwind, and ready for customization.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors">
              Explore Features
            </button>
            <button className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-100 transition-colors">
              Learn More
            </button>
          </div>
        </section>

        <section id="features" className="max-w-5xl mx-auto px-6 py-16 border-t">
          <h2 className="text-3xl font-semibold text-slate-900 mb-10 text-center">Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Fast Setup', desc: 'Start building immediately with a clean, modern foundation.' },
              { title: 'Responsive Design', desc: 'Looks great on desktop, tablet, and mobile devices.' },
              { title: 'Easy to Customize', desc: 'Built with Tailwind CSS for simple styling changes.' },
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-lg text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="bg-white border-t py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">Ready to Build</h2>
            <p className="text-slate-600 leading-relaxed">
              This is a professional starter template. Replace this content with your own design and functionality.
              All the essentials are in place: React, Tailwind CSS, routing support, and a clean component structure.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t bg-white py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm text-slate-500">
          Built with React + Vite + Tailwind CSS
        </div>
      </footer>
    </div>
  )
}

export default App
