import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { Globe2, ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import CTABand from '@/components/CTABand'
import StrkImage from '@/components/StrkImage'
import { PRODUCT_CATEGORIES } from '@/data/content'

function PageHero() {
  return (
    <section className="bg-ink py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">Products We Source</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
          Nine product categories, sourced where they are made best
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
          We source from the manufacturing clusters that specialize in each category —
          electronics in Shenzhen, furniture in Foshan, textiles in Ningbo. If your
          product is not listed, ask us: if it is made in China, we can source it.
        </p>
      </div>
    </section>
  )
}

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero />
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_CATEGORIES.map((cat) => (
              <article
                key={cat.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-line bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="aspect-[3/2] overflow-hidden bg-slate-100">
                  <StrkImage
                    imgId={`product-${cat.id}-img`}
                    query={`[product-${cat.id}-desc] [product-${cat.id}-name]`}
                    ratio="3x2"
                    width="700"
                    alt={cat.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 id={`product-${cat.id}-name`} className="text-lg font-semibold text-ink">
                    {cat.name}
                  </h3>
                  <p id={`product-${cat.id}-desc`} className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {cat.desc}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-paper px-2.5 py-1 text-xs font-medium text-slate-600"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 flex items-center gap-1.5 border-t border-line pt-4 text-xs text-slate-500">
                    <Globe2 className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                    Main export markets: {cat.markets}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="mx-auto mt-14 max-w-3xl rounded-xl border border-line bg-white p-8 text-center shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-ink">
              Sourcing something else?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              These categories are where we have the deepest factory networks, but we
              regularly source outside this list — industrial components, seasonal goods,
              promotional products and more. Send us your specification and we will tell
              you honestly whether China is the right sourcing market for it.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent-dark hover:text-white"
            >
              Ask About Your Product
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <CTABand />
    </div>
  )
}
