import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-semibold text-xl text-slate-900">Strikingly</span>
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
        <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">
            Build beautiful websites.<br />No code required.
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            Create stunning, professional websites in minutes. 
            Everything you need to launch your online presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors">
              Start Building Free
            </button>
            <button className="px-8 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors">
              Watch Demo
            </button>
          </div>
        </section>

        <section id="features" className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything you need</h2>
            <p className="text-slate-600">Powerful features to help you create the perfect website.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Drag & Drop", desc: "Intuitive editor that makes building websites feel effortless." },
              { title: "Mobile Ready", desc: "Every site looks great on phones, tablets, and desktops." },
              { title: "Fast Hosting", desc: "Lightning-fast global CDN included with every website." }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200">
                <div className="w-12 h-12 bg-slate-100 rounded-xl mb-6" />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="bg-white border-y">
          <div className="max-w-4xl mx-auto px-6 py-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Trusted by creators worldwide</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Join thousands of entrepreneurs, designers, and businesses who have launched 
              their websites with Strikingly.
            </p>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm">
          <p>© 2026 Strikingly. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
