import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Container, SectionHeading } from '@/components/ui/Section'
import { ProductCard } from '@/components/products/ProductCard'
import { products, categories } from '@/data/products'
import { cn } from '@/lib/utils'

export default function Products() {
  const containerRef = useRef(null)
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All'
      ? products
      : products.filter((p) => p.category === active)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [active])

  return (
    <>
      <section className="bg-ink text-ink-fg py-16 md:py-20">
        <Container>
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-copper" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
              Our Products
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Folding Machinery Catalogue
          </h1>
          <p className="text-lg text-ink-muted max-w-2xl">
            Browse our full range of double folders, sheet metal folders, and
            CNC folding machines — each built for precision and ease of use.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-surface" ref={containerRef}>
        <Container>
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-colors border',
                  active === cat
                    ? 'bg-steel text-white border-steel'
                    : 'bg-white text-muted border-line hover:border-steel/40 hover:text-steel'
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
