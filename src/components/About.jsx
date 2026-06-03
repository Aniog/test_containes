import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const stats = [
  { value: '10³⁰', label: 'Microbes on Earth' },
  { value: '37T', label: 'Cells in Human Body' },
  { value: '1μm', label: 'Average Bacteria Size' },
  { value: '99%', label: 'Species Undiscovered' },
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="bg-cosmos-bg py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-cosmos-cyan text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              About MicroCosmos
            </p>
            <h2
              id="about-title"
              className="text-4xl md:text-5xl font-bold text-cosmos-text mb-6 leading-tight"
            >
              The Hidden Universe Beneath Our Eyes
            </h2>
            <p
              id="about-desc"
              className="text-cosmos-muted text-lg leading-relaxed mb-6"
            >
              MicroCosmos is a visual exploration of the microscopic world — a realm teeming with life that exists all around us, yet remains invisible to the naked eye. From the intricate geometry of diatoms to the alien beauty of bacteria colonies, this world is as vast and complex as any galaxy.
            </p>
            <p className="text-cosmos-muted text-lg leading-relaxed mb-10">
              Using advanced electron microscopy and fluorescence imaging, scientists have revealed a universe of breathtaking complexity. Every drop of water, every grain of soil, every breath of air contains multitudes of living organisms, each with its own story.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="border border-cosmos-border rounded-xl p-5 bg-cosmos-card">
                  <div className="text-3xl font-black text-cosmos-cyan mb-1">{stat.value}</div>
                  <div className="text-cosmos-muted text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-cosmos-border shadow-glow-cyan">
              <img
                alt="Microscopic world close-up"
                data-strk-img-id="about-img-mc002"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-cosmos-card border border-cosmos-border rounded-2xl p-5 shadow-glow-cyan">
              <div className="text-cosmos-cyan text-4xl font-black">3.8B</div>
              <div className="text-cosmos-muted text-sm mt-1">Years of microbial life on Earth</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
