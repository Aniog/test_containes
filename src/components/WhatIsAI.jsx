import { Lightbulb, Network, Cpu } from 'lucide-react'

const cards = [
  {
    icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
    title: 'Machine Learning',
    desc: 'Systems that improve automatically through experience, finding patterns in vast datasets without being explicitly programmed.',
  },
  {
    icon: <Network className="w-6 h-6 text-blue-400" />,
    title: 'Neural Networks',
    desc: 'Inspired by the human brain, these layered architectures power deep learning and enable AI to recognize images, speech, and language.',
  },
  {
    icon: <Cpu className="w-6 h-6 text-purple-400" />,
    title: 'Generative AI',
    desc: 'Models that create new content — text, images, code, and music — by learning the underlying structure of training data.',
  },
]

const WhatIsAI = () => {
  return (
    <section id="what-is-ai" className="py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">
          The Basics
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
          What is Artificial Intelligence?
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          AI is the simulation of human intelligence in machines — enabling them
          to reason, learn, perceive, and solve problems at superhuman speed and
          scale.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 hover:bg-white/8 transition group"
          >
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition">
              {card.icon}
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">{card.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhatIsAI
