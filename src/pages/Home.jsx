import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { 
  Shield, Search, Factory, ClipboardCheck, Truck, 
  BarChart3, CheckCircle, Star, ArrowRight, 
  Package, Cog, HardHat, FileSearch, Ship,
  Globe, Users, Clock, TrendingUp, ChevronDown
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'Identify and vet reliable manufacturers that match your product specifications, quality standards, and budget requirements.',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site audits to verify factory capabilities, production capacity, certifications, and compliance with international standards.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment inspections, during-production checks, and random sampling to ensure products meet your specifications.',
  },
  {
    icon: HardHat,
    title: 'Production Monitoring',
    desc: 'Regular progress tracking and status reports throughout the production cycle to keep your orders on schedule.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    desc: 'Handle logistics from factory to port, including freight booking, customs documentation, and cargo consolidation.',
  },
  {
    icon: Shield,
    title: 'Supplier Risk Assessment',
    desc: 'Comprehensive background checks, legal verification, and financial stability assessment of potential suppliers.',
  },
]

const process = [
  {
    step: '01',
    title: 'Submit Your Requirements',
    desc: 'Tell us about your product, quantity, budget, and timeline. The more detail you provide, the faster we can match you with suitable suppliers.',
  },
  {
    step: '02',
    title: 'Supplier Matching',
    desc: 'We research and shortlist qualified suppliers from our verified network. You receive a curated list with company profiles and capability assessments.',
  },
  {
    step: '03',
    title: 'Factory Verification',
    desc: 'Our team conducts on-site audits of shortlisted factories, verifying production capacity, quality control systems, and compliance.',
  },
  {
    step: '04',
    title: 'Sampling & Negotiation',
    desc: 'We facilitate sample ordering, review samples for quality, and help negotiate pricing, payment terms, and production timelines.',
  },
  {
    step: '05',
    title: 'Production & QC',
    desc: 'Throughout manufacturing, we monitor progress, conduct quality inspections, and provide regular updates to keep your order on track.',
  },
  {
    step: '06',
    title: 'Shipping & Delivery',
    desc: 'We coordinate logistics, handle export documentation, arrange cargo inspection, and ensure safe delivery to your destination.',
  },
]

const productCategories = [
  { name: 'Electronics & Components', desc: 'Consumer electronics, PCBs, sensors, connectors, and electronic components' },
  { name: 'Industrial Equipment', desc: 'Machinery, automation parts, tools, industrial supplies, and manufacturing equipment' },
  { name: 'Packaging & Materials', desc: 'Custom packaging, labels, raw materials, and sustainable packaging solutions' },
  { name: 'Textiles & Apparel', desc: 'Garments, technical textiles, fabrics, accessories, and finished apparel products' },
  { name: 'Home & Consumer Goods', desc: 'Household products, kitchenware, furniture, and consumer lifestyle goods' },
  { name: 'Automotive Parts', desc: 'Auto components, accessories, aftermarket parts, and EV components' },
]

const problems = [
  {
    icon: Search,
    title: 'Hard to Find Reliable Suppliers',
    desc: 'Online marketplaces list thousands of suppliers, but finding trustworthy ones takes weeks of research.',
  },
  {
    icon: Factory,
    title: 'Factory Quality Uncertainty',
    desc: 'Photos look great on Alibaba, but you never know if the factory can actually deliver on quality and volume.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control Challenges',
    desc: 'Without someone on the ground, defects go unnoticed until its too late and costly to fix.',
  },
  {
    icon: Truck,
    title: 'Logistics & Shipping Complexity',
    desc: 'Navigating export documentation, freight booking, and customs clearance requires local knowledge.',
  },
]

