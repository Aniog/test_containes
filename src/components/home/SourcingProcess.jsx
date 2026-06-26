import { Link } from 'react-router-dom'
import { MessageSquare, Search, ShieldCheck, ClipboardCheck, Ship, CheckCircle } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Tell Us What You Need',
    description: 'Share your product specifications, target price, quantity, and quality requirements. We respond within 24 hours.',
  },
  {
    icon: Search,
    step: '02',
    title: 'Supplier Sourcing & Screening',
    description: 'We search our network, evaluate potential suppliers, and provide you with 3-5 qualified options with quotes.',
  },
  {
    icon: ShieldCheck,
    step: '03',
    title: 'Factory Verification',
    description: 'We conduct on-site audits to verify the factory\'s capabilities, certifications, and production conditions.',
  },
  {
    icon: ClipboardCheck,
    step: '04',
    title: 'Sample & Quality Check',
    description: 'We arrange samples, review them against your specs, and conduct inspections at key production stages.',
  },
  {
    icon: Ship,
    step: '05',
    title: 'Production & Shipping',
    description: 'We follow up on production, perform final inspection, and coordinate shipping to your door.',
  },
  {
    icon: CheckCircle,
    step: '06',
    title: 'Delivery & After-Support',
    description: 'Goods delivered. We provide ongoing support for reorders, quality issues, and new product development.',
  },
]

export default function SourcingProcess() {
  return (
    <section className="py-16 md:py-24 bg-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="How It Works"
          title="Your Sourcing Process, Simplified"
          description="A clear, step-by-step process that takes you from inquiry to delivery with full transparency."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              <div className="bg-white rounded-xl p-6 md:p-8 border border-border-gray h-full">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl font-extrabold text-sky-blue/15">{item.step}</span>
                  <div className="w-10 h-10 bg-sky-blue/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-sky-blue" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-muted-text text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 bg-sky-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-sky-blue-dark transition-colors"
          >
            See Full Process Details
          </Link>
        </div>
      </div>
    </section>
  )
}
