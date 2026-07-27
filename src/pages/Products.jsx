import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHero from '@/components/shared/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import CtaBanner from '@/components/shared/CtaBanner'
import { PRODUCT_CATEGORIES } from '@/content'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

const NOTES = [
  'We match factories to your product type, not just any supplier with a listing.',
  'Each category has its own quality checkpoints and common defect risks.',
  'We can source custom designs, OEM/ODM, and private label products.',
  'If your category is not listed, ask us — we source across many industries.',
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Products We Source"
        title="Product categories we source"
        description="We source across a wide range of categories, with experience in the factories, materials, and quality standards each one requires."
      />

      <Section>
        <div ref={containerRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
      </Section>

      <Section muted>
        <SectionHeader
          align="left"
          eyebrow="Good to Know"
          title="How we approach each category"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {NOTES.map((note) => (
            <div
              key={note}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-5"
            >
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
              <span className="text-sm text-foreground">{note}</span>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Don't see your product category?"
        description="Tell us what you want to source. We work across many industries and will confirm whether we can help."
      />
    </>
  )
}
