import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Clock,
  DollarSign,
  CheckCircle2,
  Globe,
  Phone,
} from 'lucide-react'

const caseStudies = [
  {
    company: 'HomeStyle Retail',
    country: 'United States',
    industry: 'Home & Garden',
    challenge: 'Needed to find a reliable furniture manufacturer who could produce high-quality products at competitive prices while maintaining consistent quality across large orders.',
    solution: 'We conducted extensive supplier research, performed on-site factory audits, and shortlisted 4 manufacturers. We then managed sample development, negotiated pricing, and implemented rigorous QC protocols.',
    results: [
      '30% reduction in product costs',
      '99.5% quality acceptance rate',
      'On-time delivery for all 12 orders',
      'Long-term partnership established',
    ],
    quote: 'SSourcing China helped us find a reliable furniture manufacturer that reduced our costs by 30% while maintaining quality standards. Their factory audit saved us from a potential disaster with another supplier we were considering.',
    stats: [
      { icon: TrendingUp, label: 'Cost Savings', value: '30%' },
      { icon: Clock, label: 'Lead Time', value: '45 days' },
      { icon: DollarSign, label: 'Annual Volume', value: '$1.2M' },
    ],
    rating: 5,
    timeline: '6 months',
  },
  {
    company: 'TechGear Europe',
    country: 'Germany',
    industry: 'Electronics',
    challenge: 'Required strict quality control for electronic components and needed a partner who understood European compliance standards and certifications.',
    solution: 'We identified suppliers with relevant certifications (CE, RoHS), conducted detailed capability assessments, and implemented multi-stage QC inspections including functional testing.',
    results: [
      'Zero defects in 10,000 unit shipment',
      'Full CE and RoHS compliance achieved',
      '40% faster time-to-market',
      'Certification documentation handled',
    ],
    quote: 'The QC process was incredibly thorough. We received 10,000 units with zero defects — something we never achieved with other sourcing agents. They also handled all the CE certification paperwork seamlessly.',
    stats: [
      { icon: TrendingUp, label: 'Defect Rate', value: '0%' },
      { icon: Clock, label: 'Production', value: '60 days' },
      { icon: DollarSign, label: 'Order Value', value: '$180K' },
    ],
    rating: 5,
    timeline: '4 months',
  },
  {
    company: 'GreenLife Imports',
    country: 'Australia',
    industry: 'Eco-Friendly Products',
    challenge: 'Wanted to launch an eco-friendly product line but struggled to find manufacturers who could meet sustainability standards and provide proper certifications.',
    solution: 'We sourced manufacturers specializing in sustainable materials, verified their environmental certifications, and helped develop products that met both quality and sustainability requirements.',
    results: [
      'Successfully launched eco-product line',
      'All sustainability certifications obtained',
      'Products meet Australian standards',
      'Supply chain fully documented',
    ],
    quote: 'They guided us through the entire process of launching our eco-friendly product line in China. From sourcing sustainable materials to ensuring compliance with Australian regulations — exceptional service from start to finish.',
    stats: [
      { icon: TrendingUp, label: 'Time to Market', value: '3 months' },
      { icon: Clock, label: 'Certification', value: 'Complete' },
      { icon: DollarSign, label: 'First Order', value: '$95K' },
    ],
    rating: 5,
    timeline: '5 months',
  },
  {
    company: 'Fashion Forward Ltd',
    country: 'United Kingdom',
    industry: 'Apparel & Fashion',
    challenge: 'Needed to source high-quality custom apparel with specific fabric requirements and branding, while managing small batch production runs.',
    solution: 'We found manufacturers experienced in small-batch custom production, managed sample iterations, and implemented quality checks at every stage from fabric sourcing to final packaging.',
    results: [
      'Successful small-batch production',
      'Consistent quality across orders',
      'Custom branding and packaging',
      'Flexible order quantities',
    ],
    quote: 'Finding manufacturers willing to work with smaller quantities was our biggest challenge. SSourcing China found us three excellent options and managed the entire process professionally. We now have a reliable supply chain.',
    stats: [
      { icon: TrendingUp, label: 'Min Order', value: '500 pcs' },
      { icon: Clock, label: 'Lead Time', value: '30 days' },
      { icon: DollarSign, label: 'Order Value', value: '$45K' },
    ],
    rating: 5,
    timeline: '3 months',
  },
  {
    company: 'BuildRight Construction',
    country: 'Canada',
    industry: 'Industrial & Construction',
    challenge: 'Required industrial-grade hardware and tools with specific certifications for the Canadian market, with strict delivery timelines for construction projects.',
    solution: 'We sourced manufacturers with relevant certifications, conducted factory audits focusing on production capacity, and implemented expedited production schedules with milestone tracking.',
    results: [
      'All products certified for Canadian market',
      'Delivered 2 weeks ahead of schedule',
      '25% cost savings vs. local sourcing',
      'Ongoing supply agreement signed',
    ],
    quote: 'The team understood our tight timelines and found suppliers who could deliver quality industrial products on schedule. The cost savings were significant, and the quality has been consistently excellent.',
    stats: [
      { icon: TrendingUp, label: 'Cost Savings', value: '25%' },
      { icon: Clock, label: 'Delivery', value: 'Ahead of schedule' },
      { icon: DollarSign, label: 'Annual Volume', value: '$800K' },
    ],
    rating: 5,
    timeline: '8 months',
  },
  {
    company: 'Wellness Direct',
    country: 'New Zealand',
    industry: 'Health & Beauty',
    challenge: 'Wanted to create a private label skincare line but had no experience sourcing from China and was concerned about quality and regulatory compliance.',
    solution: 'We identified GMP-certified manufacturers, managed formulation development, handled regulatory documentation, and implemented comprehensive QC including lab testing.',
    results: [
      'Private label skincare line launched',
      'GMP and ISO certifications verified',
      'All products meet NZ regulations',
      'Packaging and labeling complete',
    ],
    quote: 'As a first-time importer from China, we had many concerns. The SSourcing team walked us through every step, from finding the right manufacturer to ensuring all regulatory requirements were met. Our skincare line launched successfully.',
    stats: [
      { icon: TrendingUp, label: 'Products', value: '8 SKUs' },
      { icon: Clock, label: 'Timeline', value: '4 months' },
      { icon: DollarSign, label: 'Investment', value: '$65K' },
    ],
    rating: 5,
    timeline: '4 months',
  },
]

