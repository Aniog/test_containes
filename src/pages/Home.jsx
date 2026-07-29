import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  ArrowRight, Shield, Search, Eye, Factory, Truck, CheckCircle2,
  Users, Globe, Award, Clock, TrendingUp, MessageSquare, Star,
  ChevronRight, Phone, Mail, Zap, BarChart3, FileCheck, Package
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and vet reliable suppliers across China\'s manufacturing hubs, matching your requirements with qualified factories.',
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    desc: 'On-site factory audits to verify legitimacy, capacity, certifications, and compliance with international standards.',
  },
  {
    icon: Eye,
    title: 'Quality Inspection',
    desc: 'Pre-production, in-line, and pre-shipment inspections to catch defects before goods leave the factory.',
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    desc: 'Regular factory visits and progress reports to keep your orders on schedule and on spec.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'End-to-end logistics management including freight forwarding, customs clearance, and delivery tracking.',
  },
  {
    icon: FileCheck,
    title: 'Documentation',
    desc: 'Complete trade documentation including contracts, invoices, packing lists, and certificates of origin.',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Tell Us What You Need',
    desc: 'Share your product specs, target price, quantity, and timeline. We review within 24 hours.',
  },
  {
    step: '02',
    title: 'Supplier Matching',
    desc: 'We source 3–5 qualified suppliers, verify credentials, and present options with pricing.',
  },
  {
    step: '03',
    title: 'Samples & Negotiation',
    desc: 'We arrange samples, negotiate pricing and terms, and help you select the best supplier.',
  },
  {
    step: '04',
    title: 'Production & QC',
    desc: 'We monitor production, conduct inspections at key milestones, and send you detailed reports.',
  },
  {
    step: '05',
    title: 'Shipping & Delivery',
    desc: 'We handle all logistics — packing, labeling, customs, and freight — to your door.',
  },
]

const productCategories = [
  { name: 'Electronics & Gadgets', items: 'Consumer electronics, accessories, smart devices' },
  { name: 'Home & Garden', items: 'Furniture, kitchenware, decor, tools' },
  { name: 'Apparel & Textiles', items: 'Clothing, fabrics, bags, shoes' },
  { name: 'Machinery & Parts', items: 'Industrial equipment, spare parts, tools' },
  { name: 'Packaging & Printing', items: 'Custom packaging, labels, promotional items' },
  { name: 'Beauty & Health', items: 'Cosmetics, supplements, personal care' },
]

const trustPoints = [
  { icon: Users, value: '500+', label: 'Verified Suppliers', desc: 'Pre-screened factories across China' },
  { icon: Globe, value: '40+', label: 'Countries Served', desc: 'Buyers across North America, Europe, Asia' },
  { icon: Award, value: '10+', label: 'Years Experience', desc: 'Deep knowledge of China manufacturing' },
  { icon: CheckCircle2, value: '98%', label: 'Client Satisfaction', desc: 'Repeat business rate' },
]

const caseStudies = [
  {
    title: 'US Retailer Reduces Costs 30%',
    industry: 'Consumer Electronics',
    result: 'Identified 3 new suppliers, reduced unit cost by 30%, improved lead time by 2 weeks.',
    imgId: 'case-study-electronics-8f2a9c',
    alt: 'Electronics manufacturing quality inspection',
  },
  {
    title: 'EU Brand Launches Private Label',
    industry: 'Home & Garden',
    result: 'Managed full product development from design to delivery in 12 weeks.',
    imgId: 'case-study-home-garden-6d34fa',
    alt: 'Home products factory production line',
  },
  {
    title: 'Australian Importer Scales Operations',
    industry: 'Apparel & Textiles',
    result: 'Onboarded 4 new suppliers, increased order volume by 200% while maintaining quality.',
    imgId: 'case-study-apparel-9e27b1',
    alt: 'Textile factory quality control process',
  },
]

const problems = [
  { problem: 'Unreliable suppliers who disappear after payment', solution: 'We verify every supplier with on-site visits and background checks before you commit.' },
  { problem: 'Quality issues discovered after goods arrive', solution: 'Our multi-stage inspection process catches defects during production, not after shipping.' },
  { problem: 'Communication barriers and language gaps', solution: 'Our bilingual team handles all supplier communication in Mandarin and English.' },
  { problem: 'Hidden costs and unexpected delays', solution: 'Transparent pricing with detailed cost breakdowns and proactive timeline management.' },
  { problem: 'Complex shipping and customs procedures', solution: 'We manage all logistics, documentation, and customs clearance end-to-end.' },
]

