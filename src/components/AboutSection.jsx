import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const stats = [
  { value: '10³⁰', label: 'Microbes on Earth' },
  { value: '37T', label: 'Cells in Human Body' },
  { value: '1μm', label: 'Average Bacteria Size' },
  { value: '99%', label: 'Species Undiscovered' },
]

export default function AboutSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-24 px-6 md:px-12 bg-[#050a0e]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-[#00d4aa] mb-4">
              About MicroCosmos
            </p>
            <h2
              id="about-title"
              className="text-4xl md:text-5xl font-bold text-sky-50 mb-6 leading-tight"
            >
              Life Exists Beyond What the Eye Can See
            </h2>
            <p
              id="about-desc"
              className="text-slate-400 text-lg leading-relaxed mb-6"
            >
              The microcosmos is a world teeming with life — invisible to the naked eye yet
              fundamental to all existence. From the bacteria that shaped Earth's atmosphere
              to the intricate machinery inside every living cell, the microscopic realm is
              the true foundation of life.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Through the lens of modern microscopy, we can now witness this hidden universe
              in stunning detail — revealing structures of breathtaking complexity and beauty
              that have existed for billions of years.
            </p>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border border-[#00d4aa]/15 rounded-2xl p-5 bg-[#0a1628]"
                >
                  <div className="text-3xl font-black text-[#00d4aa] mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image stack */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#00d4aa]/15 shadow-[0_0_40px_rgba(0,212,170,0.1)]">
              <img
                alt="Microscopic cell structure"
                data-strk-img-id="about-img-mc002"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a0e]/60 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#0d1f2d] border border-[#00d4aa]/20 rounded-2xl p-4 shadow-[0_0_20px_rgba(0,212,170,0.15)]">
              <div className="text-[#00d4aa] text-2xl font-black">4B+</div>
              <div className="text-slate-400 text-xs">Years of microbial life</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
