import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import { Check } from 'lucide-react';
import strkImgConfig from '@/strk-img-config.json';

const cameras = [
  {
    imgId: 'cam-x1pro-img-aa11',
    labelId: 'cam-label-1',
    name: 'Lumora X1 Pro',
    tagline: 'The Ultimate Flagship',
    price: '$2,999',
    badge: 'Best Seller',
    description: 'Designed for professionals who demand the absolute best. The X1 Pro combines a 100MP sensor with 8K video, dual card slots, and a magnesium-alloy body built to last a lifetime.',
    highlights: ['100MP Full-Frame BSI-CMOS', '8K RAW / 4K 120fps Video', '30 fps Burst with AI Tracking', 'Dual CFexpress Card Slots', '8-Stop In-Body Stabilization', 'IPX6 Weather Sealing'],
    imgQuery: '[cam-label-1]',
    imgLabel: 'Professional mirrorless camera flagship',
  },
  {
    imgId: 'cam-x1-img-bb22',
    labelId: 'cam-label-2',
    name: 'Lumora X1',
    tagline: 'Pro Performance, Refined',
    price: '$1,799',
    badge: null,
    description: 'The X1 delivers flagship-class image quality in a lighter, more accessible package. Perfect for photographers stepping up to full-frame for the first time.',
    highlights: ['61MP Full-Frame Sensor', '4K 60fps Video', '20 fps Burst Speed', 'Single CFexpress Slot', '5-Stop In-Body Stabilization', 'IPX5 Weather Sealing'],
    imgQuery: '[cam-label-2]',
    imgLabel: 'Mirrorless camera full frame',
  },
  {
    imgId: 'cam-m5-img-cc33',
    labelId: 'cam-label-3',
    name: 'Lumora M5',
    tagline: 'Compact. Capable. Everywhere.',
    price: '$999',
    badge: 'New',
    description: 'The M5 is the camera you take everywhere. Compact APS-C body, fast autofocus, and a flip-out screen make it ideal for travel, vlogging, and everyday shooting.',
    highlights: ['26MP APS-C Sensor', '4K 30fps Video', '15 fps Burst Speed', 'SD Card Slot', '3-Stop Electronic Stabilization', 'Splash Resistant'],
    imgQuery: '[cam-label-3]',
    imgLabel: 'Compact mirrorless camera travel',
  },
];

const comparisonRows = [
  { label: 'Sensor Resolution', x1pro: '100MP', x1: '61MP', m5: '26MP' },
  { label: 'Sensor Size', x1pro: 'Full-Frame', x1: 'Full-Frame', m5: 'APS-C' },
  { label: 'Max Video', x1pro: '8K RAW', x1: '4K 60fps', m5: '4K 30fps' },
  { label: 'Burst Speed', x1pro: '30 fps', x1: '20 fps', m5: '15 fps' },
  { label: 'Stabilization', x1pro: '8-Stop IBIS', x1: '5-Stop IBIS', m5: '3-Stop E-IS' },
  { label: 'Weather Sealing', x1pro: 'IPX6', x1: 'IPX5', m5: 'Splash Resistant' },
  { label: 'Battery Life', x1pro: '~1,200 shots', x1: '~900 shots', m5: '~600 shots' },
  { label: 'Weight', x1pro: '745 g', x1: '650 g', m5: '395 g' },
  { label: 'Price', x1pro: '$2,999', x1: '$1,799', m5: '$999' },
];

export default function Cameras() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* ── Page Hero ── */}
      <section className="bg-zinc-950 pt-16 pb-20 px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-amber-400 mb-3">Our Lineup</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Find Your Perfect Camera</h1>
        <p className="text-zinc-400 max-w-xl mx-auto">
          Three cameras. One vision. Whether you're a working professional or an enthusiastic beginner, there's a Lumora built for you.
        </p>
      </section>

      {/* ── Camera Cards ── */}
      <section className="bg-zinc-950 pb-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          {cameras.map((cam, i) => (
            <div
              key={cam.name}
              className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 relative">
                {cam.badge && (
                  <span className="absolute top-4 left-4 z-10 bg-amber-400 text-zinc-950 text-xs font-bold px-3 py-1 rounded-full">
                    {cam.badge}
                  </span>
                )}
                <span id={cam.labelId} className="hidden">{cam.imgLabel}</span>
                <div className="overflow-hidden rounded-2xl bg-zinc-800">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cam.name}
                    className="w-full h-72 md:h-96 object-cover"
                    data-strk-img-id={cam.imgId}
                    data-strk-img={cam.imgQuery}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <p className="text-xs uppercase tracking-widest text-amber-400 mb-2">{cam.tagline}</p>
                <h2 className="text-3xl font-bold text-white mb-3">{cam.name}</h2>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">{cam.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                  {cam.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-zinc-300">
                      <Check className="w-4 h-4 text-amber-400 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-white">{cam.price}</span>
                  <Link
                    to="/specs"
                    className="bg-amber-400 text-zinc-950 font-semibold rounded-full px-6 py-2.5 text-sm hover:bg-amber-300 transition-colors"
                  >
                    View Full Specs
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="bg-zinc-900 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-amber-400 mb-3">Side by Side</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Compare Models</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-700">
                  <th className="text-left py-4 px-4 text-zinc-400 font-normal w-1/4">Feature</th>
                  <th className="py-4 px-4 text-white font-semibold text-center">X1 Pro</th>
                  <th className="py-4 px-4 text-white font-semibold text-center">X1</th>
                  <th className="py-4 px-4 text-white font-semibold text-center">M5</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(({ label, x1pro, x1, m5 }, i) => (
                  <tr key={label} className={`border-b border-zinc-800 ${i % 2 === 0 ? 'bg-zinc-900' : 'bg-zinc-800/40'}`}>
                    <td className="py-3.5 px-4 text-zinc-400">{label}</td>
                    <td className="py-3.5 px-4 text-white text-center font-medium">{x1pro}</td>
                    <td className="py-3.5 px-4 text-zinc-300 text-center">{x1}</td>
                    <td className="py-3.5 px-4 text-zinc-300 text-center">{m5}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-zinc-950 py-20 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Not sure which to choose?</h2>
        <p className="text-zinc-400 mb-8 max-w-md mx-auto">Check out the full technical specifications or browse the gallery to see what each camera can do.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/specs" className="bg-amber-400 text-zinc-950 font-semibold rounded-full px-8 py-3 hover:bg-amber-300 transition-colors">
            Full Specifications
          </Link>
          <Link to="/gallery" className="border border-zinc-600 text-white rounded-full px-8 py-3 hover:border-amber-400 transition-colors">
            Browse Gallery
          </Link>
        </div>
      </section>
    </div>
  );
}
