import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MapPin, Globe, Compass } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const concepts = [
  {
    term: 'Right Ascension (RA)',
    symbol: 'α',
    desc: 'The celestial equivalent of longitude, measured eastward along the celestial equator from the vernal equinox. Expressed in hours, minutes, and seconds (0h to 24h).',
    example: 'Orion\'s Betelgeuse: RA 05h 55m 10s',
  },
  {
    term: 'Declination (Dec)',
    symbol: 'δ',
    desc: 'The celestial equivalent of latitude, measured in degrees north (+) or south (−) of the celestial equator. Ranges from −90° (south pole) to +90° (north pole).',
    example: 'Betelgeuse: Dec +07° 24\'',
  },
  {
    term: 'Celestial Equator',
    symbol: '⊕',
    desc: 'The projection of Earth\'s equator onto the celestial sphere. It divides the sky into northern and southern hemispheres, serving as the zero-point for Declination.',
    example: 'Orion\'s Belt lies near Dec 0°',
  },
  {
    term: 'Vernal Equinox',
    symbol: '♈',
    desc: 'The point where the Sun crosses the celestial equator moving northward (around March 20). This is the zero-point for Right Ascension — the "Greenwich" of the sky.',
    example: 'RA 0h 0m 0s — the origin point',
  },
];

const constellations = [
  { name: 'Ursa Major', stars: 7, season: 'Year-round (N)', notable: 'Contains the Big Dipper asterism' },
  { name: 'Orion', stars: 7, season: 'Winter', notable: 'Betelgeuse, Rigel, Orion\'s Belt' },
  { name: 'Scorpius', stars: 18, season: 'Summer', notable: 'Antares — a red supergiant' },
  { name: 'Cassiopeia', stars: 5, season: 'Year-round (N)', notable: 'W-shape, near Milky Way' },
  { name: 'Leo', stars: 9, season: 'Spring', notable: 'Regulus — a blue-white star' },
  { name: 'Cygnus', stars: 9, season: 'Summer', notable: 'Deneb — one of the most luminous stars' },
];

export default function Constellations() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef} className="bg-space-950 pt-24">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-8">
        <Link to="/knowledge" className="flex items-center gap-2 text-sm text-slate-500 hover:text-amber-400 transition-colors w-fit">
          <ArrowLeft className="w-3.5 h-3.5" />
          Knowledge Hub
        </Link>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <p className="section-label mb-4">Section A</p>
        <h1 id="const-title" className="font-serif text-5xl md:text-6xl font-light text-star-silver mb-6 max-w-3xl">
          Constellations &<br />
          <span className="text-amber-400">Coordinate Systems</span>
        </h1>
        <div className="amber-divider" />
        <p id="const-subtitle" className="text-slate-300 text-lg leading-relaxed max-w-2xl mt-6">
          For millennia, humans have navigated the night sky by grouping stars into
          recognizable patterns. Modern astronomy formalizes this with a precise
          coordinate system — the celestial sphere — allowing us to pinpoint any
          object in the sky with mathematical accuracy.
        </p>
      </section>

      {/* Main Image */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-20">
        <div className="relative rounded-2xl overflow-hidden h-80 md:h-[480px] img-overlay">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Ursa Major constellation with celestial coordinate grid showing Right Ascension and Declination lines"
            className="w-full h-full object-cover"
            data-strk-img-id="const-hero-img-7d2e"
            data-strk-img="[const-subtitle] [const-title] celestial coordinate grid right ascension declination Ursa Major constellation"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1200"
          />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-xs font-mono text-slate-400 tracking-widest uppercase">
              Ursa Major — RA 11h 03m · Dec +55° 22′ · Visible from Northern Hemisphere
            </p>
          </div>
        </div>
      </section>

      {/* Coordinate System */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-24">
        <div className="flex items-center gap-3 mb-12">
          <Globe className="w-5 h-5 text-amber-400" />
          <h2 className="font-serif text-3xl font-light text-star-silver">The Celestial Coordinate System</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {concepts.map((c) => (
            <div key={c.term} className="glass-card rounded-2xl p-7">
              <div className="flex items-start gap-4 mb-4">
                <span className="font-serif text-3xl text-amber-400 font-light leading-none">{c.symbol}</span>
                <div>
                  <h3 className="font-medium text-star-silver text-lg">{c.term}</h3>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{c.desc}</p>
              <div className="flex items-center gap-2 bg-white/5 rounded-lg px-4 py-2.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span className="text-xs font-mono text-slate-300">{c.example}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Constellation Table */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-24">
        <div className="flex items-center gap-3 mb-8">
          <Compass className="w-5 h-5 text-amber-400" />
          <h2 className="font-serif text-3xl font-light text-star-silver">Notable Constellations</h2>
        </div>

        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/8">
                  <th className="text-left px-6 py-4 section-label">Constellation</th>
                  <th className="text-left px-6 py-4 section-label">Main Stars</th>
                  <th className="text-left px-6 py-4 section-label">Best Season</th>
                  <th className="text-left px-6 py-4 section-label">Notable Feature</th>
                </tr>
              </thead>
              <tbody>
                {constellations.map((c, i) => (
                  <tr
                    key={c.name}
                    className={`border-b border-white/5 hover:bg-white/3 transition-colors ${i === constellations.length - 1 ? 'border-b-0' : ''}`}
                  >
                    <td className="px-6 py-4 font-medium text-star-silver">{c.name}</td>
                    <td className="px-6 py-4 text-sm text-slate-400 font-mono">{c.stars}</td>
                    <td className="px-6 py-4 text-sm text-slate-400">{c.season}</td>
                    <td className="px-6 py-4 text-sm text-slate-400">{c.notable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Key Insight */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-24">
        <div className="glass-card rounded-2xl p-10 border-l-2 border-amber-400">
          <p className="section-label mb-3">Key Insight</p>
          <p className="font-serif text-xl font-light text-slate-200 leading-relaxed italic">
            "The 88 modern constellations are not physical groupings — the stars within
            them may be thousands of light-years apart. They are simply our way of
            dividing the sky into regions, like countries on a map of the cosmos."
          </p>
        </div>
      </section>

      {/* Navigation */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 pb-24 flex justify-between items-center">
        <Link to="/knowledge" className="flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Hub
        </Link>
        <Link to="/knowledge/stellar-evolution" className="flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 transition-colors">
          Next: Stellar Evolution
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
