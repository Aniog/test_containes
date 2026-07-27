import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, TrendingUp, DollarSign, Clock, Package } from 'lucide-react'

const caseStudies = [
  {
    id: 'us-electronics',
    company: 'US Electronics Retailer',
    industry: 'Consumer Electronics',
    location: 'United States',
    challenge: 'The client was sourcing electronics from multiple brokers with inconsistent quality and high defect rates of 8-12%. They needed a reliable sourcing partner to consolidate suppliers and improve quality.',
    solution: 'We conducted supplier audits of 12 factories, consolidated to 3 primary suppliers, implemented strict QC protocols, and established a production monitoring system.',
    results: [
      { icon: DollarSign, metric: '32%', label: 'Cost Reduction' },
      { icon: TrendingUp, metric: '15%', label: 'Quality Improvement' },
      { icon: Package, metric: '2.1%', label: 'New Defect Rate' },
      { icon: Clock, metric: '20%', label: 'Faster Delivery' },
    ],
    quote: 'SSourcing China transformed our supply chain. Their factory audits alone saved us from two potentially costly supplier mistakes. We now have complete confidence in our sourcing process.',
    author: 'James M.',
    role: 'Procurement Director',
    imgId: 'case-us-electronics-1a2b3c',
    titleId: 'case-us-electronics-title',
  },
  {
    id: 'european-fashion',
    company: 'European Fashion Brand',
    industry: 'Apparel & Textiles',
    location: 'Germany',
    challenge: 'A growing fashion brand needed to scale production while maintaining strict quality and ethical manufacturing standards. Previous suppliers could not meet EU compliance requirements.',
    solution: 'We identified suppliers with SA8000 certification, conducted detailed factory audits, implemented in-line inspections, and helped secure CE and REACH compliance certifications.',
    results: [
      { icon: TrendingUp, metric: '99.2%', label: 'Quality Acceptance Rate' },
      { icon: Clock, metric: '25%', label: 'Shorter Lead Times' },
      { icon: DollarSign, metric: '18%', label: 'Cost Savings' },
      { icon: Package, metric: '100%', label: 'Compliance Rate' },
    ],
    quote: 'Their production monitoring service gives us complete visibility into our manufacturing process in China. We finally feel in control of our supply chain.',
    author: 'Sophie L.',
    role: 'Sourcing Manager',
    imgId: 'case-euro-fashion-4d5e6f',
    titleId: 'case-euro-fashion-title',
  },
  {
    id: 'australian-home',
    company: 'Australian Home Goods Chain',
    industry: 'Home & Garden',
    location: 'Australia',
    challenge: 'The client wanted to expand their product range from 5 to 45 product lines but lacked the sourcing infrastructure to manage multiple suppliers across different product categories in China.',
    solution: 'We built a dedicated supplier network across 6 product categories, created standardized quality protocols, and established a consolidated shipping system to reduce logistics costs.',
    results: [
      { icon: Package, metric: '45', label: 'Product Lines Managed' },
      { icon: DollarSign, metric: '28%', label: 'Logistics Cost Reduction' },
      { icon: TrendingUp, metric: '3x', label: 'Revenue Growth' },
      { icon: Clock, metric: '99%', label: 'On-Time Delivery' },
    ],
    quote: 'Working with SSourcing China allowed us to confidently expand our product range. Their supplier network and quality processes gave us the foundation to grow rapidly.',
    author: 'David K.',
    role: 'CEO',
    imgId: 'case-aus-home-7g8h9i',
    titleId: 'case-aus-home-title',
  },
  {
    id: 'canadian-auto',
    company: 'Canadian Auto Parts Distributor',
    industry: 'Automotive Parts',
    location: 'Canada',
    challenge: 'An auto parts distributor needed certified replacement parts suppliers that could meet strict automotive industry quality standards while offering competitive pricing.',
    solution: 'We identified IATF 16949 certified factories, conducted extensive quality audits, and implemented a multi-stage inspection process with zero-tolerance defect policies.',
    results: [
      { icon: TrendingUp, metric: '0%', label: 'Customer Returns' },
      { icon: DollarSign, metric: '40%', label: 'Cost Savings' },
      { icon: Package, metric: '200+', label: 'Parts SKUs Managed' },
      { icon: Clock, metric: '35%', label: 'Faster Turnaround' },
    ],
    quote: 'The quality standards SSourcing China maintains for automotive parts are exceptional. Zero returns across 200+ SKUs speaks for itself.',
    author: 'Michael T.',
    role: 'Operations Manager',
    imgId: 'case-can-auto-j1k2l3',
    titleId: 'case-can-auto-title',
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary-800 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Success Stories
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Case Studies
          </h1>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">
            Real results from real businesses. See how we have helped global buyers succeed
            with their China sourcing programs.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((cs, idx) => (
              <div key={cs.id} className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-64 lg:h-auto">
                    <img
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.titleId}] factory production manufacturing`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={cs.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-10">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-semibold bg-primary-50 text-primary-600 px-3 py-1 rounded-full">
                        {cs.industry}
                      </span>
                      <span className="text-xs font-medium text-gray-500">{cs.location}</span>
                    </div>
                    <h2 id={cs.titleId} className="text-2xl lg:text-3xl font-bold text-primary-800 mb-4">{cs.company}</h2>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 text-sm mb-2">Challenge:</h4>
                      <p className="text-gray-600 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-2">Our Solution:</h4>
                      <p className="text-gray-600 leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-gray-50 border-t border-gray-100 p-8 lg:p-10">
                  <h4 className="font-semibold text-primary-800 mb-6">Results Achieved:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    {cs.results.map((r, ridx) => (
                      <div key={ridx} className="text-center p-4 bg-white rounded-lg shadow-sm">
                        <r.icon className="w-6 h-6 text-primary-500 mx-auto mb-2" />
                        <div className="text-2xl font-extrabold text-primary-800">{r.metric}</div>
                        <div className="text-xs text-gray-600 font-medium">{r.label}</div>
                      </div>
                    ))}
                  </div>
                  <blockquote className="border-l-4 border-primary-500 pl-4 py-2">
                    <p className="text-gray-700 italic mb-2">"{cs.quote}"</p>
                    <footer className="text-sm text-gray-500">
                      <span className="font-semibold text-gray-700">{cs.author}</span>, {cs.role}
                    </footer>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-800 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want Similar Results for Your Business?
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            Contact us today to discuss your sourcing needs and get a free consultation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors no-underline"
          >
            Get Started <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
