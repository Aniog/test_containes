import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory, Star,
  ArrowRight, CheckCircle, Globe, Users, Award, TrendingUp,
  ChevronDown, MessageSquare, Package, Zap
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified manufacturers that match your product specifications, MOQ, and budget requirements.',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-sourcing-img-a1b2c3',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site audits to confirm factory capabilities, certifications, production capacity, and compliance standards.',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
    imgId: 'svc-factory-img-d4e5f6',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment, during-production, and final inspections to ensure your goods meet agreed specifications.',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-img-g7h8i9',
  },
  {
    icon: ShieldCheck,
    title: 'Production Follow-up',
    desc: 'Regular updates and on-site monitoring throughout the production cycle to prevent delays and defects.',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-prod-img-j1k2l3',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle export documentation, and track shipments to your destination.',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-ship-img-m4n5o6',
  },
  {
    icon: Package,
    title: 'Private Label & OEM',
    desc: 'Support for custom branding, packaging design, and OEM production with factories experienced in export.',
    titleId: 'svc-oem-title',
    descId: 'svc-oem-desc',
    imgId: 'svc-oem-img-p7q8r9',
  },
];

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, quantity, target price, and destination.' },
  { num: '02', title: 'Supplier Research', desc: 'We search our network and identify 3–5 qualified manufacturers for your review.' },
  { num: '03', title: 'Factory Audit', desc: 'We visit shortlisted factories to verify capabilities, certifications, and reliability.' },
  { num: '04', title: 'Sample & Approval', desc: 'Samples are arranged, reviewed, and approved before production begins.' },
  { num: '05', title: 'Production & QC', desc: 'We monitor production progress and conduct quality inspections at key stages.' },
  { num: '06', title: 'Shipping & Delivery', desc: 'We coordinate logistics, prepare export documents, and track your shipment.' },
];

const problems = [
  { title: 'Unreliable Suppliers', desc: 'We pre-screen and audit every factory before recommending them to you.' },
  { title: 'Quality Failures', desc: 'Our QC inspectors check goods before shipment — not after they arrive.' },
  { title: 'Communication Barriers', desc: 'We act as your local representative, fluent in both Chinese and English.' },
  { title: 'Shipping Delays', desc: 'We coordinate with freight partners and monitor every shipment milestone.' },
  { title: 'Hidden Costs', desc: 'Transparent pricing with no hidden fees. You know what you pay before you commit.' },
  { title: 'Scam Risk', desc: 'We verify business licenses, export records, and factory ownership before engagement.' },
];

const trustStats = [
  { value: '500+', label: 'Buyers Served', icon: Users },
  { value: '12+', label: 'Years in China Sourcing', icon: Award },
  { value: '98%', label: 'Client Satisfaction Rate', icon: Star },
  { value: '30+', label: 'Product Categories', icon: Package },
];

const caseStudies = [
  {
    id: 'cs-furniture',
    industry: 'Furniture',
    country: 'USA',
    result: 'Reduced unit cost by 22% while maintaining EN 71 compliance.',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-s1t2u3',
  },
  {
    id: 'cs-electronics',
    industry: 'Consumer Electronics',
    country: 'Germany',
    result: 'Sourced CE-certified supplier within 3 weeks, 0 defects on first shipment.',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-electronics-img-v4w5x6',
  },
  {
    id: 'cs-apparel',
    industry: 'Apparel & Textiles',
    country: 'Australia',
    result: 'Managed 4 production runs with consistent quality and on-time delivery.',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    imgId: 'cs-apparel-img-y7z8a9',
  },
];

const faqs = [
  { q: 'How much does your sourcing service cost?', a: 'We offer a free initial consultation and sourcing quote. Our fees depend on the scope of work — sourcing only, QC, or full-service. We provide a clear fee structure before any engagement.' },
  { q: 'How long does it take to find a supplier?', a: 'For standard products, we typically present qualified supplier options within 5–10 business days. Complex or highly customized products may take 2–3 weeks.' },
  { q: 'Do you work with small businesses and startups?', a: 'Yes. We work with buyers of all sizes, from startups placing their first order to established importers managing multiple SKUs.' },
  { q: 'Can you handle shipping to any country?', a: 'We coordinate with freight forwarders for sea, air, and express shipping to most destinations worldwide, including the US, EU, UK, Australia, and Southeast Asia.' },
  { q: 'What if the goods fail quality inspection?', a: 'We work with the factory to resolve issues before shipment. If goods do not meet agreed standards, we do not approve the shipment until corrections are made.' },
];

