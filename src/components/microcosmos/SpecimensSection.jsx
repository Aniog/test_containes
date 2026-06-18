import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const specimens = [
  {
    id: 'spec-01', imgId: 'spec-img-mc020', titleId: 'spec-title-01', descId: 'spec-desc-01',
    name: 'Paramecium', category: 'Protozoa',
    desc: 'A single-celled ciliate protozoan found in freshwater environments. Uses thousands of tiny hair-like cilia to move and feed.',
    size: '50–330 µm', habitat: 'Freshwater ponds',
  },
  {
    id: 'spec-02', imgId: 'spec-img-mc021', titleId: 'spec-title-02', descId: 'spec-desc-02',
    name: 'Vorticella', category: 'Ciliate',
    desc: 'Bell-shaped ciliate that attaches to surfaces via a contractile stalk. Creates water currents to draw in food particles.',
    size: '30–150 µm', habitat: 'Aquatic biofilms',
  },
  {
    id: 'spec-03', imgId: 'spec-img-mc022', titleId: 'spec-title-03', descId: 'spec-desc-03',
    name: 'Rotifer', category: 'Microscopic Animal',
    desc: 'Tiny aquatic animals with a crown of cilia that resembles a spinning wheel. Among the smallest animals on Earth.',
    size: '100–500 µm', habitat: 'Freshwater & soil',
  },
  {
    id: 'spec-04', imgId: 'spec-img-mc023', titleId: 'spec-title-04', descId: 'spec-desc-04',
    name: 'Amoeba', category: 'Protozoa',
    desc: 'Shape-shifting single-celled organism that moves and engulfs food using pseudopods — temporary extensions of its cell body.',
    size: '250–750 µm', habitat: 'Soil & freshwater',
  },
  {
    id: 'spec-05', imgId: 'spec-img-mc024', titleId: 'spec-title-05', descId: 'spec-desc-05',
    name: 'Euglena', category: 'Flagellate',
    desc: 'Remarkable organism that can photosynthesize like a plant or consume food like an animal, depending on light availability.',
    size: '15–500 µm', habitat: 'Stagnant water',
  },
  {
    id: 'spec-06', imgId: 'spec-img-mc025', titleId: 'spec-title-06', descId: 'spec-desc-06',
    name: 'Hydra', category: 'Cnidarian',
    desc: 'Tiny freshwater predator with tentacles armed with stinging cells. Named after the mythological multi-headed serpent.',
    size: '1–20 mm', habitat: 'Clean freshwater',
  },
]

export default function SpecimensSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="specimens" ref={containerRef} className="py-20 md:py-28 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-teal-400 text-sm uppercase tracking-widest font-semibold mb-3">Field Guide</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Notable Specimens</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            Meet the remarkable inhabitants of the microscopic world — each with unique adaptations and behaviors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specimens.map((s) => (
            <div
              key={s.id}
              className="group bg-[#0f1f38] border border-teal-900/40 hover:border-teal-500/60 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(20,184,166,0.12)]"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  alt={s.name}
                  data-strk-img-id={s.imgId}
                  data-strk-img={`[${s.descId}] [${s.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f38] to-transparent" />
                <span className="absolute top-3 right-3 bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-semibold px-2 py-1 rounded-full uppercase tracking-wider">
                  {s.category}
                </span>
              </div>
              <div className="p-5">
                <h3 id={s.titleId} className="text-white font-bold text-lg mb-2 italic">{s.name}</h3>
                <p id={s.descId} className="text-slate-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex gap-4 text-xs">
                  <div>
                    <span className="text-teal-400 font-semibold uppercase tracking-wider block mb-0.5">Size</span>
                    <span className="text-slate-300">{s.size}</span>
                  </div>
                  <div>
                    <span className="text-teal-400 font-semibold uppercase tracking-wider block mb-0.5">Habitat</span>
                    <span className="text-slate-300">{s.habitat}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
