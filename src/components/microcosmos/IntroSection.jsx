import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const stats = [
  { value: '8.7M', label: 'Known Species' },
  { value: '1μm', label: 'Smallest Life Form' },
  { value: '3.8B', label: 'Years of Evolution' },
  { value: '99%', label: 'Invisible to Naked Eye' },
]

export default function IntroSection() {
  const containerRef = useRef(null)
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="explore" ref={containerRef} className="py-24 md:py-36 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-4 block">About MicroCosmos</span>
            <h2 id="intro-title" className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              A Universe Hiding in Plain Sight
            </h2>
            <p id="intro-desc" className="text-slate-300 text-lg leading-relaxed mb-6">
              Beneath the threshold of human perception lies an entire cosmos — teeming with life, color, and complexity. Bacteria, protozoa, fungi, and microscopic animals form intricate ecosystems that sustain all life on Earth.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              MicroCosmos is a visual celebration of this hidden world, bringing the extraordinary beauty of microscopic life to everyone through stunning imagery and scientific wonder.
            </p>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="border border-slate-800 rounded-xl p-4 bg-slate-900/50">
                  <div className="text-3xl font-black text-cyan-400 mb-1">{s.value}</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-square group">
              <img
                alt="microscopic life forms under microscope"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                data-strk-img-id="intro-img-mc002"
                data-strk-img="[intro-desc] [intro-title]"
                data-strk-img-ratio="1x1"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-slate-900 border border-slate-700 rounded-2xl p-4 shadow-xl">
              <div className="text-cyan-400 font-bold text-lg">10,000×</div>
              <div className="text-slate-400 text-xs">Magnification</div>
            </div>
            <div className="absolute -top-4 -right-4 bg-violet-500/10 border border-violet-500/30 rounded-2xl p-4 shadow-xl">
              <div className="text-violet-400 font-bold text-lg">HD</div>
              <div className="text-slate-400 text-xs">Electron Microscopy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
