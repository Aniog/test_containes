import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Shield, Search, ClipboardCheck, Package, Ship, Factory, Users, Globe, BarChart3, ChevronRight, MessageSquare, TrendingUp, Clock, Award, ArrowRight } from 'lucide-react'
import InquiryForm from '../components/home/InquiryForm'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and vet reliable suppliers that match your product specifications, quality requirements, and budget.',
  },
  {
    icon: Factory,
    title: 'Factory Audits',
    description: 'On-site verification of supplier facilities, production capacity, certifications, and working conditions.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment and during-production inspections to ensure products meet your specifications and standards.',
  },
  {
    icon: TrendingUp,
    title: 'Production Follow-Up',
    description: 'Regular monitoring of your orders throughout the production cycle to prevent delays and quality issues.',
  },
  {
    icon: Package,
    title: 'Sample Management',
    description: 'Coordinate sample development, collect samples from multiple suppliers, and manage shipping to your office.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics management including freight booking, documentation, customs clearance, and last-mile delivery.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Submit Your Requirements',
    description: 'Tell us about the products you need, quantities, quality standards, and target budget.',
  },
  {
    number: '02',
    title: 'Supplier Research & Vetting',
    description: 'We search our network of pre-vetted suppliers and conduct initial screening against your criteria.',
  },
  {
    number: '03',
    title: 'Quotes & Comparison',
    description: 'We present curated options with price comparisons, lead times, and supplier profiles for your review.',
  },
  {
    number: '04',
    title: 'Sample Evaluation',
    description: 'We coordinate sample requests from shortlisted suppliers and manage the evaluation process.',
  },
  {
    number: '05',
    title: 'Order & Production Monitoring',
    description: 'Once you place the order, we monitor production, conduct quality inspections, and provide regular updates.',
  },
  {
    number: '06',
    title: 'Shipping & Delivery',
    description: 'We handle logistics, documentation, and coordinate delivery to your destination port or warehouse.',
  },
]

const productCategories = [
  { name: 'Consumer Electronics', description: 'Smartphones, accessories, audio devices, wearables' },
  { name: 'Home & Kitchen', description: 'Household appliances, kitchen tools, home decor' },
  { name: 'Apparel & Accessories', description: 'Garments, bags, shoes, fashion accessories' },
  { name: 'Industrial Equipment', description: 'Machinery, tools, components, MRO supplies' },
  { name: 'Auto Parts', description: 'Vehicle components, accessories, maintenance tools' },
  { name: 'Packaging Materials', description: 'Custom boxes, labels, bags, wrapping materials' },
  { name: 'Furniture & Home Decor', description: 'Indoor/outdoor furniture, lighting, decorations' },
  { name: 'Health & Beauty', description: 'Cosmetics, personal care, supplements, medical supplies' },
]

const problems = [
  {
    title: 'Unreliable Suppliers',
    description: 'Many overseas buyers struggle with suppliers who fail to deliver on quality or quantity commitments.',
    solution: 'We pre-vet every supplier through factory audits, license verification, and reference checks before recommending them.',
  },
  {
    title: 'Language & Cultural Barriers',
    description: 'Miscommunication with Chinese suppliers leads to specification errors, delays, and costly mistakes.',
    solution: 'Our bilingual team bridges the gap, ensuring your requirements are clearly understood and executed correctly.',
  },
  {
    title: 'Quality Control Issues',
    description: 'Products arriving below specification or with defects is a common and expensive problem.',
    solution: 'We perform during-production and pre-shipment inspections using standardized AQL sampling procedures.',
  },
  {
    title: 'Supply Chain Complexity',
    description: 'Managing logistics, customs documentation, and international shipping is time-consuming and error-prone.',
    solution: 'We handle the entire logistics chain — from factory to your doorstep — with full documentation support.',
  },
]

const trustPoints = [
  {
    icon: Users,
    title: '10+ Years Experience',
    description: 'Deep expertise in China sourcing across multiple industries and product categories.',
  },
  {
    icon: Shield,
    title: 'Verified Supplier Network',
    description: 'We only work with suppliers we have personally audited and verified.',
  },
  {
    icon: Globe,
    title: 'Global Client Base',
    description: 'Trusted by importers and businesses from 30+ countries worldwide.',
  },
  {
    icon: Award,
    title: 'Quality Guarantee',
    description: 'Our inspection protocols ensure products meet your specifications before shipment.',
  },
  {
    icon: Clock,
    title: 'Real-Time Updates',
    description: 'Regular progress reports with photos, videos, and production status updates.',
  },
  {
    icon: MessageSquare,
    title: 'Dedicated Support',
    description: 'A personal sourcing manager assigned to your account for consistent communication.',
  },
]

