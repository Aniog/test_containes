import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  ArrowRight, CheckCircle, Shield, Globe, Search, Eye, Truck, FileCheck,
  Package, Clock, Users, Star, ChevronRight, Phone, Mail, MapPin,
  Factory, ClipboardCheck, Ship, BarChart3, AlertTriangle, TrendingUp
} from 'lucide-react'
import { cn } from '@/lib/utils'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We find and vet reliable Chinese suppliers matching your product requirements, quality standards, and budget.',
    features: ['Supplier background checks', 'Factory capability assessment', 'Price comparison analysis']
  },
  {
    icon: Factory,
    title: 'Factory Audits',
    description: 'On-site factory inspections to verify production capabilities, certifications, and working conditions.',
    features: ['ISO certification verification', 'Production capacity review', 'Compliance assessment']
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Rigorous quality control at every production stage to ensure products meet your specifications.',
    features: ['Pre-production samples', 'In-line inspection', 'Pre-shipment inspection']
  },
  {
    icon: Eye,
    title: 'Production Monitoring',
    description: 'Real-time production tracking and regular updates to keep your orders on schedule.',
    features: ['Progress tracking', 'Timeline management', 'Issue escalation']
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics management from factory to your doorstep, including customs clearance.',
    features: ['Freight forwarding', 'Customs documentation', 'Door-to-door delivery']
  },
  {
    icon: FileCheck,
    title: 'Documentation',
    description: 'Complete trade documentation support including contracts, invoices, and compliance certificates.',
    features: ['Contract drafting', 'Invoice management', 'Certificate handling']
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Tell Us What You Need',
    description: 'Share your product requirements, target price, quantity, and quality standards.',
    icon: Package
  },
  {
    step: '02',
    title: 'We Find & Verify Suppliers',
    description: 'Our team identifies and audits qualified suppliers from our verified network.',
    icon: Search
  },
  {
    step: '03',
    title: 'Sample & Negotiate',
    description: 'We arrange samples, negotiate pricing, and finalize terms with your chosen supplier.',
    icon: CheckCircle
  },
  {
    step: '04',
    title: 'Production & QC',
    description: 'We monitor production and conduct quality inspections at key milestones.',
    icon: ClipboardCheck
  },
  {
    step: '05',
    title: 'Ship & Deliver',
    description: 'We coordinate shipping, handle customs, and ensure safe delivery to your location.',
    icon: Truck
  }
]

const productsWeSource = [
  { name: 'Electronics & Gadgets', items: ['Consumer electronics', 'Smart devices', 'Accessories'] },
  { name: 'Home & Garden', items: ['Furniture', 'Kitchenware', 'Decorative items'] },
  { name: 'Fashion & Apparel', clothing: ['Clothing', 'Bags', 'Accessories'] },
  { name: 'Industrial Equipment', items: ['Machinery', 'Tools', 'Safety equipment'] },
  { name: 'Promotional Products', items: ['Custom merchandise', 'Branded items', 'Corporate gifts'] },
  { name: 'Building Materials', items: ['Hardware', 'Fixtures', 'Construction supplies'] },
]

const problemsWeSolve = [
  {
    problem: 'Unreliable Suppliers',
    solution: 'We verify every supplier with on-site audits, reference checks, and production history review.',
    icon: AlertTriangle,
    result: '98% supplier satisfaction rate'
  },
  {
    problem: 'Quality Issues',
    solution: 'Multi-stage quality inspections catch defects before shipment, protecting your investment.',
    icon: Shield,
    result: 'Less than 2% defect rate'
  },
  {
    problem: 'Communication Barriers',
    solution: 'Bilingual team bridges language gaps and ensures clear, accurate communication with factories.',
    icon: Users,
    result: '24-hour response time'
  },
  {
    problem: 'Shipping Delays',
    solution: 'Proactive logistics planning and real-time tracking keep your supply chain moving on schedule.',
    icon: Clock,
    result: '95% on-time delivery'
  },
  {
    problem: 'Hidden Costs',
    solution: 'Transparent pricing with detailed cost breakdowns. No surprises, no hidden fees.',
    icon: BarChart3,
    result: '15-30% average savings'
  },
  {
    problem: 'Compliance Risks',
    solution: 'We ensure all products meet destination country regulations, certifications, and safety standards.',
    icon: FileCheck,
    result: '100% compliance track record'
  }
]

const trustPoints = [
  { number: '500+', label: 'Verified Suppliers', description: 'Pre-screened and audited' },
  { number: '50+', label: 'Countries Served', description: 'Global client base' },
  { number: '10,000+', label: 'Orders Completed', description: 'Successful shipments' },
  { number: '15+', label: 'Years Experience', description: 'Industry expertise' },
  { number: '98%', label: 'Client Retention', description: 'Long-term partnerships' },
  { number: '$50M+', label: 'Goods Sourced', description: 'Total value managed' },
]

