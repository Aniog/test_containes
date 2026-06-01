import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const stats = [
  { value: '10,000×', label: 'Maximum magnification' },
  { value: '2,400+', label: 'Specimens catalogued' },
  { value: '47', label: 'Microscopy techniques' },
  { value: '0.1 nm', label: 'Smallest resolved feature' },
]

const closeups = [
  { id: 'cu1', titleId: 'closeup-cu1-title', descId: 'closeup-cu1-desc', imgId: 'closeup-img-cu1-a1b2c3', title: 'Mitochondria', desc: 'Powerhouse of the cell under transmission electron microscope' },
  { id: 'cu2', titleId: 'closeup-cu2-title', descId: 'closeup-cu2-desc', imgId: 'closeup-img-cu2-d4e5f6', title: 'Virus Particle', desc: 'Bacteriophage virus attaching to bacterial cell wall' },
  { id: 'cu3', titleId: 'closeup-cu3-title', descId: 'closeup-cu3-desc', imgId: 'closeup-img-cu3-g7h8i9', title: 'Nano Crystal', desc: 'Quantum dot nanocrystal fluorescence under UV light' },
  { id: 'cu4', titleId: 'closeup-cu4-title', descId: 'closeup-cu4-desc', imgId: 'closeup-img-cu4-j1k2l3', title: 'Spore Surface', desc: 'Fern spore surface texture at 5000x magnification' },
  { id: 'cu5', titleId: 'closeup-cu5-title', descId: 'closeup-cu5-desc', imgId: 'closeup-img-cu5-m4n5o6', title: 'Muscle Fiber', desc: 'Striated skeletal muscle fiber cross-section' },
  { id: 'cu6', titleId: 'closeup-cu6-title', descId: 'closeup-cu6-desc', imgId: 'closeup-img-cu6-p7q8r9', title: 'Coral Polyp', desc: 'Coral polyp tentacles under fluorescent microscopy' },
]

export default function StatsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-gray-950 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center bg-gray-900 border border-gray-800 rounded-2xl p-6"
            >
              <div className="text-3xl md:text-4xl font-black text-teal-400 mb-2">{s.value}</div>
              <div className="text-gray-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="text-center mb-20">
          <blockquote className="text-2xl md:text-3xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed italic">
            "The world is full of magical things patiently waiting for our wits to grow sharper."
          </blockquote>
          <p className="text-gray-500 mt-4 text-sm">— Bertrand Russell</p>
        </div>

        {/* Close-up strip */}
        <div>
          <h2
            id="closeup-section-title"
            className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
          >
            Extreme Close-Ups
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {closeups.map((c) => (
              <div
                key={c.id}
                className="group relative rounded-xl overflow-hidden aspect-square bg-gray-800"
              >
                <img
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.descId}] [${c.titleId}] [closeup-section-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span id={c.titleId} className="sr-only">{c.title}</span>
                <span id={c.descId} className="sr-only">{c.desc}</span>
                <div className="absolute inset-0 bg-gray-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <p className="text-white text-xs font-medium">{c.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
