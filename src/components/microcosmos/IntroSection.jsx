import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const features = [
  {
    icon: '🔬',
    title: 'Microscopic Scale',
    desc: 'Organisms measured in micrometers — a thousand times smaller than a millimeter.',
  },
  {
    icon: '🌊',
    title: 'Aquatic Realms',
    desc: 'Every drop of water holds thousands of living creatures invisible to the naked eye.',
  },
  {
    icon: '🧬',
    title: 'Building Blocks of Life',
    desc: 'Microorganisms form the foundation of all ecosystems on Earth.',
  },
]

export default function IntroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="intro" className="bg-gray-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <p className="text-teal-400 text-sm uppercase tracking-widest font-semibold mb-4">
              What is MicroCosmos?
            </p>
            <h2
              id="intro-title"
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              A Universe Hidden in Plain Sight
            </h2>
            <p id="intro-desc" className="text-gray-300 text-lg leading-relaxed mb-6">
              Beneath the surface of every pond, soil particle, and living body exists an entire cosmos of microscopic life. Bacteria, protozoa, algae, fungi, and countless other organisms form intricate ecosystems that sustain all life on Earth.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-10">
              MicroCosmos is a visual celebration of this hidden world — bringing the extraordinary beauty of microscopic life to everyone through stunning imagery and scientific wonder.
            </p>
            <div className="flex flex-col gap-6">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <span className="text-2xl mt-1">{f.icon}</span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{f.title}</h3>
                    <p className="text-gray-400 text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-teal-500/10 border border-gray-700/40">
              <img
                alt="Microscopic life under the lens"
                className="w-full h-full object-cover"
                data-strk-img-id="intro-img-mc002"
                data-strk-img="[intro-desc] [intro-title]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-gray-900 border border-teal-500/30 rounded-2xl p-5 shadow-xl">
              <p className="text-teal-400 text-3xl font-bold">10⁶</p>
              <p className="text-gray-300 text-sm mt-1">Microbes per<br />teaspoon of soil</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
