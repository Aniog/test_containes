import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const specimens = [
  {
    id: 'sp1',
    titleId: 'sp-title-1',
    descId: 'sp-desc-1',
    imgId: 'specimen-img-1-aa1bb2',
    name: 'Tardigrade (Water Bear)',
    latin: 'Ramazzottius oberhaeuseri',
    category: 'Micro-animal',
    magnification: '500×',
    description: 'Known as the most resilient creature on Earth, tardigrades can survive extreme radiation, vacuum of space, and temperatures from -272°C to 150°C. Their cryptobiosis ability allows them to enter a death-like state and revive decades later.',
    facts: ['Can survive in outer space', 'Lives in water films on moss', 'Has 8 stubby legs', 'Discovered in 1773'],
    color: '#00d4ff',
  },
  {
    id: 'sp2',
    titleId: 'sp-title-2',
    descId: 'sp-desc-2',
    imgId: 'specimen-img-2-cc3dd4',
    name: 'Radiolarian',
    latin: 'Acantharia sp.',
    category: 'Protozoa',
    magnification: '200×',
    description: 'Radiolarians are single-celled organisms that produce intricate mineral skeletons of stunning geometric complexity. Their silica shells, called tests, form elaborate lattice structures that inspired Art Nouveau architecture.',
    facts: ['Single-celled organism', 'Creates silica skeleton', 'Found in all oceans', 'Fossil record 500M years'],
    color: '#7c3aed',
  },
  {
    id: 'sp3',
    titleId: 'sp-title-3',
    descId: 'sp-desc-3',
    imgId: 'specimen-img-3-ee5ff6',
    name: 'Diatom',
    latin: 'Coscinodiscus sp.',
    category: 'Algae',
    magnification: '1000×',
    description: 'Diatoms are microscopic algae encased in ornate glass houses made of silica. They produce about 20% of Earth\'s oxygen and form the base of aquatic food chains. Their shells display extraordinary geometric precision.',
    facts: ['Produces 20% of Earth\'s O₂', 'Glass cell walls', 'Over 100,000 species', 'Key food chain base'],
    color: '#10b981',
  },
]

export default function Featured() {
  const containerRef = useRef(null)
  const [active, setActive] = useState(specimens[0].id)

  const current = specimens.find((s) => s.id === active)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [active])

  return (
    <section id="specimens" ref={containerRef} className="py-24 px-6 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#00d4ff] text-sm font-semibold uppercase tracking-widest mb-3 block">
            Up Close
          </span>
          <h2
            id="specimens-section-title"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Featured Specimens
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] mx-auto mb-6 rounded-full" />
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Extraordinary organisms and structures that showcase the wonders of the microscopic realm.
          </p>
        </div>

        {/* Specimen selector tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {specimens.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                active === s.id
                  ? 'text-[#050d1a] shadow-lg'
                  : 'bg-[#0f1f3d] border border-[#1e3a5f] text-slate-300 hover:text-white'
              }`}
              style={active === s.id ? { backgroundColor: s.color, boxShadow: `0 0 25px ${s.color}60` } : {}}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* Featured specimen detail */}
        {current && (
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden border border-[#1e3a5f] aspect-square md:aspect-auto md:h-[500px]"
              style={{ boxShadow: `0 0 50px ${current.color}20` }}>
              <img
                alt={current.name}
                data-strk-img-id={current.imgId}
                data-strk-img={`[${current.descId}] [${current.titleId}] [specimens-section-title]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/70 to-transparent" />
              {/* Magnification badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white text-xs font-mono">
                {current.magnification}
              </div>
              {/* Category badge */}
              <div
                className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
                style={{ backgroundColor: `${current.color}20`, border: `1px solid ${current.color}50`, color: current.color }}
              >
                {current.category}
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <div className="mb-2">
                <span className="text-slate-400 text-sm italic">{current.latin}</span>
              </div>
              <h3
                id={current.titleId}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                {current.name}
              </h3>
              <p
                id={current.descId}
                className="text-slate-300 leading-relaxed mb-8 text-base"
              >
                {current.description}
              </p>

              {/* Facts */}
              <div className="grid grid-cols-2 gap-3">
                {current.facts.map((fact, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#0f1f3d] border border-[#1e3a5f]"
                  >
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: current.color }}
                    />
                    <span className="text-slate-300 text-sm">{fact}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
