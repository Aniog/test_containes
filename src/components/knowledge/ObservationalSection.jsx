import { Radio, Waves, Aperture } from 'lucide-react';

const telescopeTypes = [
  {
    icon: Aperture,
    name: 'Optical Telescopes',
    wavelength: 'Visible Light (380–700 nm)',
    description:
      'The classic telescope. Refracting telescopes use lenses; reflecting telescopes use mirrors. The Hubble Space Telescope is a reflecting telescope that orbits above Earth\'s atmosphere for crystal-clear images.',
  },
  {
    icon: Radio,
    name: 'Radio Telescopes',
    wavelength: 'Radio Waves (1 mm – 10 m)',
    description:
      'Massive dish antennas that detect radio waves from pulsars, quasars, and the cosmic microwave background. The Very Large Array (VLA) in New Mexico uses 27 dishes working in concert.',
  },
  {
    icon: Waves,
    name: 'X-ray & Gamma-ray Telescopes',
    wavelength: 'X-ray (0.01–10 nm) / Gamma (<0.01 nm)',
    description:
      'These high-energy photons are absorbed by Earth\'s atmosphere, so these telescopes must be space-based. They reveal the most violent events in the universe: black hole accretion disks, neutron star collisions, and gamma-ray bursts.',
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
  return (
    <section id="observational" className="py-20 md:py-28 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-14 space-y-3 max-w-2xl">
          <p className="font-inter text-xs uppercase tracking-widest text-aurora">Section C</p>
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-moonlight">
            Observational Physics
          </h2>
          <p className="font-inter text-sm text-comet leading-relaxed">
            Light is the primary messenger of the cosmos. By studying different wavelengths of
            electromagnetic radiation, astronomers can probe the temperature, composition, motion,
            and distance of celestial objects billions of light-years away.
          </p>
        </div>

        {/* Telescope cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {telescopeTypes.map(({ icon: Icon, name, wavelength, description }) => (
            <div key={name} className="bg-deep-space border border-stardust/60 rounded-xl p-6 space-y-4">
              <div className="w-9 h-9 rounded-lg bg-aurora/10 flex items-center justify-center">
                <Icon className="w-4 h-4 text-aurora" />
              </div>
              <div>
                <h3 className="font-cormorant text-xl font-medium text-moonlight">{name}</h3>
                <p className="font-inter text-xs text-aurora mt-1">{wavelength}</p>
              </div>
              <p className="font-inter text-sm text-comet leading-relaxed">{description}</p>
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
