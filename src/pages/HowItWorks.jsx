import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  ClipboardList, Search, FlaskConical, Factory, ShieldCheck, Ship,
  ArrowRight, FileCheck, Calendar, MessageSquare, Camera,
} from 'lucide-react'
import PageHero from '../components/site/PageHero'
import CTASection from '../components/site/CTASection'

const phases = [
  {
    n: '01',
    icon: ClipboardList,
    title: 'Brief & requirements',
    desc: 'You share product specs, target price, target quantity, certifications and timeline. If you have reference samples or product links, even better.',
    deliverables: ['Sourcing brief signed off', 'NDA on request', 'Project manager assigned'],
    duration: 'Day 1–2',
  },
  {
    n: '02',
    icon: Search,
    title: 'Supplier search & shortlist',
    desc: 'We search our verified-supplier network and the wider China market. We screen out traders, request quotes and compare suppliers head to head.',
    deliverables: ['Supplier shortlist (3–5)', 'Comparison sheet', 'Quote sheet (FOB/EXW)'],
    duration: 'Day 3–7',
  },
  {
    n: '03',
    icon: FlaskConical,
    title: 'Samples & approvals',
    desc: 'We request samples from selected suppliers, consolidate them and ship to you. After your feedback, we manage iteration rounds until samples are signed off.',
    deliverables: ['Sample comparison', 'Iteration tracking', 'Golden-sample sign-off'],
    duration: 'Week 2–4',
  },
  {
    n: '04',
    icon: Factory,
    title: 'Order placement & production',
    desc: 'PO is placed, deposit settled and production scheduled. Our QC team confirms materials and components before mass production starts.',
    deliverables: ['PO and PI confirmation', 'Production schedule', 'Material verification (PPI)'],
    duration: 'Week 4–10',
  },
  {
    n: '05',
    icon: ShieldCheck,
    title: 'Quality inspection (AQL)',
    desc: 'During-production and pre-shipment inspections by our QC engineers. Reports include photos, measurements and defect categorization.',
    deliverables: ['DUPRO report', 'PSI report (AQL 2.5)', 'Pass / fail recommendation'],
    duration: 'Pre-shipment',
  },
  {
    n: '06',
    icon: Ship,
    title: 'Shipping & delivery',
    desc: 'We book sea/air freight, handle export documents, manage consolidation and arrange delivery to your warehouse or 3PL.',
    deliverables: ['Booking confirmation', 'Export docs / Bill of Lading', 'Door-to-door tracking'],
    duration: '20–45 days transit',
  },
]

const expectations = [
  { icon: MessageSquare, title: 'One contact person', desc: 'Your dedicated project manager handles all communication with suppliers and shipping partners.' },
  { icon: Calendar, title: 'Weekly updates', desc: 'You receive a weekly status update during production with photos, milestones and any risks.' },
  { icon: FileCheck, title: 'Written reports', desc: 'Supplier reports, comparison sheets and inspection reports are all delivered in PDF.' },
  { icon: Camera, title: 'Photos & video', desc: 'On-site factory photos and inspection videos so you can see exactly what we see.' },
]

export default function HowItWorks() {
  const containerRef = useRef(null)
  useEffect(() => {
    let cancelled = false; let cleanup = null
    ;(async () => {
      try {
        const mod = await import('@strikingly/sdk')
        if (cancelled) return
        const cfg = (await import('../strk-img-config.json')).default || {}
        if (mod?.ImageHelper?.loadImages && containerRef.current) cleanup = mod.ImageHelper.loadImages(cfg, containerRef.current)
      } catch {}
    })()
    return () => { cancelled = true; if (typeof cleanup === 'function') cleanup() }
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="How It Works"
        title="A practical, transparent sourcing process"
        description="A clear six-stage workflow used on every project — so you always know what happens next, who is doing it and what to expect."
      >
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-700">
          Get a Free Sourcing Quote <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid gap-6">
            {phases.map(({ n, icon: Icon, title, desc, deliverables, duration }, i) => (
              <article key={n} className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                <div className="grid gap-0 lg:grid-cols-12">
                  <div className="lg:col-span-4 bg-slate-50 p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-slate-200">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold uppercase tracking-wider text-red-600">Step {n}</span>
                      <span className="text-xs text-slate-500">{duration}</span>
                    </div>
                    <div className="mt-3 flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-md bg-slate-900 text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
                    </div>
                    <p className="mt-4 text-sm text-slate-600 leading-relaxed">{desc}</p>
                  </div>
                  <div className="lg:col-span-8 p-6 md:p-8">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">What you receive</h3>
                        <ul className="mt-3 space-y-2 text-sm text-slate-700">
                          {deliverables.map((d) => (
                            <li key={d} className="flex items-start gap-2">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-600" />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="overflow-hidden rounded-lg border border-slate-200">
                        <img
                          alt={title}
                          className="aspect-[4/3] w-full object-cover"
                          data-strk-img-id={`process-step-${n}`}
                          data-strk-img={`[process-step-${n}-title] [process-step-${n}-desc] china sourcing factory`}
                          data-strk-img-ratio="4x3"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        />
                      </div>
                    </div>
                    <span id={`process-step-${n}-title`} className="sr-only">{title}</span>
                    <span id={`process-step-${n}-desc`} className="sr-only">{desc}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-red-600">What to expect</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">How we keep you in the loop</h2>
            <p className="mt-4 text-base text-slate-600">
              Sourcing from China can feel like a black box. Our job is to make every stage visible.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {expectations.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-slate-200 bg-white p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-red-600/10 text-red-600">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
