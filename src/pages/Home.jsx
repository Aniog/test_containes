import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { Shield, Search, ClipboardCheck, Ship, BarChart3, Users, CheckCircle, ArrowRight, Star, Building2, Package, Truck, FileSearch, Globe } from "lucide-react"
import Button from "@/components/ui/button"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    description: "We identify and vet reliable suppliers across China that match your product requirements, budget, and quality expectations."
  },
  {
    icon: Building2,
    title: "Factory Verification",
    description: "On-site audits verify manufacturing capabilities, certifications, working conditions, and production capacity before you commit."
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    description: "Pre-shipment inspections, during-production checks, and detailed reporting ensure your products meet specifications."
  },
  {
    icon: Package,
    title: "Product Sampling",
    description: "We coordinate prototype development and sample production so you can evaluate quality before placing bulk orders."
  },
  {
    icon: BarChart3,
    title: "Production Monitoring",
    description: "Regular progress tracking, milestone verification, and real-time updates keep you informed throughout manufacturing."
  },
  {
    icon: Ship,
    title: "Shipping & Logistics",
    description: "We coordinate freight, consolidate shipments, handle documentation, and manage customs clearance to your destination."
  }
]

const processSteps = [
  {
    step: "01",
    title: "Submit Your Requirements",
    description: "Tell us about your product, target price, quantity, and quality needs. We'll review and prepare a tailored sourcing plan."
  },
  {
    step: "02",
    title: "Supplier Matching",
    description: "We search our network of vetted suppliers to find the best matches. You receive shortlisted options with detailed profiles."
  },
  {
    step: "03",
    title: "Factory Audit & Samples",
    description: "We conduct on-site factory audits and coordinate sample production so you can verify quality firsthand."
  },
  {
    step: "04",
    title: "Order & Production",
    description: "Once you approve, we help negotiate terms, place orders, and monitor production with regular progress reports."
  },
  {
    step: "05",
    title: "Quality Control",
    description: "Our inspectors check products during and after production to catch issues before they leave the factory."
  },
  {
    step: "06",
    title: "Shipping & Delivery",
    description: "We arrange freight, handle export documentation, and track your shipment until it arrives at your door."
  }
]

const productCategories = [
  { name: "Electronics & Components", items: "PCBs, sensors, IoT devices, connectors, cables" },
  { name: "Industrial Equipment", items: "Machinery parts, tools, automation components, hardware" },
  { name: "Packaging & Materials", items: "Custom boxes, labels, films, raw packaging materials" },
  { name: "Home & Lifestyle", items: "Furniture, kitchenware, home decor, storage solutions" },
  { name: "Apparel & Textiles", items: "Garments, fabrics, accessories, technical textiles" },
  { name: "Automotive Parts", items: "Components, accessories, aftermarket parts, tools" }
]

const problems = [
  {
    title: "Worried about supplier reliability?",
    description: "We verify every factory with on-site audits, business license checks, and capability assessments so you know who you're working with."
  },
  {
    title: "Quality concerns keeping you up at night?",
    description: "Our inspectors based in China perform rigorous quality checks at every production stage, with detailed photo reports."
  },
  {
    title: "Communication barriers slowing you down?",
    description: "Our bilingual team manages all supplier communications, translating technical specs and ensuring nothing gets lost."
  },
  {
    title: "Hidden costs eating your margins?",
    description: "We provide transparent pricing with no hidden fees. You'll know the full landed cost before you place any order."
  }
]

const trustPoints = [
  { icon: Users, stat: "500+", label: "Suppliers Vetted" },
  { icon: Globe, stat: "30+", label: "Countries Served" },
  { icon: Package, stat: "2,000+", label: "Orders Managed" },
  { icon: Star, stat: "98%", label: "Client Satisfaction" }
]

const caseStudies = [
  {
    company: "EuroTech GmbH",
    industry: "Industrial Automation",
    result: "Reduced supplier costs by 22%",
    description: "German automation company needed reliable PCB manufacturers. We audited 12 factories, shortlisted 3, and managed production of their first 10,000 units."
  },
  {
    company: "Pacific Home Goods",
    industry: "Home & Lifestyle",
    result: "Cut lead time from 90 to 45 days",
    description: "Australian retailer was struggling with long lead times. We restructured their supply chain, consolidated suppliers, and implemented continuous quality monitoring."
  },
  {
    company: "NorthStar Medical",
    industry: "Medical Devices",
    result: "Zero defects on first shipment",
    description: "US medical device company needed stringent quality standards. Our multi-stage inspection process ensured all 5,000 units met FDA-equivalent requirements."
  }
]

