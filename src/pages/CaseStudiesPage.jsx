import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Shield, Clock, DollarSign, CheckCircle, AlertTriangle } from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    industry: 'Electronics',
    title: 'Electronics Manufacturer Saves 22% on Component Costs',
    client: 'US-based electronics company',
    challenge: 'A US-based electronics company needed reliable PCB manufacturers with competitive pricing. Their current supplier had increased prices by 15% and quality had become inconsistent.',
    solution: 'We identified 3 verified PCB manufacturers in Shenzhen and Dongguan, conducted factory audits on each, and negotiated pricing based on volume commitments. We managed the entire sample approval process and set up quality inspection protocols.',
    result: '22% cost reduction compared to previous supplier. 99.2% quality pass rate across 6 production runs. Consistent on-time delivery over 12 months.',
    metrics: [
      { label: 'Cost Savings', value: '22%', icon: DollarSign },
      { label: 'Quality Pass Rate', value: '99.2%', icon: CheckCircle },
      { label: 'On-Time Delivery', value: '100%', icon: Clock },
    ],
  },
  {
    id: 2,
    industry: 'Consumer Goods',
    title: 'Retailer Avoids $150K Loss Through Pre-Shipment Inspection',
    client: 'European retail chain',
    challenge: 'A European retailer ordered 50,000 units of promotional items for a seasonal campaign. They needed quality assurance before shipping but had no local presence in China.',
    solution: 'Our inspection team conducted a pre-shipment inspection at the factory. We found critical defects in 30% of the production batch, including color mismatches, incorrect dimensions, and packaging errors.',
    result: 'The supplier reworked all defective units at their own cost before container loading. The client avoided an estimated $150,000 in potential losses from defective goods reaching their warehouses.',
    metrics: [
      { label: 'Loss Avoided', value: '$150K', icon: DollarSign },
      { label: 'Defects Found', value: '30%', icon: AlertTriangle },
      { label: 'Rework Cost', value: '$0', icon: Shield },
    ],
  },
  {
    id: 3,
    industry: 'Home & Garden',
    title: 'Startup Launches Private Label Product Line from China',
    client: 'UK-based home products startup',
    challenge: 'A UK startup wanted to launch a private label home products line but had no experience sourcing from China. They needed end-to-end support from supplier identification to final delivery.',
    solution: 'We handled everything: identified suppliers for 12 different product categories, managed sample approvals, coordinated production across multiple factories, conducted quality inspections, and arranged consolidated shipping.',
    result: 'Successfully launched 12 SKUs within 4 months. Zero quality complaints from customers. The client has since placed 3 repeat orders.',
    metrics: [
      { label: 'Products Launched', value: '12', icon: TrendingUp },
      { label: 'Time to Market', value: '4 months', icon: Clock },
      { label: 'Quality Complaints', value: '0', icon: Shield },
    ],
  },
  {
    id: 4,
    industry: 'Industrial',
    title: 'Factory Audit Prevents Partnership with Unqualified Supplier',
    client: 'Australian industrial equipment distributor',
    challenge: 'An Australian company was about to place a $200,000 order with a supplier they found online. The supplier claimed to be a manufacturer with ISO certification and large production capacity.',
    solution: 'We conducted an on-site factory audit and discovered the supplier was actually a trading company, not a manufacturer. Their claimed ISO certification was expired, and their actual production capacity was far below what they advertised.',
    result: 'The client avoided a risky partnership and instead worked with a verified manufacturer we recommended. The new supplier delivered on time with consistent quality.',
    metrics: [
      { label: 'Order Value Avoided', value: '$200K', icon: DollarSign },
      { label: 'False Claims Found', value: '3', icon: AlertTriangle },
      { label: 'Verified Alternative', value: 'Yes', icon: CheckCircle },
    ],
  },
  {
    id: 5,
    industry: 'Apparel',
    title: 'Fashion Brand Reduces Defect Rate from 12% to 1.5%',
    client: 'Canadian fashion brand',
    challenge: 'A Canadian fashion brand was experiencing a 12% defect rate with their current garment supplier in China. Issues included stitching problems, color inconsistencies, and sizing errors.',
    solution: 'We conducted a supplier audit, identified the root causes of quality issues, and implemented a structured quality inspection process including during-production and pre-shipment inspections.',
    result: 'Defect rate reduced from 12% to 1.5% within 3 production cycles. The brand saved an estimated $45,000 per season in returns and replacements.',
    metrics: [
      { label: 'Defect Rate Before', value: '12%', icon: AlertTriangle },
      { label: 'Defect Rate After', value: '1.5%', icon: CheckCircle },
      { label: 'Seasonal Savings', value: '$45K', icon: DollarSign },
    ],
  },
  {
    id: 6,
    industry: 'Automotive',
    title: 'Auto Parts Importer Streamlines Supply Chain with Consolidated Shipping',
    client: 'South American auto parts distributor',
    challenge: 'A South American distributor was sourcing auto parts from 8 different suppliers in China, managing separate shipments for each, and paying high shipping costs due to partial container loads.',
    solution: 'We coordinated production schedules across all 8 suppliers, consolidated all goods into a single warehouse, and arranged full container load (FCL) shipping with proper documentation.',
    result: 'Shipping costs reduced by 35%. Delivery time improved by 2 weeks. Simplified customs clearance with single documentation set.',
    metrics: [
      { label: 'Shipping Savings', value: '35%', icon: DollarSign },
      { label: 'Time Saved', value: '2 weeks', icon: Clock },
      { label: 'Suppliers Managed', value: '8', icon: TrendingUp },
    ],
  },
]

export default function CaseStudiesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Real examples of how we have helped buyers source from China successfully. Each case study shows the challenge, our approach, and the measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12`}>
                <div className="lg:w-1/2">
                  <div className="inline-block bg-blue-100 text-primary text-xs font-medium px-2.5 py-1 rounded-full mb-4">
                    {study.industry}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{study.title}</h2>
                  <p className="text-sm text-slate-500 mb-6">Client: {study.client}</p>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Challenge</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Our Approach</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{study.solution}</p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h3 className="font-semibold text-green-800 mb-1">Results</h3>
                      <p className="text-sm text-green-700 leading-relaxed">{study.result}</p>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <h3 className="font-semibold text-slate-900 mb-4">Key Metrics</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {study.metrics.map((metric, mIndex) => (
                        <div key={mIndex} className="bg-white rounded-lg p-4 text-center border border-slate-200">
                          <metric.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                          <div className="text-2xl font-bold text-slate-900">{metric.value}</div>
                          <div className="text-xs text-slate-500 mt-1">{metric.label}</div>
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
      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Want Similar Results for Your Business?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Tell us about your sourcing needs and we will show you how we can help.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-lg">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
