const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO at TechFlow',
    avatar: 'SC',
    color: 'bg-violet-500',
    quote: 'AI Site completely transformed how our engineering team works. We cut development time by 40% in the first month alone. The AI code assistant is genuinely impressive.',
    stars: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'Product Manager at Nexus',
    avatar: 'MJ',
    color: 'bg-blue-500',
    quote: 'The natural language analytics feature is a game-changer. I can now get insights from our data without waiting for the data team. It\'s like having a data scientist on demand.',
    stars: 5,
  },
  {
    name: 'Priya Patel',
    role: 'Founder at LaunchPad',
    avatar: 'PP',
    color: 'bg-emerald-500',
    quote: 'As a solo founder, AI Site is like having a full team. Content creation, customer support automation, analytics — it handles everything so I can focus on growth.',
    stars: 5,
  },
  {
    name: 'David Kim',
    role: 'Head of Operations at Scale',
    avatar: 'DK',
    color: 'bg-pink-500',
    quote: 'We automated 80% of our repetitive workflows within two weeks. The ROI was immediate and the setup was surprisingly straightforward. Highly recommend.',
    stars: 5,
  },
  {
    name: 'Emma Rodriguez',
    role: 'Marketing Director at Bloom',
    avatar: 'ER',
    color: 'bg-amber-500',
    quote: 'Our content output tripled after adopting AI Site. The quality is consistently high and it understands our brand voice perfectly after just a few examples.',
    stars: 5,
  },
  {
    name: 'James Liu',
    role: 'Lead Developer at Orbit',
    avatar: 'JL',
    color: 'bg-cyan-500',
    quote: 'The API is clean, the documentation is excellent, and the AI capabilities are best-in-class. It\'s become an essential part of our tech stack.',
    stars: 5,
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-[#050816]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-pink-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Loved by teams{' '}
            <span className="gradient-text">worldwide</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Join thousands of professionals who use AI Site to work smarter every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, avatar, color, quote, stars }) => (
            <div
              key={name}
              className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 hover:border-white/15 transition-all duration-300 card-glow flex flex-col gap-4"
            >
              <StarRating count={stars} />
              <p className="text-slate-300 text-sm leading-relaxed flex-1">"{quote}"</p>
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                  {avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{name}</div>
                  <div className="text-slate-500 text-xs">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
