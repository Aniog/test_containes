import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  CheckCircle,
  Shield,
  Factory,
  ClipboardCheck,
  Truck,
  Search,
  ArrowRight,
  Star,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

// Trust stats data
const trustStats = [
  { value: '10+', label: 'Years Experience' },
  { value: '2,500+', label: 'Suppliers Verified' },
  { value: '15,000+', label: 'Orders Completed' },
  { value: '98%', label: 'Client Satisfaction' },
]

// Services data
const services = [
  {
    icon: Shield,
    title: 'Supplier Verification',
    description:
      'We verify supplier legitimacy, business licenses, and production capabilities to ensure you work with genuine partners.',
    href: '/services#verification',
  },
  {
    icon: Factory,
    title: 'Factory Audit',
    description:
      'Comprehensive on-site audits assessing production capacity, quality management systems, and compliance standards.',
    href: '/services#audit',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control Inspection',
    description:
      'Pre-shipment inspections at key production stages to identify defects and ensure products meet your specifications.',
    href: '/services#qc',
  },
  {
    icon: Search,
    title: 'Sourcing & Negotiation',
    description:
      'We find the right suppliers for your needs and negotiate favorable terms, pricing, and payment conditions.',
    href: '/services#sourcing',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    description:
      'End-to-end logistics coordination including freight forwarding, customs clearance, and door-to-door delivery.',
    href: '/services#shipping',
  },
  {
    icon: CheckCircle,
    title: 'Production Follow-up',
    description:
      'Regular progress updates and quality checks during production to keep your order on track and within specifications.',
    href: '/services#production',
  },
]

// Problems we solve
const problems = [
  {
    title: 'Language & Cultural Barriers',
    description:
      'We bridge communication gaps and navigate Chinese business culture to ensure clear understanding between all parties.',
    icon: '🌏',
  },
  {
    title: 'Supplier Reliability Risk',
    description:
      'Our verification process filters out unreliable suppliers, reducing the risk of fraud and substandard products.',
    icon: '🛡️',
  },
  {
    title: 'Quality Control Challenges',
    description:
      'Professional inspection services catch defects before shipment, saving you from costly returns and delays.',
    icon: '✅',
  },
  {
    title: 'Complex Logistics',
    description:
      'We handle all shipping complexities, from freight coordination to customs clearance and final delivery.',
    icon: '📦',
  },
]

// Process steps
const processSteps = [
  {
    number: '01',
    title: 'Submit Your Request',
    description:
      'Tell us about your product requirements, quantity, target price, and any specific supplier preferences.',
  },
  {
    number: '02',
    title: 'Supplier Matching',
    description:
      'We identify and verify suitable suppliers, then present you with options that match your criteria.',
  },
  {
    number: '03',
    title: 'Negotiation & Sampling',
    description:
      'We negotiate terms on your behalf and arrange product samples for your approval before production.',
  },
  {
    number: '04',
    title: 'Production & QC',
    description:
      'We monitor production progress and conduct quality inspections to ensure everything meets standards.',
  },
  {
    number: '05',
    title: 'Shipping & Delivery',
    description:
      'We coordinate logistics, handle documentation, and ensure smooth delivery to your specified location.',
  },
]

// Products we source
const productCategories = [
  {
    name: 'Electronics',
    description:
      'Consumer electronics, components, smart devices, and electronic accessories.',
    image: 'electronics manufacturing factory',
  },
  {
    name: 'Furniture',
    description:
      'Home furniture, office furniture, outdoor furniture, and custom woodwork.',
    image: 'furniture manufacturing warehouse',
  },
  {
    name: 'Textiles & Apparel',
    description:
      'Fabrics, garments, accessories, and custom textile production.',
    image: 'textile factory production',
  },
  {
    name: 'Machinery',
    description:
      'Industrial machinery, equipment parts, and manufacturing tools.',
    image: 'industrial machinery factory',
  },
  {
    name: 'Packaging',
    description:
      'Custom packaging solutions, boxes, labels, and promotional materials.',
    image: 'packaging manufacturing facility',
  },
  {
    name: 'Consumer Goods',
    description:
      'Kitchenware, home goods, toys, sports equipment, and daily necessities.',
    image: 'consumer goods warehouse',
  },
]

