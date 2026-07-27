import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function PageHero({ eyebrow, title, subtitle, id = 'page-hero-title', subId = 'page-hero-subtitle', bgId, bgQuery }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-navy-950">
      {bgId && (
        <>
          <div
            className="absolute inset-0"
            data-strk-bg-id={bgId}
            data-strk-bg={bgQuery || `[${subId}] [${id}]`}
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          />
          <div className="absolute inset-0 bg-navy-950/80" />
      </>
      )}
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">{eyebrow}</p>
          )}
          <h1 id={id} className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">{title}</h1>
          {subtitle && (
            <p id={subId} className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  )
}
