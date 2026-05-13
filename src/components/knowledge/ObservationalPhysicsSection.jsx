import { Radio, Eye } from 'lucide-react';

const telescopes = [
  {
    name: 'Keck Observatory',
    type: 'Ground-Based Optical',
    location: 'Mauna Kea, Hawaii — 4,145m altitude',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=700&q=80',
    alt: 'Keck Observatory dome',
    challenge: 'Atmospheric Distortion',
    challengeDesc: 'Earth\'s turbulent atmosphere blurs starlight, limiting resolution. Adaptive optics systems use deformable mirrors to correct in real-time.',
    specs: ['Primary mirror: 10m diameter', 'Adaptive optics: 349 actuators', 'Wavelength: 0.3–5 μm'],
    color: 'amber',
  },
  {
    name: 'James Webb Space Telescope',
    type: 'Space-Based Infrared',
    location: 'L2 Lagrange Point — 1.5M km from Earth',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=700&q=80',
    alt: 'JWST in space',
    challenge: 'No Atmosphere',
    challengeDesc: 'Operating above the atmosphere eliminates distortion entirely. JWST observes in infrared, penetrating dust clouds invisible to optical telescopes.',
    specs: ['Primary mirror: 6.5m (18 segments)', 'Operating temp: −233°C', 'Wavelength: 0.6–28 μm'],
    color: 'indigo',
  },
];

const spectrumBands = [
  { name: 'Gamma Ray', range: '<0.01 nm', color: '#7c3aed', width: 4, telescope: 'Compton GRO, Fermi' },
  { name: 'X-Ray', range: '0.01–10 nm', color: '#6366f1', width: 6, telescope: 'Chandra, XMM-Newton' },
  { name: 'Ultraviolet', range: '10–400 nm', color: '#818cf8', width: 7, telescope: 'Hubble (UV), GALEX' },
  { name: 'Visible', range: '400–700 nm', color: '#22d3ee', width: 8, telescope: 'Keck, VLT, Hubble' },
  { name: 'Infrared', range: '700 nm–1 mm', color: '#f59e0b', width: 10, telescope: 'JWST, Spitzer' },
  { name: 'Microwave', range: '1 mm–10 cm', color: '#f97316', width: 12, telescope: 'WMAP, Planck' },
  { name: 'Radio', range: '>10 cm', color: '#ef4444', width: 15, telescope: 'VLA, ALMA, SKA' },
];

export default function ObservationalPhysicsSection() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
              <Radio className="w-4 h-4 text-cyan-400" />
            </div>
            <span className="text-cyan-400 text-xs tracking-widest uppercase font-medium">
              Section C
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-gray-50 tracking-tight mb-4">
            Observational Physics &amp; Wavelengths
          </h2>
          <div className="w-12 h-px bg-cyan-400/40" />
        </div>

        {/* Telescope Comparison */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-8">
            <Eye className="w-4 h-4 text-gray-500" />
            <h3 className="text-lg font-medium text-gray-300">
              Ground vs. Space: A Tale of Two Observatories
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {telescopes.map((scope) => (
              <div
                key={scope.name}
                className="rounded-2xl border border-gray-800 overflow-hidden bg-[#111827] hover:border-gray-700 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={scope.image}
                    alt={scope.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      scope.color === 'amber'
                        ? 'bg-amber-400/10 text-amber-400 border-amber-400/30'
                        : 'bg-indigo-400/10 text-indigo-400 border-indigo-400/30'
                    }`}>
                      {scope.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h4 className="text-gray-50 font-medium text-lg mb-1">{scope.name}</h4>
                    <p className="text-gray-500 text-xs">{scope.location}</p>
                  </div>

                  <div className={`rounded-xl p-4 border ${
                    scope.color === 'amber'
                      ? 'bg-amber-400/5 border-amber-400/20'
                      : 'bg-indigo-400/5 border-indigo-400/20'
                  }`}>
                    <p className={`text-xs font-medium mb-1 ${
                      scope.color === 'amber' ? 'text-amber-400' : 'text-indigo-400'
                    }`}>
                      Key Challenge: {scope.challenge}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">{scope.challengeDesc}</p>
                  </div>

                  <ul className="space-y-1.5">
                    {scope.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2 text-gray-400 text-sm">
                        <span className={`w-1 h-1 rounded-full flex-shrink-0 ${
                          scope.color === 'amber' ? 'bg-amber-400' : 'bg-indigo-400'
                        }`} />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Electromagnetic Spectrum Chart */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <Radio className="w-4 h-4 text-gray-500" />
            <h3 className="text-lg font-medium text-gray-300">
              The Electromagnetic Spectrum &amp; Observational Tools
            </h3>
          </div>

          <div className="bg-[#080C14] rounded-2xl border border-gray-800 p-6 md:p-8">
            {/* Spectrum Visual Bar */}
            <div className="flex rounded-xl overflow-hidden mb-8 h-10">
              {spectrumBands.map((band) => (
                <div
                  key={band.name}
                  className="flex-1 relative group cursor-default"
                  style={{ background: band.color, opacity: 0.85 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                    <span className="text-white text-xs font-medium whitespace-nowrap px-1">
                      {band.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Spectrum Labels */}
            <div className="flex justify-between text-gray-600 text-xs mb-10 px-1">
              <span>← Higher Energy / Shorter Wavelength</span>
              <span>Longer Wavelength / Lower Energy →</span>
            </div>

            {/* Detailed Rows */}
            <div className="space-y-3">
              {spectrumBands.map((band) => (
                <div
                  key={band.name}
                  className="grid grid-cols-12 gap-4 items-center py-3 border-b border-gray-800/60 last:border-0"
                >
                  {/* Color indicator */}
                  <div className="col-span-1 flex justify-center">
                    <div
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ background: band.color }}
                    />
                  </div>
                  {/* Band name */}
                  <div className="col-span-3">
                    <span className="text-gray-200 text-sm font-medium">{band.name}</span>
                  </div>
                  {/* Wavelength range */}
                  <div className="col-span-3">
                    <span className="text-gray-500 text-xs font-mono">{band.range}</span>
                  </div>
                  {/* Telescope */}
                  <div className="col-span-5">
                    <span className="text-gray-400 text-xs">{band.telescope}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-800/60">
              <p className="text-gray-500 text-sm leading-relaxed">
                <strong className="text-gray-300">Why multiple wavelengths?</strong> Different
                physical processes emit radiation at different wavelengths. A star-forming region
                invisible in optical light blazes in infrared; a neutron star merger radiates
                gamma rays. Multi-wavelength astronomy reveals the complete physical picture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
