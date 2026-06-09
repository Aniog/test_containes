import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Search, Shield, ClipboardCheck, Package, Truck, Users, Globe, TrendingUp, Award, Clock, Mail, MessageSquare, ChevronRight, Factory, Eye, Zap, Boxes, AlertTriangle, ThumbsUp } from 'lucide-react'

const stats = [
  { icon: Search, label: 'Suppliers Verified', value: '500+' },
  { icon: Shield, label: 'QC Inspections', value: '2,000+' },
  { icon: Truck, label: 'Shipments Managed', value: '3,500+' },
  { icon: Users, label: 'Countries Served', value: '30+' },
]

const services = [
  { icon: Search, title: 'Supplier Identification', desc: 'We search our verified database and industry networks to find manufacturers that match your exact product requirements and quality standards.' },
  { icon: Shield, title: 'Factory Verification', desc: 'On-site factory visits to verify business licenses, production capabilities, quality systems, and management practices before you commit.' },
  { icon: ClipboardCheck, title: 'Quality Inspection', desc: 'Pre-production, in-line, and pre-shipment inspections using AQL standards. Detailed reports with photos sent within 24 hours.' },
  { icon: Clock, title: 'Production Follow-up', desc: 'Regular progress updates during manufacturing. We monitor timelines, resolve issues early, and keep your orders on track.' },
  { icon: Package, title: 'Product Sourcing', desc: 'End-to-end product sourcing from sample approval to mass production. We handle specifications, packaging, and labeling compliance.' },
  { icon: Truck, title: 'Shipping Coordination', desc: 'Complete logistics management including freight forwarding, customs documentation, container loading supervision, and delivery tracking.' },
]

const processSteps = [
  { num: '01', icon: MessageSquare, title: 'Share Requirements', desc: 'Tell us what products you need, target price, quantity, and quality standards.' },
  { num: '02', icon: Search, title: 'Supplier Matching', desc: 'We identify suitable suppliers, request samples, and provide competitive quotes.' },
  { num: '03', icon: Shield, title: 'Factory Verification', desc: 'We verify the factory on-site and arrange samples for your approval.' },
  { num: '04', icon: ClipboardCheck, title: 'Order & QC', desc: 'We place the order, monitor production, and conduct inspections at key stages.' },
  { num: '05', icon: Truck, title: 'Ship & Deliver', desc: 'We arrange logistics, handle customs, and track your shipment to destination.' },
]

const productCategories = [
  { name: 'Electronics & Gadgets', icon: Zap, items: 'LED lights, smart devices, accessories' },
  { name: 'Home & Garden', icon: Boxes, items: 'Furniture, kitchenware, storage' },
  { name: 'Machinery & Parts', icon: Factory, items: 'CNC machines, equipment, tools' },
  { name: 'Textiles & Apparel', icon: Package, items: 'Clothing, bags, fabrics' },
  { name: 'Building Materials', icon: TrendingUp, items: 'Hardware, tiles, steel products' },
  { name: 'Automotive Parts', icon: Truck, items: 'Vehicle parts, e-bikes, accessories' },
]

const problems = [
  { problem: 'Worried about supplier reliability', solution: 'We verify every supplier on-site with a 20-point checklist.' },
  { problem: 'Cannot visit factories in person', solution: 'Our local team conducts audits and inspections on your behalf.' },
  { problem: 'Products do not match samples', solution: 'Multi-stage inspections ensure products meet your specifications.' },
  { problem: 'Production delays and missed deadlines', solution: 'Daily monitoring and weekly reports keep orders on track.' },
  { problem: 'Complex shipping and customs', solution: 'We handle all logistics, documentation, and customs clearance.' },
  { problem: 'Language barriers with suppliers', solution: 'Bilingual team translates specs and negotiates on your behalf.' },
]

const trustPoints = [
  { icon: Award, stat: '12+', label: 'Years in China Sourcing' },
  { icon: Globe, stat: '30+', label: 'Countries Served' },
  { icon: Users, stat: '500+', label: 'Verified Suppliers' },
  { icon: TrendingUp, stat: '98%', label: 'Client Satisfaction' },
  { icon: Eye, stat: '2,000+', label: 'QC Inspections Done' },
  { icon: Truck, stat: '$50M+', label: 'Goods Sourced' },
]

const caseStudies = [
  { title: 'US Retailer Reduces Costs by 35%', industry: 'Home & Garden', desc: 'Identified 3 verified factories, negotiated pricing, and managed QC through 12 production runs.', result: '35% cost reduction', period: '6 months' },
  { title: 'European Brand Launches LED Line', industry: 'Electronics', desc: 'Sourced factories, managed prototypes, and oversaw a 50,000-unit production run.', result: 'On-time delivery', period: '4 months' },
  { title: 'Australian Importer Fixes Quality', industry: 'Building Materials', desc: 'Audited suppliers, implemented QC protocols, and established inspection routines.', result: '99.2% pass rate', period: '3 months' },
]

