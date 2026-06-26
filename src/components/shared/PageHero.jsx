import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'

export default function PageHero({ eyebrow, title, description, titleId, descId }) {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative bg-slate-900 text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-25"
        data-strk-bg-id="page-hero-bg-7a3e2d"
        data-strk-bg="china factory manufacturing port shipping containers"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/70" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">{eyebrow}</p>
        )}
        <h1
          id={titleId}
          className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-white max-w-3xl"
        >
          {title}
        </h1>
        {description && (
          <p
            id={descId}
            className="mt-5 text-lg text-slate-200 max-w-2xl leading-relaxed"
          >
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
