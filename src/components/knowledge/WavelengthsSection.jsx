import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const spectrumBands = [
  { name: 'Gamma Ray', range: 'λ < 0.01 nm', freq: '> 30 EHz', telescope: 'Compton GRO, Fermi', color: '#9333ea', width: '7%' },
  { name: 'X-Ray', range: '0.01–10 nm', freq: '30 PHz–30 EHz', telescope: 'Chandra, XMM-Newton', color: '#6366f1', width: '10%' },
  { name: 'Ultraviolet', range: '10–400 nm', freq: '750 THz–30 PHz', telescope: 'GALEX, HST (UV)', color: '#818cf8', width: '10%' },
  { name: 'Visible', range: '400–700 nm', freq: '430–750 THz', telescope: 'Keck, VLT, HST', color: '#22d3ee', width: '13%' },
  { name: 'Near-IR', range: '0.7–5 μm', freq: '60–430 THz', telescope: 'JWST, Spitzer', color: '#22c55e', width: '12%' },
  { name: 'Mid-IR', range: '5–40 μm', freq: '7.5–60 THz', telescope: 'JWST MIRI, Spitzer', color: '#eab308', width: '12%' },
  { name: 'Far-IR', range: '40–350 μm', freq: '0.86–7.5 THz', telescope: 'Herschel, SOFIA', color: '#f97316', width: '12%' },
  { name: 'Microwave', range: '1 mm–1 m', freq: '300 MHz–300 GHz', telescope: 'Planck, WMAP', color: '#ef4444', width: '12%' },
  { name: 'Radio', range: '> 1 m', freq: '< 300 MHz', telescope: 'VLA, ALMA, SKA', color: '#dc2626', width: '12%' },
];