const faqs = [
  {
    q: 'What types of products can you source from China?',
    a: 'We source across virtually all categories including consumer electronics, apparel, home goods, industrial equipment, auto parts, packaging, furniture, and health & beauty products. If you have a specific product in mind, contact us and we will assess the feasibility.',
  },
  {
    q: 'How do you verify suppliers?',
    a: 'Our verification process includes business license validation, on-site factory audits, production capability assessment, quality management system evaluation, and client reference checks. We only recommend suppliers that pass our rigorous screening.',
  },
  {
    q: 'What are your fees and how do you charge?',
    a: 'Our fee structure is transparent and tailored to each project. Typically we charge a percentage of the order value or a fixed project fee depending on the scope of work. Contact us for a free, no-obligation quote based on your specific requirements.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Timelines vary based on product complexity and requirements. Initial supplier identification typically takes 1-2 weeks. Sample development and evaluation can take 2-4 weeks. Production timelines depend on order quantity and factory schedules.',
  },
  {
    q: 'Do you handle shipping and logistics?',
    a: 'Yes, we coordinate the entire shipping process including freight booking, export documentation, customs clearance, and delivery to your destination. We work with major freight forwarders to offer competitive rates for both sea freight and air freight.',
  },
  {
    q: 'What is MOQ and how does it work?',
    a: 'MOQ (Minimum Order Quantity) is set by each supplier. We help negotiate favorable MOQs on your behalf and can also connect you with suppliers who specialize in smaller runs if you are starting with lower volumes.',
  },
  {
    q: 'How do you handle quality control?',
    a: 'We offer multiple inspection points: during-production inspection, pre-shipment inspection, and container loading supervision. Our inspections follow AQL (Acceptable Quality Limit) standards with detailed reports including photos and measurements.',
  },
  {
    q: 'Can you help with custom packaging and branding?',
    a: 'Absolutely. We work with suppliers and packaging specialists to develop custom packaging, branded labels, and retail-ready packaging that meets your specifications and market requirements.',
  },
]

const caseStudies = [
  {
    company: 'EuroTech GmbH',
    industry: 'Consumer Electronics',
    country: 'Germany',
    challenge: 'Needed a reliable supplier for Bluetooth speakers with specific audio quality requirements.',
    result: 'Identified and audited 3 qualified suppliers. Client approved samples within 2 weeks. Successfully delivered first order of 10,000 units with zero defects.',
    savings: '35% cost reduction vs previous European supplier',
  },
  {
    company: 'BuildRight Hardware',
    industry: 'Industrial Equipment',
    country: 'United States',
    challenge: 'Required certified safety equipment suppliers for construction hardware distribution.',
    result: 'Sourced 5 certified factories, conducted comprehensive audits, negotiated annual contract. Ongoing quality inspection program established.',
    savings: '42% cost reduction with improved quality',
  },
  {
    company: 'Moda Fashion Ltd',
    industry: 'Apparel',
    country: 'United Kingdom',
    challenge: 'Needed ethical garment manufacturers for a sustainable fashion brand launch.',
    result: 'Sourced 4 suppliers with ethical certifications. Managed sample development across 30 SKUs. Production of 25,000 units delivered on schedule.',
    savings: '28% cost reduction with full traceability',
  },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy-light opacity-95"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/80 text-sm px-4 py-1.5 rounded-full mb-6">
              <Shield className="w-4 h-4" />
              <span>Trusted by importers in 30+ countries</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, 
              follow production, and coordinate shipping — so you can source from China with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                See How It Works
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '10+', label: 'Years Experience' },
              { number: '500+', label: 'Suppliers Vetted' },
              { number: '30+', label: 'Countries Served' },
              { number: '98%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-navy">{stat.number}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy text-center mb-4">
            Problems We Solve
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Sourcing from China comes with real challenges. Here is how we help you overcome them.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((problem) => (
              <div key={problem.title} className="bg-gray-50 rounded-xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-brand-navy mb-3">{problem.title}</h3>
                <p className="text-gray-600 mb-4">{problem.description}</p>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">{problem.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy text-center mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            End-to-end sourcing support from supplier identification to delivery at your doorstep.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-brand-navy/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-brand-navy" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-navy-light transition-colors"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy text-center mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            A structured, transparent process designed to minimize risk and maximize results.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.number} className="relative">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-extrabold text-brand-red/20 shrink-0 leading-none">{step.number}</div>
                  <div>
                    <h3 className="font-bold text-brand-navy mb-1">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-navy-light text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Learn More About Our Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy text-center mb-4">
            Products We Source
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Across multiple industries — we find the right supplier for virtually any product.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {productCategories.map((cat) => (
              <div key={cat.name} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-brand-navy mb-1">{cat.name}</h3>
                <p className="text-gray-500 text-sm">{cat.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-navy-light transition-colors"
            >
              View All Categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Trust */}
      <section className="py-16 md:py-24 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Choose SSourcing China
          </h2>
          <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-12">
            What sets us apart is our commitment to transparency, rigorous supplier vetting, and dedicated account management.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustPoints.map((point) => (
              <div key={point.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <point.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{point.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy text-center mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Real results for real clients. See how we have helped businesses source successfully from China.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <div key={cs.company} className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-brand-red bg-red-50 px-2 py-1 rounded">{cs.industry}</span>
                  <span className="text-xs text-gray-400">{cs.country}</span>
                </div>
                <h3 className="font-bold text-brand-navy text-lg mb-2">{cs.company}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  <span className="font-semibold">Challenge:</span> {cs.challenge}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  <span className="font-semibold">Result:</span> {cs.result}
                </p>
                <div className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                  <BarChart3 className="w-3.5 h-3.5" />
                  {cs.savings}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-navy-light transition-colors"
            >
              View More Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Answers to common questions about working with a China sourcing agent.
          </p>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Sourcing from China?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Tell us what you need and we will provide a free, no-obligation sourcing plan within 48 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
      <button
        className="w-full flex items-center justify-between p-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-brand-navy pr-4">{question}</span>
        <ChevronRight
          className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${
            isOpen ? 'rotate-90' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-5">
          <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}