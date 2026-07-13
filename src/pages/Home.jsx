import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, Shield, ClipboardCheck, Truck, BarChart3, 
  Package, Factory, FileCheck, HeadphonesIcon, 
  ArrowRight, CheckCircle, Star, Globe, ShieldCheck,
  TruckIcon, Clock, TrendingUp, ChevronRight, MessageSquare,
  Users, Award, ThumbsUp
} from 'lucide-react'
import InquiryForm from '../components/InquiryForm'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and vet reliable suppliers that match your product specifications, quality standards, and budget requirements.',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site audits to verify manufacturer credentials, production capacity, certifications, and compliance with international standards.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment inspections, during-production checks, and detailed reporting to ensure products meet your specifications.',
  },
  {
    icon: BarChart3,
    title: 'Production Monitoring',
    desc: 'Regular progress updates, timeline management, and proactive issue resolution throughout the manufacturing process.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'End-to-end logistics management including freight booking, customs documentation, and door-to-door delivery.',
  },
  {
    icon: Shield,
    title: 'Supplier Risk Management',
    desc: 'Continuous monitoring of supplier performance, financial health, and compliance to minimize supply chain risks.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Tell Us Your Requirements',
    desc: 'Share your product specifications, target budget, quality expectations, and any certifications needed.',
  },
  {
    number: '02',
    title: 'Supplier Matching',
    desc: 'We research and shortlist qualified suppliers that match your criteria, complete with company profiles and capability assessments.',
  },
  {
    number: '03',
    title: 'Factory Verification',
    desc: 'Our team conducts on-site audits to verify the supplier\'s facilities, production capacity, and quality control systems.',
  },
  {
    number: '04',
    title: 'Sample & Negotiation',
    desc: 'We coordinate sample requests, evaluate product quality, and negotiate pricing and payment terms on your behalf.',
  },
  {
    number: '05',
    title: 'Production & QC',
    desc: 'Throughout production, we perform regular quality checks and provide detailed reports to keep you informed.',
  },
  {
    number: '06',
    title: 'Shipping & Delivery',
    desc: 'We handle logistics, customs documentation, and arrange shipping to your preferred destination.',
  },
]

const productCategories = [
  {
    icon: Package,
    title: 'Consumer Electronics',
    items: ['Smartphones & accessories', 'Audio devices', 'Wearables', 'Smart home devices'],
  },
  {
    icon: Factory,
    title: 'Industrial Equipment',
    items: ['Machinery parts', 'Tools & hardware', 'Automation components', 'Safety equipment'],
  },
  {
    icon: Package,
    title: 'Home & Lifestyle',
    items: ['Home appliances', 'Furniture', 'Kitchenware', 'Textiles & bedding'],
  },
  {
    icon: Package,
    title: 'Fashion & Accessories',
    items: ['Apparel & garments', 'Bags & luggage', 'Footwear', 'Jewelry & watches'],
  },
  {
    icon: Package,
    title: 'Health & Beauty',
    items: ['Skincare products', 'Health supplements', 'Medical devices', 'Personal care'],
  },
  {
    icon: Package,
    title: 'Auto Parts & Accessories',
    items: ['Car parts', 'Motorcycle accessories', 'Auto electronics', 'Maintenance tools'],
  },
]

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    desc: 'Worried about supplier fraud or substandard products? We thoroughly vet every supplier before introduction.',
  },
  {
    icon: AlertTriangle,
    title: 'Quality Inconsistency',
    desc: 'Inconsistent product quality can damage your brand. Our rigorous inspection protocols ensure every shipment meets your standards.',
  },
  {
    icon: AlertTriangle,
    title: 'Communication Barriers',
    desc: 'Language and time zone differences cause delays. Our bilingual team bridges the gap between you and your suppliers.',
  },
  {
    icon: AlertTriangle,
    title: 'Shipping Complexities',
    desc: 'International shipping, customs clearance, and documentation can be overwhelming. We manage the entire logistics process.',
  },
]

const trustPoints = [
  { icon: Award, value: '500+', label: 'Suppliers Verified' },
  { icon: Globe, value: '30+', label: 'Countries Served' },
  { icon: Users, value: '200+', label: 'Happy Clients' },
  { icon: ShieldCheck, value: '98%', label: 'On-Time Delivery' },
]

const caseStudies = [
  {
    company: 'TechGear Europe',
    industry: 'Consumer Electronics',
    result: '40% cost reduction',
    description: 'Helped a Netherlands-based retailer source Bluetooth headphones directly from a verified manufacturer in Shenzhen, reducing costs by 40% while improving quality consistency.',
  },
  {
    company: 'GreenHome US',
    industry: 'Home & Lifestyle',
    result: '3x faster production',
    description: 'Optimized the supply chain for a US home goods brand by identifying alternative suppliers and implementing QC protocols that cut production lead time from 12 to 4 weeks.',
  },
  {
    company: 'AutoParts UK',
    industry: 'Auto Parts',
    result: 'Zero defects',
    description: 'Conducted rigorous factory audits and implemented stage-by-stage quality checks for a UK auto parts importer, resulting in zero defects across their first 10 shipments.',
  },
]

