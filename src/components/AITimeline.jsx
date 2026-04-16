const milestones = [
  {
    year: '1950',
    title: 'The Turing Test',
    description: 'Alan Turing proposes the "Imitation Game" — a test of a machine\'s ability to exhibit intelligent behavior indistinguishable from a human.',
  },
  {
    year: '1956',
    title: 'Birth of AI',
    description: 'The term "Artificial Intelligence" is coined at the Dartmouth Conference, marking the official beginning of AI as a field of study.',
  },
  {
    year: '1997',
    title: 'Deep Blue Defeats Kasparov',
    description: 'IBM\'s Deep Blue becomes the first computer to defeat a reigning world chess champion, Garry Kasparov, in a match.',
  },
  {
    year: '2011',
    title: 'Watson Wins Jeopardy!',
    description: 'IBM\'s Watson defeats Jeopardy! champions, demonstrating advanced natural language understanding and knowledge retrieval.',
  },
  {
    year: '2016',
    title: 'AlphaGo Conquers Go',
    description: 'DeepMind\'s AlphaGo defeats world champion Lee Sedol at the ancient game of Go — a milestone once thought decades away.',
  },
  {
    year: '2022',
    title: 'Generative AI Explosion',
    description: 'ChatGPT launches and reaches 100 million users in 2 months. Generative AI enters mainstream consciousness and transforms industries.',
  },
  {
    year: '2024+',
    title: 'Multimodal & Agentic AI',
    description: 'AI systems can now see, hear, speak, and act autonomously — reasoning across text, images, audio, and code to complete complex tasks.',
  },
];

const AITimeline = () => {
  return (
    <section id="timeline" className="py-24 bg-[#080c1a] px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
            A Journey Through Time
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
            History of AI
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From a thought experiment to a global revolution — the key milestones that shaped artificial intelligence.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-violet-500/50 to-transparent md:-translate-x-px" />

          <div className="space-y-10">
            {milestones.map(({ year, title, description }, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={year}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-indigo-500 border-2 border-indigo-300 -translate-x-1 md:-translate-x-1.5 mt-1.5 z-10 shadow-lg shadow-indigo-500/50" />

                  {/* Content */}
                  <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${isEven ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-all duration-300">
                      <span className="text-indigo-400 font-bold text-sm tracking-widest">{year}</span>
                      <h3 className="text-white font-semibold text-lg mt-1 mb-2">{title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITimeline;
