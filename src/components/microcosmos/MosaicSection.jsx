import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const mosaicItems = [
  {
    id: 'moss',
    title: 'Moss Spores',
    desc: 'Delicate reproductive structures of moss plants under magnification',
    imgId: 'mosaic-moss-i7j8k9',
    titleId: 'mosaic-moss-title',
    descId: 'mosaic-moss-desc',
  },
  {
    id: 'blood',
    title: 'Blood Cells',
    desc: 'Red and white blood cells flowing through microscopic capillaries',
    imgId: 'mosaic-blood-l1m2n3',
    titleId: 'mosaic-blood-title',
    descId: 'mosaic-blood-desc',
  },
  {
    id: 'snowflake',
    title: 'Snowflake Crystal',
    desc: 'Hexagonal ice crystal with unique branching patterns formed in clouds',
    imgId: 'mosaic-snowflake-o4p5q6',
    titleId: 'mosaic-snowflake-title',
    descId: 'mosaic-snowflake-desc',
  },
  {
    id: 'bacteria',
    title: 'Bacteria Colony',
    desc: 'Colorful bacterial cultures growing in geometric patterns on agar plates',
    imgId: 'mosaic-bacteria-r7s8t9',
    titleId: 'mosaic-bacteria-title',
    descId: 'mosaic-bacteria-desc',
  },
  {
    id: 'plankton',
    title: 'Plankton',
    desc: 'Bioluminescent marine plankton glowing blue in dark ocean waters',
    imgId: 'mosaic-plankton-u1v2w3',
    titleId: 'mosaic-plankton-title',
    descId: 'mosaic-plankton-desc',
  },
  {
    id: 'fungus',
    title: 'Fungal Hyphae',
    desc: 'Thread-like fungal structures branching and spreading across surfaces',
    imgId: 'mosaic-fungus-x4y5z6',
    titleId: 'mosaic-fungus-title',
    descId: 'mosaic-fungus-desc',
  },
  {
    id: 'leaf',
    title: 'Leaf Stomata',
    desc: 'Microscopic pores on leaf surfaces that control gas exchange with the atmosphere',
    imgId: 'mosaic-leaf-a7b8c9',
    titleId: 'mosaic-leaf-title',
    descId: 'mosaic-leaf-desc',
  },
  {
    id: 'virus',
    title: 'Virus Particles',
    desc: 'Electron microscope image of viral particles with geometric protein shells',
    imgId: 'mosaic-virus-d1e2f3',
    titleId: 'mosaic-virus-title',
    descId: 'mosaic-virus-desc',
  },
]

const MosaicSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 px-6 md:px-12 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3">Image Mosaic</p>
          <h2 id="mosaic-section-title" className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Wonders in Every Frame
          </h2>
          <p id="mosaic-section-subtitle" className="text-lg text-slate-300 max-w-2xl mx-auto">
            A curated collection of microscopic marvels from across the natural world.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {mosaicItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square rounded-xl overflow-hidden border border-slate-700/30 hover:border-emerald-500/40 transition-all duration-500"
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [mosaic-section-title]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <h3 id={item.titleId} className="text-sm font-bold text-white">{item.title}</h3>
                <p id={item.descId} className="text-xs text-slate-300 line-clamp-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MosaicSection
