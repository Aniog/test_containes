import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, DollarSign, Clock, Users, Globe } from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    title: 'US Retailer Reduces Sourcing Costs by 35%',
    client: 'Mid-Size US Retail Chain',
    industry: 'Electronics',
    location: 'United States',
    challenge: 'The client was sourcing LED lighting products through multiple intermediaries, resulting in high costs and inconsistent quality.',
    solution: 'We consolidated their supply chain by identifying and verifying direct manufacturers, implemented quality inspections, and negotiated volume pricing.',
    results: [
      { icon: <DollarSign className="w-5 h-5" />, value: '35%', label: 'Cost Reduction' },
      { icon: <TrendingUp className="w-5 h-5" />, value: '99.2%', label: 'Quality Pass Rate' },
      { icon: <Clock className="w-5 h-5" />, value: '45 days', label: 'Lead Time' },
    ],
    quote: 'SSourcing China helped us streamline our supply chain and significantly reduce costs. Their quality inspection process gives us confidence in every shipment.',
    quoteAuthor: 'Procurement Director',
  },
  {
    id: 2,
    title: 'European Brand Launches Custom Product Line',
    client: 'European Fashion Brand',
    industry: 'Apparel',
    location: 'Germany',
    challenge: 'The client wanted to launch a custom clothing line but had no experience sourcing from China and was concerned about quality and IP protection.',
    solution: 'We managed the entire process from design sampling to bulk production, including NDA agreements, quality inspections, and IP protection measures.',
    results: [
      { icon: <DollarSign className="w-5 h-5" />, value: '28%', label: 'Below Budget' },
      { icon: <Clock className="w-5 h-5" />, value: '60 days', label: 'Time to Market' },
      { icon: <TrendingUp className="w-5 h-5" />, value: '100%', label: 'On-Time Delivery' },
    ],
    quote: 'Working with SSourcing China made launching our product line stress-free. They handled everything from sampling to shipping with professionalism.',
    quoteAuthor: 'Brand Manager',
  },
  {
    id: 3,
    title: 'Australian Importer Consolidates Supply Chain',
    client: 'Australian Home Goods Importer',
    industry: 'Home & Garden',
    location: 'Australia',
    challenge: 'The client was managing 12 different suppliers, creating communication challenges and quality inconsistencies.',
    solution: 'We consolidated their supplier base to 5 verified manufacturers, implemented unified quality standards, and centralized communication.',
    results: [
      { icon: <DollarSign className="w-5 h-5" />, value: '22%', label: 'Cost Savings' },
      { icon: <Users className="w-5 h-5" />, value: '5 suppliers', label: 'Consolidated From 12' },
      { icon: <TrendingUp className="w-5 h-5" />, value: '98%', label: 'Client Satisfaction' },
    ],
    quote: 'Consolidating our suppliers through SSourcing China simplified our operations and improved quality consistency across our product range.',
    quoteAuthor: 'Operations Manager',
  },
  {
    id: 4,
    title: 'Middle East Distributor Sources Industrial Equipment',
    client: 'Industrial Equipment Distributor',
    industry: 'Machinery',
    location: 'UAE',
    challenge: 'The client needed to source specialized industrial equipment with strict technical specifications and certifications.',
    solution: 'We identified manufacturers with the required certifications, conducted technical capability assessments, and managed the entire procurement process.',
    results: [
      { icon: <DollarSign className="w-5 h-5" />, value: '40%', label: 'Cost Savings' },
      { icon: <Globe className="w-5 h-5" />, value: '3 months', label: 'Project Timeline' },
      { icon: <TrendingUp className="w-5 h-5" />, value: '100%', label: 'Certification Compliance' },
    ],
    quote: 'Their technical expertise in sourcing industrial equipment was impressive. They understood our specifications and found exactly what we needed.',
    quoteAuthor: 'Technical Director',
  },
]

const CaseStudies = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-primary py-20 md:py-28">
        <div className="container-custom text-center">
          <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm mb-6">
            Success Stories
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            See how we've helped businesses around the world succeed with sourcing from China.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary to-primary-600 p-8">
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-white text-sm">{study.industry}</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-white text-sm">{study.location}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{study.title}</h2>
                  <p className="text-white/80 mt-2">{study.client}</p>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-lg font-bold text-navy mb-3">Challenge</h3>
                      <p className="text-navy-500">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy mb-3">Solution</h3>
                      <p className="text-navy-500">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-bold text-navy mb-4">Results</h3>
                    <div className="grid sm:grid-cols-3 gap-6">
                      {study.results.map((result, i) => (
                        <div key={i} className="text-center">
                          <div className="flex items-center justify-center gap-2 text-accent mb-2">
                            {result.icon}
                            <span className="text-2xl font-bold">{result.value}</span>
                          </div>
                          <span className="text-sm text-navy-500">{result.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="border-l-4 border-accent pl-6">
                    <p className="text-navy-600 italic mb-3">"{study.quote}"</p>
                    <p className="text-navy-400 text-sm">— {study.quoteAuthor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="section-title mb-6">Want Similar Results?</h2>
          <p className="section-subtitle mx-auto mb-8">
            Tell us about your business and sourcing needs. We'll create a customized plan for you.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Start Your Success Story
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
