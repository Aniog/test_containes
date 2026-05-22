import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const stats = [
  { value: '8.7M', label: 'Estimated Species', desc: 'on Earth' },
  { value: '1μm', label: 'Average Bacteria', desc: 'in size' },
  { value: '10:1', label: 'Microbes to', desc: 'human cells' },
  { value: '3.5B', label: 'Years of', desc: 'microbial life' },
]

export default function AboutSection() {
  const containerRef = useRef(null)
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-[#050a0e]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text */}
          <div>
            <span className="text-xs font-medium tracking-widest uppercase text-[#00d4c8] mb-4 block">
              About MicroCosmos
            </span>
            <h2
              id="about-title"
              className="text-3xl md:text-4xl font-bold text-[#f0f8ff] mb-6 leading-snug"
            >
              A Universe Too Small to See, Too Vast to Ignore
            </h2>
            <p
              id="about-desc"
              className="text-[#c8d8e8] leading-relaxed mb-6"
            >
              The microbial world is the foundation of all life on Earth. From the bacteria in your gut to the fungi decomposing a fallen leaf, microscopic organisms shape every ecosystem, every breath, every bite of food.
            </p>
            <p className="text-[#c8d8e8] leading-relaxed mb-8">
              MicroCosmos is a visual celebration of this hidden universe — captured through electron microscopes, fluorescence imaging, and cutting-edge photography that reveals the extraordinary beauty of the infinitely small.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-[#0d1b2a] border border-[#1e3a4a] rounded-2xl p-5">
                  <div className="text-2xl font-extrabold text-[#00d4c8] mb-1">{s.value}</div>
                  <div className="text-sm font-semibold text-[#f0f8ff]">{s.label}</div>
                  <div className="text-xs text-[#6b8fa8]">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image stack */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-[#1e3a4a] shadow-[0_0_40px_rgba(0,212,200,0.15)]">
              <img
                alt="Microscopic life under electron microscope"
                className="w-full object-cover"
                data-strk-img-id="about-img-d4e5f6"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-2xl overflow-hidden border-2 border-[#00d4c8]/40 shadow-[0_0_20px_rgba(0,212,200,0.2)]">
              <img
                alt="Bacteria colony microscope view"
                className="w-full h-full object-cover"
                data-strk-img-id="about-inset-g7h8i9"
                data-strk-img="bacteria colony fluorescence microscopy"
                data-strk-img-ratio="1x1"
                data-strk-img-width="200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
