import { Link } from 'react-router-dom'
import { MessageSquare, Search, FileCheck, Factory, Eye, Ship, Handshake, ArrowRight } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Tell Us What You Need',
    desc: 'Fill out our inquiry form or schedule a call. We ask about your product, specs, target price, volume, timeline, and any certifications required. The more detail you provide, the better we can match you.',
    duration: 'Day 1',
  },
  {
    step: '02',
    icon: Search,
    title: 'Supplier Research',
    desc: 'We map relevant manufacturing clusters and compile a shortlist of 3-5 qualified suppliers. Each candidate is pre-screened for export experience, certifications, and production capacity.',
    duration: 'Days 2-7',
  },
  {
    step: '03',
    icon: FileCheck,
    title: 'Factory Verification',
    desc: 'Our team visits or remotely audits each shortlisted factory. We check business licenses, facility conditions, quality systems, and existing client references. You receive a detailed report.',
    duration: 'Days 8-14',
  },
  {
    step: '04',
    icon: Factory,
    title: 'Sample & Negotiation',
    desc: 'We manage sample production, review specs against your requirements, and negotiate pricing, payment terms, and delivery schedules. You approve the final terms before any deposit.',
    duration: 'Days 15-35',
  },
  {
    step: '05',
    icon: Eye,
    title: 'Production & QC',
    desc: 'Weekly progress reports keep you informed. We conduct pre-production, in-line, and pre-shipment inspections. Any defects are flagged and corrected before goods leave the factory.',
    duration: 'Days 36-70',
  },
  {
    step: '06',
    icon: Ship,
    title: 'Shipping & Delivery',
    desc: 'We book freight, prepare customs docs, and track your shipment. You receive updates at every milestone until goods arrive at your warehouse or port of destination.',
    duration: 'Days 71-90',
  },
  {
    step: '07',
    icon: Handshake,
    title: 'Ongoing Support',
    desc: 'After delivery, we stay available for feedback, reorders, supplier relationship management, and continuous improvement. Many of our clients work with us for years.',
    duration: 'Ongoing',
  },
]

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary">
        <div className="container-main py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-slate-300">How It Works</span>
            <h1 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">
              A Transparent, Proven Process
            </h1>
            <p className="mt-4 text-lg text-slate-200">
              Our 7-step process is designed to reduce risk, save time, and give you confidence at every stage of your China sourcing journey.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="relative mx-auto max-w-3xl">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 hidden h-full w-px bg-slate-200 md:left-8 md:block" />

            <div className="flex flex-col gap-12">
              {steps.map((s) => (
                <div key={s.step} className="relative flex flex-col gap-4 md:flex-row md:gap-8">
                  <div className="flex shrink-0 items-start gap-4 md:block">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-sm md:h-16 md:w-16">
                      <s.icon className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <span className="mt-2 inline-block rounded bg-surface px-2 py-0.5 text-xs font-semibold text-slate-500 md:hidden">
                      {s.duration}
                    </span>
                  </div>
                  <div className="flex-1 rounded-lg border border-slate-100 bg-surface p-6 md:p-8">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-accent">
                        Step {s.step}
                      </span>
                      <span className="hidden rounded bg-white px-2 py-0.5 text-xs font-semibold text-slate-500 md:inline-block">
                        {s.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold md:text-2xl">{s.title}</h3>
                    <p className="mt-3 leading-relaxed text-slate-600">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why this process works */}
      <section className="section-padding bg-surface">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold md:text-3xl">Why This Process Works</h2>
            <p className="mt-4 text-slate-500">
              Every step is designed around one principle: reducing your risk while giving you full visibility.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'No Surprises', desc: 'You see every supplier, every quote, and every inspection report before making decisions.' },
              { title: 'Local Presence', desc: 'Our team is based in Shenzhen and visits factories across Guangdong, Zhejiang, and Fujian regularly.' },
              { title: 'Bilingual Support', desc: 'All communication with suppliers is handled in Chinese, with clear English summaries sent to you.' },
              { title: 'Quality Gates', desc: 'Inspections at multiple stages mean defects are caught before goods ship, not after they arrive.' },
              { title: 'Transparent Pricing', desc: 'No hidden fees. You see our commission structure or fixed fees upfront before any work begins.' },
              { title: 'Long-Term Partnership', desc: 'We treat every client as a long-term partner, not a one-time transaction.' },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent">
        <div className="container-main py-16 text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Start Your Sourcing Project Today
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-100">
            Tell us what you need and we will outline the exact steps, timeline, and cost for your project.
          </p>
          <div className="mt-6">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-3.5 text-sm font-semibold text-accent transition-colors hover:bg-slate-100">
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
