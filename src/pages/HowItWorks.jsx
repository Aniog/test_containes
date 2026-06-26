import SectionHeader from '@/components/SectionHeader'
import { MessageSquare, Search, Building2, ClipboardCheck, Ship, Package, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const steps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Tell Us Your Needs',
    desc: 'Share your product specifications, target price, estimated order quantity, required certifications, and any special requirements. The more detail, the better we can match you.',
    details: ['Product drawings or reference samples', 'Target FOB price range', 'Required standards (CE, FDA, ISO, etc.)', 'Desired delivery timeline'],
  },
  {
    step: '02',
    icon: Search,
    title: 'Supplier Research',
    desc: 'We leverage our supplier database and on-the-ground network to identify 3-5 qualified manufacturers. Each candidate is pre-screened for capability, capacity, and export experience.',
    details: ['Database cross-referencing', 'Industry trade show contacts', 'Online presence and review analysis', 'Initial capability questionnaires'],
  },
  {
    step: '03',
    icon: Building2,
    title: 'Factory Verification',
    desc: 'Our auditors visit shortlisted factories in person. We verify business licenses, inspect production lines, review certifications, and assess working conditions.',
    details: ['Business license verification', 'Production line walkthrough', 'Equipment and capacity audit', 'Social compliance checks'],
  },
  {
    step: '04',
    icon: ClipboardCheck,
    title: 'Quality Control',
    desc: 'We implement a multi-stage QC process: pre-production samples, in-line checks during manufacturing, and a comprehensive pre-shipment inspection before goods leave the factory.',
    details: ['Pre-production sample approval', 'In-line inspection at 20%/50%/80%', 'Pre-shipment AQL inspection', 'Packaging and labeling check'],
  },
  {
    step: '05',
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'Once approved, we coordinate freight booking, prepare export documentation, and manage customs clearance. You choose the Incoterm that suits your needs.',
    details: ['Freight forwarder coordination', 'Export license and documentation', 'Customs declaration support', 'Delivery tracking to your door'],
  },
  {
    step: '06',
    icon: Package,
    title: 'Delivery & Ongoing Support',
    desc: 'Your goods arrive on schedule. We remain available for reorders, supplier relationship management, and resolving any post-delivery issues that may arise.',
    details: ['Delivery confirmation and photos', 'Reorder coordination', 'Supplier performance reviews', 'Issue resolution and mediation'],
  },
]

export default function HowItWorks() {
  return (
    <div>
      <div className="bg-bg-alt py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            caption="Process"
            title="How It Works"
            subtitle="A transparent, step-by-step process designed to minimize risk and deliver consistent results."
          />
        </div>
      </div>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((s, idx) => (
              <div key={idx} className="flex gap-5 md:gap-8">
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold shrink-0">
                    {s.step}
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-3" />
                  )}
                </div>
                <div className="flex-1 pb-2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="md:hidden w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      {s.step}
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <s.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary">{s.title}</h3>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">{s.desc}</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {s.details.map((d, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-text-muted">
                        <span className="w-1 h-1 rounded-full bg-secondary shrink-0" />
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-bg-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            Ready to start your sourcing project?
          </h2>
          <p className="text-text-secondary mb-8 leading-relaxed">
            Most clients receive their first supplier shortlist within 5-10 business days. Get your free quote today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-secondary text-white text-base font-semibold hover:bg-secondary-hover transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
