import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  ArrowRight, CheckCircle, Shield, Search, Factory, Eye, Truck, FileCheck,
  Package, Wrench, Cpu, Sofa, Shirt, Hammer, AlertTriangle, TrendingUp,
  Award, Globe, Users, Clock, Star, ChevronDown, ChevronUp, Zap, MessageSquare
} from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import InquiryForm from '@/components/InquiryForm'
import { useState } from 'react'

/* ─── Hero Section ─── */
function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-brand-dark via-brand-primary to-blue-700 pt-24 lg:pt-32 pb-20 lg:pb-28 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/20 to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-blue-100 text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              Trusted by 500+ Global Buyers
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="mt-6 text-lg md:text-xl text-blue-100 leading-relaxed max-w-xl">
              Find reliable Chinese suppliers, verify factories, inspect quality, 
              and coordinate shipping — all with one experienced local partner.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-accent hover:bg-orange-600 text-white font-semibold rounded-lg text-base transition-colors shadow-lg"
              >
                Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-lg text-base transition-colors"
              >
                How It Works
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-sm text-blue-200">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-blue-200">Clients Served</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-sm text-blue-200">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                data-strk-img-id="hero-sourcing-8f2a9c"
                data-strk-img="[hero-title] [hero-subtitle] warehouse factory inspection"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="SSourcing China warehouse inspection"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
            <div id="hero-title" className="sr-only">China Sourcing Agent for Global Buyers</div>
            <div id="hero-subtitle" className="sr-only">Factory verification quality control shipping</div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900">Verified Suppliers</div>
                <div className="text-xs text-gray-500">Pre-screened factories</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Trust Bar ─── */
