import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Shield, Award, Factory, ClipboardCheck, Ship, Headphones,
  Search, FileCheck, Users, Truck, Package, TrendingUp,
  Star, ChevronRight, CheckCircle2, ArrowRight, Globe, Phone, Mail
} from 'lucide-react'

const trustPoints = [
  { icon: Shield, title: 'Verified Suppliers', desc: 'Every factory we recommend has passed our rigorous background check and factory audit.' },
  { icon: Award, title: '15+ Years in China', desc: 'Deep local knowledge and long-standing relationships across major manufacturing hubs.' },
  { icon: ClipboardCheck, title: 'Quality Guaranteed', desc: 'AQL-based inspections at every stage ensure your products meet specifications.' },
  { icon: Headphones, title: 'Dedicated Support', desc: 'A dedicated project manager handles everything from sourcing to delivery.' },
]

const services = [
  { icon: Search, title: 'Supplier Sourcing', desc: 'We identify, screen, and shortlist qualified manufacturers matching your product requirements and budget.' },
  { icon: FileCheck, title: 'Factory Verification', desc: 'On-site factory audits covering production capacity, certifications, equipment, and quality systems.' },
  { icon: Factory, title: 'Quality Control', desc: 'Pre-production, during-production, and pre-shipment inspections with detailed AQL reports.' },
  { icon: Truck, title: 'Production Monitoring', desc: 'Regular production follow-ups to ensure timelines, materials, and quality standards are met.' },
  { icon: Ship, title: 'Shipping & Logistics', desc: 'Freight coordination, customs documentation, consolidation, and door-to-door delivery management.' },
  { icon: TrendingUp, title: 'Product Development', desc: 'Samples, prototyping, packaging design, and cost optimization support from concept to production.' },
]

const problems = [
  { problem: 'Finding reliable suppliers among millions', solution: 'We pre-screen factories based on your requirements and only recommend verified ones.' },
  { problem: 'Language barriers and cultural misunderstandings', solution: 'Bilingual team with deep understanding of both Chinese manufacturing and international business.' },
  { problem: 'Quality concerns without on-the-ground presence', solution: 'Regular on-site inspections and transparent reporting with photos and data.' },
  { problem: 'Production delays and poor communication', solution: 'Weekly production updates and proactive issue resolution with factory management.' },
  { problem: 'Hidden costs and unclear shipping', solution: 'Transparent cost breakdowns and end-to-end logistics coordination.' },
  { problem: 'Scams and fraudulent suppliers online', solution: 'We physically visit every factory and verify business licenses and references.' },
]

const processSteps = [
  { step: '01', title: 'Share Your Requirements', desc: 'Tell us what you need — product specs, target price, order volume, and timeline.' },
  { step: '02', title: 'Supplier Identification', desc: 'We search our network and screen new factories to shortlist the best matches for you.' },
  { step: '03', title: 'Factory Audit & Verification', desc: 'We conduct on-site audits and provide detailed reports with photos and assessments.' },
  { step: '04', title: 'Sampling & Negotiation', desc: 'We coordinate samples, negotiate pricing and terms, and help you make the final choice.' },
  { step: '05', title: 'Production & Quality Control', desc: 'We monitor production with regular inspections, ensuring quality at every stage.' },
  { step: '06', title: 'Shipping & Delivery', desc: 'We handle logistics, documentation, and track your shipment until it arrives at your door.' },
]

const testimonials = [
  {
    quote: 'SSourcing China helped us find a factory for our custom electronics. The quality has been consistent for 3 years now, and they still check every order before shipping.',
    name: 'Mark D.',
    company: 'Electronics Importer, Germany',
  },
  {
    quote: 'After being burned twice by Alibaba suppliers, we partnered with SSourcing China. Their factory audit alone saved us from a $50K mistake. Highly recommend.',
    name: 'Sarah L.',
    company: 'Home & Garden Brand, USA',
  },
  {
    quote: 'The team handles everything — sourcing, negotiation, QC, shipping. It\'s like having a China office without the overhead. Our margins improved by 18%.',
    name: 'James T.',
    company: 'Sporting Goods Distributor, UK',
  },
]

const faqs = [
  { q: 'What is the minimum order quantity (MOQ) you work with?', a: 'It depends on the product and factory. We work with MOQs across the spectrum — from small batch orders to full container loads. We negotiate the best terms for each client.' },
  { q: 'How do you charge for your sourcing services?', a: 'We offer flexible models: a fixed project fee, a percentage of order value (typically 3-8%), or a retainer for ongoing sourcing. We discuss and agree on the model before starting.' },
  { q: 'How do you ensure supplier reliability?', a: 'Every supplier undergoes a multi-step verification: business license check, on-site factory audit, production capacity assessment, quality system review, and reference checks with past clients.' },
  { q: 'Do you handle customs and import documentation?', a: 'Yes, we coordinate all export documentation from China and can recommend freight forwarders and customs brokers at your destination. We ensure compliance with both Chinese export and your country\'s import regulations.' },
  { q: 'Can you help with product development and customization?', a: 'Absolutely. We support OEM and ODM projects, including design translation, material sourcing, prototyping, packaging design, and compliance testing (CE, FDA, RoHS, etc.).' },
  { q: 'Which regions in China do you cover?', a: 'We have teams and partner auditors across all major manufacturing hubs: Guangdong (Shenzhen, Guangzhou, Dongguan), Zhejiang (Yiwu, Ningbo, Hangzhou), Jiangsu (Suzhou, Nanjing), Fujian, and Shandong.' },
]

