import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import {
  Search,
  Factory,
  ShieldCheck,
  Truck,
  ClipboardCheck,
  BarChart3,
  CheckCircle,
  Star,
  Users,
  Globe,
  ChevronRight,
  ArrowRight,
  Package,
  Settings,
  ShoppingCart,
  FileSearch,
  HardHat,
  Ship,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    desc: "Identify and vet reliable manufacturers for your specific product requirements across China.",
  },
  {
    icon: Factory,
    title: "Factory Audits",
    desc: "On-site verification of supplier capabilities, certifications, production capacity, and compliance.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    desc: "Pre-shipment inspections, during-production checks, and detailed QC reporting.",
  },
  {
    icon: Settings,
    title: "Production Monitoring",
    desc: "Regular progress tracking and quality control throughout your entire manufacturing process.",
  },
  {
    icon: Ship,
    title: "Shipping & Logistics",
    desc: "End-to-end freight coordination, customs clearance, and door-to-door delivery management.",
  },
  {
    icon: FileSearch,
    title: "Sample Management",
    desc: "Sample requests, evaluation, feedback coordination, and approval workflow management.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Submit Your Requirements",
    desc: "Tell us about your product, quantity, budget, and quality expectations. We'll review and respond within 24 hours.",
  },
  {
    number: "02",
    title: "Supplier Match & Verification",
    desc: "We identify suitable suppliers, verify their credentials, audit facilities, and shortlist the best options for you.",
  },
  {
    number: "03",
    title: "Sample & Price Negotiation",
    desc: "We coordinate sample requests, negotiate pricing and terms, and ensure you get competitive quotes.",
  },
  {
    number: "04",
    title: "Production & QC Monitoring",
    desc: "Once production starts, we monitor progress, conduct inspections, and keep you updated with regular reports.",
  },
  {
    number: "05",
    title: "Shipping & Delivery",
    desc: "We handle logistics, documentation, customs clearance, and arrange shipment to your destination.",
  },
];

const productCategories = [
  {
    icon: Package,
    title: "Electronics & Components",
    desc: "Consumer electronics, PCBs, components, and accessories.",
  },
  {
    icon: HardHat,
    title: "Industrial Equipment",
    desc: "Machinery, tools, industrial parts, and manufacturing equipment.",
  },
  {
    icon: ShoppingCart,
    title: "Consumer Goods",
    desc: "Home products, kitchenware, lifestyle items, and general merchandise.",
  },
  {
    icon: Globe,
    title: "Textiles & Apparel",
    desc: "Garments, fabrics, accessories, and textile raw materials.",
  },
  {
    icon: Package,
    title: "Packaging & Printing",
    desc: "Custom packaging, labels, boxes, and printed materials.",
  },
  {
    icon: Settings,
    title: "Auto Parts & Hardware",
    desc: "Automotive components, hardware tools, and mechanical parts.",
  },
];

const problems = [
  {
    problem: "Can't find reliable suppliers",
    solution: "We maintain a vetted database of qualified manufacturers across industries.",
    image: "supplier-search",
  },
  {
    problem: "Worried about product quality",
    solution: "Rigorous factory audits and multi-stage inspections ensure consistent quality.",
    image: "quality-control",
  },
  {
    problem: "Time zone & language barriers",
    solution: "Our China-based team handles all communication, so you don't have to.",
    image: "communication",
  },
  {
    problem: "Hidden costs & markups",
    solution: "Transparent pricing with no hidden fees. You pay the factory directly.",
    image: "transparent-pricing",
  },
];

const trustPoints = [
  { icon: Users, stat: "500+", label: "Buyers Served" },
  { icon: Factory, stat: "2,000+", label: "Factories Vetted" },
  { icon: CheckCircle, stat: "3,500+", label: "Inspections Completed" },
  { icon: Globe, stat: "40+", label: "Countries Reached" },
];

const caseStudies = [
  {
    title: "Helping a US retailer source home goods",
    result: "40% cost reduction, consistent quality across 50 SKUs",
    industry: "Home Goods",
  },
  {
    title: "European startup manufacturing consumer electronics",
    result: "Zero defect rate, on-time delivery for 6 production runs",
    industry: "Electronics",
  },
  {
    title: "Australian distributor sourcing industrial parts",
    result: "Reduced lead time from 12 to 6 weeks, 30% savings",
    industry: "Industrial",
  },
];