const caseStudies = [
  {
    id: 'electronics-us',
    title: 'US Retailer Reduces Costs by 35%',
    industry: 'Consumer Electronics',
    challenge: 'High procurement costs and inconsistent quality from existing suppliers.',
    solution: 'We identified 3 qualified manufacturers, conducted factory audits, and negotiated volume pricing.',
    result: '35% cost reduction with improved product quality and faster lead times.',
    imageQuery: 'electronics manufacturing factory production line',
    imageId: 'case-electronics-us-img',
  },
  {
    id: 'furniture-eu',
    title: 'European Brand Launches New Product Line',
    industry: 'Home Furniture',
    challenge: 'Needed reliable manufacturer for custom furniture designs with strict EU compliance.',
    solution: 'We sourced specialized factories, managed prototyping, and ensured CE certification.',
    result: 'Successful product launch with full regulatory compliance, delivered 2 weeks ahead of schedule.',
    imageQuery: 'furniture factory woodworking production',
    imageId: 'case-furniture-eu-img',
  },
  {
    id: 'apparel-au',
    title: 'Australian Fashion Brand Scales Production',
    industry: 'Fashion & Apparel',
    challenge: 'Struggled to scale production while maintaining quality and meeting seasonal deadlines.',
    solution: 'We coordinated multiple certified factories and implemented strict QC protocols.',
    result: '3x production capacity increase with consistent quality across all suppliers.',
    imageQuery: 'garment factory clothing production line',
    imageId: 'case-apparel-au-img',
  },
]

const faqs = [
  {
    question: 'How do you verify suppliers?',
    answer: 'We conduct comprehensive factory audits including on-site inspections, license verification, production capability assessment, quality management systems review, and reference checks with existing clients. Every supplier in our network must pass our rigorous vetting process.'
  },
  {
    question: 'What industries do you serve?',
    answer: 'We work across a wide range of industries including electronics, home goods, fashion, industrial equipment, promotional products, building materials, and more. Our team has specialized knowledge in each sector to ensure we find the right suppliers for your specific needs.'
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Initial supplier identification typically takes 3-5 business days. Sample production and approval can take 7-15 days depending on complexity. Full production timelines vary by product and quantity, but we provide detailed timelines upfront and keep you updated throughout.'
  },
  {
    question: 'What are your fees?',
    answer: 'We offer flexible pricing models including commission-based fees (typically 5-10% of order value), flat project fees for one-time sourcing, and retainer arrangements for ongoing sourcing needs. We provide transparent quotes with no hidden costs.'
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes, we provide end-to-end logistics support including freight forwarding, customs documentation, import/export compliance, and door-to-door delivery. We work with trusted logistics partners to ensure safe and timely delivery worldwide.'
  },
  {
    question: 'What if there are quality issues with my order?',
    answer: 'Our multi-stage quality inspection process is designed to catch issues before shipment. If any problems are detected, we work immediately with the supplier to resolve them. We also offer post-delivery support and can assist with returns or replacements if needed.'
  }
]

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-navy-950 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            data-strk-bg-id="hero-bg-home"
            data-strk-bg="[hero-headline]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-navy-950/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 text-red-400 rounded-full mb-6 text-sm font-medium">
              <Shield className="w-4 h-4" />
              Trusted by 500+ Global Buyers
            </div>
            <h1 id="hero-headline" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              China Sourcing Agent for <span className="text-red-500">Global Buyers</span>
            </h1>
            <p className="text-xl text-navy-200 mb-8 leading-relaxed">
              Find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — 
              all with a single trusted partner on the ground in China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors text-lg"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors text-lg border border-white/20"
              >
                Our Services
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-8 text-navy-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>No upfront fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Verified suppliers only</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Quality guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Logos Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-wider font-medium">
            Trusted by leading companies worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            <div className="text-2xl font-bold text-gray-400">GlobalTech</div>
            <div className="text-2xl font-bold text-gray-400">EuroHome</div>
            <div className="text-2xl font-bold text-gray-400">AussieBrands</div>
            <div className="text-2xl font-bold text-gray-400">NordicGoods</div>
            <div className="text-2xl font-bold text-gray-400">MidEastTrade</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Sourcing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From initial supplier discovery to final delivery, we handle every step of your China sourcing journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Our Sourcing Process Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A simple, transparent 5-step process to get quality products from China to your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {step.step}
                </div>
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto -mt-10 mb-6 relative z-10">
                  <step.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-gray-200" />
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors"
            >
              Learn More About Our Process
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Products We Source
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We source a wide range of products across multiple industries, always from verified suppliers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsWeSource.map((product, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 hover:border-red-200 transition-colors">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{product.name}</h3>
                <ul className="space-y-2">
                  {product.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <ChevronRight className="w-4 h-4 text-red-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Sourcing Challenges We Solve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We understand the pain points of sourcing from China. Here is how we address them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problemsWeSolve.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Problem: {item.problem}</h3>
                <p className="text-gray-600 mb-4">{item.solution}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                  <TrendingUp className="w-4 h-4" />
                  {item.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points Section */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Global Buyers Trust SSourcing China
            </h2>
            <p className="text-lg text-navy-200 max-w-2xl mx-auto">
              Numbers speak louder than words. Here is our track record of delivering results.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">{point.number}</div>
                <div className="text-white font-semibold mb-1">{point.label}</div>
                <div className="text-sm text-navy-300">{point.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results from real clients who trusted us with their China sourcing needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="h-48 bg-gray-200 relative">
                  <img
                    data-strk-img-id={study.imageId}
                    data-strk-img={`[case-title-${study.id}] [case-industry-${study.id}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full">
                      {study.industry}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 id={`case-title-${study.id}`} className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                  <span id={`case-industry-${study.id}`} className="sr-only">{study.industry}</span>
                  <p className="text-gray-600 mb-4">{study.challenge}</p>
                  <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                    <div className="text-sm font-medium text-green-800 mb-1">Result:</div>
                    <p className="text-green-700">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              View All Case Studies
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our China sourcing services.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 md:p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Source Products from China?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Get a free sourcing quote today and let our experts handle your supply chain. 
            No upfront costs, no obligations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+8612345678900"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-800 transition-colors text-lg border border-white/20"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
