const specs = [
  { category: 'Display', items: [
    { label: 'Size', value: '41mm / 45mm' },
    { label: 'Type', value: 'Always-On Retina LTPO OLED' },
    { label: 'Brightness', value: 'Up to 2000 nits' },
    { label: 'Resolution', value: '396 × 484 pixels (45mm)' },
  ]},
  { category: 'Performance', items: [
    { label: 'Chip', value: 'Apple S9 SiP' },
    { label: 'Storage', value: '64GB' },
    { label: 'RAM', value: '1GB' },
    { label: 'Neural Engine', value: '4-core' },
  ]},
  { category: 'Health & Sensors', items: [
    { label: 'Heart Rate', value: 'Optical + Electrical' },
    { label: 'Blood Oxygen', value: 'SpO₂ Sensor' },
    { label: 'ECG', value: 'Electrical Heart Sensor' },
    { label: 'Temperature', value: 'Wrist Temperature Sensor' },
  ]},
  { category: 'Connectivity', items: [
    { label: 'Cellular', value: 'LTE & UMTS' },
    { label: 'Wi-Fi', value: '802.11b/g/n 2.4GHz & 5GHz' },
    { label: 'Bluetooth', value: '5.3' },
    { label: 'NFC', value: 'Apple Pay' },
  ]},
  { category: 'Battery', items: [
    { label: 'Life', value: 'Up to 18 hours' },
    { label: 'Low Power Mode', value: 'Up to 60 hours' },
    { label: 'Charging', value: 'MagSafe USB-C' },
    { label: 'Fast Charge', value: '0–80% in 45 min' },
  ]},
  { category: 'Durability', items: [
    { label: 'Water Resistance', value: '50 metres (WR50)' },
    { label: 'IP Rating', value: 'IP6X Dust Resistant' },
    { label: 'Crack Resistance', value: 'Ion-X / Sapphire Crystal' },
    { label: 'Operating Temp', value: '0° to 35° C' },
  ]},
];

export default function Specs() {
  return (
    <section id="specs" className="bg-zinc-50 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">
            Technical Specifications
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight">
            Every detail, engineered.
          </h2>
          <p className="mt-4 text-lg text-zinc-500 max-w-xl mx-auto">
            Under the surface, Apple Watch Series 9 is packed with the most advanced technology ever in a smartwatch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((group) => (
            <div key={group.category} className="bg-white rounded-2xl p-6 border border-zinc-200">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-4">
                {group.category}
              </h3>
              <div className="space-y-0">
                {group.items.map((item, i) => (
                  <div
                    key={item.label}
                    className={`flex justify-between items-start py-3 ${i < group.items.length - 1 ? 'border-b border-zinc-100' : ''}`}
                  >
                    <span className="text-zinc-500 text-sm">{item.label}</span>
                    <span className="text-zinc-900 text-sm font-medium text-right ml-4">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
