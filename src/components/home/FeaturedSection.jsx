import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const featuredItems = [
  {
    id: 'water-bear',
    title: 'The Water Bear',
    subtitle: 'Nature\'s Toughest Survivor',
    desc: 'Tardigrades can survive extreme temperatures, radiation, and even the vacuum of space. These eight-legged micro-animals are found everywhere on Earth — from deep ocean trenches to the highest mountains.',
    titleId: 'featured-water-bear-title',
    subtitleId: 'featured-water-bear-subtitle',
    descId: 'featured-water-bear-desc',
    imgId: 'featured-water-bear-img-8f2a9c',
  },
  {
    id: 'diatoms-art',
    title: 'Diatoms: Living Glass',
    subtitle: 'Microscopic Architects',
    desc: 'Diatoms create intricate glass shells from dissolved silica. Each species builds a unique geometric pattern, producing some of the most beautiful structures in nature — all at a scale invisible to the human eye.',
    titleId: 'featured-diatoms-art-title',
    subtitleId: 'featured-diatoms-art-subtitle',
    descId: 'featured-diatoms-art-desc',
    imgId: 'featured-diatoms-art-img-6d34fa',
  },
]

export default function FeaturedSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="featured" ref={containerRef} className="py-20 md:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 id="featured-section-title" className="text-3xl md:text-4xl font-bold mb-4">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              Stories
            </span>
          </h2>
          <p id="featured-section-desc" className="text-slate-400 max-w-xl mx-auto text-lg">
            Deep dives into the most fascinating microscopic phenomena.
          </p>
        </div>

        <div className="space-y-16">
          {featuredItems.map((item, index) => (
            <article
              key={item.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] border border-slate-800 group">
                  <img
                    alt={item.title}
                    data-strk-img-id={item.imgId}
                    data-strk-img={`[${item.descId}] [${item.subtitleId}] [${item.titleId}] [featured-section-desc] [featured-section-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-2xl" />
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-4">
                <span id={item.subtitleId} className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">
                  {item.subtitle}
                </span>
                <h3 id={item.titleId} className="text-2xl md:text-3xl font-bold text-white">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-slate-300 leading-relaxed text-base">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}