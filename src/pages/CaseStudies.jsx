import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Clock, DollarSign, CheckCircle, Shield, BarChart3, Target, Award, Globe } from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    title: 'US Retailer Reduces Kitchenware Costs by 35%',
    client: 'Mid-size US Home Goods Retailer',
    industry: 'Home & Garden',
    flag: '🇺🇸',
    challenge: 'The client was sourcing kitchenware through trading companies with high markups and inconsistent quality. Lead times were unpredictable and communication was difficult.',
    solution: 'We identified 3 verified factories in Guangdong, negotiated direct factory pricing, established a pre-shipment inspection protocol, and set up weekly production tracking.',
    results: [
      { icon: DollarSign, label: 'Cost Reduction', value: '35%' },
      { icon: Clock, label: 'Lead Time Cut', value: '20 days' },
      { icon: Shield, label: 'Quality Pass Rate', value: '99.2%' },
    ],
    timeline: '6 months',
    products: 'Stainless steel cookware, bakeware, kitchen tools',
  },
  {
    id: 2,
    title: 'European Brand Launches New Product Line',
    client: 'European Consumer Electronics Brand',
    industry: 'Consumer Electronics',
    flag: '🇪🇺',
    challenge: 'The client wanted to launch a new LED product line but lacked experience sourcing electronics from China. They needed a partner to manage prototyping through mass production.',
    solution: 'We managed the entire process from prototype development to first production run of 50,000 units, including supplier selection, tooling oversight, and multi-stage quality inspections.',
    results: [
      { icon: Target, label: 'First Run', value: '50,000 units' },
      { icon: CheckCircle, label: 'Defect Rate', value: '<0.5%' },
      { icon: Clock, label: 'Launched On-Time', value: 'Yes' },
    ],
    timeline: '4 months',
    products: 'LED panel lights, LED drivers, smart controllers',
  },
  {
    id: 3,
    title: 'Australian Importer Solves Quality Issues',
    client: 'Australian Building Materials Distributor',
    industry: 'Building Materials',
    flag: '🇦🇺',
    challenge: 'The client was receiving inconsistent quality from existing suppliers, leading to high return rates and customer complaints. They needed a professional QC partner in China.',
    solution: 'We audited their 3 existing suppliers, identified root causes of quality issues, implemented a structured QC protocol, and stationed inspectors at key production stages.',
    results: [
      { icon: Shield, label: 'Return Rate Drop', value: '90%' },
      { icon: CheckCircle, label: 'Inspection Pass Rate', value: '99.5%' },
      { icon: DollarSign, label: 'Savings Retained', value: '$120K/yr' },
    ],
    timeline: '3 months',
    products: 'Ceramic tiles, bathroom fittings, hardware',
  },
  {
    id: 4,
    title: 'Amazon Seller Builds Reliable Supply Chain',
    client: 'US E-Commerce Seller',
    industry: 'E-Commerce',
    flag: '🇺🇸',
    challenge: 'A growing Amazon seller needed to source multiple product categories from China but lacked the team to manage factory relationships, quality control, and logistics across different suppliers.',
    solution: 'We became their dedicated China sourcing team, managing supplier identification, order placement, quality inspections, and consolidated shipping for their entire product catalog.',
    results: [
      { icon: TrendingUp, label: 'Products Sourced', value: '200+ SKUs' },
      { icon: DollarSign, label: 'Avg. Cost Savings', value: '25%' },
      { icon: Clock, label: 'Restock Time', value: '30% faster' },
    ],
    timeline: 'Ongoing',
    products: 'Home goods, garden tools, fitness equipment, electronics',
  },
  {
    id: 5,
    title: 'Middle East Distributor Sources Industrial Equipment',
    client: 'UAE Industrial Equipment Distributor',
    industry: 'Industrial',
    flag: '🇦🇪',
    challenge: 'The client wanted to import industrial equipment from China but had no local contacts or experience with Chinese manufacturers. Previous attempts through online platforms led to quality issues.',
    solution: 'We identified specialized manufacturers, conducted thorough factory audits, arranged product testing, and negotiated favorable terms including warranty provisions and spare parts supply.',
    results: [
      { icon: Shield, label: 'Factories Verified', value: '8' },
      { icon: DollarSign, label: 'Cost vs. Local', value: '-45%' },
      { icon: Award, label: 'Warranty Period', value: '18 months' },
    ],
    timeline: '5 months',
    products: 'CNC machines, hydraulic equipment, industrial pumps',
  },
  {
    id: 6,
    title: 'Canadian Brand Launches Private Label Products',
    client: 'Canadian Health & Beauty Brand',
    industry: 'Health & Beauty',
    flag: '🇨🇦',
    challenge: 'A Canadian brand wanted to launch private label skincare products manufactured in China but needed guidance on formulation, packaging design, and regulatory compliance.',
    solution: 'We identified certified cosmetic manufacturers, managed the formulation development process, coordinated packaging design and production, and ensured compliance with Canadian regulations.',
    results: [
      { icon: Target, label: 'Products Launched', value: '8 SKUs' },
      { icon: Clock, label: 'Time to Market', value: '4 months' },
      { icon: Globe, label: 'Markets', value: 'Canada + US' },
    ],
    timeline: '4 months',
    products: 'Skincare serums, moisturizers, cleansers, masks',
  },
]

const CaseCard = ({ study }) => (
  <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <div className="p-7">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">{study.industry}</span>
        <span className="text-xs text-neutral-400">{study.timeline}</span>
      </div>
      <h3 className="text-xl font-bold text-neutral-900 mb-2">{study.title}</h3>
      <p className="text-sm text-neutral-500 mb-4">{study.client}</p>

      <div className="space-y-4 mb-5">
        <div>
          <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">Challenge</h4>
          <p className="text-sm text-neutral-600 leading-relaxed">{study.challenge}</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">Solution</h4>
          <p className="text-sm text-neutral-600 leading-relaxed">{study.solution}</p>
        </div>
      </div>

      <div className="border-t border-neutral-100 pt-4 mb-4">
        <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">Results</h4>
        <div className="grid grid-cols-3 gap-3">
          {study.results.map((r) => (
            <div key={r.label} className="text-center">
              <r.icon className="w-5 h-5 text-primary mx-auto mb-1" />
              <p className="text-lg font-bold text-primary">{r.value}</p>
              <p className="text-[11px] text-neutral-500">{r.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-xs text-neutral-400">
        <span className="font-medium">Products:</span> {study.products}
      </div>
    </div>
  </div>
)

export default function CaseStudies() {
  return (
    <div>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Case Studies</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white tracking-tight">Real Results for Real Clients</h1>
          <p className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto">
            See how we have helped businesses around the world solve sourcing challenges and build reliable China supply chains.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((study) => (
              <CaseCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">Want Similar Results?</h2>
          <p className="text-lg text-neutral-500 mb-8">Tell us about your sourcing needs and we will create a tailored plan for your business.</p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4">
            Start Your Sourcing Project <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