const faqs = [
  {
    q: "What types of products can you source?",
    a: "We source across virtually all categories including electronics, industrial equipment, consumer goods, textiles, packaging, auto parts, and more. Contact us with your specific requirements.",
  },
  {
    q: "How do you verify suppliers?",
    a: "We conduct comprehensive factory audits including business licenses, production capacity, quality certifications, worker conditions, and client references. We personally visit shortlisted factories.",
  },
  {
    q: "What are your fees?",
    a: "Our fee structure is transparent and based on project scope. We typically charge a percentage of order value or a fixed project fee. Contact us for a customized quote.",
  },
  {
    q: "How do you handle quality control?",
    a: "We offer multiple inspection stages: during production, pre-shipment, and container loading supervision. Each inspection includes detailed reporting with photos and measurements.",
  },
  {
    q: "Do you handle shipping and logistics?",
    a: "Yes, we coordinate all logistics including freight booking, documentation, customs clearance, and delivery to your destination. We work with major freight forwarders.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "Minimum order quantities vary by supplier and product category. We work with factories that accommodate both small and large production runs. Contact us with your requirements.",
  },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-800 via-primary-800 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            data-strk-bg-id="hero-bg-main"
            data-strk-bg="[hero-title] [hero-subtitle]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
            className="w-full h-full bg-cover bg-center"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20">
              China-Based Sourcing Agent
            </Badge>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, monitor production, and coordinate shipping — all from our base in Guangzhou, China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white font-semibold rounded-lg text-base transition-colors">
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/how-it-works" className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg text-base border border-white/20 transition-colors">
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {trustPoints.map((point, i) => (
              <div key={i} className="text-center">
                <point.icon className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-primary-800">{point.stat}</div>
                <div className="text-sm text-slate-500 mt-1">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title">Our Sourcing Services</h2>
            <p className="section-subtitle mt-4">
              End-to-end sourcing support from supplier discovery to final delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, i) => (
              <Card key={i} className="p-6 md:p-8 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
              View All Services <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle mt-4">
              A straightforward process designed to save you time and reduce risk.
            </p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />
            <div className="space-y-12">
              {processSteps.map((step, i) => (
                <div key={i} className={`relative flex items-center gap-8 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className={`hidden lg:block ${i % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                      <Badge variant="secondary" className="mb-2">{step.number}</Badge>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">{step.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                  <div className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-lg shrink-0 z-10 shadow-md">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <div className="lg:hidden">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-primary-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                          {step.number}
                        </div>
                        <h3 className="text-lg font-semibold text-slate-800">{step.title}</h3>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed ml-11">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title">Products We Source</h2>
            <p className="section-subtitle mt-4">
              We source across a wide range of industries and product categories.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {productCategories.map((cat, i) => (
              <Card key={i} className="p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                  <cat.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{cat.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{cat.desc}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
              View All Categories <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title">Common Sourcing Problems We Solve</h2>
            <p className="section-subtitle mt-4">
              Sourcing from China comes with challenges. We help you navigate them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {problems.map((item, i) => (
              <Card key={i} className="p-6 md:p-8 flex gap-5">
                <div className="w-16 h-16 rounded-xl bg-primary-50 shrink-0 flex items-center justify-center overflow-hidden">
                  <img
                    data-strk-img-id={`problem-${i}`}
                    data-strk-img={`[problem-title-${i}] [problem-solution-${i}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="100"
                    className="w-full h-full object-cover"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt=""
                  />
                </div>
                <div>
                  <h3 id={`problem-title-${i}`} className="font-semibold text-slate-800 mb-1">{item.problem}</h3>
                  <p id={`problem-solution-${i}`} className="text-sm text-slate-600 leading-relaxed">{item.solution}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title">Case Studies</h2>
            <p className="section-subtitle mt-4">
              Real results from real partnerships.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {caseStudies.map((cs, i) => (
              <Card key={i} className="p-6 hover:shadow-md transition-shadow flex flex-col">
                <div className="w-full h-48 rounded-lg overflow-hidden mb-4 bg-slate-100">
                  <img
                    data-strk-img-id={`casestudy-${i}`}
                    data-strk-img={`[cs-title-${i}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    className="w-full h-full object-cover"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt=""
                  />
                </div>
                <Badge variant="secondary" className="mb-2 w-fit">{cs.industry}</Badge>
                <h3 id={`cs-title-${i}`} className="font-semibold text-slate-800 mb-2">{cs.title}</h3>
                <p className="text-sm text-primary-600 font-medium mt-auto">{cs.result}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
              View All Case Studies <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle mt-4">
              Common questions about working with a China sourcing agent.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl border border-slate-100 shadow-sm">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-medium text-slate-800 pr-4">{faq.q}</span>
                  <ChevronRight className="w-5 h-5 text-slate-400 shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-800 to-primary-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Sourcing?</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
            Tell us about your product requirements and we'll get back to you within 24 hours with a free sourcing assessment.
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-accent-600 hover:bg-accent-700 text-white font-semibold rounded-lg text-lg transition-colors">
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}