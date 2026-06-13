import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, TrendingUp, DollarSign, Clock } from 'lucide-react'

const studies = [
  {
    title: 'Automotive Parts Sourcing for German Distributor',
    client: 'AutoParts GmbH &mdash; Germany',
    challenge: 'Our client was importing auto parts from multiple Chinese suppliers with a 12% defect rate. Late shipments and inconsistent quality were damaging their reputation with European mechanics.',
    solution: 'We conducted comprehensive factory audits on 18 potential suppliers, selected 5 qualified manufacturers, implemented a multi-stage QC protocol including raw material testing, in-process inspection, and pre-shipment inspection.',
    result: 'Defect rate reduced from 12% to 0.8%, saving the client approximately $180,000 annually in returns and replacements. Lead times reduced by 35%.',
    metrics: [
      { icon: TrendingUp, label: 'Defect Rate', value: '12% to 0.8%' },
      { icon: DollarSign, label: 'Annual Savings', value: '$180K' },
      { icon: Clock, label: 'Lead Time', value: '-35%' },
    ],
    tags: ['Automotive', 'Quality Control'],
  },
  {
    title: 'Consumer Electronics for US E-commerce Brand',
    client: 'BrightLife Inc. &mdash; United States',
    challenge: 'A fast-growing e-commerce brand needed to scale from 2 SKUs to a full product catalog of 45+ items. They lacked the team in China to manage supplier relationships and quality control across multiple factories.',
    solution: 'We identified and vetted 12 manufacturers across Shenzhen and Dongguan, negotiated pricing, coordinated sample development, and set up a production monitoring system with weekly reports.',
    result: 'Scaled from 2 to 45 SKUs in 18 months. Average product cost reduced by 22% through strategic negotiation. Zero quality-related returns in the last 6 months.',
    metrics: [
      { icon: TrendingUp, label: 'SKU Growth', value: '2 to 45' },
      { icon: DollarSign, label: 'Cost Reduction', value: '-22%' },
      { icon: Star, label: 'Returns', value: 'Zero (6 mo)' },
    ],
    tags: ['Electronics', 'E-commerce'],
  },
  {
    title: 'Home Textiles for European Retail Chain',
    client: 'HomeStyle Retail &mdash; France',
    challenge: 'A European retail chain needed to diversify sourcing away from a single supplier. They required factories capable of producing high-volume, consistent-quality home textile products across multiple categories.',
    solution: 'We identified textile clusters in Zhejiang and Jiangsu, audited 28 factories, shortlisted 8, and facilitated sample development and trial orders with 5 selected partners.',
    result: 'Full product line launched in 6 weeks from project start. Secured 15-18% cost savings compared to previous supplier. Established relationships with 5 reliable textile manufacturers.',
    metrics: [
      { icon: Clock, label: 'Time to Launch', value: '6 Weeks' },
      { icon: DollarSign, label: 'Cost Savings', value: '15-18%' },
      { icon: TrendingUp, label: 'Factories', value: '5 Partners' },
    ],
    tags: ['Textiles', 'Retail'],
  },
  {
    title: 'Medical Device Components for Healthcare Company',
    client: 'MediTech Global &mdash; United Kingdom',
    challenge: 'A medical device company needed specialized precision components manufactured to strict ISO 13485 standards. They had been burned by non-compliant suppliers in the past.',
    solution: 'We identified factories with medical device certifications, conducted rigorous audits focused on clean room standards and quality documentation, and facilitated the quality agreement process.',
    result: 'Successfully sourced 3 certified medical-grade suppliers. All components passed first article inspection. Client expanded from 5 to 20 component types within 12 months.',
    metrics: [
      { icon: Star, label: 'Certified Suppliers', value: '3 Found' },
      { icon: TrendingUp, label: 'Component Types', value: '5 to 20' },
      { icon: DollarSign, label: 'Cost vs EU', value: '-40%' },
    ],
    tags: ['Medical', 'Precision Parts'],
  },
  {
    title: 'Consumer Electronics Accessories for Australian Distributor',
    client: 'TechDist AU &mdash; Australia',
    challenge: 'An Australian distributor was struggling with long shipping times and communication delays from their Chinese suppliers. They needed a local China team to manage daily operations.',
    solution: 'We set up a dedicated sourcing desk for the client, handling daily communication with 8 suppliers, managing production schedules, and consolidating shipments for optimal freight costs.',
    result: 'Order fulfillment time reduced from 14 weeks to 6 weeks. Shipping costs cut by 30% through consolidation. Client expanded product range by 60%.',
    metrics: [
      { icon: Clock, label: 'Fulfillment', value: '14 to 6 Weeks' },
      { icon: DollarSign, label: 'Shipping Savings', value: '-30%' },
      { icon: TrendingUp, label: 'Product Range', value: '+60%' },
    ],
    tags: ['Electronics', 'Logistics'],
  },
  {
    title: 'Industrial Machinery Components for Canadian Manufacturer',
    client: 'NorthCan Manufacturing &mdash; Canada',
    challenge: 'A Canadian heavy equipment manufacturer needed to source specialized cast and machined components. Previous attempts at direct sourcing resulted in quality issues and missed deadlines.',
    solution: 'We conducted a targeted search in Chinas industrial manufacturing hubs, audited 6 foundries, and managed the entire qualification process including first article inspections and production trials.',
    result: 'Established 3 reliable supply partners. Component costs reduced by 35% vs North American suppliers. On-time delivery rate: 98%.',
    metrics: [
      { icon: TrendingUp, label: 'Delivery Rate', value: '98% On Time' },
      { icon: DollarSign, label: 'Cost Reduction', value: '-35%' },
      { icon: Star, label: 'Supply Partners', value: '3 Established' },
    ],
    tags: ['Industrial', 'Machinery'],
  },
]

export default function CaseStudies() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-neutral-900 py-16 md:py-20">
        <div className="container-section">
          <div className="max-w-3xl">
            <p className="text-brand-400 font-semibold text-sm mb-4 uppercase tracking-wide">Case Studies</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Real Results for Real Clients
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              See how we have helped businesses across industries source smarter from China.
            </p>
          </div>
        </div>
      </section>

      {/* Studies */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-section">
          <div className="space-y-10">
            {studies.map((cs, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cs.tags.map((tag, ti) => (
                      <span key={ti} className="text-xs font-medium text-brand-600 bg-brand-50 px-2.5 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-2">{cs.title}</h2>
                  <p className="text-sm text-brand-600 font-medium mb-6" dangerouslySetInnerHTML={{ __html: cs.client }} />

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center text-xs text-red-500 font-bold">!</span>
                        The Challenge
                      </h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 bg-brand-50 rounded-full flex items-center justify-center text-xs text-brand-500 font-bold">S</span>
                        Our Solution
                      </h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center text-xs text-green-500 font-bold">R</span>
                        The Result
                      </h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">{cs.result}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                    {cs.metrics.map((m, mi) => (
                      <div key={mi} className="text-center">
                        <m.icon className="w-5 h-5 text-brand-600 mx-auto mb-1" />
                        <p className="text-lg font-bold text-neutral-900">{m.value}</p>
                        <p className="text-xs text-neutral-500">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-section text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Let Us Write Your Success Story</h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto mb-8">
            Every client and product is unique. Contact us to discuss how we can help with your specific sourcing needs.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-8 py-4">
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}