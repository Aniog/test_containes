import { Cpu, Database, HardDrive, Monitor, Cable, Wifi, Ruler, Package, Zap, Laptop } from 'lucide-react';

const specs = [
  { icon: Cpu,      category: 'Chip',            value: 'Apple M4 (10-core CPU, 10-core GPU)' },
  { icon: Database, category: 'Memory',           value: '16GB, 24GB, or 64GB Unified Memory' },
  { icon: HardDrive,category: 'Storage',          value: '256GB, 512GB, 1TB, or 2TB SSD' },
  { icon: Monitor,  category: 'Display Support',  value: 'Up to 3 external displays (up to 8K)' },
  { icon: Cable,    category: 'Ports',            value: '3× Thunderbolt 4, 2× USB-A, HDMI 2.1, Ethernet' },
  { icon: Wifi,     category: 'Wireless',         value: 'Wi-Fi 6E, Bluetooth 5.3' },
  { icon: Ruler,    category: 'Dimensions',       value: '12.7 cm × 12.7 cm × 5.0 cm' },
  { icon: Package,  category: 'Weight',           value: '0.67 kg' },
  { icon: Zap,      category: 'Power',            value: '30W or 70W power adapter' },
  { icon: Laptop,   category: 'OS',               value: 'macOS Sequoia' },
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
            className={`flex flex-col sm:flex-row sm:items-center px-8 py-5 gap-3 hover:bg-gray-50 transition-colors ${
              i < specs.length - 1 ? 'border-b border-gray-100' : ''
            }`}
          >
            <div className="flex items-center gap-3 sm:w-52 shrink-0">
              <span className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <s.icon className="w-4 h-4 text-blue-600" />
              </span>
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                {s.category}
              </span>
            </div>
            <span className="text-gray-900 font-medium sm:pl-2">{s.value}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Specs;
