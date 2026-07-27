import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Clock, DollarSign } from 'lucide-react'

const caseStudies = [
  {
    title: 'LED Lighting Manufacturer',
    client: 'US Retail Chain',
    category: 'Electronics',
    description: 'Sourced and quality-controlled 50,000 LED panel lights for a major US retail chain, reducing costs by 35% while maintaining UL certification standards.',
    results: [
      { icon: DollarSign, value: '35%', label: 'Cost Reduction' },
      { icon: TrendingUp, value: '50K', label: 'Units Delivered' },
      { icon: Clock, value: '45 days', label: 'Lead Time' },
    ],
    image: 'data-strk-img="[case-study-1-title] [case-study-1-category]" data-strk-img-ratio="16x9" data-strk-img-width="600"',
  },
  {
    title: 'Custom Furniture Line',
    client: 'European Home Brand',
    category: 'Home & Garden',
    description: 'Developed and manufactured a complete furniture collection for a European home brand, including prototype development, material sourcing, and production management.',
    results: [
      { icon: DollarSign, value: '40%', label: 'Cost Savings' },
      { icon: TrendingUp, value: '200+', label: 'Product SKUs' },
      { icon: Clock, value: '60 days', label: 'Development' },
    ],
    image: 'data-strk-img="[case-study-2-title] [case-study-2-category]" data-strk-img-ratio="16x9" data-strk-img-width="600"',
  },
  {
    title: 'Workwear Collection',
    client: 'Australian Safety Company',
    category: 'Apparel',
    description: 'Sourced high-visibility workwear and safety equipment for an Australian industrial safety company, ensuring compliance with local safety standards.',
    results: [
      { icon: DollarSign, value: '30%', label: 'Cost Reduction' },
      { icon: TrendingUp, value: '10K+', label: 'Units/Month' },
      { icon: Clock, value: '30 days', label: 'First Order' },
    ],
    image: 'data-strk-img="[case-study-3-title] [case-study-3-category]" data-strk-img-ratio="16x9" data-strk-img-width="600"',
  },
]

export default function CaseStudies() {
  return (
    <section className="section-padding bg-gray-50" id="case-studies">
      <div className="container-custom">
        <div className="section-title">
          <h2>Success Stories</h2>
          <p>
            See how we've helped businesses worldwide source quality products 
            from China with confidence.
          </p>
        </div>

        <div className="grid-3">
          {caseStudies.map((study, index) => (
            <div
              key={study.title}
              className="card overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"
                  {...{[study.image.split('=')[0]]: study.image.split('=')[1].replace(/"/g, '')}}
                />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 bg-white/90 text-sm font-medium text-primary rounded-full">
                    {study.category}
                  </span>
                </div>
              </div>

              <div className="card-padding">
                <h3 className="heading-4 text-foreground mb-2" id={`case-study-${index + 1}-title`}>
                  {study.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{study.client}</p>
                <p className="text-muted-foreground mb-6">{study.description}</p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.results.map((result) => (
                    <div key={result.label} className="text-center">
                      <result.icon className="w-5 h-5 text-accent mx-auto mb-2" />
                      <div className="text-xl font-bold text-foreground">{result.value}</div>
                      <div className="text-xs text-muted-foreground">{result.label}</div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Read full case study
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/case-studies" className="btn-primary text-lg px-8 py-4">
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  )
}
