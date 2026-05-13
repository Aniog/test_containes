import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Radio, Eye, Waves } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const telescopeTypes = [
  {
    name: 'Optical Telescopes',
    icon: Eye,
    wavelength: '380–700 nm',
    examples: 'Keck Observatory, VLT, Hubble (visible)',
    desc: 'Collect and focus visible light using mirrors or lenses. Ground-based optical telescopes must contend with atmospheric turbulence (seeing), which is why space-based observatories like Hubble produce sharper images.',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    imgQuery: 'Keck Observatory large optical telescope dome Hawaii night sky',
  },
  {
    name: 'Radio Telescopes',
    icon: Radio,
    wavelength: '1 mm – 10 m',
    examples: 'Arecibo (historic), VLA, FAST',
    desc: 'Detect long-wavelength radio waves emitted by pulsars, quasars, and the cosmic microwave background. Radio waves pass through dust clouds that block visible light, revealing hidden structures.',
    color: 'text-teal-400',
    bg: 'bg-teal-400/10',
    imgQuery: 'radio telescope array VLA dish antenna night sky',
  },
  {
    name: 'Infrared Telescopes',
    icon: Waves,
    wavelength: '700 nm – 1 mm',
    examples: 'JWST, Spitzer, Herschel',
    desc: 'Infrared radiation penetrates dust clouds and reveals cool objects like brown dwarfs, forming planetary systems, and the earliest galaxies. JWST operates at −233°C to detect faint infrared signals.',
    color: 'text-red-400',
    bg: 'bg-red-400/10',
    imgQuery: 'James Webb Space Telescope JWST infrared deep field galaxy',
  },
  {
    name: 'X-ray & Gamma-ray',
    icon: Waves,
    wavelength: '< 10 nm',
    examples: 'Chandra, XMM-Newton, Fermi',
    desc: 'High-energy radiation from black holes, neutron stars, and supernovae remnants. Earth\'s atmosphere absorbs X-rays, so these observatories must operate in space to study the most violent events in the universe.',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    imgQuery: 'Chandra X-ray telescope space observatory black hole neutron star',
  },
];

const emSpectrum = [
  { name: 'Radio', range: '> 1 mm', color: 'bg-red-800', text: 'text-red-300', width: 'w-24' },
  { name: 'Microwave', range: '1mm–1cm', color: 'bg-orange-700', text: 'text-orange-300', width: 'w-16' },
  { name: 'Infrared', range: '700nm–1mm', color: 'bg-red-500', text: 'text-red-200', width: 'w-14' },
  { name: 'Visible', range: '380–700nm', color: 'bg-gradient-to-r from-violet-500 via-green-400 to-red-400', text: 'text-white', width: 'w-12' },
  { name: 'UV', range: '10–380nm', color: 'bg-violet-600', text: 'text-violet-200', width: 'w-10' },
  { name: 'X-ray', range: '0.01–10nm', color: 'bg-blue-700', text: 'text-blue-200', width: 'w-8' },
  { name: 'Gamma', range: '< 0.01nm', color: 'bg-indigo-900', text: 'text-indigo-200', width: 'w-6' },
];

const keyFacts = [
  { stat: '10 m', label: 'Keck Mirror Diameter', sub: 'Largest optical telescope' },
  { stat: '6.5 m', label: 'JWST Mirror', sub: 'Infrared space telescope' },
  { stat: '500 m', label: 'FAST Diameter', sub: 'World\'s largest radio dish' },
  { stat: '1.5M km', label: 'JWST Distance', sub: 'From Earth (L2 point)' },
];

