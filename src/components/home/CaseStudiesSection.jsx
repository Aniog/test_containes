import { Star, Quote } from 'lucide-react'
import SectionHeader from '../shared/SectionHeader'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    id: 'cs1',
    client: 'HomeGoods Retailer',
    country: 'United States',
    flag: '🇺🇸',
    product: 'Bamboo furniture collection',
    challenge: 'Needed 15 verified furniture suppliers with OEM capability and CE certification.',
    result: 'Sourced 3 qualified factories, reduced unit cost by 22%, delivered on time for Q4 launch.',
    savings: '22% cost reduction',
    rating: 5,
  },
  {
    id: 'cs2',
    client: 'Electronics Distributor',
    country: 'Germany',
    flag: '🇩🇪',
    product: 'LED lighting products',
    challenge: 'Previous supplier failed quality checks. Needed urgent replacement with CE/RoHS compliance.',
    result: 'Found 2 compliant factories within 10 days, passed all EU certifications, no shipment delays.',
    savings: 'Zero compliance issues',
    rating: 5,
  },
  {
    id: 'cs3',
    client: 'Fashion Brand',
    country: 'Australia',
    flag: '🇦🇺',
    product: 'Private label sportswear',
    challenge: 'First-time importer needing end-to-end support from design to delivery.',
    result: 'Managed full OEM process, 3 rounds of samples, delivered 2,000 units within 60 days.',
    savings: 'First import, zero issues',
    rating: 5,
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Client Results"
          title="Case Studies"
          subtitle="Real results from real clients. Here's how we've helped businesses source successfully from China."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((cs) => (
            <div key={cs.id} className="bg-white rounded-xl border border-[#E2E8F0] p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{cs.flag}</span>
                <div>
                  <div className="font-semibold text-[#1A1A2E] text-sm">{cs.client}</div>
                  <div className="text-[#718096] text-xs">{cs.country}</div>
                </div>
              </div>

              <div className="inline-block bg-[#EBF2FA] text-[#1A3C6E] text-xs font-medium px-3 py-1 rounded-full mb-4">
                {cs.product}
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <div className="text-xs font-semibold text-[#718096] uppercase tracking-wider mb-1">Challenge</div>
                  <p className="text-[#4A5568] text-sm">{cs.challenge}</p>
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#718096] uppercase tracking-wider mb-1">Result</div>
                  <p className="text-[#4A5568] text-sm">{cs.result}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#E2E8F0]">
                <div className="flex gap-0.5">
                  {Array.from({ length: cs.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4A017] text-[#D4A017]" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-[#C0392B]">{cs.savings}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-[#1A3C6E] font-semibold hover:text-[#C0392B] transition-colors"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