const testimonials = [
  {
    name: 'Michael Chen',
    company: 'Pacific Imports, USA',
    quote: 'SSourcing China transformed our supply chain. Their factory verification process saved us from a costly supplier failure.',
    rating: 5,
  },
  {
    name: 'Sarah Müller',
    company: 'EuroTrade GmbH, Germany',
    quote: 'The quality inspection reports are incredibly detailed. We now have full visibility into every production run.',
    rating: 5,
  },
  {
    name: 'David Park',
    company: 'Seoul Electronics, Korea',
    quote: 'Fast, professional, and transparent. They found us suppliers we never would have discovered on our own.',
    rating: 5,
  },
]

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'We charge a transparent service fee based on order value, typically 5–10%. There are no hidden costs. You receive a detailed quote before we begin.',
  },
  {
    q: 'How long does supplier sourcing take?',
    a: 'Initial supplier shortlists are delivered within 3–5 business days. Sample arrangements take 1–2 weeks depending on product complexity.',
  },
  {
    q: 'Do you handle small orders?',
    a: 'Yes. We work with businesses of all sizes, from startups ordering their first batch to established importers placing container loads.',
  },
  {
    q: 'What industries do you specialize in?',
    a: 'We cover a broad range including electronics, home goods, apparel, machinery, packaging, and beauty products. Our supplier network spans 15+ industries.',
  },
  {
    q: 'Can I visit the factories myself?',
    a: 'Absolutely. We encourage factory visits and can arrange tours, translations, and logistics for your trip to China.',
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-300'}`} />
      ))}
    </div>
  )
}

