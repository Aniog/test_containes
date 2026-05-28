import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const fullSpecs = [
  { category: 'Imaging', rows: [
    { label: 'Sensor',            x1pro: '100MP Full-Frame BSI-CMOS', x1: '61MP Full-Frame BSI-CMOS', m5: '26MP APS-C CMOS' },
    { label: 'ISO Range',         x1pro: '64 – 102,400',              x1: '100 – 51,200',             m5: '100 – 25,600' },
    { label: 'Shutter Speed',     x1pro: '1/8000s – 30s',             x1: '1/8000s – 30s',            m5: '1/4000s – 30s' },
    { label: 'RAW Format',        x1pro: 'Uncompressed / Lossless',   x1: 'Lossless Compressed',      m5: 'Compressed' },
  ]},
  { category: 'Autofocus', rows: [
    { label: 'AF Points',         x1pro: '1,053 Phase-Detect',        x1: '759 Phase-Detect',         m5: '425 Phase-Detect' },
    { label: 'AF Speed',          x1pro: '0.03 sec',                  x1: '0.05 sec',                 m5: '0.08 sec' },
    { label: 'Subject Tracking',  x1pro: 'AI (Human, Animal, Vehicle)', x1: 'AI (Human, Animal)',     m5: 'Human & Animal' },
    { label: 'Eye AF',            x1pro: true,                        x1: true,                       m5: true },
  ]},
  { category: 'Video', rows: [
    { label: 'Max Resolution',    x1pro: '8K 30fps RAW',              x1: '4K 60fps',                 m5: '4K 30fps' },
    { label: 'Slow Motion',       x1pro: '4K 120fps / 1080p 240fps',  x1: '1080p 120fps',             m5: '1080p 60fps' },
    { label: 'Log Profile',       x1pro: 'L-Log3 / HLG',             x1: 'L-Log / HLG',              m5: 'HLG' },
    { label: 'External Recording',x1pro: '12-bit RAW via HDMI',       x1: '10-bit via HDMI',          m5: '8-bit via HDMI' },
  ]},
  { category: 'Performance', rows: [
    { label: 'Burst Speed',       x1pro: '30 fps (electronic)',       x1: '20 fps (electronic)',      m5: '15 fps (electronic)' },
    { label: 'Buffer Depth',      x1pro: '200+ RAW frames',           x1: '100 RAW frames',           m5: '50 RAW frames' },
    { label: 'Stabilization',     x1pro: '8-Stop IBIS',               x1: '5-Stop IBIS',              m5: '3-Stop E-IS' },
    { label: 'Processor',         x1pro: 'Lumora Helio X2 (Dual)',    x1: 'Lumora Helio X1',          m5: 'Lumora Helio M1' },
  ]},
  { category: 'Connectivity & Build', rows: [
    { label: 'Card Slots',        x1pro: 'Dual CFexpress Type B',     x1: '1× CFexpress + 1× SD',     m5: '1× SD UHS-II' },
    { label: 'Ports',             x1pro: 'USB-C 3.2, HDMI A, 3.5mm', x1: 'USB-C 3.1, HDMI A, 3.5mm', m5: 'USB-C 2.0, Micro HDMI' },
    { label: 'Wireless',          x1pro: 'Wi-Fi 6 + Bluetooth 5.2',  x1: 'Wi-Fi 5 + Bluetooth 5.0',  m5: 'Wi-Fi 5 + Bluetooth 4.2' },
    { label: 'Weather Sealing',   x1pro: 'IPX6',                      x1: 'IPX5',                     m5: 'Splash Resistant' },
    { label: 'Body Material',     x1pro: 'Magnesium Alloy',           x1: 'Magnesium Alloy',          m5: 'Polycarbonate' },
    { label: 'Weight',            x1pro: '745 g',                     x1: '650 g',                    m5: '395 g' },
    { label: 'Battery Life',      x1pro: '~1,200 shots',              x1: '~900 shots',               m5: '~600 shots' },
  ]},
];

const pricingCards = [
  {
    name: 'Lumora M5',
    price: '$999',
    tagline: 'For the everyday adventurer',
    features: ['26MP APS-C Sensor', '4K 30fps Video', 'AI Autofocus', 'Splash Resistant', 'Compact & Lightweight'],
    cta: 'Buy M5',
    highlight: false,
  },
  {
    name: 'Lumora X1',
    price: '$1,799',
    tagline: 'For the dedicated photographer',
    features: ['61MP Full-Frame Sensor', '4K 60fps Video', '759 AF Points', 'IPX5 Weather Sealed', '5-Stop IBIS'],
    cta: 'Buy X1',
    highlight: false,
  },
  {
    name: 'Lumora X1 Pro',
    price: '$2,999',
    tagline: 'For the uncompromising professional',
    features: ['100MP Full-Frame Sensor', '8K RAW Video', '1,053 AF Points', 'IPX6 Weather Sealed', '8-Stop IBIS', 'Dual CFexpress Slots'],
    cta: 'Buy X1 Pro',
    highlight: true,
  },
];

function CellValue({ val }) {
  if (val === true)  return <Check className="w-4 h-4 text-amber-400 mx-auto" />;
  if (val === false) return <X className="w-4 h-4 text-zinc-600 mx-auto" />;
  return <span>{val}</span>;
}

export default function Specs() {
  return (
    <div>
      {/* ── Page Hero ── */}
      <section className="bg-zinc-950 pt-16 pb-20 px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-amber-400 mb-3">Under the Hood</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Technical Specifications</h1>
        <p className="text-zinc-400 max-w-xl mx-auto">
          Every number, every detail. Compare the full Lumora lineup side by side to find the right camera for your workflow.
        </p>
      </section>

      {/* ── Full Specs Table ── */}
      <section className="bg-zinc-950 pb-24 px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          {fullSpecs.map(({ category, rows }) => (
            <div key={category} className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-800 bg-zinc-800/50">
                <h3 className="text-white font-semibold">{category}</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="text-left py-3 px-6 text-zinc-500 font-normal w-1/4">Spec</th>
                      <th className="py-3 px-4 text-amber-400 font-semibold text-center">X1 Pro</th>
                      <th className="py-3 px-4 text-zinc-300 font-semibold text-center">X1</th>
                      <th className="py-3 px-4 text-zinc-300 font-semibold text-center">M5</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map(({ label, x1pro, x1, m5 }, i) => (
                      <tr key={label} className={`border-b border-zinc-800 last:border-0 ${i % 2 === 1 ? 'bg-zinc-800/30' : ''}`}>
                        <td className="py-3 px-6 text-zinc-400">{label}</td>
                        <td className="py-3 px-4 text-white text-center font-medium"><CellValue val={x1pro} /></td>
                        <td className="py-3 px-4 text-zinc-300 text-center"><CellValue val={x1} /></td>
                        <td className="py-3 px-4 text-zinc-300 text-center"><CellValue val={m5} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pricing Cards ── */}
      <section className="bg-zinc-900 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-amber-400 mb-3">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Choose Your Camera</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingCards.map(({ name, price, tagline, features, cta, highlight }) => (
              <div
                key={name}
                className={`rounded-2xl p-8 flex flex-col gap-5 border ${
                  highlight
                    ? 'bg-zinc-800 border-amber-400/60 ring-1 ring-amber-400/30'
                    : 'bg-zinc-900 border-zinc-800'
                }`}
              >
                {highlight && (
                  <span className="self-start bg-amber-400 text-zinc-950 text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div>
                  <h3 className="text-white font-bold text-xl">{name}</h3>
                  <p className="text-zinc-400 text-sm mt-1">{tagline}</p>
                </div>
                <p className="text-3xl font-bold text-white">{price}</p>
                <ul className="flex flex-col gap-2 flex-1">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-zinc-300">
                      <Check className="w-4 h-4 text-amber-400 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/cameras"
                  className={`text-center rounded-full py-2.5 text-sm font-semibold transition-colors ${
                    highlight
                      ? 'bg-amber-400 text-zinc-950 hover:bg-amber-300'
                      : 'border border-zinc-600 text-white hover:border-amber-400'
                  }`}
                >
                  {cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-zinc-950 py-20 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Still have questions?</h2>
        <p className="text-zinc-400 mb-8 max-w-md mx-auto">
          Browse the camera lineup for detailed descriptions, or visit the gallery to see real-world results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/cameras" className="bg-amber-400 text-zinc-950 font-semibold rounded-full px-8 py-3 hover:bg-amber-300 transition-colors">
            View Cameras
          </Link>
          <Link to="/gallery" className="border border-zinc-600 text-white rounded-full px-8 py-3 hover:border-amber-400 transition-colors">
            Browse Gallery
          </Link>
        </div>
      </section>
    </div>
  );
}
