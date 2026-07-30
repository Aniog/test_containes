import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const stats = [
  { value: '10³⁰', label: 'Microbes on Earth' },
  { value: '37T', label: 'Cells in Human Body' },
  { value: '1000+', label: 'Species per Gram of Soil' },
  { value: '3.5B', label: 'Years of Microbial Life' },
]

export default function AboutSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="about" className="bg-gray-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-teal-400 text-sm uppercase tracking-widest font-semibold mb-4">
              What is MicroCosmos?
            </p>
            <h2 id="about-title" className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              A Universe Too Small to See
            </h2>
            <p id="about-desc" className="text-gray-300 text-lg leading-relaxed mb-6">
              Beneath the threshold of human vision lies an entire cosmos teeming with life. Microorganisms — bacteria, archaea, fungi, protozoa, and viruses — have shaped our planet for billions of years.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              From the depths of ocean trenches to the surface of your skin, these invisible architects drive every ecosystem on Earth. MicroCosmos invites you to witness their extraordinary world through the lens of modern microscopy.
            </p>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-gray-900 border border-gray-700/50 rounded-2xl p-5">
                  <div className="text-3xl font-black text-teal-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-square shadow-2xl shadow-teal-500/10">
              <img
                data-strk-img-id="about-img-mc002"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="1x1"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Microscopic life"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-3xl border border-teal-500/20 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
