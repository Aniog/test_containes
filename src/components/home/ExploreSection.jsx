import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const exploreItems = [
  {
    id: 'ex1', imgId: 'explore-img-mc051', titleId: 'explore-ex1-title', descId: 'explore-ex1-desc',
    title: 'Radiolarian Skeleton', desc: 'Intricate mineral skeleton of a single-celled ocean organism',
    ratio: '1x1', width: '400',
  },
  {
    id: 'ex2', imgId: 'explore-img-mc052', titleId: 'explore-ex2-title', descId: 'explore-ex2-desc',
    title: 'Mitosis in Progress', desc: 'A cell dividing — chromosomes aligning under fluorescence microscopy',
    ratio: '1x1', width: '400',
  },
  {
    id: 'ex3', imgId: 'explore-img-mc053', titleId: 'explore-ex3-title', descId: 'explore-ex3-desc',
    title: 'Moth Eye Surface', desc: 'Nanostructures on a moth eye that eliminate reflections',
    ratio: '1x1', width: '400',
  },
  {
    id: 'ex4', imgId: 'explore-img-mc054', titleId: 'explore-ex4-title', descId: 'explore-ex4-desc',
    title: 'Vitamin C Crystal', desc: 'Ascorbic acid crystallized under polarized light microscopy',
    ratio: '4x3', width: '600',
  },
  {
    id: 'ex5', imgId: 'explore-img-mc055', titleId: 'explore-ex5-title', descId: 'explore-ex5-desc',
    title: 'Coral Polyp', desc: 'Microscopic coral polyp with extended feeding tentacles',
    ratio: '4x3', width: '600',
  },
  {
    id: 'ex6', imgId: 'explore-img-mc056', titleId: 'explore-ex6-title', descId: 'explore-ex6-desc',
    title: 'Spider Silk Fiber', desc: 'Spider silk strand — stronger than steel at the same diameter',
    ratio: '1x1', width: '400',
  },
  {
    id: 'ex7', imgId: 'explore-img-mc057', titleId: 'explore-ex7-title', descId: 'explore-ex7-desc',
    title: 'Foraminifera Shell', desc: 'Calcium carbonate shell of a marine protozoan',
    ratio: '1x1', width: '400',
  },
  {
    id: 'ex8', imgId: 'explore-img-mc058', titleId: 'explore-ex8-title', descId: 'explore-ex8-desc',
    title: 'Muscle Fiber Cross-Section', desc: 'Striated muscle tissue showing myofibrils under electron microscopy',
    ratio: '1x1', width: '400',
  },
  {
    id: 'ex9', imgId: 'explore-img-mc059', titleId: 'explore-ex9-title', descId: 'explore-ex9-desc',
    title: 'Quantum Dot Fluorescence', desc: 'Semiconductor nanocrystals emitting vivid colors under UV light',
    ratio: '16x9', width: '1200',
  },
]

export default function ExploreSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="explore" className="py-24 md:py-32 px-4 md:px-8 bg-[#050a14]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest uppercase text-[#00d4aa] mb-4 block">
            — Keep Exploring —
          </span>
          <h2
            id="explore-section-title"
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            More Wonders Await
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Every drop of water, every grain of soil, every breath of air contains multitudes. The more we look, the more we find.
          </p>
        </div>

        {/* Dense image grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {/* Row 1: 3 squares + 1 wide */}
          {[exploreItems[0], exploreItems[1], exploreItems[2]].map((item) => (
            <div key={item.id} className="group relative rounded-xl overflow-hidden aspect-square">
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [explore-section-title]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 id={item.titleId} className="text-white font-semibold text-sm">{item.title}</h3>
                <p id={item.descId} className="text-slate-300 text-xs mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}

          {/* Wide item */}
          <div className="group relative rounded-xl overflow-hidden aspect-[4/3]">
            <img
              alt={exploreItems[5].title}
              data-strk-img-id={exploreItems[5].imgId}
              data-strk-img={`[${exploreItems[5].descId}] [${exploreItems[5].titleId}] [explore-section-title]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 id={exploreItems[5].titleId} className="text-white font-semibold text-sm">{exploreItems[5].title}</h3>
              <p id={exploreItems[5].descId} className="text-slate-300 text-xs mt-0.5">{exploreItems[5].desc}</p>
            </div>
          </div>

          {/* Row 2: wide + 3 squares */}
          <div className="col-span-2 group relative rounded-xl overflow-hidden">
            <img
              alt={exploreItems[3].title}
              data-strk-img-id={exploreItems[3].imgId}
              data-strk-img={`[${exploreItems[3].descId}] [${exploreItems[3].titleId}] [explore-section-title]`}
              data-strk-img-ratio="16x9"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050a14]/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <h3 id={exploreItems[3].titleId} className="text-white font-bold text-base">{exploreItems[3].title}</h3>
              <p id={exploreItems[3].descId} className="text-slate-300 text-xs mt-1 max-w-xs">{exploreItems[3].desc}</p>
            </div>
          </div>

          {[exploreItems[4], exploreItems[6], exploreItems[7]].map((item) => (
            <div key={item.id} className="group relative rounded-xl overflow-hidden aspect-square">
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [explore-section-title]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 id={item.titleId} className="text-white font-semibold text-sm">{item.title}</h3>
                <p id={item.descId} className="text-slate-300 text-xs mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}

          {/* Full-width banner */}
          <div className="col-span-2 md:col-span-4 group relative rounded-xl overflow-hidden">
            <img
              alt={exploreItems[8].title}
              data-strk-img-id={exploreItems[8].imgId}
              data-strk-img={`[${exploreItems[8].descId}] [${exploreItems[8].titleId}] [explore-section-title]`}
              data-strk-img-ratio="16x9"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-56 md:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050a14]/80 via-[#050a14]/30 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 md:px-12">
                <span className="text-xs font-mono tracking-widest uppercase text-[#00d4aa] block mb-2">Nanotechnology</span>
                <h3 id={exploreItems[8].titleId} className="text-white font-black text-2xl md:text-3xl mb-2">{exploreItems[8].title}</h3>
                <p id={exploreItems[8].descId} className="text-slate-300 text-sm max-w-sm">{exploreItems[8].desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