// Case studies preview
const caseStudies = [
  {
    company: 'TechStart Inc.',
    industry: 'Electronics',
    challenge:
      'Needed to source smart home devices from verified suppliers with consistent quality.',
    solution:
      'We verified 15 suppliers, conducted factory audits, and implemented a rigorous QC process.',
    result: 'Reduced defect rate from 12% to 1.5%, saving $180,000 annually.',
    image: 'electronics factory inspection',
  },
  {
    company: 'HomeStyle Furniture',
    industry: 'Furniture',
    challenge:
      'Struggled to find reliable manufacturers for custom wooden furniture at competitive prices.',
    solution:
      'We identified and audited 8 factories, negotiated volume discounts, and established QC checkpoints.',
    result: 'Achieved 35% cost reduction while improving product quality.',
    image: 'furniture manufacturing workshop',
  },
  {
    company: 'GreenPack Solutions',
    industry: 'Packaging',
    challenge: 'Required eco-friendly packaging suppliers with certifications.',
    solution:
      'We sourced certified sustainable packaging manufacturers and verified their credentials.',
    result: 'Secured 3 certified suppliers with 40% faster lead times.',
    image: 'packaging factory quality check',
  },
]

// Testimonials
const testimonials = [
  {
    quote:
      'SSourcing China transformed our supply chain. Their verification process saved us from a potential $500K loss from a fraudulent supplier.',
    author: 'Michael Chen',
    role: 'CEO',
    company: 'TechFlow Solutions',
  },
  {
    quote:
      'The quality control inspections have been invaluable. We have not had a single shipment rejected since working with them.',
    author: 'Sarah Williams',
    role: 'Procurement Director',
    company: 'HomeStyle Furniture',
  },
  {
    quote:
      'Professional, reliable, and cost-effective. They truly understand the challenges of sourcing from China.',
    author: 'David Park',
    role: 'Founder',
    company: 'GreenPack Inc.',
  },
]

// FAQ data
const faqs = [
  {
    question: 'How long does the sourcing process typically take?',
    answer:
      'The timeline varies based on product complexity and supplier availability. Typically, initial supplier matching takes 1-2 weeks, sampling takes 2-4 weeks, and production depends on order size. We provide detailed timelines for each project.',
  },
  {
    question: 'What are your service fees?',
    answer:
      'Our fee structure depends on the services you need. We offer transparent pricing with no hidden costs. Contact us for a customized quote based on your specific requirements.',
  },
  {
    question: 'How do you ensure supplier reliability?',
    answer:
      'We conduct thorough verification including business license checks, factory visits, production capacity assessment, and reference verification. Our on-going monitoring ensures continued reliability throughout our partnership.',
  },
  {
    question: 'Can you handle shipping and logistics?',
    answer:
      'Yes, we provide end-to-end logistics support including freight forwarding, customs clearance, documentation, and door-to-door delivery. We work with trusted shipping partners to ensure safe and timely delivery.',
  },
  {
    question: 'What industries do you work with?',
    answer:
      'We work across various industries including electronics, furniture, textiles, machinery, packaging, and consumer goods. Our team has expertise in diverse product categories.',
  },
]

