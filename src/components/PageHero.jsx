import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function PageHero({ eyebrow, headline, subline, ctaLabel, ctaTo, bgQuery }) {
  const containerRef = useRef(null)
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), [])

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-b from-white to-surface border-b border-hairline"
    >
      <div
        className="absolute inset-0 -z-0 opacity-25"
        data-strk-bg-id={`${(eyebrow || 'page').toLowerCase().replace(/[^a-z0-9]+/g, '-')}-bg-grid-${Math.random().toString(36).slice(2, 7)}`}
        data-strk-bg={bgQuery}
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="container-x relative z-10 py-16 md:py-20">
        <div className="max-w-3xl">
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          <h1
            id="page-hero-headline"
            className="mt-3 text-4xl md:text-5xl font-bold text-brand-navy tracking-tight leading-[1.1]"
          >
            {headline}
          </h1>
          {subline && (
            <p
              id="page-hero-subline"
              className="mt-5 text-lg text-ink-soft leading-relaxed"
            >
              {subline}
            </p>
          )}
          {ctaLabel && ctaTo && (
            <div className="mt-7">
              <Link to={ctaTo} className="btn-primary">
                {ctaLabel}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
