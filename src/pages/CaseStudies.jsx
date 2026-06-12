import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle, Globe, TrendingDown, Clock, Award } from 'lucide-react'

const caseStudies = [
  {
    id: 'case-led',
    title: 'LED Lighting for European Distributor',
    client: 'Germany-based lighting distributor',
    challenge: 'Needed a CE-certified LED manufacturer with consistent color temperature across batches and competitive pricing for 50,000+ units.',
    solution: 'Audited 8 factories in Shenzhen, shortlisted 3, conducted sample testing over 2 weeks, and negotiated a 18% cost reduction from initial quotes.',
    results: ['22% cost reduction vs. previous supplier', 'Zero defects across 3 shipments', 'Lead time reduced from 45 to 30 days', 'Long-term supply agreement signed'],
    category: 'Electronics',
    imgId: 'cs-led-img-a1b2c3',
    icon: TrendingDown,
  },
  {
    id: 'case-apparel',
    title: 'Organic Cotton Sportswear for US Brand',
    client: 'US-based activewear startup',
    challenge: 'Required GOTS-certified organic cotton supplier with small MOQ (500 pcs) for initial launch, plus ability to scale to 10,000+ units.',
    solution: 'Identified 5 certified factories in Jiangsu province, arranged samples from 3, and negotiated flexible MOQ terms for the initial order.',
    results: ['Found GOTS-certified supplier', '500-piece initial MOQ accepted', 'Scaled to 8,000 units within 6 months', '30-day production turnaround'],
    category: 'Textiles',
    imgId: 'cs-apparel-img-d4e5f6',
    icon: Award,
  },
  {
    id: 'case-industrial',
    title: 'CNC Parts for Australian Manufacturer',
    client: 'Australian industrial equipment company',
    challenge: 'Needed precision CNC-machined aluminum parts with ±0.02mm tolerance, ISO 9001 certification, and reliable monthly supply.',
    solution: 'Verified 5 CNC workshops in Dongguan, conducted capability studies, and arranged trial production with full dimensional inspection.',
    results: ['ISO 9001 certified supplier secured', '99.7% dimensional accuracy achieved', 'Monthly supply contract established', '2-week lead time for repeat orders'],
    category: 'Industrial',
    imgId: 'cs-industrial-img-g7h8i9',
    icon: Clock,
  },
  {
    id: 'case-cosmetics',
    title: 'Private Label Skincare for UK Retailer',
    client: 'UK-based beauty e-commerce brand',
    challenge: 'Needed an OEM cosmetics manufacturer with GMP certification, custom formulation capability, and attractive packaging design.',
    solution: 'Sourced 4 GMP-certified cosmetics factories in Guangzhou, coordinated custom formulation development, and managed packaging design process.',
    results: ['GMP-certified manufacturer found', 'Custom formulation developed in 6 weeks', 'Full product line of 12 SKUs launched', 'Reorder within 3 months'],
    category: 'Health & Beauty',
    imgId: 'cs-cosmetics-img-j1k2l3',
    icon: Globe,
  },
]

const CaseStudies = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">Case Studies</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 tracking-tight">
              Real Results for Global Buyers
            </h1>
            <p className="text-slate-300 text-lg mt-4 leading-relaxed">
              See how we've helped businesses across industries source successfully from China with measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs, i) => (
              <div key={cs.id} className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
                <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="w-full lg:w-2/5">
                    <div className="aspect-[4/3] lg:h-full">
                      <img
                        data-strk-img-id={cs.imgId}
                        data-strk-img={`[${cs.id}-title] [${cs.id}-category]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={cs.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-3/5 p-6 md:p-10">
                    <span id={`${cs.id}-category`} className="text-xs font-medium text-blue-600 uppercase tracking-wide">{cs.category}</span>
                    <h2 id={`${cs.id}-title`} className="text-xl md:text-2xl font-bold text-slate-900 mt-2 mb-2">{cs.title}</h2>
                    <p className="text-sm text-slate-500 mb-4">{cs.client}</p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-1">Challenge</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-1">Our Solution</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">{cs.solution}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-2">Results</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {cs.results.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Your Success Story Starts Here
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Join hundreds of businesses that source from China with confidence through SSourcing China.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
