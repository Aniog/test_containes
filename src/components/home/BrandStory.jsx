import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ProductImage from '@/components/shared/ProductImage'

export default function BrandStory() {
  return (
    <section className="py-20 lg:py-28 bg-ivory-50">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-[4/5] max-w-[560px] overflow-hidden bg-ink-900">
              <ProductImage art="brandStory" />
            </div>
            <div className="hidden lg:block absolute mt-[-120px] ml-12 w-[200px] aspect-square bg-ink-900 overflow-hidden border-[6px] border-ivory-50 shadow-soft">
              <ProductImage art="categoryHuggies" />
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2 max-w-[520px]">
            <span className="eyebrow">Our story</span>
            <h2 className="mt-4 font-serif text-ink-900 text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.04] tracking-[-0.01em] text-balance">
              Heirlooms, <em className="italic font-light">without the wait.</em>
            </h2>
            <p className="mt-6 text-[15px] lg:text-[16px] leading-[1.75] text-ink-600">
              Velmora was started at a kitchen table in Lisbon, with one
              question: why does fine jewelry still feel out of reach? We use
              the same hand-finishing techniques as heritage houses, on 18K
              gold-plated brass and sterling silver — pieces that look, feel
              and wear like the real thing, at a price you can gift on a
              Tuesday.
            </p>
            <p className="mt-4 text-[15px] lg:text-[16px] leading-[1.75] text-ink-600">
              Every piece is hypoallergenic, nickel-free, and made in small
              batches by a workshop of seven. We make them to be worn, not
              stored.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ink-900 border-b border-ink-900 pb-1 hover:gap-3 transition-all"
            >
              Read our story
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
