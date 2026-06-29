import React from 'react'
import { Link } from 'react-router-dom'
import { Search, Factory, ClipboardCheck, Ship, FileCheck, Headphones } from 'lucide-react'

const services = [
  {
    title: 'Supplier Sourcing',
    description: 'We identify and vet reliable manufacturers in China that match your product requirements, budget, and quality standards. Our network covers thousands of verified factories across multiple industries.',
    features: ['Supplier database matching', 'Price and MOQ negotiation', 'Sample coordination', 'Supplier comparison reports'],
    icon: Search,
  },
  {
    title: 'Factory Verification',
    description: 'Before you place a large order, we conduct on-site audits to confirm factory legitimacy, capacity, certifications, and business registration.',
    features: ['Business license verification', 'Factory capacity assessment', 'Quality management review', 'Reference checks'],
    icon: Factory,
  },
  {
    title: 'Quality Inspection',
    description: 'We perform inspections at key production stages to catch defects early and reduce the risk of costly returns or delays.',
    features: ['Pre-production inspection', 'During-production inspection', 'Pre-shipment inspection', 'Detailed photo/video reports'],
    icon: ClipboardCheck,
  },
  {
    title: 'Shipping Coordination',
    description: 'We manage the logistics chain from the factory to your door, including freight forwarding, customs documentation, and last-mile delivery.',
    features: ['Freight forwarding', 'Customs documentation', 'Insurance coordination', 'Shipment tracking'],
    icon: Ship,
  },
  {
    title: 'Product Compliance',
    description: 'We help ensure your products meet relevant safety, environmental, and regulatory standards for your target market.',
    features: ['Regulatory requirement review', 'Certificate verification', 'Labeling and packaging checks', 'Compliance documentation'],
    icon: FileCheck,
  },
  {
    title: 'Ongoing Account Management',
    description: 'For repeat buyers, we provide dedicated account management to maintain supplier relationships and streamline reorders.',
    features: ['Dedicated sourcing specialist', 'Priority communication', 'Reorder coordination', 'Performance tracking'],
    icon: Headphones,
  },
]

export default function Services() {
  return (
    <div className="bg-white">
      <section className="bg-slate-900 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">Comprehensive sourcing support designed to reduce risk, save time, and improve your bottom line.</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-900">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact">
              <button className="inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-slate-800">
                Discuss your project
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
