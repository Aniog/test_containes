import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingDown, TrendingUp, Clock, DollarSign, Package, CheckCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const cases = [
  {
    client: 'US Kitchenware Brand',
    location: 'California, USA',
    industry: 'Home & Kitchen',
    challenge: 'The client was experiencing an 8% defect rate on kitchenware imports, resulting in costly returns, chargebacks, and damaged retailer relationships. Their previous sourcing process relied on online directories with no on-the-ground verification.',
    approach: [
      'Audited 15 potential suppliers in Guangdong and Zhejiang',
      'Selected 3 factories with strong quality systems and relevant certifications',
      'Implemented 3-stage QC: incoming material check, in-process inspection, and pre-shipment inspection',
      'Established clear acceptance criteria and AQL standards with each factory',
    ],
    results: [
      { metric: 'Defect rate reduced to', value: '< 1%', icon: TrendingDown },
      { metric: 'Annual savings on returns', value: '$180,000', icon: DollarSign },
      { metric: 'Retailer complaints eliminated', value: '100%', icon: CheckCircle },
    ],
    testimonial: 'SSourcing China transformed our supply chain. Their QC process caught issues we never even knew existed. Our retailer relationships have never been stronger.',
    contactName: 'Operations Director',
    duration: 'Ongoing since 2019',
    query: 'kitchenware quality control manufacturing',
  },
  {
    client: 'European Electronics Distributor',
    location: 'Germany',
    industry: 'Electronics',
    challenge: 'Long and unpredictable lead times (90+ days) were causing stockouts during peak seasons. The client used a single supplier with no backup, making them vulnerable to delays.',
    approach: [
      'Mapped the full supplier base in Shenzhen and Dongguan',
      'Qualified 2 primary and 2 backup suppliers for each key product line',
      'Negotiated buffer stock agreements and faster production scheduling',
      'Implemented weekly production tracking and milestone-based reporting',
    ],
    results: [
      { metric: 'Average lead time reduced to', value: '55 days', icon: Clock },
      { metric: 'Stockout incidents reduced', value: '95%', icon: TrendingDown },
      { metric: 'Supplier diversification achieved', value: '4 factories', icon: Package },
    ],
    testimonial: 'Having backup suppliers and real-time production visibility changed everything. We now plan inventory with confidence instead of guessing.',
    contactName: 'Supply Chain Manager',
    duration: 'Ongoing since 2020',
    query: 'electronics manufacturing production line',
  },
  {
    client: 'Australian Retail Chain',
    location: 'Sydney, Australia',
    industry: 'Retail / Private Label',
    challenge: 'The client needed to launch a 45-SKU private label product line within 8 months but had no existing supplier relationships or product development experience in China.',
    approach: [
      'Developed detailed product specifications and packaging requirements',
      'Coordinated prototyping and sampling across 6 product categories',
      'Managed mold development, packaging design, and labeling compliance',
      'Conducted pre-production approvals and staged rollouts by category',
    ],
    results: [
      { metric: 'SKUs launched on schedule', value: '45', icon: Package },
      { metric: 'Time to market', value: '8 months', icon: Clock },
      { metric: 'First-year sales exceeded target by', value: '30%', icon: TrendingUp },
    ],
    testimonial: 'We went from zero to a full product line in under a year. SSourcing China handled every detail and kept us informed at every step.',
    contactName: 'Private Label Director',
    duration: 'Completed 2023, ongoing for new SKUs',
    query: 'retail product development private label',
  },
  {
    client: 'UK Outdoor Furniture Brand',
    location: 'London, UK',
    industry: 'Home & Garden',
    challenge: 'The brand needed to switch from a high-cost European supplier to China while maintaining the same quality standards and design aesthetics.',
    approach: [
      'Sourced specialized outdoor furniture factories in Foshan and Ningbo',
      'Conducted side-by-side quality benchmarking against European samples',
      'Managed powder coating and fabric sourcing to match brand specifications',
      'Implemented container loading optimization to reduce freight costs',
    ],
    results: [
      { metric: 'Cost per unit reduced by', value: '42%', icon: TrendingDown },
      { metric: 'Quality score maintained at', value: '98%', icon: CheckCircle },
      { metric: 'Freight cost per container reduced by', value: '18%', icon: DollarSign },
    ],
    testimonial: 'We were skeptical about moving production to China, but the quality actually improved while our costs dropped significantly.',
    contactName: 'Founder & CEO',
    duration: 'Ongoing since 2021',
    query: 'outdoor furniture manufacturing quality',
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
      <section className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Results</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-6">
              Client Case Studies
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Real results from real clients. See how we have helped businesses across industries source smarter, reduce costs, and improve quality from China.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-secondary text-white font-semibold rounded-md hover:bg-secondary-hover transition-colors"
            >
              Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {cases.map((cs, idx) => (
              <article key={cs.client} className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  {/* Image */}
                  <div
                    className="aspect-[4/3] lg:aspect-auto bg-slate-200"
                    data-strk-bg-id={`case-bg-${idx}-ssourcing`}
                    data-strk-bg={`[case-title-${idx}]`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="800"
                  />
                  <span id={`case-title-${idx}`} className="sr-only">{cs.query}</span>

                  {/* Content */}
                  <div className="p-8 lg:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        {cs.industry}
                      </span>
                      <span className="text-slate-400 text-xs">{cs.duration}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">{cs.client}</h2>
                    <p className="text-slate-400 text-sm mb-6">{cs.location}</p>

                    <div className="space-y-5">
                      <div>
                        <h3 className="text-sm font-semibold text-slate-700 mb-1">The Challenge</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{cs.challenge}</p>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-slate-700 mb-2">Our Approach</h3>
                        <ul className="space-y-1.5">
                          {cs.approach.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-slate-500">
                              <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-primary px-8 lg:px-10 py-6">
                  <div className="grid sm:grid-cols-3 gap-6">
                    {cs.results.map((result) => (
                      <div key={result.metric} className="text-center">
                        <result.icon className="w-6 h-6 text-secondary mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">{result.value}</div>
                        <div className="text-primary-light text-xs mt-1">{result.metric}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="px-8 lg:px-10 py-6 bg-white border-t border-slate-100">
                  <blockquote className="text-slate-600 italic leading-relaxed mb-3">
                    &ldquo;{cs.testimonial}&rdquo;
                  </blockquote>
                  <cite className="text-slate-500 text-sm not-italic font-semibold">
                    — {cs.contactName}, {cs.client}
                  </cite>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Want results like these?
          </h2>
          <p className="text-slate-500 text-lg mb-8">
            Every project starts with a free consultation. Tell us about your sourcing challenges and we will outline a plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-secondary text-white text-base font-semibold rounded-md hover:bg-secondary-hover transition-colors"
          >
            Get a Free Quote <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}