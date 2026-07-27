import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'

const caseStudies = [
  {
    id: 'case-led',
    industry: 'Consumer Electronics',
    title: 'LED Lighting Sourcing for European Distributor',
    titleId: 'cs-led-title',
    descId: 'cs-led-desc',
    imgId: 'cs-led-img-a1b2c3d4',
    challenge: 'A German lighting distributor needed a reliable LED panel manufacturer with CE certification and consistent color temperature across batches.',
    solution: 'We identified 5 manufacturers in Zhongshan, conducted factory audits, managed sampling for 3 months, and set up ongoing QC protocols.',
    results: ['22% cost reduction vs. previous supplier', '99.5% quality pass rate', 'Consistent color temperature (±50K)', 'On-time delivery for 12 consecutive orders'],
  },
  {
    id: 'case-furniture',
    industry: 'Home & Garden',
    title: 'Custom Furniture Line for US Retailer',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-e5f6g7h8',
    challenge: 'A US-based home goods retailer wanted to launch a private-label furniture line but had no experience sourcing from China.',
    solution: 'We sourced manufacturers in Foshan, managed the entire development process from design to production, and coordinated container shipping.',
    results: ['3,000 units delivered on time', '99.2% pass rate at final QC', '35% savings vs. domestic manufacturing', 'Successful launch in 47 retail locations'],
  },
  {
    id: 'case-skincare',
    industry: 'Health & Beauty',
    title: 'Private Label Skincare for Australian Brand',
    titleId: 'cs-skincare-title',
    descId: 'cs-skincare-desc',
    imgId: 'cs-skincare-img-i9j0k1l2',
    challenge: 'An Australian beauty brand needed an FDA-compliant manufacturer for a new skincare line with custom formulations.',
    solution: 'We found GMP-certified cosmetics manufacturers in Guangzhou, managed formulation development, and ensured all regulatory documentation was in order.',
    results: ['FDA and TGA compliant formulations', 'Product launched in 8 weeks', '40% lower production cost', 'Ongoing partnership for 6 product lines'],
  },
  {
    id: 'case-auto',
    industry: 'Automotive',
    title: 'Auto Parts Sourcing for UK Aftermarket Supplier',
    titleId: 'cs-auto-title',
    descId: 'cs-auto-desc',
    imgId: 'cs-auto-img-m3n4o5p6',
    challenge: 'A UK automotive parts distributor needed to diversify their supply chain away from a single unreliable supplier.',
    solution: 'We identified and audited 4 alternative manufacturers, ran comparative quality tests, and set up a dual-sourcing strategy.',
    results: ['Supply chain risk reduced by 60%', 'Lead time shortened from 8 to 5 weeks', '15% cost improvement', 'Zero stockouts in 18 months'],
  },
]

const CaseStudies = () => {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <div ref={pageRef}>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="cs-page-title" className="text-3xl md:text-5xl font-bold text-white mb-4">Case Studies</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Real projects, real results. See how we have helped businesses source successfully from China.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs, idx) => {
              const isReversed = idx % 2 !== 0
              return (
                <div key={cs.id} className={`grid lg:grid-cols-2 gap-10 items-center`}>
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <div className="aspect-[16/9] rounded-xl overflow-hidden">
                      <img
                        data-strk-img-id={cs.imgId}
                        data-strk-img={`[${cs.descId}] [${cs.titleId}] [cs-page-title]`}
                        data-strk-img-ratio="16x9"
                        data-strk-img-width="700"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={cs.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className={isReversed ? 'lg:order-1' : ''}>
                    <span className="inline-block text-xs font-semibold text-brand-blue bg-blue-50 px-3 py-1 rounded-full mb-3">
                      {cs.industry}
                    </span>
                    <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold text-brand-dark mb-4">{cs.title}</h2>
                    <div className="space-y-3 mb-5">
                      <div>
                        <span className="text-sm font-semibold text-brand-dark">Challenge:</span>
                        <p id={cs.descId} className="text-sm text-brand-muted mt-1">{cs.challenge}</p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-brand-dark">Our Solution:</span>
                        <p className="text-sm text-brand-muted mt-1">{cs.solution}</p>
                      </div>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-brand-dark mb-2 block">Results:</span>
                      <ul className="space-y-1.5">
                        {cs.results.map((result, rIdx) => (
                          <li key={rIdx} className="flex items-center gap-2 text-sm text-brand-dark">
                            <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                            {result}
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

      <section className="py-16 md:py-20 bg-brand-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Want Similar Results?</h2>
          <p className="text-brand-muted mb-8 text-lg">Tell us about your sourcing needs and we will create a plan tailored to your business.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-orange text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-orange-600 transition"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
