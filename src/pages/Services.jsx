import { CheckCircle2 } from 'lucide-react'
import CallToActionBanner from '@/components/CallToActionBanner'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'

const serviceDetails = [
  {
    title: 'Supplier sourcing',
    description:
      'We search for suitable manufacturers based on your product type, target pricing, quality requirements, and expected order size.',
    points: ['Supplier shortlist', 'Commercial comparison', 'Initial risk review'],
  },
  {
    title: 'Supplier verification',
    description:
      'We help verify whether the supplier is legitimate, relevant to your product, and ready for meaningful business discussions.',
    points: ['Registration checks', 'Business scope review', 'Basic capability screening'],
  },
  {
    title: 'Factory audit support',
    description:
      'For projects that need deeper due diligence, we help review factory conditions, management systems, and operational fit.',
    points: ['Factory condition review', 'Equipment overview', 'Process visibility'],
  },
  {
    title: 'Quality inspection',
    description:
      'Inspection support helps buyers identify issues before goods move too far into production or before shipment is released.',
    points: ['Pre-production checks', 'In-line inspection', 'Pre-shipment inspection'],
  },
  {
    title: 'Production follow-up',
    description:
      'We follow sample approval, packaging status, production timing, and supplier communication so decisions are made earlier.',
    points: ['Progress follow-up', 'Delay visibility', 'Packaging confirmation'],
  },
  {
    title: 'Shipping coordination',
    description:
      'We help align suppliers, packaging readiness, and handover timing with your shipment plan or nominated logistics partner.',
    points: ['Readiness coordination', 'Packing alignment', 'Export handover support'],
  },
]

const Services = () => {
  return (
    <main>
      <PageHero
        slug="services"
        eyebrow="Services"
        title="China sourcing services designed for practical buying decisions"
        description="Choose support for the specific parts of the sourcing process where local follow-up, verification, and quality visibility matter most."
        secondaryTo="/contact"
        secondaryLabel="Discuss your project"
        imageAlt="China sourcing, factory verification, and quality inspection services"
        imageCaption="Factory visits, supplier screening, quality checks, and shipment coordination based on your sourcing stage."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Scope of support"
            title="Select the sourcing support you need"
            description="Some buyers need full sourcing support. Others only need supplier verification, inspection, or shipment coordination at a specific stage."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {serviceDetails.map((service) => (
              <article key={service.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-slate-900">{service.title}</h2>
                <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>
                <div className="mt-6 grid gap-3">
                  {service.points.map((point) => (
                    <div key={point} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-blue-700" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            'Useful for importers, wholesalers, retailers, and brand teams buying from China.',
            'Support can begin at research stage, sampling stage, supplier comparison stage, or production stage.',
            'Communication stays focused on practical facts, risks, and next decisions rather than exaggerated claims.',
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-base leading-7 text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </section>

      <CallToActionBanner />
    </main>
  )
}

export default Services
