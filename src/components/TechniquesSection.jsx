import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const techniques = [
  {
    id: 'tech-light',
    name: 'Light Microscopy',
    desc: 'The oldest and most common form, using visible light and lenses to magnify specimens up to 2,000×.',
    imgId: 'tech-img-mc030',
    imgQuery: 'light microscopy laboratory colorful cells',
    ratio: '4x3',
  },
  {
    id: 'tech-sem',
    name: 'Scanning Electron Microscopy',
    desc: 'Uses a focused beam of electrons to create detailed 3D surface images with magnifications up to 500,000×.',
    imgId: 'tech-img-mc031',
    imgQuery: 'scanning electron microscope SEM detailed surface image',
    ratio: '4x3',
  },
  {
    id: 'tech-fluor',
    name: 'Fluorescence Microscopy',
    desc: 'Fluorescent dyes illuminate specific structures within cells, revealing the inner workings of life in vivid color.',
    imgId: 'tech-img-mc032',
    imgQuery: 'fluorescence microscopy colorful glowing cells',
    ratio: '4x3',
  },
]

export default function TechniquesSection() {
  const containerRef = useRef(null)
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-24 px-6 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#00e5c8] mb-4 block">
            How We See
          </span>
          <h2 id="tech-title" className="text-4xl md:text-5xl font-bold text-sky-50 mb-4">
            Microscopy Techniques
          </h2>
          <p id="tech-desc" className="text-slate-400 text-lg max-w-2xl mx-auto">
            Scientists use a range of powerful imaging technologies to peer into the microbial world and capture its hidden beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techniques.map((tech) => (
            <div key={tech.id} className="group">
              <div className="rounded-2xl overflow-hidden mb-6 aspect-[4/3]">
                <img
                  alt={tech.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={tech.imgId}
                  data-strk-img={`${tech.imgQuery} [tech-desc] [tech-title]`}
                  data-strk-img-ratio={tech.ratio}
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <h3 id={tech.id} className="text-xl font-bold text-sky-50 mb-3">{tech.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{tech.desc}</p>
            </div>
          ))}
        </div>

        {/* Wide feature image */}
        <div className="mt-16 rounded-2xl overflow-hidden aspect-[21/9] relative">
          <img
            alt="microscopy laboratory research"
            className="w-full h-full object-cover"
            data-strk-img-id="tech-img-mc033"
            data-strk-img="[tech-desc] [tech-title] microscopy laboratory research scientist"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050d1a]/80 to-transparent flex items-center">
            <div className="p-10 max-w-lg">
              <h3 className="text-3xl font-bold text-sky-50 mb-4">Pushing the Boundaries of Vision</h3>
              <p className="text-slate-300 leading-relaxed">
                Modern cryo-electron microscopy can now resolve individual atoms, allowing scientists to visualize the molecular machinery of life itself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
