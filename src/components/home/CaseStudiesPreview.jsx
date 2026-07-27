import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, DollarSign, Clock } from 'lucide-react'

const caseStudies = [
  {
    title: 'US Retailer Reduces Costs by 35%',
    category: 'Electronics',
    description: 'A mid-size US retailer needed to source LED lighting products. We found verified suppliers, negotiated pricing, and coordinated quality inspections.',
    stats: [
      { icon: <DollarSign className="w-4 h-4" />, value: '35%', label: 'Cost Savings' },
      { icon: <Clock className="w-4 h-4" />, value: '45 days', label: 'Delivery Time' },
      { icon: <TrendingUp className="w-4 h-4" />, value: '99%', label: 'Quality Rate' },
    ],
  },
  {
    title: 'European Brand Launches Custom Product Line',
    category: 'Apparel',
    description: 'A European fashion brand wanted to launch a custom clothing line. We managed everything from design sampling to bulk production.',
    stats: [
      { icon: <DollarSign className="w-4 h-4" />, value: '28%', label: 'Cost Savings' },
      { icon: <Clock className="w-4 h-4" />, value: '60 days', label: 'To Market' },
      { icon: <TrendingUp className="w-4 h-4" />, value: '100%', label: 'On-Time' },
    ],
  },
  {
    title: 'Australian Importer Streamlines Supply Chain',
    category: 'Home & Garden',
    description: 'An Australian home goods importer consolidated multiple suppliers through our platform, reducing complexity and improving reliability.',
    stats: [
      { icon: <DollarSign className="w-4 h-4" />, value: '22%', label: 'Cost Reduction' },
      { icon: <Clock className="w-4 h-4" />, value: '5 suppliers', label: 'Consolidated' },
      { icon: <TrendingUp className="w-4 h-4" />, value: '98%', label: 'Satisfaction' },
    ],
  },
]

const CaseStudiesPreview = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-accent-100 text-accent-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Success Stories
          </span>
          <h2 className="section-title">Real Results for Real Businesses</h2>
          <p className="section-subtitle mx-auto">
            See how we've helped companies like yours succeed with sourcing from China.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl 
                                      transition-all duration-300 border border-gray-100">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-primary-600 p-6">
                <span className="text-white/80 text-sm">{study.category}</span>
                <h3 className="text-xl font-bold text-white mt-2">{study.title}</h3>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <p className="text-navy-500 text-sm mb-6">{study.description}</p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {study.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="flex items-center justify-center gap-1 text-accent mb-1">
                        {stat.icon}
                        <span className="font-bold text-lg">{stat.value}</span>
                      </div>
                      <span className="text-xs text-navy-400">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/case-studies" className="btn-secondary inline-flex items-center gap-2">
            View All Case Studies
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesPreview
