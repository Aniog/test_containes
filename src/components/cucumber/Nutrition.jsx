const stats = [
  { value: '96%', label: 'Water Content', icon: '💧' },
  { value: '16', label: 'Calories per 100g', icon: '🔥' },
  { value: '~5000', label: 'Years Cultivated', icon: '📅' },
  { value: '#1', label: 'Most Consumed Gourd', icon: '🏆' },
];

const nutrients = [
  { name: 'Vitamin K', amount: '16.4 mcg', pct: 14, desc: 'Supports bone health and blood clotting' },
  { name: 'Vitamin C', amount: '2.8 mg', pct: 5, desc: 'Boosts immunity and skin health' },
  { name: 'Potassium', amount: '147 mg', pct: 4, desc: 'Regulates blood pressure' },
  { name: 'Magnesium', amount: '13 mg', pct: 3, desc: 'Supports muscle and nerve function' },
  { name: 'Fiber', amount: '0.5 g', pct: 2, desc: 'Aids digestion and gut health' },
  { name: 'Folate', amount: '7 mcg', pct: 2, desc: 'Essential for cell growth' },
];

const NutritionBar = ({ pct }) => (
  <div className="w-full bg-cucumber-pale rounded-full h-2 mt-1">
    <div
      className="bg-cucumber rounded-full h-2 transition-all duration-700"
      style={{ width: `${Math.max(pct * 5, 8)}%` }}
    />
  </div>
);

const Nutrition = () => (
  <section id="nutrition" className="py-20 md:py-28 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="inline-block bg-cucumber-pale text-cucumber font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
          Nutritional Profile
        </span>
        <h2 className="font-black text-3xl md:text-5xl text-cucumber-dark mb-4">
          Packed with Goodness
        </h2>
        <p className="text-cucumber-muted text-lg max-w-xl mx-auto">
          Low in calories, high in hydration — cucumbers are a nutritional powerhouse
          hiding in plain sight.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-cucumber-pale rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
          >
            <div className="text-3xl mb-2">{s.icon}</div>
            <div className="font-black text-3xl text-cucumber mb-1">{s.value}</div>
            <div className="text-sm text-cucumber-muted font-semibold">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {nutrients.map((n) => (
          <div key={n.name} className="bg-cucumber-cream rounded-2xl p-6 border border-cucumber-pale">
            <div className="flex justify-between items-start mb-1">
              <span className="font-bold text-cucumber-dark">{n.name}</span>
              <span className="text-cucumber font-semibold text-sm">{n.amount}</span>
            </div>
            <NutritionBar pct={n.pct} />
            <p className="text-cucumber-muted text-sm mt-2">{n.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Nutrition;
