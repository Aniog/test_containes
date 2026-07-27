import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function PageHero({ eyebrow, title, description, bgId, queryIds }) {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])
  return (
    <section ref={ref} className="relative overflow-hidden bg-primary">
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id={bgId}
        data-strk-bg={queryIds}
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wider text-cta">{eyebrow}</p>
          )}
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/85">{description}</p>
          )}
        </div>
      </div>
    </section>
  )
}
