import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const SpotlightSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-[#050810] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">Specimen Spotlight</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured This Week</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main spotlight image */}
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl blur-2xl" />
            <img
              alt="Tardigrade water bear microscopy"
              data-strk-img-id="spotlight-main-mc030"
              data-strk-img="[spotlight-desc] [spotlight-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="relative w-full rounded-2xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm border border-cyan-500/30 rounded-xl px-4 py-2">
              <span className="text-cyan-400 text-xs font-mono">SEM · 1500× magnification</span>
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono px-3 py-1.5 rounded-full">
                Micro-animal
              </span>
              <span className="bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono px-3 py-1.5 rounded-full">
                Editor's Pick
              </span>
            </div>

            <h3 id="spotlight-title" className="text-3xl md:text-4xl font-bold text-white mb-2">
              The Tardigrade
            </h3>
            <p className="text-cyan-400 font-mono italic text-sm mb-6">Ramazzottius oberhaeuseri</p>

            <p id="spotlight-desc" className="text-slate-400 leading-relaxed mb-6 text-lg">
              Known as the "water bear," the tardigrade is arguably the most resilient creature on Earth. These microscopic animals can survive in the vacuum of space, withstand radiation doses lethal to humans, and endure temperatures from near absolute zero to 150°C.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Size', value: '0.1–1.5 mm' },
                { label: 'Habitat', value: 'Everywhere on Earth' },
                { label: 'Survival', value: '30 years dormant' },
                { label: 'Species', value: '1,300+ known' },
              ].map((fact) => (
                <div key={fact.label} className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
                  <div className="text-slate-500 text-xs font-mono uppercase tracking-wider mb-1">{fact.label}</div>
                  <div className="text-white font-semibold">{fact.value}</div>
                </div>
              ))}
            </div>

            {/* Secondary images */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'sp-detail-1', imgId: 'spotlight-detail1-mc031', titleId: 'sp-d1-title', descId: 'sp-d1-desc', title: 'Tardigrade claws', desc: 'Tardigrade claw detail microscopy close-up' },
                { id: 'sp-detail-2', imgId: 'spotlight-detail2-mc032', titleId: 'sp-d2-title', descId: 'sp-d2-desc', title: 'Tardigrade eggs', desc: 'Tardigrade eggs microscopy reproduction' },
                { id: 'sp-detail-3', imgId: 'spotlight-detail3-mc033', titleId: 'sp-d3-title', descId: 'sp-d3-desc', title: 'Tun state', desc: 'Tardigrade cryptobiosis tun dormant state' },
              ].map((detail) => (
                <div key={detail.id} className="relative group overflow-hidden rounded-xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300">
                  <img
                    alt={detail.title}
                    data-strk-img-id={detail.imgId}
                    data-strk-img={`[${detail.descId}] [${detail.titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span id={detail.titleId} className="sr-only">{detail.title}</span>
                  <span id={detail.descId} className="sr-only">{detail.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpotlightSection
