const steps = [
  {
    number: '01',
    title: 'Hand-Stretched Dough',
    description:
      'Our dough ferments for 48 hours using a century-old starter, giving it that signature airy crust with a slight tang.',
    emoji: '👐',
  },
  {
    number: '02',
    title: 'San Marzano Tomatoes',
    description:
      'Imported directly from the volcanic slopes of Mount Vesuvius — sweet, low-acid, and bursting with flavor.',
    emoji: '🍅',
  },
  {
    number: '03',
    title: 'Fresh Fior di Latte',
    description:
      'Creamy, hand-pulled mozzarella made fresh every morning. It melts perfectly and never gets rubbery.',
    emoji: '🧀',
  },
  {
    number: '04',
    title: 'Wood-Fired at 900°F',
    description:
      'Our oak-wood oven reaches 900°F, cooking each pizza in under 90 seconds for that perfect leopard-spotted char.',
    emoji: '🔥',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none select-none flex items-center justify-center">
        <span className="text-[40rem] leading-none">🍕</span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p
              className="text-orange-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Our Story
            </p>
            <h2
              className="text-4xl md:text-5xl font-black leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Born in Naples,
              <br />
              <span className="text-orange-400 italic">Made for You</span>
            </h2>
            <p
              className="text-stone-300 text-lg leading-relaxed mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              In 1987, Salvatore Napoli left his hometown of Naples with nothing but a
              suitcase, his grandmother's recipe book, and a dream. He opened a tiny
              pizzeria with just four tables — and a line out the door from day one.
            </p>
            <p
              className="text-stone-400 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Today, three generations later, we still use the same recipes, the same
              wood-fired oven, and the same obsessive attention to every single ingredient.
              Because great pizza isn't just food — it's a memory.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { emoji: '🏆', label: 'Best Pizza', sub: 'City Awards 2023' },
              { emoji: '🌿', label: 'Fresh Daily', sub: 'All ingredients' },
              { emoji: '🇮🇹', label: 'Imported', sub: 'Italian products' },
              { emoji: '♻️', label: 'Sustainable', sub: 'Eco packaging' },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-stone-800 rounded-2xl p-6 text-center hover:bg-stone-700 transition-colors"
              >
                <div className="text-4xl mb-3">{item.emoji}</div>
                <div
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.label}
                </div>
                <div
                  className="text-stone-400 text-sm mt-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process steps */}
        <div>
          <h3
            className="text-center text-3xl font-black mb-12 text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            How We Make It
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="bg-stone-800 rounded-2xl p-6 h-full hover:bg-stone-700 transition-colors">
                  <div className="text-4xl mb-4">{step.emoji}</div>
                  <div
                    className="text-orange-400 text-xs font-bold tracking-widest mb-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    STEP {step.number}
                  </div>
                  <h4
                    className="text-white font-bold text-lg mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {step.title}
                  </h4>
                  <p
                    className="text-stone-400 text-sm leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
