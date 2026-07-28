import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { productCategories } from '@/lib/siteData'
import PageHero from '@/components/shared/PageHero'
import InquirySection from '@/components/home/InquirySection'

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <main ref={containerRef}>
      <PageHero
        eyebrow="Products we source"
        title="Product sourcing support for B2B buyers"
        description="SSourcing China supports overseas buyers sourcing custom products, components, consumer goods, packaging, and related categories from China."
      >
        <p className="text-lg font-semibold text-white">Not every product is the right fit</p>
        <p className="mt-3 text-sm leading-6 text-slate-200">
          We review the product, quantity, compliance needs, and sourcing goal before recommending the most practical next step.
        </p>
      </PageHero>
      <section className="bg-white py-16 text-slate-950 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {productCategories.map((category) => (
            <article key={category.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
              <img
                alt={category.title}
                className="h-72 w-full object-cover"
                data-strk-img-id={`products-page-${category.imgId}`}
                data-strk-img={`[${category.descId}] [${category.titleId}] [products-page-title]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="p-7">
                <h2 id={category.titleId} className="text-2xl font-semibold text-slate-950">{category.title}</h2>
                <p id={category.descId} className="mt-4 text-base leading-7 text-slate-600">{category.description}</p>
              </div>
            </article>
          ))}
        </div>
        <h2 id="products-page-title" className="sr-only">Product categories sourced from China</h2>
      </section>
      <InquirySection />
    </main>
  )
}

export default Products
