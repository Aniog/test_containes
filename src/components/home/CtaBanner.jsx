import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/shared/Button'
import StockImage from '@/components/shared/StockImage'

export default function CtaBanner() {
  return (
    <section className="relative bg-brand-navy text-white overflow-hidden">
      <div className="absolute inset-0">
        <StockImage
          imgId="cta-banner-bg-3a8e1f"
          query="[cta-banner-title] [cta-banner-eyebrow]"
          ratio="16x9"
          width={1800}
          alt=""
          rounded="rounded-none"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/95 via-brand-ink/80 to-brand-ink/70" />
      </div>
      <div className="relative container-page py-16 md:py-20">
        <div className="max-w-3xl">
          <p
            id="cta-banner-eyebrow"
            className="text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-brand-accent-2 mb-4"
          >
            Ready to source from China?
          </p>
          <h2
            id="cta-banner-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight"
          >
            Tell us what you need. We reply within one business day.
          </h2>
          <p className="mt-5 text-lg text-white/80 leading-relaxed max-w-2xl">
            Share the product, quantity, and timeline. A sourcing manager will
            come back with a shortlist of factories, sample plan, and the next
            step.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button as={Link} to="/contact" size="xl">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              as="a"
              href="mailto:hello@ssourcing.cn"
              size="xl"
              variant="outlineWhite"
            >
              Email hello@ssourcing.cn
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}