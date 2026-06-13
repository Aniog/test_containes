import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import {
  Shield,
  Search,
  Factory,
  ClipboardCheck,
  Ship,
  Truck,
  CheckCircle,
  ChevronRight,
  Star,
  BarChart3,
  Package,
  Globe,
  Headphones,
  FileCheck,
  Clock,
  ArrowRight,
} from "lucide-react"
import HomeInquiryForm from "@/components/home/HomeInquiryForm"

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    description:
      "We identify and vet reliable suppliers for your specific product requirements across Chinese manufacturing hubs.",
  },
  {
    icon: Factory,
    title: "Factory Verification",
    description:
      "On-site audits to verify supplier legitimacy, production capacity, certifications, and working conditions.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    description:
      "Pre-shipment inspections, during-production checks, and detailed quality reports with photos.",
  },
  {
    icon: Ship,
    title: "Production Monitoring",
    description:
      "Regular progress updates and production timeline management to keep your orders on track.",
  },
  {
    icon: Truck,
    title: "Logistics & Shipping",
    description:
      "Freight forwarding, consolidation, customs documentation, and door-to-door delivery coordination.",
  },
  {
    icon: Package,
    title: "Product Sampling",
    description:
      "Sample coordination, feedback relay, and approval management before mass production begins.",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Submit Your Requirements",
    description: "Tell us about your product, budget, quantity, and quality expectations.",
  },
  {
    step: "02",
    title: "Supplier Matching",
    description: "We research and shortlist qualified suppliers that match your specific criteria.",
  },
  {
    step: "03",
    title: "Verification & Sampling",
    description: "We verify shortlisted factories and coordinate product samples for your approval.",
  },
  {
    step: "04",
    title: "Production & QC",
    description: "We monitor production progress and conduct quality inspections at key stages.",
  },
  {
    step: "05",
    title: "Shipping & Delivery",
    description: "We arrange logistics, handle documentation, and ensure safe delivery to your destination.",
  },
]

const productCategories = [
  { name: "Consumer Electronics", items: "Smartphones, accessories, audio devices, wearables" },
  { name: "Home & Kitchen", items: "Cookware, appliances, storage, home decor" },
  { name: "Fashion & Apparel", items: "Clothing, shoes, bags, accessories, textiles" },
  { name: "Industrial Equipment", items: "Machinery, tools, components, MRO supplies" },
  { name: "Health & Beauty", items: "Skincare, cosmetics, supplements, personal care" },
  { name: "Auto Parts", items: "Car accessories, replacement parts, tools" },
  { name: "Sports & Outdoor", items: "Fitness equipment, camping gear, sportswear" },
  { name: "Packaging & Labeling", items: "Custom boxes, labels, bags, wrapping materials" },
]

const problems = [
  {
    title: "Can't Find the Right Supplier",
    description:
      "Alibaba has millions of listings, but finding a genuinely reliable manufacturer is time-consuming and risky. We do the legwork for you.",
    icon: Search,
  },
  {
    title: "Worried About Quality",
    description:
      "Inconsistent product quality is the top concern for importers. Our on-site inspections catch issues before shipment, not after.",
    icon: ClipboardCheck,
  },
  {
    title: "Communication Barriers",
    description:
      "Language differences, time zones, and cultural gaps cause misunderstandings and delays. We bridge the gap as your local representative.",
    icon: Globe,
  },
  {
    title: "Supplier Scams & Fraud",
    description:
      "Fake factories, questionable certifications, and payment scams are real risks. Our verification process protects your investment.",
    icon: Shield,
  },
  {
    title: "Production Delays",
    description:
      "Without visibility into factory operations, delays go unnoticed until it's too late. We monitor production and keep you informed.",
    icon: Clock,
  },
  {
    title: "Shipping Complexities",
    description:
      "Customs clearance, freight booking, and documentation can overwhelm first-time importers. We handle the logistics end to end.",
    icon: Ship,
  },
]

