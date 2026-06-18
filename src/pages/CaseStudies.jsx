import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, TrendingUp, Users, Package } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const caseStudies = [
  {
    client: 'European Home Goods Retailer',
    location: 'Germany',
    industry: 'Home & Kitchen',
    challenge: 'Needed a reliable supplier for 50,000 units of kitchenware with strict EU quality and safety standards. Previous attempts to source directly resulted in quality issues and delays.',
    approach: 'We conducted thorough supplier verification, visiting 12 factories. We performed detailed factory audits focusing on quality management systems and certifications. Three factories were shortlisted and samples were evaluated.',
    result: 'Selected factory delivered with 99.2% quality pass rate. On-time delivery within the agreed timeline. Client has since placed 3 repeat orders.',
    metrics: [
      { label: 'Quality Pass Rate', value: '99.2%' },
      { label: 'On-Time Delivery', value: '100%' },
      { label: 'Cost Savings', value: '18%' },
    ],
    image: 'kitchenware manufacturing',
    services: ['Supplier Verification', 'Factory Audit', 'Quality Inspection', 'Shipping'],
  },
  {
    client: 'US E-commerce Brand',
    location: 'United States',
    industry: 'Electronics',
    challenge: 'First-time importer wanting to launch a line of smart home devices. Concerns about supplier reliability, product quality, and navigating international trade.',
    approach: 'We provided end-to-end support including supplier verification, sample development, production monitoring, and pre-shipment inspection. Regular video updates kept the client informed.',
    result: 'Successful product launch with zero defects. The client has expanded their product line and now sources 5 different products through us.',
    metrics: [
      { label: 'Defect Rate', value: '0%' },
      { label: 'Products Sourced', value: '5' },
      { label: 'Client Since', value: '2021' },
    ],
    image: 'electronics manufacturing',
    services: ['Supplier Verification', 'Product Development', 'Production Monitoring', 'Quality Inspection', 'Shipping'],
  },
  {
    client: 'Australian Furniture Distributor',
    location: 'Australia',
    industry: 'Furniture',
    challenge: 'Sourcing custom-designed furniture with specific materials, finishes, and dimensions. Needed help with design translation and manufacturing.',
    approach: 'We identified suitable factories with custom manufacturing capabilities. Managed the entire sample development process, working closely with factories to achieve the desired look and quality. Coordinated a 40ft container shipment.',
    result: 'Sample development completed in 6 weeks. First order of 200 units delivered perfectly. Client has established an ongoing partnership with the factory.',
    metrics: [
      { label: 'Sample Development', value: '6 weeks' },
      { label: 'Order Value', value: '$85K' },
      { label: 'Repeat Orders', value: '4' },
    ],
    image: 'furniture warehouse',
    services: ['Product Development', 'Factory Audit', 'Quality Inspection', 'Shipping & Logistics'],
  },
  {
    client: 'UK Fashion Brand',
    location: 'United Kingdom',
    industry: 'Apparel',
    challenge: 'Sourcing sustainable, high-quality garments for their new eco-friendly fashion line. Needed factories with organic certification and ethical practices.',
    approach: 'We screened our network for factories with GOTS and OEKO-TEX certifications. Conducted thorough audits including worker conditions assessment. Negotiated favorable terms for small initial orders.',
    result: 'Found a certified sustainable factory. Initial order of 5,000 units exceeded quality expectations. The brand has grown to order 20,000+ units annually.',
    metrics: [
      { label: 'Annual Volume', value: '20K+ units' },
      { label: 'Quality Rating', value: 'Excellent' },
      { label: 'Certifications', value: 'GOTS, OEKO-TEX' },
    ],
    image: 'textile factory',
    services: ['Supplier Verification', 'Factory Audit', 'Production Monitoring', 'Quality Inspection'],
  },
  {
    client: 'Canadian Automotive Parts Company',
    location: 'Canada',
    industry: 'Automotive',
    challenge: 'Sourcing precision automotive components with strict tolerance requirements. Needed ISO-certified suppliers with automotive industry experience.',
    approach: 'We focused on factories with IATF 16949 certification. Performed detailed technical audits to verify manufacturing capabilities and quality control processes.',
    result: 'Identified a factory with 15+ years automotive experience. Components met all specifications with zero defects. Client has established a long-term supply agreement.',
    metrics: [
      { label: 'Defect Rate', value: '0%' },
      { label: 'Certification', value: 'IATF 16949' },
      { label: 'Lead Time', value: '45 days' },
    ],
    image: 'auto parts manufacturing',
    services: ['Supplier Verification', 'Factory Audit', 'Quality Inspection', 'Product Development'],
  },
  {
    client: 'Japanese Health & Beauty Brand',
    location: 'Japan',
    industry: 'Beauty & Personal Care',
    challenge: 'Sourcing premium skincare packaging and cosmetic containers with distinctive designs. Required factories with advanced printing and molding capabilities.',
    approach: 'We identified factories specializing in cosmetic packaging with advanced capabilities. Managed sample development with multiple iterations to achieve the desired aesthetic.',
    result: 'Successfully developed unique packaging that differentiates the brand. Quality exceeded expectations. Client has expanded to source complete product lines.',
    metrics: [
      { label: 'Sample Iterations', value: '5' },
      { label: 'Quality Score', value: '98%' },
      { label: 'Product Lines', value: '3' },
    ],
    image: 'cosmetic packaging manufacturing',
    services: ['Product Development', 'Supplier Verification', 'Quality Inspection', 'Shipping'],
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-[#1E3A5F] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-lg text-[#A0AEC0] max-w-2xl mx-auto">
              Real results from clients who trusted us with their China sourcing. See how we've helped businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-[#E2E8F0]"
              >
                <div className="grid lg:grid-cols-2">
                  <div className="aspect-video lg:aspect-auto">
                    <img
                      data-strk-img-id={`case-img-${index}`}
                      data-strk-img={study.image}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={study.client}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-medium text-[#C9A227] bg-[#C9A227]/10 px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                      <span className="text-sm text-[#4A5568]">{study.location}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">{study.client}</h2>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="text-sm font-semibold text-[#1E3A5F] mb-1">Challenge</h3>
                        <p className="text-sm text-[#4A5568]">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-[#1E3A5F] mb-1">Our Approach</h3>
                        <p className="text-sm text-[#4A5568]">{study.approach}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-[#1E3A5F] mb-1">Result</h3>
                        <p className="text-sm text-[#38A169] font-medium">{study.result}</p>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {study.metrics.map((metric, mIndex) => (
                        <div key={mIndex} className="text-center p-3 bg-[#F8FAFC] rounded-lg">
                          <p className="text-lg font-bold text-[#1E3A5F]">{metric.value}</p>
                          <p className="text-xs text-[#4A5568]">{metric.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Services */}
                    <div className="flex flex-wrap gap-2">
                      {study.services.map((service, sIndex) => (
                        <span 
                          key={sIndex}
                          className="text-xs bg-[#E2E8F0] text-[#4A5568] px-2 py-1 rounded"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#C9A227] rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="text-[#1E3A5F]" size={24} />
              </div>
              <p className="text-3xl font-bold text-white">500+</p>
              <p className="text-[#A0AEC0] text-sm">Clients Served</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#C9A227] rounded-lg flex items-center justify-center mx-auto mb-3">
                <Package className="text-[#1E3A5F]" size={24} />
              </div>
              <p className="text-3xl font-bold text-white">2000+</p>
              <p className="text-[#A0AEC0] text-sm">Factories Verified</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#C9A227] rounded-lg flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="text-[#1E3A5F]" size={24} />
              </div>
              <p className="text-3xl font-bold text-white">98%</p>
              <p className="text-[#A0AEC0] text-sm">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#C9A227] rounded-lg flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="text-[#1E3A5F]" size={24} />
              </div>
              <p className="text-3xl font-bold text-white">95%</p>
              <p className="text-[#A0AEC0] text-sm">On-Time Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-lg text-[#4A5568] mb-8 max-w-2xl mx-auto">
            Let us help you find the perfect supplier and ensure quality delivery. Get started with a free consultation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A227] text-[#1E3A5F] font-semibold rounded-lg hover:bg-[#B8911F] transition-colors"
          >
            Get a Free Quote
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}