import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageMeta from '@/components/shared/PageMeta'
import SectionHeading from '@/components/shared/SectionHeading'
import PageIntro from '@/components/site/PageIntro'
import QuoteBanner from '@/components/site/QuoteBanner'
import { productCategories } from '@/content/siteContent'

const ProductsPage = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <PageMeta
        title="Products We Source | SSourcing China"
        description="Explore product categories SSourcing China supports, from consumer goods and packaging to custom OEM and industrial components."
      />
      <main ref={containerRef}>
        <PageIntro
          eyebrow="Products we source"
          title="Product categories we commonly help overseas buyers source"
          description="We support practical consumer, commercial, and custom product sourcing where supplier fit, verification, and execution matter."
        />

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="Categories"
              title="Examples of sourcing categories"
              description="These examples are not the full limit of what we can review, but they reflect the types of projects buyers often ask us to support."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {productCategories.map((category) => (
                <article key={category.slug} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={category.title}
                    className="h-60 w-full object-cover"
                    data-strk-img-id={category.imgId}
                    data-strk-img={`[${category.descId}] [${category.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="900"
                  />
                  <div className="p-6 text-slate-900">
                    <h2 id={category.titleId} className="text-xl font-semibold tracking-tight text-slate-950">
                      {category.title}
                    </h2>
                    <p id={category.descId} className="mt-3 text-sm leading-7 text-slate-600">
                      {category.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <QuoteBanner />
      </main>
    </>
  )
}

export default ProductsPage
