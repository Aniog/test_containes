import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function FeaturedSection() {
  const containerRef = useRef(null)
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-24 md:py-36 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-4 block">Deep Dive</span>
          <h2 id="featured-title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Worlds Within Worlds
          </h2>
          <p id="featured-subtitle" className="text-slate-400 text-lg max-w-2xl mx-auto">
            Each drop of water, each grain of soil, each breath of air contains entire civilizations of microscopic life.
          </p>
        </div>

        {/* Large feature row 1 */}
        <div className="grid md:grid-cols-5 gap-4 md:gap-6 mb-6">
          <div className="md:col-span-3 group relative rounded-2xl overflow-hidden bg-slate-900">
            <div className="aspect-video overflow-hidden">
              <img
                alt="bacteria colony biofilm microscope"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                data-strk-img-id="feat-img-mc010"
                data-strk-img="[feat-desc-1] [feat-title-1] [featured-subtitle] [featured-title]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2 block">Bacteria</span>
              <h3 id="feat-title-1" className="text-white font-bold text-2xl mb-2">The Bacterial Metropolis</h3>
              <p id="feat-desc-1" className="text-slate-300 text-sm leading-relaxed">
                Bacteria form complex biofilm communities with communication networks, shared resources, and division of labor — a true microscopic city.
              </p>
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4 md:gap-6">
            <div className="group relative rounded-2xl overflow-hidden bg-slate-900 flex-1">
              <div className="h-full min-h-[180px] overflow-hidden">
                <img
                  alt="fungal hyphae network microscope"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  data-strk-img-id="feat-img-mc011"
                  data-strk-img="[feat-desc-2] [feat-title-2] [featured-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-1 block">Fungi</span>
                <h3 id="feat-title-2" className="text-white font-bold text-lg">Fungal Networks</h3>
                <p id="feat-desc-2" className="text-slate-400 text-xs mt-1">Mycelium threads weave through soil, connecting plants and recycling nutrients.</p>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden bg-slate-900 flex-1">
              <div className="h-full min-h-[180px] overflow-hidden">
                <img
                  alt="virus particle electron microscope colorized"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  data-strk-img-id="feat-img-mc012"
                  data-strk-img="[feat-desc-3] [feat-title-3] [featured-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-pink-400 mb-1 block">Virology</span>
                <h3 id="feat-title-3" className="text-white font-bold text-lg">Viral Architecture</h3>
                <p id="feat-desc-3" className="text-slate-400 text-xs mt-1">Viruses are nature's most elegant nanomachines — geometric perfection at the edge of life.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature row 2 */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {[
            {
              id: 'feat-img-mc013', titleId: 'feat-title-4', descId: 'feat-desc-4',
              tag: 'Plankton', tagColor: 'text-sky-400',
              title: 'Ocean Plankton', desc: 'Microscopic ocean plankton bioluminescent sea',
              body: 'Phytoplankton produce half of Earth\'s oxygen, forming the base of the marine food web.',
            },
            {
              id: 'feat-img-mc014', titleId: 'feat-title-5', descId: 'feat-desc-5',
              tag: 'Nematode', tagColor: 'text-amber-400',
              title: 'Soil Nematodes', desc: 'Nematode roundworm soil microscope',
              body: 'A single teaspoon of healthy soil contains thousands of nematodes, regulating nutrient cycles.',
            },
            {
              id: 'feat-img-mc015', titleId: 'feat-title-6', descId: 'feat-desc-6',
              tag: 'Cell', tagColor: 'text-violet-400',
              title: 'Living Cells', desc: 'human cell fluorescence microscopy organelles',
              body: 'Fluorescence microscopy reveals the stunning inner architecture of living cells in vivid color.',
            },
          ].map((item) => (
            <div key={item.id} className="group relative rounded-2xl overflow-hidden bg-slate-900">
              <div className="aspect-video overflow-hidden">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  data-strk-img-id={item.id}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [featured-subtitle] [featured-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className={`text-xs font-semibold uppercase tracking-widest mb-1 block ${item.tagColor}`}>{item.tag}</span>
                <h3 id={item.titleId} className="text-white font-bold text-lg mb-1">{item.title}</h3>
                <p id={item.descId} className="text-slate-400 text-sm">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
