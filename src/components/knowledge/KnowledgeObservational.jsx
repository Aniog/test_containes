import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const telescopeTypes = [
  {
    name: 'Optical Telescopes', wavelength: 'Visible Light (380–700 nm)',
    example: 'Keck Observatory, Hubble Space Telescope',
    desc: 'Collect and focus visible light using mirrors or lenses. Ground-based telescopes must contend with atmospheric distortion.',
    color: '#f5c842', imgId: 'tel-img-1a2b', titleId: 'tel-t1', descId: 'tel-d1',
  },
  {
    name: 'Radio Telescopes', wavelength: 'Radio Waves (1 mm – 10 m)',
    example: 'Very Large Array (VLA), Arecibo',
    desc: 'Detect radio emissions from pulsars, quasars, and the cosmic microwave background. Can operate day and night, through clouds.',
    color: '#6366f1', imgId: 'tel-img-3c4d', titleId: 'tel-t2', descId: 'tel-d2',
  },
  {
    name: 'Infrared Telescopes', wavelength: 'Infrared (700 nm – 1 mm)',
    example: 'James Webb Space Telescope (JWST)',
    desc: 'Peer through dust clouds to observe star formation, exoplanet atmospheres, and the most distant galaxies in the universe.',
    color: '#ef4444', imgId: 'tel-img-5e6f', titleId: 'tel-t3', descId: 'tel-d3',
  },
  {
    name: 'X-ray & Gamma-ray', wavelength: 'X-ray (0.01–10 nm) / Gamma (<0.01 nm)',
    example: 'Chandra X-ray Observatory, Fermi',
    desc: 'Observe the most energetic phenomena: black holes, neutron stars, and gamma-ray bursts. Must be space-based.',
    color: '#2dd4bf', imgId: 'tel-img-7g8h', titleId: 'tel-t4', descId: 'tel-d4',
  },
];

const spectrumBands = [
  { label: 'Radio', color: '#6366f1', flex: 6 },
  { label: 'Microwave', color: '#8b5cf6', flex: 4 },
  { label: 'Infrared', color: '#ef4444', flex: 3 },
  { label: 'Visible', color: '#f5c842', flex: 2 },
  { label: 'UV', color: '#a78bfa', flex: 1.5 },
  { label: 'X-ray', color: '#2dd4bf', flex: 1 },
  { label: 'Gamma', color: '#f0f4ff', flex: 0.7 },
];

export default function KnowledgeObservational() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="observational" ref={containerRef} className="py-24 md:py-32 bg-[#0a0e1a] border-t border-[#1e2a4a]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-[#2dd4bf]" />
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-[#2dd4bf]">Section C</p>
        </div>

        <h2 id="obs-heading" className="font-serif text-3xl md:text-5xl font-light text-[#f0f4ff] mb-4">
          Observational Physics
        </h2>
        <p id="obs-subheading" className="text-[#8892b0] text-lg leading-relaxed max-w-2xl mb-16">
          The universe speaks in many wavelengths. Different telescopes are
          designed to detect different types of electromagnetic radiation —
          each revealing a unique layer of cosmic reality invisible to the naked eye.
        </p>

        {/* Ground vs Space comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="relative rounded-2xl overflow-hidden border border-[#1e2a4a] aspect-video">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Keck Observatory large ground-based optical telescope on Mauna Kea"
              data-strk-img-id="obs-img-keck-9i0j"
              data-strk-img="Keck Observatory ground telescope Mauna Kea optical astronomy"
              data-strk-img-ratio="16x9"
              data-strk-img-width="700"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/80 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="text-xs font-mono text-[#f5c842] tracking-widest uppercase mb-1">Ground-Based</p>
              <p className="text-sm font-medium text-[#f0f4ff]">Keck Observatory</p>
              <p className="text-xs text-[#8892b0]">Mauna Kea, Hawaii — 10m primary mirror</p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-[#1e2a4a] aspect-video">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="James Webb Space Telescope JWST in orbit"
              data-strk-img-id="obs-img-jwst-1k2l"
              data-strk-img="James Webb Space Telescope JWST infrared deep space orbit"
              data-strk-img-ratio="16x9"
              data-strk-img-width="700"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/80 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="text-xs font-mono text-[#2dd4bf] tracking-widest uppercase mb-1">Space-Based</p>
              <p className="text-sm font-medium text-[#f0f4ff]">James Webb Space Telescope</p>
              <p className="text-xs text-[#8892b0]">L2 Lagrange Point — 6.5m gold mirror</p>
            </div>
          </div>
        </div>

        {/* Spectrum */}
        <div className="bg-[#0f1629] border border-[#1e2a4a] rounded-2xl p-8 mb-12">
          <h3 className="text-lg font-medium text-[#f0f4ff] mb-2">The Electromagnetic Spectrum</h3>
          <p className="text-sm text-[#8892b0] mb-8">
            Different wavelengths reveal different cosmic phenomena. Only visible light and some radio waves penetrate Earth's atmosphere.
          </p>
          <div className="flex items-end gap-1 h-20">
            {spectrumBands.map(({ label, color, flex }) => (
              <div key={label} className="flex flex-col items-center gap-1" style={{ flex }}>
                <div
                  className="w-full rounded-t-sm"
                  style={{ height: `${Math.min(flex * 10, 60)}px`, backgroundColor: color, opacity: 0.8, minWidth: '28px' }}
                />
                <p className="text-[10px] font-mono text-center whitespace-nowrap" style={{ color }}>{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Telescope cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {telescopeTypes.map(({ name, wavelength, example, desc, color, imgId, titleId, descId }) => (
            <div key={name} className="bg-[#0f1629] border border-[#1e2a4a] rounded-2xl overflow-hidden group hover:border-[#1e2a4a]/60 transition-all duration-300">
              <div className="relative h-44 overflow-hidden">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${name} — ${example}`}
                  data-strk-img-id={imgId}
                  data-strk-img={`[${descId}] [${titleId}] telescope astronomy`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="500"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1629] to-transparent" />
              </div>
              <div className="p-5">
                <div className="text-xs font-mono tracking-widest uppercase mb-2" style={{ color }}>{wavelength}</div>
                <h4 id={titleId} className="text-base font-medium text-[#f0f4ff] mb-2">{name}</h4>
                <p id={descId} className="text-xs text-[#8892b0] leading-relaxed mb-3">{desc}</p>
                <p className="text-xs text-[#4a5568] font-mono">e.g. {example}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
