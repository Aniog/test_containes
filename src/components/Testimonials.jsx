const stats = [
  { value: '500K+', label: 'Websites Created' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '3.2s', label: 'Avg. Build Time' },
  { value: '150+', label: 'Countries Served' },
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Founder, Bloom Studio',
    avatar: 'SC',
    quote:
      'AI Site completely transformed how I launch client projects. What used to take weeks now takes an afternoon. The AI-generated designs are genuinely impressive.',
    color: 'from-violet-500 to-purple-600',
  },
  {
    name: 'Marcus Rivera',
    role: 'E-commerce Director, NovaTech',
    avatar: 'MR',
    quote:
      'Our conversion rate jumped 40% after switching to AI Site. The AI optimization suggestions are spot-on and the analytics dashboard is incredibly insightful.',
    color: 'from-indigo-500 to-blue-600',
  },
  {
    name: 'Priya Nair',
    role: 'Marketing Lead, GreenLeaf Co.',
    avatar: 'PN',
    quote:
      'I was skeptical at first, but AI Site blew me away. The content it generates sounds exactly like our brand voice. It\'s like having a full design team on demand.',
    color: 'from-emerald-500 to-teal-600',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                {value}
              </div>
              <div className="text-gray-400 text-sm">{label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Loved by builders worldwide
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Join hundreds of thousands of creators, entrepreneurs, and businesses who trust AI Site.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, avatar, quote, color }) => (
            <div
              key={name}
              className="bg-gray-900 border border-white/10 rounded-2xl p-6 flex flex-col gap-4"
            >
              <p className="text-gray-300 text-sm leading-relaxed flex-1">"{quote}"</p>
              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                >
                  {avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{name}</div>
                  <div className="text-gray-500 text-xs">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
