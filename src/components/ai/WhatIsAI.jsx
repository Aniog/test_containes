import { Brain, Network, Zap } from 'lucide-react'

const pillars = [
  {
    icon: Brain,
    title: 'Machine Learning',
    desc: 'Systems that learn from data, identify patterns, and make decisions with minimal human intervention.',
    color: 'from-purple-500 to-violet-600',
  },
  {
    icon: Network,
    title: 'Neural Networks',
    desc: 'Architectures inspired by the human brain that power deep learning and complex pattern recognition.',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Zap,
    title: 'Natural Language',
    desc: 'AI that understands, generates, and interacts using human language — powering chatbots, translation, and more.',
    color: 'from-violet-500 to-purple-700',
  },
]

export default function WhatIsAI() {
  return (
    <section id="what-is-ai" className="py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">Understanding AI</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">What is Artificial Intelligence?</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Artificial Intelligence is the simulation of human intelligence processes by machines —
          enabling computers to learn, reason, perceive, and solve problems like never before.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {pillars.map(({ icon: Icon, title, desc, color }) => (
          <div
            key={title}
            className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-purple-500/40 hover:bg-white/8 transition-all group"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-lg`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-gray-400 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
