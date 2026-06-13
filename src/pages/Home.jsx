import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search, ShieldCheck, ClipboardCheck, PackageCheck, Ship,
  ChevronRight, ArrowRight, Star, Users, Clock, Globe, Award,
  Phone, Mail, MapPin, ChevronDown, HelpCircle, CheckCircle,
} from "lucide-react";
import InquiryForm from "../components/InquiryForm";

/* ── Hero ── */
function HeroSection() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative bg-surface overflow-hidden">
      {/* Background visual */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="China Sourcing Agent Global Buyers"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='900'/%3E")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand/90 via-brand/80 to-brand-dark/90" />

      <div className="relative max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          <h1
            id="hero-title"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl"
          >
            We help overseas businesses find reliable suppliers in China, verify
            factories, inspect quality, follow production, and coordinate safe
            shipping. Save time, reduce risk, and get better prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-accent text-white font-bold text-base hover:bg-accent-dark transition-colors shadow-lg"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white/10 text-white font-semibold text-base hover:bg-white/20 transition-colors border border-white/20"
            >
              See How It Works
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center gap-6 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-accent" />
              <span>Verified Suppliers</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent" />
              <span>48h Response Time</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-accent" />
              <span>80+ Countries Served</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Services ── */
const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    desc: "We identify and shortlist reliable manufacturers in China that match your product specifications, budget, and production capacity requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Factory Verification",
    desc: "On-site audits to verify factory credentials, production capabilities, quality systems, and export experience before you place any orders.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    desc: "Independent pre-shipment inspections at the factory, including inline checks and final random sampling to catch defects before goods leave.",
  },
  {
    icon: PackageCheck,
    title: "Production Monitoring",
    desc: "We follow your orders from raw materials to finished goods, tracking milestones, deadlines, and quality checkpoints throughout production.",
  },
  {
    icon: Ship,
    title: "Shipping Coordination",
    desc: "End-to-end logistics management including customs documentation, freight consolidation, and delivery tracking to your warehouse door.",
  },
  {
    icon: Award,
    title: "Price Negotiation",
    desc: "Leverage our relationships and market knowledge to negotiate favorable pricing, payment terms, and MOQs on your behalf.",
  },
];

function ServicesSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Full-Service China Sourcing
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            From supplier discovery to final delivery, we handle every step of
            the sourcing process so you can focus on growing your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-6 rounded-xl border border-border bg-white hover:shadow-md hover:border-accent/30 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-brand/5 flex items-center justify-center mb-4 group-hover:bg-brand/10 transition-colors">
                <s.icon className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">
                {s.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-brand font-semibold hover:text-brand-dark transition-colors"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Sourcing Process ── */
const steps = [
  {
    num: "01",
    title: "Share Your Requirements",
    desc: "Tell us what product you need, target price, quantity, and quality standards. We review and confirm within 24 hours.",
  },
  {
    num: "02",
    title: "We Find & Verify Suppliers",
    desc: "Our team sources 3-5 qualified suppliers, verifies their factory credentials, and provides detailed comparison reports.",
  },
  {
    num: "03",
    title: "Sampling & Price Negotiation",
    desc: "We arrange samples, negotiate pricing and terms, and help you choose the best supplier for your needs.",
  },
  {
    num: "04",
    title: "Production Monitoring & QC",
    desc: "We monitor your order throughout production, conduct quality inspections, and ensure everything meets your standards.",
  },
  {
    num: "05",
    title: "Shipping & Delivery",
    desc: "We coordinate packing, shipping documentation, customs clearance, and track delivery to your destination.",
  },
];

function ProcessSection() {
  return (
    <section className="py-16 md:py-20 bg-surface">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Your Sourcing Journey, Step by Step
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A transparent, professional process designed to minimize risk and
            maximize results for overseas buyers.
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="flex flex-col md:flex-row gap-4 md:gap-6 p-6 rounded-xl bg-white border border-border hover:shadow-sm transition-shadow"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl font-extrabold text-brand/20 shrink-0 w-12 text-center">
                  {step.num}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:flex items-center shrink-0">
                  <ChevronRight className="w-5 h-5 text-border" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 text-brand font-semibold hover:text-brand-dark transition-colors"
          >
            See Detailed Process <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Products We Source ── */
const productCategories = [
  {
    id: "electronics",
    title: "Electronics & Components",
    desc: "Consumer electronics, PCBA, cables, connectors, IoT devices, batteries, and electronic components.",
    imgId: "products-electronics-img",
  },
  {
    id: "apparel",
    title: "Apparel & Textiles",
    desc: "Men's, women's, and children's clothing, activewear, uniforms, bags, and textile materials.",
    imgId: "products-apparel-img",
  },
  {
    id: "hardware",
    title: "Hardware & Tools",
    desc: "Hand tools, power tools, fasteners, hardware fittings, and metal fabrication products.",
    imgId: "products-hardware-img",
  },
  {
    id: "furniture",
    title: "Furniture & Home Goods",
    desc: "Office furniture, home furniture, kitchenware, décor items, and household products.",
    imgId: "products-furniture-img",
  },
  {
    id: "packaging",
    title: "Packaging & Printing",
    desc: "Product packaging, gift boxes, labels, printed materials, and custom branded packaging.",
    imgId: "products-packaging-img",
  },
  {
    id: "automotive",
    title: "Automotive & Industrial",
    desc: "Auto parts, industrial machinery components, plastic parts, and custom OEM manufacturing.",
    imgId: "products-automotive-img",
  },
];

function ProductsSection() {
  const containerRef = useRef(null);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div ref={containerRef} className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Products We Source
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            We have deep experience sourcing a wide range of product categories
            from manufacturers across China.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((cat) => (
            <div
              key={cat.id}
              className="group rounded-xl border border-border bg-white overflow-hidden hover:shadow-md hover:border-accent/30 transition-all"
            >
              <div className="relative h-48 overflow-hidden bg-surface">
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[products-${cat.id}-title] products sourcing factory`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3
                  id={`products-${cat.id}-title`}
                  className="text-base font-bold text-text-primary mb-2"
                >
                  {cat.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-brand font-semibold hover:text-brand-dark transition-colors"
          >
            View All Product Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Problems We Solve ── */
const problems = [
  {
    problem: "I cannot verify if a supplier is real",
    solution: "We conduct on-site factory audits, verify business licenses, and check production capacity before you place orders.",
  },
  {
    problem: "Quality issues keep happening with my orders",
    solution: "Our independent QC inspections catch defects before shipment. We provide detailed inspection reports with photos and measurements.",
  },
  {
    problem: "Communication with Chinese suppliers is difficult",
    solution: "Our bilingual team bridges the language gap, handles all correspondence, and ensures your requirements are clearly understood.",
  },
  {
    problem: "Shipping and customs are confusing",
    solution: "We manage the full logistics chain including documentation, freight booking, and customs clearance so your goods arrive on time.",
  },
];

function ProblemsSection() {
  return (
    <section className="py-16 md:py-20 bg-surface">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Common Challenges
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Problems We Solve for Buyers
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Sourcing from China can be challenging. Here is how we help you
            overcome the most common issues.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {problems.map((item) => (
            <div
              key={item.problem}
              className="p-6 rounded-xl bg-white border border-border"
            >
              <div className="flex items-start gap-3 mb-3">
                <HelpCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <h4 className="font-semibold text-text-primary">{item.problem}</h4>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-3 h-3 text-success" />
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Trust Points ── */
const trustStats = [
  { num: "800+", label: "Clients Worldwide" },
  { num: "3,200+", label: "Orders Managed" },
  { num: "98%", label: "On-Time Delivery" },
  { num: "15+", label: "Years Experience" },
];

function TrustSection() {
  return (
    <section className="py-16 md:py-20 bg-brand">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Buyers Around the World
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            We have built lasting partnerships with businesses across North
            America, Europe, Australia, and beyond.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trustStats.map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-xl bg-white/10">
              <div className="text-3xl md:text-4xl font-extrabold text-accent mb-1">
                {stat.num}
              </div>
              <div className="text-white/80 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust badges row */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-white/60 text-sm">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-accent" />
            <span>NDA Protection</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-accent" />
            <span>Quality Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-accent" />
            <span>Dedicated Agent</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-accent" />
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Case Studies Preview ── */
const caseStudies = [
  {
    id: "case-1",
    client: "US Retail Chain",
    industry: "Consumer Electronics",
    title: "Sourcing 50,000 Units of Wireless Earbuds",
    result: "Saved 22% on unit cost, reduced defect rate from 8% to under 1%",
    imgId: "case-electronics-img",
    titleId: "case-electronics-title",
    descId: "case-electronics-desc",
  },
  {
    id: "case-2",
    client: "European E-commerce Brand",
    industry: "Home & Garden",
    title: "Finding a Reliable Patio Furniture Supplier",
    result: "Identified 3 qualified suppliers in 5 days, secured 18% cost savings",
    imgId: "case-furniture-img",
    titleId: "case-furniture-title",
    descId: "case-furniture-desc",
  },
  {
    id: "case-3",
    client: "Australian Distributor",
    industry: "Hardware & Tools",
    title: "Quality Control for Power Tool Imports",
    result: "Reduced return rate by 85% with pre-shipment inspection protocol",
    imgId: "case-tools-img",
    titleId: "case-tools-title",
    descId: "case-tools-desc",
  },
];

function CasesSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Case Studies
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Real results from real clients. See how we help businesses source
            better from China.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="group rounded-xl border border-border bg-white overflow-hidden hover:shadow-md transition-all"
            >
              <div className="relative h-44 overflow-hidden bg-surface">
                <img
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${cs.titleId}] [${cs.descId}] China sourcing quality`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cs.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                    {cs.industry}
                  </span>
                </div>
                <h3
                  id={cs.titleId}
                  className="text-base font-bold text-text-primary mb-2 leading-snug"
                >
                  {cs.title}
                </h3>
                <p
                  id={cs.descId}
                  className="text-text-secondary text-sm mb-3 hidden"
                >
                  {cs.result}
                </p>
                <p className="text-success text-sm font-medium mb-3">
                  {cs.result}
                </p>
                <span className="text-text-muted text-xs">
                  Client: {cs.client}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-brand font-semibold hover:text-brand-dark transition-colors"
          >
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ── */
const faqs = [
  {
    q: "How much does your sourcing service cost?",
    a: "Our pricing depends on the scope and complexity of your project. We typically charge a fixed percentage of the order value or a flat fee per service. For new clients, we offer a free initial supplier search and quote. Contact us for a tailored estimate.",
  },
  {
    q: "How long does it take to find suppliers?",
    a: "Most supplier searches are completed within 3-7 business days, depending on product complexity. For standard products, we often deliver initial results within 48 hours.",
  },
  {
    q: "Do I need to speak Chinese?",
    a: "No. Our bilingual team handles all communication with suppliers in Chinese. You only need to communicate your requirements with us in English.",
  },
  {
    q: "What if the supplier delivers poor quality?",
    a: "Our quality inspections catch issues before shipment. If defects are found, we work with the factory to rework or replace the goods at no extra cost to you.",
  },
  {
    q: "Can you help with shipping and customs?",
    a: "Yes. We coordinate freight forwarding, handle export/import documentation, and track shipments until delivery to your warehouse.",
  },
  {
    q: "Do you have a minimum order size?",
    a: "We work with clients of all sizes, from startups placing their first order to established brands ordering in large volumes. There is no strict minimum.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 md:py-20 bg-surface">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Everything you need to know about working with a China sourcing
            agent.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-white overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-semibold text-text-primary text-sm md:text-base">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-text-muted shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4 text-text-secondary text-sm leading-relaxed border-t border-border pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Inquiry CTA ── */
function InquiryCTASection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Request a Free Sourcing Quote
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Tell us about the product you need and we will send you a detailed
              sourcing plan with supplier recommendations within 24-48 hours.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand/5 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <div className="font-semibold text-text-primary text-sm">
                    Fast Response
                  </div>
                  <div className="text-text-muted text-sm">
                    Reply within 24 hours
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand/5 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <div className="font-semibold text-text-primary text-sm">
                    No Obligation
                  </div>
                  <div className="text-text-muted text-sm">
                    Free quote with no commitment required
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand/5 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <div className="font-semibold text-text-primary text-sm">
                    Direct Contact
                  </div>
                  <div className="text-text-muted text-sm">
                    Dedicated sourcing agent assigned to you
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-text-secondary text-sm">
                <Mail className="w-4 h-4 text-brand" />
                <span>hello@ssourcingchina.com</span>
              </div>
              <div className="flex items-center gap-3 text-text-secondary text-sm">
                <Phone className="w-4 h-4 text-brand" />
                <span>+86 755 8888 1234</span>
              </div>
              <div className="flex items-center gap-3 text-text-secondary text-sm">
                <MapPin className="w-4 h-4 text-brand" />
                <span>Shenzhen, Guangdong, China</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}

/* ── Home Page ── */
export default function Home() {
  useEffect(() => {
    document.title =
      "China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China";
  }, []);

  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CasesSection />
      <FAQSection />
      <InquiryCTASection />
    </div>
  );
}