const trustStats = [
  { number: "200+", label: "Clients Served Globally" },
  { number: "500+", label: "Factory Audits Completed" },
  { number: "98%", label: "On-Time Delivery Rate" },
  { number: "15+", label: "Years Industry Experience" },
]

const caseStudies = [
  {
    title: "European Retail Chain",
    subtitle: "Home & Kitchen Products",
    summary:
      "Sourced 40+ SKUs of kitchenware from 12 different factories. Implemented quality control protocols that reduced defect rates from 8% to under 1.5%.",
    result: "1.5% defect rate, 30% cost savings",
  },
  {
    title: "US E-commerce Brand",
    subtitle: "Consumer Electronics Accessories",
    summary:
      "Identified and validated 3 certified manufacturers for Bluetooth accessories. Coordinated sampling, production monitoring, and consolidated shipping.",
    result: "3 approved suppliers, launched in 4 months",
  },
  {
    title: "Australian Distributor",
    subtitle: "Industrial Safety Equipment",
    summary:
      "Performed on-site audits of 8 factories across 3 provinces. Managed compliance verification and ongoing QC inspections for recurring orders.",
    result: "5 qualified factories, 99% QC pass rate",
  },
]

const faqItems = [
  {
    q: "What does a China sourcing agent do?",
    a: "A China sourcing agent helps overseas buyers find reliable suppliers, verify factory credentials, negotiate pricing, monitor production, conduct quality inspections, and arrange shipping. We act as your on-the-ground team in China.",
  },
  {
    q: "How do you charge for your services?",
    a: "We typically charge a commission-based fee (3-8% of order value depending on complexity) or a flat project fee for specific services like factory audits or inspections. We provide a clear quote before any work begins.",
  },
  {
    q: "What MOQ (Minimum Order Quantity) do you work with?",
    a: "We work with all order sizes. Some factories have high MOQs, but we can also help source suppliers that accommodate smaller volumes for startups and small businesses.",
  },
  {
    q: "How do you verify factories?",
    a: "Our team conducts on-site factory audits that include verifying business licenses, assessing production capacity, inspecting equipment and facilities, reviewing quality control systems, and checking certifications. We provide a detailed report with photos.",
  },
  {
    q: "Can you help with product customization?",
    a: "Yes. We work with factories that offer OEM and ODM services. We help relay your specifications, coordinate sample development, and ensure the final product meets your requirements.",
  },
  {
    q: "How long does the sourcing process take?",
    a: "Typical timelines: supplier identification (1-2 weeks), sampling (2-4 weeks), production (4-12 weeks depending on product complexity), and shipping (2-6 weeks). We provide a detailed timeline upfront.",
  },
]

