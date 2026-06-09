import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ClipboardList, Search, ShieldCheck, FileCheck, Truck, Handshake, ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: ClipboardList,
    title: 'Share Your Requirements',
    description: 'Fill out our inquiry form or book a call. Tell us what you need: product specs, target price, quantity, and timeline. We review and confirm feasibility within 24 hours.',
    whatWeDo: 'Analyze product feasibility, check regulatory requirements, and set clear expectations on pricing and lead times.',
    whatYouGet: 'A feasibility summary and initial pricing estimate within 1 business day.',
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We tap into our verified supplier network and conduct fresh research to shortlist 3-5 suppliers that match your criteria. We request samples and compile comparison reports.',
    whatWeDo: 'Shortlist suppliers, request quotations, evaluate samples, and verify initial certifications.',
    whatYouGet: 'A detailed comparison report with supplier profiles, pricing, MOQs, and lead times.',
  },
  {
    num: '03',
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'Before you place an order, our team visits the factory to audit production lines, check certifications, and assess capacity and working conditions.',
    whatWeDo: 'On-site audit, photo/video documentation, reference checks, and capability assessment.',
    whatYouGet: 'A comprehensive audit report with photos, videos, risk ratings, and recommendations.',
  },
  {
    num: '04',
    icon: FileCheck,
    title: 'Quality Control',
    description: 'We conduct inspections at pre-production, during production, and pre-shipment stages. Every batch gets a detailed report with photo evidence.',
    whatWeDo: 'AQL-based sampling, defect classification, rework supervision, and pass/fail certification.',
    whatYouGet: 'Inspection reports with photos, defect summaries, and corrective action tracking.',
  },
  {
    num: '05',
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'We coordinate freight forwarding, handle customs documentation, and track shipments until they reach your warehouse.',
    whatWeDo: 'Freight quote comparison, booking, documentation, customs clearance, and delivery tracking.',
    whatYouGet: 'End-to-end logistics management with real-time tracking updates.',
  },
  {
    num: '06',
    icon: Handshake,
    title: 'Ongoing Support',
    description: 'We remain your on-ground partner for reorders, new product development, and continuous supplier relationship management.',
    whatWeDo: 'Supplier performance reviews, reorder coordination, and new product sourcing.',
    whatYouGet: 'A dedicated sourcing manager and long-term cost optimization.',
  },
]

const risks = [
  'Suppliers disappear after receiving deposits',
  'Product quality does not match samples',
  'Hidden costs and last-minute price changes',
  'Production delays with no communication',
  'Difficulty verifying factory credentials remotely',
  'Customs and shipping complications',
]

const protections = [
  'On-site factory audits before any payment',
  'Independent inspections at every stage',
  'Clear, itemized quotations with no surprises',
  'Weekly progress reports with real photos',
  'Verified supplier network with references',
  'End-to-end logistics and customs support',
]

export default function HowItWorks() {
  return (
    <>
      <Helmet>
        <title>How It Works | China Sourcing Process | SSourcing China</title>
        <meta name="description" content="Our transparent 6-step China sourcing process: requirements, supplier search, factory verification, QC, shipping, and ongoing support." />
      </Helmet>

      {/* Hero */}
      <section className="w-full bg-navy-900 text-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">How It Works</h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            A transparent, step-by-step process designed to minimize risk and maximize results. From first inquiry to final delivery.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="space-y-16">
            {steps.map((step, idx) => {
              const Icon = step.icon
              return (
                <div key={step.num} className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-start">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 lg:flex-col lg:items-start">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <span className="text-4xl font-extrabold text-slate-200">{step.num}</span>
                    </div>
                  </div>
                  <div className="lg:col-span-10">
                    <h2 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h2>
                    <p className="text-slate-600 leading-relaxed mb-6">{step.description}</p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-lg bg-slate-50 p-4">
                        <h4 className="text-sm font-semibold text-slate-900 mb-2">What we do</h4>
                        <p className="text-sm text-slate-600">{step.whatWeDo}</p>
                      </div>
                      <div className="rounded-lg bg-blue-50 p-4">
                        <h4 className="text-sm font-semibold text-blue-900 mb-2">What you get</h4>
                        <p className="text-sm text-blue-800">{step.whatYouGet}</p>
                      </div>
                    </div>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="lg:col-span-12 hidden lg:flex justify-center">
                      <div className="h-12 w-px bg-slate-200" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Risks vs Protections */}
      <section className="w-full bg-slate-900 py-16 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Problems We Solve</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-400">
              Sourcing from China comes with real risks. Here is how we protect your business.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-red-900/40 bg-red-950/20 p-6">
              <div className="mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-400" />
                <h3 className="text-lg font-semibold text-red-100">Common Risks</h3>
              </div>
              <ul className="space-y-3">
                {risks.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-slate-300">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-emerald-900/40 bg-emerald-950/20 p-6">
              <div className="mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-400" />
                <h3 className="text-lg font-semibold text-emerald-100">How We Protect You</h3>
              </div>
              <ul className="space-y-3">
                {protections.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to start your sourcing journey?</h2>
          <p className="text-slate-600 mb-6">Book a free consultation and we will walk you through the process step by step.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
