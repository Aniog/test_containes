const milestones = [
  {
    year: '1950',
    title: 'The Turing Test',
    desc: 'Alan Turing proposes the "Imitation Game" — a test of machine intelligence that still sparks debate today.',
    color: '#6366f1',
  },
  {
    year: '1956',
    title: 'AI is Born',
    desc: 'John McCarthy coins the term "Artificial Intelligence" at the Dartmouth Conference, launching the field.',
    color: '#a855f7',
  },
  {
    year: '1997',
    title: 'Deep Blue Wins',
    desc: "IBM's Deep Blue defeats world chess champion Garry Kasparov — a landmark moment for AI capability.",
    color: '#06b6d4',
  },
  {
    year: '2011',
    title: 'Watson & Siri',
    desc: "IBM's Watson wins Jeopardy! and Apple launches Siri — AI enters everyday consumer life.",
    color: '#10b981',
  },
  {
    year: '2012',
    title: 'Deep Learning Boom',
    desc: 'AlexNet wins ImageNet by a huge margin, igniting the deep learning revolution that transforms AI.',
    color: '#f59e0b',
  },
  {
    year: '2016',
    title: 'AlphaGo Triumphs',
    desc: "DeepMind's AlphaGo defeats Go world champion Lee Sedol — a game once thought impossible for AI.",
    color: '#ec4899',
  },
  {
    year: '2020',
    title: 'GPT-3 Released',
    desc: "OpenAI's GPT-3 demonstrates unprecedented language generation, writing essays, code, and poetry.",
    color: '#8b5cf6',
  },
  {
    year: '2022',
    title: 'ChatGPT & DALL-E',
    desc: 'Generative AI goes mainstream — ChatGPT reaches 100M users in 2 months, the fastest app ever.',
    color: '#f97316',
  },
  {
    year: '2024+',
    title: 'Multimodal AI Era',
    desc: 'AI systems see, hear, speak, and reason simultaneously — ushering in a new era of general-purpose AI.',
    color: '#06b6d4',
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 px-6 section-bg-alt">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">History</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-5">
            AI <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From a thought experiment to a global revolution — the key moments that shaped artificial intelligence.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-cyan-500/50 -translate-x-1/2 hidden md:block" />

          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Card */}
                <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="glass-card card-hover rounded-2xl p-5 inline-block w-full md:max-w-sm">
                    <div
                      className="text-xs font-bold uppercase tracking-widest mb-1"
                      style={{ color: m.color }}
                    >
                      {m.year}
                    </div>
                    <h3 className="text-white font-bold text-base mb-2">{m.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-5 w-4 h-4 rounded-full border-2 border-[#05050f] z-10"
                  style={{ background: m.color, boxShadow: `0 0 12px ${m.color}` }}
                />

                {/* Spacer for opposite side */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
