import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import {
  ShieldCheck,
  Search,
  ClipboardCheck,
  Ship,
  Factory,
  Package,
  Award,
  HeadphonesIcon,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Globe,
  BarChart3,
  Truck,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    desc: "We identify and vet reliable suppliers that match your product requirements, budget, and quality standards.",
  },
  {
    icon: Factory,
    title: "Factory Audits",
    desc: "On-site inspections evaluate production capacity, certifications, working conditions, and compliance.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    desc: "Pre-shipment, during-production, and random inspections ensure products meet your specifications.",
  },
  {
    icon: Ship,
    title: "Shipping & Logistics",
    desc: "We coordinate freight, customs documentation, and door-to-door delivery to your destination.",
  },
  {
    icon: Package,
    title: "Sample Management",
    desc: "From sample requests to evaluation, we manage the entire process to confirm product quality upfront.",
  },
  {
    icon: BarChart3,
    title: "Production Monitoring",
    desc: "Regular progress reports, milestone checks, and real-time updates throughout the manufacturing cycle.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Share Your Requirements",
    desc: "Tell us about your product, budget, target price, and quality standards. We'll prepare a tailored sourcing plan.",
  },
  {
    number: "02",
    title: "Supplier Matching",
    desc: "We research and shortlist qualified suppliers, verifying their credentials and capabilities before presenting them to you.",
  },
  {
    number: "03",
    title: "Verification & Sampling",
    desc: "We conduct factory audits and manage sample requests to confirm product quality and supplier reliability.",
  },
  {
    number: "04",
    title: "Order & Production",
    desc: "Once approved, we oversee production, conduct quality inspections, and provide regular progress updates.",
  },
  {
    number: "05",
    title: "Shipping & Delivery",
    desc: "We handle export documentation, cargo consolidation, and shipping arrangements to deliver your goods safely.",
  },
];

const productCategories = [
  {
    icon: Package,
    title: "Consumer Electronics",
    desc: "Smartphones, accessories, audio devices, wearables, and smart home products.",
  },
  {
    icon: Factory,
    title: "Industrial Equipment",
    desc: "Machinery, tools, automation components, and manufacturing equipment.",
  },
  {
    icon: Truck,
    title: "Auto Parts",
    desc: "Automotive components, accessories, replacement parts, and aftermarket products.",
  },
  {
    icon: Package,
    title: "Home & Living",
    desc: "Furniture, home decor, kitchenware, textiles, and household products.",
  },
  {
    icon: Package,
    title: "Apparel & Accessories",
    desc: "Garments, footwear, bags, accessories, and fashion items.",
  },
  {
    icon: Package,
    title: "Health & Beauty",
    desc: "Cosmetics, personal care, supplements, and wellness products.",
  },
  {
    icon: Package,
    title: "Food & Beverage",
    desc: "Packaged foods, ingredients, beverages, and agricultural products.",
  },
  {
    icon: Package,
    title: "Building Materials",
    desc: "Construction materials, hardware, piping, flooring, and fixtures.",
  },
];

const problems = [
  {
    problem: "Hard to find trustworthy suppliers",
    solution: "We personally vet every supplier through factory visits, license verification, and background checks before any introduction.",
  },
  {
    problem: "Quality doesn't match samples",
    solution: "Our inspectors conduct in-production and pre-shipment inspections to catch issues before they reach you.",
  },
  {
    problem: "Communication barriers with factories",
    solution: "Our bilingual team bridges the gap — we handle all communications with suppliers in Chinese, keeping you informed in English.",
  },
  {
    problem: "Missed deadlines and delays",
    solution: "We monitor production schedules, follow up on delays, and provide weekly progress reports so you're always in control.",
  },
  {
    problem: "Hidden costs and unexpected fees",
    solution: "Transparent pricing with no hidden fees. We provide detailed cost breakdowns before any order is placed.",
  },
  {
    problem: "Shipping and customs complexity",
    solution: "We manage all export documentation, customs clearance, and freight coordination for smooth international delivery.",
  },
];

const trustPoints = [
  { icon: Users, stat: "500+", label: "Clients Served" },
  { icon: Factory, stat: "2,000+", label: "Factories Verified" },
  { icon: Ship, stat: "3,500+", label: "Shipments Coordinated" },
  { icon: Award, stat: "12+", label: "Years Experience" },
];

