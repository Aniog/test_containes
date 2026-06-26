import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Clock, FileText, ShieldCheck } from 'lucide-react'
import PageHero from '@/components/PageHero.jsx'
import { PROCESS } from '@/data/content.js'

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="How It Works"
        breadcrumb="How It Works"
        title="A 7-step sourcing process built for B2B buyers"
        desc="Predictable milestones, clear deliverables and one project manager from your initial brief through to delivery at your destination port or warehouse."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ol className="relative space-y-8">
            {PROCESS.map(({ step, icon: Icon, title, desc }, idx) => (
              <li key={step} className="relative grid grid-cols-[auto_1fr] gap-6 md:gap-8">
                <div className="flex flex-col items-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white font-mono text-sm font-bold shadow-sm">
                    {step}
                  </span>
                  {idx < PROCESS.length - 1 && <span className="flex-1 w-px bg-slate-200 mt-2" />}
                </div>
                <div className="pb-2">
                  <div className="flex items-center gap-2.5 mb-2">
                    <Icon className="h-5 w-5 text-slate-700" />
                    <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                  </div>
                  <p className="text-base text-slate-600 leading-relaxed">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: 'Typical timeline',
                desc: '5–7 days for supplier shortlist. 7–14 days for samples. 30–60 days for production. 25–35 days for sea freight to most ports.',
              },
              {
                icon: FileText,
                title: 'What you receive',
                desc: 'Written supplier comparison, factory audit report, QC report with photos, weekly progress updates and shipping documents.',
              },
              {
                icon: ShieldCheck,
                title: 'Your protection',
                desc: 'Signed NDA, transparent contracts, escrow-style milestone payments, AQL-based release of shipment.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-slate-200 bg-white p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-red-50 text-red-600">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700 transition-colors"
            >
              Start a Sourcing Project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
