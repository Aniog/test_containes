import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ClosingSection() {
  const containerRef = useRef(null)
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative py-32 md:py-48 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="closing-bg-mc060"
        data-strk-bg="[closing-desc] [closing-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/60 to-slate-950" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-8 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-6 block">The Journey Continues</span>
        <h2 id="closing-title" className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
          The Invisible World<br />
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Awaits Discovery</span>
        </h2>
        <p id="closing-desc" className="text-slate-300 text-lg leading-relaxed mb-10">
          Every microscope slide is a portal to another universe. Science continues to reveal new wonders in the microscopic realm — and the greatest discoveries are yet to come.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#explore" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-4 rounded-full transition-colors text-lg">
            Explore More
          </a>
          <a href="#gallery" className="border border-slate-600 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 px-8 py-4 rounded-full transition-colors text-lg">
            View Gallery
          </a>
        </div>
      </div>
    </section>
  )
}
