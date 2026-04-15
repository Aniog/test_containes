const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO at NovaTech',
    avatar: 'SC',
    color: 'from-violet-500 to-purple-600',
    quote:
      'AI Site completely transformed our customer support. We reduced response times by 80% and our team can now focus on complex issues that truly need human attention.',
  },
  {
    name: 'Marcus Rivera',
    role: 'Founder at Launchpad',
    avatar: 'MR',
    color: 'from-blue-500 to-cyan-500',
    quote:
      'I built and launched my entire product in a weekend using AI Site. The code generation and content tools are absolutely mind-blowing. This is the future.',
  },
  {
    name: 'Aisha Patel',
    role: 'Head of Marketing at Bloom',
    avatar: 'AP',
    color: 'from-emerald-500 to-teal-500',
    quote:
      'Our content output tripled without adding headcount. AI Site understands our brand voice perfectly and produces copy that actually converts.',
  },
  {
    name: 'James Okafor',
    role: 'Lead Engineer at Stackr',
    avatar: 'JO',
    color: 'from-orange-500 to-rose-500',
    quote:
      "The API is incredibly well-designed. Integration took less than an hour and the documentation is the best I've seen. Highly recommend to any dev team.",
  },
  {
    name: 'Lena Müller',
    role: 'Product Manager at Finova',
    avatar: 'LM',
    color: 'from-pink-500 to-violet-500',
    quote:
      "AI Site's analytics features gave us insights we never had before. We discovered user patterns that led to a 40% increase in retention.",
  },
  {
    name: 'Tom Nakamura',
    role: 'CEO at Orbit Labs',
    avatar: 'TN',
    color: 'from-indigo-500 to-blue-500',
    quote:
      'Switching to AI Site was the best decision we made this year. The ROI was visible within the first month. Our whole team loves it.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Loved by{' '}
            <span className="gradient-text">thousands of teams</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            See what builders, marketers, and engineers are saying about AI Site.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] rounded-2xl p-7 transition-all duration-300 card-glow flex flex-col gap-5"
            >
              <p className="text-slate-300 text-sm leading-relaxed flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
