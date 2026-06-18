import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const spotlightItems = [
  {
    id: 'spot-01',
    titleId: 'spot-title-01',
    descId: 'spot-desc-01',
    imgId: 'spot-img-mc-01',
    title: 'Tardigrade',
    subtitle: 'Water Bear',
    desc: 'The most resilient animal on Earth — microscopic, eight-legged, and virtually indestructible.',
    size: '0.1–1.5 mm',
  },
  {
    id: 'spot-02',
    titleId: 'spot-title-02',
    descId: 'spot-desc-02',
    imgId: 'spot-img-mc-02',
    title: 'Vorticella',
    subtitle: 'Bell Animalcule',
    desc: 'A stalked protozoan that contracts like a spring when disturbed, one of nature\'s most elegant mechanisms.',
    size: '30–150 μm',
  },
  {
    id: 'spot-03',
    titleId: 'spot-title-03',
    descId: 'spot-desc-03',
    imgId: 'spot-img-mc-03',
    title: 'Radiolaria',
    subtitle: 'Silica Architects',
    desc: 'Marine protozoa that build intricate mineral skeletons of breathtaking geometric complexity.',
    size: '0.1–2 mm',
  },
  {
    id: 'spot-04',
    titleId: 'spot-title-04',
    descId: 'spot-desc-04',
    imgId: 'spot-img-mc-04',
    title: 'Rotifer',
    subtitle: 'Wheel Animal',
    desc: 'Microscopic animals with a crown of cilia that spin like a wheel to draw food into their mouths.',
    size: '0.1–0.5 mm',
  },
  {
    id: 'spot-05',
    titleId: 'spot-title-05',
    descId: 'spot-desc-05',
    imgId: 'spot-img-mc-05',
    title: 'Foraminifera',
    subtitle: 'Shell Builders',
    desc: 'Ancient single-celled organisms that build elaborate calcium carbonate shells, forming ocean sediments.',
    size: '0.1–20 mm',
  },
]

export default function SpotlightSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="spotlight" ref={containerRef} className="py-24 px-6 md:px-12 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-medium tracking-widest uppercase text-[#00d4aa] mb-4">
            Organism Spotlight
          </p>
          <h2
            id="spotlight-section-title"
            className="text-4xl md:text-5xl font-bold text-sky-50 mb-4"
          >
            Meet the Inhabitants
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Remarkable microorganisms that push the boundaries of what life can be.
          </p>
        </div>

        {/* Horizontal scroll cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {spotlightItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden border border-[#00d4aa]/10 hover:border-[#00d4aa]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,170,0.15)] bg-[#0d1f2d]"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [spotlight-section-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f2d] via-transparent to-transparent" />
                {/* Size badge */}
                <div className="absolute top-3 left-3 px-2 py-1 bg-[#050a0e]/80 border border-[#00d4aa]/20 rounded-lg text-xs text-[#00d4aa] font-mono">
                  {item.size}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-xs text-slate-500 font-medium tracking-wide mb-1">{item.subtitle}</p>
                <h3 id={item.titleId} className="text-sky-50 font-bold text-lg mb-2">{item.title}</h3>
                <p id={item.descId} className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
