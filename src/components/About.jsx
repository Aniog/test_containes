import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const highlights = [
  {
    id: 'about-h1',
    icon: '🔬',
    title: 'Microscopic Life',
    titleId: 'about-h1-title',
    descId: 'about-h1-desc',
    desc: 'Billions of microorganisms inhabit every surface, soil, and drop of water on Earth.',
    imgId: 'about-img-h1-a2b3c4',
  },
  {
    id: 'about-h2',
    icon: '🧬',
    title: 'Cellular Wonders',
    titleId: 'about-h2-title',
    descId: 'about-h2-desc',
    desc: 'The human body contains trillions of cells, each a complex universe of its own.',
    imgId: 'about-img-h2-d5e6f7',
  },
  {
    id: 'about-h3',
    icon: '💎',
    title: 'Crystal Structures',
    titleId: 'about-h3-title',
    descId: 'about-h3-desc',
    desc: 'Minerals and compounds form breathtaking geometric patterns at the microscopic scale.',
    imgId: 'about-img-h3-g8h9i0',
  },
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-24 px-6 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#00d4ff] text-sm font-semibold uppercase tracking-widest mb-3 block">
            What is MicroCosmos?
          </span>
          <h2
            id="about-section-title"
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            A Universe in Miniature
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] mx-auto mb-6 rounded-full" />
          <p
            id="about-section-desc"
            className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            The microcosmos is a world that exists all around us, yet remains invisible to the naked eye. Through the lens of a microscope, ordinary matter transforms into extraordinary landscapes of unimaginable complexity and beauty.
          </p>
        </div>

        {/* Two-column layout: text + image */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3
              id="about-main-title"
              className="text-3xl font-bold text-white mb-5"
            >
              Discovering the Invisible
            </h3>
            <p
              id="about-main-desc"
              className="text-slate-300 leading-relaxed mb-5"
            >
              Since Antonie van Leeuwenhoek first peered through a primitive microscope in the 17th century, humanity has been captivated by the teeming life that exists beyond our perception. Today, electron microscopes and advanced imaging techniques reveal structures at the nanometer scale.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              From the spiraling elegance of diatom shells to the alien geometry of snowflake crystals, the microcosmos is a testament to nature's boundless creativity operating at scales we can barely comprehend.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Bacteria', 'Viruses', 'Cells', 'Crystals', 'Fungi', 'Pollen'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-[#0f1f3d] border border-[#1e3a5f] text-[#00d4ff] text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-[#1e3a5f] shadow-[0_0_40px_rgba(0,212,255,0.1)]">
            <img
              alt="Microscopic world"
              data-strk-img-id="about-main-img-j1k2l3"
              data-strk-img="[about-main-desc] [about-main-title] [about-section-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/60 to-transparent" />
          </div>
        </div>

        {/* Highlight cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-[#0f1f3d] border border-[#1e3a5f] overflow-hidden hover:border-[#00d4ff]/40 hover:shadow-[0_0_30px_rgba(0,212,255,0.1)] transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [about-section-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f3d] to-transparent" />
              </div>
              <div className="p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 id={item.titleId} className="text-white font-semibold text-lg mb-2">
                  {item.title}
                </h4>
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