function TrustBar() {
  const items = [
    { icon: Shield, label: 'Verified Suppliers Only' },
    { icon: Eye, label: 'On-Site Quality Control' },
    { icon: Clock, label: '24h Response Time' },
    { icon: Globe, label: 'Serving 40+ Countries' },
  ]

  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-3 justify-center">
              <item.icon className="w-5 h-5 text-brand-primary flex-shrink-0" />
              <span className="text-sm font-medium text-gray-700">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Services Section ─── */
function ServicesSection() {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'We identify and evaluate suppliers that match your product specifications, quality standards, and budget requirements.',
    },
    {
      icon: Factory,
      title: 'Factory Audits',
      description: 'On-site factory inspections to verify production capabilities, certifications, working conditions, and business legitimacy.',
    },
    {
      icon: FileCheck,
      title: 'Quality Inspection',
      description: 'Pre-shipment and in-line inspections using AQL standards to ensure products meet your specifications before shipping.',
    },
    {
      icon: Eye,
      title: 'Production Monitoring',
      description: 'Regular factory visits and progress updates throughout the production cycle to keep your orders on track.',
    },
    {
      icon: Truck,
      title: 'Shipping Coordination',
      description: 'End-to-end logistics management including freight forwarding, customs clearance, and delivery coordination.',
    },
    {
      icon: Shield,
      title: 'Sample Management',
      description: 'We collect, review, and ship product samples so you can evaluate quality before committing to large orders.',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Services"
          title="End-to-End Sourcing Solutions"
          subtitle="From finding the right supplier to delivering products to your door, we manage every step of the China sourcing process."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl border border-gray-200 p-7 hover:shadow-md hover:border-brand-primary/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-light-bg flex items-center justify-center mb-5 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                <service.icon className="w-6 h-6 text-brand-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-semibold rounded-lg text-sm transition-colors"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Process Section ─── */
function ProcessSection() {
  const steps = [
    {
      step: '01',
      title: 'Tell Us What You Need',
      description: 'Share your product requirements, target price, quantity, and quality standards. We review and confirm feasibility.',
    },
    {
      step: '02',
      title: 'Supplier Matching & Quotes',
      description: 'We source and vet suppliers, request samples, and provide you with competitive quotes from pre-qualified factories.',
    },
    {
      step: '03',
      title: 'Order & Production',
      description: 'Once approved, we place the order and monitor production with regular updates, inspections, and progress reports.',
    },
    {
      step: '04',
      title: 'Quality Inspection',
      description: 'Before shipping, we conduct thorough quality inspections against your specifications and AQL standards.',
    },
    {
      step: '05',
      title: 'Shipping & Delivery',
      description: 'We handle all logistics, customs documentation, and coordinate door-to-door delivery to your location.',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="How It Works"
          title="Simple 5-Step Sourcing Process"
          subtitle="We handle the complexity of China sourcing so you can focus on growing your business."
        />
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-24 left-1/2 w-0.5 h-[calc(100%-120px)] bg-brand-light-bg -translate-x-1/2" />
          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-6">
            {steps.map((step, idx) => (
              <div key={step.step} className="relative flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-brand-primary text-white flex items-center justify-center text-lg font-bold mb-5 relative z-10 shadow-md">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-brand-dark mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary hover:bg-brand-dark text-white font-semibold rounded-lg text-sm transition-colors shadow-sm"
          >
            Learn More About Our Process <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Products Section ─── */
function ProductsSection() {
  const categories = [
    { icon: Package, name: 'Consumer Electronics', desc: 'Phone accessories, gadgets, smart devices', imgQuery: 'consumer electronics gadgets smartphone accessories' },
    { icon: Sofa, name: 'Furniture & Home', desc: 'Indoor/outdoor furniture, decor, lighting', imgQuery: 'modern furniture home decor interior design' },
    { icon: Shirt, name: 'Apparel & Textiles', desc: 'Clothing, bags, shoes, fabric materials', imgQuery: 'clothing apparel textiles fashion manufacturing' },
    { icon: Wrench, name: 'Industrial Equipment', desc: 'Machinery, tools, auto parts, hardware', imgQuery: 'industrial equipment machinery tools manufacturing' },
    { icon: Cpu, name: 'Hardware & Tools', desc: 'Power tools, hand tools, building materials', imgQuery: 'hardware tools construction equipment' },
    { icon: Star, name: 'Promotional Products', desc: 'Custom branded merchandise, gifts, packaging', imgQuery: 'promotional products custom branded merchandise gifts' },
  ]

  return (
    <section className="py-20 md:py-28 bg-gray-50" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="What We Source"
          title="Products We Source from China"
          subtitle="We have experience sourcing across a wide range of product categories, each with vetted supplier networks."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-brand-primary/20 transition-all"
            >
              <div className="h-48 overflow-hidden bg-gray-100">
                <img
                  data-strk-img-id={`products-${cat.name.toLowerCase().replace(/\s+/g, '-')}-img`}
                  data-strk-img={`[${cat.name.toLowerCase().replace(/\s+/g, '-')}-desc] ${cat.imgQuery}`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-2">
                  <cat.icon className="w-5 h-5 text-brand-accent" />
                  <h3 className="font-bold text-brand-dark">{cat.name}</h3>
                </div>
                <p id={`${cat.name.toLowerCase().replace(/\s+/g, '-')}-desc`} className="text-sm text-gray-600">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-semibold rounded-lg text-sm transition-colors"
          >
            View All Product Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Problems Section ─── */
function ProblemsSection() {
  const problems = [
    {
      problem: 'Unreliable suppliers who disappear after receiving payment',
      solution: 'We verify every supplier through on-site factory visits, business license checks, and reference verification before you commit.',
    },
    {
      problem: 'Products that don\'t match specifications or samples',
      solution: 'Our quality inspectors check products at multiple stages of production using international AQL standards.',
    },
    {
      problem: 'Communication barriers and language difficulties',
      solution: 'Our bilingual team handles all supplier communication in Mandarin, ensuring nothing gets lost in translation.',
    },
    {
      problem: 'Unexpected delays in production and shipping',
      solution: 'We monitor production timelines closely and provide regular progress updates to prevent costly delays.',
    },
    {
      problem: 'Difficulty navigating Chinese trade regulations',
      solution: 'We handle all customs documentation, certifications, and compliance requirements for smooth import.',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-brand-accent/30 to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Why Choose Us"
          title="Problems We Solve for Global Buyers"
          subtitle="Sourcing from China comes with real challenges. We have built our processes to address each one."
          light
        />
        <div className="space-y-5">
          {problems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-7"
            >
              <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1">The Problem</div>
                    <p className="text-white font-medium">{item.problem}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-1">Our Solution</div>
                    <p className="text-gray-300">{item.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Trust Points Section ─── */
function TrustSection() {
  const points = [
    {
      icon: Award,
      title: '10+ Years in China Sourcing',
      description: 'Deep market knowledge and established supplier relationships built over a decade of hands-on experience.',
    },
    {
      icon: Globe,
      title: 'Clients in 40+ Countries',
      description: 'We work with businesses across North America, Europe, Australia, and the Middle East.',
    },
    {
      icon: Users,
      title: 'Local Team in Guangzhou',
      description: 'Our bilingual team is based in China\'s manufacturing hub, close to major supplier clusters.',
    },
    {
      icon: TrendingUp,
      title: '500+ Successful Projects',
      description: 'From small trial orders to large-scale production runs, we have delivered results for hundreds of clients.',
    },
    {
      icon: Shield,
      title: 'Verified Supplier Network',
      description: 'Every supplier in our network has been personally visited and verified by our team.',
    },
    {
      icon: MessageSquare,
      title: 'Clear Communication',
      description: 'Regular updates, detailed reports, and responsive support throughout your sourcing journey.',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Why SSourcing China"
          title="Built on Trust and Transparency"
          subtitle="We earn client trust through consistent results, clear communication, and genuine local expertise."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {points.map((point) => (
            <div key={point.title} className="flex items-start gap-4 p-5 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-11 h-11 rounded-lg bg-brand-light-bg flex items-center justify-center flex-shrink-0">
                <point.icon className="w-5 h-5 text-brand-primary" />
              </div>
              <div>
                <h3 className="font-bold text-brand-dark mb-1.5">{point.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Case Studies Preview ─── */
function CaseStudiesSection() {
  const cases = [
    {
      title: 'US Retailer Reduces Costs by 35%',
      industry: 'Consumer Electronics',
      result: 'Sourced 50,000 units of Bluetooth speakers from verified Shenzhen factory with full QC inspection.',
      savings: '35% cost reduction',
      imgQuery: 'consumer electronics bluetooth speaker warehouse shipping',
      imgId: 'case-study-electronics-c3d4e5',
    },
    {
      title: 'European Brand Launches Home Line',
      industry: 'Furniture & Home',
      result: 'Identified and audited 3 furniture manufacturers in Foshan, managed samples, and coordinated container shipping.',
      savings: '45-day delivery',
      imgQuery: 'modern furniture manufacturing factory production line',
      imgId: 'case-study-furniture-f6g7h8',
    },
    {
      title: 'Australian Importer Scales Operations',
      industry: 'Apparel & Textiles',
      result: 'Built a network of 5 verified garment factories in Guangdong supporting 200,000+ units per season.',
      savings: '3x supplier capacity',
      imgQuery: 'textile garment factory clothing production line',
      imgId: 'case-study-apparel-a9b0c1',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-gray-50" id="case-studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Case Studies"
          title="Real Results for Real Businesses"
          subtitle="See how we have helped companies around the world source products from China successfully."
        />
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {cases.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all group"
            >
              <div className="h-48 overflow-hidden bg-gray-100">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[cs-title-${item.imgId}] [cs-industry-${item.imgId}] ${item.imgQuery}`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="inline-block text-xs font-semibold text-brand-accent uppercase tracking-wider mb-2">
                  {item.industry}
                </span>
                <h3 id={`cs-title-${item.imgId}`} className="text-lg font-bold text-brand-dark mb-2">{item.title}</h3>
                <p id={`cs-industry-${item.imgId}`} className="text-sm text-gray-600 mb-4 leading-relaxed">{item.result}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-xs font-semibold">
                  <TrendingUp className="w-3.5 h-3.5" />
                  {item.savings}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-semibold rounded-lg text-sm transition-colors"
          >
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── FAQ Section ─── */
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      q: 'How do you find and verify suppliers?',
      a: 'We use a multi-step verification process: business license checks, on-site factory visits, production capability assessment, quality management system review, and reference checks from existing clients. We only recommend suppliers that pass all criteria.',
    },
    {
      q: 'What are your fees?',
      a: 'We offer flexible pricing based on your needs. For standard sourcing projects, we charge a transparent commission on the order value. Factory audits and quality inspections are billed as flat fees. We provide a detailed quote before any work begins.',
    },
    {
      q: 'How long does the sourcing process take?',
      a: 'Initial supplier identification and quotes typically take 5-7 business days. Sample production takes 7-15 days depending on the product. Full production timelines vary by product complexity and order size, usually 30-60 days.',
    },
    {
      q: 'Can you handle small orders?',
      a: 'Yes. We work with businesses of all sizes. While minimum order quantities vary by factory, we have supplier relationships that accommodate smaller trial orders for new clients testing the market.',
    },
    {
      q: 'What quality control methods do you use?',
      a: 'We follow international AQL (Acceptable Quality Level) standards for inspections. This includes pre-production checks, in-line inspections during manufacturing, and pre-shipment final inspections. We provide detailed inspection reports with photos.',
    },
    {
      q: 'Do you handle shipping and customs?',
      a: 'Yes. We coordinate the entire logistics chain including freight forwarding (sea, air, or rail), customs documentation, import/export compliance, and door-to-door delivery. We work with trusted freight partners for competitive rates.',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="FAQ"
          title="Frequently Asked Questions"
          subtitle="Common questions about working with a China sourcing agent."
        />
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-semibold text-brand-dark text-sm md:text-base pr-4">
                  {faq.q}
                </span>
                {openIndex === idx ? (
                  <ChevronUp className="w-5 h-5 text-brand-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-4 pt-0">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Inquiry Section ─── */
function InquirySection() {
  return (
    <section className="py-20 md:py-28 bg-gray-50" id="inquiry">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Get Started"
          title="Request a Free Sourcing Quote"
          subtitle="Tell us what you need and our team will provide a detailed sourcing plan within 24 hours."
        />
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-10">
          <InquiryForm />
        </div>
      </div>
    </section>
  )
}

/* ─── Home Page ─── */
export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <InquirySection />
    </div>
  )
}