const faqs = [
  {
    q: "How do you find suppliers?",
    a: "We combine our database of pre-vetted suppliers with targeted sourcing based on your product requirements. We evaluate candidates based on manufacturing capability, certifications, financial stability, and past performance."
  },
  {
    q: "What does a factory audit include?",
    a: "Our audits cover production capacity, equipment quality, workforce size, quality management systems, working conditions, safety standards, and business licenses. You receive a detailed report with photos and recommendations."
  },
  {
    q: "What are your fees?",
    a: "We offer transparent, project-based pricing. Typical sourcing fees range from 5-10% of order value depending on complexity. Factory audits, inspections, and sampling have separate fixed fees. Contact us for a detailed quote."
  },
  {
    q: "Do you handle small orders?",
    a: "Yes, we work with orders of all sizes. For smaller quantities, we may suggest alternative sourcing approaches or connect you with suppliers who specialize in low MOQ production."
  },
  {
    q: "How do you ensure quality?",
    a: "Quality is built into every stage: supplier selection, factory audits, sample approval, during-production inspection, and pre-shipment inspection. Our inspectors follow AQL standards and provide detailed reports."
  },
  {
    q: "What if there's a problem with my order?",
    a: "We work with you and the supplier to resolve issues. Our inspection process catches most problems before shipment. If issues arise after delivery, we mediate and help negotiate solutions based on your contract terms."
  }
]

const testimonials = [
  {
    name: "Thomas Mueller",
    role: "Procurement Director, EuroTech GmbH",
    text: "SSourcing China has been instrumental in building our supply chain in China. Their factory audits saved us from what would have been a costly partnership with an unreliable supplier."
  },
  {
    name: "Sarah Chen",
    role: "Founder, Pacific Home Goods",
    text: "The level of transparency and communication is exceptional. We receive regular updates, photos, and inspection reports. It feels like having our own team in China."
  },
  {
    name: "James Whitfield",
    role: "COO, NorthStar Medical",
    text: "For medical devices, quality is non-negotiable. SSourcing China's rigorous inspection process gave us the confidence to move forward. Zero defects on our first order."
  }
]

function AccordionItem({ q, a, isOpen, onClick }) {
  return (
    <div className="border border-surface-200 rounded-xl overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-5 py-4 text-left font-medium text-surface-800 hover:bg-surface-50 transition-colors"
      >
        <span>{q}</span>
        <ArrowRight className={`w-4 h-4 text-surface-400 transition-transform flex-shrink-0 ml-4 ${isOpen ? "rotate-90" : ""}`} />
      </button>
      {isOpen && (
        <div className="px-5 pb-4 text-sm text-surface-600 leading-relaxed">
          {a}
        </div>
      )}
    </div>
  )
}

