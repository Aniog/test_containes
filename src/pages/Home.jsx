import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship, Package,
  CheckCircle, Users, Globe, Award, TrendingUp, ArrowRight,
  HelpCircle, ChevronDown, ChevronUp
} from 'lucide-react'
import { useState } from 'react'
import CTASection from '@/components/shared/CTASection'

const services = [
  { icon: Search, title: 'Supplier Sourcing', desc: 'We identify and shortlist qualified manufacturers matching your product specs, MOQ, and budget.' },
  { icon: ShieldCheck, title: 'Factory Verification', desc: 'On-site audits to verify business licenses, production capacity, certifications, and trade history.' },
  { icon: ClipboardCheck, title: 'Quality Inspection', desc: 'Pre-production, during-production, and pre-shipment inspections with detailed photo reports.' },
  { icon: Factory, title: 'Production Follow-up', desc: 'Regular factory visits and progress updates to keep your order on schedule.' },
  { icon: Ship, title: 'Shipping Coordination', desc: 'We arrange freight, handle export documentation, and track your shipment door-to-door.' },
  { icon: Package, title: 'Sample Management', desc: 'We collect, review, and ship product samples so you can evaluate before committing.' },
]

const processSteps = [
  { step: '01', title: 'Share Your Requirements', desc: 'Tell us what you need — product specs, target price, quantity, and timeline.' },
  { step: '02', title: 'We Source & Shortlist', desc: 'Our team identifies 3–5 qualified suppliers and presents a comparison report.' },
  { step: '03', title: 'Factory Verification', desc: 'We visit and audit the top candidates to confirm legitimacy and capability.' },
  { step: '04', title: 'Sample & Negotiation', desc: 'We manage samples, negotiate pricing, and finalize terms on your behalf.' },
  { step: '05', title: 'Production & QC', desc: 'We monitor production milestones and conduct quality inspections.' },
  { step: '06', title: 'Ship to Your Door', desc: 'We coordinate logistics and provide tracking until delivery is confirmed.' },
]

const products = [
  'Electronics & Components', 'Textiles & Apparel', 'Home & Garden',
  'Industrial Equipment', 'Auto Parts', 'Packaging Materials',
  'Building Materials', 'Consumer Goods', 'Health & Beauty',
]

const trustPoints = [
  { icon: Users, value: '500+', label: 'Clients Served' },
  { icon: Globe, value: '35+', label: 'Countries Reached' },
  { icon: Award, value: '12+', label: 'Years Experience' },
  { icon: TrendingUp, value: '98%', label: 'On-Time Delivery' },
]

const problems = [
  'Cannot verify if a supplier is legitimate or a trading company',
  'Language barriers make negotiation and specs communication difficult',
  'No visibility into production progress or quality until goods arrive',
  'Shipping logistics are complex and costly without local expertise',
  'Previous bad experiences with unresponsive or unreliable factories',
  'Time zone differences make real-time communication nearly impossible',
]

const faqs = [
  { q: 'What is a sourcing agent?', a: 'A sourcing agent is your on-the-ground representative in China who finds suppliers, verifies factories, inspects quality, and coordinates shipping on your behalf — saving you time, money, and risk.' },
  { q: 'How much does your service cost?', a: 'Our fees depend on the scope of work. Typically we charge a service fee of 5–8% of the order value, or a fixed project fee for specific tasks like factory audits or inspections. We provide a clear quote upfront.' },
  { q: 'What is your minimum order requirement?', a: 'We work with orders of all sizes. However, most Chinese factories have their own MOQs (typically 100–500 units depending on the product). We help you find suppliers that match your volume needs.' },
  { q: 'How do you ensure product quality?', a: 'We conduct multi-stage inspections: pre-production (material check), during production (process audit), and pre-shipment (final random inspection). You receive detailed photo reports at each stage.' },
  { q: 'How long does the sourcing process take?', a: 'Initial supplier shortlisting takes 5–10 business days. The full cycle from sourcing to delivery typically ranges from 4–12 weeks depending on product complexity and order size.' },
  { q: 'Can you help with existing supplier issues?', a: 'Yes. We can audit your current suppliers, conduct quality inspections on ongoing orders, or help you find alternative manufacturers if needed.' },
]

const Home = () => {
  const containerRef = useRef(null)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          data-strk-bg-id="hero-bg-a7f3c2"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
              We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can buy with confidence.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors no-underline shadow-lg"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg text-lg transition-colors no-underline"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point) => (
              <div key={point.label} className="text-center">
                <point.icon className="w-8 h-8 text-blue-800 mx-auto mb-2" />
                <div className="text-3xl md:text-4xl font-bold text-slate-900">{point.value}</div>
                <div className="text-sm text-slate-500 mt-1">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              End-to-End Sourcing Services
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              From finding the right supplier to delivering goods at your warehouse — we handle every step of the China sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md transition-shadow">
                <service.icon className="w-10 h-10 text-blue-800 mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-blue-800 font-semibold hover:text-blue-700 no-underline">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              How Our Sourcing Process Works
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              A clear, structured process designed to minimize risk and maximize results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((item) => (
              <div key={item.step} className="relative">
                <div className="text-5xl font-bold text-blue-100 mb-2">{item.step}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-blue-800 font-semibold hover:text-blue-700 no-underline">
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Problems We Solve for Buyers
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Sourcing from China without local support is risky. Here are the challenges we eliminate for you.
              </p>
              <ul className="mt-8 space-y-4">
                {problems.map((problem) => (
                  <li key={problem} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                alt="Quality inspection at Chinese factory"
                data-strk-img-id="problems-img-b4e2d1"
                data-strk-img="[problems-img-desc]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="rounded-xl shadow-lg w-full"
              />
              <span id="problems-img-desc" className="hidden">Quality control inspector checking products at a Chinese manufacturing factory warehouse</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Products We Source
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We source across a wide range of industries. If it's made in China, we can find it for you.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product) => (
              <div key={product} className="bg-slate-50 rounded-lg p-5 text-center border border-slate-200 hover:border-blue-300 transition-colors">
                <span className="text-slate-800 font-medium">{product}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center gap-2 text-blue-800 font-semibold hover:text-blue-700 no-underline">
              See Full Product List <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Client Success Stories
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Real results from real sourcing projects we've managed for international buyers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Electronics Retailer, USA', result: 'Reduced unit cost by 22% with verified supplier', category: 'Electronics' },
              { title: 'Furniture Brand, Germany', result: 'Passed all EU compliance tests on first shipment', category: 'Furniture' },
              { title: 'Fashion Label, Australia', result: 'Scaled from 500 to 10,000 units with consistent quality', category: 'Apparel' },
            ].map((study) => (
              <div key={study.title} className="bg-white rounded-xl p-6 border border-slate-200">
                <span className="text-xs font-medium text-blue-800 bg-blue-50 px-2 py-1 rounded">{study.category}</span>
                <h3 className="text-lg font-semibold text-slate-900 mt-4">{study.title}</h3>
                <p className="text-slate-600 text-sm mt-2">{study.result}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-blue-800 font-semibold hover:text-blue-700 no-underline">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors border-none cursor-pointer"
                >
                  <span className="font-medium text-slate-900 pr-4">{faq.q}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-slate-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  )
}

export default Home
