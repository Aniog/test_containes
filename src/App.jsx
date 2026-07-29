import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-slate-900" />
            <span className="font-semibold text-lg">My App</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-slate-900 mb-4">
            Welcome to My App
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A clean, modern starting point built with React and Tailwind CSS.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-white text-sm font-medium hover:bg-slate-800"
            >
              Explore Features
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Learn More
            </a>
          </div>
        </section>

        <section id="features" className="max-w-5xl mx-auto px-6 py-16 border-t">
          <h2 className="text-3xl font-semibold text-slate-900 mb-8 text-center">Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Fast', desc: 'Built with Vite for instant development feedback.' },
              { title: 'Responsive', desc: 'Looks great on desktop, tablet, and mobile.' },
              { title: 'Modern', desc: 'Uses React 18 and Tailwind CSS for clean styling.' },
            ].map((f, i) => (
              <div key={i} className="rounded-xl border bg-white p-6">
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-slate-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="max-w-5xl mx-auto px-6 py-16 border-t bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">About</h2>
            <p className="text-slate-600">
              This is a minimal, production-ready template. Customize it to match your brand and start building.
            </p>
          </div>
        </section>

        <section id="contact" className="max-w-5xl mx-auto px-6 py-16 border-t">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">Get in touch</h2>
            <p className="text-slate-600 mb-6">Questions or feedback? We would love to hear from you.</p>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-white text-sm font-medium hover:bg-slate-800"
            >
              Email us
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} My App. All rights reserved.
      </footer>
    </div>
  )
}

export default App
