import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const AboutSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-3">
              About MicroCosmos
            </p>
            <h2
              id="about-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6"
            >
              The Hidden Universe Within
            </h2>
            <p
              id="about-desc"
              className="text-slate-300 text-lg leading-relaxed mb-6"
            >
              MicroCosmos reveals the extraordinary world that exists beyond the reach of the naked eye. From the elegant spirals of diatoms to the pulsing rhythm of paramecia, every drop of water contains a universe of wonder.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Through advanced microscopy and stunning photography, we bring you face-to-face with organisms that have thrived for billions of years — architects of our atmosphere, recyclers of our world, and the foundation of all life on Earth.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-400">10M+</p>
                <p className="text-sm text-slate-400 mt-1">Species Discovered</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-violet-400">3.8B</p>
                <p className="text-sm text-slate-400 mt-1">Years of Evolution</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-cyan-400">70%</p>
                <p className="text-sm text-slate-400 mt-1">Earth's Oxygen</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/10">
              <img
                alt="Microscopic organisms under electron microscope"
                data-strk-img-id="about-img-kf82m1"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-violet-500/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