const trustStats = [
  { icon: Users, value: '500+', label: 'Clients Served' },
  { icon: Globe, value: '40+', label: 'Countries Reached' },
  { icon: Factory, value: '2,000+', label: 'Factories Audited' },
  { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' },
  { icon: Clock, value: '12+', label: 'Years Experience' },
]

const caseStudies = [
  {
    company: 'EuroTech GmbH',
    industry: 'Industrial Equipment',
    result: '40% cost reduction',
    desc: 'Sourced precision machining components from 3 verified suppliers. Reduced costs by 40% while improving quality consistency.',
  },
  {
    company: 'Pacific Home Goods',
    industry: 'Consumer Products',
    result: '2-week faster delivery',
    desc: 'Managed end-to-end sourcing for a new product line. Delivered 2 weeks ahead of schedule with zero quality issues.',
  },
  {
    company: 'Nordic Auto Parts',
    industry: 'Automotive',
    result: '100% defect-free shipments',
    desc: 'Conducted rigorous factory audits and in-process inspections for automotive components. Achieved 100% defect-free rate across 12 shipments.',
  },
]

const faqs = [
  {
    q: 'What does a China sourcing agent do?',
    a: 'A China sourcing agent helps overseas businesses find reliable suppliers, verify factories, negotiate pricing, monitor production, conduct quality inspections, and coordinate shipping. We act as your local representative throughout the entire procurement process.',
  },
  {
    q: 'How much does sourcing from China cost?',
    a: 'Our fees are typically project-based, ranging from 3-8% of the order value depending on scope and complexity. We provide transparent pricing with no hidden fees. Contact us for a customized quote.',
  },
  {
    q: 'How do you verify factories?',
    a: 'We conduct on-site audits that assess production capacity, quality control systems, certifications, working conditions, and financial stability. Each audit includes detailed photo documentation and a comprehensive report.',
  },
  {
    q: 'What MOQ (Minimum Order Quantity) can you handle?',
    a: 'We work with factories that accommodate various MOQ requirements. For small to medium orders, we can often negotiate lower MOQs or help you find suppliers specializing in smaller production runs.',
  },
  {
    q: 'How do you handle quality control?',
    a: 'We offer multiple QC stages: during-production inspection, pre-shipment inspection, and container loading supervision. Inspections follow AQL (Acceptable Quality Limit) standards with detailed reporting.',
  },
  {
    q: 'What payment terms do you recommend?',
    a: 'We recommend standard terms such as 30% deposit with 70% balance before shipment, or LC for larger orders. We advise on payment structures that protect both buyer and supplier interests.',
  },
]

export default function Home() {
  const containerRef = useRef(null)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-brand-blue to-slate-800" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
              We help international businesses find reliable Chinese suppliers, verify factories, 
              inspect product quality, monitor production, and deliver goods safely to your destination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors text-base shadow-lg shadow-emerald-600/20"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors text-base border border-white/20"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {trustStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-6 h-6 text-brand-blue mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Common Sourcing Challenges We Solve
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Sourcing from China comes with risks. Our team handles the hard parts so you can focus on your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem) => (
              <div key={problem.title} className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                  <problem.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{problem.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
              End-to-End Sourcing Support
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From supplier discovery to final delivery, we provide comprehensive sourcing services tailored to your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="p-6 md:p-8 rounded-lg border border-slate-200 hover:shadow-md hover:border-brand-blue/20 transition-all group">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-blue transition-colors">
                  <service.icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center text-brand-blue font-semibold hover:text-blue-600 transition-colors"
            >
              Explore All Services
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-brand-blue uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Our Sourcing Process
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A systematic approach that minimizes risk and maximizes results at every stage.
            </p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />
            <div className="space-y-8">
              {process.map((step, idx) => (
                <div key={step.step} className={`relative flex flex-col lg:flex-row items-start gap-6 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`flex-1 ${idx % 2 === 0 ? 'lg:text-right' : ''}`}>
                    <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
                      <span className="text-sm font-bold text-brand-blue">Step {step.step}</span>
                      <h3 className="text-lg font-semibold text-slate-900 mt-1 mb-2">{step.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                  <div className="hidden lg:flex shrink-0 w-12 h-12 bg-brand-blue rounded-full items-center justify-center z-10 shadow-md">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center px-6 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Learn More About Our Process
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Categories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Products We Source
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Across industries and categories, we connect you with vetted manufacturers that meet your specifications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {productCategories.map((cat) => (
              <div key={cat.name} className="flex items-start gap-4 p-5 rounded-lg border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                  <Package className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">{cat.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center text-brand-blue font-semibold hover:text-blue-600 transition-colors"
            >
              View All Categories
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Client Success Stories
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real results from real partnerships. See how we have helped businesses like yours.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.company} className="bg-white rounded-lg p-6 md:p-8 border border-slate-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-brand-accent bg-emerald-50 px-2.5 py-1 rounded-full">{cs.industry}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{cs.company}</h3>
                <div className="text-sm font-bold text-brand-accent mb-3">{cs.result}</div>
                <p className="text-sm text-slate-600 leading-relaxed">{cs.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/case-studies"
              className="inline-flex items-center text-brand-blue font-semibold hover:text-blue-600 transition-colors"
            >
              View All Case Studies
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
                Your Local Partner in China
              </h2>
              <div className="space-y-5">
                {[
                  { icon: Shield, title: 'Verified Supplier Network', desc: 'We only work with factories we have personally audited and verified.' },
                  { icon: Users, title: 'English-Speaking Account Managers', desc: 'Clear communication with dedicated managers who understand international business.' },
                  { icon: BarChart3, title: 'Transparent Reporting', desc: 'Regular updates with photos, videos, and detailed reports at every stage.' },
                  { icon: Star, title: 'Risk-Free Engagement', desc: 'No long-term contracts. Pay per project with clear deliverables and timelines.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0 mt-1">
                      <item.icon className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{item.title}</h3>
                      <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">What Our Clients Say</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-5 border border-slate-100">
                  <div className="flex gap-1 text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-current" />))}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    "SSourcing China found us reliable suppliers in half the time it would have taken us on our own. Their factory audit reports gave us the confidence to proceed."
                  </p>
                  <p className="text-sm font-semibold text-slate-900">Thomas Mueller</p>
                  <p className="text-xs text-slate-500">Procurement Director, EuroTech GmbH</p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-slate-100">
                  <div className="flex gap-1 text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-current" />))}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    "The quality inspection service saved us from a major defective shipment. They caught issues we would never have spotted remotely."
                  </p>
                  <p className="text-sm font-semibold text-slate-900">Sarah Chen</p>
                  <p className="text-xs text-slate-500">Operations Manager, Pacific Home Goods</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-brand-blue uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-slate-900 text-sm pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-brand-blue to-blue-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            Tell us about your sourcing needs and get a free, no-obligation quote within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors text-base shadow-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}