const specs = [
  { label: 'Display', value: 'Always-On Retina LTPO3 OLED' },
  { label: 'Chip', value: 'S10 SiP with 64-bit dual-core processor' },
  { label: 'Battery Life', value: 'Up to 18 hours (36 hours Low Power Mode)' },
  { label: 'Water Resistance', value: '50 metres (WR50)' },
  { label: 'Connectivity', value: 'LTE, Wi-Fi 802.11b/g/n, Bluetooth 5.3' },
  { label: 'Health Sensors', value: 'ECG, Blood Oxygen, Heart Rate, Temperature' },
  { label: 'Safety', value: 'Crash Detection, Fall Detection, Emergency SOS' },
  { label: 'Case Materials', value: 'Aluminium, Stainless Steel, Titanium' },
];

export default function SpecsSection() {
  return (
    <section id="specs" className="bg-gray-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-500 mb-3">
            Technical Specs
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4">
            Every detail matters.
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            Engineered to the highest standards, inside and out.
          </p>
        </div>

        {/* Specs grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200">
            {specs.map((spec, i) => (
              <div
                key={i}
                className="bg-white px-8 py-6 hover:bg-gray-50 transition-colors"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
                  {spec.label}
                </p>
                <p className="text-base font-semibold text-gray-900">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
