import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CheckCircle, TrendingUp, Clock, DollarSign } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionCTA from '@/components/shared/SectionCTA'

const caseStudies = [
  {
    id: 'case-1',
    title: 'Custom Furniture for European Retailer',
    client: 'Nordic Home Co.',
    country: 'Sweden',
    industry: 'Furniture',
    challenge: 'Needed a reliable factory for custom solid wood furniture with specific EU compliance requirements. Previous supplier had quality inconsistencies.',
    solution: 'We audited 8 factories, shortlisted 3, and managed sample development over 6 weeks. Implemented strict QC protocols with pre-shipment inspection.',
    results: [
      { icon: DollarSign, text: '35% cost reduction vs. previous supplier' },
      { icon: CheckCircle, text: '99.5% quality pass rate on first order' },
      { icon: Clock, text: 'On-time delivery for 4 consecutive orders' },
      { icon: TrendingUp, text: 'Scaled from 1 container to 6 per quarter' },
    ],
    imgId: 'case-page-1-a1b2c3',
    titleId: 'case-page-1-title',
    descId: 'case-page-1-desc',
  },
  {
    id: 'case-2',
    title: 'Consumer Electronics for US Brand',
    client: 'TechGear Inc.',
    country: 'United States',
    industry: 'Electronics',
    challenge: 'Launching a new Bluetooth speaker line with custom tooling. Needed a factory with audio expertise and FCC/CE certification capability.',
    solution: 'Identified specialized audio electronics factories in Shenzhen. Managed tooling development, 3 sample iterations, and full production monitoring.',
    results: [
      { icon: CheckCircle, text: '50,000 units delivered with 99.2% pass rate' },
      { icon: Clock, text: 'Product launched 2 weeks ahead of schedule' },
      { icon: DollarSign, text: 'Tooling cost 40% below initial quotes' },
      { icon: TrendingUp, text: 'Ongoing partnership for 3 product lines' },
    ],
    imgId: 'case-page-2-d4e5f6',
    titleId: 'case-page-2-title',
    descId: 'case-page-2-desc',
  },
  {
    id: 'case-3',
    title: 'Private Label Apparel for Australian Market',
    client: 'Outback Wear',
    country: 'Australia',
    industry: 'Textiles',
    challenge: 'Startup brand needed to launch 3 product lines (activewear, casual, accessories) with limited budget and tight timeline.',
    solution: 'Sourced from 2 complementary factories. Managed fabric selection, pattern development, size grading, and labeling compliance for AU market.',
    results: [
      { icon: Clock, text: '3 product lines launched in 4 months' },
      { icon: DollarSign, text: 'Stayed within startup budget constraints' },
      { icon: CheckCircle, text: 'All items passed Australian labeling requirements' },
      { icon: TrendingUp, text: 'Reordered within 60 days of launch' },
    ],
    imgId: 'case-page-3-g7h8i9',
    titleId: 'case-page-3-title',
    descId: 'case-page-3-desc',
  },
  {
    id: 'case-4',
    title: 'Industrial Packaging for Middle East Distributor',
    client: 'Gulf Pack Trading',
    country: 'UAE',
    industry: 'Packaging',
    challenge: 'Required food-grade packaging materials with specific printing and size requirements. Previous China supplier had inconsistent print quality.',
    solution: 'Audited packaging factories with food-grade certifications. Implemented color matching protocols and in-line QC during printing runs.',
    results: [
      { icon: CheckCircle, text: 'Zero print quality complaints since switching' },
      { icon: DollarSign, text: '22% savings on packaging costs' },
      { icon: Clock, text: 'Reduced lead time from 45 to 30 days' },
      { icon: TrendingUp, text: 'Expanded to 5 additional SKUs' },
    ],
    imgId: 'case-page-4-j0k1l2',
    titleId: 'case-page-4-title',
    descId: 'case-page-4-desc',
  },
]

const CaseStudies = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <PageHero
        title="Case Studies"
        subtitle="Real sourcing projects we have managed for international buyers. See how we deliver results across different industries."
      />

      <section ref={containerRef} className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-20">
            {caseStudies.map((cs) => (
              <article key={cs.id} className="bg-white border border-neutral-200 rounded-2xl overflow-hidden">
                <div className="aspect-[21/9] overflow-hidden">
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="900"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-1 rounded">{cs.industry}</span>
                    <span className="text-xs font-medium bg-neutral-100 text-neutral-600 px-2.5 py-1 rounded">{cs.client} — {cs.country}</span>
                  </div>

                  <h2 id={cs.titleId} className="text-2xl md:text-3xl font-bold text-neutral-800 mb-6">{cs.title}</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-2">Challenge</h4>
                      <p id={cs.descId} className="text-neutral-600 text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-2">Our Solution</h4>
                      <p className="text-neutral-600 text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>

                  <div className="bg-neutral-50 rounded-xl p-6">
                    <h4 className="font-semibold text-neutral-800 mb-4">Results</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {cs.results.map((result, idx) => {
                        const Icon = result.icon
                        return (
                          <div key={idx} className="flex items-start gap-2">
                            <Icon className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-neutral-700">{result.text}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA
        title="Want Similar Results?"
        subtitle="Tell us about your sourcing needs and let us show you what we can do."
      />
    </>
  )
}

export default CaseStudies
