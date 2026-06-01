import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const worlds = [
  {
    id: 'w1',
    titleId: 'world-w1-title',
    descId: 'world-w1-desc',
    bgId: 'world-bg-w1-a1b2c3',
    imgId: 'world-img-w1-d4e5f6',
    title: 'The Cell World',
    desc: 'Explore the fundamental unit of life — from mitochondria to the nucleus, every organelle has a story.',
    stat: '37 Trillion',
    statLabel: 'cells in the human body',
    accent: 'from-teal-500/20 to-transparent',
    border: 'border-teal-500/30',
    tag: 'Biology',
    tagColor: 'text-teal-400 bg-teal-400/10',
  },
  {
    id: 'w2',
    titleId: 'world-w2-title',
    descId: 'world-w2-desc',
    bgId: 'world-bg-w2-g7h8i9',
    imgId: 'world-img-w2-j1k2l3',
    title: 'Crystal Kingdoms',
    desc: 'Minerals and salts form breathtaking geometric structures — nature\'s own architecture at the atomic scale.',
    stat: '4,000+',
    statLabel: 'known mineral species',
    accent: 'from-violet-500/20 to-transparent',
    border: 'border-violet-500/30',
    tag: 'Geology',
    tagColor: 'text-violet-400 bg-violet-400/10',
  },
  {
    id: 'w3',
    titleId: 'world-w3-title',
    descId: 'world-w3-desc',
    bgId: 'world-bg-w3-m4n5o6',
    imgId: 'world-img-w3-p7q8r9',
    title: 'Insect Architecture',
    desc: 'Compound eyes, wing scales, and exoskeleton textures reveal an engineering marvel in every arthropod.',
    stat: '1 Million',
    statLabel: 'described insect species',
    accent: 'from-cyan-500/20 to-transparent',
    border: 'border-cyan-500/30',
    tag: 'Entomology',
    tagColor: 'text-cyan-400 bg-cyan-400/10',
  },
  {
    id: 'w4',
    titleId: 'world-w4-title',
    descId: 'world-w4-desc',
    bgId: 'world-bg-w4-s1t2u3',
    imgId: 'world-img-w4-v4w5x6',
    title: 'Microbial Forests',
    desc: 'Bacteria, fungi, and archaea form complex communities — invisible ecosystems that shape our world.',
    stat: '10^30',
    statLabel: 'microbes on Earth',
    accent: 'from-emerald-500/20 to-transparent',
    border: 'border-emerald-500/30',
    tag: 'Microbiology',
    tagColor: 'text-emerald-400 bg-emerald-400/10',
  },
]

export default function WorldsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="worlds" ref={containerRef} className="bg-gray-900 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-violet-400/10 border border-violet-400/30 text-violet-400 text-xs font-medium uppercase tracking-widest">
            Explore
          </span>
          <h2
            id="worlds-section-title"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Worlds Within Worlds
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Each domain of the microscopic universe has its own rules, beauty, and wonder.
          </p>
        </div>

        {/* Top two large cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {worlds.slice(0, 2).map((w) => (
            <WorldCard key={w.id} world={w} large />
          ))}
        </div>

        {/* Bottom three smaller cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {worlds.slice(2).map((w) => (
            <WorldCard key={w.id} world={w} large={false} />
          ))}
        </div>
      </div>
    </section>
  )
}

function WorldCard({ world: w, large }) {
  return (
    <div
      className={`group relative rounded-2xl overflow-hidden border ${w.border} bg-gray-800 hover:scale-[1.01] transition-transform duration-300`}
    >
      {/* Background image */}
      <div
        className={`relative ${large ? 'h-72' : 'h-56'} overflow-hidden`}
      >
        <img
          data-strk-img-id={w.imgId}
          data-strk-img={`[${w.descId}] [${w.titleId}] [worlds-section-title]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={w.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span id={w.titleId} className="sr-only">{w.title}</span>
        <span id={w.descId} className="sr-only">{w.desc}</span>
        <div className={`absolute inset-0 bg-gradient-to-t ${w.accent}`} />
      </div>

      {/* Content */}
      <div className="p-6">
        <span className={`inline-block mb-3 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-widest ${w.tagColor}`}>
          {w.tag}
        </span>
        <h3 className="text-white font-bold text-2xl mb-2">{w.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{w.desc}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-white font-black text-2xl">{w.stat}</span>
          <span className="text-gray-500 text-sm">{w.statLabel}</span>
        </div>
      </div>
    </div>
  )
}
