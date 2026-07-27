import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-semibold text-xl text-slate-900">My App</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          </nav>
          <button className="px-4 py-2 bg-slate-900 text-white text-sm rounded-lg hover:bg-slate-800 transition-colors">
            Get Started
          </button>
        </div>
      </header>

      <main>
        <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm mb-6">
            Welcome to your new project
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">
            Build something<br />amazing today.
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            A clean, modern starting point for your next web application. 
            Customize it to match your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors">
              Start Building
            </button>
            <button className="px-8 py-3 bg-white text-slate-900 border border-slate-200 rounded-lg font-medium hover:bg-slate-50 transition-colors">
              Learn More
            </button>
          </div>
        </section>

        <section id="features" className="max-w-6xl mx-auto px-6 py-16 border-t">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything you need</h2>
            <p className="text-slate-600">A solid foundation to build upon.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Fast Setup', desc: 'Get started instantly with a pre-configured environment.' },
              { title: 'Modern Stack', desc: 'Built with React, Tailwind, and best-in-class tooling.' },
              { title: 'Ready to Scale', desc: 'Clean architecture that grows with your project.' },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="w-10 h-10 bg-slate-100 rounded-lg mb-4" />
                <h3 className="font-semibold text-lg text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="bg-white border-t border-b py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">About this project</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              This is your new web application. Edit the source files in <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm">src/</code> to 
              start building. Everything is set up and ready to go.
            </p>
          </div>
        </section>

        <section id="contact" className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to get started?</h2>
          <p className="text-slate-600 mb-8">Begin customizing this template to create your perfect application.</p>
          <button className="px-8 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors">
            Begin Now
          </button>
        </section>
      </main>

      <footer className="border-t bg-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-slate-500">
          Built with React and Tailwind CSS
        </div>
      </footer>
    </div>
  )
}

export default App
