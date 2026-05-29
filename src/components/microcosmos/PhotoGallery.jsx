import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const photos = [
  { id: 'gal-mc020', titleId: 'gal-t1', descId: 'gal-d1', title: 'Amoeba', desc: 'Amoeba pseudopod movement microscope', ratio: '1x1', w: 400 },
  { id: 'gal-mc021', titleId: 'gal-t2', descId: 'gal-d2', title: 'Spirogyra', desc: 'Spirogyra green algae spiral chloroplast', ratio: '1x1', w: 400 },
  { id: 'gal-mc022', titleId: 'gal-t3', descId: 'gal-d3', title: 'Dust Mite', desc: 'Dust mite electron microscope close up', ratio: '1x1', w: 400 },
  { id: 'gal-mc023', titleId: 'gal-t4', descId: 'gal-d4', title: 'Rotifer', desc: 'Rotifer wheel animalcule microscope water', ratio: '1x1', w: 400 },
  { id: 'gal-mc024', titleId: 'gal-t5', descId: 'gal-d5', title: 'Euglena', desc: 'Euglena flagellate protozoa microscope', ratio: '1x1', w: 400 },
  { id: 'gal-mc025', titleId: 'gal-t6', descId: 'gal-d6', title: 'Vorticella', desc: 'Vorticella bell-shaped ciliate stalk microscope', ratio: '1x1', w: 400 },
  { id: 'gal-mc026', titleId: 'gal-t7', descId: 'gal-d7', title: 'Hydra', desc: 'Hydra freshwater polyp tentacles microscope', ratio: '1x1', w: 400 },
  { id: 'gal-mc027', titleId: 'gal-t8', descId: 'gal-d8', title: 'Foraminifera', desc: 'Foraminifera shell calcium carbonate microscope', ratio: '1x1', w: 400 },
]

export default function PhotoGallery() {
  const containerRef = useRef(null)
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-24 md:py-36 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-4 block">Photo Gallery</span>
          <h2 id="gallery-title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Microscopic Menagerie
          </h2>
          <p id="gallery-subtitle" className="text-slate-400 text-lg max-w-2xl mx-auto">
            A curated collection of the most visually stunning microscopic organisms ever captured through the lens of science.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {photos.map((p) => (
            <div key={p.id} className="group relative rounded-xl overflow-hidden bg-slate-900 aspect-square cursor-pointer">
              <img
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                data-strk-img-id={p.id}
                data-strk-img={`[${p.descId}] [${p.titleId}] [gallery-subtitle] [gallery-title]`}
                data-strk-img-ratio={p.ratio}
                data-strk-img-width={p.w}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h4 id={p.titleId} className="text-white font-semibold text-sm">{p.title}</h4>
                <p id={p.descId} className="text-slate-400 text-xs">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
