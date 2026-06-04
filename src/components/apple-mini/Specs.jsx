const specs = [
  { category: 'Chip', value: 'Apple M4 (10-core CPU, 10-core GPU)' },
  { category: 'Memory', value: '16GB, 24GB, or 64GB Unified Memory' },
  { category: 'Storage', value: '256GB, 512GB, 1TB, or 2TB SSD' },
  { category: 'Display Support', value: 'Up to 3 external displays (up to 8K)' },
  { category: 'Ports', value: '3× Thunderbolt 4, 2× USB-A, HDMI 2.1, Ethernet' },
  { category: 'Wireless', value: 'Wi-Fi 6E, Bluetooth 5.3' },
  { category: 'Dimensions', value: '12.7 cm × 12.7 cm × 5.0 cm' },
  { category: 'Weight', value: '0.67 kg' },
  { category: 'Power', value: '30W or 70W power adapter' },
  { category: 'OS', value: 'macOS Sequoia' },
];

const Specs = () => (
  <section id="specs" className="py-24 md:py-32 bg-gray-50 px-6">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">Specifications</span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 tracking-tight">
          Every detail, spec'd out
        </h2>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {specs.map((s, i) => (
          <div
            key={s.category}
            className={`flex flex-col sm:flex-row sm:items-center px-8 py-5 gap-2 ${
              i < specs.length - 1 ? 'border-b border-gray-100' : ''
            }`}
          >
            <span className="text-sm font-semibold text-gray-400 uppercase tracking-wide sm:w-48 shrink-0">
              {s.category}
            </span>
            <span className="text-gray-900 font-medium">{s.value}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Specs;
