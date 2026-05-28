const specs = [
  { label: 'Sensor', value: '100MP Full-Frame BSI-CMOS' },
  { label: 'ISO Range', value: '64 – 102,400 (expandable)' },
  { label: 'Autofocus Points', value: '1,053 Phase-Detect Points' },
  { label: 'Burst Speed', value: '30 fps (electronic shutter)' },
  { label: 'Video', value: '8K RAW / 4K 120fps' },
  { label: 'Stabilization', value: '8-stop In-Body (IBIS)' },
  { label: 'Battery Life', value: '~1,200 shots per charge' },
  { label: 'Weather Sealing', value: 'IPX6 Dust & Moisture Resistant' },
  { label: 'Weight', value: '745 g (body only)' },
  { label: 'Mount', value: 'Lumora L-Mount' },
];

export default function Specs() {
  return (
    <section id="specs" className="bg-zinc-950 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-amber-400 mb-3">Under the Hood</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Technical Specifications
          </h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
          {specs.map(({ label, value }, i) => (
            <div
              key={label}
              className={`flex items-center justify-between px-6 py-4 ${
                i !== specs.length - 1 ? 'border-b border-zinc-800' : ''
              }`}
            >
              <span className="text-zinc-400 text-sm">{label}</span>
              <span className="text-white text-sm font-medium text-right">{value}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-zinc-400 mb-6">Ready to elevate your photography?</p>
          <a
            href="#"
            className="inline-block bg-amber-400 text-zinc-950 font-semibold rounded-full px-10 py-3 hover:bg-amber-300 transition-colors"
          >
            Order the Lumora X1 — $2,499
          </a>
        </div>
      </div>
    </section>
  );
}
