import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const stats = [
  { value: '10,000×', label: 'Magnification Power', desc: 'Electron microscopes reveal atomic structures' },
  { value: '37 Trillion', label: 'Cells in Human Body', desc: 'Each one a universe of its own' },
  { value: '1 Micron', label: 'Bacterial Size', desc: 'One millionth of a meter' },
  { value: '99%', label: 'Life Invisible', desc: 'Of Earth\'s biodiversity is microscopic' },
]

const AboutSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="bg-[#0a0f1e] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Text */}
          <div>
            <p className="text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">About MicroCosmos</p>
            <h2 id="about-title" className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              A Universe Too Small to See
            </h2>
            <p id="about-desc" className="text-slate-400 text-lg leading-relaxed mb-6">
              MicroCosmos is a visual journey into the world that exists beyond the limits of human vision. Through the lens of powerful microscopes, we reveal the extraordinary beauty of cells, bacteria, crystals, and organisms that make up the fabric of all life.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              From the spiraling architecture of DNA to the alien landscapes of pollen grains, every image tells a story of complexity, elegance, and the astonishing ingenuity of nature at its smallest scale.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Electron Microscopy', 'Fluorescence Imaging', 'Confocal Microscopy', 'Cryo-EM'].map((tag) => (
                <span key={tag} className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-cyan-500/5 rounded-3xl blur-xl" />
            <img
              alt="Microscopic cell structure"
              data-strk-img-id="about-img-mc002"
              data-strk-img="[about-desc] [about-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="relative w-full rounded-2xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 object-cover"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 text-center hover:border-cyan-500/30 transition-all duration-300">
              <div className="text-3xl font-black text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-slate-500 text-xs leading-relaxed">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
