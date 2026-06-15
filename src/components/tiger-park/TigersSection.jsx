import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const tigers = [
  {
    id: 'white-tiger',
    name: '白虎',
    latin: 'Panthera tigris',
    desc: '白虎是孟加拉虎的罕见变种，因基因突变而呈现纯白色皮毛与深色条纹，蓝色眼睛令人着迷。',
    tag: '珍稀品种',
    titleId: 'tiger-white-title',
    descId: 'tiger-white-desc',
    imgId: 'tiger-card-white-d4e5f6',
  },
  {
    id: 'bengal-tiger',
    name: '孟加拉虎',
    latin: 'Panthera tigris tigris',
    desc: '孟加拉虎是世界上数量最多的老虎亚种，以其橙色皮毛和黑色条纹著称，是印度的国家象征。',
    tag: '濒危物种',
    titleId: 'tiger-bengal-title',
    descId: 'tiger-bengal-desc',
    imgId: 'tiger-card-bengal-g7h8i9',
  },
  {
    id: 'siberian-tiger',
    name: '东北虎',
    latin: 'Panthera tigris altaica',
    desc: '东北虎是体型最大的老虎亚种，生活在中国东北和俄罗斯远东地区，能在极寒环境中生存。',
    tag: '极度濒危',
    titleId: 'tiger-siberian-title',
    descId: 'tiger-siberian-desc',
    imgId: 'tiger-card-siberian-j1k2l3',
  },
]

export default function TigersSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="tigers" ref={containerRef} className="py-24 md:py-32" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-amber-500 text-sm tracking-widest uppercase font-medium">我们的居民</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            认识老虎们
          </h2>
          <div className="w-16 h-0.5 bg-amber-600 mx-auto" />
        </div>

        {/* Tiger cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {tigers.map((tiger) => (
            <article
              key={tiger.id}
              className="rounded-2xl overflow-hidden border border-neutral-800 hover:border-amber-600/40 transition-all duration-300 group"
              style={{ backgroundColor: '#111111' }}
            >
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  alt={tiger.name}
                  data-strk-img-id={tiger.imgId}
                  data-strk-img={`[${tiger.descId}] [${tiger.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-amber-600/90 text-white text-xs font-semibold rounded tracking-wide">
                  {tiger.tag}
                </span>
              </div>
              <div className="p-6">
                <h3
                  id={tiger.titleId}
                  className="text-2xl font-bold text-white mb-1"
                  style={{ fontFamily: "'Noto Serif SC', serif" }}
                >
                  {tiger.name}
                </h3>
                <p className="text-amber-500/70 text-xs italic mb-3">{tiger.latin}</p>
                <p id={tiger.descId} className="text-neutral-400 text-sm leading-relaxed">
                  {tiger.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
