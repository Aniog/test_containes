import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Quote } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const caseStudies = [
  {
    id: 1,
    category: 'Electronics',
    title: 'Saving 30% on Consumer Electronics Sourcing',
    subtitle: 'An Australian retailer diversifies their supply chain and reduces costs.',
    challenge: 'An established Australian electronics retailer relied on a single supplier for Bluetooth speakers and accessories. When lead times began slipping and prices rose, they needed to diversify without compromising quality.',
    solution: 'We conducted market research across Shenzhen and Dongguan manufacturing hubs, identified 8 potential suppliers, and shortlisted 4 after initial screening. Our team performed on-site audits of each factory, evaluated production samples, and negotiated pricing and payment terms.',
    result: 'Three new suppliers were onboarded within 10 weeks. The client reduced product costs by 30%, cut lead times by 2 weeks, and now has a diversified supply chain with backup options.',
    stat1: '30%',
    stat1Label: 'Cost Reduction',
    stat2: '10',
    stat2Label: 'Weeks to Onboarding',
    stat3: '3',
    stat3Label: 'New Suppliers',
  },
  {
    id: 2,
    category: 'Textiles',
    title: 'Scaling Apparel Production for a US Brand',
    subtitle: 'From small batch sampling to full production runs.',
    challenge: 'A US-based sustainable fashion brand needed to scale from small-batch production (200 units per style) to full production runs (5,000+ units). They needed factories capable of handling larger volumes while maintaining ethical manufacturing standards.',
    solution: 'We identified textile manufacturers in Jiangsu and Zhejiang provinces with the capacity for mid-to-large production runs. We audited 6 factories focusing on certifications, labor conditions, and quality control processes. After sample approval, we managed production monitoring across 12 consecutive runs.',
    result: 'The brand successfully scaled to full production with consistent quality across all runs. On-time delivery rate was 98%, and the client continues to use the same supplier network for ongoing production.',
    stat1: '98%',
    stat1Label: 'On-Time Delivery',
    stat2: '12',
    stat2Label: 'Production Runs',
    stat3: '5K+',
    stat3Label: 'Units Per Run',
  },
  {
    id: 3,
    category: 'Industrial Equipment',
    title: 'Verifying a Critical Casting Supplier',
    subtitle: 'On-the-ground audit prevents a costly supply chain mistake.',
    challenge: 'A German industrial equipment manufacturer identified a Chinese casting supplier through an online B2B platform. Before placing a large order for precision components, they needed independent verification of the factory\'s capabilities.',
    solution: 'Our team visited the factory in Hebei province unannounced. We discovered that the actual production capacity was significantly lower than claimed, and key quality control processes were not in place. We documented all findings with photos and detailed reports, then helped the client identify alternative suppliers.',
    result: 'The client avoided a potentially costly relationship with an underqualified supplier. We identified and vetted two alternative factories that met their specifications. The chosen supplier passed subsequent audits and delivered components that met all quality requirements.',
    stat1: 'Capacity',
    stat1Label: 'Claimed vs Actual gap identified',
    stat2: '2',
    stat2Label: 'Alternative Suppliers Found',
    stat3: '€150K',
    stat3Label: 'Estimated Risk Avoided',
  },
  {
    id: 4,
    category: 'Consumer Goods',
    title: 'End-to-End Sourcing for a Kitchen Product Line',
    subtitle: 'Full-service sourcing for a complete product catalog.',
    challenge: 'A UK startup needed to source an entire line of kitchen products — utensils, storage containers, cutting boards, and small appliances — from multiple factories in China. With no prior sourcing experience, they needed full-service support.',
    solution: 'We managed the entire sourcing process: product research, supplier identification across different categories, factory audits, sample coordination, price negotiation, production monitoring, quality inspections, and consolidated shipping.',
    result: 'The client launched their product line on schedule with all 15 SKUs sourced from 6 different factories. Consolidated shipping reduced freight costs by 25%. The client has since expanded to 30+ SKUs through the same supplier network.',
    stat1: '15',
    stat1Label: 'SKUs Sourced',
    stat2: '6',
    stat2Label: 'Different Factories',
    stat3: '25%',
    stat3Label: 'Freight Savings',
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0F2B44] to-[#1B4A7A] text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">Case Studies</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Real examples of how we have helped international businesses source products from China successfully.
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {caseStudies.map((cs, i) => (
            <div key={cs.id} className={`lg:flex gap-12 items-start ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-5/12 mb-8 lg:mb-0">
                <div className="bg-light-bg rounded-lg overflow-hidden">
                  <img
                    data-strk-img-id={`case-study-detail-${cs.id}-${i}`}
                    data-strk-img={`[cs-desc-${cs.id}] [cs-title-${cs.id}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="lg:w-7/12">
                <span className="text-xs font-semibold text-primary-blue uppercase tracking-wider">{cs.category}</span>
                <h2 id={`cs-title-${cs.id}`} className="text-2xl lg:text-3xl font-bold text-dark-text mt-1 mb-2">{cs.title}</h2>
                <p id={`cs-desc-${cs.id}`} className="text-lg text-medium-text mb-6">{cs.subtitle}</p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-semibold text-dark-text text-sm uppercase tracking-wider mb-1">The Challenge</h3>
                    <p className="text-sm text-medium-text">{cs.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-text text-sm uppercase tracking-wider mb-1">Our Solution</h3>
                    <p className="text-sm text-medium-text">{cs.solution}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-text text-sm uppercase tracking-wider mb-1">The Results</h3>
                    <p className="text-sm text-medium-text">{cs.result}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-light-bg rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary-blue">{cs.stat1}</div>
                    <div className="text-xs text-medium-text mt-1">{cs.stat1Label}</div>
                  </div>
                  <div className="bg-light-bg rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary-blue">{cs.stat2}</div>
                    <div className="text-xs text-medium-text mt-1">{cs.stat2Label}</div>
                  </div>
                  <div className="bg-light-bg rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary-blue">{cs.stat3}</div>
                    <div className="text-xs text-medium-text mt-1">{cs.stat3Label}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-blue text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Let Us Help You Succeed</h2>
          <p className="text-lg text-blue-100 mb-8">
            Every sourcing project is different. Tell us about your needs and we will provide a free assessment.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-red text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-accent-red-hover transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}