import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, DollarSign, Clock, Shield } from 'lucide-react'

const caseStudies = [
  {
    id: 'electronics-importer',
    company: 'Electronics Importer - USA',
    industry: 'Consumer Electronics',
    challenge: 'Sourcing LED lighting products with inconsistent quality from multiple suppliers, leading to high defect rates and customer complaints.',
    solution: 'We consolidated suppliers, implemented strict QC protocols, and established a 3-stage inspection process from raw materials to finished goods.',
    results: [
      { metric: '35%', label: 'Cost Reduction', icon: DollarSign },
      { metric: '98.5%', label: 'Quality Rate', icon: Shield },
      { metric: '14 Days', label: 'Faster Delivery', icon: Clock },
      { metric: '3x', label: 'Order Growth', icon: TrendingUp },
    ],
    testimonial: 'SSourcing transformed our supply chain. Their attention to detail and proactive communication made sourcing from China straightforward and reliable.',
    author: 'Michael Chen',
    role: 'Procurement Director',
    image: 'electronics LED lighting products',
  },
  {
    id: 'furniture-retailer',
    company: 'Furniture Retailer - Australia',
    industry: 'Home Furniture',
    challenge: 'Needed to find reliable furniture manufacturers who could meet quality standards while maintaining competitive pricing for the Australian market.',
    solution: 'We identified and vetted 5 top-tier furniture manufacturers, negotiated volume pricing, and established ongoing quality monitoring systems.',
    results: [
      { metric: '42%', label: 'Cost Savings', icon: DollarSign },
      { metric: '99.2%', label: 'On-Time Delivery', icon: Clock },
      { metric: 'Zero', label: 'Major Defects', icon: Shield },
      { metric: '2x', label: 'Product Range', icon: TrendingUp },
    ],
    testimonial: 'The team at SSourcing understood our market requirements perfectly. They found us suppliers that consistently deliver high-quality furniture at competitive prices.',
    author: 'Sarah Thompson',
    role: 'Managing Director',
    image: 'home furniture manufacturing',
  },
  {
    id: 'industrial-equipment',
    company: 'Industrial Equipment Co. - Germany',
    industry: 'Industrial Machinery',
    challenge: 'Required specialized CNC machinery parts with tight tolerances and specific material certifications for the European market.',
    solution: 'We sourced from ISO-certified manufacturers, implemented first-article inspection, and coordinated third-party testing for material certifications.',
    results: [
      { metric: '28%', label: 'Cost Reduction', icon: DollarSign },
      { metric: '100%', label: 'Certification Compliance', icon: Shield },
      { metric: '99.8%', label: 'Precision Rate', icon: TrendingUp },
      { metric: '3 Weeks', label: 'Lead Time Saved', icon: Clock },
    ],
    testimonial: 'Their technical expertise and understanding of European quality standards made them the perfect partner for our precision parts sourcing needs.',
    author: 'Thomas Weber',
    role: 'Engineering Manager',
    image: 'CNC machinery precision parts',
  },
  {
    id: 'promotional-products',
    company: 'Marketing Agency - UK',
    industry: 'Promotional Products',
    challenge: 'Needed fast turnaround on custom branded merchandise for multiple client campaigns with strict brand guidelines and deadlines.',
    solution: 'We established a network of reliable promotional product manufacturers with rapid prototyping capabilities and quality brand reproduction.',
    results: [
      { metric: '45%', label: 'Cost Savings', icon: DollarSign },
      { metric: '5 Days', label: 'Sample Turnaround', icon: Clock },
      { metric: '100%', label: 'Brand Accuracy', icon: Shield },
      { metric: '50+', label: 'Campaigns Supported', icon: TrendingUp },
    ],
    testimonial: 'SSourcing has become our go-to partner for all China sourcing. Their speed, quality, and reliability have helped us win more client business.',
    author: 'James Wilson',
    role: 'Operations Director',
    image: 'promotional products branded merchandise',
  },
]

export default function CaseStudiesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-h1 text-white mb-6">
              Case Studies
            </h1>
            <p className="text-body-lg text-primary-light/90 max-w-3xl mx-auto">
              Real results from real clients. See how we've helped businesses like yours 
              succeed with China sourcing.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-start`}
              >
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative aspect-[4/3] rounded-card overflow-hidden bg-neutral-100">
                    <img
                      data-strk-img-id={`case-${study.id}-img`}
                      data-strk-img={`${study.industry} ${study.company} case study`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={study.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                  <div className="mb-6">
                    <div className="text-small font-semibold text-primary uppercase tracking-wider mb-2">
                      {study.industry}
                    </div>
                    <h2 className="text-h3 text-neutral-900 mb-4">{study.company}</h2>
                  </div>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h3 className="text-h4 text-neutral-900 mb-2">Challenge</h3>
                      <p className="text-body text-neutral-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-h4 text-neutral-900 mb-2">Solution</h3>
                      <p className="text-body text-neutral-600">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {study.results.map((result) => (
                      <div key={result.label} className="bg-neutral-50 rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <result.icon className="h-5 w-5 text-primary" />
                          <span className="text-small font-medium text-neutral-600">{result.label}</span>
                        </div>
                        <div className="text-h4 font-bold text-neutral-900">{result.metric}</div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="bg-primary/5 rounded-card p-6 border-l-4 border-primary">
                    <p className="text-body text-neutral-700 italic mb-4">"{study.testimonial}"</p>
                    <div>
                      <div className="font-semibold text-neutral-900">{study.author}</div>
                      <div className="text-small text-neutral-600">{study.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-h2 text-neutral-900 mb-4">
              Our Track Record
            </h2>
            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
              Numbers that speak to our commitment to client success.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-h2 font-bold text-primary mb-2">500+</div>
              <div className="text-body font-semibold text-neutral-900 mb-1">Clients Served</div>
              <p className="text-small text-neutral-600">Across 50+ countries</p>
            </div>
            <div className="text-center">
              <div className="text-h2 font-bold text-primary mb-2">10,000+</div>
              <div className="text-body font-semibold text-neutral-900 mb-1">Orders Completed</div>
              <p className="text-small text-neutral-600">Successfully delivered</p>
            </div>
            <div className="text-center">
              <div className="text-h2 font-bold text-primary mb-2">$50M+</div>
              <div className="text-body font-semibold text-neutral-900 mb-1">Value Sourced</div>
              <p className="text-small text-neutral-600">Total procurement value</p>
            </div>
            <div className="text-center">
              <div className="text-h2 font-bold text-primary mb-2">98%</div>
              <div className="text-body font-semibold text-neutral-900 mb-1">Client Retention</div>
              <p className="text-small text-neutral-600">Long-term partnerships</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-h2 text-neutral-900 mb-6">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            Join hundreds of businesses that trust SSourcing for their China sourcing needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-button bg-accent px-8 py-4 text-body font-semibold text-white shadow-lg transition-all duration-200 hover:bg-accent-dark hover:shadow-xl"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
