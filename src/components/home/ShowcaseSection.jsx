import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const showcaseItems = [
  {
    id: 'butterfly-wing',
    title: 'Butterfly Wing Scales',
    desc: 'Microscopic scales on butterfly wings creating iridescent colors through light diffraction',
    imgId: 'show-img-but-t1u2v3',
    titleId: 'show-butterfly-wing-title',
    descId: 'show-butterfly-wing-desc',
  },
  {
    id: 'salt-crystal',
    title: 'Salt Crystal',
    desc: 'Sodium chloride crystal formation showing perfect cubic lattice structure',
    imgId: 'show-img-sal-w4x5y6',
    titleId: 'show-salt-crystal-title',
    descId: 'show-salt-crystal-desc',
  },
  {
    id: 'moss-leaf',
    title: 'Moss Leaf Cells',
    desc: 'Chloroplasts visible inside translucent moss leaf cells under bright field microscopy',
    imgId: 'show-img-mos-z7a8b9',
    titleId: 'show-moss-leaf-title',
    descId: 'show-moss-leaf-desc',
  },
  {
    id: 'spider-silk',
    title: 'Spider Silk Fibers',
    desc: 'Ultra-strong spider silk threads thinner than human hair captured in electron microscope',
    imgId: 'show-img-spi-c1d2e3',
    titleId: 'show-spider-silk-title',
    descId: 'show-spider-silk-desc',
  },
  {
    id: 'plankton',
    title: 'Marine Plankton',
    desc: 'Bioluminescent marine plankton organisms glowing in dark ocean water',
    imgId: 'show-img-pla-f4g5h6',
    titleId: 'show-plankton-title',
    descId: 'show-plankton-desc',
  },
  {
    id: 'human-hair',
    title: 'Human Hair Cross-Section',
    desc: 'Cross-section of human hair showing cortex medulla and cuticle layers',
    imgId: 'show-img-hai-i7j8k9',
    titleId: 'show-human-hair-title',
    descId: 'show-human-hair-desc',
  },
]

const ShowcaseSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-3">Showcase</p>
          <h2 id="showcase-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nature's Hidden Masterpieces
          </h2>
          <p id="showcase-subtitle" className="text-slate-300 text-lg max-w-2xl mx-auto">
            Everyday objects and organisms reveal extraordinary beauty when magnified thousands of times
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {showcaseItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-xl overflow-hidden aspect-square"
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [showcase-title]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 id={item.titleId} className="text-lg font-bold text-white mb-1">{item.title}</h3>
                <p id={item.descId} className="text-slate-300 text-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection
