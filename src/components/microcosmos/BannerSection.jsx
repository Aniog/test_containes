import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BannerSection() {
  const containerRef = useRef(null)
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative py-32 px-4 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="banner-bg-mc040"
        data-strk-bg="[banner-title] [banner-sub]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-[#050a0e]/80" />

      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <h2 id="banner-title" className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
          The Universe Is Closer Than You Think
        </h2>
        <p id="banner-sub" className="text-slate-300 text-xl mb-10 leading-relaxed">
          Fluorescence microscopy, electron scanning, and confocal imaging have transformed our ability to see the invisible — turning science into art.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { value: '10,000×', label: 'Max Magnification' },
            { value: '8.7M', label: 'Species Documented' },
            { value: '0.1 nm', label: 'Smallest Resolution' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl px-8 py-5 backdrop-blur-sm">
              <div className="text-3xl font-black text-[#00d4aa]">{stat.value}</div>
              <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
