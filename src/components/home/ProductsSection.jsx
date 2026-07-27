import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader.jsx'
import { productCategories } from '@/data/siteData.js'
import strkImgConfig from '@/strk-img-config.json'

function ProductImagePanel({ title }) {
  if (title === 'Industrial & Hardware') {
    return (
      <div
        className="h-48 bg-cover bg-center"
        data-strk-bg-id="product-industrial-hardware-9c41e2"
        data-strk-bg="[product-industrial-desc] [product-industrial-title] [products-section-subtitle] [products-section-title]"
        data-strk-bg-ratio="4x3"
        data-strk-bg-width="700"
        role="img"
        aria-label="Industrial and hardware sourcing"
      />
    )
  }

  if (title === 'Consumer Goods') {
    return (
      <div
        className="h-48 bg-cover bg-center"
        data-strk-bg-id="product-consumer-goods-b72f6a"
        data-strk-bg="[product-consumer-desc] [product-consumer-title] [products-section-subtitle] [products-section-title]"
        data-strk-bg-ratio="4x3"
        data-strk-bg-width="700"
        role="img"
        aria-label="Consumer goods sourcing"
      />
    )
  }

  if (title === 'Packaging & Displays') {
    return (
      <div
        className="h-48 bg-cover bg-center"
        data-strk-bg-id="product-packaging-displays-a18d34"
        data-strk-bg="[product-packaging-desc] [product-packaging-title] [products-section-subtitle] [products-section-title]"
        data-strk-bg-ratio="4x3"
        data-strk-bg-width="700"
        role="img"
        aria-label="Packaging and display sourcing"
      />
    )
  }

  return (
    <div
      className="h-48 bg-cover bg-center"
      data-strk-bg-id="product-custom-manufacturing-e06b92"
      data-strk-bg="[product-custom-desc] [product-custom-title] [products-section-subtitle] [products-section-title]"
      data-strk-bg-ratio="4x3"
      data-strk-bg-width="700"
      role="img"
      aria-label="Custom manufacturing sourcing"
    />
  )
}

export default function ProductsSection({ showAll = false }) {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-white py-16 text-sourcing-ink md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Products we source"
            title="Practical sourcing for industrial, consumer, packaging, and custom products"
            description="We focus on projects where supplier fit, quality control, packaging, and export coordination are important to the buyer."
          />
          {!showAll && (
            <Link to="/products-we-source" className="inline-flex items-center gap-2 text-sm font-bold text-sourcing-blue hover:text-sourcing-navy">
              View product scope <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((category) => {
            const Icon = category.icon
            return (
              <article key={category.title} className="overflow-hidden rounded-2xl border border-sourcing-line bg-sourcing-card text-sourcing-ink shadow-sm">
                <ProductImagePanel title={category.title} />
                <div className="p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sourcing-sky text-sourcing-blue">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 id={category.titleId} className="mt-4 text-xl font-bold text-sourcing-navy">{category.title}</h3>
                  <p id={category.descId} className="mt-3 text-sm leading-7 text-sourcing-muted">{category.description}</p>
                </div>
              </article>
            )
          })}
        </div>
        <div className="sr-only">
          <span id="products-section-title">Products we source</span>
          <span id="products-section-subtitle">Factory sourcing, quality control, packaging, and shipping coordination from China</span>
        </div>
      </div>
    </section>
  )
}
