const features = [
  {
    icon: '🔥',
    title: 'Wood-Fired Oven',
    desc: 'Our 900°F oak-wood oven gives every crust that perfect char and smoky depth.',
  },
  {
    icon: '🌿',
    title: 'Fresh Ingredients',
    desc: 'Locally sourced produce, imported Italian tomatoes, and hand-pulled mozzarella.',
  },
  {
    icon: '🍞',
    title: '48-Hour Dough',
    desc: 'Slow cold-fermented dough for a light, airy crust with incredible flavor.',
  },
  {
    icon: '❤️',
    title: 'Made with Love',
    desc: 'Every pizza is hand-stretched and assembled to order — never rushed, always perfect.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 px-6 bg-[#FFF8F0]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#E67E22] font-semibold uppercase tracking-widest text-sm mb-3">Why We're Different</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            The Rossi Difference
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-6 shadow-md text-center hover:shadow-lg transition">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-[#1A1A1A] font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-[#6B5B4E] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
