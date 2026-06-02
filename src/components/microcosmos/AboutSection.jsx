import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const STATS = [
  { value: '10,000+', label: 'Species Documented' },
  { value: '0.001mm', label: 'Smallest Organism' },
  { value: '3.8B', label: 'Years of Evolution' },
  { value: '99%', label: 'Life is Microscopic' },
]

export default function AboutSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">About MicroCosmos</p>
            <h2 id="about-title" className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              The Universe Beneath Our Feet
            </h2>
            <p id="about-desc" className="text-gray-300 leading-relaxed mb-6">
              MicroCosmos is a scientific exploration platform dedicated to revealing the extraordinary world that exists beyond the limits of the naked eye. From single-celled organisms dancing in a drop of water to the intricate lattice of a snowflake crystal, we document and celebrate the microscopic wonders that form the foundation of all life.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Using cutting-edge electron microscopy, fluorescence imaging, and confocal techniques, our team of researchers and photographers capture images that transform science into art — making the invisible not just visible, but awe-inspiring.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-gray-900 border border-gray-700 rounded-2xl p-5">
                  <div className="text-2xl font-black text-teal-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
              <img
                alt="Microscopic organism under electron microscope"
                data-strk-img-id="about-img-mc-d4e5f6"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-teal-500 text-white rounded-2xl px-5 py-3 shadow-xl">
              <div className="text-2xl font-black">20+</div>
              <div className="text-xs font-medium">Years of Research</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
