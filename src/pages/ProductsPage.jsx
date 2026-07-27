import { ImageHelper } from '@strikingly/sdk'
import { useEffect, useRef } from 'react'
import strkImgConfig from '@/strk-img-config.json'
import CTASection from '@/components/shared/CTASection'
import PageHero from '@/components/shared/PageHero'
import SectionIntro from '@/components/shared/SectionIntro'
import { productCategories } from '@/data/siteContent'
import { usePageMeta } from '@/hooks/usePageMeta'


export default function ProductsPage() {
  const pageRef = useRef(null)

  usePageMeta(
    'Products We Source | SSourcing China',
    'See the product categories SSourcing China commonly supports for overseas buyers sourcing from China.'
  )

  useEffect(() => {
    let cleanup = () => {}

    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [])

  return (
    <div ref={pageRef}>
      <PageHero
        eyebrow="Products we source"
        title="Product categories commonly sourced for overseas buyers"
        description="We support practical categories where buyers need supplier comparison, factory follow-up, inspection, and shipment coordination."
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Categories"
            title="Examples of sourcing categories we often help with"
            description="If your product is not listed, you can still send your requirements. We will review whether it is a suitable fit."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productCategories.map((item) => (
              <article key={item.id} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm">
                <img
                  alt={item.title}
                  className="h-60 w-full object-cover"
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="p-6">
                  <h2 id={item.titleId} className="text-xl font-semibold text-slate-900">
                    {item.title}
                  </h2>
                  <p id={item.descId} className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  )
}
