import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Atom, Eye, Zap, Layers } from 'lucide-react'

const features = [
  {
    id: 'feature-cells',
    icon: Atom,
    title: 'Cellular Architecture',
    desc: 'Discover the intricate structures within living cells that power all life on Earth',
    imgId: 'feat-cells-3a9c7d',
    titleId: 'feature-cells-title',
    descId: 'feature-cells-desc',
  },
  {
    id: 'feature-vision',
    icon: Eye,
    title: 'Beyond Human Vision',
    desc: 'See what lies beyond the limits of human perception through advanced microscopy',
    imgId: 'feat-vision-8b2e5f',
    titleId: 'feature-vision-title',
    descId: 'feature-vision-desc',
  },
  {
    id: 'feature-energy',
    icon: Zap,
    title: 'Molecular Energy',
    desc: 'Witness the dynamic processes of molecular machines converting energy at nanoscale',
    imgId: 'feat-energy-6d4a1c',
    titleId: 'feature-energy-title',
    descId: 'feature-energy-desc',
  },
  {
    id: 'feature-layers',
    icon: Layers,
    title: 'Layered Complexity',
    desc: 'Explore the multiple layers of organization from atoms to complex organisms',
    imgId: 'feat-layers-2f8b9e',
    titleId: 'feature-layers-title',
    descId: 'feature-layers-desc',
  },
]

const FeaturesSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 px-4 md:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-heading text-sm tracking-widest uppercase mb-3 block">Discover</span>
          <h2 id="features-section-title" className="font-heading text-3xl md:text-5xl font-bold text-text-primary tracking-tight mb-4">
            Worlds Within Worlds
          </h2>
          <p id="features-section-subtitle" className="text-text-secondary text-lg max-w-2xl mx-auto">
            Every drop of water, every grain of soil contains universes of complexity waiting to be explored
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.id}
                className="group relative bg-surface-light/50 border border-surface-light rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    alt={feature.title}
                    data-strk-img-id={feature.imgId}
                    data-strk-img={`[${feature.descId}] [${feature.titleId}] [features-section-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-light to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 id={feature.titleId} className="font-heading text-xl font-semibold text-text-primary">
                      {feature.title}
                    </h3>
                  </div>
                  <p id={feature.descId} className="text-text-secondary leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