export default function ObservationalPhysics() {
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

      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <p className="section-label mb-4">Section C</p>
        <h1 id="obs-title" className="font-serif text-5xl md:text-6xl font-light text-star-silver mb-6 max-w-3xl">
          Observational Physics
          <br />
          <span className="text-teal-400">Telescopes & Light</span>
        </h1>
        <div className="amber-divider" />
        <p id="obs-subtitle" className="text-slate-300 text-lg leading-relaxed max-w-2xl mt-6">
          The universe communicates through light — but visible light is only a tiny
          fraction of the electromagnetic spectrum. Modern astronomy uses telescopes
          tuned to every wavelength, from radio waves to gamma rays, to build a
          complete picture of the cosmos.
        </p>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {keyFacts.map((f) => (
            <div key={f.label} className="glass-card rounded-2xl p-6 text-center">
              <p className="font-serif text-3xl text-teal-400 font-light mb-1">{f.stat}</p>
              <p className="text-sm font-medium text-slate-200">{f.label}</p>
              <p className="text-xs text-slate-500 font-mono mt-0.5">{f.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Telescope Comparison */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-24">
        <h2 className="font-serif text-3xl font-light text-star-silver mb-3">Types of Telescopes</h2>
        <p className="text-slate-400 text-sm mb-10 max-w-xl">
          Each type of telescope is designed to detect a specific range of the
          electromagnetic spectrum, revealing different aspects of the universe.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {telescopeTypes.map((t, i) => {
            const Icon = t.icon;
            return (
              <div key={t.name} className="glass-card rounded-2xl overflow-hidden">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={t.name}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`obs-telescope-${i}-img-5a1d`}
                    data-strk-img={`[obs-telescope-${i}-desc] [obs-telescope-${i}-name] ${t.imgQuery}`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/30 to-transparent" />
                  <div className={`absolute top-4 left-4 p-2 rounded-lg ${t.bg} ${t.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 id={`obs-telescope-${i}-name`} className={`font-serif text-lg font-light ${t.color}`}>{t.name}</h3>
                    <span className="text-xs font-mono text-slate-500 bg-white/5 px-2.5 py-1 rounded-full whitespace-nowrap">{t.wavelength}</span>
                  </div>
                  <p id={`obs-telescope-${i}-desc`} className="text-slate-400 text-sm leading-relaxed mb-3">{t.desc}</p>
                  <p className="text-xs font-mono text-slate-500">
                    <span className="text-slate-400">Examples:</span> {t.examples}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* EM Spectrum */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-24">
        <h2 className="font-serif text-3xl font-light text-star-silver mb-3">The Electromagnetic Spectrum</h2>
        <p className="text-slate-400 text-sm mb-10 max-w-xl">
          Visible light occupies less than 1% of the full electromagnetic spectrum.
          Each band reveals different physical processes in the universe.
        </p>

        {/* Spectrum Visual */}
        <div className="glass-card rounded-2xl p-8 mb-8">
          <div className="flex items-end gap-1 mb-4 overflow-x-auto pb-2">
            {emSpectrum.map((band) => (
              <div key={band.name} className="flex flex-col items-center gap-2 flex-shrink-0">
                <span className={`text-xs font-mono ${band.text} text-center leading-tight`}>{band.name}</span>
                <div className={`${band.color} ${band.width} h-12 rounded-sm opacity-80`} />
                <span className="text-xs font-mono text-slate-500 text-center leading-tight whitespace-nowrap">{band.range}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs font-mono text-slate-500">← Longer wavelength / Lower energy</span>
            <span className="text-xs font-mono text-slate-500">Shorter wavelength / Higher energy →</span>
          </div>
        </div>

        {/* Spectrum Image */}
        <div className="relative rounded-2xl overflow-hidden h-56 img-overlay">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Electromagnetic spectrum comparison showing radio waves through gamma rays with telescope types"
            className="w-full h-full object-cover"
            data-strk-img-id="obs-spectrum-img-8b3c"
            data-strk-img="[obs-subtitle] [obs-title] electromagnetic spectrum wavelength radio infrared visible ultraviolet X-ray gamma ray"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1200"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-space-950/80 to-transparent" />
          <div className="absolute bottom-5 left-6">
            <p className="text-xs font-mono text-slate-400 tracking-widest uppercase">
              Multi-wavelength Astronomy — Seeing the Invisible Universe
            </p>
          </div>
        </div>
      </section>

      {/* Key Insight */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-24">
        <div className="glass-card rounded-2xl p-10 border-l-2 border-teal-400">
          <p className="section-label mb-3">Key Insight</p>
          <p className="font-serif text-xl font-light text-slate-200 leading-relaxed italic">
            "If our eyes could see radio waves, the sky would look completely different —
            dominated by the glow of the Milky Way's magnetic field and the brilliant
            beacons of distant quasars. Every wavelength tells a different story."
          </p>
        </div>
      </section>

      {/* Navigation */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 pb-24 flex justify-between items-center">
        <Link to="/knowledge/stellar-evolution" className="flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Stellar Evolution
        </Link>
        <Link to="/gallery" className="flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 transition-colors">
          Explore Gallery
          <ArrowLeft className="w-4 h-4 rotate-180" />
        </Link>
      </section>
    </div>
  );
}
