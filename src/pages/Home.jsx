import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  CheckCircle, Star, ArrowRight, Globe, Users, Award, TrendingUp,
  ChevronDown, MessageSquare, Package, Zap
} from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { SectionHeader } from "@/components/ui/SectionHeader"

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    desc: "We identify and shortlist verified suppliers that match your product specs, MOQ, and budget — saving you weeks of research.",
    href: "/services",
  },
  {
    icon: Factory,
    title: "Factory Verification",
    desc: "On-site audits covering production capacity, certifications, workforce, and compliance before you commit to any order.",
    href: "/services",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    desc: "Pre-shipment, during-production, and container loading inspections to ensure every shipment meets your standards.",
    href: "/services",
  },
  {
    icon: Zap,
    title: "Production Follow-up",
    desc: "Regular updates and on-site visits during manufacturing to catch issues early and keep your timeline on track.",
    href: "/services",
  },
  {
    icon: Truck,
    title: "Shipping Coordination",
    desc: "We work with trusted freight forwarders to arrange sea, air, or express shipping with full documentation support.",
    href: "/services",
  },
  {
    icon: Package,
    title: "Private Label & OEM",
    desc: "From product design to branded packaging, we help you develop and launch your own product line from China.",
    href: "/services",
  },
]

const steps = [
  { num: "01", title: "Submit Your Inquiry", desc: "Tell us what you need — product type, specs, target price, and quantity. No commitment required." },
  { num: "02", title: "Supplier Matching", desc: "We search our vetted network and identify 3–5 qualified suppliers within 3–5 business days." },
  { num: "03", title: "Factory Audit", desc: "We visit shortlisted factories to verify capacity, quality systems, and compliance in person." },
  { num: "04", title: "Sample & Negotiation", desc: "We coordinate samples, review quality, and negotiate pricing and terms on your behalf." },
  { num: "05", title: "Production & QC", desc: "We monitor production progress and conduct inspections at key milestones." },
  { num: "06", title: "Shipping & Delivery", desc: "We arrange freight, prepare export documents, and track your shipment to destination." },
]

const products = [
  "Electronics & Components", "Furniture & Home Décor", "Apparel & Textiles",
  "Industrial Equipment", "Toys & Baby Products", "Sports & Outdoor Gear",
  "Health & Beauty", "Packaging Materials", "Auto Parts", "LED Lighting",
  "Kitchen & Cookware", "Office Supplies",
]

const problems = [
  { title: "Unreliable Suppliers", desc: "We pre-screen and audit every supplier before recommending them, so you avoid scams and low-quality factories." },
  { title: "Quality Failures", desc: "Our multi-stage inspection process catches defects before goods leave China, not after they arrive at your warehouse." },
  { title: "Communication Barriers", desc: "Our bilingual team handles all supplier communication in Chinese, eliminating misunderstandings and delays." },
  { title: "Shipping Delays", desc: "We coordinate with freight partners and monitor production timelines to keep your supply chain on schedule." },
  { title: "Hidden Costs", desc: "We provide transparent pricing with no hidden fees. You know exactly what you're paying for at every stage." },
  { title: "No Local Presence", desc: "Our team is based in China, giving you eyes and ears on the ground without the cost of a local office." },
]

const trustPoints = [
  { icon: Globe, value: "40+", label: "Countries Served" },
  { icon: Users, value: "500+", label: "Clients Worldwide" },
  { icon: Award, value: "8+", label: "Years Experience" },
  { icon: TrendingUp, value: "98%", label: "Client Satisfaction" },
]

const caseStudies = [
  {
    id: "cs-furniture",
    category: "Furniture",
    title: "UK Retailer Cuts Sourcing Costs by 23%",
    desc: "A UK-based furniture importer needed to reduce costs without compromising quality. We identified 4 alternative suppliers, conducted factory audits, and renegotiated terms.",
    result: "23% cost reduction, 0 quality rejections over 12 months",
    titleId: "cs-furniture-title",
    descId: "cs-furniture-desc",
    imgId: "cs-furniture-img-a1b2c3",
  },
  {
    id: "cs-electronics",
    category: "Electronics",
    title: "US Brand Launches Private Label Product Line",
    desc: "An American e-commerce brand wanted to develop a private label electronics line. We managed the entire process from factory selection to branded packaging.",
    result: "Product launched in 4 months, 15,000 units shipped",
    titleId: "cs-electronics-title",
    descId: "cs-electronics-desc",
    imgId: "cs-electronics-img-d4e5f6",
  },
  {
    id: "cs-apparel",
    category: "Apparel",
    title: "Australian Brand Passes Compliance Audit",
    desc: "An Australian fashion brand needed suppliers compliant with REACH and OEKO-TEX standards. We sourced certified factories and managed pre-shipment testing.",
    result: "100% compliance, on-time delivery for seasonal launch",
    titleId: "cs-apparel-title",
    descId: "cs-apparel-desc",
    imgId: "cs-apparel-img-g7h8i9",
  },
]

