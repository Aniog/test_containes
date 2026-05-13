const facts = [
  { icon: '🌍', number: '8.7M', label: 'Estimated Species', desc: 'on Earth' },
  { icon: '🐾', number: '5,500+', label: 'Mammal Species', desc: 'documented worldwide' },
  { icon: '🦜', number: '10,000+', label: 'Bird Species', desc: 'across all continents' },
  { icon: '⚠️', number: '42,000+', label: 'Threatened Species', desc: 'on the IUCN Red List' },
]

const FactsSection = () => (
  <section className="py-20 px-4 md:px-8 bg-[#2d1f0e]">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm mb-3">By the Numbers</p>
        <h2
          className="text-3xl md:text-4xl font-bold text-[#f5f0e8]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Animal Kingdom Facts
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {facts.map((fact, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors duration-300"
          >
            <div className="text-4xl mb-4">{fact.icon}</div>
            <div className="text-4xl font-bold text-amber-400 mb-2">{fact.number}</div>
            <div className="text-[#f5f0e8] font-semibold mb-1">{fact.label}</div>
            <div className="text-[#a8a090] text-sm">{fact.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default FactsSection