export default function HomePage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#0F172A] via-[#1E3A5F] to-[#2D5A87] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                <span className="w-2 h-2 bg-[#E67E22] rounded-full animate-pulse" />
                <span className="font-inter text-sm text-white/90">
                  Trusted by 500+ Global Buyers
                </span>
              </div>
              <h1 className="font-plus text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                China Sourcing Agent for Global Buyers
              </h1>
              <p className="font-inter text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
                Supporting overseas businesses with supplier verification,
                quality control, production follow-up, and shipping
                coordination since 2015.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E67E22] text-white font-inter font-semibold text-lg rounded-lg hover:bg-[#D35400] transition-all hover:scale-105"
                >
                  Get a Free Sourcing Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-inter font-semibold text-lg rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all"
                >
                  View Our Services
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  data-strk-img-id="hero-factory-8f2a9c"
                  data-strk-img="[hero-title] [hero-subtitle]"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="China factory manufacturing"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p
                    id="hero-title"
                    className="font-plus text-white font-semibold text-lg"
                  >
                    Professional Sourcing Solutions
                  </p>
                  <p
                    id="hero-subtitle"
                    className="font-inter text-white/80 text-sm"
                  >
                    Factory verification, quality inspection, and logistics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#F8FAFC"
            />
          </svg>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="bg-[#F8FAFC] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-plus text-3xl sm:text-4xl font-bold text-[#1E3A5F] mb-2">
                  {stat.value}
                </div>
                <div className="font-inter text-sm text-[#64748B]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-plus text-3xl sm:text-4xl font-bold text-[#1E293B] mb-4">
              Our Sourcing Services
            </h2>
            <p className="font-inter text-lg text-[#64748B] max-w-2xl mx-auto">
              Comprehensive solutions to ensure your China sourcing is safe,
              efficient, and profitable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="group p-8 bg-white border border-[#E2E8F0] rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#1E3A5F]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#E67E22] transition-colors">
                  <service.icon className="w-7 h-7 text-[#1E3A5F] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-plus text-xl font-semibold text-[#1E293B] mb-3">
                  {service.title}
                </h3>
                <p className="font-inter text-[#64748B] mb-4">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-[#E67E22] font-inter font-medium text-sm">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-plus text-3xl sm:text-4xl font-bold text-[#1E293B] mb-4">
              Problems We Solve
            </h2>
            <p className="font-inter text-lg text-[#64748B] max-w-2xl mx-auto">
              Common challenges when sourcing from China, and how we help you
              overcome them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex gap-6 p-6 bg-white rounded-xl border border-[#E2E8F0]"
              >
                <div className="text-4xl">{problem.icon}</div>
                <div>
                  <h3 className="font-plus text-xl font-semibold text-[#1E293B] mb-2">
                    {problem.title}
                  </h3>
                  <p className="font-inter text-[#64748B]">
                    {problem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-plus text-3xl sm:text-4xl font-bold text-[#1E293B] mb-4">
              Our Sourcing Process
            </h2>
            <p className="font-inter text-lg text-[#64748B] max-w-2xl mx-auto">
              A proven 5-step process that ensures successful sourcing from
              start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="p-6 bg-white border border-[#E2E8F0] rounded-xl h-full">
                  <div className="font-plus text-4xl font-bold text-[#E67E22]/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-plus text-lg font-semibold text-[#1E293B] mb-2">
                    {step.title}
                  </h3>
                  <p className="font-inter text-sm text-[#64748B]">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-[#E67E22]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E3A5F] text-white font-inter font-semibold rounded-lg hover:bg-[#2D5A87] transition-colors"
            >
              Learn More About Our Process
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-plus text-3xl sm:text-4xl font-bold text-[#1E293B] mb-4">
              Products We Source
            </h2>
            <p className="font-inter text-lg text-[#64748B] max-w-2xl mx-auto">
              Extensive experience across multiple product categories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl aspect-[4/3]"
              >
                <img
                  data-strk-img-id={`product-${index}-8f2a9c`}
                  data-strk-img={`[product-title-${index}] [product-desc-${index}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3
                    id={`product-title-${index}`}
                    className="font-plus text-xl font-semibold text-white mb-1"
                  >
                    {category.name}
                  </h3>
                  <p
                    id={`product-desc-${index}`}
                    className="font-inter text-sm text-white/80"
                  >
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E3A5F] text-white font-inter font-semibold rounded-lg hover:bg-[#2D5A87] transition-colors"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-plus text-3xl sm:text-4xl font-bold text-[#1E293B] mb-4">
              Success Stories
            </h2>
            <p className="font-inter text-lg text-[#64748B] max-w-2xl mx-auto">
              Real results from our partnerships with global buyers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video relative">
                  <img
                    data-strk-img-id={`case-${index}-8f2a9c`}
                    data-strk-img={`[case-company-${index}] [case-industry-${index}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={study.company}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#E67E22] text-white font-inter text-xs font-medium rounded-full">
                      {study.industry}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    id={`case-company-${index}`}
                    className="font-plus text-xl font-semibold text-[#1E293B] mb-2"
                  >
                    {study.company}
                  </h3>
                  <p className="font-inter text-sm text-[#64748B] mb-4">
                    <span className="font-medium text-[#1E293B]">Challenge:</span>{' '}
                    {study.challenge}
                  </p>
                  <p className="font-inter text-sm text-[#64748B] mb-4">
                    <span className="font-medium text-[#1E293B]">Solution:</span>{' '}
                    {study.solution}
                  </p>
                  <div className="pt-4 border-t border-[#E2E8F0]">
                    <p className="font-inter text-sm font-semibold text-[#27AE60]">
                      {study.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E3A5F] text-white font-inter font-semibold rounded-lg hover:bg-[#2D5A87] transition-colors"
            >
              View All Case Studies
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-plus text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="font-inter text-lg text-white/70 max-w-2xl mx-auto">
              Trusted by businesses worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-white/10 rounded-xl backdrop-blur-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#E67E22] text-[#E67E22]"
                    />
                  ))}
                </div>
                <p className="font-inter text-white/90 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-plus font-semibold text-white">
                    {testimonial.author}
                  </p>
                  <p className="font-inter text-sm text-white/70">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-plus text-3xl sm:text-4xl font-bold text-[#1E293B] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-inter text-lg text-[#64748B]">
              Common questions about our sourcing services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-[#E2E8F0] rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F8FAFC] transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-plus font-semibold text-[#1E293B]">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#64748B]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#64748B]" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="font-inter text-[#64748B]">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1E3A5F] to-[#2D5A87]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-plus text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Streamline Your China Sourcing?
          </h2>
          <p className="font-inter text-lg text-white/80 mb-8">
            Get a free consultation and quote tailored to your specific needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E67E22] text-white font-inter font-semibold text-lg rounded-lg hover:bg-[#D35400] transition-all hover:scale-105"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}