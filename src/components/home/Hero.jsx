import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, ShieldCheck, Truck, Factory, BadgeCheck } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const trustPoints = [
  { icon: BadgeCheck, text: 'Verified factories only' },
  { icon: ShieldCheck, text: 'In-line & pre-shipment QC' },
  { icon: Truck, text: 'Door-to-door shipping' },
]

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-b from-white to-surface border-b border-hairline"
    >
      <div
        className="absolute inset-0 -z-0 opacity-[0.35]"
        data-strk-bg-id="hero-bg-grid-7a2b1c"
        data-strk-bg="[hero-headline] [hero-subline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="container-x relative z-10 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <span className="badge-soft">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              China-based Sourcing Agent
            </span>
            <h1
              id="hero-headline"
              className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-navy leading-[1.05]"
            >
              China Sourcing Agent
              <span className="block text-primary mt-1">for Global Buyers</span>
            </h1>
            <p
              id="hero-subline"
              className="mt-5 text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl"
            >
              We help importers, brands, and wholesalers find reliable Chinese
              factories, verify production capacity, inspect quality, and move
              shipments on schedule — without the language barrier or timezone drag.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="btn-primary">
                Get a Free Sourcing Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/how-it-works" className="btn-secondary">
                See How It Works
              </Link>
            </div>

            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
              {trustPoints.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-primary" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-hairline bg-white shadow-card-hover">
                <div
                  className="w-full h-full"
                  data-strk-bg-id="hero-bg-factory-3e8a11"
                  data-strk-bg="[hero-headline] [hero-subline]"
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="1200"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white border border-hairline rounded-xl p-4 shadow-card max-w-[260px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-status-success/10 text-status-success flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-ink">Last 12 months</div>
                    <div className="text-sm font-semibold text-ink">
                      312 supplier audits completed
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 md:-right-6 bg-white border border-hairline rounded-xl p-4 shadow-card max-w-[230px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-soft text-primary flex items-center justify-center">
                    <Factory className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-ink">Active buyers</div>
                    <div className="text-sm font-semibold text-ink">
                      24 countries served
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline rounded-2xl overflow-hidden border border-hairline">
          {[
            { stat: '9+ yrs', label: 'Sourcing experience in China' },
            { stat: '1,200+', label: 'Verified supplier network' },
            { stat: '24/7', label: 'Time zone coverage (Asia ↔ West)' },
            { stat: '1 day', label: 'Average first reply time' },
          ].map((s) => (
            <div key={s.label} className="bg-white p-5 md:p-6">
              <div className="text-2xl md:text-3xl font-bold text-brand-navy">{s.stat}</div>
              <div className="mt-1 text-sm text-ink-soft">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
