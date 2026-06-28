import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, TrendingUp, Package, Truck } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const CaseStudies = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const caseStudies = [
    {
      id: 1,
      title: 'US Electronics Retailer Reduces Sourcing Costs by 30%',
      client: 'Electronics Retailer from USA',
      industry: 'Electronics',
      challenge: 'A US-based electronics retailer was struggling with high sourcing costs and inconsistent quality from their existing Chinese suppliers.',
      solution: 'We conducted a thorough supplier audit, identified more cost-effective manufacturers, and implemented a rigorous quality inspection process.',
      results: [
        'Reduced sourcing costs by 30%',
        'Improved product quality consistency',
        'Established long-term relationship with 3 reliable suppliers',
        'Reduced defect rate from 8% to 2%',
      ],
      imgId: 'case-1-a1b2c3',
    },
    {
      id: 2,
      title: 'European Home Decor Brand Ensures Quality Standards',
      client: 'Home Decor Brand from Germany',
      industry: 'Home & Garden',
      challenge: 'A German home decor brand needed to ensure consistent quality across their product line sourced from multiple Chinese factories.',
      solution: 'We implemented a comprehensive quality control system with pre-production, during production, and pre-shipment inspections.',
      results: [
        'Achieved 99.5% quality pass rate',
        'Reduced customer returns by 60%',
        'Streamlined communication with 5 factories',
        'Reduced production delays by 40%',
      ],
      imgId: 'case-2-d4e5f6',
    },
    {
      id: 3,
      title: 'Australian Importer Streamlines Shipping & Logistics',
      client: 'General Importer from Australia',
      industry: 'Multiple Categories',
      challenge: 'An Australian importer was facing high shipping costs, frequent delays, and complex customs clearance issues.',
      solution: 'We optimized their shipping strategy, consolidated shipments, and coordinated with reliable freight forwarders.',
      results: [
        'Reduced shipping costs by 25%',
        'Cut delivery time by 2 weeks on average',
        'Eliminated customs clearance delays',
        'Improved inventory turnover rate',
      ],
      imgId: 'case-3-g7h8i9',
    },
    {
      id: 4,
      title: 'UK Fashion Brand Finds Reliable Clothing Manufacturer',
      client: 'Fashion Brand from United Kingdom',
      industry: 'Fashion & Apparel',
      challenge: 'A UK fashion brand struggled to find a reliable clothing manufacturer that could meet their quality and ethical standards.',
      solution: 'We conducted factory audits, verified certifications, and negotiated favorable terms with a verified manufacturer.',
      results: [
        'Found ethical manufacturer with WRAP certification',
        'Reduced MOQ from 1,000 to 300 pieces',
        'Improved garment quality and consistency',
        'Established private label production line',
      ],
      imgId: 'case-4-j1k2l3',
    },
    {
      id: 5,
      title: 'Canadian Toy Company Navigates Safety Compliance',
      client: 'Toy Company from Canada',
      industry: 'Toys & Gifts',
      challenge: 'A Canadian toy company needed to ensure their products met strict North American safety standards (ASTM, CPSIA).',
      solution: 'We coordinated with testing laboratories, verified factory compliance, and implemented safety testing protocols.',
      results: [
        '100% products passed safety testing',
        'Obtained all required certifications (ASTM, CPSIA, CE)',
        'Reduced time-to-market by 3 weeks',
        'Avoided costly product recalls',
      ],
      imgId: 'case-5-m4n6o7',
    },
  ]

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 id="casestudies-hero-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h1>
            <p id="casestudies-hero-subtitle" className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped businesses like yours successfully source from China. 
              Real results from real clients.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>
                  <h2 id={`case-title-${study.id}`} className="text-3xl font-bold text-gray-900 mb-4">
                    {study.title}
                  </h2>
                  <p className="text-gray-600 mb-2">
                    <strong>Client:</strong> {study.client}
                  </p>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Challenge:</h3>
                    <p id={`case-challenge-${study.id}`} className="text-gray-700">
                      {study.challenge}
                    </p>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Solution:</h3>
                    <p id={`case-solution-${study.id}`} className="text-gray-700">
                      {study.solution}
                    </p>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Results:</h3>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <img
                    alt={study.title}
                    data-strk-img-id={study.imgId}
                    data-strk-img={`[case-solution-${study.id}] [case-challenge-${study.id}] [case-title-${study.id}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="testimonials-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: 'SSourcing China helped us reduce our sourcing costs by 30% while improving quality. Their team is professional, responsive, and truly understands our needs.',
                author: 'John Smith',
                company: 'Electronics Retailer, USA',
                imgId: 'testimonial-1-p8q9r0',
              },
              {
                quote: 'Working with SSourcing China has been a game-changer for our business. They found us a reliable manufacturer and ensured consistent quality across all our orders.',
                author: 'Sarah Mueller',
                company: 'Home Decor Brand, Germany',
                imgId: 'testimonial-2-s1t2u3',
              },
              {
                quote: 'The team at SSourcing China is knowledgeable and trustworthy. They\'ve helped us navigate the complexities of sourcing from China with ease.',
                author: 'David Brown',
                company: 'Importer, Australia',
                imgId: 'testimonial-3-v4w5x6',
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="mb-6">
                  <img
                    alt={`Testimonial from ${testimonial.author}`}
                    data-strk-img-id={testimonial.imgId}
                    data-strk-img={`${testimonial.company} client testimonial sourcing China`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="100"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-16 h-16 rounded-full mb-4"
                  />
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Satisfied Clients' },
              { number: '50+', label: 'Countries Served' },
              { number: '10,000+', label: 'Inspections Conducted' },
              { number: '95%', label: 'Client Retention Rate' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-xl text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today for a free consultation. Let's discuss how we can help you 
            achieve your sourcing goals.
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
