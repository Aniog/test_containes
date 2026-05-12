import { useEffect, useRef } from 'react';
import { Radio, Thermometer, Eye, Zap, Waves } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const spectrumBands = [
  { name: 'Radio',     wavelength: '>1 mm',       color: 'bg-red-900',     textColor: 'text-red-300',     use: 'Maps cold hydrogen gas, pulsars' },
  { name: 'Microwave', wavelength: '1mm – 1cm',   color: 'bg-orange-800',  textColor: 'text-orange-300',  use: 'Cosmic Microwave Background (CMB)' },
  { name: 'Infrared',  wavelength: '700nm – 1mm', color: 'bg-amber-700',   textColor: 'text-amber-300',   use: 'Dust-penetrating, star formation' },
  { name: 'Visible',   wavelength: '380–700nm',   color: 'bg-gradient-to-r from-violet-600 via-green-500 to-red-500', textColor: 'text-white', use: 'Human eye range' },
  { name: 'UV',        wavelength: '10–380nm',    color: 'bg-violet-700',  textColor: 'text-violet-300',  use: 'Hot stars, active galaxies' },
  { name: 'X-ray',     wavelength: '0.01–10nm',   color: 'bg-blue-800',    textColor: 'text-blue-300',    use: 'Black holes, neutron stars' },
  { name: 'Gamma',     wavelength: '<0.01nm',     color: 'bg-indigo-900',  textColor: 'text-indigo-300',  use: 'Supernovae, gamma-ray bursts' },
];

const instruments = [
  {
    icon:        Eye,
    name:        'James Webb Space Telescope',
    wavelength:  'Near & Mid Infrared',
    description: 'Launched December 2021, JWST observes the universe in infrared light — penetrating dust clouds to reveal the first galaxies formed after the Big Bang, just 300 million years after the universe began.',
    fact:        'Mirror diameter: 6.5 m | Orbit: L2 Lagrange point, 1.5M km from Earth',
    imgId:       'obs-img-jwst-4c8a2e',
    imgQuery:    '[obs-jwst-desc] [obs-jwst-name]',
    nameId:      'obs-jwst-name',
    descId:      'obs-jwst-desc',
  },
  {
    icon:        Waves,
    name:        'Hubble Space Telescope',
    wavelength:  'UV, Visible, Near-IR',
    description: 'Orbiting at 547 km altitude since 1990, Hubble has produced over 1.5 million observations. Its deep field images revealed that the observable universe contains approximately 2 trillion galaxies.',
    fact:        'Orbital period: 95 minutes | Resolution: 0.05 arcseconds',
    imgId:       'obs-img-hubble-7d3f1b',
    imgQuery:    '[obs-hubble-desc] [obs-hubble-name]',
    nameId:      'obs-hubble-name',
    descId:      'obs-hubble-desc',
  },
];

export default function KnowledgeObservational() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section
      id="observational"
      ref={containerRef}
      className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-cosmos-deep"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-amber-glow" />
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-glow">
            Section C
          </span>
        </div>
        <h2
          id="obs-section-title"
          className="font-display font-bold text-3xl md:text-4xl text-star-white mb-4"
        >
          Observational Physics
        </h2>
        <p
          id="obs-section-subtitle"
          className="text-cosmos-subtle max-w-2xl text-base leading-relaxed mb-14"
        >
          The human eye detects only a tiny sliver of the electromagnetic spectrum. Modern observatories — from radio dishes to space telescopes — reveal the universe across all wavelengths, each exposing different physical phenomena.
        </p>

        {/* EM Spectrum visualiser */}
        <div className="mb-14">
          <h3 className="font-display font-semibold text-xl text-star-white mb-2">
            The Electromagnetic Spectrum
          </h3>
          <p className="text-sm text-cosmos-subtle mb-6">
            Each band of the spectrum reveals different physical processes. Astronomers use all of them.
          </p>
          <div className="rounded-2xl overflow-hidden border border-cosmos-border">
            {/* Spectrum bar */}
            <div className="flex h-10">
              {spectrumBands.map((band) => (
                <div
                  key={band.name}
                  className={`flex-1 ${band.color} flex items-center justify-center`}
                  title={band.name}
                >
                  <span className={`text-[10px] font-bold ${band.textColor} hidden sm:block`}>
                    {band.name}
                  </span>
                </div>
              ))}
            </div>
            {/* Wavelength labels */}
            <div className="flex bg-cosmos-surface">
              {spectrumBands.map((band) => (
                <div key={band.name} className="flex-1 px-1 py-2 border-r border-cosmos-border/40 last:border-r-0">
                  <div className="text-[9px] text-cosmos-subtle text-center leading-tight">{band.wavelength}</div>
                </div>
              ))}
            </div>
            {/* Use cases */}
            <div className="flex bg-cosmos-card">
              {spectrumBands.map((band) => (
                <div key={band.name} className="flex-1 px-1.5 py-3 border-r border-cosmos-border/40 last:border-r-0">
                  <div className="text-[9px] text-cosmos-subtle text-center leading-tight">{band.use}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between mt-2 px-1">
            <span className="text-xs text-cosmos-subtle">← Longer wavelength / Lower energy</span>
            <span className="text-xs text-cosmos-subtle">Shorter wavelength / Higher energy →</span>
          </div>
        </div>

        {/* Telescope cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {instruments.map((inst) => {
            const Icon = inst.icon;
            return (
              <div
                key={inst.name}
                className="group bg-cosmos-card border border-cosmos-border hover:border-amber-glow/30 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-card-cosmos"
              >
                {/* Image — JWST or Hubble photograph */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    alt={inst.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-strk-img-id={inst.imgId}
                    data-strk-img={inst.imgQuery}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute inset-0 img-overlay-bottom" />
                  {/* Wavelength badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-cosmos-void/80 backdrop-blur-sm border border-cosmos-border/60">
                    <Radio className="w-3 h-3 text-amber-glow" />
                    <span className="text-xs text-cosmos-text font-medium">{inst.wavelength}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-glow/10 border border-amber-glow/20 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-amber-glow" />
                    </div>
                    <h3
                      id={inst.nameId}
                      className="font-display font-bold text-lg text-star-white"
                    >
                      {inst.name}
                    </h3>
                  </div>
                  <p
                    id={inst.descId}
                    className="text-sm text-cosmos-subtle leading-relaxed mb-4"
                  >
                    {inst.description}
                  </p>
                  <div className="flex items-start gap-2 px-4 py-3 rounded-xl bg-cosmos-surface border border-cosmos-border">
                    <Thermometer className="w-3.5 h-3.5 text-amber-glow shrink-0 mt-0.5" />
                    <span className="text-xs font-mono text-amber-glow/80 leading-relaxed">{inst.fact}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparative image: same object in different wavelengths */}
        <div className="mt-14">
          <h3 className="font-display font-semibold text-xl text-star-white mb-2">
            The Same Object, Different Wavelengths
          </h3>
          <p className="text-sm text-cosmos-subtle mb-6">
            The Crab Nebula — remnant of a supernova observed in 1054 AD — looks dramatically different across the EM spectrum, each view revealing different physical processes.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { band: 'Radio',    desc: 'Synchrotron radiation from relativistic electrons', imgId: 'crab-radio-1a2b3c', imgQuery: '[crab-radio-desc] [crab-radio-band]', bandId: 'crab-radio-band', descId: 'crab-radio-desc' },
              { band: 'Infrared', desc: 'Warm dust and filaments heated by pulsar wind',    imgId: 'crab-ir-4d5e6f',    imgQuery: '[crab-ir-desc] [crab-ir-band]',    bandId: 'crab-ir-band',    descId: 'crab-ir-desc' },
              { band: 'Visible',  desc: 'Glowing gas filaments of ejected stellar material', imgId: 'crab-vis-7g8h9i',   imgQuery: '[crab-vis-desc] [crab-vis-band]',  bandId: 'crab-vis-band',   descId: 'crab-vis-desc' },
              { band: 'X-ray',    desc: 'High-energy electrons from the central pulsar',    imgId: 'crab-xray-0j1k2l',  imgQuery: '[crab-xray-desc] [crab-xray-band]', bandId: 'crab-xray-band',  descId: 'crab-xray-desc' },
            ].map((view) => (
              <div key={view.band} className="group rounded-xl overflow-hidden border border-cosmos-border hover:border-amber-glow/30 transition-all duration-300">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    alt={`Crab Nebula in ${view.band}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    data-strk-img-id={view.imgId}
                    data-strk-img={view.imgQuery}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute inset-0 img-overlay-bottom" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <span
                      id={view.bandId}
                      className="text-xs font-bold text-amber-glow uppercase tracking-wider"
                    >
                      {view.band}
                    </span>
                  </div>
                </div>
                <div className="p-3 bg-cosmos-surface">
                  <p
                    id={view.descId}
                    className="text-xs text-cosmos-subtle leading-relaxed"
                  >
                    {view.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
