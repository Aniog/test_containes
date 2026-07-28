import { Search, FileCheck, ClipboardCheck, Package, Ship, Handshake } from 'lucide-react'
import SectionTitle from '../shared/SectionTitle'

const steps = [
  {
    step: '01',
    icon: Search,
    title: 'Tell Us What You Need',
    description: 'Share your product requirements, target price, quantity, and any specific standards or certifications needed.',
  },
  {
    step: '02',
    icon: FileCheck,
    title: 'We Find & Shortlist Suppliers',
    description: 'Our team researches and shortlists 3-5 qualified suppliers that match your criteria within 3-5 business days.',
  },
  {
    step: '03',
    icon: ClipboardCheck,
    title: 'Factory Verification',
    description: 'We conduct on-site audits or video factory tours to verify capabilities, certifications, and working conditions.',
  },
  {
    step: '04',
    icon: Package,
    title: 'Sample & Price Negotiation',
    description: 'We collect samples, negotiate pricing and payment terms, and help you compare options before placing an order.',
  },
  {
    step: '05',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Our inspectors perform in-process and pre-shipment inspections based on AQL standards and your checklist.',
  },
  {
    step: '06',
    icon: Ship,
    title: 'Shipping & Delivery',
    description: 'We coordinate freight forwarding, handle export documentation, and track shipments until they reach your warehouse.',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="How Our Sourcing Process Works"
          subtitle="A transparent, step-by-step approach that keeps you informed and in control throughout the entire sourcing journey."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((item) => (
            <div key={item.step} className="relative p-6 md:p-8 rounded-xl bg-white border border-border hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="text-3xl font-extrabold text-text-muted/30">{item.step}</span>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
