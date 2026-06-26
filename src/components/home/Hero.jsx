import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Button from '@/components/shared/Button'
import StockImage from '@/components/shared/StockImage'

const points = [
  'Vetted factories across Yiwu, Shenzhen, Guangzhou',
  'Independent QC with photo-supported reports',
  'Transparent fees agreed before work starts',
]

export default function Hero() {
  return (
    <section className="relative bg-brand-ink text-white overflow-hidden">
      <div className="absolute inset-0">
        <StockImage
          imgId="home-hero-bg-7b4d2e"
          query="[home-hero-eyebrow] [home-hero-title]"
          ratio="16x9"
          width={1800}
          alt=""
          rounded="rounded-none"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-ink/95 via-brand-ink/85 to-brand-navy/90" />
      </div>
      <div className="relative container-page py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <p
              id="home-hero-eyebrow"
              className="text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-brand-accent-2 mb-5"
            >
              China-based Sourcing Agent for Global B2B Buyers
            </p>
            <h1
              id="home-hero-title"
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight"
            >
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
              Find reliable suppliers, verify factories, inspect quality, and
              coordinate shipping — handled by an English-speaking team on the
              ground in China.
            </p>

            <ul className="mt-8 space-y-3">
              {points.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 text-white/85 text-sm md:text-base"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-accent-2 mt-0.5 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Button as={Link} to="/contact" size="xl">
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                as={Link}
                to="/how-it-works"
                size="xl"
                variant="outlineWhite"
              >
                See How It Works
              </Button>
            </div>

            <p className="mt-6 text-xs text-white/60">
              Reply within one business day &middot; No commitment required
            </p>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-accent/10 rounded-2xl blur-2xl" />
              <div className="relative bg-white text-brand-text rounded-2xl shadow-2xl p-6 md:p-7 border border-white/40">
                <div className="flex items-center justify-between mb-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted">
                    Sample Project Snapshot
                  </p>
                  <span className="inline-flex items-center justify-center h-7 px-3 rounded-full bg-brand-success/10 text-brand-success text-xs font-semibold">
                    On track
                  </span>
                </div>
                <dl className="space-y-4">
                  <Row label="Product" value="Stainless bottle, 500ml" />
                  <Row label="Target factory" value="Yiwu, verified" />
                  <Row label="Sample status" value="Approved" />
                  <Row label="Order quantity" value="2,000 units" />
                  <Row label="Lead time" value="35 days" />
                  <Row label="QC stage" value="Pre-shipment" />
                </dl>
                <div className="mt-6 pt-5 border-t border-brand-line">
                  <p className="text-xs text-brand-muted">
                    Real updates from a current client project. Numbers shown
                    are representative.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 text-sm">
      <dt className="text-brand-muted">{label}</dt>
      <dd className="font-semibold text-brand-ink text-right">{value}</dd>
    </div>
  )
}