import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { productCategories } from '@/lib/siteData'
import SectionHeader from '@/components/shared/SectionHeader'

const ProductsSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-white py-16 text-slate-950 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Products we source"
          title="Support for custom, retail, industrial, and packaging projects"
          description="We work best when buyers need reliable supplier fit, clear specifications, and active coordination rather than a simple product directory."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((category) => (
            <article key={category.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <img
                alt={category.title}
                className="h-52 w-full object-cover"
                data-strk-img-id={category.imgId}
                data-strk-img={`[${category.descId}] [${category.titleId}] [products-section-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="p-5">
                <h3 id={category.titleId} className="text-lg font-semibold text-slate-950">{category.title}</h3>
                <p id={category.descId} className="mt-3 text-sm leading-6 text-slate-600">{category.description}</p>
              </div>
            </article>
          ))}
        </div>
        <h2 id="products-section-title" className="sr-only">Products sourced from China for B2B buyers</h2>
      </div>
    </section>
  )
}

export default ProductsSection