export default function Home() {
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const processRef = useRef(null)
  const productsRef = useRef(null)
  const problemsRef = useRef(null)
  const trustRef = useRef(null)
  const casesRef = useRef(null)
  const faqRef = useRef(null)
  const inquiryRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, heroRef.current)
  }, [])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, servicesRef.current)
  }, [])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, processRef.current)
  }, [])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, productsRef.current)
  }, [])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, problemsRef.current)
  }, [])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, trustRef.current)
  }, [])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, casesRef.current)
  }, [])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, faqRef.current)
  }, [])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, inquiryRef.current)
  }, [])

  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-primary text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-primary-dark opacity-90"
          data-strk-bg-id="hero-bg-e7f2a1"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative z-10 section-container py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl">
              We help you find reliable suppliers, verify factories, control quality, and
              ship products from China — with full transparency and no surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary text-base px-8 py-4 inline-flex items-center gap-2">
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/how-it-works" className="bg-white/10 text-white border border-white/30 rounded-md font-medium px-8 py-4 text-base inline-flex items-center justify-center hover:bg-white/20 transition-colors">
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section ref={trustRef} className="bg-white border-b border-border">
        <div className="section-container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {trustStats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-txt-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="section-padding bg-bg">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 id="services-title" className="section-title">Our Services</h2>
            <p className="section-subtitle mx-auto">
              End-to-end sourcing support, from supplier discovery to final delivery.
              We handle the complexities so you can focus on growing your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="card-hover">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{service.title}</h3>
                <p className="text-txt-secondary text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-outline inline-flex items-center gap-2">
              View All Services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing Process Section */}
      <section ref={processRef} className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 id="process-title" className="section-title">How Sourcing Works</h2>
            <p className="section-subtitle mx-auto">
              A structured 5-step process designed to minimize risk and maximize
              results for every order.
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
            <div className="space-y-12 lg:space-y-0">
              {processSteps.map((step, i) => (
                <div
                  key={i}
                  className={`lg:flex items-center gap-12 ${
                    i % 2 === 0 ? "" : "lg:flex-row-reverse"
                  } ${i > 0 ? "lg:mt-20" : ""}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : ""}`}>
                    <div className="card">
                      <span className="text-xs font-bold text-accent tracking-wider">{step.step}</span>
                      <h3 className="text-xl font-semibold text-primary mt-1 mb-2">{step.title}</h3>
                      <p className="text-txt-secondary text-sm">{step.description}</p>
                    </div>
                  </div>
                  <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white font-bold text-lg flex-shrink-0 relative z-10">
                    {step.step}
                  </div>
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/how-it-works" className="btn-primary inline-flex items-center gap-2">
              Learn More About Our Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source Section */}
      <section ref={productsRef} className="section-padding bg-bg">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 id="products-title" className="section-title">Products We Source</h2>
            <p className="section-subtitle mx-auto">
              We source across a wide range of categories. If it's manufactured in China,
              we can help you find the right supplier.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {productCategories.map((cat, i) => (
              <div key={i} className="card-hover">
                <h3 className="font-semibold text-primary mb-2">{cat.name}</h3>
                <p className="text-txt-muted text-sm">{cat.items}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="btn-outline inline-flex items-center gap-2">
              View Full Category List <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section ref={problemsRef} className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 id="problems-title" className="section-title">Problems We Solve</h2>
            <p className="section-subtitle mx-auto">
              Sourcing from China comes with real challenges. Here's how we help
              you navigate them.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, i) => (
              <div key={i} className="card-hover">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <problem.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{problem.title}</h3>
                <p className="text-txt-secondary text-sm leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section ref={casesRef} className="section-padding bg-bg">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 id="cases-title" className="section-title">Case Studies</h2>
            <p className="section-subtitle mx-auto">
              Real results from real clients. See how we've helped businesses like yours
              succeed in China sourcing.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((item, i) => (
              <div key={i} className="card-hover flex flex-col">
                <div className="mb-4">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">{item.subtitle}</span>
                  <h3 className="text-xl font-semibold text-primary mt-1">{item.title}</h3>
                </div>
                <p className="text-txt-secondary text-sm leading-relaxed flex-1">{item.summary}</p>
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm font-medium text-success">
                    <CheckCircle className="w-4 h-4" />
                    <span>{item.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="btn-outline inline-flex items-center gap-2">
              View All Case Studies <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="section-padding bg-white">
        <div className="section-container max-w-4xl">
          <div className="text-center mb-16">
            <h2 id="faq-title" className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle mx-auto">
              Common questions about working with a China sourcing agent.
            </p>
          </div>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-primary pr-4">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-txt-muted flex-shrink-0 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-txt-secondary text-sm leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section ref={inquiryRef} className="section-padding bg-primary-dark text-white">
        <div className="section-container max-w-4xl">
          <div className="text-center mb-12">
            <h2 id="inquiry-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
              Start Your Sourcing Project
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Tell us about your product needs and we'll get back to you within 24 hours
              with a free, no-obligation sourcing assessment.
            </p>
          </div>
          <HomeInquiryForm />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-accent py-14">
        <div className="section-container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Source from China with Confidence?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Get in touch today and let us show you how professional sourcing support
            can save you time, money, and risk.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-accent font-semibold px-8 py-4 rounded-md hover:bg-gray-50 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