const CaseStudies = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-primary-dark pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white/90 text-sm mb-6">
            Success Stories
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Case Studies
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Real results from real businesses. See how we've helped companies worldwide
            succeed with China sourcing.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-border overflow-hidden"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-primary to-primary-light p-8 md:p-12">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-white text-sm">
                      {study.industry}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-white text-sm">
                      {study.country}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 bg-secondary rounded-full text-white text-sm font-medium">
                      {study.timeline}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {study.company}
                  </h2>
                  <div className="flex gap-1">
                    {[...Array(study.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-secondary fill-secondary" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {/* Challenge */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                        <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center">
                          <span className="text-red-500 text-sm font-bold">?</span>
                        </div>
                        Challenge
                      </h3>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                        <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                        </div>
                        Solution
                      </h3>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-muted rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Key Results
                    </h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {study.stats.map((stat, idx) => {
                      const StatIcon = stat.icon
                      return (
                        <div key={idx} className="text-center p-4 bg-primary/5 rounded-xl">
                          <StatIcon className="h-5 w-5 text-primary mx-auto mb-2" />
                          <div className="text-2xl font-bold text-primary">{stat.value}</div>
                          <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Quote */}
                  <div className="bg-primary/5 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <Quote className="h-8 w-8 text-primary/20 flex-shrink-0" />
                      <div>
                        <p className="text-foreground italic mb-4">
                          "{study.quote}"
                        </p>
                        <p className="text-sm font-medium text-primary">
                          — {study.company}, {study.country}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses who have successfully sourced products from China
            with our help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-dark transition-colors group"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+8613800000000"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
