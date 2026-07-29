import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'

import strkImgConfig from '@/strk-img-config.json'

const HeroVisual = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    let disconnect = () => {}
    const frameId = window.requestAnimationFrame(() => {
      disconnect = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      disconnect()
    }
  }, [])

  return (
    <div ref={containerRef} className="relative overflow-hidden rounded-[2rem] border border-brand-line bg-brand-ink p-4 shadow-card">
      <div
        className="aspect-[4/3] rounded-[1.5rem] bg-brand-slate/10"
        data-strk-bg-id="hero-operations-bg-7fa22b"
        data-strk-bg="[hero-card-caption] [hero-subtitle] [hero-title]"
        data-strk-bg-ratio="4x3"
        data-strk-bg-width="1200"
      >
        <div className="flex h-full flex-col justify-end bg-gradient-to-t from-brand-ink/85 via-brand-ink/35 to-transparent p-6">
          <div className="max-w-sm rounded-[1.5rem] border border-white/15 bg-white/10 p-5 backdrop-blur">
            <p id="hero-card-caption" className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">
              Factory verification, QC, and shipment readiness
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-100">
              Practical local follow-up to help global buyers source more clearly and reduce avoidable supplier risk.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroVisual
