const milestones = [
  { year: '1950', title: 'The Turing Test', desc: 'Alan Turing proposes a test of machine intelligence in "Computing Machinery and Intelligence".' },
  { year: '1956', title: 'Birth of AI', desc: 'The term "Artificial Intelligence" is coined at the Dartmouth Conference by John McCarthy.' },
  { year: '1997', title: 'Deep Blue', desc: "IBM's Deep Blue defeats world chess champion Garry Kasparov — a landmark for AI reasoning." },
  { year: '2011', title: 'IBM Watson', desc: 'Watson wins Jeopardy!, demonstrating advanced natural language understanding.' },
  { year: '2016', title: 'AlphaGo', desc: "DeepMind's AlphaGo defeats Go world champion Lee Sedol, mastering a game of immense complexity." },
  { year: '2022', title: 'Generative AI Boom', desc: 'ChatGPT launches, bringing large language models to the mainstream and sparking a global AI revolution.' },
  { year: '2024+', title: 'Multimodal AI', desc: 'AI systems now see, hear, speak, and reason across text, images, audio, and video simultaneously.' },
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">History</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">AI Through the Ages</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            From a thought experiment to a global phenomenon — the key milestones that shaped AI.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600/60 via-blue-600/40 to-transparent md:-translate-x-px" />

          <div className="space-y-10">
            {milestones.map(({ year, title, desc }, i) => (
              <div
                key={year}
                className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-purple-500 border-2 border-purple-300 -translate-x-1/2 mt-1.5 z-10 shadow-lg shadow-purple-500/50" />

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pl-10' : 'md:pr-10'}`}>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-purple-500/40 transition-all">
                    <span className="text-purple-400 text-xs font-bold uppercase tracking-widest">{year}</span>
                    <h3 className="text-white font-bold text-lg mt-1 mb-2">{title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
