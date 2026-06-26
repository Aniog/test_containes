import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'

const caseStudies = [
  {
    id: 'electronics-usa',
    title: 'Consumer Electronics for US E-commerce Brand',
    client: 'US-based Amazon Seller',
    challenge: 'Needed reliable suppliers for Bluetooth speakers with consistent quality and FCC certification.',
    result: 'Sourced 3 verified factories, achieved defect rate below 1.5%, and reduced unit cost by 22%.',
    tag: 'Electronics',
  },
  {
    id: 'furniture-europe',
    title: 'Custom Furniture for European Retailer',
    client: 'Furniture Chain in Germany',
    challenge: 'Required custom-designed furniture meeting EU safety standards with large MOQs.',
    result: 'Found compliant factories, passed all EN standards testing, and delivered 40-foot containers on schedule.',
    tag: 'Home & Garden',
  },
  {
    id: 'apparel-australia',
    title: 'Sportswear Collection for Australian Brand',
    client: 'Activewear Brand in Sydney',
    challenge: 'Needed performance fabrics with moisture-wicking properties and ethical manufacturing.',
    result: 'Connected with BSCI-audited factories, sourced certified fabrics, and managed full production from sample to shipment.',
    tag: 'Apparel',
  },
]

export default function CaseStudiesPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Case Studies"
          title="Real Results from Real Projects"
          description="See how we have helped global buyers overcome sourcing challenges and achieve their goals."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="bg-white rounded-xl border border-border-gray p-6 md:p-8 hover:shadow-lg transition-all duration-300"
            >
              <span className="inline-block bg-sky-blue/10 text-sky-blue text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {cs.tag}
              </span>
              <h3 className="text-lg font-bold text-navy mb-2">{cs.title}</h3>
              <p className="text-muted-text text-xs mb-4">Client: {cs.client}</p>
              <div className="mb-4">
                <p className="text-sm font-semibold text-body-text mb-1">Challenge</p>
                <p className="text-muted-text text-sm leading-relaxed">{cs.challenge}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-trust-green mb-1">Result</p>
                <p className="text-muted-text text-sm leading-relaxed">{cs.result}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sky-blue font-semibold hover:text-sky-blue-dark transition-colors"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
