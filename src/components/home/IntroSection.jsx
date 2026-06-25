import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const highlights = [
  {
    id: 'intro-h1',
    titleId: 'intro-h1-title',
    descId: 'intro-h1-desc',
    imgId: 'intro-img-mc011',
    title: 'Bacteria & Microbes',
    desc: 'Single-celled organisms that form the foundation of all life on Earth, visible only under powerful microscopes.',
  },
  {
    id: 'intro-h2',
    titleId: 'intro-h2-title',
    descId: 'intro-h2-desc',
    imgId: 'intro-img-mc012',
    title: 'Crystal Structures',
    desc: 'Minerals and salts form breathtaking geometric patterns at the microscopic scale, revealing nature\'s mathematical precision.',
  },
  {
    id: 'intro-h3',
    titleId: 'intro-h3-title',
    descId: 'intro-h3-desc',
    imgId: 'intro-img-mc013',
    title: 'Living Cells',
    desc: 'The building blocks of all living organisms — each cell a complex universe of organelles, membranes, and molecular machinery.',
  },
]

export default function IntroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="intro" className="py-24 md:py-32 px-4 md:px-8 bg-[#050a14]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest uppercase text-[#00d4aa] mb-4 block">
            — What is MicroCosmos —
          </span>
          <h2
            id="intro-section-title"
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            A Universe Too Small to See
          </h2>
          <p
            id="intro-section-desc"
            className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            The microcosmos is a world that exists all around us, yet remains invisible to the naked eye. Through the lens of powerful microscopes, we discover landscapes of alien beauty — intricate structures, vibrant colors, and forms of life that defy imagination.
          </p>
        </div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div
              key={item.id}
              className="group bg-[#0d1a2e] border border-slate-700/50 rounded-2xl overflow-hidden hover:border-[#00d4aa]/40 hover:shadow-xl hover:shadow-[#00d4aa]/10 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [intro-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a2e] via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <h3 id={item.titleId} className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