function AccordionItem({ faq, isOpen, onClick }) {
  return (
    <div className="border border-neutral-200 rounded-lg overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-neutral-50 transition-colors"
      >
        <span className="font-semibold text-neutral-800 pr-4">{faq.q}</span>
        <ChevronRight className={`w-5 h-5 text-neutral-400 transition-transform flex-shrink-0 ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-neutral-600 leading-relaxed">
          {faq.a}
        </div>
      )}
    </div>
  )
}

export default function Home() {
  const containerRef = useRef(null)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-500 via-brand-600 to-brand-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="container-wide py-20 md:py-28 lg:py-36 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Trusted by 500+ businesses worldwide
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                China Sourcing Agent for Global Buyers
              </h1>
              <p className="text-lg md:text-xl text-brand-100 mb-8 leading-relaxed max-w-xl">
                Find reliable suppliers, verify factories, inspect quality, and coordinate shipping — all with one experienced partner on the ground in China.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-xl text-lg"
                >
                  Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all backdrop-blur-sm text-lg"
                >
                  See How It Works
                </Link>
              </div>
              <div className="flex items-center gap-8 mt-10 pt-8 border-t border-white/10">
                <div>
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-brand-200 text-sm">Verified Suppliers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">40+</div>
                  <div className="text-brand-200 text-sm">Countries Served</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">10+</div>
                  <div className="text-brand-200 text-sm">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  data-strk-img-id="hero-sourcing-factory"
                  data-strk-img="[hero-subtitle-text] [hero-title-text] china sourcing factory manufacturing"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Modern Chinese manufacturing facility with quality inspection"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-neutral-900">Factory Verified</div>
                  <div className="text-sm text-neutral-500">ISO 9001 Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hidden text elements for image query interpolation */}
        <span id="hero-title-text" className="sr-only">China Sourcing Agent for Global Buyers</span>
        <span id="hero-subtitle-text" className="sr-only">Find reliable suppliers verify factories inspect quality coordinate shipping</span>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-50 rounded-full text-brand-600 text-sm font-semibold mb-4">
              <Zap className="w-4 h-4" />
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              End-to-End China Sourcing Solutions
            </h2>
            <p className="text-lg text-neutral-600">
              From initial supplier identification to final delivery, we manage every step of your sourcing journey with transparency and expertise.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-white border border-neutral-200 rounded-xl p-8 hover:border-brand-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-100 transition-colors">
                  <service.icon className="w-7 h-7 text-brand-500" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{service.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{service.desc}</p>
                <Link to="/services" className="inline-flex items-center gap-1 text-brand-500 font-semibold mt-4 hover:gap-2 transition-all text-sm">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-50 rounded-full text-accent-600 text-sm font-semibold mb-4">
              <BarChart3 className="w-4 h-4" />
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              How Our Sourcing Process Works
            </h2>
            <p className="text-lg text-neutral-600">
              A clear, structured approach that keeps you informed at every stage — from initial inquiry to final delivery.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="bg-white rounded-xl p-6 h-full border border-neutral-200 hover:border-accent-300 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-accent-500 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-neutral-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{step.desc}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ChevronRight className="w-6 h-6 text-accent-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg transition-all shadow-sm"
            >
              See Detailed Process <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-50 rounded-full text-brand-600 text-sm font-semibold mb-4">
              <Package className="w-4 h-4" />
              Product Categories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Products We Source
            </h2>
            <p className="text-lg text-neutral-600">
              We source across 15+ industries with specialized knowledge in each category.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((cat) => (
              <div key={cat.name} className="group bg-neutral-50 rounded-xl p-6 border border-neutral-200 hover:border-brand-300 hover:bg-brand-50 transition-all duration-300">
                <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-brand-600 transition-colors">{cat.name}</h3>
                <p className="text-neutral-600 text-sm">{cat.items}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-all shadow-sm"
            >
              View All Products <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 md:py-28 bg-neutral-900">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-accent-400 text-sm font-semibold mb-4">
                <Shield className="w-4 h-4" />
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Common Sourcing Problems — Solved
              </h2>
              <p className="text-neutral-300 text-lg mb-8">
                International sourcing is risky without a local partner. We eliminate the most common pitfalls that cost importers time and money.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-lg transition-all shadow-lg"
              >
                Start Your Sourcing Project <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="space-y-4">
              {problems.map((item, index) => (
                <div key={index} className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 font-bold text-sm">!</span>
                    </div>
                    <div>
                      <p className="text-neutral-300 font-medium mb-2">{item.problem}</p>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <p className="text-neutral-400 text-sm">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-lg text-neutral-600">
              Numbers that reflect our commitment to reliable, high-quality sourcing services.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPoints.map((point) => (
              <div key={point.label} className="text-center p-6 bg-neutral-50 rounded-xl border border-neutral-200">
                <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <point.icon className="w-8 h-8 text-brand-500" />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-brand-500 mb-2">{point.value}</div>
                <div className="font-semibold text-neutral-900 mb-1">{point.label}</div>
                <div className="text-sm text-neutral-500">{point.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-50 rounded-full text-accent-600 text-sm font-semibold mb-4">
              <TrendingUp className="w-4 h-4" />
              Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Real Results for Real Businesses
            </h2>
            <p className="text-lg text-neutral-600">
              See how we have helped companies streamline their China sourcing operations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.title} className="bg-white rounded-xl overflow-hidden border border-neutral-200 hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    data-strk-img-id={study.imgId}
                    data-strk-img={`[case-study-${study.industry.toLowerCase().replace(/[^a-z]/g, '')}-desc] [case-study-${study.industry.toLowerCase().replace(/[^a-z]/g, '')}-title] china manufacturing`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={study.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-brand-600">
                      {study.industry}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-neutral-900 mb-2" id={`case-study-${study.industry.toLowerCase().replace(/[^a-z]/g, '')}-title`}>{study.title}</h3>
                  <p className="text-neutral-600 text-sm mb-4" id={`case-study-${study.industry.toLowerCase().replace(/[^a-z]/g, '')}-desc`}>{study.result}</p>
                  <Link to="/case-studies" className="inline-flex items-center gap-1 text-brand-500 font-semibold text-sm hover:gap-2 transition-all">
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg transition-all shadow-sm"
            >
              View All Case Studies <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-brand-500">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-brand-100">
              Hear from businesses that trust SSourcing China for their sourcing needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <StarRating rating={t.rating} />
                <p className="text-white mt-4 mb-6 leading-relaxed italic">"{t.quote}"</p>
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-brand-200 text-sm">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-neutral-600">
                Quick answers to common questions about our sourcing services.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  faq={faq}
                  isOpen={openFaq === index}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-neutral-900 to-brand-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020M40%2040V20L20%2040%22/%3E%3C/g%3E%3C/svg%3E')]"></div>
        <div className="container-wide text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Start Sourcing Smarter Today
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10">
            Tell us what you need. We will respond within 24 hours with a detailed sourcing plan and transparent pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-lg transition-all shadow-xl text-lg"
            >
              Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="mailto:info@ssourcingchina.com"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all backdrop-blur-sm text-lg"
            >
              <Mail className="w-5 h-5" /> Email Us Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
