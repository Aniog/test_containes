import { Globe, Grid3x3, Navigation } from 'lucide-react';

const concepts = [
  {
    icon: Globe,
    title: 'The Celestial Sphere',
    body: 'Astronomers project the sky onto an imaginary sphere surrounding Earth. Every star, planet, and galaxy is assigned a position on this sphere, allowing us to describe locations precisely regardless of where we are on Earth.',
  },
  {
    icon: Navigation,
    title: 'Right Ascension & Declination',
    body: 'The celestial coordinate system mirrors Earth\'s latitude and longitude. Declination (Dec) measures angular distance north or south of the celestial equator. Right Ascension (RA) measures east-west position, expressed in hours, minutes, and seconds.',
  },
  {
    icon: Grid3x3,
    title: 'The 88 Constellations',
    body: 'The International Astronomical Union officially recognizes 88 constellations that tile the entire sky. Each is a defined region, not just a pattern of stars — meaning every point in the sky belongs to exactly one constellation.',
  },
];

const coordinates = [
  { label: 'Right Ascension', symbol: 'α', range: '0h – 24h', analogy: 'Longitude of the sky' },
  { label: 'Declination',     symbol: 'δ', range: '−90° – +90°', analogy: 'Latitude of the sky' },
  { label: 'Altitude',        symbol: 'Alt', range: '0° – 90°', analogy: 'Height above horizon' },
  { label: 'Azimuth',         symbol: 'Az', range: '0° – 360°', analogy: 'Compass direction' },
];

export default function ConstellationsSection() {
  return (
    <section id="constellations" className="py-20 md:py-28 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-14 space-y-3 max-w-2xl">
          <p className="font-inter text-xs uppercase tracking-widest text-aurora">Section A</p>
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-moonlight">
            Constellations & Coordinate Systems
          </h2>
          <p className="font-inter text-sm text-comet leading-relaxed">
            Before we can explore the universe, we must learn to navigate it. The celestial coordinate
            system is the GPS of the cosmos — a precise mathematical framework that lets astronomers
            pinpoint any object in the sky.
          </p>
        </div>

        {/* Concept cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {concepts.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-deep-space border border-stardust/60 rounded-xl p-6 space-y-4">
              <div className="w-9 h-9 rounded-lg bg-aurora/10 flex items-center justify-center">
                <Icon className="w-4 h-4 text-aurora" />
              </div>
              <h3 className="font-cormorant text-xl font-medium text-moonlight">{title}</h3>
              <p className="font-inter text-sm text-comet leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Coordinate table */}
        <div className="bg-deep-space border border-stardust/60 rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-stardust/40">
            <h3 className="font-cormorant text-xl font-medium text-moonlight">Key Coordinates at a Glance</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-stardust/30">
                  <th className="text-left px-6 py-3 font-inter text-xs uppercase tracking-widest text-horizon">Coordinate</th>
                  <th className="text-left px-6 py-3 font-inter text-xs uppercase tracking-widest text-horizon">Symbol</th>
                  <th className="text-left px-6 py-3 font-inter text-xs uppercase tracking-widest text-horizon">Range</th>
                  <th className="text-left px-6 py-3 font-inter text-xs uppercase tracking-widest text-horizon">Analogy</th>
                </tr>
              </thead>
              <tbody>
                {coordinates.map((row, i) => (
                  <tr key={row.label} className={i < coordinates.length - 1 ? 'border-b border-stardust/20' : ''}>
                    <td className="px-6 py-4 font-inter text-sm text-moonlight">{row.label}</td>
                    <td className="px-6 py-4 font-cormorant text-lg text-amber-star">{row.symbol}</td>
                    <td className="px-6 py-4 font-inter text-sm text-comet">{row.range}</td>
                    <td className="px-6 py-4 font-inter text-sm text-comet">{row.analogy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
