import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const stats = [
  { value: '8.7M', label: 'Known Species' },
  { value: '1μm', label: 'Smallest Organism' },
  { value: '99%', label: 'Life is Microscopic' },
  { value: '3.8B', label: 'Years of Evolution' },
]

export default function AboutSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="bg-[#050d12] py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-[#00d4aa] mb-4">
              About MicroCosmos
            </p>
            <h2
              id="about-title"
              className="text-3xl md:text-4xl font-bold text-[#f0faf8] mb-6 leading-tight"
            >
              The Universe That Lives in a Single Drop of Water
            </h2>
            <p
              id="about-desc"
              className="text-[#94b8b0] leading-relaxed mb-6"
            >
              MicroCosmos is a visual exploration of the microscopic world — a realm invisible to the naked eye yet teeming with life, color, and complexity. From the crystalline structures of snowflakes to the alien landscapes of diatoms, every image reveals a universe hiding in plain sight.
            </p>
            <p className="text-[#94b8b0] leading-relaxed mb-10">
              Using cutting-edge electron microscopy and fluorescence imaging, scientists have captured these extraordinary moments, transforming science into art and inviting us to see the world anew.
            </p>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="border border-[rgba(0,212,170,0.15)] rounded-xl p-4">
                  <div className="text-2xl font-black text-[#00d4aa] mb-1">{s.value}</div>
                  <div className="text-sm text-[#94b8b0]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Images grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 rounded-2xl overflow-hidden aspect-video relative">
              <img
                alt="microscopic diatom organism"
                className="w-full h-full object-cover"
                data-strk-img-id="about-img-mc001"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d12]/40 to-transparent" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square relative">
              <img
                alt="microscopic cell structure"
                className="w-full h-full object-cover"
                data-strk-img-id="about-img-mc002"
                data-strk-img="microscopic cell fluorescence biology [about-title]"
                data-strk-img-ratio="1x1"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square relative">
              <img
                alt="microscopic crystal snowflake"
                className="w-full h-full object-cover"
                data-strk-img-id="about-img-mc003"
                data-strk-img="snowflake crystal macro photography [about-title]"
                data-strk-img-ratio="1x1"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
