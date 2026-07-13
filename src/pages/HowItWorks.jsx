import { Link } from 'react-router-dom'
import { ClipboardList, Search, FileCheck, Boxes, Ship, HeadphonesIcon, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import PageHeader from '@/components/shared/PageHeader'
import SectionLabel from '@/components/shared/SectionLabel'

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Submit Your Inquiry',
    description: 'Fill in our sourcing form with product details, specifications, target price, quantity, and delivery requirements. You can also schedule a call to discuss the project.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Receive a Supplier Shortlist',
    description: 'Within 3-5 business days, we provide 3-5 qualified suppliers with pricing, lead time, MOQ, and capability summaries.',
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Verification & Sampling',
    description: 'We audit the shortlisted factories, confirm certifications, and coordinate samples so you can evaluate quality before committing.',
  },
  {
    number: '04',
    icon: Boxes,
    title: 'Place Order & Monitor Production',
    description: 'Once you approve a supplier, we help finalize the contract, track material preparation, monitor production, and conduct inline inspections.',
  },
  {
    number: '05',
    icon: Ship,
    title: 'Quality Control & Shipping',
    description: 'We perform pre-shipment inspection, coordinate container loading, prepare export documents, and track the shipment to your destination.',
  },
  {
    number: '06',
    icon: HeadphonesIcon,
    title: 'Delivery & Continuous Support',
    description: 'After delivery, we remain available for claims, reorders, and supplier performance reviews to improve future orders.',
  },
]

export default function HowItWorks() {
  return (
    <div>
      <PageHeader
        title="How It Works"
        subtitle="A simple, transparent sourcing process from inquiry to delivery."
        backgroundId="how-it-works-header-bg"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <SectionLabel>Our Process</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Six Steps to a Reliable Supply Chain
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 hidden w-0.5 bg-slate-200 md:block" />
            <div className="space-y-12">
              {steps.map((step) => (
                <div key={step.number} className="relative grid gap-6 md:grid-cols-12 md:gap-8">
                  <div className="md:col-span-1 flex md:justify-center">
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-md">
                      <step.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="md:col-span-11">
                    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                      <div className="mb-2 text-sm font-bold text-blue-600">STEP {step.number}</div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link to="/contact?quote=true" className="no-underline hover:no-underline">
                Start Your Sourcing Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
