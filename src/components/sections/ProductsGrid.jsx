import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { products } from '../../data'
import strkImgConfig from '../../strk-img-config.json'
import SectionHeader from '../common/SectionHeader'

export default function ProductsGrid() {
  const sectionRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current)
  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-16 text-slate-900 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Products we source" title="Support across common China sourcing categories" text="SSourcing China works best with practical B2B sourcing projects where product details, quality expectations, and commercial requirements can be clearly defined." align="center" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-900 shadow-xl">
              <img
                alt={`${product.title} sourcing in China`}
                className="aspect-[4/3] w-full object-cover"
                data-strk-img-id={product.imageId}
                data-strk-img={`[product-${product.imageId}-text] [product-${product.imageId}-title] [products-section-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="p-6">
                <h3 id={`product-${product.imageId}-title`} className="text-xl font-bold text-slate-900">{product.title}</h3>
                <p id={`product-${product.imageId}-text`} className="mt-3 text-sm leading-7 text-slate-600">{product.text}</p>
              </div>
            </article>
          ))}
        </div>
        <h2 id="products-section-title" className="sr-only">Products sourced from China factories and export suppliers</h2>
      </div>
    </section>
  )
}
