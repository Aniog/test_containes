import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const features = [
  {
    id: 'feat-cells',
    imgId: 'feat-img-mc002',
    title: 'Living Cells',
    description: 'Witness the intricate machinery of life — organelles, membranes, and the ceaseless activity that powers every living organism.',
    accent: '#00d4aa',
  },
  {
    id: 'feat-crystals',
    imgId: 'feat-img-mc003',
    title: 'Crystal Structures',
    description: 'Minerals and compounds form breathtaking geometric patterns at the microscopic scale, revealing nature\'s mathematical precision.',
    accent: '#7c3aed',
  },
  {
    id: 'feat-insects',
    imgId: 'feat-img-mc004',
    title: 'Insect World',
    description: 'The compound eyes, delicate wings, and intricate anatomy of insects become alien landscapes under extreme magnification.',
    accent: '#f59e0b',
  },
]

export default function FeaturesSection() {
  const containerRef = useRef(null)
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="explore" ref={containerRef} className="py-24 px-4 md:px-8 bg-[#050a0e]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#00d4aa] text-sm font-medium tracking-widest uppercase mb-3">What We Explore</p>
          <h2 id="features-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Worlds Within Worlds
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Every drop of water, every grain of soil, every breath of air teems with extraordinary life and structure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat) => (
            <div
              key={feat.id}
              className="group bg-[#0d1f2d] border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-500/70 transition-all duration-300"
              style={{ boxShadow: `0 0 30px ${feat.accent}18` }}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  alt={feat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={feat.imgId}
                  data-strk-img={`[${feat.id}-desc] [${feat.id}-title] [features-heading]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f2d] to-transparent" />
              </div>
              <div className="p-6">
                <h3 id={`${feat.id}-title`} className="text-xl font-bold text-white mb-3" style={{ color: feat.accent }}>
                  {feat.title}
                </h3>
                <p id={`${feat.id}-desc`} className="text-slate-400 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
