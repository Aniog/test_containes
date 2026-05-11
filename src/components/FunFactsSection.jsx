const facts = [
  {
    emoji: '🥚',
    fact: 'A hen takes about 24–26 hours to produce a single egg.',
  },
  {
    emoji: '🌈',
    fact: 'Egg shell color depends on the breed of hen — it has no effect on taste or nutrition.',
  },
  {
    emoji: '🔬',
    fact: 'The egg yolk is one of the few natural food sources of Vitamin D.',
  },
  {
    emoji: '🌍',
    fact: 'China produces more eggs than any other country — over 400 billion per year.',
  },
  {
    emoji: '🧪',
    fact: 'Egg whites are used in wine and beer clarification to remove tannins.',
  },
  {
    emoji: '🏺',
    fact: 'Ancient Egyptians kept records of egg production as far back as 1400 BCE.',
  },
]

export default function FunFactsSection() {
  return (
    <section className="bg-amber-50 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-amber-600 uppercase tracking-[0.25em] text-xs mb-4"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Did You Know?
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#2c1a0e]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Fascinating Egg Facts
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex gap-4 items-start"
            >
              <span className="text-3xl flex-shrink-0">{item.emoji}</span>
              <p
                className="text-[#2c1a0e] text-sm leading-relaxed"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                {item.fact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
