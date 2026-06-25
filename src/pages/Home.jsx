import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship, CheckCircle,
  Users, Award, Globe, TrendingUp, ArrowRight, Star, HelpCircle,
  Package, Cpu, Shirt, Wrench, Home as HomeIcon, Lightbulb
} from 'lucide-react'

const services = [
  { icon: Search, title: 'Supplier Sourcing', desc: 'We identify and shortlist verified suppliers that match your product specs, MOQ, and budget requirements.' },
  { icon: ShieldCheck, title: 'Factory Verification', desc: 'On-site factory audits to verify legitimacy, production capacity, certifications, and working conditions.' },
  { icon: ClipboardCheck, title: 'Quality Inspection', desc: 'Pre-production, during production, and pre-shipment inspections with detailed photo reports.' },
  { icon: Factory, title: 'Production Follow-up', desc: 'Regular factory visits and progress updates to keep your order on schedule and within spec.' },
  { icon: Ship, title: 'Shipping Coordination', desc: 'End-to-end logistics support including freight booking, customs documentation, and delivery tracking.' },
  { icon: Lightbulb, title: 'Product Development', desc: 'Support with sampling, prototyping, packaging design, and private label development.' },
]

const processSteps = [
  { step: '01', title: 'Share Your Requirements', desc: 'Tell us what you need — product specs, target price, quantity, and timeline.' },
  { step: '02', title: 'Supplier Matching', desc: 'We research and shortlist 3-5 qualified suppliers with competitive quotes.' },
  { step: '03', title: 'Factory Verification', desc: 'We visit and audit the top candidates to confirm quality and reliability.' },
  { step: '04', title: 'Sample & Negotiation', desc: 'We manage sampling, negotiate pricing, and finalize terms on your behalf.' },
  { step: '05', title: 'Production & QC', desc: 'We monitor production milestones and conduct quality inspections.' },
  { step: '06', title: 'Shipping & Delivery', desc: 'We coordinate logistics and ensure your goods arrive safely and on time.' },
]

const products = [
  { icon: Cpu, name: 'Electronics & Components' },
  { icon: Shirt, name: 'Apparel & Textiles' },
  { icon: HomeIcon, name: 'Home & Garden' },
  { icon: Wrench, name: 'Industrial & Hardware' },
  { icon: Package, name: 'Packaging & Printing' },
  { icon: Award, name: 'Consumer Goods' },
]

const problems = [
  'Struggling to find reliable suppliers online',
  'Worried about factory scams or misrepresentation',
  'Quality issues discovered only after goods arrive',
  'Communication barriers and timezone differences',
  'Production delays with no visibility',
  'Complex shipping and customs processes',
]

const trustPoints = [
  { icon: Users, value: '500+', label: 'Clients Served' },
  { icon: Globe, value: '30+', label: 'Countries Reached' },
  { icon: Factory, value: '2,000+', label: 'Factories Audited' },
  { icon: TrendingUp, value: '98%', label: 'On-Time Delivery' },
]

const caseStudies = [
  { title: 'Electronics Brand — USA', result: 'Reduced unit cost by 22% while improving quality consistency across 3 product lines.', industry: 'Consumer Electronics' },
  { title: 'Furniture Retailer — UK', result: 'Established a reliable supply chain for custom furniture, cutting lead time from 12 to 6 weeks.', industry: 'Home & Furniture' },
  { title: 'Fashion Label — Australia', result: 'Sourced sustainable fabric suppliers and set up QC protocols for a 10,000-unit first order.', industry: 'Apparel & Textiles' },
]

const faqs = [
  { q: 'What is a sourcing agent and why do I need one?', a: 'A sourcing agent acts as your local representative in China. We handle supplier research, factory visits, quality control, and logistics — saving you time, reducing risk, and getting you better prices than sourcing remotely.' },
  { q: 'How much does your service cost?', a: 'Our fees depend on the scope of work. Typically we charge a service fee of 5-8% of order value, or a fixed project fee for specific tasks like factory audits or inspections. We provide a clear quote upfront.' },
  { q: 'What is your minimum order requirement?', a: 'We work with orders of all sizes, though most suppliers have their own MOQs (typically $2,000-$5,000 for a first order). We help negotiate lower MOQs for initial trial orders.' },
  { q: 'How do you verify suppliers?', a: 'We conduct on-site factory audits checking business licenses, production capacity, quality systems, worker conditions, and past export experience. We provide a detailed audit report with photos.' },
  { q: 'How long does the sourcing process take?', a: 'From initial brief to confirmed supplier, typically 2-4 weeks. Full production cycles vary by product but we provide a timeline estimate before you commit.' },
]

export default function HomePage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-9f3a2c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-4">Trusted China Sourcing Partner</p>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
              We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can buy with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg text-base no-underline transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center border-2 border-slate-500 text-white hover:border-white font-semibold px-8 py-4 rounded-lg text-base no-underline transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point) => (
              <div key={point.label} className="text-center">
                <point.icon className="w-8 h-8 text-blue-800 mx-auto mb-2" />
                <p className="text-2xl md:text-3xl font-bold text-slate-900">{point.value}</p>
                <p className="text-sm text-slate-500">{point.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-800 font-semibold text-sm uppercase tracking-wider mb-2">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">End-to-End Sourcing Services</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">From finding the right supplier to delivering goods to your warehouse, we manage every step of the China sourcing process.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
                <service.icon className="w-10 h-10 text-blue-800 mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center text-blue-800 font-semibold hover:text-blue-700 no-underline transition-colors">
              View All Services <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-800 font-semibold text-sm uppercase tracking-wider mb-2">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">How We Work</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">A clear, structured process that keeps you informed and in control at every stage.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((item) => (
              <div key={item.step} className="relative">
                <span className="text-5xl font-bold text-blue-100">{item.step}</span>
                <h3 className="text-lg font-semibold text-slate-900 mt-2 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-800 font-semibold text-sm uppercase tracking-wider mb-2">Product Categories</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Products We Source</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">We source across a wide range of industries. If it is made in China, we can help you find it.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {products.map((product) => (
              <div key={product.name} className="bg-white rounded-xl border border-slate-200 p-5 text-center hover:shadow-md transition-shadow">
                <product.icon className="w-8 h-8 text-blue-800 mx-auto mb-3" />
                <p className="text-sm font-medium text-slate-700">{product.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center text-blue-800 font-semibold hover:text-blue-700 no-underline transition-colors">
              See Full Product List <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-800 font-semibold text-sm uppercase tracking-wider mb-2">Why Work With Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">Problems We Solve</h2>
              <p className="text-slate-600 mb-8">Sourcing from China without local support is risky and time-consuming. We eliminate the common pain points that overseas buyers face.</p>
              <ul className="space-y-4">
                {problems.map((problem) => (
                  <li key={problem} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-slate-700">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                alt="Factory quality inspection process"
                data-strk-img-id="problems-img-4b7e1d"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-800 font-semibold text-sm uppercase tracking-wider mb-2">Results</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Client Success Stories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <div key={study.title} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{study.result}</p>
                <div className="border-t border-slate-100 pt-4">
                  <p className="font-semibold text-slate-900 text-sm">{study.title}</p>
                  <p className="text-slate-500 text-xs">{study.industry}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center text-blue-800 font-semibold hover:text-blue-700 no-underline transition-colors">
              View All Case Studies <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-800 font-semibold text-sm uppercase tracking-wider mb-2">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-slate-200 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-blue-800 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-800 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Ready to Source from China with Confidence?</h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">Tell us what you are looking for and get a free, no-obligation sourcing proposal within 24 hours.</p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg text-base no-underline transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
