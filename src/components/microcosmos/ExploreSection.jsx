import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const features = [
  {
    id: 'feat-bacteria',
    imgId: 'explore-img-mc002',
    titleId: 'explore-title-bacteria',
    descId: 'explore-desc-bacteria',
    title: 'Bacteria & Microbes',
    desc: 'Single-celled organisms that have shaped life on Earth for billions of years. From gut flora to extremophiles, bacteria are everywhere.',
    tag: 'Microbiology',
  },
  {
    id: 'feat-cells',
    imgId: 'explore-img-mc003',
    titleId: 'explore-title-cells',
    descId: 'explore-desc-cells',
    title: 'Living Cells',
    desc: 'The fundamental building blocks of all life. Witness mitosis, organelles, and the intricate machinery that keeps every organism alive.',
    tag: 'Cell Biology',
  },
  {
    id: 'feat-crystals',
    imgId: 'explore-img-mc004',
    titleId: 'explore-title-crystals',
    descId: 'explore-desc-crystals',
    title: 'Micro Crystals',
    desc: 'Minerals and compounds form stunning geometric patterns at the microscopic scale — nature\'s own abstract art.',
    tag: 'Mineralogy',
  },
]

export default function ExploreSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="explore" ref={containerRef} className="py-20 md:py-28 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-teal-400 text-sm uppercase tracking-widest font-semibold mb-3">What Lives Below</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Explore the Invisible</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            Three realms of the microscopic world, each more astonishing than the last.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.id}
              className="group bg-[#0f1f38] border border-teal-900/40 hover:border-teal-500/60 rounded-2xl overflow-hidden transition-all duration-300 shadow-[0_0_30px_rgba(20,184,166,0.05)] hover:shadow-[0_0_40px_rgba(20,184,166,0.15)]"
            >
              <div className="relative overflow-hidden">
                <img
                  alt={f.title}
                  data-strk-img-id={f.imgId}
                  data-strk-img={`[${f.descId}] [${f.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f38] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-teal-500/20 border border-teal-500/40 text-teal-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  {f.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 id={f.titleId} className="text-white font-bold text-xl mb-2">{f.title}</h3>
                <p id={f.descId} className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
