import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Shield,
  Clock,
  DollarSign,
} from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    title: 'Electronics Manufacturer for US Retailer',
    industry: 'Electronics',
    client: 'US-based consumer electronics retailer',
    challenge: 'A US retailer needed a reliable manufacturer for a new line of consumer electronics. They had previously experienced quality issues and delivery delays with their existing supplier, and needed a partner who could meet strict quality standards and tight deadlines.',
    solution: 'We identified three qualified factories in Shenzhen through our supplier database and industry network. We conducted on-site audits of each facility, evaluating production capacity, quality management systems, and previous client references. After presenting a detailed comparison, the client selected the best-fit manufacturer. We then managed the entire production process, including sample coordination, production monitoring, and pre-shipment inspections.',
    result: 'Delivered 50,000 units on schedule with a defect rate below 0.5%. The client established a long-term partnership with the manufacturer and has since placed three additional orders.',
    metrics: [
      { icon: TrendingUp, label: 'Defect Rate', value: '< 0.5%' },
      { icon: Clock, label: 'On-Time Delivery', value: '100%' },
      { icon: DollarSign, label: 'Cost Savings', value: '18%' },
    ],
  },
  {
    id: 2,
    title: 'Apparel Sourcing for European Fashion Brand',
    industry: 'Textiles & Apparel',
    client: 'European fashion brand',
    challenge: 'A European fashion brand wanted to diversify its supply chain by adding a cost-effective Chinese manufacturer. They needed a factory that could produce high-quality garments while meeting EU compliance standards and sustainability requirements.',
    solution: 'We sourced factories in Guangzhou and Dongguan, focusing on those with experience in European markets and relevant certifications. We verified compliance with EU textile standards, coordinated sample production and approval, and managed the transition from their existing supplier. Our team handled all communication, quality control, and logistics coordination.',
    result: 'Reduced production costs by 25% while maintaining quality standards. The brand successfully launched its new collection on time and has continued to work with the manufacturer for subsequent seasons.',
    metrics: [
      { icon: TrendingUp, label: 'Cost Reduction', value: '25%' },
      { icon: Shield, label: 'EU Compliance', value: '100%' },
      { icon: Clock, label: 'Launch On Time', value: 'Yes' },
    ],
  },
  {
    id: 3,
    title: 'Industrial Parts for Australian Distributor',
    industry: 'Industrial & Machinery',
    client: 'Australian industrial parts distributor',
    challenge: 'An Australian company needed custom-machined parts with tight tolerances and consistent quality. Their previous supplier had inconsistent quality and poor communication, leading to production delays and customer complaints.',
    solution: 'We found a specialized CNC manufacturer in Jiangsu province with ISO 9001 certification and experience in precision machining. We implemented a rigorous quality control protocol including first-article inspection, during-production checks, and final inspection before shipment. We also established a clear communication protocol with regular progress updates.',
    result: 'Established a long-term partnership with zero quality complaints over 18 months. The distributor has since expanded their product range through our sourcing services.',
    metrics: [
      { icon: TrendingUp, label: 'Quality Complaints', value: '0 in 18 months' },
      { icon: Shield, label: 'ISO Certified', value: '9001' },
      { icon: DollarSign, label: 'Repeat Orders', value: '6+' },
    ],
  },
  {
    id: 4,
    title: 'Packaging Solutions for UK E-commerce Brand',
    industry: 'Packaging & Printing',
    client: 'UK-based e-commerce brand',
    challenge: 'A growing e-commerce brand needed custom packaging that was both cost-effective and environmentally friendly. They struggled to find a supplier who could meet their sustainability requirements while keeping costs competitive.',
    solution: 'We identified a packaging manufacturer in Zhejiang with FSC certification and experience in sustainable packaging. We coordinated sample development, tested multiple material options, and negotiated pricing for a large initial order. Our team managed the entire process from design coordination to final delivery.',
    result: 'Delivered custom eco-friendly packaging at 20% below the client\'s previous costs. The packaging received positive feedback from the client\'s customers and supported their sustainability marketing.',
    metrics: [
      { icon: TrendingUp, label: 'Cost Savings', value: '20%' },
      { icon: Shield, label: 'FSC Certified', value: 'Yes' },
      { icon: Clock, label: 'Lead Time', value: '4 weeks' },
    ],
  },
  {
    id: 5,
    title: 'Toy Manufacturing for Canadian Retailer',
    industry: 'Toys & Gifts',
    client: 'Canadian toy retailer',
    challenge: 'A Canadian retailer needed a reliable toy manufacturer for the holiday season. Safety compliance was critical, and the timeline was tight with only 12 weeks until the shipping deadline.',
    solution: 'We quickly identified a toy manufacturer in Shantou with ICTI certification and experience in North American markets. We expedited the sample process, coordinated safety testing, and implemented an accelerated production schedule with daily progress monitoring. We also arranged expedited shipping to meet the deadline.',
    result: 'All products passed safety testing and were delivered on time for the holiday season. The retailer reported strong sales and has since placed orders for the following year.',
    metrics: [
      { icon: TrendingUp, label: 'Safety Compliance', value: '100%' },
      { icon: Clock, label: 'On-Time Delivery', value: '100%' },
      { icon: DollarSign, label: 'Holiday Sales', value: 'Strong' },
    ],
  },
  {
    id: 6,
    title: 'Health & Beauty Products for US Startup',
    industry: 'Health & Beauty',
    client: 'US-based beauty startup',
    challenge: 'A new beauty brand needed a manufacturer for their skincare line. They required a factory with GMP certification, experience in private label production, and the ability to handle small initial order quantities.',
    solution: 'We sourced manufacturers in Guangzhou with GMP certification and private label experience. We coordinated formula development, packaging design, and sample production. Our team managed the regulatory compliance process and ensured all products met FDA requirements for the US market.',
    result: 'Successfully launched the product line with an initial order of 5,000 units. The startup has since scaled to monthly orders and expanded their product range through our sourcing services.',
    metrics: [
      { icon: TrendingUp, label: 'Initial Order', value: '5,000 units' },
      { icon: Shield, label: 'GMP Certified', value: 'Yes' },
      { icon: DollarSign, label: 'Product Range', value: 'Expanded' },
    ],
  },
]

export default function CaseStudiesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Case Studies</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Real results from real sourcing projects. See how we have helped businesses around the world source products from China successfully.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-20">
            {caseStudies.map((cs, i) => (
              <div
                key={cs.id}
                className="border border-slate-200 rounded-2xl overflow-hidden"
              >
                <div className="p-6 lg:p-10">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                      {cs.industry}
                    </span>
                    <span className="text-sm text-slate-500">{cs.client}</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">{cs.title}</h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Challenge</h3>
                      <p className="text-slate-700 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Solution</h3>
                      <p className="text-slate-700 leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Result</h3>
                      <p className="text-slate-700 leading-relaxed">{cs.result}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
                    {cs.metrics.map((m, mi) => (
                      <div key={mi} className="text-center">
                        <m.icon className="w-5 h-5 text-blue-700 mx-auto mb-2" />
                        <div className="text-lg font-bold text-slate-900">{m.value}</div>
                        <div className="text-xs text-slate-500">{m.label}</div>
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
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Want Results Like These?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Tell us about your sourcing needs and we will find the right supplier for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-700 text-white text-base font-semibold rounded-lg hover:bg-blue-800 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
