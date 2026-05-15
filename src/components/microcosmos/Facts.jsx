const facts = [
  {
    number: '01',
    title: 'Tardigrades',
    body: 'These microscopic "water bears" can survive in the vacuum of space, extreme radiation, and temperatures from -272°C to 150°C.',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=700&q=80&fit=crop',
  },
  {
    number: '02',
    title: 'Snowflake Symmetry',
    body: 'Every snowflake has a unique hexagonal structure. The branching pattern is determined by the exact temperature and humidity at each moment of growth.',
    image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=700&q=80&fit=crop',
  },
  {
    number: '03',
    title: 'Gut Microbiome',
    body: 'Your gut contains over 100 trillion microorganisms — more than 10 times the number of cells in your entire body — forming a complex ecosystem.',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=700&q=80&fit=crop',
  },
];

export default function Facts() {
  return (
    <section className="py-24 px-6 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-violet-400 text-sm font-medium tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Did You Know?
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Astonishing Micro-Facts
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facts.map((fact) => (
            <div
              key={fact.number}
              className="group relative overflow-hidden rounded-3xl border border-white/10 hover:border-violet-500/40 transition-all duration-300 bg-white/3"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={fact.image}
                  alt={fact.title}
                  className="w-full h-full object-cover img-zoom opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-7">
                <span
                  className="text-5xl font-bold text-white/10 select-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {fact.number}
                </span>
                <h3
                  className="text-xl font-bold text-white mt-2 mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {fact.title}
                </h3>
                <p
                  className="text-white/60 text-sm leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {fact.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
