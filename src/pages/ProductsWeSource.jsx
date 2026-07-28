import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHero from '@/components/shared/PageHero'
import SectionHeading from '@/components/shared/SectionHeading'
import Seo from '@/components/shared/Seo'
import { productCategories } from '@/data/siteContent'

function ProductsWeSource() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <main ref={containerRef}>
      <Seo
        title="Products We Source in China | B2B Sourcing Categories | SSourcing China"
        description="Browse representative B2B product categories SSourcing China helps overseas buyers source, including consumer goods, packaging, industrial items, and project-based sourcing lines."
      />
      <PageHero
        eyebrow="Products We Source"
        title="Product sourcing support across practical B2B categories"
        description="We help overseas buyers source a range of consumer, packaging, industrial, and project-based product categories depending on volume, quality expectations, and supplier fit."
        primaryCta={{ label: 'Get a Free Sourcing Quote', to: '/contact' }}
        secondaryCta={{ label: 'See Case Studies', to: '/case-studies' }}
        theme="light"
        idPrefix="products-hero"
        visualCue="industrial products packaging cartons warehouse shelves export goods manufacturing"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeading
            eyebrow="Categories"
            title="Examples of product groups we commonly support"
            description="Final category fit depends on your specifications, order profile, and sourcing needs, but the following categories are representative."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productCategories.map((category, index) => (
              <article key={category.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <img
                  className="h-56 w-full object-cover"
                  alt={category.title}
                  data-strk-img-id={`products-grid-${index + 1}-4a5be2`}
                  data-strk-img={`[products-category-desc-${index}] [products-category-title-${index}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="p-6 md:p-8">
                  <h3 id={`products-category-title-${index}`} className="text-xl font-semibold tracking-tight text-slate-950">
                    {category.title}
                  </h3>
                  <p id={`products-category-desc-${index}`} className="mt-3 text-base leading-7 text-slate-600">
                    {category.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <SectionHeading
              eyebrow="Project fit"
              title="Need support on a different product line?"
              description="If your category is not listed, send your sourcing brief. We can review whether the project is a fit and what support scope makes sense."
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProductsWeSource
