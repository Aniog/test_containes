import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { MapPin, FileText, Users, Languages, Wallet, LineChart } from 'lucide-react'

const POINTS = [
  { icon: MapPin, title: 'On the ground in China', desc: 'Local team in Yiwu and Shenzhen, ready to visit factories within 48 hours.' },
  { icon: Languages, title: 'Fluent English & Mandarin', desc: 'No translation errors. Clear scope, clear quotes, clear contracts.' },
  { icon: FileText, title: 'Written reports for every step', desc: 'Audits, inspections, and production updates with photos, video, and dates.' },
  { icon: Wallet, title: 'Transparent fees', desc: 'A flat service fee or % of order value, agreed in writing before we start.' },
  { icon: Users, title: 'One project manager', desc: 'A single contact owns your order from sourcing to shipping.' },
  { icon: LineChart, title: 'Built for repeat orders', desc: 'We document supplier lists and specs so reorders get faster every cycle.' },
]

export default function Trust() {
  const containerRef = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative bg-[#0B2545] text-white py-16 md:py-24 overflow-hidden">
      <div
        className="absolute inset-0 opacity-15"
        data-strk-bg-id="trust-bg-warehouse-2e8a44"
        data-strk-bg="[trust-eyebrow] [trust-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B2545]/90 via-[#0B2545]/95 to-[#0B2545]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p id="trust-eyebrow" className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E63946]">
            Why Buyers Trust Us
          </p>
          <h2 id="trust-title" className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            A sourcing partner, not just another broker
          </h2>
          <p className="mt-4 text-base text-slate-200 leading-relaxed">
            We act for the buyer, not the supplier. Our incentive is your long-term success, which is why
            our work is documented, our fees are disclosed, and our suppliers are independently verified.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {POINTS.map((p) => {
            const Icon = p.icon
            return (
              <div key={p.title} className="rounded-xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#E63946]/15 text-[#E63946]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-1.5 text-sm text-slate-300 leading-relaxed">{p.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
