import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const features = [
  {
    id: 'feat-01',
    titleId: 'feat-title-01',
    descId: 'feat-desc-01',
    imgId: 'feat-img-mc-01',
    title: 'Electron Microscopy',
    desc: 'Scanning and transmission electron microscopes reveal surface textures and internal structures at nanometer resolution, exposing the atomic architecture of life.',
    tag: 'Technology',
  },
  {
    id: 'feat-02',
    titleId: 'feat-title-02',
    descId: 'feat-desc-02',
    imgId: 'feat-img-mc-02',
    title: 'Fluorescence Imaging',
    desc: 'Fluorescent dyes and proteins light up specific cellular components, turning the invisible machinery of cells into a vivid, colorful spectacle.',
    tag: 'Technique',
  },
  {
    id: 'feat-03',
    titleId: 'feat-title-03',
    descId: 'feat-desc-03',
    imgId: 'feat-img-mc-03',
    title: 'Microbial Ecosystems',
    desc: 'Entire ecosystems exist within a single drop of pond water — predators, prey, and decomposers locked in an ancient dance of survival.',
    tag: 'Ecology',
  },
]

export default function FeaturedSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="featured" ref={containerRef} className="py-24 px-6 md:px-12 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-medium tracking-widest uppercase text-[#00d4aa] mb-4">
            Deep Dives
          </p>
          <h2
            id="featured-section-title"
            className="text-4xl md:text-5xl font-bold text-sky-50 mb-4"
          >
            Featured Stories
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            In-depth explorations of the most fascinating aspects of the microscopic world.
          </p>
        </div>

        {/* Feature cards */}
        <div className="space-y-8">
          {features.map((feat, i) => (
            <div
              key={feat.id}
              className={`group grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-[#00d4aa]/10 hover:border-[#00d4aa]/30 transition-all duration-300 ${
                i % 2 === 1 ? 'md:[direction:rtl]' : ''
              }`}
            >
              {/* Image */}
              <div className="relative h-72 md:h-auto overflow-hidden" style={i % 2 === 1 ? { direction: 'ltr' } : {}}>
                <img
                  alt={feat.title}
                  data-strk-img-id={feat.imgId}
                  data-strk-img={`[${feat.descId}] [${feat.titleId}] [featured-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d1f2d]/60" />
              </div>

              {/* Content */}
              <div
                className="bg-[#0d1f2d] p-10 flex flex-col justify-center"
                style={i % 2 === 1 ? { direction: 'ltr' } : {}}
              >
                <span className="text-xs font-semibold tracking-widest uppercase text-[#00d4aa] mb-4">
                  {feat.tag}
                </span>
                <h3 id={feat.titleId} className="text-sky-50 font-bold text-2xl md:text-3xl mb-4 leading-tight">
                  {feat.title}
                </h3>
                <p id={feat.descId} className="text-slate-400 text-base leading-relaxed mb-6">
                  {feat.desc}
                </p>
                <button className="self-start px-6 py-3 border border-[#00d4aa]/30 text-[#00d4aa] text-sm font-semibold rounded-xl hover:bg-[#00d4aa]/10 hover:border-[#00d4aa] transition-all duration-300">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
