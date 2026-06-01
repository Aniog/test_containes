import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Eye, Zap, Globe } from 'lucide-react'

const features = [
  {
    icon: Eye,
    title: 'Ultra-High Resolution',
    desc: 'Images captured at magnifications up to 100,000x, revealing structures invisible to the naked eye.',
  },
  {
    icon: Zap,
    title: 'Electron Microscopy',
    desc: 'Scanning and transmission electron microscopes illuminate the nanoscale architecture of life.',
  },
  {
    icon: Globe,
    title: 'Every Domain of Life',
    desc: 'From archaea to zooplankton, explore specimens from every corner of the biological world.',
  },
]

export default function IntroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="bg-gray-950 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-violet-400/10 border border-violet-400/30 text-violet-400 text-xs font-medium uppercase tracking-widest">
              About MicroCosmos
            </span>
            <h2
              id="intro-title"
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              A Universe Smaller Than a Grain of Sand
            </h2>
            <p id="intro-desc" className="text-gray-300 text-lg leading-relaxed mb-6">
              MicroCosmos is a curated visual archive of the microscopic world — a place where
              science meets art. Every image is a window into structures so small they defy
              imagination, yet so intricate they rival the grandest landscapes on Earth.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Using cutting-edge microscopy techniques — from confocal fluorescence to
              cryo-electron tomography — our collection spans biology, chemistry, geology,
              and materials science.
            </p>
          </div>

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-square">
            <img
              data-strk-img-id="intro-img-mc-9c2d4e"
              data-strk-img="[intro-desc] [intro-title]"
              data-strk-img-ratio="1x1"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Microscopic cell structure"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent" />
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-teal-400/40 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-400/10 flex items-center justify-center mb-4">
                <f.icon className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
