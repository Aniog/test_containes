import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Shield, Search, ClipboardCheck, Truck, BarChart3, Globe, CheckCircle, ArrowRight, Star, Users, Factory, Package, ChevronRight, HelpCircle } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    description: "Identify and vet reliable manufacturers that match your product specifications, budget, and quality requirements.",
  },
  {
    icon: Shield,
    title: "Factory Verification",
    description: "On-site audits to verify business licenses, production capacity, certifications, and compliance with international standards.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    description: "Pre-shipment, during-production, and pre-shipment inspections to ensure products meet your specifications.",
  },
  {
    icon: BarChart3,
    title: "Production Monitoring",
    description: "Real-time tracking of production schedules, raw material quality, and manufacturing progress.",
  },
  {
    icon: Truck,
    title: "Shipping Coordination",
    description: "End-to-end logistics management including freight forwarding, customs clearance, and door-to-door delivery.",
  },
  {
    icon: Globe,
    title: "Product Development",
    description: "Assistance with product design refinement, prototyping, and packaging development for your market.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Submit Your Requirements",
    description: "Tell us about your product needs, budget, target price, quality standards, and delivery timeline.",
  },
  {
    step: "02",
    title: "Supplier Matching",
    description: "We research and pre-screen suppliers from our verified database and present you with the best options.",
  },
  {
    step: "03",
    title: "Factory Audit",
    description: "Our team visits shortlisted factories to verify capabilities, certifications, and working conditions.",
  },
  {
    step: "04",
    title: "Sample & Quotation",
    description: "We coordinate samples, negotiate pricing, and finalize terms with your chosen supplier.",
  },
  {
    step: "05",
    title: "Production & QC",
    description: "We monitor production and conduct quality inspections at key milestones to ensure compliance.",
  },
  {
    step: "06",
    title: "Shipping & Delivery",
    description: "We handle logistics, customs documentation, and arrange shipment to your doorstep.",
  },
];

const productCategories = [
  { name: "Electronics & Components", items: "Consumer electronics, PCBs, cables, sensors" },
  { name: "Industrial Equipment", items: "Machinery parts, tools, automation equipment" },
  { name: "Home & Kitchen", items: "Household goods, kitchenware, home decor" },
  { name: "Apparel & Textiles", items: "Garments, fabrics, accessories, footwear" },
  { name: "Packaging & Printing", items: "Custom boxes, labels, paper products" },
  { name: "Auto Parts", items: "Vehicle components, accessories, tools" },
  { name: "Medical Supplies", items: "Devices, PPE, diagnostic equipment" },
  { name: "Building Materials", items: "Hardware, piping, fixtures, flooring" },
];

const problems = [
  {
    title: "Worried about supplier reliability?",
    description: "We conduct thorough factory audits and verify business credentials so you only work with verified suppliers.",
  },
  {
    title: "Quality issues with previous shipments?",
    description: "Our multi-stage inspection process catches defects before they reach your customers, not after.",
  },
  {
    title: "Communication barriers with factories?",
    description: "Our bilingual team bridges the gap, handling all communications with suppliers in Chinese and English.",
  },
  {
    title: "Uncertain about shipping and customs?",
    description: "We manage the entire logistics chain, from freight booking to customs clearance documentation.",
  },
];

const trustPoints = [
  { icon: Users, stat: "500+", label: "Suppliers Verified" },
  { icon: CheckCircle, stat: "98%", label: "Client Satisfaction" },
  { icon: Package, stat: "2,000+", label: "Shipments Managed" },
  { icon: Factory, stat: "12+", label: "Years Experience" },
];

const testimonials = [
  {
    name: "Thomas Mueller",
    role: "Procurement Manager, Germany",
    quote: "SSourcing China helped us find a reliable manufacturer for our industrial components. The factory audit was thorough and saved us from a potentially costly mistake.",
  },
  {
    name: "Sarah Chen",
    role: "Founder, US-based E-commerce Brand",
    quote: "Their quality inspection service gives us peace of mind. We can now source from China with confidence, knowing our products are checked before shipping.",
  },
  {
    name: "James Anderson",
    role: "Operations Director, UK Retail",
    quote: "We've been working with SSourcing for over two years. Their production monitoring has significantly reduced our defect rates and improved delivery times.",
  },
];

