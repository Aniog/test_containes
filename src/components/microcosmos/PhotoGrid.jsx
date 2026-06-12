import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const photos = [
  { id: 'ph-01', imgId: 'photo-img-mc050', titleId: 'ph-01-title', descId: 'ph-01-desc', title: 'Mitosis in Progress', desc: 'Cell division captured at metaphase stage', ratio: '1x1', width: '500' },
  { id: 'ph-02', imgId: 'photo-img-mc051', titleId: 'ph-02-title', descId: 'ph-02-desc', title: 'Radiolarian Skeleton', desc: 'Intricate silica skeleton of a marine protozoan', ratio: '1x1', width: '500' },
  { id: 'ph-03', imgId: 'photo-img-mc052', titleId: 'ph-03-title', descId: 'ph-03-desc', title: 'Butterfly Wing Scale', desc: 'Nanostructures on butterfly wing creating iridescent color', ratio: '1x1', width: '500' },
  { id: 'ph-04', imgId: 'photo-img-mc053', titleId: 'ph-04-title', descId: 'ph-04-desc', title: 'Vitamin C Crystal', desc: 'Ascorbic acid crystallized under polarized light', ratio: '1x1', width: '500' },
  { id: 'ph-05', imgId: 'photo-img-mc054', titleId: 'ph-05-title', descId: 'ph-05-desc', title: 'Mosquito Eye', desc: 'Compound eye of a mosquito under electron microscope', ratio: '1x1', width: '500' },
  { id: 'ph-06', imgId: 'photo-img-mc055', titleId: 'ph-06-title', descId: 'ph-06-desc', title: 'Spirogyra Algae', desc: 'Spiral chloroplasts of freshwater green algae', ratio: '1x1', width: '500' },
  { id: 'ph-07', imgId: 'photo-img-mc056', titleId: 'ph-07-title', descId: 'ph-07-desc', title: 'Dust Mite', desc: 'Common household dust mite magnified 200 times', ratio: '1x1', width: '500' },
  { id: 'ph-08', imgId: 'photo-img-mc057', titleId: 'ph-08-title', descId: 'ph-08-desc', title: 'Amoeba Pseudopods', desc: 'Amoeba extending pseudopods to engulf food particles', ratio: '1x1', width: '500' },
]

export default function PhotoGrid() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="photogrid" ref={containerRef} className="py-20 md:py-28 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">Photo Collection</span>
          <h2 id="photogrid-title" className="mt-3 text-3xl md:text-5xl font-bold text-white">
            Microscopy in Focus
          </h2>
          <p id="photogrid-subtitle" className="mt-4 text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            A curated collection of the most striking microscopy photographs from around the world.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {photos.map((photo) => (
            <div key={photo.id} className="group relative overflow-hidden rounded-xl bg-[#050d1a] aspect-square">
              <img
                data-strk-img-id={photo.imgId}
                data-strk-img={`[${photo.descId}] [${photo.titleId}] [photogrid-subtitle] [photogrid-title]`}
                data-strk-img-ratio={photo.ratio}
                data-strk-img-width={photo.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p id={photo.titleId} className="text-white text-xs font-bold leading-tight">{photo.title}</p>
                <p id={photo.descId} className="text-slate-400 text-xs mt-0.5 leading-tight">{photo.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
