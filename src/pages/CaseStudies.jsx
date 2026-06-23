import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  TrendingUp, 
  Clock, 
  Shield, 
  CheckCircle,
  Star,
  Building2,
  Globe,
  Package
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const caseStudies = [
  {
    id: 1,
    company: 'TechStart Inc.',
    industry: 'Electronics',
    location: 'USA',
    challenge: 'A startup looking to source smart home devices from China for their new product line. They had limited experience with international sourcing and were concerned about quality and supplier reliability.',
    solution: 'We conducted thorough supplier verification, identified a manufacturer with ISO 9001 certification, performed during-production inspections, and coordinated shipping. We also helped them negotiate favorable payment terms.',
    results: [
      { label: 'Cost Reduction', value: '35%', icon: TrendingUp },
      { label: 'Time Saved', value: '2 months', icon: Clock },
      { label: 'Quality Pass Rate', value: '98%', icon: Shield },
    ],
    testimonial: 'SSourcing China transformed our sourcing process. We went from being overwhelmed to having a reliable supplier we trust completely. Their QC team caught issues early that would have cost us dearly.',
    author: 'Michael Chen',
    role: 'CEO, TechStart Inc.',
    image: 'electronics manufacturing factory',
  },
  {
    id: 2,
    company: 'FashionLine',
    industry: 'Apparel',
    location: 'UK',
    challenge: 'A fashion brand seeking to expand their supplier base in China. They needed multiple reliable manufacturers who could meet their quality standards and ethical manufacturing requirements.',
    solution: 'We verified 8 factories, focusing on those with valid business licenses and good labor practices. We conducted factory audits, sample evaluations, and established quality benchmarks. Regular production visits ensured consistency.',
    results: [
      { label: 'New Suppliers', value: '3', icon: Building2 },
      { label: 'On-Time Delivery', value: '96%', icon: Clock },
      { label: 'Quality Score', value: '4.8/5', icon: Star },
    ],
    testimonial: 'Finding ethical manufacturers in China seemed impossible until we worked with SSourcing China. They understood our requirements and found factories that aligned with our values.',
    author: 'Sarah Williams',
    role: 'Supply Chain Director, FashionLine',
    image: 'textile factory manufacturing',
  },
  {
    id: 3,
    company: 'HomeGoods Co.',
    industry: 'Home & Garden',
    location: 'Germany',
    challenge: 'A home goods retailer needed to source multiple product categories from China for their new store line. They wanted a single point of contact to manage the complexity of coordinating multiple suppliers.',
    solution: 'We acted as their dedicated sourcing agent, managing supplier identification, verification, sample evaluation, production monitoring, and quality inspection across 5 different product categories. We also coordinated consolidated shipping.',
    results: [
      { label: 'Products Sourced', value: '12 SKUs', icon: Package },
      { label: 'Shipping Savings', value: '22%', icon: TrendingUp },
      { label: 'All On-Time', value: '100%', icon: Clock },
    ],
    testimonial: 'The level of service was exceptional. Having one team handle everything from supplier verification to shipping made our expansion project seamless. Highly recommended.',
    author: 'Hans Mueller',
    role: 'Procurement Manager, HomeGoods Co.',
    image: 'home products warehouse',
  },
  {
    id: 4,
    company: 'MediTech Solutions',
    industry: 'Medical Devices',
    location: 'Canada',
    challenge: 'A medical device company needed to source components from China with strict quality requirements. They required suppliers with specific certifications and rigorous quality control processes.',
    solution: 'We identified suppliers with ISO 13485 certification, conducted detailed factory audits focusing on cleanroom facilities and quality management systems, and implemented a comprehensive inspection protocol.',
    results: [
      { label: 'Defect Rate', value: '<0.5%', icon: Shield },
      { label: 'Certifications', value: 'All Verified', icon: CheckCircle },
      { label: 'Compliance', value: '100%', icon: CheckCircle },
    ],
    testimonial: 'Medical device sourcing requires precision. SSourcing China delivered suppliers who met our stringent requirements. Their understanding of quality standards was impressive.',
    author: 'Dr. James Liu',
    role: 'CTO, MediTech Solutions',
    image: 'medical device manufacturing',
  },
  {
    id: 5,
    company: 'OutdoorGear Pro',
    industry: 'Sports & Outdoors',
    location: 'Australia',
    challenge: 'An outdoor equipment brand needed to source high-quality camping gear from China. They were launching a new product line and needed suppliers who could meet both quality and volume requirements.',
    solution: 'We found manufacturers specializing in outdoor equipment, verified their production capacity, conducted material testing, and performed pre-shipment inspections. We also coordinated consolidated container shipping.',
    results: [
      { label: 'Cost Savings', value: '40%', icon: TrendingUp },
      { label: 'Order Size', value: '50,000 units', icon: Package },
      { label: 'Delivery', value: 'On Schedule', icon: Clock },
    ],
    testimonial: 'We launched our entire new line on time and under budget thanks to SSourcing China. Their expertise in outdoor product manufacturing saved us countless headaches.',
    author: 'Tom Richards',
    role: 'Founder, OutdoorGear Pro',
    image: 'sports equipment manufacturing',
  },
  {
    id: 6,
    company: 'GreenPack',
    industry: 'Packaging',
    location: 'Netherlands',
    challenge: 'A sustainable packaging company needed to source eco-friendly packaging materials from China. They wanted suppliers using recycled materials and sustainable manufacturing processes.',
    solution: 'We identified manufacturers specializing in eco-friendly packaging, verified their environmental certifications, conducted factory audits focusing on sustainability practices, and established quality standards for recycled materials.',
    results: [
      { label: 'Eco Products', value: '100%', icon: Globe },
      { label: 'Cost vs Local', value: '60% less', icon: TrendingUp },
      { label: 'Certification', value: 'FSC Verified', icon: CheckCircle },
    ],
    testimonial: 'Finding truly sustainable suppliers seemed daunting until we partnered with SSourcing China. They understood our sustainability requirements and found perfect matches.',
    author: 'Emma van Berg',
    role: 'Sustainability Director, GreenPack',
    image: 'sustainable packaging factory',
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Case Studies
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Real success stories from clients who trusted us with their China sourcing. 
              See how we help businesses source smarter.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              Start Your Project <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div 
                key={study.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-video rounded-2xl overflow-hidden bg-gray-200">
                    <img
                      data-strk-img-id={`case-${study.id}-img`}
                      data-strk-img={`[case-${study.id}-title] ${study.image}`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={study.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-900 text-sm font-medium rounded-full">
                      {study.industry}
                    </span>
                    <span className="flex items-center text-sm text-gray-500">
                      <Globe className="w-4 h-4 mr-1" />
                      {study.location}
                    </span>
                  </div>
                  
                  <h2 
                    id={`case-${study.id}-title`}
                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
                  >
                    {study.company}
                  </h2>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Challenge:</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Solution:</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.results.map((result, idx) => (
                      <div 
                        key={idx}
                        className="bg-gray-50 rounded-xl p-4 text-center"
                      >
                        <result.icon className="w-5 h-5 text-blue-900 mx-auto mb-2" />
                        <div className="text-xl font-bold text-gray-900">{result.value}</div>
                        <div className="text-xs text-gray-500">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="bg-blue-50 rounded-xl p-5">
                    <div className="flex items-start">
                      <Star className="w-5 h-5 text-yellow-400 fill-current mr-2 mt-0.5" />
                      <blockquote className="text-gray-700 text-sm italic">
                        "{study.testimonial}"
                      </blockquote>
                    </div>
                    <div className="mt-3 pt-3 border-t border-blue-100">
                      <div className="font-semibold text-gray-900 text-sm">{study.author}</div>
                      <div className="text-gray-500 text-xs">{study.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Track Record
            </h2>
            <p className="text-lg text-gray-600">
              Numbers that speak for themselves
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Clients Served' },
              { value: '1,200+', label: 'Factories Verified' },
              { value: '3,500+', label: 'Inspections Completed' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses who have transformed their China sourcing 
            with our expert guidance.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-900 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get a Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}