export default function Home() {
  const [openFaq, setOpenFaq] = React.useState(null)
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const caseRef = useRef(null)

  useEffect(() => {
    if (heroRef.current) {
      return ImageHelper.loadImages(strkImgConfig, heroRef.current)
    }
  }, [])

  useEffect(() => {
    if (servicesRef.current) {
      return ImageHelper.loadImages(strkImgConfig, servicesRef.current)
    }
  }, [])

  useEffect(() => {
    if (caseRef.current) {
      return ImageHelper.loadImages(strkImgConfig, caseRef.current)
    }
  }, [])

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative bg-brand-900 text-white overflow-hidden" ref={heroRef}>
        <div
          data-strk-bg-id="hero-bg-ssourcing"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 to-brand-900/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p id="hero-subtitle" className="text-brand-300 font-semibold text-sm uppercase tracking-widest mb-4">Your Trusted Partner in China</p>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-lg md:text-xl text-surface-300 leading-relaxed mb-8">
              We help businesses find reliable suppliers, verify factories, inspect quality, monitor production, and coordinate shipping across China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="accent" size="lg">
                  Get a Free Sourcing Quote
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="secondary" size="lg" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                  How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="bg-white border-b border-surface-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {trustPoints.map((point) => (
              <div key={point.label} className="text-center">
                <point.icon className="w-6 h-6 text-brand-500 mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-brand-900">{point.stat}</div>
                <div className="text-sm text-surface-500 mt-1">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="bg-surface-50 py-16 md:py-24" ref={servicesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">Our Sourcing Services</h2>
            <p className="text-lg text-surface-600 max-w-2xl mx-auto">
              End-to-end support for your China sourcing needs, from supplier discovery to final delivery.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-surface-100 hover:shadow-md transition-shadow">
                <service.icon className="w-10 h-10 text-brand-500 mb-4" />
                <h3 className="text-lg font-semibold text-brand-900 mb-2">{service.title}</h3>
                <p className="text-sm text-surface-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="primary" size="default">
                View All Services <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SOURCING PROCESS ===== */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">How Sourcing Works</h2>
            <p className="text-lg text-surface-600 max-w-2xl mx-auto">
              A structured, transparent process that takes you from product requirements to delivered goods.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{step.step}</span>
                </div>
                <h3 className="text-base font-semibold text-brand-900 mb-1">{step.title}</h3>
                <p className="text-sm text-surface-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works">
              <Button variant="primary" size="default">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS WE SOURCE ===== */}
      <section className="bg-surface-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">Products We Source</h2>
            <p className="text-lg text-surface-600 max-w-2xl mx-auto">
              We source across a wide range of industries and product categories.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((cat) => (
              <div key={cat.name} className="bg-white rounded-xl p-6 shadow-sm border border-surface-100">
                <Package className="w-8 h-8 text-brand-500 mb-3" />
                <h3 className="text-base font-semibold text-brand-900 mb-1">{cat.name}</h3>
                <p className="text-sm text-surface-500">{cat.items}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products">
              <Button variant="primary" size="default">
                View All Categories <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PROBLEMS WE SOLVE ===== */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">Problems We Solve</h2>
            <p className="text-lg text-surface-600 max-w-2xl mx-auto">
              Common challenges our clients face when sourcing from China, and how we help.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {problems.map((problem) => (
              <div key={problem.title} className="flex gap-4 p-6 bg-surface-50 rounded-xl border border-surface-100">
                <CheckCircle className="w-6 h-6 text-accent-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-brand-900 mb-1">{problem.title}</h3>
                  <p className="text-sm text-surface-600">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-brand-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-lg text-brand-300 max-w-2xl mx-auto">
              Trusted by businesses worldwide for reliable China sourcing.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-surface-300 leading-relaxed mb-6">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-brand-300">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CASE STUDIES ===== */}
      <section className="bg-surface-50 py-16 md:py-24" ref={caseRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">Case Studies</h2>
            <p className="text-lg text-surface-600 max-w-2xl mx-auto">
              Real results from real partnerships.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {caseStudies.map((cs) => (
              <div key={cs.company} className="bg-white rounded-xl overflow-hidden shadow-sm border border-surface-100 hover:shadow-md transition-shadow">
                <div
                  data-strk-bg-id={`case-${cs.company.toLowerCase().replace(/\s+/g, '-')}`}
                  data-strk-bg={`[case-title-${cs.company.toLowerCase().replace(/\s+/g, '-')}]`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="600"
                  className="h-48 bg-brand-200"
                />
                <div className="p-6">
                  <h3 id={`case-title-${cs.company.toLowerCase().replace(/\s+/g, '-')}`} className="font-semibold text-brand-900 mb-1">{cs.company}</h3>
                  <p className="text-xs text-brand-500 font-medium mb-2">{cs.industry}</p>
                  <p className="text-accent-500 font-semibold text-sm mb-2">{cs.result}</p>
                  <p className="text-sm text-surface-600">{cs.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies">
              <Button variant="primary" size="default">
                View All Case Studies <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-surface-600">
              Answers to common questions about our China sourcing services.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== INQUIRY FORM ===== */}
      <section className="bg-surface-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">Ready to Start Sourcing?</h2>
            <p className="text-lg text-surface-600">
              Tell us about your project and we'll respond within 24 hours with a customized sourcing plan and quote.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-surface-200 p-6 md:p-8">
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-surface-700 mb-1.5">Full Name *</label>
                  <input type="text" id="name" required className="w-full px-4 py-2.5 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-surface-700 mb-1.5">Email Address *</label>
                  <input type="email" id="email" required className="w-full px-4 py-2.5 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent" placeholder="you@company.com" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-surface-700 mb-1.5">Company Name</label>
                  <input type="text" id="company" className="w-full px-4 py-2.5 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent" placeholder="Your company" />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-surface-700 mb-1.5">Country</label>
                  <input type="text" id="country" className="w-full px-4 py-2.5 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent" placeholder="Your country" />
                </div>
              </div>
              <div>
                <label htmlFor="product" className="block text-sm font-medium text-surface-700 mb-1.5">Product Description *</label>
                <textarea id="product" rows={3} required className="w-full px-4 py-2.5 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent" placeholder="Describe the product you want to source, including specifications, target price, and estimated quantity..." />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-surface-700 mb-1.5">Additional Details</label>
                <textarea id="message" rows={2} className="w-full px-4 py-2.5 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent" placeholder="Any additional requirements, deadlines, or questions..." />
              </div>
              <Button variant="accent" size="lg" className="w-full">
                Submit Sourcing Inquiry
              </Button>
              <p className="text-xs text-surface-400 text-center">We respect your privacy. Your information will not be shared.</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}