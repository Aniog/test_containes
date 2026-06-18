import './App.css'

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-200 text-sm mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            The Future is Here
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Artificial Intelligence
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Transforming Tomorrow
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Discover how AI is revolutionizing industries, enhancing human capabilities, 
            and shaping the future of technology. From machine learning to neural networks, 
            explore the endless possibilities of artificial intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity">
              Learn More
            </button>
            <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* What is AI Section */}
      <section className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What is Artificial Intelligence?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Artificial Intelligence (AI) is the simulation of human intelligence by machines. 
                It encompasses computer systems that can perform tasks that typically require human 
                intelligence, such as learning, reasoning, problem-solving, perception, and language understanding.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Modern AI technologies include machine learning, deep learning, natural language 
                processing, and computer vision. These innovations are transforming every industry 
                from healthcare to finance, education to entertainment.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-2xl border border-purple-500/20">
                <div className="text-4xl mb-3">🧠</div>
                <h3 className="text-white font-semibold mb-2">Machine Learning</h3>
                <p className="text-slate-400 text-sm">Systems that learn from data to improve performance</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-2xl border border-cyan-500/20">
                <div className="text-4xl mb-3">👁️</div>
                <h3 className="text-white font-semibold mb-2">Computer Vision</h3>
                <p className="text-slate-400 text-sm">Enabling machines to interpret visual information</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-pink-500/20 to-pink-600/10 rounded-2xl border border-pink-500/20">
                <div className="text-4xl mb-3">💬</div>
                <h3 className="text-white font-semibold mb-2">NLP</h3>
                <p className="text-slate-400 text-sm">Understanding and generating human language</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-2xl border border-green-500/20">
                <div className="text-4xl mb-3">🤖</div>
                <h3 className="text-white font-semibold mb-2">Robotics</h3>
                <p className="text-slate-400 text-sm">Physical AI systems interacting with the world</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">AI Applications</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
            <p className="text-slate-400 mt-4">Explore how AI is being used across different industries</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🏥', title: 'Healthcare', desc: 'Medical diagnosis, drug discovery, and personalized treatment plans' },
              { icon: '🏦', title: 'Finance', desc: 'Fraud detection, algorithmic trading, and risk assessment' },
              { icon: '🚗', title: 'Transportation', desc: 'Self-driving vehicles, traffic optimization, and logistics' },
              { icon: '🎬', title: 'Entertainment', desc: 'Content recommendations, gaming AI, and creative tools' },
              { icon: '📚', title: 'Education', desc: 'Personalized learning, automated grading, and tutoring' },
              { icon: '🛒', title: 'E-Commerce', desc: 'Product recommendations, inventory management, and customer service' }
            ].map((item, index) => (
              <div key={index} className="group p-8 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all hover:-translate-y-1">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-purple-900/50 to-cyan-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500M+', label: 'AI Patents Filed' },
              { number: '$1.8T', label: 'AI Market Value by 2030' },
              { number: '77%', label: 'Devices Use AI' },
              { number: '40%', label: 'Productivity Increase' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Explore AI?</h2>
          <p className="text-xl text-slate-300 mb-10">
            Join millions of people discovering the power of artificial intelligence. 
            Start your journey into the future of technology today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity">
              Get Started
            </button>
            <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-500">© 2026 AI Insights. Exploring the future of technology.</p>
        </div>
      </footer>
    </main>
  )
}

export default App
