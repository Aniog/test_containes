import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  CheckCircle, ArrowRight, Star, Globe, Users, Award, ChevronRight
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    desc: "We identify and shortlist verified manufacturers that match your product specs, MOQ, and budget — across all major Chinese manufacturing hubs.",
    titleId: "svc-sourcing-title",
    descId: "svc-sourcing-desc",
    imgId: "svc-sourcing-img-a1b2c3",
  },
  {
    icon: ShieldCheck,
    title: "Factory Verification",
    desc: "On-site factory audits covering production capacity, certifications, workforce, equipment, and compliance with international standards.",
    titleId: "svc-factory-title",
    descId: "svc-factory-desc",
    imgId: "svc-factory-img-d4e5f6",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    desc: "Pre-shipment, during-production, and container loading inspections to ensure your goods meet specifications before they leave China.",
    titleId: "svc-qc-title",
    descId: "svc-qc-desc",
    imgId: "svc-qc-img-g7h8i9",
  },
  {
    icon: Factory,
    title: "Production Follow-up",
    desc: "Regular updates and on-site monitoring throughout the production cycle so you stay informed and issues are caught early.",
    titleId: "svc-prod-title",
    descId: "svc-prod-desc",
    imgId: "svc-prod-img-j1k2l3",
  },
  {
    icon: Truck,
    title: "Shipping Coordination",
    desc: "We coordinate with freight forwarders, handle export documentation, and ensure your cargo is packed, labeled, and shipped correctly.",
    titleId: "svc-ship-title",
    descId: "svc-ship-desc",
    imgId: "svc-ship-img-m4n5o6",
  },
  {
    icon: Globe,
    title: "Trade Compliance",
    desc: "Guidance on import regulations, labeling requirements, and customs documentation to help your shipment clear smoothly at destination.",
    titleId: "svc-trade-title",
    descId: "svc-trade-desc",
    imgId: "svc-trade-img-p7q8r9",
  },
];

const steps = [
  { num: "01", title: "Submit Your Inquiry", desc: "Tell us what you need — product type, specs, quantity, and target price. We respond within 24 hours." },
  { num: "02", title: "Supplier Research", desc: "We search our network and databases to identify qualified manufacturers that match your requirements." },
  { num: "03", title: "Factory Audit", desc: "We visit shortlisted factories in person to verify capabilities, certifications, and working conditions." },
  { num: "04", title: "Sample & Negotiation", desc: "We arrange samples, review quality, and negotiate pricing and terms on your behalf." },
  { num: "05", title: "Production Monitoring", desc: "We follow up during production, conduct inspections, and report progress with photos and data." },
  { num: "06", title: "Shipping & Delivery", desc: "We coordinate logistics, prepare export documents, and ensure your goods arrive on time." },
];

const problems = [
  { title: "Unreliable Suppliers", desc: "Factories that look good online but fail to deliver. We verify before you commit." },
  { title: "Quality Surprises", desc: "Goods that don't match samples. Our inspections catch defects before shipment." },
  { title: "Communication Barriers", desc: "Language gaps and time zones causing delays. We bridge the gap as your local representative." },
  { title: "Shipping Confusion", desc: "Unclear freight options and customs issues. We handle logistics end to end." },
  { title: "Overpaying for Products", desc: "Paying retail prices without leverage. We negotiate factory-direct pricing for you." },
  { title: "No Local Presence", desc: "No one on the ground to represent your interests. We are your eyes and ears in China." },
];

const trustPoints = [
  { icon: Award, value: "10+", label: "Years in China Sourcing" },
  { icon: Users, value: "500+", label: "Global Buyers Served" },
  { icon: CheckCircle, value: "98%", label: "Client Satisfaction Rate" },
  { icon: Globe, value: "30+", label: "Countries Served" },
];

const caseStudies = [
  {
    id: "cs-furniture",
    industry: "Furniture",
    title: "European Retailer Cuts Sourcing Costs by 28%",
    desc: "A mid-size furniture importer in Germany needed to reduce costs without compromising quality. We identified three verified factories, negotiated pricing, and implemented a QC protocol.",
    result: "28% cost reduction, zero defect shipments over 12 months.",
    titleId: "cs-furniture-title",
    descId: "cs-furniture-desc",
    imgId: "cs-furniture-img-s1t2u3",
  },
  {
    id: "cs-electronics",
    industry: "Electronics",
    title: "US Brand Launches Private Label Product Line",
    desc: "An American e-commerce brand wanted to launch a private label electronics line. We sourced compliant manufacturers, managed sampling, and coordinated FCC certification.",
    result: "Product launched in 5 months, fully compliant with US regulations.",
    titleId: "cs-electronics-title",
    descId: "cs-electronics-desc",
    imgId: "cs-electronics-img-v4w5x6",
  },
  {
    id: "cs-apparel",
    industry: "Apparel",
    title: "Australian Brand Scales Production with Confidence",
    desc: "A growing Australian fashion brand needed to scale from 500 to 5,000 units per style. We found a factory with the right capacity and managed production monitoring.",
    result: "On-time delivery, consistent quality across all SKUs.",
    titleId: "cs-apparel-title",
    descId: "cs-apparel-desc",
    imgId: "cs-apparel-img-y7z8a9",
  },
];

