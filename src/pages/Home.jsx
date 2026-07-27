import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Truck,
  Factory,
  TrendingUp,
  Globe,
  Clock,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import InquiryForm from "@/components/shared/InquiryForm";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

function HeroSection() {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-navy-900 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-home-1a2b3c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/95 to-navy-900/80" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
            We find reliable suppliers, verify factories, inspect quality, and coordinate shipping — so you can source from China with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3.5 rounded-md text-center transition-colors inline-flex items-center justify-center gap-2"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/how-it-works"
              className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-3.5 rounded-md text-center transition-colors"
            >
              See How It Works
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-teal-400" /> Verified Suppliers
            </span>
            <span className="flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-teal-400" /> 40+ Countries Served
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-teal-400" /> 10+ Years Experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    desc: "We identify and shortlist qualified manufacturers that match your product specifications, budget, and volume requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Factory Verification",
    desc: "On-site audits to verify factory licenses, production capacity, equipment, and compliance with international standards.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    desc: "Pre-shipment, during-production, and container-loading inspections to ensure your products meet agreed quality standards.",
  },
  {
    icon: Factory,
    title: "Production Follow-up",
    desc: "Regular factory visits and progress reports to keep your orders on schedule and catch issues before they become problems.",
  },
  {
    icon: Truck,
    title: "Shipping Coordination",
    desc: "We handle logistics from factory door to your warehouse, including customs documentation and freight forwarding.",
  },
  {
    icon: TrendingUp,
    title: "Price Negotiation",
    desc: "Leverage our market knowledge and relationships to secure competitive pricing and favorable payment terms.",
  },
];

function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            End-to-end sourcing support tailored for businesses buying from China.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-slate-50 rounded-xl p-6 md:p-8 border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-navy-800 rounded-lg flex items-center justify-center mb-5">
                <s.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">{s.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-1 text-navy-800 font-semibold hover:text-navy-600 transition-colors"
          >
            View All Services <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    num: "01",
    title: "Share Your Requirements",
    desc: "Tell us what products you need, target price, quantity, and any specific standards or certifications required.",
  },
  {
    num: "02",
    title: "We Find & Verify Suppliers",
    desc: "Our team shortlists 3-5 qualified manufacturers and conducts on-site factory verification on your behalf.",
  },
  {
    num: "03",
    title: "Sample & Quote Review",
    desc: "Receive samples and detailed quotations. We help you evaluate and negotiate terms before placing orders.",
  },
  {
    num: "04",
    title: "Production & QC",
    desc: "We monitor production, perform inspections, and ensure your goods meet quality standards before shipment.",
  },
  {
    num: "05",
    title: "Shipping & Delivery",
    desc: "We coordinate logistics, handle export documentation, and track your shipment until it reaches your door.",
  },
];

function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">How It Works</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            A simple, transparent process designed to reduce risk and save you time.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="relative">
              <span className="text-4xl font-extrabold text-navy-100 mb-3 block">{step.num}</span>
              <h3 className="text-base font-bold text-navy-900 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-1 text-navy-800 font-semibold hover:text-navy-600 transition-colors"
          >
            Learn More About Our Process <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const products = [
  { name: "Electronics & Components", desc: "Consumer electronics, PCBs, cables, chargers, smart devices" },
  { name: "Textiles & Apparel", desc: "Garments, fabrics, bags, footwear, accessories" },
  { name: "Machinery & Tools", desc: "Industrial equipment, power tools, hardware, auto parts" },
  { name: "Home & Garden", desc: "Furniture, lighting, kitchenware, decor, outdoor products" },
  { name: "Packaging Materials", desc: "Boxes, bottles, labels, bags, custom packaging" },
  { name: "Consumer Goods", desc: "Toys, stationery, beauty products, pet supplies, promotional items" },
];

