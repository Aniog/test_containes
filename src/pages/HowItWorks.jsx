import React from 'react'
import { Link } from 'react-router-dom'
import { ClipboardList, Search, ShieldCheck, Package, Ship, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'You share your product requirements, target price, order volume, and timeline. We ask clarifying questions to ensure we understand your goals.',
    icon: ClipboardList,
  },
  {
    number: '02',
    title: 'Supplier Sourcing',
    description: 'We search our network and the market for manufacturers that match your specs. We shortlist the most promising candidates.',
    icon: Search,
  },
  {
    number: '03',
    title: 'Factory Verification',
    description: 'We conduct on-site audits to verify business registration, production capacity, quality systems, and references.',
    icon: ShieldCheck,
  },
  {
    number: '04',
    title: 'Sample & Negotiation',
    description: 'We coordinate sample production and shipping. Once quality is confirmed, we negotiate pricing, MOQ, and terms.',
    icon: Package,
  },
  {
    number: '05',
    title: 'Production Monitoring',
    description: 'We track production progress, conduct during-production inspections, and keep you updated with photos and reports.',
    icon: ClipboardList,
  },
  {
    number: '06',
    title: 'Inspection & Shipping',
    description: 'We perform pre-shipment inspection, prepare shipping documents, coordinate freight, and track delivery until arrival.',
    icon: Ship,
  },
]

const guarantees = [
  'No hidden fees',
  'Transparent reporting at every stage',
  'Your interests are represented in negotiations',
  'Quality issues flagged before shipment',
  'Clear timelines and milestones',
  'Dedicated point of contact',
]

export default function HowItWorks() {
  return (
    <div className="bg-white">
      <section className="bg-slate-900 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">How It Works</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">A structured, transparent process that takes you from idea to delivery with confidence.</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-900">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div className="text-xs font-semibold text-slate-500">Step {step.number}</div>
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Our commitment to you</h2>
              <p className="mt-3 text-lg text-slate-600">We believe sourcing should be predictable and low-risk. Here is what we guarantee.</p>
              <ul className="mt-8 space-y-4">
                {guarantees.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                    <span className="text-sm leading-6 text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Typical timeline</h3>
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Supplier shortlist</span>
                  <span className="font-semibold text-slate-900">3-5 business days</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Factory verification</span>
                  <span className="font-semibold text-slate-900">5-7 business days</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Sample approval</span>
                  <span className="font-semibold text-slate-900">2-4 weeks</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Production & inspection</span>
                  <span className="font-semibold text-slate-900">Varies by order</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Shipping</span>
                  <span className="font-semibold text-slate-900">2-6 weeks</span>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/contact">
                  <button className="inline-flex w-full items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-slate-800">
                    Start your sourcing project
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
