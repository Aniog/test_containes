import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  ArrowRight, CheckCircle, Star, Globe, Users, Award,
  ChevronDown, ChevronUp, Package, Zap, Clock, DollarSign
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useState } from 'react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified Chinese manufacturers that match your product specifications, MOQ, and budget requirements.',
    id: 'svc-sourcing',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site factory audits to confirm production capacity, certifications, working conditions, and compliance with your standards.',
    id: 'svc-factory',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment, during-production, and final inspections carried out by our local QC team to catch defects before goods leave China.',
    id: 'svc-qc',
  },
  {
    icon: Zap,
    title: 'Production Follow-up',
    desc: 'Regular updates and on-site visits during manufacturing to keep your order on schedule and resolve issues early.',
    id: 'svc-production',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We handle freight booking, customs documentation, and logistics coordination to ensure smooth delivery to your destination.',
    id: 'svc-shipping',
  },
  {
    icon: DollarSign,
    title: 'Price Negotiation',
    desc: 'Leverage our local relationships and market knowledge to negotiate competitive pricing and favorable payment terms.',
    id: 'svc-price',
  },
];

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product specs, quantity, target price, and timeline.' },
  { num: '02', title: 'Supplier Matching', desc: 'We identify and vet 3–5 qualified suppliers from our verified network.' },
  { num: '03', title: 'Quotation & Samples', desc: 'You receive competitive quotes and can request product samples for evaluation.' },
  { num: '04', title: 'Order & Production', desc: 'We place the order, monitor production, and keep you updated throughout.' },
  { num: '05', title: 'QC Inspection', desc: 'Our team inspects goods before shipment and sends you a detailed report.' },
  { num: '06', title: 'Shipping & Delivery', desc: 'We coordinate freight and customs so your goods arrive on time and in full.' },
];

const products = [
  { label: 'Electronics & Components', icon: '⚡' },
  { label: 'Furniture & Home Goods', icon: '🪑' },
  { label: 'Apparel & Textiles', icon: '👕' },
  { label: 'Industrial Equipment', icon: '⚙️' },
  { label: 'Toys & Baby Products', icon: '🧸' },
  { label: 'Health & Beauty', icon: '💊' },
  { label: 'Sports & Outdoor', icon: '🏋️' },
  { label: 'Packaging & Labels', icon: '📦' },
  { label: 'Auto Parts', icon: '🔧' },
  { label: 'Building Materials', icon: '🏗️' },
  { label: 'Food & Agriculture', icon: '🌾' },
  { label: 'Pet Products', icon: '🐾' },
];

const problems = [
  { title: 'Unreliable Suppliers', desc: 'We pre-screen every factory before recommending them, so you avoid scams and low-quality producers.' },
  { title: 'Quality Failures', desc: 'Our on-site QC inspections catch defects before goods ship, saving you costly returns and disputes.' },
  { title: 'Communication Barriers', desc: 'Our bilingual team bridges the language and cultural gap between you and Chinese factories.' },
  { title: 'Shipping Delays', desc: 'We monitor production timelines and coordinate logistics to keep your supply chain on schedule.' },
  { title: 'Hidden Costs', desc: 'Transparent pricing with no hidden fees. We help you understand total landed cost before you commit.' },
  { title: 'Compliance Risks', desc: 'We verify certifications and ensure products meet your market\'s regulatory requirements.' },
];

const trustStats = [
  { value: '10+', label: 'Years in China Sourcing', icon: Award },
  { value: '500+', label: 'Clients Worldwide', icon: Users },
  { value: '30+', label: 'Countries Served', icon: Globe },
  { value: '98%', label: 'Client Satisfaction Rate', icon: Star },
];

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work. We offer a free initial consultation and sourcing quote. Service fees are typically a percentage of the order value or a fixed project fee, agreed upfront with no hidden charges.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'For standard products, we typically present qualified supplier options within 5–10 business days. Complex or highly customized products may take 2–3 weeks.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with businesses of all sizes, from startups placing their first order to established importers managing multiple product lines.',
  },
  {
    q: 'Can you handle custom or OEM products?',
    a: 'Absolutely. We have extensive experience sourcing custom-designed and OEM products, including managing samples, molds, and packaging development.',
  },
  {
    q: 'What happens if there is a quality problem?',
    a: 'We conduct pre-shipment inspections to minimize this risk. If issues arise, we work directly with the factory on your behalf to resolve defects, arrange replacements, or negotiate compensation.',
  },
  {
    q: 'Do you handle shipping and customs?',
    a: 'Yes. We coordinate with freight forwarders, prepare export documentation, and guide you through import requirements for your destination country.',
  },
];

