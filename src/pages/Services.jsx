import { Link } from 'react-router-dom'
import {
  Search, ShieldCheck, Eye, Clock, Truck, FileCheck,
  BarChart3, Package, ArrowRight, CheckCircle2, Globe,
  Factory, ClipboardCheck, Layers, PenTool, Users
} from 'lucide-react'
import CTABanner from '../components/CTABanner'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Matching',
    desc: 'We identify qualified suppliers from our verified network of 3,000+ factories, matching them to your specific product requirements, quality standards, and budget.',
    features: ['Access to 3,000+ pre-screened factories', 'Category-specific supplier matching', 'Competitive quote comparison from multiple suppliers', 'Market intelligence and pricing benchmarking'],
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification & Audits',
    desc: 'On-site factory audits to verify business licenses, production capabilities, quality management systems, and compliance with international standards.',
    features: ['Business license and registration verification', 'Production capacity assessment', 'Quality management system review (ISO, BSCI, SA8000)', 'Worker conditions and compliance check', 'Financial stability assessment'],
  },
  {
    icon: Eye,
    title: 'Quality Inspection',
    desc: 'Comprehensive inspection services at every stage of production using internationally recognized AQL standards to catch defects before they ship.',
    features: ['Pre-production material inspection', 'During-production (DUPRO) inspection', 'Pre-shipment inspection (PSI)', 'Loading supervision', 'Detailed inspection reports with photos'],
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'Regular monitoring and milestone tracking throughout the manufacturing process to ensure your order stays on schedule and meets specifications.',
    features: ['Weekly production status reports', 'Milestone-based progress tracking', 'Issue escalation and resolution', 'Timeline management and delay prevention'],
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    desc: 'End-to-end logistics management from the factory floor to your warehouse, including freight forwarding, customs documentation, and delivery coordination.',
    features: ['Sea, air, and rail freight options', 'Customs clearance and documentation', 'Consolidation and warehousing', 'Door-to-door delivery coordination', 'Insurance and cargo protection'],
  },
  {
    icon: FileCheck,
    title: 'Sample Management',
    desc: 'We coordinate product samples, document specifications in detail, and manage revisions until the final product meets your exact requirements.',
    features: ['Sample coordination with multiple suppliers', 'Specification documentation and comparison', 'Revision management and approval tracking', 'Pre-production sample verification'],
  },
  {
    icon: PenTool,
    title: 'Product Development',
    desc: 'From concept to production, we help develop new products including design optimization, material selection, prototyping, and manufacturing feasibility analysis.',
    features: ['Design for manufacturing (DFM) review', 'Material and component sourcing', 'Prototype development and testing', 'Packaging design and sourcing'],
  },
  {
    icon: BarChart3,
    title: 'Cost Optimization',
    desc: 'We analyze your supply chain to identify cost-saving opportunities without compromising quality, from material alternatives to manufacturing process improvements.',
    features: ['Bill of materials (BOM) cost analysis', 'Alternative material evaluation', 'Manufacturing process optimization', 'Volume pricing negotiation'],
  },
]

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0F172A] to-[#1B4D8E] py-20 text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm text-blue-200 font-medium mb-4">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">End-to-End China Sourcing Services</h1>
          <p className="text-lg text-gray-300 max-w-[600px] mx-auto">
            From initial supplier identification to final delivery, we manage every step of your China sourcing journey with transparency and precision.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map(s => (
              <div key={s.title} className="p-7 rounded-xl border border-gray-200 hover:border-[#1B4D8E]/30 hover:shadow-lg transition-all bg-white">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 bg-[#1B4D8E]/10 rounded-lg flex items-center justify-center shrink-0">
                    <s.icon className="w-6 h-6 text-[#1B4D8E]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0F172A] mb-2">{s.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
                <ul className="space-y-2.5 ml-16">
                  {s.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-3">How We Work</h2>
            <p className="text-lg text-gray-500 max-w-[600px] mx-auto">A structured, transparent approach to sourcing</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Consultation', desc: 'We discuss your product requirements, quality standards, budget, and timeline.' },
              { step: '2', title: 'Sourcing', desc: 'We identify and verify suppliers, collect samples, and present competitive quotes.' },
              { step: '3', title: 'Production', desc: 'We manage orders, monitor production, and conduct quality inspections.' },
              { step: '4', title: 'Delivery', desc: 'We coordinate shipping, customs, and ensure products arrive at your destination.' },
            ].map(item => (
              <div key={item.step} className="text-center p-6 rounded-xl bg-white border border-gray-200">
                <div className="w-12 h-12 bg-[#F59E0B] text-white rounded-full flex items-center justify-center text-lg font-extrabold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-base font-bold text-[#0F172A] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-3">Industries We Serve</h2>
            <p className="text-lg text-gray-500 max-w-[600px] mx-auto">Deep expertise across major manufacturing sectors</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Consumer Electronics', 'Home & Garden', 'Fashion & Textiles', 'Automotive Parts', 'Beauty & Personal Care', 'Toys & Games', 'Industrial Equipment', 'Promotional Products'].map(ind => (
              <div key={ind} className="p-5 rounded-lg bg-[#F8FAFC] border border-gray-100 text-center">
                <span className="text-sm font-semibold text-[#0F172A]">{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Need a Custom Sourcing Solution?" subtitle="Let us know your specific requirements and we will tailor our services to fit your business needs." />
    </div>
  )
}