const faqs = [
  { q: "How much does your sourcing service cost?", a: "Our fees depend on the scope of work. We offer a free initial consultation and quote. Typical services include a sourcing fee, factory audit fee, and inspection fee — all quoted transparently upfront." },
  { q: "How long does it take to find a supplier?", a: "For standard products, we typically present a shortlist of 3–5 qualified suppliers within 3–5 business days. Complex or highly specialized products may take 7–10 days." },
  { q: "Do you work with small businesses and startups?", a: "Yes. We work with buyers of all sizes, from startups placing their first order to established importers managing multiple product lines." },
  { q: "Can you handle the entire process from sourcing to delivery?", a: "Absolutely. We offer end-to-end services covering supplier sourcing, factory audits, quality inspection, production follow-up, and shipping coordination." },
  { q: "What if the goods fail quality inspection?", a: "If goods fail inspection, we work with the factory to resolve the issue before shipment. We document all findings and provide detailed reports so you can make informed decisions." },
  { q: "Which industries do you specialize in?", a: "We source across a wide range of categories including electronics, furniture, apparel, industrial goods, consumer products, and more. See our Products We Source page for the full list." },
]

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="hero-bg-main-x1y2z3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1F2E]/90 via-[#1A1F2E]/70 to-[#1A1F2E]/30 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <Badge className="mb-6 bg-[#1A4B8C]/20 text-[#93C5FD] border border-[#1A4B8C]/40">
              China-Based Sourcing Agent
            </Badge>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-[#CBD5E1] mb-8 leading-relaxed">
              We help overseas buyers find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — with a team on the ground in China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="cta" size="lg">Get a Free Sourcing Quote</Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="white" size="lg">See How It Works</Button>
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6">
              {trustPoints.map((tp) => (
                <div key={tp.label} className="flex items-center gap-2">
                  <tp.icon className="w-5 h-5 text-[#D4A017]" />
                  <span className="text-white font-bold">{tp.value}</span>
                  <span className="text-[#9AAABB] text-sm">{tp.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <a href="#services" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/60 hover:text-white transition-colors animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </a>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#1A4B8C] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {[
              "Verified Supplier Network",
              "On-Site Factory Audits",
              "Pre-Shipment Inspection",
              "Bilingual Team in China",
              "End-to-End Service",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D4A017] flex-shrink-0" />
                <span className="text-white text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Services"
            title="Everything You Need to Source from China"
            subtitle="From finding the right supplier to delivering goods to your door, we manage every step of the sourcing process."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="group">
                <div className="w-12 h-12 bg-[#EEF2F7] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#1A4B8C] transition-colors">
                  <service.icon className="w-6 h-6 text-[#1A4B8C] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-[#1A1F2E] mb-2">{service.title}</h3>
                <p className="text-[#6B7A8D] text-sm leading-relaxed mb-4">{service.desc}</p>
                <Link to={service.href} className="inline-flex items-center gap-1 text-[#1A4B8C] text-sm font-semibold hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Sourcing Process"
            title="How We Work With You"
            subtitle="A clear, structured process designed to reduce risk and deliver results at every stage."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="relative bg-white rounded-xl border border-[#D8E0EA] p-6 hover:shadow-md transition-shadow">
                <div className="text-4xl font-black text-[#EEF2F7] mb-3 leading-none">{step.num}</div>
                <h3 className="text-lg font-semibold text-[#1A1F2E] mb-2">{step.title}</h3>
                <p className="text-[#6B7A8D] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works">
              <Button variant="primary" size="lg">View Full Process</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Product Categories"
            title="Products We Source"
            subtitle="We have experience sourcing across a wide range of industries and product categories."
          />
          <div className="flex flex-wrap justify-center gap-3">
            {products.map((product) => (
              <Badge key={product} className="text-sm px-4 py-2 bg-[#EEF2F7] text-[#1A4B8C] border border-[#D8E0EA]">
                {product}
              </Badge>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products">
              <Button variant="secondary" size="md">See All Categories</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-[#1A1F2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Work With Us"
            title="Problems We Solve for Global Buyers"
            subtitle="Sourcing from China comes with real challenges. Here's how we address them."
            className="[&_h2]:text-white [&_p]:text-[#9AAABB]"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="bg-[#2D3748] rounded-xl p-6 border border-[#3D4A5C]">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-0.5" />
                  <h3 className="text-white font-semibold">{p.title}</h3>
                </div>
                <p className="text-[#9AAABB] text-sm leading-relaxed pl-8">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Case Studies"
            title="Real Results for Real Buyers"
            subtitle="See how we've helped businesses like yours source smarter from China."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <Card key={cs.id} className="overflow-hidden p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge>{cs.category}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 id={cs.titleId} className="text-lg font-semibold text-[#1A1F2E] mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-[#6B7A8D] text-sm leading-relaxed mb-4">{cs.desc}</p>
                  <div className="bg-[#EEF2F7] rounded-lg p-3">
                    <p className="text-[#27AE60] text-sm font-semibold flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" /> {cs.result}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies">
              <Button variant="primary" size="lg">View All Case Studies</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Answers to the most common questions from buyers new to sourcing from China."
          />
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-[#F7F9FC] rounded-xl border border-[#D8E0EA] overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-[#1A1F2E] hover:bg-[#EEF2F7] transition-colors list-none">
                  <span>{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-[#6B7A8D] group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <div className="px-5 pb-5 text-[#3D4A5C] text-sm leading-relaxed border-t border-[#D8E0EA] pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-20 bg-[#1A4B8C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China with Confidence?
          </h2>
          <p className="text-[#93C5FD] text-lg mb-8 max-w-2xl mx-auto">
            Tell us what you need and we'll get back to you within 24 hours with a tailored sourcing plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="cta" size="lg">Get a Free Sourcing Quote</Button>
            </Link>
            <Link to="/services">
              <Button variant="white" size="lg">Explore Our Services</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