function ProductsSection() {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Products We Source</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We have experience sourcing across a wide range of product categories.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((p, i) => (
            <div key={p.name} className="group bg-slate-50 rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-shadow">
              <div className="h-40 bg-slate-200 relative overflow-hidden">
                <img
                  data-strk-img-id={`product-img-${i}`}
                  data-strk-img={`[product-${i}-desc] [product-${i}-name]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 id={`product-${i}-name`} className="text-base font-bold text-navy-900 mb-1">{p.name}</h3>
                <p id={`product-${i}-desc`} className="text-sm text-slate-600">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-1 text-navy-800 font-semibold hover:text-navy-600 transition-colors"
          >
            See All Categories <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const problems = [
  {
    title: "Language & Communication Barriers",
    desc: "Our bilingual team bridges the gap, ensuring your requirements are clearly understood and met.",
  },
  {
    title: "Unreliable Suppliers",
    desc: "We verify every factory before recommending it, checking licenses, capacity, and track record.",
  },
  {
    title: "Quality Control Issues",
    desc: "Independent inspections at multiple stages prevent defective goods from leaving the factory.",
  },
  {
    title: "Hidden Costs & Delays",
    desc: "Transparent pricing and proactive production monitoring keep your project on time and on budget.",
  },
];

function ProblemsSection() {
  return (
    <section className="py-16 md:py-24 bg-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Problems We Solve</h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Common sourcing challenges and how we help you overcome them.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {problems.map((p) => (
            <div key={p.title} className="bg-navy-700/50 rounded-xl p-6 md:p-8 border border-navy-600">
              <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const trustPoints = [
  { stat: "10+", label: "Years in Sourcing" },
  { stat: "500+", label: "Verified Suppliers" },
  { stat: "40+", label: "Countries Served" },
  { stat: "98%", label: "Client Satisfaction" },
];

function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Why Buyers Trust Us</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Numbers that reflect our commitment to reliable, transparent sourcing.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {trustPoints.map((t) => (
            <div key={t.label} className="text-center p-6 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-3xl md:text-4xl font-extrabold text-navy-800 mb-1">{t.stat}</div>
              <div className="text-sm text-slate-600 font-medium">{t.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const caseStudies = [
  {
    client: "European Electronics Retailer",
    industry: "Consumer Electronics",
    result: "Reduced sourcing costs by 22% and improved defect rate from 8% to under 1%.",
  },
  {
    client: "US Home Goods Brand",
    industry: "Home & Garden",
    result: "Found 3 reliable manufacturers and launched 12 new SKUs within 6 months.",
  },
  {
    client: "Australian Industrial Distributor",
    industry: "Machinery & Tools",
    result: "Established long-term supply chain with 45-day lead time consistency.",
  },
];

function CaseStudiesSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Case Studies</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Real results we have delivered for businesses sourcing from China.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((c, i) => (
            <div key={i} className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm">
              <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-2">{c.industry}</div>
              <h3 className="text-lg font-bold text-navy-900 mb-3">{c.client}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{c.result}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1 text-navy-800 font-semibold hover:text-navy-600 transition-colors"
          >
            Read All Case Studies <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "What does your sourcing service cost?",
    a: "We typically charge a commission based on order value or a flat service fee depending on the project scope. Contact us for a tailored quote.",
  },
  {
    q: "How long does it take to find a supplier?",
    a: "Most clients receive a shortlist of verified suppliers within 5-10 business days after we understand your requirements.",
  },
  {
    q: "Do you handle small orders?",
    a: "Yes. We work with businesses of all sizes, though minimum order quantities depend on the product category and supplier.",
  },
  {
    q: "Can you help with product customization?",
    a: "Absolutely. We facilitate communication with factories for OEM, ODM, private label, and custom packaging projects.",
  },
  {
    q: "What quality standards do you follow?",
    a: "We perform inspections based on AQL sampling standards and can align with your specific quality requirements or third-party certifications.",
  },
];

function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600 text-lg">
            Quick answers to common questions about our sourcing services.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-slate-50 rounded-xl p-5 md:p-6 border border-slate-100">
              <h3 className="text-base font-bold text-navy-900 mb-2">{faq.q}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InquiryCTASection() {
  return (
    <section className="py-16 md:py-24 bg-navy-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Ready to Source from China?
          </h2>
          <p className="text-slate-600 text-lg">
            Tell us what you need and we will get back to you within 24 hours with a free sourcing plan.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-10">
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <InquiryCTASection />
    </div>
  );
}
