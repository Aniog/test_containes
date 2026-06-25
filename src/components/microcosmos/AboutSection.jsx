import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const AboutSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 px-6 md:px-12 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3">About MicroCosmos</p>
            <h2 id="about-title" className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              A Universe Within a Drop of Water
            </h2>
            <p id="about-desc" className="text-lg text-slate-300 leading-relaxed mb-6">
              The microscopic world is a realm of extraordinary beauty and complexity. From the elegant spirals of diatoms to the pulsing rhythm of paramecia, every drop of water contains a universe waiting to be explored.
            </p>
            <p className="text-base text-slate-400 leading-relaxed mb-8">
              Through advanced microscopy and macro photography, we reveal the stunning architecture of cells, the intricate patterns of microorganisms, and the vibrant colors that exist beyond the reach of the naked eye. Welcome to MicroCosmos — where science meets art.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-3xl font-bold text-emerald-400">10M+</p>
                <p className="text-sm text-slate-400">Species Discovered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-violet-400">0.001mm</p>
                <p className="text-sm text-slate-400">Smallest Captured</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan-400">500x</p>
                <p className="text-sm text-slate-400">Magnification</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-slate-700/50 shadow-lg shadow-emerald-500/10">
              <img
                alt="Microscopic organisms in water"
                data-strk-img-id="about-img-k3m8n2"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-xl overflow-hidden border-2 border-emerald-500/30 shadow-lg">
              <img
                alt="Microscope close-up detail"
                data-strk-img-id="about-detail-p9q2w5"
                data-strk-img="[about-title] microscope lens detail"
                data-strk-img-ratio="1x1"
                data-strk-img-width="200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