const faqs = [
  {
    q: 'What makes SSourcing China different from other sourcing agents?',
    a: 'We combine deep local market knowledge with rigorous verification processes. Our team conducts physical factory audits, not just online checks. We provide transparent reporting at every stage and never accept commissions from suppliers, ensuring our recommendations are always in your best interest.',
  },
  {
    q: 'How do you verify suppliers?',
    a: 'Our verification process includes on-site factory visits, business license verification, production capability assessment, quality control system review, existing client references, and financial stability checks. We provide a comprehensive report for every supplier we recommend.',
  },
  {
    q: 'What are your service fees?',
    a: 'Our fee structure is transparent and tailored to each project. We typically charge a percentage of the order value or a fixed project fee, depending on the scope. Contact us for a customized quote with no obligation.',
  },
  {
    q: 'Do you handle all product categories?',
    a: 'We specialize in consumer electronics, industrial equipment, home & lifestyle products, fashion, health & beauty, and auto parts. If your product category is not listed, contact us — we may still be able to help through our extensive supplier network.',
  },
  {
    q: 'What is the typical lead time?',
    a: 'Lead times vary by product complexity and supplier capacity. Generally, sourcing and supplier verification takes 1-2 weeks, sample production 2-4 weeks, and bulk production 4-8 weeks. We provide detailed timelines during the initial consultation.',
  },
  {
    q: 'How do you handle quality control?',
    a: 'We implement a multi-stage QC process: raw material inspection, during-production checks, pre-shipment inspection, and final quality review. All inspections follow internationally recognized standards (AQL, ISO) and include photographic documentation.',
  },
  {
    q: 'Can you help with shipping and customs?',
    a: 'Yes, we coordinate the entire logistics process including freight booking, export documentation, customs clearance, and door-to-door delivery. We work with major freight forwarders to offer competitive shipping rates.',
  },
  {
    q: 'How do I get started?',
    a: 'Simply fill out our inquiry form or contact us directly. We\'ll schedule a free consultation to understand your requirements, discuss our process, and provide a tailored service proposal within 2-3 business days.',
  },
]

function AlertTriangle({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  )
}

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary via-primary to-primary-light">
        <div 
          className="absolute inset-0 opacity-10"
          data-strk-bg-id="hero-bg-a1b2c3"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="container-main relative z-10 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6">
              <Shield className="w-4 h-4 text-green-300" />
              <span className="text-blue-200 text-sm font-medium">Trusted by 200+ importers worldwide</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-blue-200 leading-relaxed mb-10 max-w-2xl">
              We help overseas businesses find reliable Chinese suppliers, verify factories, 
              inspect product quality, manage production, and coordinate shipping — so you can 
              source with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-semibold text-base bg-white text-primary hover:bg-blue-50 transition-colors">
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/how-it-works" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-semibold text-base border-2 border-white/30 text-white hover:bg-white/10 transition-colors">
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-main py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point) => (
              <div key={point.label} className="text-center">
                <div className="flex justify-center mb-2">
                  <point.icon className="w-8 h-8 text-primary-light" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-primary">{point.value}</div>
                <div className="text-sm text-muted mt-1">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-surface">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Sourcing Services</h2>
            <p className="text-lg text-gray-600">
              End-to-end sourcing support from supplier identification to final delivery. 
              We handle the complexities so you can focus on growing your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <div key={service.title} className="card hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary-light" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary">
              Explore All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Sourcing Process</h2>
            <p className="text-lg text-gray-600">
              A structured, transparent approach to sourcing that minimizes risk and ensures quality results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.number} className="relative flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                  {step.number !== '06' && (
                    <div className="hidden lg:block absolute top-12 left-6 w-0.5 h-8 bg-gray-200" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="section-padding bg-surface">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Products We Source</h2>
            <p className="text-lg text-gray-600">
              We source across a wide range of product categories. If it can be manufactured in China, 
              we can help you find the right supplier.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {productCategories.map((cat) => (
              <div key={cat.title} className="card hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <cat.icon className="w-6 h-6 text-primary-light" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products-we-source" className="btn-primary">
              View All Categories
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Problems We Solve</h2>
            <p className="text-lg text-gray-600">
              Sourcing from China comes with challenges. Here are the most common ones we help our clients overcome.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {problems.map((problem) => (
              <div key={problem.title} className="card flex gap-4 items-start">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <problem.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-1">{problem.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{problem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-surface">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h2>
            <p className="text-lg text-gray-600">
              Real results from real partnerships. See how we've helped businesses like yours.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {caseStudies.map((cs) => (
              <div key={cs.company} className="card hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-primary-light" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{cs.company}</div>
                    <div className="text-xs text-muted">{cs.industry}</div>
                  </div>
                </div>
                <div className="inline-block bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {cs.result}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{cs.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="btn-primary">
              View All Case Studies
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Common questions about our sourcing services and process.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="card cursor-pointer group">
                <summary className="flex items-center justify-between font-medium text-base text-primary hover:text-primary-light">
                  {faq.q}
                  <ChevronRight className="w-5 h-5 text-muted group-open:rotate-90 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Sourcing?
            </h2>
            <p className="text-lg text-blue-200 mb-10">
              Tell us about your sourcing needs and we'll get back to you within 2-3 business days 
              with a tailored proposal.
            </p>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}