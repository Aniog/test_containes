import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, DollarSign, Clock, Users, CheckCircle } from 'lucide-react'

const caseStudies = [
  {
    title: 'US Retailer Reduces Home Décor Costs by 35%',
    client: 'Major US Home Goods Retailer',
    industry: 'Home & Garden',
    location: 'United States',
    challenge: 'The client was sourcing through multiple intermediaries, resulting in high costs and inconsistent quality across their home décor product line.',
    solution: 'We conducted a comprehensive supplier audit across Guangdong province, identified three verified factories, and established direct sourcing relationships with full QC oversight.',
    results: [
      '35% reduction in product costs',
      'Consistent quality across 200+ SKUs',
      'Reduced lead time from 90 to 45 days',
      'Eliminated quality-related returns by 92%',
    ],
    metrics: [
      { icon: DollarSign, value: '35%', label: 'Cost Reduction' },
      { icon: TrendingUp, value: '200+', label: 'SKUs Sourced' },
      { icon: Clock, value: '45 days', label: 'Lead Time' },
      { icon: Users, value: '3', label: 'Verified Factories' },
    ],
    image: 'home decor products retail warehouse shelf display interior design',
    imgId: 'case-studies-page-1-img',
    titleId: 'case-studies-page-1-title',
    descId: 'case-studies-page-1-desc',
  },
  {
    title: 'German Brand Launches Premium Electronics Line',
    client: 'German Consumer Electronics Brand',
    industry: 'Electronics',
    location: 'Germany',
    challenge: 'A German electronics brand wanted to launch a new product line but lacked experience sourcing from China and needed strict quality control.',
    solution: 'We managed the entire process from prototype development to mass production, including supplier selection, factory audits, and multi-stage quality inspections.',
    results: [
      'Successful launch of 5 new products',
      'Met all EU quality and safety standards',
      'Delivered first batch 5 days ahead of schedule',
      'Established ongoing supply chain for future products',
    ],
    metrics: [
      { icon: DollarSign, value: '28%', label: 'Below Budget' },
      { icon: TrendingUp, value: '50K units', label: 'First Order' },
      { icon: Clock, value: '60 days', label: 'To Market' },
      { icon: CheckCircle, value: '100%', label: 'QC Pass Rate' },
    ],
    image: 'consumer electronics products packaging assembly line manufacturing',
    imgId: 'case-studies-page-2-img',
    titleId: 'case-studies-page-2-title',
    descId: 'case-studies-page-2-desc',
  },
  {
    title: 'Australian Startup Scales to 10x Production',
    client: 'Australian Outdoor Equipment Startup',
    industry: 'Outdoor & Sports',
    location: 'Australia',
    challenge: 'A fast-growing Australian startup needed to scale production quickly while maintaining quality and managing cash flow during rapid growth.',
    solution: 'We identified flexible suppliers who could accommodate growing order volumes, negotiated favorable payment terms, and implemented scalable QC processes.',
    results: [
      'Scaled from 500 to 5,000 units per month',
      'Maintained quality standards during 10x growth',
      'Improved profit margins by 42%',
      'Established reliable supply chain for continued growth',
    ],
    metrics: [
      { icon: DollarSign, value: '42%', label: 'Margin Improved' },
      { icon: TrendingUp, value: '10x', label: 'Scale Achieved' },
      { icon: Clock, value: '30 days', label: 'Setup Time' },
      { icon: Users, value: '2', label: 'Factory Partners' },
    ],
    image: 'outdoor equipment sports gear camping hiking products manufacturing',
    imgId: 'case-studies-page-3-img',
    titleId: 'case-studies-page-3-title',
    descId: 'case-studies-page-3-desc',
  },
  {
    title: 'UK Retailer Launches Private Label Kitchen Line',
    client: 'UK Kitchen & Dining Retailer',
    industry: 'Home & Kitchen',
    location: 'United Kingdom',
    challenge: 'A UK retailer wanted to launch a private label kitchen products line but needed help navigating Chinese manufacturing for food-grade items.',
    solution: 'We sourced FDA-compliant factories, managed food-safety testing, and coordinated packaging design that met UK retail standards.',
    results: [
      'Successfully launched 45-SKU private label line',
      'All products passed FDA and LFGB testing',
      'Achieved 40% margin on retail pricing',
      'Secured placement in 200+ retail locations',
    ],
    metrics: [
      { icon: DollarSign, value: '40%', label: 'Retail Margin' },
      { icon: TrendingUp, value: '45', label: 'SKUs Launched' },
      { icon: Clock, value: '90 days', label: 'Full Launch' },
      { icon: CheckCircle, value: '100%', label: 'Compliance' },
    ],
    image: 'kitchen products cookware utensils ceramic tableware manufacturing',
    imgId: 'case-studies-page-4-img',
    titleId: 'case-studies-page-4-title',
    descId: 'case-studies-page-4-desc',
  },
  {
    title: 'Canadian Company Streamlines Promotional Products',
    client: 'Canadian Marketing Agency',
    industry: 'Promotional Products',
    location: 'Canada',
    challenge: 'A marketing agency needed a reliable source for custom promotional products with fast turnaround times for client campaigns.',
    solution: 'We established relationships with specialized promotional product factories, created a streamlined ordering process, and ensured consistent branding quality.',
    results: [
      'Reduced lead time from 60 to 25 days',
      'Achieved 99.5% on-time delivery rate',
      'Saved 30% compared to previous suppliers',
      'Expanded product range by 300%',
    ],
    metrics: [
      { icon: DollarSign, value: '30%', label: 'Cost Saved' },
      { icon: TrendingUp, value: '99.5%', label: 'On-Time Rate' },
      { icon: Clock, value: '25 days', label: 'Lead Time' },
      { icon: Users, value: '300%', label: 'Range Expanded' },
    ],
    image: 'promotional products custom branded merchandise corporate gifts marketing',
    imgId: 'case-studies-page-5-img',
    titleId: 'case-studies-page-5-title',
    descId: 'case-studies-page-5-desc',
  },
  {
    title: 'Middle East Distributor Sources Building Materials',
    client: 'UAE Building Materials Distributor',
    industry: 'Building Materials',
    location: 'United Arab Emirates',
    challenge: 'A UAE distributor needed a reliable Chinese source for high-quality building materials at competitive prices for large-scale construction projects.',
    solution: 'We vetted multiple factories across different provinces, arranged factory visits for the client, and established quality standards specific to the Middle East market.',
    results: [
      'Secured 5 reliable factory partnerships',
      'Reduced material costs by 45%',
      'Consistent quality meeting GCC standards',
      'Established regular container shipments',
    ],
    metrics: [
      { icon: DollarSign, value: '45%', label: 'Cost Reduced' },
      { icon: TrendingUp, value: '5', label: 'Factory Partners' },
      { icon: Clock, value: '100%', label: 'GCC Compliant' },
      { icon: Users, value: '12', label: 'Containers/Month' },
    ],
    image: 'building materials tiles ceramics construction supplies warehouse',
    imgId: 'case-studies-page-6-img',
    titleId: 'case-studies-page-6-title',
    descId: 'case-studies-page-6-desc',
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
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Success Stories</span>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mt-3 mb-6">
            Case Studies
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Real results from real clients across different industries and markets. 
            See how we have helped businesses succeed with China sourcing.
          </p>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto">
                    <img
                      data-strk-img-id={study.imgId}
                      data-strk-img={`[${study.descId}] [${study.titleId}] sourcing success story case study`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      className="w-full h-full object-cover bg-gray-100"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={study.title}
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h2 id={study.titleId} className="text-2xl font-bold text-navy mb-2">
                      {study.title}
                    </h2>
                    <p className="text-primary font-medium mb-1">{study.client}</p>
                    <p className="text-sm text-gray-500 mb-6">{study.location}</p>

                    <div className="mb-6">
                      <h3 className="font-semibold text-navy mb-2">Challenge</h3>
                      <p id={study.descId} className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-semibold text-navy mb-2">Our Solution</h3>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-semibold text-navy mb-3">Results</h3>
                      <ul className="space-y-2">
                        {study.results.map((result, rIndex) => (
                          <li key={rIndex} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-trust-green flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {study.metrics.map((metric, mIndex) => (
                        <div key={mIndex} className="text-center p-3 bg-gray-50 rounded-lg">
                          <metric.icon className="h-4 w-4 text-primary mx-auto mb-1" />
                          <div className="text-lg font-bold text-navy">{metric.value}</div>
                          <div className="text-xs text-gray-600">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want Similar Results?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let us help you achieve your sourcing goals. Contact us for a free consultation.
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
          >
            Start Your Success Story
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