const faqs = [
  {
    q: "How much does your sourcing service cost?",
    a: "Our fees depend on the scope of work — sourcing only, inspection only, or full-service. We offer transparent pricing with no hidden charges. Contact us for a tailored quote.",
  },
  {
    q: "Do you work with small businesses and startups?",
    a: "Yes. We work with buyers of all sizes, from startups placing their first order to established importers scaling operations. We adapt our service to your volume and budget.",
  },
  {
    q: "Which product categories do you cover?",
    a: "We source across most consumer and industrial categories including electronics, furniture, apparel, hardware, packaging, and more. See our Products page for a full list.",
  },
  {
    q: "How do you verify a factory?",
    a: "Our factory audits include on-site visits, review of business licenses and certifications, production capacity assessment, worker conditions, and quality management systems.",
  },
  {
    q: "Can you handle shipping and customs?",
    a: "We coordinate with licensed freight forwarders for sea and air freight, prepare export documentation, and advise on import requirements at your destination.",
  },
  {
    q: "How long does the sourcing process take?",
    a: "A typical sourcing project takes 2–4 weeks from inquiry to confirmed supplier. Production and shipping timelines depend on the product and order size.",
  },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="hero-bg-main-b1c2d3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-[#0D2545]/75 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <span className="inline-block bg-[#E8621A]/20 text-[#E8621A] border border-[#E8621A]/30 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              China-Based Sourcing Agent
            </span>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-[#E8621A]">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8 max-w-2xl">
              We help overseas buyers find reliable Chinese suppliers, verify factories,
              inspect quality, follow production, and coordinate shipping — all from one trusted partner on the ground.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-[#E8621A] hover:bg-[#C9541A] text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors text-center"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link
                to="/how-it-works"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0D2545] font-semibold px-8 py-4 rounded-lg text-base transition-colors text-center"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#1A4B8C] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {trustPoints.map((tp) => (
              <div key={tp.label} className="flex flex-col items-center gap-1">
                <tp.icon className="w-6 h-6 text-[#E8621A] mb-1" />
                <span className="text-3xl font-bold text-white">{tp.value}</span>
                <span className="text-slate-200 text-sm">{tp.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#F4F6FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#E8621A] text-sm font-semibold uppercase tracking-widest">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D2545] mt-2 mb-4">End-to-End Sourcing Services</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              From finding the right factory to getting goods to your door — we manage every step of the China sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div key={svc.title} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#1A4B8C]/10 rounded-lg flex items-center justify-center mb-4">
                  <svc.icon className="w-6 h-6 text-[#1A4B8C]" />
                </div>
                <h3 id={svc.titleId} className="text-lg font-bold text-[#0D2545] mb-2">{svc.title}</h3>
                <p id={svc.descId} className="text-gray-600 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-[#1A4B8C] font-semibold hover:text-[#E8621A] transition-colors">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#E8621A] text-sm font-semibold uppercase tracking-widest">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D2545] mt-2 mb-4">How We Work With You</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              A structured, transparent process designed to reduce risk and deliver results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="relative bg-[#F4F6FA] rounded-xl p-6 border border-slate-200">
                <span className="text-5xl font-bold text-[#1A4B8C]/10 absolute top-4 right-4 leading-none select-none">{step.num}</span>
                <span className="text-[#E8621A] font-bold text-sm mb-2 block">{step.num}</span>
                <h3 className="text-lg font-bold text-[#0D2545] mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-[#1A4B8C] font-semibold hover:text-[#E8621A] transition-colors">
              See Full Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-[#0D2545]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#E8621A] text-sm font-semibold uppercase tracking-widest">Why Buyers Need Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Problems We Solve</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Sourcing from China without local support is risky. Here's what we protect you from.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white mb-1">{p.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-[#F4F6FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#E8621A] text-sm font-semibold uppercase tracking-widest">Client Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D2545] mt-2 mb-4">Case Studies</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Real outcomes from real buyers who trusted us to manage their China sourcing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-[#E8621A] uppercase tracking-wide">{cs.industry}</span>
                  <h3 id={cs.titleId} className="text-base font-bold text-[#0D2545] mt-1 mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-gray-600 text-sm leading-relaxed mb-3">{cs.desc}</p>
                  <div className="bg-[#1A4B8C]/5 border border-[#1A4B8C]/10 rounded-lg px-3 py-2">
                    <p className="text-[#1A4B8C] text-xs font-semibold">Result: {cs.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-[#1A4B8C] font-semibold hover:text-[#E8621A] transition-colors">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#E8621A] text-sm font-semibold uppercase tracking-widest">Common Questions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D2545] mt-2 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-[#F4F6FA] rounded-xl border border-slate-200 p-6">
                <h3 className="font-bold text-[#0D2545] mb-2 flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-[#1A4B8C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China with Confidence?
          </h2>
          <p className="text-slate-200 text-lg mb-8 max-w-2xl mx-auto">
            Tell us what you need. We'll respond within 24 hours with a tailored sourcing plan and transparent pricing.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#E8621A] hover:bg-[#C9541A] text-white font-bold px-10 py-4 rounded-lg text-lg transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
