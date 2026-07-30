import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const spotlights = [
  {
    id: 'spot-01',
    titleId: 'spot-title-01',
    descId: 'spot-desc-01',
    imgId: 'spot-img-mc-01',
    title: 'Vorticella',
    desc: 'Bell-shaped ciliate that contracts its stalk like a spring when disturbed',
    tag: 'Ciliate',
  },
  {
    id: 'spot-02',
    titleId: 'spot-title-02',
    descId: 'spot-desc-02',
    imgId: 'spot-img-mc-02',
    title: 'Penicillium',
    desc: 'The mold that gave us penicillin — its spore-bearing structures resemble tiny paintbrushes',
    tag: 'Fungi',
  },
  {
    id: 'spot-03',
    titleId: 'spot-title-03',
    descId: 'spot-desc-03',
    imgId: 'spot-img-mc-03',
    title: 'Spirulina',
    desc: 'Spiral-shaped cyanobacteria packed with protein and used as a superfood supplement',
    tag: 'Cyanobacteria',
  },
  {
    id: 'spot-04',
    titleId: 'spot-title-04',
    descId: 'spot-desc-04',
    imgId: 'spot-img-mc-04',
    title: 'Amoeba Proteus',
    desc: 'Shape-shifting predator that engulfs prey using flowing pseudopods',
    tag: 'Amoeba',
  },
  {
    id: 'spot-05',
    titleId: 'spot-title-05',
    descId: 'spot-desc-05',
    imgId: 'spot-img-mc-05',
    title: 'Euglena',
    desc: 'Flagellated protist that can photosynthesize like a plant or eat like an animal',
    tag: 'Protist',
  },
  {
    id: 'spot-06',
    titleId: 'spot-title-06',
    descId: 'spot-desc-06',
    imgId: 'spot-img-mc-06',
    title: 'Staphylococcus',
    desc: 'Grape-like clusters of bacteria commonly found on human skin',
    tag: 'Bacteria',
  },
]

export default function SpotlightSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="spotlight" className="bg-gray-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm uppercase tracking-widest font-semibold mb-3">
            Species Spotlight
          </p>
          <h2 id="spotlight-title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Remarkable Microorganisms
          </h2>
          <p id="spotlight-subtitle" className="text-gray-400 text-lg max-w-xl mx-auto">
            Each species tells a unique story of survival, adaptation, and extraordinary biology.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {spotlights.map((item) => (
            <div
              key={item.id}
              className="group relative bg-gray-950 border border-gray-700/50 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [spotlight-subtitle] [spotlight-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className="text-xs font-semibold text-purple-300 bg-purple-900/70 backdrop-blur-sm px-3 py-1 rounded-full border border-purple-500/30">
                  {item.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 id={item.titleId} className="text-white font-bold text-xl mb-2">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-gray-400 text-sm leading-relaxed">
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
