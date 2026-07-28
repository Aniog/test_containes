import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Boxes, CheckCircle2 } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import { getStrkBackgroundStyle } from '@/lib/strk-image-utils.js'
import CTAButton from '@/components/common/CTAButton.jsx?ssourcing=20260728'
import SectionHeading from '@/components/common/SectionHeading.jsx?ssourcing=20260728'
import { products } from '@/data/siteContent.js'

const ProductsSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-slate-50 py-16 text-slate-950 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Products we source"
              title="Practical sourcing across common B2B product categories"
              description="We focus on products where supplier comparison, specification control, packaging checks, and shipment coordination matter."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {products.map((product) => (
                <div key={product} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 text-slate-800 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-blue-700" />
                  <span className="text-sm font-medium leading-6">{product}</span>
                </div>
              ))}
            </div>
            <CTAButton href="/products" variant="secondary" className="mt-8">Explore product categories</CTAButton>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <div
              className="h-72 bg-slate-200 sm:h-96"
              data-strk-bg-id="products-warehouse-bg-4dd8f2"
              data-strk-bg="[products-caption] [products-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="1000"
              aria-label="Warehouse and sourced products ready for export"
              style={getStrkBackgroundStyle('products-warehouse-bg-4dd8f2')}
            />
            <div className="bg-white p-6 text-slate-950">
              <div className="flex items-center gap-3">
                <Boxes className="h-6 w-6 text-blue-700" />
                <h3 id="products-title" className="text-lg font-bold text-slate-950">From product search to export-ready cartons</h3>
              </div>
              <p id="products-caption" className="mt-3 text-sm leading-7 text-slate-700">
                We help clarify specifications, packaging, labels, carton marks, and supplier responsibilities before goods leave China.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
