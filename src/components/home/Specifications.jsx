const specs = [
  {
    category: 'Double Folding Machine',
    rows: [
      { spec: 'Bending Length', value: '1,000 – 4,000 mm' },
      { spec: 'Max Sheet Thickness (Steel)', value: 'Up to 4 mm' },
      { spec: 'Bending Angle', value: '0° – 135°' },
      { spec: 'Control System', value: 'CNC / Touch-screen HMI' },
      { spec: 'Drive Type', value: 'Servo-electric / Hydraulic' },
      { spec: 'Back Gauge', value: 'Programmable, ±0.1 mm accuracy' },
    ],
  },
  {
    category: 'Sheet Metal Folder',
    rows: [
      { spec: 'Bending Length', value: '800 – 3,200 mm' },
      { spec: 'Max Sheet Thickness (Steel)', value: 'Up to 3 mm' },
      { spec: 'Bending Angle', value: '0° – 180°' },
      { spec: 'Clamping System', value: 'Hydraulic / Pneumatic' },
      { spec: 'Throat Depth', value: 'Up to 250 mm' },
      { spec: 'Positioning Accuracy', value: '±0.05 mm' },
    ],
  },
  {
    category: 'Metal Folding Machine',
    rows: [
      { spec: 'Bending Length', value: '600 – 6,000 mm' },
      { spec: 'Max Sheet Thickness (Steel)', value: 'Up to 6 mm' },
      { spec: 'Cycle Speed', value: 'Up to 25 bends/min' },
      { spec: 'Material Compatibility', value: 'Steel, Aluminium, Stainless, Copper' },
      { spec: 'Safety Features', value: 'Laser guarding, E-stop, CE certified' },
      { spec: 'Connectivity', value: 'Industry 4.0 / OPC-UA ready' },
    ],
  },
];

export default function Specifications() {
  return (
    <section id="specs" className="py-24 bg-steel-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Technical Data
          </span>
          <h2 className="font-serif font-bold text-steel-900 text-4xl md:text-5xl mb-4">
            Machine Specifications
          </h2>
          <p className="text-steel-500 text-lg max-w-2xl mx-auto">
            Detailed technical parameters for our core product lines. Custom
            configurations are available on request.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-16 h-1 bg-gold-500 rounded-full" />
          </div>
        </div>

        {/* Spec tables */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {specs.map((group) => (
            <div
              key={group.category}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-steel-100"
            >
              {/* Table header */}
              <div className="bg-steel-900 px-6 py-4">
                <h3 className="font-serif font-semibold text-white text-lg">
                  {group.category}
                </h3>
              </div>

              {/* Rows */}
              <div className="divide-y divide-steel-100">
                {group.rows.map((row, i) => (
                  <div
                    key={row.spec}
                    className={`flex justify-between items-start px-6 py-4 ${
                      i % 2 === 0 ? 'bg-white' : 'bg-steel-50/60'
                    }`}
                  >
                    <span className="text-steel-500 text-sm font-medium w-1/2 pr-2">
                      {row.spec}
                    </span>
                    <span className="text-steel-900 text-sm font-semibold text-right w-1/2">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="px-6 py-4 bg-gold-500/5 border-t border-gold-500/20">
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gold-600 hover:text-gold-500 text-sm font-semibold transition-colors"
                >
                  Request full datasheet →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-steel-400 text-sm mt-8">
          * Specifications may vary by model. Contact our engineering team for custom requirements.
        </p>
      </div>
    </section>
  );
}
