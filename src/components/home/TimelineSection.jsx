const milestones = [
  { year: '1950', title: 'The Turing Test', desc: 'Alan Turing proposes a test of machine intelligence, asking "Can machines think?"' },
  { year: '1956', title: 'AI is Born', desc: 'The term "Artificial Intelligence" is coined at the Dartmouth Conference.' },
  { year: '1997', title: 'Deep Blue Wins', desc: "IBM's Deep Blue defeats world chess champion Garry Kasparov." },
  { year: '2011', title: 'Watson & Siri', desc: "IBM's Watson wins Jeopardy! and Apple launches Siri, bringing AI to consumers." },
  { year: '2016', title: 'AlphaGo Triumphs', desc: "DeepMind's AlphaGo defeats the world's best Go player, a milestone once thought decades away." },
  { year: '2022', title: 'Generative AI Explosion', desc: 'ChatGPT reaches 100M users in 2 months. DALL-E, Stable Diffusion, and Midjourney transform creativity.' },
  { year: '2024+', title: 'AGI on the Horizon', desc: 'Multimodal models, AI agents, and reasoning systems push toward Artificial General Intelligence.' },
];

const TimelineSection = () => {
  return (
    <section className="py-20 md:py-28 bg-ai-dark">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <p className="text-center text-xs text-ai-cyan uppercase tracking-widest font-medium mb-4">
          A Brief History
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            The AI Timeline
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-16" />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent" />

          <div className="space-y-10">
            {milestones.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 pl-14 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className={`inline-block p-5 rounded-2xl bg-ai-card border border-indigo-500/20 hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-300 text-left`}>
                    <span className="text-xs font-bold text-ai-cyan uppercase tracking-widest mb-1 block">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-semibold text-slate-100 mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-5 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-2 border-ai-dark shadow-[0_0_12px_rgba(99,102,241,0.6)] flex-shrink-0" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
