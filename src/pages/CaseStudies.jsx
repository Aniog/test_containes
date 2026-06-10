import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Clock, CheckCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const CaseStudies = () => {
  const heroRef = useRef(null)
  const casesRef = useRef(null)

  useEffect(() => {
    const loadImages = (ref) => {
      if (ref.current) {
        return ImageHelper.loadImages(strkImgConfig, ref.current)
      }
      return undefined
    }

    const cleanups = [
      loadImages(heroRef),
      loadImages(casesRef),
    ].filter(Boolean)

    return () => cleanups.forEach(cleanup => cleanup())
  }, [])

  const cases = [
    {
      id: 1,
      title: 'Electronics Retailer Reduces Costs by 35%',
      client: 'US-based Electronics Retailer',
      industry: 'Electronics',
      challenge: 'High sourcing costs and inconsistent quality from existing suppliers.',
      solution: 'Conducted comprehensive supplier search, identified 3 verified alternatives, negotiated better pricing while maintaining quality standards.',
      result: 'Reduced sourcing costs by 35%, improved quality consistency, established long-term supplier relationship.',
      metrics: [
        { label: 'Cost Reduction', value: '35%' },
        { label: 'Quality Improvement', value: '40%' },
        { label: 'Supplier Reliability', value: '98%' },
      ],
      image: 'electronics-case-study',
      titleId: 'case-title-1',
    },
    {
      id: 2,
      title: 'Furniture Brand Ensures Quality Standards',
      client: 'European Home Furniture Brand',
      industry: 'Furniture',
      challenge: 'Defect rate of 12% from previous supplier, causing customer complaints and returns.',
      solution: 'Implemented multi-stage quality inspection process, conducted factory audit, and established quality control checkpoints.',
      result: 'Reduced defect rate from 12% to 2%, improved customer satisfaction, and reduced return costs.',
      metrics: [
        { label: 'Defect Rate Reduction', value: '83%' },
        { label: 'Customer Satisfaction', value: '+45%' },
        { label: 'Return Rate', value: '-60%' },
      ],
      image: 'furniture-case-study',
      titleId: 'case-title-2',
    },
    {
      id: 3,
      title: 'Fashion Accessories Scale Production',
      client: 'Australian Fashion Brand',
      industry: 'Fashion',
      challenge: 'Needed to scale from 1,000 to 10,000 units/month while maintaining quality and meeting deadlines.',
      solution: 'Identified scalable manufacturer, implemented production monitoring, and coordinated logistics for timely delivery.',
      result: 'Successfully scaled production 10x, maintained 98% quality pass rate, and delivered on schedule.',
      metrics: [
        { label: 'Production Scale', value: '10x' },
        { label: 'Quality Pass Rate', value: '98%' },
        { label: 'On-time Delivery', value: '100%' },
      ],
      image: 'fashion-case-study',
      titleId: 'case-title-3',
    },
    {
      id: 4,
      title: 'Automotive Parts Supplier Verification',
      client: 'German Auto Parts Distributor',
      industry: 'Automotive',
      challenge: 'Needed to verify new supplier capabilities and certifications before placing large order.',
      solution: 'Conducted comprehensive factory audit, verified ISO certifications, and validated production capacity.',
      result: 'Successfully verified supplier, prevented potential quality issues, and established reliable supply chain.',
      metrics: [
        { label: 'Audit Score', value: '95/100' },
        { label: 'Certification Verified', value: '100%' },
        { label: 'Risk Mitigation', value: 'Success' },
      ],
      image: 'automotive-case-study',
      titleId: 'case-title-4',
    },
    {
      id: 5,
      title: 'Toy Company Ensures Safety Compliance',
      client: 'UK-based Toy Manufacturer',
      industry: 'Toys',
      challenge: 'Needed to ensure products meet EU safety standards and pass required testing.',
      solution: 'Coordinated with testing labs, verified material safety, and ensured compliance with EN71 standards.',
      result: 'All products passed safety testing, obtained CE marking, and successfully launched in European market.',
      metrics: [
        { label: 'Safety Tests Passed', value: '100%' },
        { label: 'Time to Market', value: '-30%' },
        { label: 'Compliance Score', value: 'A+' },
      ],
      image: 'toy-safety-case-study',
      titleId: 'case-title-5',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-900" ref={heroRef}>
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center opacity-20"
            data-strk-bg-id="case-studies-hero-bg"
            data-strk-bg="[case-hero-subtitle] [case-hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="case-hero-title" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Case Studies
          </h1>
          <p id="case-hero-subtitle" className="text-xl text-blue-100 max-w-3xl mx-auto">
            Real results from our satisfied clients across industries
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white" ref={casesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {cases.map((caseStudy, index) => (
              <div
                key={caseStudy.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="mb-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                        {caseStudy.industry}
                      </span>
                    </div>
                    <h2 id={caseStudy.titleId} className="text-3xl font-bold text-gray-900 mb-4">
                      {caseStudy.title}
                    </h2>
                    <p className="text-gray-600 font-medium mb-2">{caseStudy.client}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Challenge</h3>
                      <p className="text-gray-600 leading-relaxed">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Solution</h3>
                      <p className="text-gray-600 leading-relaxed">{caseStudy.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Result</h3>
                      <p className="text-gray-600 leading-relaxed">{caseStudy.result}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {caseStudy.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-blue-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-1">{metric.value}</div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden bg-gray-200">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      data-strk-img-id={`case-study-detail-${caseStudy.id}`}
                      data-strk-img={`[${caseStudy.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={caseStudy.title}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to discuss your sourcing needs and how we can help you succeed.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
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
