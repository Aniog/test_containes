const events = [
  {
    year: '1950',
    title: 'The Turing Test',
    desc: 'Alan Turing proposes a test of machine intelligence in his landmark paper "Computing Machinery and Intelligence."',
  },
  {
    year: '1956',
    title: 'Birth of AI',
    desc: 'The Dartmouth Conference coins the term "Artificial Intelligence," launching it as a formal field of research.',
  },
  {
    year: '1997',
    title: 'Deep Blue Wins',
    desc: "IBM's Deep Blue defeats world chess champion Garry Kasparov, marking a milestone in AI game-playing.",
  },
  {
    year: '2012',
    title: 'Deep Learning Breakthrough',
    desc: 'AlexNet wins ImageNet by a huge margin, igniting the modern deep learning revolution.',
  },
  {
    year: '2017',
    title: 'Transformer Architecture',
    desc: 'Google introduces the Transformer model in "Attention Is All You Need," powering today\'s LLMs.',
  },
  {
    year: '2022',
    title: 'Generative AI Goes Mainstream',
    desc: 'ChatGPT reaches 100 million users in two months, making AI accessible to everyone.',
  },
]

const Timeline = () => {
  return (
    <section id="timeline" className="py-24 px-4 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">
            History
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Milestones of AI
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            From a thought experiment to a global phenomenon — the key moments
            that shaped artificial intelligence.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

          <div className="space-y-10">
            {events.map((event, i) => (
              <div
                key={event.year}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-[#050816] z-10 mt-1" />

                {/* Content */}
                <div
                  className={`ml-14 md:ml-0 md:w-[45%] ${
                    i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-[55%]'
                  }`}
                >
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition">
                    <span className="text-blue-400 font-bold text-sm">{event.year}</span>
                    <h3 className="text-white font-semibold text-lg mt-1 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{event.desc}</p>
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

export default Timeline
