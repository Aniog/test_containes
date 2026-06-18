import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  CheckCircle, ArrowRight, Star, Users, Globe, Award,
  ChevronDown, Package, Zap, TrendingUp
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified manufacturers that match your product specifications, MOQ, and budget.',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-sourcing-img-a1b2c3',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site factory audits covering production capacity, certifications, workforce, and compliance standards.',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
    imgId: 'svc-factory-img-d4e5f6',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections by trained QC staff to catch defects before goods leave the factory.',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-img-g7h8i9',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'Regular production updates, milestone tracking, and direct communication with the factory on your behalf.',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-prod-img-j1k2l3',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle export documentation, and ensure on-time delivery.',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-ship-img-m4n5o6',
  },
  {
    icon: Package,
    title: 'Consolidation & Labeling',
    desc: 'Consolidate orders from multiple suppliers, arrange custom labeling, and prepare goods for your market.',
    titleId: 'svc-consol-title',
    descId: 'svc-consol-desc',
    imgId: 'svc-consol-img-p7q8r9',
  },
];

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, quantity, target price, and destination.' },
  { num: '02', title: 'Supplier Matching', desc: 'We identify 3–5 qualified suppliers and send you a comparison report within 5 business days.' },
  { num: '03', title: 'Factory Audit', desc: 'We visit shortlisted factories, verify credentials, and provide a detailed audit report.' },
  { num: '04', title: 'Order & Production', desc: 'We place the order, follow production progress, and keep you updated at every stage.' },
  { num: '05', title: 'Quality Inspection', desc: 'Our QC team inspects goods before shipment and sends you a full inspection report with photos.' },
  { num: '06', title: 'Shipping & Delivery', desc: 'We coordinate logistics, handle documentation, and track your shipment to destination.' },
];

const products = [
  'Electronics & Components', 'Furniture & Home Décor', 'Apparel & Textiles',
  'Industrial Equipment', 'Toys & Baby Products', 'Packaging Materials',
  'Auto Parts', 'Health & Beauty', 'Sports & Outdoor', 'Building Materials',
];

const problems = [
  { title: 'Unreliable Suppliers', desc: 'We pre-screen and audit every supplier before you commit to an order.' },
  { title: 'Quality Failures', desc: 'Our QC inspections catch defects before goods are shipped, not after.' },
  { title: 'Communication Barriers', desc: 'We speak Chinese and manage all factory communication on your behalf.' },
  { title: 'Delayed Shipments', desc: 'We monitor production timelines and escalate issues before they cause delays.' },
  { title: 'Hidden Costs', desc: 'Transparent pricing with no hidden fees. You know exactly what you pay for.' },
  { title: 'Compliance Risks', desc: 'We verify certifications and ensure products meet your market requirements.' },
];

const trustPoints = [
  { icon: Globe, value: '40+', label: 'Countries Served' },
  { icon: Factory, value: '500+', label: 'Factories Audited' },
  { icon: Package, value: '1,200+', label: 'Orders Managed' },
  { icon: Star, value: '4.9/5', label: 'Client Satisfaction' },
];

const caseStudies = [
  {
    id: 'cs-furniture',
    industry: 'Furniture',
    title: 'UK Retailer Reduces Sourcing Costs by 22%',
    summary: 'A UK-based furniture importer needed to diversify away from a single supplier. We identified 4 qualified factories, conducted audits, and managed the transition over 3 months.',
    result: '22% cost reduction, 2 new verified suppliers',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-s1t2u3',
  },
  {
    id: 'cs-electronics',
    industry: 'Electronics',
    title: 'US Brand Passes Amazon Compliance Audit',
    summary: 'An Amazon FBA seller needed CE and FCC-certified electronics. We sourced compliant factories, managed testing, and coordinated FBA-ready shipments.',
    result: 'Zero compliance rejections, 3 successful product launches',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-electronics-img-v4w5x6',
  },
  {
    id: 'cs-apparel',
    industry: 'Apparel',
    title: 'Australian Brand Launches Private Label Line',
    summary: 'A startup needed a reliable apparel factory for a private label launch. We managed sampling, bulk production, and quality inspection across 3 product categories.',
    result: 'On-time delivery, 98% pass rate on QC inspection',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    imgId: 'cs-apparel-img-y7z8a9',
  },
];

