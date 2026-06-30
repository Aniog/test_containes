import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle, Shield, Search, Factory, Ship, ClipboardCheck, ArrowRight, Star, ChevronDown, Package, Building2, Globe, TrendingUp, Users, HeadphonesIcon, FileCheck, Truck, BarChart3, Phone, Mail, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    desc: "We identify and vet qualified manufacturers that match your product specifications, budget, and quality requirements.",
  },
  {
    icon: Building2,
    title: "Factory Verification",
    desc: "On-site audits verify production capacity, certifications, working conditions, and compliance with international standards.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    desc: "Pre-shipment inspections, during-production checks, and laboratory testing ensure products meet your specifications.",
  },
  {
    icon: TrendingUp,
    title: "Production Monitoring",
    desc: "Regular progress reports, photo updates, and timeline tracking keep you informed throughout the manufacturing process.",
  },
  {
    icon: Ship,
    title: "Logistics & Shipping",
    desc: "We coordinate freight, consolidation, customs documentation, and door-to-door delivery to simplify international shipping.",
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    desc: "Dedicated account managers provide continuous support for reorders, supplier relationships, and market intelligence.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Submit Your Requirements",
    desc: "Tell us about your product specifications, target price, quality standards, and delivery timeline.",
  },
  {
    step: "02",
    title: "Supplier Shortlisting",
    desc: "We research and pre-screen suppliers from our database of vetted manufacturers matching your criteria.",
  },
  {
    step: "03",
    title: "Factory Audit & Verification",
    desc: "Our team visits shortlisted factories to verify capabilities, certifications, and production standards.",
  },
  {
    step: "04",
    title: "Sample & Negotiation",
    desc: "We facilitate samples, negotiate pricing and terms, and draft contracts with your selected supplier.",
  },
  {
    step: "05",
    title: "Production Oversight",
    desc: "We monitor production progress, conduct quality inspections, and provide regular updates.",
  },
  {
    step: "06",
    title: "Shipping & Delivery",
    desc: "We handle logistics documentation, cargo consolidation, and shipping to your destination port or warehouse.",
  },
];

const productCategories = [
  { name: "Electronics & Components", desc: "PCBs, semiconductors, sensors, displays, and electronic accessories" },
  { name: "Industrial Equipment", desc: "Machinery parts, tools, automation equipment, and manufacturing supplies" },
  { name: "Packaging & Materials", desc: "Custom packaging, raw materials, films, and sustainable alternatives" },
  { name: "Textiles & Apparel", desc: "Fabric, garments, technical textiles, and fashion accessories" },
  { name: "Home & Lifestyle", desc: "Furniture, kitchenware, decor, and consumer home products" },
  { name: "Automotive Parts", desc: "Vehicle components, accessories, and aftermarket parts" },
  { name: "Medical Supplies", desc: "Equipment, disposable supplies, PPE, and healthcare products" },
  { name: "Building Materials", desc: "Construction materials, hardware, flooring, and fixtures" },
];

const problems = [
  {
    icon: Shield,
    title: "Unreliable Suppliers",
    desc: "Many online listings lead to trading companies or middlemen, not actual manufacturers. We verify factories in person.",
  },
  {
    icon: TrendingUp,
    title: "Quality Inconsistency",
    desc: "Products that pass pre-shipment samples often fail in batch production. Our during-production inspections catch issues early.",
  },
  {
    icon: Globe,
    title: "Communication Barriers",
    desc: "Language differences and time zones cause misunderstandings and delays. Our bilingual team bridges the gap.",
  },
  {
    icon: Truck,
    title: "Shipping Complexity",
    desc: "International logistics involves customs, documentation, and compliance. We handle it end-to-end.",
  },
];

const trustPoints = [
  { number: "12+", label: "Years Experience", sub: "In China sourcing" },
  { number: "500+", label: "Projects Completed", sub: "Across 30+ industries" },
  { number: "98%", label: "Client Satisfaction", sub: "Repeat engagement rate" },
  { number: "50+", label: "Team Members", sub: "Across China offices" },
];

