const tiers = [
  {
    name: 'APPLE mini',
    price: '$599',
    chip: 'M4 (10-core CPU)',
    memory: '16GB Unified Memory',
    storage: '256GB SSD',
    highlight: false,
  },
  {
    name: 'APPLE mini Pro',
    price: '$799',
    chip: 'M4 Pro (12-core CPU)',
    memory: '24GB Unified Memory',
    storage: '512GB SSD',
    highlight: true,
  },
  {
    name: 'APPLE mini Max',
    price: '$1,299',
    chip: 'M4 Max (16-core CPU)',
    memory: '64GB Unified Memory',
    storage: '1TB SSD',
    highlight: false,
  },
];

const Buy = () => (
  <section id="buy" className="py-24 md:py-32 bg-gray-950 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest">Pricing</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 tracking-tight">
          Choose your APPLE mini
        </h2>
        <p className="text-gray-400 mt-4 text-lg max-w-xl mx-auto">
          Every model is powerful. Pick the one that fits your workflow.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`rounded-2xl p-8 flex flex-col gap-6 border transition-all ${
              t.highlight
                ? 'bg-blue-600 border-blue-500 shadow-2xl shadow-blue-900/40 scale-105'
                : 'bg-gray-900 border-gray-800 hover:border-gray-700'
            }`}
          >
            {t.highlight && (
              <span className="self-start bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                Most Popular
              </span>
            )}
            <div>
              <h3 className={`text-xl font-bold ${t.highlight ? 'text-white' : 'text-white'}`}>{t.name}</h3>
              <div className={`text-4xl font-bold mt-2 ${t.highlight ? 'text-white' : 'text-blue-400'}`}>
                {t.price}
              </div>
            </div>
            <ul className="flex flex-col gap-3 text-sm">
              {[t.chip, t.memory, t.storage].map((item) => (
                <li key={item} className={`flex items-center gap-2 ${t.highlight ? 'text-blue-100' : 'text-gray-400'}`}>
                  <span className={`w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${t.highlight ? 'bg-white/20 text-white' : 'bg-blue-600/20 text-blue-400'}`}>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <button
              className={`mt-auto w-full py-3 rounded-full font-semibold text-sm transition-colors ${
                t.highlight
                  ? 'bg-white text-blue-600 hover:bg-blue-50'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Buy {t.name}
            </button>
          </div>
        ))}
      </div>

      <p className="text-center text-gray-600 text-sm mt-10">
        Free shipping · 14-day returns · 1-year warranty included
      </p>
    </div>
  </section>
);

export default Buy;
