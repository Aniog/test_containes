import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const stats = [
  { number: '3.8B', label: 'Years of microbial life', id: 'stat-years' },
  { number: '1M+', label: 'Species discovered', id: 'stat-species' },
  { number: '10x', label: 'More bacteria than human cells', id: 'stat-ratio' },
  { number: '99%', label: 'Of all life is microscopic', id: 'stat-percent' },
]

const Stats = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative py-20 px-6">
      {/* Background image strip */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="stats-microscope-bg-e2c8f1"
        data-strk-bg="[stats-section-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 bg-cosmos-bg/80" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <p id="stats-section-title" className="text-center text-sm font-semibold tracking-widest uppercase text-cosmos-primary mb-12">
          By the Numbers
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <p className="text-4xl md:text-5xl font-extralight text-cosmos-primary stat-glow mb-2">
                {stat.number}
              </p>
              <p className="text-sm text-cosmos-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