const caseStudies = [
  {
    company: "EuroTech GmbH",
    industry: "Industrial Equipment",
    challenge: "Needed precision-machined components for European machinery but had quality issues with previous Chinese suppliers.",
    result: "Qualified 3 vetted manufacturers, reduced defect rate from 12% to 1.5%, saved 35% vs European suppliers.",
  },
  {
    company: "NorthStar Medical",
    industry: "Medical Supplies",
    challenge: "Urgent need for certified medical disposables with FDA compliance and strict quality standards.",
    result: "Verified 5 FDA-compliant factories within 2 weeks, secured production, delivered within 45 days.",
  },
  {
    company: "GreenPack Solutions",
    industry: "Sustainable Packaging",
    challenge: "Looking for eco-friendly packaging alternatives at competitive prices with BPI certification.",
    result: "Sourced certified compostable materials, negotiated 22% cost reduction, established ongoing supply agreement.",
  },
];

const faqs = [
  {
    q: "How do you find reliable suppliers in China?",
    a: "We maintain a curated database of pre-vetted manufacturers built over 12 years. For new requests, we combine database research, industry connections, and trade show networks to identify suitable suppliers. Every supplier undergoes on-site verification before being recommended to clients.",
  },
  {
    q: "What does factory verification involve?",
    a: "Our team visits the factory in person to assess production capacity, equipment quality, workforce size, certifications, export experience, working conditions, and quality management systems. We take photos and videos that we share with you, along with a detailed assessment report.",
  },
  {
    q: "What is the typical cost of your sourcing services?",
    a: "Our fees are project-based and depend on product complexity, order volume, and service scope. Contact us with your requirements for a customized quote. Many clients find that our services pay for themselves through better supplier pricing and reduced quality issues.",
  },
  {
    q: "How do you handle quality control and inspections?",
    a: "We offer during-production inspections (DPI), pre-shipment inspections (PSI), container loading supervision, and laboratory testing through accredited partners. Inspections follow AQL (Acceptable Quality Limit) standards and are conducted by trained QC professionals.",
  },
  {
    q: "Can you help with shipping and logistics?",
    a: "Yes. We coordinate all shipping arrangements including freight forwarding, cargo consolidation, customs documentation, and door-to-door delivery. We work with major carriers and freight forwarders to offer competitive rates.",
  },
  {
    q: "What industries do you specialize in?",
    a: "We have experience across 30+ industries including electronics, industrial equipment, medical supplies, packaging, textiles, automotive parts, building materials, and consumer goods. Our team includes specialists with domain expertise in each sector.",
  },
  {
    q: "How long does a typical sourcing project take?",
    a: "Timelines vary by product complexity. A typical project: supplier identification (1-2 weeks), factory verification (1 week), sample development (2-4 weeks), and mass production (4-12 weeks). We provide realistic timelines upfront and track progress throughout.",
  },
  {
    q: "Do you work with small volume orders?",
    a: "Yes. We work with businesses of all sizes, from startups to multinational corporations. For smaller orders, we can help identify suppliers with flexible MOQs or provide consolidation services to make small-batch sourcing cost-effective.",
  },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950" />
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            data-strk-bg-id="hero-bg-8f3a9c"
            data-strk-bg="[hero-heading] [hero-subtitle]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-amber-300 text-sm font-medium">Trusted by buyers in 30+ countries</span>
            </div>
            <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
              China Sourcing Agent{" "}
              <span className="text-amber-400">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-navy-200 max-w-2xl mb-8 leading-relaxed">
              We help overseas businesses find reliable Chinese suppliers, verify factories, inspect product quality, monitor production, and coordinate international shipping.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg px-8 py-4 text-lg transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-white/40 text-white font-semibold rounded-lg px-8 py-4 text-lg transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustPoints.map((point) => (
              <div key={point.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-navy-900">{point.number}</div>
                <div className="text-navy-700 font-medium text-sm">{point.label}</div>
                <div className="text-gray-400 text-xs mt-0.5">{point.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 text-center mb-4">
            Common Sourcing Challenges We Solve
          </h2>
          <p className="text-lg text-gray-500 text-center max-w-2xl mx-auto mb-12">
            Sourcing from China comes with real risks. Here is how we help you avoid them.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((problem) => (
              <div key={problem.title} className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mb-4">
                  <problem.icon className="w-6 h-6 text-navy-700" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{problem.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 text-center mb-4">
            Our Sourcing Services
          </h2>
          <p className="text-lg text-gray-500 text-center max-w-2xl mx-auto mb-12">
            End-to-end support from supplier discovery to final delivery
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="group bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-navy-200 transition-all">
                <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-navy-100 transition-colors">
                  <service.icon className="w-6 h-6 text-navy-700" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-navy-700 font-semibold hover:text-navy-900 transition-colors"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 text-center mb-4">
            Our Sourcing Process
          </h2>
          <p className="text-lg text-gray-500 text-center max-w-2xl mx-auto mb-12">
            A systematic approach to find, verify, and deliver quality products from China
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm relative">
                <div className="text-4xl font-bold text-navy-100 mb-4">{step.step}</div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-navy-700 font-semibold hover:text-navy-900 transition-colors"
            >
              Learn More About Our Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 text-center mb-4">
            Products We Source
          </h2>
          <p className="text-lg text-gray-500 text-center max-w-2xl mx-auto mb-12">
            Extensive experience across diverse manufacturing categories
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {productCategories.map((cat) => (
              <div key={cat.name} className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-navy-200 hover:bg-white transition-all">
                <Package className="w-5 h-5 text-navy-600 mb-3" />
                <h3 className="font-semibold text-navy-900 text-sm mb-1">{cat.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-navy-700 font-semibold hover:text-navy-900 transition-colors"
            >
              View All Categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 text-center mb-4">
            Client Success Stories
          </h2>
          <p className="text-lg text-gray-500 text-center max-w-2xl mx-auto mb-12">
            Real results from businesses that sourced through us
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.company} className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-navy-50 rounded-lg flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-navy-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900 text-sm">{cs.company}</div>
                    <div className="text-gray-400 text-xs">{cs.industry}</div>
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">Challenge</span>
                  <p className="text-gray-500 text-sm mt-1">{cs.challenge}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-teal-600 uppercase tracking-wider">Result</span>
                  <p className="text-gray-500 text-sm mt-1">{cs.result}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-navy-700 font-semibold hover:text-navy-900 transition-colors"
            >
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-500 text-center max-w-2xl mx-auto mb-12">
            Answers to common questions about working with us
          </p>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-16 md:py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Start Your Sourcing Project
            </h2>
            <p className="text-lg text-navy-200 text-center max-w-2xl mx-auto mb-10">
              Tell us about your requirements and we will get back to you within 24 hours with a preliminary assessment and quote.
            </p>
            <InquiryForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Ready to Source from China with Confidence?
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            Contact us today and let our team handle the complexities of Chinese sourcing while you focus on growing your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg px-8 py-4 text-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-4 md:p-5 text-left bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-navy-900 pr-4 text-sm md:text-base">{question}</span>
        <ChevronDown className={cn("w-5 h-5 text-gray-400 shrink-0 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <div className="px-4 md:px-5 pb-4 md:pb-5">
          <p className="text-gray-500 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    product: "",
    quantity: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", company: "", product: "", quantity: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy-900 mb-1.5">Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-1.5">Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-navy-900 mb-1.5">Company Name</label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
            placeholder="Your company"
          />
        </div>
        <div>
          <label htmlFor="product" className="block text-sm font-medium text-navy-900 mb-1.5">Product Description *</label>
          <input
            id="product"
            name="product"
            type="text"
            required
            value={formData.product}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
            placeholder="What product are you sourcing?"
          />
        </div>
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-navy-900 mb-1.5">Estimated Quantity</label>
          <input
            id="quantity"
            name="quantity"
            type="text"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
            placeholder="e.g. 1000 pcs / 500 kg"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-1.5">Additional Details</label>
          <input
            id="message"
            name="message"
            type="text"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
            placeholder="Any special requirements?"
          />
        </div>
      </div>
      <div className="mt-6">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white font-semibold rounded-lg px-6 py-3 text-base transition-colors"
        >
          {status === "submitting" ? (
            "Sending..."
          ) : (
            <>
              <Send className="w-4 h-4" />
              Submit Inquiry
            </>
          )}
        </button>
      </div>
      {status === "success" && (
        <div className="mt-4 p-3 bg-teal-50 text-teal-700 rounded-lg text-sm text-center font-medium">
          Thank you! We have received your inquiry and will get back to you within 24 hours.
        </div>
      )}
    </form>
  );
}