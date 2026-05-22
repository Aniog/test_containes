const features = [
  {
    icon: '🌾',
    title: 'Stone-Milled Flour',
    desc: 'We source heritage grain flours from local mills, preserving nutrients and delivering unmatched depth of flavor.',
  },
  {
    icon: '⏰',
    title: 'Slow Fermentation',
    desc: 'Our sourdoughs ferment for 24–48 hours, developing complex flavors and a naturally open crumb structure.',
  },
  {
    icon: '🧈',
    title: 'Pure Butter Only',
    desc: 'Every croissant and pastry uses only high-fat European-style butter. No shortcuts, no substitutes.',
  },
  {
    icon: '🌿',
    title: 'Seasonal Ingredients',
    desc: 'We work with local farms to bring you pastries and cakes that celebrate what's fresh and in season.',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-golden font-semibold text-sm uppercase tracking-widest mb-3">
            Why We're Different
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-espresso mb-4">
            The Art of Real Baking
          </h2>
          <p className="text-brown-500 text-lg max-w-xl mx-auto">
            We never cut corners. Every ingredient, every technique, every loaf reflects our commitment to craft.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-cream rounded-2xl p-7 text-center hover:shadow-lg transition-shadow duration-300 border border-tan/30"
            >
              <div className="text-5xl mb-5">{f.icon}</div>
              <h3 className="font-serif text-xl font-bold text-espresso mb-3">{f.title}</h3>
              <p className="text-brown-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
