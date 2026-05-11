const nutrients = [
  { label: 'Protein', value: '6g', desc: 'All 9 essential amino acids', color: 'bg-amber-400' },
  { label: 'Vitamin D', value: '41 IU', desc: 'Supports bone health', color: 'bg-yellow-400' },
  { label: 'Choline', value: '147mg', desc: 'Brain & liver function', color: 'bg-orange-400' },
  { label: 'Selenium', value: '15.4mcg', desc: 'Powerful antioxidant', color: 'bg-amber-500' },
  { label: 'Vitamin B12', value: '0.6mcg', desc: 'Nerve & blood health', color: 'bg-yellow-500' },
  { label: 'Calories', value: '78 kcal', desc: 'Low-calorie powerhouse', color: 'bg-orange-300' },
]

export default function NutritionSection() {
  return (
    <section className="bg-[#2c1a0e] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-amber-400 uppercase tracking-[0.25em] text-xs mb-4"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Health & Nutrition
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Packed with Goodness
          </h2>
          <p
            className="text-amber-100/70 mt-4 text-lg max-w-xl mx-auto"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            One large egg contains an impressive array of vitamins, minerals, and high-quality protein — all for under 80 calories.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {nutrients.map((n) => (
            <div
              key={n.label}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-5 hover:bg-white/10 transition-colors duration-200"
            >
              <div className={`${n.color} rounded-xl w-14 h-14 flex items-center justify-center flex-shrink-0`}>
                <span className="text-white font-bold text-xs text-center leading-tight px-1" style={{ fontFamily: "'Lato', sans-serif" }}>
                  {n.value}
                </span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {n.label}
                </h3>
                <p className="text-amber-100/60 text-sm" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
                  {n.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          className="text-center text-amber-100/40 text-xs mt-10"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          * Nutritional values are approximate and based on one large chicken egg (50g).
        </p>
      </div>
    </section>
  )
}
