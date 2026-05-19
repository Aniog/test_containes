import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const worlds = [
  {
    id: 'world-1',
    titleId: 'world-t1',
    descId: 'world-d1',
    title: 'The Ocean Microbiome',
    desc: 'Beneath every wave lies a living soup of bacteria, viruses, and phytoplankton — the invisible engine driving Earth\'s oxygen supply and climate.',
    imgId: 'world-img-mc001',
    ratio: '16x9',
    width: 1200,
  },
  {
    id: 'world-2',
    titleId: 'world-t2',
    descId: 'world-d2',
    title: 'Soil Ecosystems',
    desc: 'A single teaspoon of healthy soil contains more microorganisms than there are people on Earth — fungi, bacteria, and nematodes weaving a web of life.',
    imgId: 'world-img-mc002',
    ratio: '16x9',
    width: 1200,
  },
  {
    id: 'world-3',
    titleId: 'world-t3',
    descId: 'world-d3',
    title: 'The Human Body',
    desc: 'You are never alone — trillions of microbes call your body home, outnumbering your own cells and playing a vital role in your health and immunity.',
    imgId: 'world-img-mc003',
    ratio: '16x9',
    width: 1200,
  },
]

export default function WorldsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="worlds" ref={containerRef} className="bg-[#0a1a24] py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-[#00d4aa] mb-4">
            Micro Worlds
          </p>
          <h2
            id="worlds-title"
            className="text-3xl md:text-4xl font-bold text-[#f0faf8] mb-4"
          >
            Ecosystems Within Ecosystems
          </h2>
          <p className="text-[#94b8b0] max-w-2xl mx-auto">
            Every environment on Earth harbors its own microscopic civilization — complex, interdependent, and essential to all life.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {worlds.map((w, i) => (
            <div
              key={w.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden aspect-video shadow-[0_0_40px_rgba(0,212,170,0.1)]">
                  <img
                    alt={w.title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={w.imgId}
                    data-strk-img={`[${w.descId}] [${w.titleId}] [worlds-title]`}
                    data-strk-img-ratio={w.ratio}
                    data-strk-img-width={w.width}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1a24]/50 to-transparent" />
                </div>
              </div>
              <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="inline-block text-xs font-medium tracking-widest uppercase text-[#00d4aa] bg-[#00d4aa]/10 border border-[#00d4aa]/20 px-3 py-1 rounded-full mb-4">
                  World {String(i + 1).padStart(2, '0')}
                </span>
                <h3 id={w.titleId} className="text-2xl md:text-3xl font-bold text-[#f0faf8] mb-4">
                  {w.title}
                </h3>
                <p id={w.descId} className="text-[#94b8b0] leading-relaxed text-lg">
                  {w.desc}
                </p>
                <div className="mt-6 w-16 h-px bg-gradient-to-r from-[#00d4aa] to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