const caseStudies = [
  {
    id: 'cs-furniture',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-a1b2c3',
    category: 'Furniture',
    title: 'UK Retailer Cuts Sourcing Costs by 22%',
    desc: 'A UK home goods retailer needed a reliable furniture supplier in Foshan. We audited 8 factories, negotiated pricing, and managed QC across 3 production runs.',
    result: '22% cost reduction, zero defect shipments',
  },
  {
    id: 'cs-electronics',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-electronics-img-d4e5f6',
    category: 'Electronics',
    title: 'US Brand Launches Private Label Electronics',
    desc: 'An American e-commerce brand needed a certified electronics manufacturer for a private label product. We sourced, sampled, and managed compliance testing.',
    result: 'Product launched on time, CE & FCC certified',
  },
  {
    id: 'cs-apparel',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    imgId: 'cs-apparel-img-g7h8i9',
    category: 'Apparel',
    title: 'Australian Brand Scales Apparel Production',
    desc: 'An Australian fashion brand needed to scale from 500 to 5,000 units per style. We identified a Guangzhou factory with the right capacity and quality standards.',
    result: 'On-time delivery, consistent quality across 12 SKUs',
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-slate-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-slate-900 text-sm md:text-base pr-4">{q}</span>
        {open ? <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white">
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

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
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-900">
        <div
          className="absolute inset-0 opacity-30"
          data-strk-bg-id="hero-bg-main-x1y2z3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-widest">
              <Globe className="w-3.5 h-3.5" />
              China-Based Sourcing Agent
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-xl">
              We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — so you can import with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-4 rounded-lg text-base transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-7 py-4 rounded-lg text-base transition-colors"
              >
                How It Works
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6">
              {trustStats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <stat.icon className="w-4 h-4 text-blue-400" />
                  <span className="text-white font-bold text-lg">{stat.value}</span>
                  <span className="text-slate-400 text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-slate-100 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-slate-500">
            <span className="font-medium text-slate-700">Trusted by buyers from:</span>
            {['United States', 'United Kingdom', 'Australia', 'Germany', 'Canada', 'France', 'UAE'].map((c) => (
              <span key={c} className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">End-to-End China Sourcing Services</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              From finding the right factory to getting goods to your door, we manage every step of the sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div key={svc.id} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md hover:border-blue-200 transition-all group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <svc.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 id={svc.id} className="text-lg font-semibold text-slate-900 mb-2">{svc.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How We Work With You</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              A structured, transparent process designed to reduce risk and deliver results at every stage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="relative p-6 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-sm transition-all">
                <div className="text-4xl font-black text-blue-100 mb-3 leading-none">{step.num}</div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors">
              See Full Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Product Categories</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Products We Source from China</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              We source across a wide range of industries. If your product is manufactured in China, we can help you find the right supplier.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {products.map((p) => (
              <div key={p.label} className="bg-white rounded-xl border border-slate-200 p-4 flex items-center gap-3 hover:border-blue-300 hover:shadow-sm transition-all">
                <span className="text-2xl">{p.icon}</span>
                <span className="text-sm font-medium text-slate-700">{p.label}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm">
              Browse All Categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Why Use a Sourcing Agent</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">Common Challenges We Solve</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Importing from China without local support exposes you to real risks. Our team is on the ground to protect your interests at every stage.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors">
                Talk to Our Team <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {problems.map((p) => (
                <div key={p.title} className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <h4 className="font-semibold text-slate-900 text-sm">{p.title}</h4>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Client Results</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Case Studies</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Real results from real clients. See how we've helped businesses source smarter from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group">
                <div className="relative overflow-hidden h-48">
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">{cs.category}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 id={cs.titleId} className="font-semibold text-slate-900 text-base mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-slate-600 text-sm leading-relaxed mb-3">{cs.desc}</p>
                  <div className="flex items-center gap-2 text-green-600 text-xs font-semibold">
                    <CheckCircle className="w-3.5 h-3.5" />
                    {cs.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-20 md:py-28 bg-primary-600" style={{ backgroundColor: '#1A3C6E' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-3">Why SSourcing China</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built for International Buyers</h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              We understand what overseas buyers need: transparency, reliability, and a team that acts in your interest.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustStats.map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-xl bg-white/10 border border-white/20">
                <stat.icon className="w-8 h-8 text-blue-300 mx-auto mb-3" />
                <div className="text-4xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-lg">
              Answers to the most common questions from buyers new to China sourcing.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ready to Source from China?
          </h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            Submit your sourcing inquiry today and receive a free consultation from our team within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 border-2 border-slate-300 hover:border-slate-400 text-slate-700 font-semibold px-8 py-4 rounded-lg text-base transition-colors"
            >
              Learn How It Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