const faqs = [
  { q: 'How much does your sourcing service cost?', a: 'We offer a free initial consultation and sourcing quote. Our fees depend on the scope of work — sourcing, inspection, and shipping coordination are priced separately. Contact us for a tailored quote.' },
  { q: 'How long does it take to find a supplier?', a: 'For standard products, we typically present a shortlist of 3–5 verified suppliers within 5–7 business days. Complex or niche products may take longer.' },
  { q: 'Do you work with small orders or only large volumes?', a: 'We work with buyers of all sizes. Whether you are placing a trial order or managing large-volume production, we adapt our service to your needs.' },
  { q: 'Can you handle shipping to my country?', a: 'Yes. We coordinate with freight forwarders for sea, air, and express shipping to over 40 countries. We also handle export documentation and customs paperwork.' },
  { q: 'What industries do you cover?', a: 'We source across a wide range of categories including electronics, furniture, apparel, industrial goods, toys, packaging, and more. See our Products page for the full list.' },
  { q: 'How do I know the factory is legitimate?', a: 'We conduct on-site factory audits and verify business licenses, certifications, production capacity, and workforce. You receive a detailed audit report before committing to any order.' },
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
      {/* Hero */}
      <section className="relative bg-[#1B2B4B] overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-main-b1c2d3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative section-container py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-red-400 rounded-full"></span>
              <span className="text-red-300 text-sm font-medium">China-Based Sourcing Agent</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-red-400">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              We help importers find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — so you can focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-7 py-3.5 rounded-lg text-base transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-7 py-3.5 rounded-lg text-base transition-colors"
              >
                How It Works
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6">
              {trustPoints.map((tp) => (
                <div key={tp.label} className="flex items-center gap-2">
                  <tp.icon className="w-5 h-5 text-red-400" />
                  <span className="text-white font-bold">{tp.value}</span>
                  <span className="text-gray-400 text-sm">{tp.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="text-red-600 text-sm font-semibold uppercase tracking-widest mb-2">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B4B] mb-4">End-to-End Sourcing Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From finding the right supplier to delivering goods to your door, we manage every step of the China sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div key={svc.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md hover:border-blue-200 transition-all group">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                  <svc.icon className="w-6 h-6 text-[#2E6DA4]" />
                </div>
                <h3 id={svc.titleId} className="text-lg font-semibold text-[#1B2B4B] mb-2">{svc.title}</h3>
                <p id={svc.descId} className="text-gray-600 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-[#2E6DA4] font-semibold hover:underline">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="text-red-600 text-sm font-semibold uppercase tracking-widest mb-2">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B4B] mb-4">How We Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A structured, transparent process designed to reduce risk and deliver results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-4xl font-bold text-gray-100 mb-3">{step.num}</div>
                <h3 className="text-lg font-semibold text-[#1B2B4B] mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 bg-[#1B2B4B] hover:bg-[#162240] text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              See Full Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="text-red-600 text-sm font-semibold uppercase tracking-widest mb-2">Product Categories</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B4B] mb-4">Products We Source</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We source across a wide range of industries from China's manufacturing hubs.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {products.map((p) => (
              <span key={p} className="bg-gray-100 text-gray-700 font-medium px-4 py-2 rounded-full text-sm border border-gray-200 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-800 transition-colors cursor-default">
                {p}
              </span>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center gap-2 text-[#2E6DA4] font-semibold hover:underline">
              Browse All Categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-[#1B2B4B]">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-2">Why Work With Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Problems We Solve</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Importing from China comes with real risks. Here's how we address them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {problems.map((p) => (
              <div key={p.title} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">{p.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="text-red-600 text-sm font-semibold uppercase tracking-widest mb-2">Client Results</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B4B] mb-4">Case Studies</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real projects, real outcomes. See how we've helped buyers across different industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden bg-gray-100">
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
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">{cs.industry}</span>
                  <h3 id={cs.titleId} className="text-lg font-semibold text-[#1B2B4B] mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-gray-600 text-sm leading-relaxed mb-4">{cs.summary}</p>
                  <div className="flex items-center gap-2 text-green-700 text-sm font-medium">
                    <TrendingUp className="w-4 h-4" />
                    {cs.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-[#2E6DA4] font-semibold hover:underline">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="text-red-600 text-sm font-semibold uppercase tracking-widest mb-2">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B4B] mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-20 bg-red-600">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China?
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
            Tell us what you need and we'll send you a free sourcing plan within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-red-600 font-bold px-8 py-4 rounded-lg text-base transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-5">
      <button
        className="w-full flex items-center justify-between gap-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-[#1B2B4B]">{q}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <p className="mt-3 text-gray-600 text-sm leading-relaxed">{a}</p>
      )}
    </div>
  );
}