const faqs = [
  {
    q: "What makes SSourcing China different from other sourcing agents?",
    a: "We combine deep local market knowledge with rigorous verification processes. Every supplier in our network is physically audited, and we provide transparent, detailed reports at every stage of the sourcing process.",
  },
  {
    q: "How much do your services cost?",
    a: "Our fees vary based on the scope of work. We offer transparent pricing with no hidden costs. Contact us for a free, no-obligation quote tailored to your specific sourcing needs.",
  },
  {
    q: "What industries do you serve?",
    a: "We serve a wide range of industries including consumer electronics, industrial equipment, home goods, apparel, medical devices, automotive parts, and more. Contact us to discuss your specific product category.",
  },
  {
    q: "Do you have minimum order quantities?",
    a: "Minimum order quantities depend on the supplier and product type. We work with both large-scale manufacturers and smaller factories that can accommodate lower MOQs for startups and small businesses.",
  },
  {
    q: "How do you ensure quality control?",
    a: "We implement a multi-stage quality control process including raw material inspection, during-production checks, pre-shipment inspection, and final quality reports with photographic evidence.",
  },
  {
    q: "What if there's a problem with my shipment?",
    a: "We stand behind our work. If issues arise due to our oversight, we'll work to resolve them. Our rigorous inspection process is designed to minimize risks, and we maintain clear documentation throughout.",
  },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            data-strk-bg-id="hero-bg-7a2b3c"
            data-strk-bg="[hero-title] [hero-subtitle]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
            className="w-full h-full bg-cover bg-center"
          />
        </div>
        <div className="relative container-section py-20 md:py-32">
          <div className="max-w-3xl">
            <p className="text-accent-light font-semibold text-sm uppercase tracking-wider mb-4">China Sourcing Agent</p>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 mt-6 max-w-2xl leading-relaxed">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, monitor production, and coordinate shipping. Your trusted partner for sourcing from China.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/contact" className="btn-primary text-base px-8 py-4">
                Get a Free Sourcing Quote
              </Link>
              <Link to="/how-it-works" className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-all">
                How It Works
              </Link>
            </div>
            <div className="flex items-center gap-4 mt-10 text-slate-400 text-sm">
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-green-400" /> Verified Suppliers</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-green-400" /> Quality Guaranteed</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-green-400" /> End-to-End Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-slate-200">
        <div className="container-section py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point) => (
              <div key={point.label} className="text-center">
                <point.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-2xl md:text-3xl font-bold text-primary">{point.stat}</p>
                <p className="text-sm text-slate-500 mt-1">{point.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-section">
          <div className="section-header">
            <p className="section-subtitle">Our Services</p>
            <h2 className="section-title">End-to-End Sourcing Services</h2>
            <p className="section-description">
              From finding the right supplier to delivering your products, we manage every step of the China sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="card">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary">
              View All Services <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-section">
          <div className="section-header">
            <p className="section-subtitle">How It Works</p>
            <h2 className="section-title">Our Sourcing Process</h2>
            <p className="section-description">
              A proven six-step process that ensures quality, transparency, and peace of mind from start to finish.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-slate-200 -z-10" />
                )}
                <div className="card">
                  <span className="text-3xl font-bold text-primary/20">{step.step}</span>
                  <h3 className="text-lg font-semibold text-slate-900 mt-2 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="btn-secondary">
              Learn More About Our Process <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-section">
          <div className="section-header">
            <p className="section-subtitle">Products We Source</p>
            <h2 className="section-title">Across Multiple Industries</h2>
            <p className="section-description">
              We source products across a wide range of categories, connecting you with manufacturers that match your specific requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {productCategories.map((cat) => (
              <div key={cat.name} className="card">
                <h3 className="font-semibold text-slate-900 mb-2">{cat.name}</h3>
                <p className="text-slate-500 text-sm">{cat.items}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="btn-secondary">
              View All Categories <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-section">
          <div className="section-header">
            <p className="section-subtitle">Problems We Solve</p>
            <h2 className="section-title">Sourcing Challenges? We've Got You Covered</h2>
            <p className="section-description">
              Common pain points of sourcing from China and how we address them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((problem) => (
              <div key={problem.title} className="card flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">{problem.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Case Studies */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-section">
          <div className="section-header">
            <p className="section-subtitle">Client Success</p>
            <h2 className="section-title">Trusted by Global Buyers</h2>
            <p className="section-description">
              Hear from procurement professionals who rely on SSourcing China for their sourcing needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 italic">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="btn-secondary">
              View Case Studies <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-section">
          <div className="section-header">
            <p className="section-subtitle">FAQ</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-description">
              Answers to common questions about our China sourcing services.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="card group cursor-pointer">
                <summary className="flex items-center justify-between text-slate-900 font-medium">
                  <span>{faq.q}</span>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <p className="text-slate-600 text-sm mt-4 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container-section text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China with Confidence?
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            Get a free, no-obligation quote. Tell us about your sourcing needs and we'll get back to you within 24 hours.
          </p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4">
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}