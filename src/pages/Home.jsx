import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, ShieldCheck, Truck, Clock, Globe } from 'lucide-react'
import HeroSection from '../components/home/HeroSection'
import ServicesSection from '../components/home/ServicesSection'
import ProcessSection from '../components/home/ProcessSection'
import ProductsSection from '../components/home/ProductsSection'
import ProblemsSection from '../components/home/ProblemsSection'

const trustIcons = [
  { icon: ShieldCheck, label: 'Verified Suppliers', desc: 'Every factory is audited before we recommend it.' },
  { icon: Truck, label: 'End-to-End Logistics', desc: 'From factory floor to your warehouse.' },
  { icon: Clock, label: 'On-Time Delivery', desc: 'Weekly reports keep production on track.' },
  { icon: Globe, label: 'Global Reach', desc: 'Clients in 40+ countries served since 2015.' },
]

const caseStudies = [
  {
    title: 'US Retail Chain — Kitchenware',
    result: 'Sourced 120 SKUs from 8 verified factories. Saved 23% on landed costs.',
  },
  {
    title: 'German Distributor — EV Charging',
    result: 'Found a certified manufacturer in 3 weeks. Passed CE and TUV audits on first attempt.',
  },
  {
    title: 'Australian Brand — Outdoor Furniture',
    result: 'Reduced defect rate from 12% to under 2% with weekly QC inspections.',
  },
]

const faqs = [
  { q: 'How long does it take to find a supplier?', a: 'Typically 3-7 business days depending on product complexity. For standard products, we often deliver a shortlist within 72 hours.' },
  { q: 'Do you charge upfront fees?', a: 'No upfront fees for the initial supplier search and quotation. Our service fees are typically a percentage of the order value or a flat monthly retainer.' },
  { q: 'Can you handle small orders?', a: 'Yes. While our focus is on B2B orders, we can support small trial orders and scale with you as your volumes grow.' },
  { q: 'How do you verify factories?', a: 'We conduct on-site audits checking business licenses, production lines, certifications, and references. You receive a detailed audit report with photos.' },
  { q: 'What if the quality is poor?', a: 'Our QC inspections catch issues before shipment. If defects are found, we negotiate rework or replacement with the supplier at no extra cost to you.' },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>China Sourcing Agent | Supplier Verification, QC &amp; Shipping | SSourcing China</title>
        <meta name="description" content="SSourcing China is a professional China sourcing agent. We help global buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping." />
      </Helmet>

      <HeroSection />

      {/* Trust Section */}
      <section className="w-full bg-slate-50 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {trustIcons.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="flex flex-col items-center text-center">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">{item.label}</h3>
                  <p className="mt-1 text-sm text-slate-500">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <ServicesSection />

      <ProcessSection />

      <ProductsSection />

      <ProblemsSection />

      {/* Case Studies Preview */}
      <section className="w-full bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Case Studies</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-500">Real results for real clients across different industries and order sizes.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {caseStudies.map((cs) => (
              <div key={cs.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-base font-semibold text-slate-900">{cs.title}</h3>
                <p className="text-sm text-slate-500">{cs.result}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/case-studies" className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700">
              Read all case studies <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-3 text-slate-500">Everything you need to know before working with a China sourcing agent.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-slate-200 bg-white p-5">
                <h3 className="text-base font-semibold text-slate-900">{faq.q}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full bg-navy-950 py-16 text-white lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Source from China with Confidence?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Get a free sourcing quote in 24 hours. No commitment, no hidden fees.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-8 py-3.5 text-base font-semibold text-navy-950 hover:bg-amber-400 transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-8 py-3.5 text-base font-medium text-white hover:bg-slate-800 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-400">
            <CheckCircle className="h-4 w-4 text-emerald-400" />
            <span>Free initial consultation and supplier search</span>
          </div>
        </div>
      </section>
    </>
  )
}
