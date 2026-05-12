import { useEffect, useRef } from 'react';
import { Radio, Waves, Aperture } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const telescopeTypes = [
  {
    icon: Aperture,
    name: 'Optical Telescopes',
    wavelength: 'Visible Light (380–700 nm)',
    description:
      'The classic telescope. Refracting telescopes use lenses; reflecting telescopes use mirrors. The Hubble Space Telescope is a reflecting telescope that orbits above Earth\'s atmosphere for crystal-clear images.',
    imgId: 'obs-optical-5c2d8b',
    imgQuery: 'Hubble space telescope optical astronomy mirror reflecting',
  },
  {
    icon: Radio,
    name: 'Radio Telescopes',
    wavelength: 'Radio Waves (1 mm – 10 m)',
    description:
      'Massive dish antennas that detect radio waves from pulsars, quasars, and the cosmic microwave background. The Very Large Array (VLA) in New Mexico uses 27 dishes working in concert.',
    imgId: 'obs-radio-1a9f3e',
    imgQuery: 'Very Large Array radio telescope dish antenna New Mexico astronomy',
  },
  {
    icon: Waves,
    name: 'X-ray & Gamma-ray Telescopes',
    wavelength: 'X-ray (0.01–10 nm) / Gamma (<0.01 nm)',
    description:
      'These high-energy photons are absorbed by Earth\'s atmosphere, so these telescopes must be space-based. They reveal the most violent events in the universe: black hole accretion disks, neutron star collisions, and gamma-ray bursts.',
    imgId: 'obs-xray-7d4c6a',
    imgQuery: 'Chandra X-ray space telescope high energy astronomy satellite',
  },
];

const spectrum = [
  { name: 'Radio', range: '>1 mm', color: 'bg-purple-700', width: 'w-16' },
  { name: 'Microwave', range: '1mm–1m', color: 'bg-indigo-600', width: 'w-12' },
  { name: 'Infrared', range: '700nm–1mm', color: 'bg-red-600', width: 'w-14' },
  { name: 'Visible', range: '380–700nm', color: 'bg-gradient-to-r from-violet-500 via-green-400 to-red-500', width: 'w-10' },
  { name: 'UV', range: '10–380nm', color: 'bg-violet-500', width: 'w-8' },
  { name: 'X-ray', range: '0.01–10nm', color: 'bg-blue-400', width: 'w-6' },
  { name: 'Gamma', range: '<0.01nm', color: 'bg-cyan-300', width: 'w-4' },
];

export default function ObservationalSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="observational" ref={containerRef} className="py-20 md:py-28 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-14 space-y-3 max-w-2xl">
          <p className="font-inter text-xs uppercase tracking-widest text-aurora">Section C</p>
          <h2 id="obs-heading" className="font-cormorant text-3xl md:text-4xl font-light text-moonlight">
            Observational Physics
          </h2>
          <p className="font-inter text-sm text-comet leading-relaxed">
            Light is the primary messenger of the cosmos. By studying different wavelengths of
            electromagnetic radiation, astronomers can probe the temperature, composition, motion,
            and distance of celestial objects billions of light-years away.
          </p>
        </div>

        {/* Telescope comparison banner */}
        <div className="mb-14 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative rounded-xl overflow-hidden border border-stardust/60 bg-deep-space h-52">
            <img
              data-strk-img-id="obs-keck-b3e7f2"
              data-strk-img="[obs-keck-label] [obs-heading]"
              data-strk-img-ratio="3x2"
              data-strk-img-width="700"
              alt="Keck Observatory large ground-based optical telescope dome at night"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover opacity-0 transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-space/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4">
              <p id="obs-keck-label" className="font-inter text-xs uppercase tracking-widest text-aurora mb-0.5">Ground-Based</p>
              <p className="font-cormorant text-lg text-moonlight">Keck Observatory, Mauna Kea</p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden border border-stardust/60 bg-deep-space h-52">
            <img
              data-strk-img-id="obs-jwst-c9a4d1"
              data-strk-img="[obs-jwst-label] [obs-heading]"
              data-strk-img-ratio="3x2"
              data-strk-img-width="700"
              alt="James Webb Space Telescope JWST gold mirror segments in space"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover opacity-0 transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-space/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4">
              <p id="obs-jwst-label" className="font-inter text-xs uppercase tracking-widest text-amber-star mb-0.5">Space-Based</p>
              <p className="font-cormorant text-lg text-moonlight">James Webb Space Telescope</p>
            </div>
          </div>
        </div>

        {/* Telescope cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {telescopeTypes.map(({ icon: Icon, name, wavelength, description, imgId, imgQuery }) => (
            <div key={name} className="bg-deep-space border border-stardust/60 rounded-xl overflow-hidden">
              {/* Card image */}
              <div className="relative h-32 bg-cosmos overflow-hidden">
                <img
                  data-strk-img-id={imgId}
                  data-strk-img={`[obs-card-${imgId}] [obs-heading]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="400"
                  alt={name}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover opacity-0 transition-opacity duration-700"
                />
                <span id={`obs-card-${imgId}`} className="sr-only">{imgQuery}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-deep-space/70 to-transparent" />
              </div>
              <div className="p-6 space-y-4">
                <div className="w-9 h-9 rounded-lg bg-aurora/10 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-aurora" />
                </div>
                <div>
                  <h3 className="font-cormorant text-xl font-medium text-moonlight">{name}</h3>
                  <p className="font-inter text-xs text-aurora mt-1">{wavelength}</p>
                </div>
                <p className="font-inter text-sm text-comet leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Electromagnetic spectrum visual */}
        <div className="bg-deep-space border border-stardust/60 rounded-xl p-6 md:p-8">
          <h3 className="font-cormorant text-xl font-medium text-moonlight mb-2">
            The Electromagnetic Spectrum
          </h3>
          <p className="font-inter text-sm text-comet mb-8">
            Visible light is only a tiny fraction of the full electromagnetic spectrum. Each band
            reveals different physical processes in the universe.
          </p>

          {/* Spectrum bar */}
          <div className="flex items-end gap-1 mb-4 overflow-x-auto pb-2">
            {spectrum.map(({ name, range, color, width }) => (
              <div key={name} className="flex flex-col items-center gap-2 flex-shrink-0">
                <div className={`${width} h-8 rounded-sm ${color} opacity-80`} />
                <p className="font-inter text-xs text-comet whitespace-nowrap">{name}</p>
                <p className="font-inter text-[10px] text-horizon whitespace-nowrap">{range}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-stardust/30">
            <p className="font-inter text-xs text-horizon">← Lower energy / Longer wavelength</p>
            <p className="font-inter text-xs text-horizon">Higher energy / Shorter wavelength →</p>
          </div>
        </div>
      </div>
    </section>
  );
}
