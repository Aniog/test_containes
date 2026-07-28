import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Clock,
  DollarSign,
} from 'lucide-react'

const caseStudies = [
  {
    company: 'HomeStyle Retail (USA)',
    industry: 'Home & Garden',
    result: '30% Cost Reduction',
    quote: 'SSourcing China helped us find a reliable furniture manufacturer that reduced our costs by 30% while maintaining quality standards. Their factory audit saved us from a potential disaster.',
    stats: [
      { icon: TrendingUp, label: 'Cost Savings', value: '30%' },
      { icon: Clock, label: 'Lead Time', value: '45 days' },
      { icon: DollarSign, label: 'Order Value', value: '$250K' },
    ],
    rating: 5,
  },
  {
    company: 'TechGear Europe (Germany)',
    industry: 'Electronics',
    result: 'Zero Defects',
    quote: 'The QC process was incredibly thorough. We received 10,000 units with zero defects — something we never achieved with other sourcing agents. Highly recommended.',
    stats: [
      { icon: TrendingUp, label: 'Defect Rate', value: '0%' },
      { icon: Clock, label: 'Production', value: '60 days' },
      { icon: DollarSign, label: 'Order Value', value: '$180K' },
    ],
    rating: 5,
  },
  {
    company: 'GreenLife Imports (Australia)',
    industry: 'Eco Products',
    result: 'Successful Launch',
    quote: 'They guided us through the entire process of launching our eco-friendly product line in China. From sourcing sustainable materials to ensuring compliance — exceptional service.',
    stats: [
      { icon: TrendingUp, label: 'Market Ready', value: '3 months' },
      { icon: Clock, label: 'Certification', value: 'Complete' },
      { icon: DollarSign, label: 'First Order', value: '$95K' },
    ],
    rating: 5,
  },
]

const CaseStudiesPreview = () => {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white/90 text-sm font-medium mb-4">
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-white/80">
            Real results from real businesses. See how we've helped companies worldwide
            succeed with China sourcing.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/15 transition-colors"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(study.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-secondary fill-secondary" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-white/10" />
                <p className="text-white/90 text-sm leading-relaxed pl-6">
                  "{study.quote}"
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {study.stats.map((stat, idx) => {
                  const StatIcon = stat.icon
                  return (
                    <div key={idx} className="text-center">
                      <div className="text-secondary font-bold text-lg">
                        {stat.value}
                      </div>
                      <div className="text-white/60 text-xs mt-1">
                        {stat.label}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Company Info */}
              <div className="border-t border-white/10 pt-4">
                <h4 className="text-white font-semibold">{study.company}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-white/60 text-sm">{study.industry}</span>
                  <span className="text-white/40">•</span>
                  <span className="text-secondary text-sm font-medium">{study.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/case-studies"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors group"
          >
            View All Case Studies
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesPreview
