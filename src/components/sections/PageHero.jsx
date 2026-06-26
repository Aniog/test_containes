import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function PageHero({ eyebrow, title, description, bgQuery, bgId }) {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="relative overflow-hidden bg-slate-900 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        data-strk-bg-id={bgId}
        data-strk-bg={bgQuery}
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/70" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-400">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-base text-slate-300 md:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