const faqs = [
  { q: 'How much does your sourcing service cost?', a: 'Basic supplier identification and quotation is free. For factory audits, inspections, and project management, we offer transparent pricing based on scope. Contact us for a quote.' },
  { q: 'How do you verify suppliers?', a: 'We conduct on-site factory visits checking business licenses, production equipment, quality systems, worker conditions, and export records using a 20-point checklist.' },
  { q: 'What is your typical turnaround time?', a: 'Supplier identification: 3-5 days. Factory audits: 5-7 days. Inspection reports: within 24 hours. Timelines vary by project complexity.' },
  { q: 'Do you handle small orders?', a: 'Yes. Our minimum project engagement starts at $5,000 in goods value. We tailor our service level to match your project size.' },
  { q: 'Which countries do you ship to?', a: 'We coordinate shipping to all major markets including the US, Canada, UK, EU, Australia, Middle East, Africa, and Southeast Asia.' },
  { q: 'Can I visit the factory myself?', a: 'Absolutely. We welcome client factory visits and can arrange scheduling, transportation, and translation support.' },
]

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-neutral-200 rounded-lg overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-neutral-50 transition-colors">
        <span className="text-base font-semibold text-neutral-900 pr-4">{question}</span>
        <ChevronRight className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-200 ${open ? 'rotate-90' : ''}`} />
      </button>
      {open && <div className="px-5 pb-5"><p className="text-sm text-neutral-600 leading-relaxed">{answer}</p></div>}
    </div>
  )
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 20% 50%, rgba(232,168,56,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(232,168,56,0.1) 0%, transparent 50%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6">
                <Shield className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-white/90">Trusted by 500+ Global Buyers</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
                China Sourcing Agent for Global Buyers
              </h1>
              <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-8 max-w-xl">
                Find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping. One partner for your entire supply chain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link to="/contact" className="btn-primary text-base px-8 py-4">
                  Get a Free Sourcing Quote <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link to="/how-it-works" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white rounded-lg px-8 py-4 text-base font-semibold hover:bg-white/10 transition-colors">
                  See How It Works
                </Link>
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {['500+ Verified Suppliers', '12+ Years Experience', '30+ Countries Served', '98% Client Satisfaction'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="bg-white/5 rounded-xl p-5 text-center border border-white/5">
                      <stat.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                      <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                      <p className="text-xs text-neutral-300">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Our Services</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">Complete China Sourcing Solutions</h2>
            <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto">From supplier identification to door delivery, we manage every step of your China sourcing process.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="group bg-neutral-50 rounded-xl p-7 border border-neutral-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/10">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{service.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-secondary text-sm">
              View All Services <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">How It Works</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">Your Sourcing Process, Simplified</h2>
            <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto">Five clear steps from initial inquiry to delivery. No surprises, no hidden costs.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step) => (
              <div key={step.num} className="bg-white rounded-xl p-6 border border-neutral-200 text-center">
                <div className="w-10 h-10 rounded-full bg-secondary text-neutral-900 font-bold text-sm flex items-center justify-center mx-auto mb-4">{step.num}</div>
                <step.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-base font-semibold text-neutral-900 mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="btn-secondary text-sm">
              Learn More <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">What We Source</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">Products We Source from China</h2>
            <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto">We source across major product categories with deep supplier networks in each sector.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((cat) => (
              <Link to="/products" key={cat.name} className="group bg-neutral-50 rounded-xl p-6 border border-neutral-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/10">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <cat.icon className="w-5 h-5 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-neutral-900 mb-1">{cat.name}</h3>
                    <p className="text-sm text-neutral-500">{cat.items}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="btn-secondary text-sm">
              View All Categories <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Problems We Solve</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">Common Sourcing Challenges, Resolved</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-neutral-200">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-neutral-900 mb-2">{item.problem}</h3>
                    <div className="flex items-start gap-3">
                      <ThumbsUp className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <p className="text-sm text-neutral-600 leading-relaxed">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Why Trust Us</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">Your Reliable Partner in China</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustPoints.map((point) => (
              <div key={point.label} className="text-center p-6 rounded-xl bg-neutral-50 border border-neutral-100">
                <point.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold text-primary mb-1">{point.stat}</p>
                <p className="text-sm font-semibold text-neutral-900">{point.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Case Studies</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">Real Results for Real Clients</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-7 border border-neutral-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className="inline-block text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full mb-4">{item.industry}</span>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">{item.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed mb-5">{item.desc}</p>
                <div className="flex items-center gap-4 pt-4 border-t border-neutral-100">
                  <div>
                    <p className="text-xs text-neutral-400">Result</p>
                    <p className="text-sm font-semibold text-green-600">{item.result}</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400">Timeline</p>
                    <p className="text-sm font-semibold text-neutral-700">{item.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="btn-secondary text-sm">
              View All Case Studies <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">FAQ</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 80% 50%, rgba(232,168,56,0.2) 0%, transparent 50%)' }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Ready to Start Sourcing from China?</h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto mb-8">
            Tell us what products you need. We will provide a detailed sourcing proposal with verified supplier options within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              Get a Free Sourcing Quote <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a href="mailto:info@ssourcingchina.com" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              <Mail className="w-5 h-5" /> info@ssourcingchina.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
