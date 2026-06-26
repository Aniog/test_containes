import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  CheckCircle2,
  TrendingDown,
  TrendingUp,
  Clock,
  DollarSign,
  Star,
  Cpu,
  Shirt,
  Home,
  Car,
  Settings,
} from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    title: 'Reducing Defect Rate for US Electronics Importer',
    client: 'US-based Electronics Retailer',
    category: 'Electronics',
    icon: Cpu,
    challenge: 'A US electronics company was experiencing a 15% defect rate on wireless chargers sourced from China, leading to customer returns and damaged reputation.',
    solution: 'We conducted a comprehensive supplier audit, identified quality control gaps in the production process, and implemented a multi-stage inspection protocol.',
    results: [
      { metric: 'Defect Rate', before: '15%', after: 'Under 2%', icon: TrendingDown },
      { metric: 'Customer Returns', before: '12%', after: 'Under 1%', icon: TrendingDown },
      { metric: 'On-time Delivery', before: '78%', after: '98%', icon: TrendingUp },
    ],
    testimonial: 'SSourcing China transformed our quality control process. The defect rate dropped dramatically, and our customers noticed the difference immediately.',
    author: ' procurement Director, US Electronics Co.',
  },
  {
    id: 2,
    title: 'Cost Reduction for UK Home Goods Retailer',
    client: 'UK Home Goods Chain',
    category: 'Home & Garden',
    icon: Home,
    challenge: 'A UK home goods retailer was paying premium prices for kitchenware and home decor items, with limited ability to negotiate better terms.',
    solution: 'We identified alternative suppliers in different manufacturing regions, negotiated volume discounts, and optimized the product specifications for cost efficiency.',
    results: [
      { metric: 'Product Costs', before: 'Baseline', after: '22% Reduction', icon: DollarSign },
      { metric: 'Supplier Options', before: '1', after: '5 Verified', icon: TrendingUp },
      { metric: 'Lead Time', before: '45 days', after: '32 days', icon: Clock },
    ],
    testimonial: 'The cost savings have been significant for our bottom line. More importantly, we now have multiple reliable suppliers to choose from.',
    author: 'Supply Chain Manager, UK Home Goods',
  },
  {
    id: 3,
    title: 'Lead Time Optimization for German Auto Parts Distributor',
    client: 'German Auto Parts Distributor',
    category: 'Auto Parts',
    icon: Car,
    challenge: 'A German auto parts distributor was facing inconsistent delivery schedules and long lead times affecting their customer commitments.',
    solution: 'We mapped the entire production and shipping process, identified bottlenecks, and implemented a production monitoring system with real-time updates.',
    results: [
      { metric: 'Lead Time', before: '60 days', after: '42 days', icon: Clock },
      { metric: 'On-time Delivery', before: '72%', after: '96%', icon: TrendingUp },
      { metric: 'Stockouts', before: 'Monthly', after: 'Rare', icon: TrendingDown },
    ],
    testimonial: 'The production monitoring service has been invaluable. We now have visibility into our orders and can plan with confidence.',
    author: 'Operations Director, German Auto Parts',
  },
  {
    id: 4,
    title: 'Quality Standardization for Australian Textile Brand',
    client: 'Australian Fashion Brand',
    category: 'Textiles & Apparel',
    icon: Shirt,
    challenge: 'An Australian fashion brand struggled with inconsistent fabric quality and sizing across different production batches.',
    solution: 'We established clear quality standards, implemented fabric testing protocols, and provided detailed inspection checklists for each production run.',
    results: [
      { metric: 'Quality Pass Rate', before: '82%', after: '97%', icon: TrendingUp },
      { metric: 'Sizing Issues', before: '8%', after: 'Under 1%', icon: TrendingDown },
      { metric: 'Customer Complaints', before: '5%', after: '0.5%', icon: TrendingDown },
    ],
    testimonial: 'Consistent quality has been a game-changer for our brand. Our customers trust our products, and returns have dropped significantly.',
    author: 'Product Development Lead, Australian Fashion Brand',
  },
  {
    id: 5,
    title: 'New Product Launch Support for Canadian Industrial Equipment Buyer',
    client: 'Canadian Industrial Equipment Company',
    category: 'Industrial Equipment',
    icon: Settings,
    challenge: 'A Canadian company needed to launch a new line of industrial tools but lacked the manufacturing expertise and supplier network in China.',
    solution: 'We provided end-to-end support from concept to delivery, including supplier identification, prototype development, tooling, and production ramp-up.',
    results: [
      { metric: 'Time to Market', before: '12 months (est.)', after: '8 months', icon: Clock },
      { metric: 'Prototype Iterations', before: '6+', after: '3', icon: TrendingDown },
      { metric: 'First Order Quality', before: 'N/A', after: '99.2% Pass', icon: TrendingUp },
    ],
    testimonial: 'SSourcing China was instrumental in our product launch. Their expertise in industrial equipment manufacturing saved us months of trial and error.',
    author: 'CEO, Canadian Industrial Equipment Co.',
  },
  {
    id: 6,
    title: 'Scaling Production for European Electronics Startup',
    client: 'European Tech Startup',
    category: 'Electronics',
    icon: Cpu,
    challenge: 'A European startup needed to scale production from 100 to 10,000 units per month while maintaining quality and managing costs.',
    solution: 'We helped transition from a small workshop to a larger factory, implemented quality control systems, and managed the scaling process.',
    results: [
      { metric: 'Production Scale', before: '100/month', after: '10,000/month', icon: TrendingUp },
      { metric: 'Unit Cost', before: '$45', after: '$28', icon: DollarSign },
      { metric: 'Defect Rate', before: '5%', after: '0.8%', icon: TrendingDown },
    ],
    testimonial: 'They helped us scale without sacrificing quality. The unit cost reduction made our business model viable.',
    author: 'Founder, European Tech Startup',
  },
]

export default function CaseStudies() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Case Studies
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Real results from real clients. See how we've helped businesses across industries source better from China.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study) => (
              <div key={study.id} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <study.icon className="h-5 w-5" />
                      </div>
                      <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                        {study.category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">{study.title}</h2>
                    <p className="text-sm text-slate-500 mb-6">{study.client}</p>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900 mb-1">The Challenge</h3>
                        <p className="text-sm text-slate-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900 mb-1">Our Solution</h3>
                        <p className="text-sm text-slate-600">{study.solution}</p>
                      </div>
                    </div>

                    <div className="mt-6 rounded-lg bg-slate-50 p-4">
                      <p className="text-sm text-slate-700 italic">"{study.testimonial}"</p>
                      <p className="mt-2 text-xs text-slate-500">— {study.author}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 mb-4">Key Results</h3>
                    <div className="space-y-4">
                      {study.results.map((result) => (
                        <div key={result.metric} className="rounded-lg border border-slate-200 bg-white p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-medium text-slate-500">{result.metric}</span>
                            <result.icon className="h-4 w-4 text-green-600" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-slate-500 line-through">{result.before}</span>
                            <ArrowRight className="h-3 w-3 text-slate-400" />
                            <span className="text-sm font-semibold text-green-600">{result.after}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to write your success story?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Let us help you achieve similar results for your business.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" variant="secondary" className="text-base">
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}