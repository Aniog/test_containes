import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function IntroSection() {
  const containerRef = useRef(null)
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="explore" ref={containerRef} className="py-24 px-6 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00e5c8] mb-4 block">
              What is MicroCosmos?
            </span>
            <h2 id="intro-title" className="text-4xl md:text-5xl font-bold text-sky-50 mb-6 leading-tight">
              A Universe Hidden in Plain Sight
            </h2>
            <p id="intro-desc" className="text-slate-300 text-lg leading-relaxed mb-6">
              Beneath the surface of every drop of water, every grain of soil, and every breath of air lies an entire cosmos of microscopic life. Bacteria, archaea, fungi, protozoa, and viruses form intricate ecosystems that sustain all life on Earth.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Modern microscopy has unlocked these hidden worlds, revealing structures of breathtaking complexity and beauty — from the crystalline geometry of diatoms to the alien elegance of tardigrades.
            </p>
            <div className="flex gap-8">
              <div>
                <div className="text-3xl font-bold text-[#00e5c8]">10³⁰</div>
                <div className="text-slate-400 text-sm mt-1">Microbes on Earth</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#00e5c8]">99%</div>
                <div className="text-slate-400 text-sm mt-1">Of life is microbial</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#00e5c8]">4B+</div>
                <div className="text-slate-400 text-sm mt-1">Years of evolution</div>
              </div>
            </div>
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden aspect-square">
              <img
                alt="microscopic diatom algae"
                className="w-full h-full object-cover"
                data-strk-img-id="intro-img-mc002"
                data-strk-img="[intro-desc] [intro-title] microscopic diatom algae"
                data-strk-img-ratio="1x1"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square mt-8">
              <img
                alt="bacteria under microscope"
                className="w-full h-full object-cover"
                data-strk-img-id="intro-img-mc003"
                data-strk-img="bacteria colorful microscope [intro-title]"
                data-strk-img-ratio="1x1"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square">
              <img
                alt="tardigrade water bear microscope"
                className="w-full h-full object-cover"
                data-strk-img-id="intro-img-mc004"
                data-strk-img="tardigrade water bear electron microscope [intro-title]"
                data-strk-img-ratio="1x1"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square mt-8">
              <img
                alt="protozoa microscopic life"
                className="w-full h-full object-cover"
                data-strk-img-id="intro-img-mc005"
                data-strk-img="protozoa microscopic life colorful [intro-title]"
                data-strk-img-ratio="1x1"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
