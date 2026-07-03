import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ProductImage from '@/components/shared/ProductImage'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full bg-ink-900 text-ivory-50 overflow-hidden">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 animate-slow-zoom">
          <ProductImage art="heroModel" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/35 via-ink-900/20 to-ink-900/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/55 via-transparent to-transparent" />
      </div>

      <div className="relative container-x min-h-[100svh] flex items-end pb-16 sm:pb-20 lg:pb-28">
        <div className="max-w-[640px] animate-fade-up">
          <span className="eyebrow text-ivory-50/80">
            New · The Demi-Fine Collection
          </span>
          <h1 className="mt-5 font-serif text-[44px] sm:text-[64px] lg:text-[88px] leading-[1.02] tracking-[-0.015em] text-ivory-50 text-balance">
            Crafted to be
            <br className="hidden sm:block" /> <em className="italic font-light text-gold-200">treasured.</em>
          </h1>
          <p className="mt-6 text-[15px] sm:text-[17px] leading-relaxed text-ivory-50/85 max-w-[460px]">
            Demi-fine gold jewelry, hand-finished in small batches. Designed for
            every day, made to be kept.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link to="/shop" className="btn bg-ivory-50 text-ink-900 px-9 py-4 hover:bg-gold-200">
              Shop the collection
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
            <Link
              to="/about"
              className="btn text-ivory-50/90 px-6 py-4 border-b border-ivory-50/40 hover:border-ivory-50 rounded-none"
            >
              Our story
            </Link>
          </div>
        </div>
      </div>

      {/* Hairline scroll hint */}
      <div className="hidden lg:flex absolute bottom-8 right-12 items-center gap-3 text-ivory-50/70 text-[10px] uppercase tracking-[0.28em]">
        <span>Scroll</span>
        <span className="block w-12 h-px bg-ivory-50/40" />
      </div>
    </section>
  )
}
