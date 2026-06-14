import { useEffect, useRef } from 'react'
import { ShieldCheck, BadgeCheck, Eye, Lock, FileCheck2, Languages } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const trustItems = [
  {
    icon: ShieldCheck,
    title: 'Independent Inspections',
    desc: 'Our QC team is separate from the supplier chain. Inspections are paid by you, not the factory.',
  },
  {
    icon: BadgeCheck,
    title: 'Verified Business Records',
    desc: 'Every shortlisted factory has its business license, tax record, and export history checked.',
  },
  {
    icon: Eye,
    title: 'Transparent Reporting',
    desc: 'Photos, videos, and signed reports on every inspection and milestone — stored in your project folder.',
  },
  {
    icon: Lock,
    title: 'NDA & IP Protection',
    desc: 'We sign NDAs with both you and the factory. Specs and artwork stay with vetted suppliers only.',
  },
  {
    icon: FileCheck2,
    title: 'Written Contracts',
    desc: 'Purchase orders, proforma invoices, and quality agreements are all in writing — no verbal deals.',
  },
  {
    icon: Languages,
    title: 'Bilingual Communication',
    desc: 'We brief the factory in Mandarin and report back to you in clear English. No information lost.',
  },
]

export default function TrustSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="section-y bg-brand-navy text-white">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="pill-dark">
              <ShieldCheck className="w-3.5 h-3.5" />
              Why buyers trust us
            </div>
            <h2
              id="trust-headline"
              className="mt-4 text-3xl md:text-4xl font-bold leading-tight"
            >
              Practical safeguards — not marketing promises
            </h2>
            <p
              id="trust-sub"
              className="mt-4 text-white/70 leading-relaxed"
            >
              We have a simple rule: every commitment we make is something we
              put in writing and back up with a deliverable. Below is how we
              protect your project, your money, and your brand.
            </p>
            <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
              <div
                className="w-full h-full"
                data-strk-bg-id="trust-bg-factory-7c91ab"
                data-strk-bg="[trust-headline] [trust-sub]"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="900"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {trustItems.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6"
                  >
                    <div className="w-11 h-11 rounded-lg bg-white/10 text-white flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-white/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