const HomeFaqItem = ({ q, a }) => {
  const [open, setOpen] = useRef ? [false, () => {}] : [false, () => {}];
  return null;
};

const FaqItem = ({ q, a }) => {
  const [open, setOpen] = require ? [false, () => {}] : [false, () => {}];
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 bg-white hover:bg-gray-50 transition-colors"
        onClick={() => {}}
      >
        <span className="font-semibold text-darktext text-sm md:text-base">{q}</span>
        <ChevronDown className="w-5 h-5 text-muted shrink-0" />
      </button>
      <div className="px-6 py-4 bg-white border-t border-border">
        <p className="text-muted text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
};

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-main-001"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <Globe className="w-4 h-4 text-gold" />
              <span className="text-sm text-blue-100">Trusted by 500+ global buyers</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-gold">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
              We help importers worldwide find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — so you can source with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-accent hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors text-center"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link
                to="/how-it-works"
                className="border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors text-center flex items-center justify-center gap-2"
              >
                How It Works <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6">
              {['No upfront fees', 'On-site factory audits', 'Pre-shipment QC', 'English-speaking team'].map(t => (
                <div key={t} className="flex items-center gap-2 text-sm text-blue-100">
                  <CheckCircle className="w-4 h-4 text-success" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {trustStats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center">
                <div className="flex justify-center mb-2">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-3xl font-bold text-primary">{value}</div>
                <div className="text-sm text-muted mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-lightbg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">End-to-End Sourcing Services</h2>
            <p className="text-muted max-w-2xl mx-auto">From finding the right factory to delivering goods to your door, we manage every step of the China sourcing process.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, titleId, descId }) => (
              <div key={title} className="bg-white rounded-xl border border-border p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 id={titleId} className="font-semibold text-darktext text-lg mb-2">{title}</h3>
                <p id={descId} className="text-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">How We Source for You</h2>
            <p className="text-muted max-w-2xl mx-auto">A structured, transparent process designed to reduce risk and deliver results at every stage.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="relative bg-lightbg rounded-xl p-6 border border-border">
                <div className="text-5xl font-bold text-primary/10 absolute top-4 right-4">{num}</div>
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-sm">{num}</span>
                </div>
                <h3 className="font-semibold text-darktext text-base mb-2">{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 bg-primary hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              See Full Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Why Use a Sourcing Agent</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Problems We Solve for Importers</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">Sourcing from China without local support carries real risks. We eliminate them.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {problems.map(({ title, desc }) => (
              <div key={title} className="bg-white/10 border border-white/20 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">{title}</h3>
                    <p className="text-blue-200 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-lightbg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">Client Results</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Case Studies</h2>
            <p className="text-muted max-w-2xl mx-auto">Real outcomes from real buyers who trusted SSourcing China with their supply chain.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map(({ id, industry, country, result, titleId, descId, imgId }) => (
              <div key={id} className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-100 relative overflow-hidden">
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={industry}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full">{industry}</span>
                    <span className="bg-gray-100 text-muted text-xs px-2.5 py-1 rounded-full">{country}</span>
                  </div>
                  <h3 id={titleId} className="font-semibold text-darktext mb-2">{industry} — {country}</h3>
                  <p id={descId} className="text-muted text-sm leading-relaxed">{result}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="border border-border rounded-lg overflow-hidden group">
                <summary className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 bg-white hover:bg-gray-50 transition-colors cursor-pointer list-none">
                  <span className="font-semibold text-darktext text-sm md:text-base">{q}</span>
                  <ChevronDown className="w-5 h-5 text-muted shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 py-4 bg-gray-50 border-t border-border">
                  <p className="text-muted text-sm leading-relaxed">{a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-20 bg-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Source from China?</h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Tell us what you need and we'll get back to you within 24 hours with a free sourcing assessment.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-accent hover:bg-gray-100 font-bold px-10 py-4 rounded-lg text-base transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
