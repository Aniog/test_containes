import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ShieldCheck, FileSearch, Users, MapPin, BadgeCheck, Languages } from 'lucide-react'

const TRUST_POINTS = [
  { icon: MapPin, title: 'On the ground in China', desc: 'Local team in Yiwu, Shenzhen, and Ningbo for direct factory access.' },
  { icon: ShieldCheck, title: 'Independent of factories', desc: 'We act for the buyer. No hidden commission from suppliers.' },
  { icon: FileSearch, title: 'Documented inspections', desc: 'Every QC check delivered as a clear photo and video report.' },
  { icon: Users, title: 'Dedicated account manager', desc: 'One English-speaking contact across all your suppliers.' },
  { icon: BadgeCheck, title: 'AQL & compliance ready', desc: 'Inspections aligned to AQL 2.5 and CE / FCC / RoHS standards.' },
  { icon: Languages, title: 'Bilingual negotiation', desc: 'Native Mandarin negotiation with clear English reporting.' },
]

export default function TrustPoints() {
  const containerRef = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">Why Buyers Choose Us</p>
          <h2 id="trust-section-title" className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-brand-navy">
            Practical sourcing rigor, not promises
          </h2>
          <p id="trust-section-subtitle" className="mt-4 text-ink-700 text-lg">
            We work as a local extension of your procurement team — measured, documented, and
            accountable from supplier shortlist to container loading.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {TRUST_POINTS.map((t) => (
              <div key={t.title} className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-brand-sky text-brand-blue">
                  <t.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-brand-navy">{t.title}</p>
                  <p className="mt-1 text-sm text-ink-700 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[4/5] overflow-hidden rounded-xl border border-ink-200 bg-surface-muted">
              <img
                alt="QC inspector at factory"
                data-strk-img-id="trust-img-qc-3a91fe"
                data-strk-img="[trust-section-subtitle] quality control inspector factory china"
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                className="h-full w-full object-cover"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded-xl border border-ink-200 bg-surface-muted mt-8">
              <img
                alt="Container shipping port"
                data-strk-img-id="trust-img-port-9f02ab"
                data-strk-img="[trust-section-title] container shipping port china export"
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                className="h-full w-full object-cover"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            <Stat value="500+" label="Buyers served" />
            <Stat value="40+" label="Countries shipped" />
            <Stat value="98%" label="On-time shipments" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }) {
  return (
    <div className="rounded-lg border border-ink-200 bg-white p-4 text-center">
      <p className="text-2xl font-semibold text-brand-navy">{value}</p>
      <p className="mt-1 text-xs text-ink-500 uppercase tracking-wider">{label}</p>
    </div>
  )
}
