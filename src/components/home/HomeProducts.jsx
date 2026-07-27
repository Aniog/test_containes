import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Section, SectionHeader } from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { PRODUCT_CATEGORIES } from '@/content'
import { ArrowRight } from 'lucide-react'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function HomeProducts() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <Section>
      <SectionHeader
        eyebrow="Products We Source"
        title="Categories we know well"
        description="We source across a range of product categories, with experience in the factories, materials, and quality standards each one requires."
      />
      <div ref={containerRef} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCT_CATEGORIES.map((product) => (
          <article
            key={product.id}
            className="group overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-md"
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={PLACEHOLDER}
                alt={product.title}
                data-strk-img-id={product.imgId}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 id={product.titleId} className="text-lg font-bold text-foreground">
                {product.title}
              </h3>
              <p id={product.descId} className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {product.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button to="/products" variant="outline">
          Browse All Products
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Section>
  )
}
