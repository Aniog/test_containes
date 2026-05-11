const facts = [
  {
    emoji: '🐙',
    fact: 'Octopuses have three hearts, blue blood, and can change color in milliseconds — all while being incredibly intelligent problem-solvers.',
    label: 'Octopus',
  },
  {
    emoji: '🦋',
    fact: 'A butterfly tastes with its feet. Their taste sensors are located in their tarsi, allowing them to detect food just by landing on it.',
    label: 'Butterfly',
  },
  {
    emoji: '🐋',
    fact: 'Blue whales are the largest animals ever known to have lived on Earth. Their hearts alone weigh as much as a small car.',
    label: 'Blue Whale',
  },
  {
    emoji: '🦜',
    fact: 'African grey parrots can learn over 1,000 words and understand concepts like shape, color, and number — rivaling the intelligence of a 5-year-old child.',
    label: 'Parrot',
  },
  {
    emoji: '🐝',
    fact: 'Honeybees can recognize human faces. They use the same "configural processing" technique that humans use to distinguish one face from another.',
    label: 'Honeybee',
  },
  {
    emoji: '🦈',
    fact: 'Sharks are older than trees. Sharks have existed for over 450 million years, while trees only appeared about 350 million years ago.',
    label: 'Shark',
  },
]

export default function FunFacts() {
  return (
    <section id="facts" className="py-24 bg-green-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm mb-3">
            Did You Know?
          </p>
          <h2 className="font-display text-white text-4xl md:text-5xl font-bold mb-4">
            Amazing Animal Facts
          </h2>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            The animal kingdom is full of surprises. Here are some mind-blowing facts that will change how you see wildlife.
          </p>
        </div>

        {/* Facts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-colors duration-200"
            >
              <div className="text-4xl mb-4">{item.emoji}</div>
              <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2 block">
                {item.label}
              </span>
              <p className="text-green-100 text-sm leading-relaxed">{item.fact}</p>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-16">
          {[
            { number: '8.7M', label: 'Species on Earth' },
            { number: '1M+', label: 'Threatened Species' },
            { number: '70%', label: 'Ocean Coverage' },
            { number: '500+', label: 'New Species Found Yearly' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                {stat.number}
              </div>
              <div className="text-green-200 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
