import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { 
  Shield, CheckCircle, Package, Truck, Search, FileCheck, 
  Users, Clock, Globe, ArrowRight, Star, ChevronRight, Building2,
  ClipboardCheck, Container, MessageSquare
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const trustPoints = [
  { icon: Shield, title: 'Verified Factories', desc: 'We personally visit and verify every supplier before recommending them.' },
  { icon: CheckCircle, title: 'Quality Control', desc: 'Professional QC inspections at every production stage.' },
  { icon: Clock, title: 'On-Time Delivery', desc: '98% on-time delivery rate across 500+ shipments.' },
  { icon: Users, title: '500+ Clients', desc: 'Trusted by businesses in 30+ countries worldwide.' },
]

const services = [
  {
    icon: Search,
    title: 'Supplier Verification',
    desc: 'We verify factory existence, licensing, production capacity, and compliance before any engagement.',
    image: 'factory verification inspection'
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Professional QC inspectors conduct thorough checks during production and before shipment.',
    image: 'quality control inspection worker'
  },
  {
    icon: Package,
    title: 'Production Follow-up',
    desc: 'Regular updates and factory visits to ensure your order stays on track.',
    image: 'manufacturing production monitoring'
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We handle logistics, customs documentation, and shipping arrangements.',
    image: 'container shipping logistics freight'
  },
]

const processSteps = [
  { num: '01', title: 'Submit Inquiry', desc: 'Tell us what you need - product details, quantity, budget, and timeline.' },
  { num: '02', title: 'Supplier Matching', desc: 'We identify and verify 3-5 suitable factories based on your requirements.' },
  { num: '03', title: 'Sample Review', desc: 'Receive samples, compare options, and select your preferred supplier.' },
  { num: '04', title: 'Production & QC', desc: 'We monitor production, conduct inspections, and manage documentation.' },
  { num: '05', title: 'Shipping & Delivery', desc: 'Coordination of logistics, customs clearance, and final delivery.' },
]

const problems = [
  { title: 'Language Barriers', desc: 'Miscommunication leads to wrong products, missed deadlines, and quality issues.' },
  { title: 'Quality Uncertainty', desc: 'Without proper inspection, defective products can reach your customers.' },
  { title: 'Supplier Scams', desc: 'Fake factories, payment fraud, and non-existent suppliers are real risks.' },
  { title: 'Logistics Complexity', desc: 'International shipping, customs, and documentation can be overwhelming.' },
]

const products = [
  'Electronics & Components',
  'Home & Garden',
  'Sports & Outdoor',
  'Fashion & Accessories',
  'Industrial Equipment',
  'Packaging Materials',
]

const faqs = [
  {
    q: 'How long does the sourcing process take?',
    a: 'Typical timelines vary: supplier matching takes 3-7 days, samples 1-3 weeks, and production 2-8 weeks depending on complexity and quantity. We provide detailed timelines during the inquiry process.'
  },
  {
    q: 'What are your fees?',
    a: 'Our service model is transparent: a success fee based on order value, plus flat fees for specific services like factory verification and quality inspection. We provide a detailed quote before any engagement.'
  },
  {
    q: 'How do you verify factories?',
    a: 'Our team physically visits factories to verify: business licenses, production capacity, equipment, workforce, quality systems, and compliance. We provide detailed reports with photos and video.'
  },
  {
    q: 'Can you handle small orders?',
    a: 'Yes, we work with orders from 100 units. While per-unit costs may be higher for smaller quantities, our services ensure quality and reduce risk - often more valuable for smaller initial orders.'
  },
]

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            data-strk-bg-id="hero-bg-home-001"
            data-strk-bg="[hero-title-home] [hero-subtitle-home]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          />
        </div>
        <div className="container-custom section-padding relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-600/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Trusted by 500+ Global Buyers
              </div>
              <h1 id="hero-title-home" className="heading-xl mb-6">
                China Sourcing Agent for <span className="text-cyan-400">Global Buyers</span>
              </h1>
              <p id="hero-subtitle-home" className="text-lead text-slate-300 mb-8">
                Find verified suppliers, ensure product quality, and streamline your China supply chain. We handle the complexity so you can focus on growing your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  Get a Free Sourcing Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link to="/how-it-works" className="btn-outline border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                  How It Works
                </Link>
              </div>
              <div className="flex items-center gap-8 mt-10 pt-10 border-t border-white/10">
                <div>
                  <div className="text-3xl font-bold text-cyan-400">500+</div>
                  <div className="text-sm text-slate-400">Clients Worldwide</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400">30+</div>
                  <div className="text-sm text-slate-400">Countries Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400">98%</div>
                  <div className="text-sm text-slate-400">On-Time Delivery</div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Factory Verification</div>
                    <div className="text-xs text-slate-400">Completed Report</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span className="text-slate-300">Business License Verified</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span className="text-slate-300">Production Capacity Confirmed</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span className="text-slate-300">Quality Systems Audited</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span className="text-slate-300">On-site Inspection Done</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="section-padding bg-white border-b border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {trustPoints.map((point, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <point.icon className="w-7 h-7 text-cyan-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{point.title}</h3>
                <p className="text-sm text-slate-600">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="badge mb-4">Our Services</span>
            <h2 className="heading-lg mb-4">End-to-End Sourcing Solutions</h2>
            <p className="section-subtitle">
              From supplier discovery to final delivery, we manage every step of your China sourcing journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div key={i} className="card card-hover group">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{service.desc}</p>
                <div className="h-32 bg-slate-100 rounded-lg overflow-hidden">
                  <img
                    data-strk-img-id={`service-img-${i}`}
                    data-strk-img={`[service-title-${i}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <span id={`service-title-${i}`} className="hidden">{service.image}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="badge mb-4">How It Works</span>
            <h2 className="heading-lg mb-4">Our Sourcing Process</h2>
            <p className="section-subtitle">
              A clear, transparent process designed to minimize risk and maximize efficiency.
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, i) => (
              <div key={i} className="relative">
                <div className="card text-center h-full">
                  <div className="w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.desc}</p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-slate-300">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="btn-secondary">
              Learn More About Our Process
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 mb-4">Products We Source</span>
              <h2 className="heading-lg mb-4">Wide Range of Product Categories</h2>
              <p className="text-lead text-slate-300 mb-8">
                We have established relationships with verified manufacturers across diverse industries. Whether you're looking for consumer goods, industrial components, or specialized products, we can help.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {products.map((product, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="text-slate-200">{product}</span>
                  </div>
                ))}
              </div>
              <Link to="/products" className="btn-primary mt-8">
                View All Categories
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <div 
                className="absolute inset-0"
                data-strk-bg-id="products-bg-home-002"
                data-strk-bg="[products-title-home]"
                data-strk-bg-ratio="16x9"
                data-strk-bg-width="800"
              />
              <span id="products-title-home" className="hidden">manufacturing warehouse products</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="badge mb-4">Why Choose Us</span>
            <h2 className="heading-lg mb-4">We Solve Your Sourcing Challenges</h2>
            <p className="section-subtitle">
              Sourcing from China comes with real risks. We help you navigate them.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, i) => (
              <div key={i} className="card border-l-4 border-l-cyan-500">
                <h3 className="font-semibold text-slate-900 mb-2">{problem.title}</h3>
                <p className="text-sm text-slate-600">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span className="badge mb-4">Success Stories</span>
              <h2 className="heading-lg mb-2">Case Studies</h2>
              <p className="text-lead text-slate-600">See how we've helped businesses succeed with China sourcing.</p>
            </div>
            <Link to="/case-studies" className="btn-outline">
              View All Cases
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'E-commerce Electronics Startup', industry: 'Electronics', result: 'Found verified supplier, 40% cost reduction' },
              { title: 'Retail Chain Home Decor', industry: 'Home & Garden', result: 'Sourced 15 product lines, on-time delivery' },
              { title: 'Sports Equipment Distributor', industry: 'Sports', result: 'Quality inspection prevented $50K loss' },
            ].map((study, i) => (
              <Link key={i} to="/case-studies" className="card card-hover group">
                <div className="h-40 bg-slate-100 rounded-lg mb-4 overflow-hidden">
                  <img
                    data-strk-img-id={`case-study-${i}`}
                    data-strk-img={`[case-study-title-${i}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span id={`case-study-title-${i}`} className="hidden">{study.title} {study.industry}</span>
                </div>
                <span className="badge text-xs">{study.industry}</span>
                <h3 className="font-semibold text-slate-900 mt-3 mb-2">{study.title}</h3>
                <p className="text-sm text-slate-600">{study.result}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="badge mb-4">FAQ</span>
              <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
              <p className="text-lead text-slate-600 mb-8">
                Quick answers to common questions about our China sourcing services.
              </p>
              <Link to="/contact" className="btn-primary">
                Still Have Questions? Contact Us
                <MessageSquare className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="card">
                  <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-sm text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-cyan-600 to-cyan-700 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Ready to Start Sourcing from China?</h2>
          <p className="text-lead text-cyan-100 mb-8 max-w-2xl mx-auto">
            Get a free sourcing quote within 24 hours. Tell us what you need, and we'll find the right suppliers for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-cyan-700 hover:bg-cyan-50">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a href="mailto:info@ssourcingchina.com" className="btn-outline border-white/30 text-white hover:bg-white/10">
              Email Us Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home