const testimonials = [
  {
    name: "Thomas Mueller",
    role: "Procurement Director, EuroTech GmbH",
    text: "SSourcing China helped us find a reliable manufacturer for our electronic components. Their factory audit revealed issues we would have never spotted remotely. We've been working with the same supplier for two years now.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Founder, UrbanHome Decor",
    text: "As a first-time importer, I was nervous about the entire process. SSourcing held my hand through every step — from supplier selection to the final shipment. My products arrived on time and exceeded quality expectations.",
    rating: 5,
  },
  {
    name: "James Okonkwo",
    role: "Operations Manager, AfriTrade Group",
    text: "Their production monitoring service saved us from a major quality disaster. They caught a material substitution issue during production and got it corrected before any damage was done. Worth every penny.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "What industries do you source for?",
    a: "We source across multiple industries including consumer electronics, industrial equipment, home goods, apparel, auto parts, health products, and more. Contact us with your specific product needs and we'll confirm our capability.",
  },
  {
    q: "How do you verify suppliers?",
    a: "Our verification process includes business license validation, factory site visits, production capability assessment, quality management system review, and client reference checks. We personally inspect every factory before recommending them.",
  },
  {
    q: "What are your service fees?",
    a: "Our fee structure is transparent and depends on the scope of services required. We offer everything from one-time inspections to full-service sourcing management. Contact us for a customized quote based on your specific needs.",
  },
  {
    q: "Do you have minimum order quantities?",
    a: "Minimum order quantities vary by product and supplier. We work with both large-scale manufacturers and smaller factories that offer flexible MOQs. We'll help you find the right fit for your order size.",
  },
  {
    q: "How do you handle quality control?",
    a: "We offer multiple levels of quality inspection: during-production inspection, pre-shipment inspection, and container loading supervision. Our inspectors use AQL sampling standards and provide detailed photo reports.",
  },
  {
    q: "What shipping methods do you arrange?",
    a: "We arrange sea freight (FCL/LCL), air freight, express courier services, and rail freight. We handle all export documentation, customs clearance, and can coordinate door-to-door delivery to your destination.",
  },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-neutral-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          data-strk-bg-id="hero-bg-main"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 via-brand-800/80 to-transparent" />
        <div className="container-custom relative py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-brand-500/20 text-brand-200 text-sm font-medium rounded-full mb-6">
              China-Based Sourcing Agent
            </span>
            <h1 id="hero-title" className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-8 max-w-2xl">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, monitor production, and coordinate shipping — so you can source from China with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-accent text-base px-8 py-3.5">
                Get a Free Sourcing Quote
              </Link>
              <Link to="/how-it-works" className="btn-outline border-white text-white hover:bg-white/10 px-8 py-3.5">
                How It Works
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 text-neutral-400 text-sm">
                <ShieldCheck className="w-4 h-4 text-green-400" />
                Verified Suppliers
              </div>
              <div className="flex items-center gap-2 text-neutral-400 text-sm">
                <ClipboardCheck className="w-4 h-4 text-green-400" />
                Quality Guaranteed
              </div>
              <div className="flex items-center gap-2 text-neutral-400 text-sm">
                <Ship className="w-4 h-4 text-green-400" />
                Door-to-Door Shipping
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-neutral-100">
        <div className="container-custom py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, i) => (
              <div key={i} className="text-center">
                <point.icon className="w-8 h-8 text-brand-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-neutral-900 mb-1">{point.stat}</div>
                <div className="text-sm text-neutral-500">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="section-title" id="services-title">Our Sourcing Services</h2>
            <p className="section-subtitle" id="services-subtitle">
              End-to-end sourcing support from supplier discovery to final delivery
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{service.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary">
              View All Services <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="section-title" id="problems-title">Problems We Solve</h2>
            <p className="section-subtitle" id="problems-subtitle">
              Common challenges importers face when sourcing from China — and how we address them
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {problems.map((item, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-xl bg-neutral-50 border border-neutral-100">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1.5">{item.problem}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="section-title" id="process-title">How It Works</h2>
            <p className="section-subtitle" id="process-subtitle">
              A straightforward process designed to minimize risk and maximize results
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, i) => (
              <div key={i} className="flex gap-6 mb-10 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {step.number}
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-brand-200 mt-2" />
                  )}
                </div>
                <div className="pb-10">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="btn-primary">
              Learn More About Our Process <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="section-title" id="products-title">Products We Source</h2>
            <p className="section-subtitle" id="products-subtitle">
              We source across a wide range of industries and product categories
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((cat, i) => (
              <div key={i} className="bg-neutral-50 rounded-xl p-6 border border-neutral-100 hover:bg-white hover:shadow-md transition-all">
                <cat.icon className="w-8 h-8 text-brand-600 mb-3" />
                <h3 className="font-semibold text-neutral-900 mb-2 text-sm">{cat.title}</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="btn-primary">
              View All Categories <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="section-title" id="testimonials-title">Trusted by Global Buyers</h2>
            <p className="section-subtitle" id="testimonials-subtitle">
              Real feedback from clients who source with us
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="border-t border-neutral-100 pt-4">
                  <div className="font-semibold text-neutral-900 text-sm">{t.name}</div>
                  <div className="text-xs text-neutral-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="section-title" id="faq-title">Frequently Asked Questions</h2>
            <p className="section-subtitle" id="faq-subtitle">
              Answers to common questions about sourcing from China
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-xl border border-neutral-200 overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer text-sm font-medium text-neutral-900 hover:bg-neutral-50 transition-colors list-none">
                  {faq.q}
                  <ChevronRight className="w-4 h-4 text-neutral-400 group-open:rotate-90 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <div className="px-5 pb-5 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Inquiry Form Section */}
      <section className="section-padding bg-brand-900">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" id="cta-title">
              Ready to Source from China?
            </h2>
            <p className="text-lg text-brand-200 max-w-2xl mx-auto" id="cta-subtitle">
              Tell us about your product needs and we'll get back to you with a free sourcing assessment within 24 hours.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">Full Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email Address *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">Company Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">Country</label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  placeholder="Your country"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">Product / Service Description *</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  placeholder="Describe the product you want to source, target quantity, budget, and any specific requirements..."
                />
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="btn-accent w-full text-base py-3">
                  Get a Free Sourcing Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}