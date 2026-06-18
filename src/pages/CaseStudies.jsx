import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Clock, Users, CheckCircle, Star, Quote } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

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
      company: 'TechStart Inc.',
      industry: 'Electronics',
      location: 'United States',
      year: '2024',
      challenge: 'TechStart Inc., a growing consumer electronics company, needed to source 10,000 smart home devices within a tight 60-day deadline. They had previously struggled with quality issues and unreliable suppliers.',
      solution: 'We identified 3 verified manufacturers through our extensive network, conducted comprehensive factory audits, negotiated competitive pricing, and performed rigorous pre-shipment inspections.',
      result: 'Delivered on time with a 99.2% quality pass rate. Saved 25% compared to their previous supplier while improving product quality significantly.',
      metrics: [
        { label: 'Time to Delivery', value: '58 days' },
        { label: 'Quality Pass Rate', value: '99.2%' },
        { label: 'Cost Savings', value: '25%' }
      ],
      testimonial: 'SSourcing China transformed our supply chain. The quality improvement was immediate and the savings were significant. We now have a reliable partner for all our China sourcing needs.',
      author: 'John Miller, CEO',
      image: 'electronics manufacturing factory'
    },
    {
      id: 2,
      company: 'FashionLine GmbH',
      industry: 'Apparel',
      location: 'Germany',
      year: '2024',
      challenge: 'FashionLine needed a reliable textile supplier for their sustainable fashion line. They required factories with eco-certifications and consistent quality for seasonal collections.',
      solution: 'We verified factories for eco-certifications, conducted quarterly quality audits, established clear quality standards, and implemented a robust communication protocol for seasonal demands.',
      result: 'Established a 3-year partnership. Reduced defect rate from 8% to 1.5%. Improved order fulfillment reliability to 98%.',
      metrics: [
        { label: 'Defect Rate Reduction', value: '81%' },
        { label: 'Order Reliability', value: '98%' },
        { label: 'Partnership Duration', value: '3 years' }
      ],
      testimonial: 'The attention to detail and proactive communication from SSourcing China has been exceptional. They truly understand the demands of the European fashion market.',
      author: 'Anna Schmidt, Procurement Director',
      image: 'textile factory'
    },
    {
      id: 3,
      company: 'BuildRight Co.',
      industry: 'Construction',
      location: 'United Kingdom',
      year: '2023',
      challenge: 'BuildRight required custom machinery parts with precise specifications for their construction equipment. Previous suppliers had failed to meet technical requirements.',
      solution: 'We worked closely with their engineering team to identify manufacturers with the right technical capabilities, performed during-production inspections, and implemented strict quality controls.',
      result: 'Zero defects on first shipment. 40% cost reduction from previous supplier. Established a reliable supply chain for ongoing needs.',
      metrics: [
        { label: 'Defect Rate', value: '0%' },
        { label: 'Cost Reduction', value: '40%' },
        { label: 'On-time Delivery', value: '100%' }
      ],
      testimonial: 'The technical expertise and quality control SSourcing China provided was outstanding. They delivered exactly what we needed, on time and on budget.',
      author: 'David Brown, Operations Manager',
      image: 'machinery manufacturing'
    },
    {
      id: 4,
      company: 'GreenPack Solutions',
      industry: 'Packaging',
      location: 'Canada',
      year: '2024',
      challenge: 'GreenPack needed sustainable packaging suppliers for their eco-friendly products. They required biodegradable materials and wanted to verify environmental claims.',
      solution: 'We identified certified sustainable packaging manufacturers, verified their environmental certifications, conducted factory audits focused on sustainability practices, and established quality standards.',
      result: 'Found 2 verified suppliers meeting all sustainability criteria. Reduced packaging costs by 15% while improving environmental compliance.',
      metrics: [
        { label: 'Cost Savings', value: '15%' },
        { label: 'Suppliers Verified', value: '2' },
        { label: 'Compliance Rate', value: '100%' }
      ],
      testimonial: 'SSourcing China helped us navigate the complex world of sustainable packaging in China. Their verification process gave us confidence in our suppliers\' environmental claims.',
      author: 'Sarah Chen, Founder',
      image: 'sustainable packaging factory'
    },
    {
      id: 5,
      company: 'AutoParts Direct',
      industry: 'Automotive',
      location: 'Australia',
      year: '2023',
      challenge: 'AutoParts Direct needed a reliable source for automotive components. They had experienced quality issues and needed a supplier who could meet automotive industry standards.',
      solution: 'We identified IATF-certified manufacturers, conducted thorough quality audits, implemented APQP processes, and established incoming inspection protocols.',
      result: 'Achieved IATF compliance. Reduced quality complaints by 90%. Established a scalable supply chain for growth.',
      metrics: [
        { label: 'Quality Improvement', value: '90%' },
        { label: 'IATF Compliance', value: 'Achieved' },
        { label: 'Defect Rate', value: '<0.5%' }
      ],
      testimonial: 'The automotive industry demands precision, and SSourcing China delivered. Their understanding of automotive quality standards is exceptional.',
      author: 'Michael Thompson, Supply Chain Manager',
      image: 'auto parts manufacturing'
    },
    {
      id: 6,
      company: 'HomeStyle Retail',
      industry: 'Home & Garden',
      location: 'France',
      year: '2024',
      challenge: 'HomeStyle wanted to expand their product range with home goods sourced from China. They needed help with product development, sampling, and quality control.',
      solution: 'We provided end-to-end support from product development to mass production, including design collaboration, sample iteration, factory selection, and quality inspections.',
      result: 'Successfully launched 50 new products. Reduced time-to-market by 30%. Maintained consistent quality across all product lines.',
      metrics: [
        { label: 'Products Launched', value: '50' },
        { label: 'Time Reduction', value: '30%' },
        { label: 'Quality Score', value: '97%' }
      ],
      testimonial: 'SSourcing China has been instrumental in growing our China product line. Their support throughout the entire process has been invaluable.',
      author: 'Pierre Dubois, CEO',
      image: 'home products factory'
    }
  ]

  const industries = ['All', 'Electronics', 'Apparel', 'Construction', 'Packaging', 'Automotive', 'Home & Garden']

  return (
    <div ref={containerRef} className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Real results from our partnership with global buyers across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-white">500+</p>
              <p className="text-blue-200">Clients Served</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">$200M+</p>
              <p className="blue-200">Orders Processed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">98%</p>
              <p className="text-blue-200">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">15+</p>
              <p className="text-blue-200">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div 
                key={study.id}
                className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-gray-500 text-sm">{study.location}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{study.company}</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">Challenge</h3>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">Solution</h3>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">Result</h3>
                      <p className="text-gray-600">{study.result}</p>
                    </div>
                  </div>
                  
                  {/* Metrics */}
                  <div className="mt-8 grid grid-cols-3 gap-4">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="bg-gray-50 rounded-lg p-4 text-center">
                        <p className="text-2xl font-bold text-blue-600">{metric.value}</p>
                        <p className="text-xs text-gray-600">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-gray-100 rounded-xl overflow-hidden mb-6">
                    <img
                      data-strk-img-id={`case-study-${study.id}`}
                      data-strk-img={`[case-company-${study.id}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={study.company}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  
                  {/* Testimonial */}
                  <div className="bg-blue-50 rounded-xl p-6">
                    <Quote className="w-8 h-8 text-blue-300 mb-3" />
                    <p className="text-gray-700 italic mb-4">"{study.testimonial}"</p>
                    <p className="font-semibold text-gray-900">{study.author}</p>
                    <p className="text-sm text-gray-500">{study.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join hundreds of satisfied clients who have transformed their China sourcing with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies