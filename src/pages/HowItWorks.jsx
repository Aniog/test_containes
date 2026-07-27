import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  ClipboardList,
  Search,
  FileCheck,
  PackageCheck,
  Ship,
  Headphones,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const steps = [
  {
    icon: ClipboardList,
    title: 'Submit Your Requirements',
    description:
      'Start by sharing product details, specifications, target price, estimated quantity, and any certifications you need. The more detail you provide, the faster we can match you with the right suppliers.',
    whatWeDo: [
      'Review your product brief and quality expectations',
      'Clarify budget, timeline, and delivery terms',
      'Confirm target certifications or compliance standards',
    ],
  },
  {
    icon: Search,
    title: 'Research & Shortlist Suppliers',
    description:
      'We search our verified network and public marketplaces to identify 2-5 manufacturers that fit your criteria. Each candidate is screened for product experience, capacity, and export history.',
    whatWeDo: [
      'Cross-check suppliers against your requirements',
      'Request and compare initial quotations',
      'Prepare a supplier comparison report',
    ],
  },
  {
    icon: FileCheck,
    title: 'Verify & Sample',
    description:
      'Before production starts, we verify factory legitimacy and arrange product samples. This step reduces the risk of working with traders or underqualified manufacturers.',
    whatWeDo: [
      'Conduct factory audits or verification checks',
      'Coordinate sample production and delivery',
      'Review sample quality against your specifications',
    ],
  },
  {
    icon: PackageCheck,
    title: 'Order, Produce & Inspect',
    description:
      'Once you approve a supplier, we support contract review, payment terms, and production monitoring. Inspections are scheduled at the stages that matter most for your product.',
    whatWeDo: [
      'Monitor production milestones and material arrivals',
      'Perform in-process and pre-shipment inspections',
      'Report findings with photos and corrective actions',
    ],
  },
  {
    icon: Ship,
    title: 'Ship & Deliver',
    description:
      'We help coordinate freight booking, export documentation, and customs paperwork. Our goal is to get your goods from the factory floor to your warehouse as smoothly as possible.',
    whatWeDo: [
      'Compare freight options and book shipments',
      'Assist with packing, labeling, and documentation',
      'Track delivery and support customs clearance',
    ],
  },
  {
    icon: Headphones,
    title: 'Ongoing Account Support',
    description:
      'Sourcing is rarely a one-time event. We stay available for repeat orders, supplier relationship management, and continuous improvement of quality and lead times.',
    whatWeDo: [
      'Manage repeat orders and supplier performance',
      'Address quality issues and implement improvements',
      'Scale sourcing as your product line grows',
    ],
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            How It Works
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            A transparent, step-by-step process designed to help you source from China with confidence.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative space-y-12">
            <div className="absolute left-8 top-0 bottom-0 hidden w-0.5 bg-slate-200 md:block" />

            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.title} className="relative md:pl-24">
                  <div className="hidden md:flex absolute left-0 top-0 h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-md">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
                    <div className="flex items-center gap-4 md:hidden">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-sm font-bold text-accent">Step {index + 1}</span>
                    </div>
                    <span className="hidden text-sm font-bold text-accent md:block">
                      Step {index + 1}
                    </span>
                    <h2 className="mt-2 text-2xl font-bold text-slate-900">{step.title}</h2>
                    <p className="mt-3 text-slate-600 leading-relaxed">{step.description}</p>
                    <div className="mt-6">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
                        What we do
                      </h4>
                      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                        {step.whatWeDo.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to Start Sourcing?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Send us your product requirements and we will reply with a tailored sourcing plan.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-white">
            <Link to="/contact">
              Request a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