const productCategories = [
  { icon: '🏠', name: 'Home & Kitchen', items: 'Cookware, storage, furniture, home decor, textiles' },
  { icon: '📱', name: 'Electronics', items: 'Consumer electronics, accessories, smart home, IoT devices' },
  { icon: '👗', name: 'Apparel & Textiles', items: 'Clothing, bags, shoes, fabrics, sportswear' },
  { icon: '🧸', name: 'Toys & Gifts', items: 'Plush toys, educational toys, promotional gifts, stationery' },
  { icon: '🏗️', name: 'Hardware & Tools', items: 'Power tools, fasteners, construction materials, machinery parts' },
  { icon: '⚽', name: 'Sports & Outdoor', items: 'Fitness equipment, camping gear, sports accessories, bikes' },
  { icon: '💄', name: 'Beauty & Personal Care', items: 'Cosmetics, skincare, hair tools, beauty accessories' },
  { icon: '🏥', name: 'Medical & Health', items: 'Medical supplies, PPE, health devices, rehabilitation equipment' },
]

export default function Home() {
  const heroRef = useRef(null)

  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gold-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm mb-6">
                <Shield className="w-4 h-4 text-gold-400" />
                <span className="text-brand-100">Trusted by 500+ international buyers</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
                China Sourcing Agent for Global Buyers
              </h1>
              <p className="text-lg md:text-xl text-brand-200 leading-relaxed mb-8 max-w-xl">
                We find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can source from China with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
                >
                  Get a Free Sourcing Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
                >
                  How It Works
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-brand-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-400" />
                  <span>No upfront commitment</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-400" />
                  <span>Free initial consultation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-400" />
                  <span>Transparent pricing</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  alt="Factory quality inspection"
                  data-strk-img-id="hero-inspection-img-a1b2c3"
                  data-strk-img="factory quality control inspector checking products clipboard"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                  <ClipboardCheck className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">Factory Audit Completed</div>
                  <div className="text-xs text-slate-500">ISO 9001 Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-brand-50 border-b border-brand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((tp, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center shrink-0">
                  <tp.icon className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-brand-700">{tp.title}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{tp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-gold-600 font-semibold text-sm tracking-wide uppercase mb-3">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              End-to-End China Sourcing Solutions
            </h2>
            <p className="text-lg text-slate-600">
              From finding the right factory to inspecting quality and coordinating delivery — we handle every step.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <div key={i} className="group bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md hover:border-brand-200 transition-all">
                <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                  <svc.icon className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{svc.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold transition-colors">
              View all services
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-gold-600 font-semibold text-sm tracking-wide uppercase mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Your Sourcing Journey in 6 Steps
            </h2>
            <p className="text-lg text-slate-600">
              A clear, structured process that keeps you informed at every stage.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((ps, i) => (
              <div key={i} className="relative bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <span className="text-4xl font-bold text-brand-100 mb-3 block">{ps.step}</span>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{ps.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{ps.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold transition-colors">
              Learn more about our process
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold-600 font-semibold text-sm tracking-wide uppercase mb-3">Problems We Solve</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
                We Eliminate the Risks of Sourcing from China
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Sourcing from China has real challenges. Here's how we solve each one for our clients.
              </p>
              <div className="space-y-4">
                {problems.map((p, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{p.problem}</p>
                      <p className="text-sm text-slate-500 mt-0.5">{p.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  alt="Warehouse quality check"
                  data-strk-img-id="home-warehouse-qc-img-d4e5f6"
                  data-strk-img="warehouse worker inspecting products quality control china factory"
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-brand-600 text-white rounded-xl p-4 shadow-lg">
                <Users className="w-5 h-5 mb-1" />
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-brand-200">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-gold-600 font-semibold text-sm tracking-wide uppercase mb-3">Products We Source</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              We Source Across 20+ Industries
            </h2>
            <p className="text-lg text-slate-600">
              From consumer goods to industrial equipment, we connect you with the right manufacturers.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {productCategories.map((cat, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md hover:border-brand-200 transition-all">
                <span className="text-2xl mb-2 block">{cat.icon}</span>
                <h3 className="font-semibold text-slate-900 mb-1">{cat.name}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{cat.items}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold transition-colors">
              View all product categories
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-brand-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-brand-200">
              Real results from buyers who source with confidence through us.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-white/90 text-sm leading-relaxed mb-4 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center text-sm font-bold">
                    {t.name.split(' ')[0][0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-brand-300">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Ready to Start Sourcing from China?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Tell us what you need. We'll help you find the right supplier, verify quality, and deliver your products — without the headaches.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+8613800000000"
              className="inline-flex items-center justify-center gap-2 border-2 border-slate-300 hover:border-brand-600 text-slate-700 hover:text-brand-600 font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              Schedule a Call
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold-600 font-semibold text-sm tracking-wide uppercase mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl border border-gray-100 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer p-5 text-left font-semibold text-slate-800 hover:text-brand-600 transition-colors list-none marker:content-none">
                  {faq.q}
                  <ChevronRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform shrink-0 ml-4" />
                </summary>
                <div className="px-5 pb-5 text-slate-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
