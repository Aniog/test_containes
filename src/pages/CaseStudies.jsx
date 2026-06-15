import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, TrendingUp, Globe, Package } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const CaseStudies = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const cases = [
    {
      title: 'US Fashion Retailer Reduces Sourcing Costs by 30%',
      client: 'Fashion Retailer, USA',
      industry: 'Fashion & Apparel',
      challenge: 'High product costs and inconsistent quality from existing suppliers were affecting profit margins and customer satisfaction.',
      solution: 'We identified 3 alternative factories with better pricing and quality systems. Negotiated improved terms and implemented a 3-stage quality inspection process.',
      result: '30% cost reduction, 0 defective shipments in 12 months, improved customer satisfaction scores.',
      metrics: [
        { label: 'Cost Reduction', value: '30%' },
        { label: 'Defect Rate', value: '0%' },
        { label: 'Timeline', value: '12 months' }
      ],
      imgId: 'case-study-1-001',
      imgDesc: 'Fashion retail success story with cost reduction'
    },
    {
      title: 'German Industrial Equipment Company Streamlines Production',
      client: 'Industrial Equipment Manufacturer, Germany',
      industry: 'Industrial Equipment',
      challenge: 'Delayed deliveries and communication issues with Chinese factory were causing production bottlenecks and missed deadlines.',
      solution: 'Implemented on-site production monitoring, established weekly progress reports, and optimized logistics with faster shipping routes.',
      result: 'On-time delivery improved to 95%, lead time reduced by 3 weeks, production efficiency increased by 25%.',
      metrics: [
        { label: 'On-time Delivery', value: '95%' },
        { label: 'Lead Time Reduction', value: '3 weeks' },
        { label: 'Efficiency Increase', value: '25%' }
      ],
      imgId: 'case-study-2-002',
      imgDesc: 'Industrial equipment sourcing and production monitoring'
    },
    {
      title: 'Australian Electronics Startup Scales Quickly for Product Launch',
      client: 'Electronics Startup, Australia',
      industry: 'Electronics & Gadgets',
      challenge: 'Needed reliable supplier for new product launch with tight timeline. Previous supplier had quality and delay issues.',
      solution: 'Fast supplier matching within 5 days, expedited sampling process, pre-shipment inspection, and priority shipping coordination.',
      result: 'Product launched on time, 5000 units delivered with zero defects, successful market entry achieved.',
      metrics: [
        { label: 'Units Delivered', value: '5000' },
        { label: 'Defect Rate', value: '0%' },
        { label: 'Time to Market', value: 'On time' }
      ],
      imgId: 'case-study-3-003',
      imgDesc: 'Electronics startup successful product launch'
    },
    {
      title: 'UK Home Goods Brand Expands Product Line',
      client: 'Home Goods Brand, United Kingdom',
      industry: 'Home & Garden',
      challenge: 'Wanted to expand product line but struggled to find reliable suppliers for new categories (kitchenware and home decor).',
      solution: 'Conducted market research, identified 5 new verified suppliers across categories, negotiated favorable MOQs, and managed sample evaluation.',
      result: 'Successfully launched 15 new products, 40% faster time-to-market, maintained 98% quality pass rate.',
      metrics: [
        { label: 'New Products', value: '15' },
        { label: 'Time-to-Market', value: '40% faster' },
        { label: 'Quality Pass Rate', value: '98%' }
      ],
      imgId: 'case-study-4-004',
      imgDesc: 'Home goods brand product line expansion'
    },
    {
      title: 'Canadian Auto Parts Distributor Improves Supply Chain',
      client: 'Auto Parts Distributor, Canada',
      industry: 'Automotive Parts',
      challenge: 'Inconsistent quality and frequent stockouts from multiple suppliers were affecting customer relationships.',
      solution: 'Consolidated supplier base from 12 to 4 verified suppliers, implemented quality agreements, and established safety stock programs.',
      result: 'Stockout rate reduced from 15% to 3%, quality returns down 60%, customer satisfaction up 35%.',
      metrics: [
        { label: 'Stockout Reduction', value: '80%' },
        { label: 'Quality Returns Down', value: '60%' },
        { label: 'Satisfaction Increase', value: '35%' }
      ],
      imgId: 'case-study-5-005',
      imgDesc: 'Auto parts supply chain improvement'
    },
    {
      title: 'French Beauty Brand Ensures Compliance for EU Market',
      client: 'Beauty Brand, France',
      industry: 'Health & Beauty',
      challenge: 'Needed suppliers who could meet strict EU cosmetic regulations and provide proper documentation for customs.',
      solution: 'Identified suppliers with EU-compliant formulations, arranged third-party testing, and prepared comprehensive compliance documentation.',
      result: '100% customs clearance success, all products passed EU compliance testing, 6-week faster market entry.',
      metrics: [
        { label: 'Customs Success', value: '100%' },
        { label: 'Compliance Pass', value: '100%' },
        { label: 'Faster Market Entry', value: '6 weeks' }
      ],
      imgId: 'case-study-6-006',
      imgDesc: 'Beauty brand EU compliance success'
    }
  ]

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 id="cases-hero-title" className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p id="cases-hero-subtitle" className="text-xl text-blue-100">
              Real results for our clients across industries and regions
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cases.map((caseStudy, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  data-strk-img-id={caseStudy.imgId}
                  data-strk-img={`[cases-hero-subtitle] [cases-hero-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={caseStudy.imgDesc}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {caseStudy.industry}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {caseStudy.title}
                  </h2>
                  <p className="text-sm text-blue-600 font-medium mb-4">
                    {caseStudy.client}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-1">Challenge:</h3>
                      <p className="text-gray-600 text-sm">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-1">Solution:</h3>
                      <p className="text-gray-600 text-sm">{caseStudy.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-1">Result:</h3>
                      <p className="text-gray-600 text-sm">{caseStudy.result}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                    {caseStudy.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                        <div className="text-xs text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="testimonials-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <p className="text-gray-600 mb-6 italic">
                "SSourcing China transformed our sourcing process. Their supplier verification saved us from a potential scam, and their quality inspections ensure we never receive defective products."
              </p>
              <div>
                <p className="font-semibold text-gray-900">Michael Thompson</p>
                <p className="text-sm text-gray-600">CEO, RetailMax USA</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <p className="text-gray-600 mb-6 italic">
                "Working with SSourcing China has been a game-changer. They negotiated better prices than we could achieve on our own, and their production monitoring keeps us informed every step of the way."
              </p>
              <div>
                <p className="font-semibold text-gray-900">Sarah Chen</p>
                <p className="text-sm text-gray-600">Procurement Manager, TechFlow Germany</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <p className="text-gray-600 mb-6 italic">
                "As a startup, we needed flexibility with MOQs. SSourcing China found suppliers willing to work with our smaller volumes without compromising on quality or service."
              </p>
              <div>
                <p className="font-semibold text-gray-900">James Wilson</p>
                <p className="text-sm text-gray-600">Founder, EcoGadgets Australia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cases-cta-title" className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p id="cases-cta-subtitle" className="text-xl text-blue-100 mb-8">
            Contact us today and let's discuss how we can help you achieve your sourcing goals
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
