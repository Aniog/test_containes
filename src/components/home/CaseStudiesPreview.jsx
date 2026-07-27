import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, DollarSign, Clock } from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    title: 'LED Lighting Manufacturer',
    client: 'US Retail Chain',
    category: 'Electronics',
    imageId: 'case-study-led-lighting',
    imageRatio: '16x9',
    results: [
      { icon: DollarSign, value: '35%', label: 'Cost Reduction' },
      { icon: TrendingUp, value: '99%', label: 'Quality Rate' },
      { icon: Clock, value: '15 days', label: 'Lead Time' },
    ],
    description: 'Sourced 50,000 LED panels for a major US retail chain with consistent quality and competitive pricing.',
  },
  {
    id: 2,
    title: 'Home Furniture Collection',
    client: 'European E-commerce',
    category: 'Furniture',
    imageId: 'case-study-furniture',
    imageRatio: '16x9',
    results: [
      { icon: DollarSign, value: '40%', label: 'Cost Savings' },
      { icon: TrendingUp, value: '100%', label: 'On-time Delivery' },
      { icon: Clock, value: '30 days', label: 'Production' },
    ],
    description: 'Developed and produced a complete furniture line with custom designs for European market.',
  },
  {
    id: 3,
    title: 'Custom Packaging Solutions',
    client: 'Australian Brand',
    category: 'Packaging',
    imageId: 'case-study-packaging',
    imageRatio: '16x9',
    results: [
      { icon: DollarSign, value: '25%', label: 'Cost Reduction' },
      { icon: TrendingUp, value: '98%', label: 'Quality Rate' },
      { icon: Clock, value: '10 days', label: 'Sampling' },
    ],
    description: 'Created custom packaging solutions with eco-friendly materials for an Australian skincare brand.',
  },
]

export default function CaseStudiesPreview() {
  return (
    <section className="section bg-gray-50" id="case-studies">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Success Stories</h2>
          <p className="section-subtitle">
            Real results from our sourcing partnerships
          </p>
        </div>

        {/* Case studies grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div 
                className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative"
                data-strk-bg-id={study.imageId}
                data-strk-bg={`[case-studies-title] [case-study-${study.id}-title]`}
                data-strk-bg-ratio={study.imageRatio}
                data-strk-bg-width="600"
              >
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-xs px-3 py-1 rounded-full">
                    {study.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2" id={`case-study-${study.id}-title`}>
                  {study.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{study.client}</p>
                <p className="text-gray-600 text-sm mb-6">
                  {study.description}
                </p>
                
                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.results.map((result) => (
                    <div key={result.label} className="text-center">
                      <div className="flex items-center justify-center gap-1 text-primary mb-1">
                        <result.icon className="w-4 h-4" />
                        <span className="font-bold text-sm">{result.value}</span>
                      </div>
                      <span className="text-xs text-gray-500">{result.label}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/case-studies"
                  className="text-primary hover:text-primary-dark text-sm font-medium inline-flex items-center gap-1"
                >
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Hidden element for interpolation */}
        <h2 id="case-studies-title" className="sr-only">Success Stories</h2>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/case-studies"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
          >
            View All Case Studies
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
