import { useEffect, useRef } from 'react';
import { Radio, Zap, Eye } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const telescopeTypes = [
  {
    icon: Eye,
    name: 'Optical Telescopes',
    wavelength: '380–700 nm',
    example: 'Keck Observatory, Hubble Space Telescope',
    description: 'Collect visible light using mirrors or lenses. Ground-based optical telescopes are limited by atmospheric turbulence (seeing), while space telescopes like Hubble operate above the atmosphere.',
    color: 'text-amber',
  },
  {
    icon: Radio,
    name: 'Radio Telescopes',
    wavelength: '1 mm – 10 m',
    example: 'Very Large Array (VLA), FAST',
    description: 'Detect long-wavelength radio waves emitted by pulsars, quasars, and the cosmic microwave background. Radio waves pass through dust clouds that block visible light.',
    color: 'text-aurora',
  },
  {
    icon: Zap,
    name: 'X-ray & Gamma-ray',
    wavelength: '< 10 nm',
    example: 'Chandra X-ray Observatory, Fermi',
    description: 'High-energy photons reveal the most violent phenomena: black hole accretion disks, neutron star collisions, and gamma-ray bursts. Must operate in space as Earth\'s atmosphere absorbs these wavelengths.',
    color: 'text-nebula-pink',
  },
];

const spectrumBands = [
  { name: 'Radio', range: '> 1 mm', color: 'bg-aurora/20 text-aurora border-aurora/30' },
  { name: 'Microwave', range: '1 mm–1 m', color: 'bg-aurora/30 text-aurora border-aurora/40' },
  { name: 'Infrared', range: '700 nm–1 mm', color: 'bg-amber/20 text-amber border-amber/30' },
  { name: 'Visible', range: '380–700 nm', color: 'bg-star/20 text-star border-star/30' },
  { name: 'Ultraviolet', range: '10–380 nm', color: 'bg-nebula-pink/20 text-nebula-pink border-nebula-pink/30' },
  { name: 'X-ray', range: '0.01–10 nm', color: 'bg-nebula-pink/30 text-nebula-pink border-nebula-pink/40' },
  { name: 'Gamma-ray', range: '< 0.01 nm', color: 'bg-nebula-pink/40 text-nebula-pink border-nebula-pink/50' },
];

export default function ObservationalSection() {
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
      className="py-24 md:py-32 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-nebula-pink">Section C</span>
          <div
            className="mt-3 mb-5 w-12 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, #e879f9, transparent)' }}
          />
          <h2
            id="obs-title"
            className="font-serif font-light text-3xl md:text-4xl text-star tracking-wide mb-4"
          >
            Observational Physics
          </h2>
          <p
            id="obs-subtitle"
            className="text-muted text-base leading-relaxed max-w-2xl"
          >
            The universe speaks in every wavelength of light. Modern astronomy uses a fleet of specialized telescopes to decode these messages — from the longest radio waves to the most energetic gamma rays.
          </p>
        </div>

        {/* Telescope comparison image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          <div className="relative rounded-2xl overflow-hidden aspect-video bg-surface border border-subtle">
            <img
              alt="Keck Observatory large ground-based optical telescope dome at night"
              className="w-full h-full object-cover"
              data-strk-img-id="keck-obs-s1t2u3"
              data-strk-img="[obs-subtitle] [obs-title] Keck Observatory ground telescope optical astronomy"
              data-strk-img-ratio="16x9"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cosmos/60 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4">
              <span className="text-xs text-muted bg-cosmos/80 rounded-full px-3 py-1">
                Ground-Based: Keck Observatory
              </span>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-video bg-surface border border-subtle">
            <img
              alt="James Webb Space Telescope JWST in space infrared astronomy"
              className="w-full h-full object-cover"
              data-strk-img-id="jwst-obs-v4w5x6"
              data-strk-img="[obs-subtitle] [obs-title] James Webb Space Telescope JWST infrared space observatory"
              data-strk-img-ratio="16x9"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cosmos/60 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4">
              <span className="text-xs text-muted bg-cosmos/80 rounded-full px-3 py-1">
                Space-Based: James Webb Space Telescope
              </span>
            </div>
          </div>
        </div>

        {/* Telescope type cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {telescopeTypes.map((type) => {
            const Icon = type.icon;
            return (
              <div
                key={type.name}
                className="bg-nebula rounded-2xl border border-subtle p-7 hover:border-amber/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center mb-5">
                  <Icon className={`w-5 h-5 ${type.color}`} />
                </div>
                <h3 className="font-sans text-base font-semibold text-star mb-1">{type.name}</h3>
                <div className={`text-xs font-medium tracking-widest uppercase ${type.color} mb-3`}>
                  {type.wavelength}
                </div>
                <p className="text-muted text-sm leading-relaxed mb-4">{type.description}</p>
                <div className="text-xs text-dim italic">{type.example}</div>
              </div>
            );
          })}
        </div>

        {/* Electromagnetic spectrum */}
        <div className="bg-surface rounded-2xl border border-subtle p-8 md:p-10">
          <h3 className="font-serif text-xl font-light text-star mb-2">
            The Electromagnetic Spectrum
          </h3>
          <p className="text-muted text-sm mb-8 leading-relaxed">
            Light is electromagnetic radiation. Different wavelengths carry different information about the universe — and require different instruments to detect.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
            {spectrumBands.map((band) => (
              <div
                key={band.name}
                className={`rounded-xl border p-3 text-center ${band.color}`}
              >
                <div className="text-xs font-semibold mb-1">{band.name}</div>
                <div className="text-xs opacity-70">{band.range}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-dim mt-4 text-center">
            ← Longer wavelength · Lower energy &nbsp;&nbsp;|&nbsp;&nbsp; Shorter wavelength · Higher energy →
          </p>
        </div>
      </div>
    </section>
  );
}
