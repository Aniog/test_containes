import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import CTAButton from '@/components/shared/CTAButton'
import strkImgConfig from '@/strk-img-config.json'

export default function PageHero({ eyebrow, title, description, imageId, titleId = 'page-title', descId = 'page-desc' }) {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-white py-16 text-brand-ink md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">{eyebrow}</p>
          <h1 id={titleId} className="text-4xl font-semibold tracking-tight text-brand-navy md:text-5xl">{title}</h1>
          <p id={descId} className="mt-5 max-w-2xl text-lg leading-8 text-brand-muted">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/contact">Get a Free Sourcing Quote</CTAButton>
            <CTAButton href="/how-it-works" variant="secondary">How It Works</CTAButton>
          </div>
        </div>
        <div
          className="min-h-[340px] rounded-3xl bg-cover bg-center shadow-soft"
          data-strk-bg-id={imageId}
          data-strk-bg={`[${descId}] [${titleId}]`}
          data-strk-bg-ratio="4x3"
          data-strk-bg-width="1000"
        />
      </div>
    </section>
  )
}