export default function WavelengthsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="wavelengths" className="py-24 px-6 md:px-12 lg:px-24 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-xs uppercase tracking-widest text-cyan-400">Section C</span>
          <h2 className="text-4xl md:text-5xl font-light text-white mt-3 mb-4">
            Observational Physics & Wavelengths
          </h2>
          <p className="text-gray-400 max-w-2xl leading-relaxed">
            The universe speaks in every wavelength of light. Different telescopes are engineered 
            to detect different parts of the electromagnetic spectrum, each revealing a hidden layer of cosmic reality.
          </p>
        </div>

        {/* Telescope Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Keck */}
          <div className="bg-[#111827] border border-[#1F2937] rounded-2xl overflow-hidden group">
            <div className="relative aspect-video overflow-hidden">
              <img
                data-strk-img-id="telescope-keck-obs-b3c4d5"
                data-strk-img="[keck-desc] [keck-title]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Keck Observatory"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30">
                <span className="text-xs text-amber-400 font-medium">Ground-Based</span>
              </div>
            </div>
            <div className="p-6">
              <h3 id="keck-title" className="text-xl font-medium text-white mb-2">W. M. Keck Observatory</h3>
              <p id="keck-desc" className="text-gray-400 text-sm leading-relaxed mb-4">
                Located atop Mauna Kea, Hawaii at 4,145m elevation. The twin Keck telescopes each feature 
                a 10-meter segmented primary mirror — the largest optical/infrared telescopes on Earth.
              </p>
              <div className="space-y-2 text-sm">
                {[
                  { label: 'Primary Mirror', value: '10 m (36 hexagonal segments)' },
                  { label: 'Wavelength', value: 'Optical + Near-Infrared' },
                  { label: 'Challenge', value: 'Atmospheric turbulence (seeing)' },
                  { label: 'Solution', value: 'Adaptive optics with laser guide stars' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="text-gray-500 w-28 flex-shrink-0">{item.label}</span>
                    <span className="text-gray-300">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* JWST */}
          <div className="bg-[#111827] border border-[#1F2937] rounded-2xl overflow-hidden group">
            <div className="relative aspect-video overflow-hidden">
              <img
                data-strk-img-id="telescope-jwst-space-e6f7g8"
                data-strk-img="[jwst-desc] [jwst-title]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="James Webb Space Telescope"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30">
                <span className="text-xs text-indigo-400 font-medium">Space-Based</span>
              </div>
            </div>
            <div className="p-6">
              <h3 id="jwst-title" className="text-xl font-medium text-white mb-2">James Webb Space Telescope</h3>
              <p id="jwst-desc" className="text-gray-400 text-sm leading-relaxed mb-4">
                Orbiting at the L2 Lagrange point, 1.5 million km from Earth. JWST's 6.5-meter gold-coated 
                beryllium mirror operates at −233°C to detect infrared light from the earliest galaxies.
              </p>
              <div className="space-y-2 text-sm">
                {[
                  { label: 'Primary Mirror', value: '6.5 m (18 hexagonal segments)' },
                  { label: 'Wavelength', value: 'Near + Mid-Infrared (0.6–28 μm)' },
                  { label: 'Advantage', value: 'No atmospheric interference' },
                  { label: 'Orbit', value: 'Sun-Earth L2 point' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="text-gray-500 w-28 flex-shrink-0">{item.label}</span>
                    <span className="text-gray-300">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Atmospheric Windows */}
        <div className="bg-[#111827] border border-[#1F2937] rounded-2xl p-6 mb-16">
          <h3 className="text-lg font-medium text-white mb-2">Why Space Telescopes?</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Earth's atmosphere absorbs most wavelengths of electromagnetic radiation. Only visible light, 
            near-infrared, and radio waves have "atmospheric windows" that allow ground-based observation. 
            Space telescopes bypass this limitation entirely.
          </p>
          <div className="relative h-16 rounded-xl overflow-hidden">
            <div className="absolute inset-0 em-spectrum opacity-80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-xs font-medium tracking-widest uppercase bg-black/40 px-3 py-1 rounded-full">
                Electromagnetic Spectrum
              </span>
            </div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-600 font-mono">
            <span>γ-ray</span>
            <span>X-ray</span>
            <span>UV</span>
            <span>Visible</span>
            <span>IR</span>
            <span>Microwave</span>
            <span>Radio</span>
          </div>
        </div>

        {/* Full Spectrum Table */}
        <div>
          <h3 className="text-2xl font-light text-white mb-6">Electromagnetic Spectrum & Telescopes</h3>
          <div className="space-y-2">
            {spectrumBands.map((band) => (
              <div
                key={band.name}
                className="group bg-[#111827] border border-[#1F2937] rounded-xl p-4 hover:border-[#374151] transition-all duration-300 grid grid-cols-1 md:grid-cols-4 gap-4 items-center"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: band.color }} />
                  <span className="text-white font-medium text-sm">{band.name}</span>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">Wavelength</div>
                  <div className="text-gray-300 text-sm font-mono">{band.range}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">Frequency</div>
                  <div className="text-gray-300 text-sm font-mono">{band.freq}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">Key Telescopes</div>
                  <div className="text-gray-300 text-sm">{band.telescope}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Multi-wavelength comparison images */}
        <div className="mt-16">
          <h3 className="text-2xl font-light text-white mb-6">The Same Object, Different Wavelengths</h3>
          <p className="text-gray-400 text-sm mb-8 max-w-2xl">
            The Andromeda Galaxy (M31) looks dramatically different depending on which wavelength we observe. 
            Each view reveals different physical processes — from star formation to dark matter distribution.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { imgId: 'andromeda-xray-h1i2j3', titleId: 'andromeda-xray-title', descId: 'andromeda-xray-desc', label: 'X-Ray', color: '#6366f1', desc: 'Andromeda galaxy in X-ray wavelength showing hot gas and neutron stars' },
              { imgId: 'andromeda-uv-k4l5m6', titleId: 'andromeda-uv-title', descId: 'andromeda-uv-desc', label: 'Ultraviolet', color: '#818cf8', desc: 'Andromeda galaxy in ultraviolet light showing young hot blue stars' },
              { imgId: 'andromeda-optical-n7o8p9', titleId: 'andromeda-optical-title', descId: 'andromeda-optical-desc', label: 'Optical', color: '#22d3ee', desc: 'Andromeda galaxy in visible optical light showing spiral arm structure' },
              { imgId: 'andromeda-ir-q1r2s3', titleId: 'andromeda-ir-title', descId: 'andromeda-ir-desc', label: 'Infrared', color: '#f97316', desc: 'Andromeda galaxy in infrared showing dust lanes and older red stars' },
            ].map((item) => (
              <div key={item.imgId} className="relative rounded-xl overflow-hidden aspect-square group">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`Andromeda in ${item.label}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/90 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="text-xs font-medium mb-0.5" style={{ color: item.color }}>{item.label}</div>
                  <p id={item.titleId} className="text-white text-xs font-medium">Andromeda Galaxy</p>
                  <p id={item.descId} className="text-gray-500 text-xs hidden">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
