import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  ArrowRight, CheckCircle, Star, Globe, Users, Award, ChevronDown
} from 'lucide-react';
import CTABanner from '../components/layout/CTABanner';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified manufacturers that match your product specs, MOQ, and budget.',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-sourcing-img-a1b2c3',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site audits confirm production capacity, certifications, and working conditions before you commit.',
    titleId: 'svc-verify-title',
    descId: 'svc-verify-desc',
    imgId: 'svc-verify-img-d4e5f6',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections catch defects early, protecting your brand and reducing returns.',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-img-g7h8i9',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'We monitor your order from raw materials to finished goods, keeping you updated at every stage.',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-prod-img-j1k2l3',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle export documentation, and track your shipment.',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-ship-img-m4n5o6',
  },
  {
    icon: Globe,
    title: 'Trade Compliance',
    desc: 'Guidance on import regulations, labeling requirements, and customs documentation for your market.',
    titleId: 'svc-trade-title',
    descId: 'svc-trade-desc',
    imgId: 'svc-trade-img-p7q8r9',
  },
];

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, specs, target price, and quantity.' },
  { num: '02', title: 'Supplier Research', desc: 'We search our vetted network and identify 3–5 qualified manufacturers.' },
  { num: '03', title: 'Factory Audit', desc: 'We visit shortlisted factories to verify capacity, quality systems, and compliance.' },
  { num: '04', title: 'Sample & Negotiation', desc: 'We arrange samples and negotiate pricing, lead times, and payment terms.' },
  { num: '05', title: 'Production Monitoring', desc: 'We follow your order through production and conduct quality inspections.' },
  { num: '06', title: 'Shipping & Delivery', desc: 'We coordinate logistics, prepare export documents, and track your shipment.' },
];

const products = [
  'Electronics & Components', 'Furniture & Home Goods', 'Apparel & Textiles',
  'Industrial Equipment', 'Packaging Materials', 'Consumer Products',
  'Automotive Parts', 'Medical Devices', 'Toys & Gifts',
];

const problems = [
  { title: 'Unreliable Suppliers', desc: 'We pre-screen and audit every factory before recommending them to you.' },
  { title: 'Quality Failures', desc: 'Our inspectors check goods before shipment so defects are caught, not shipped.' },
  { title: 'Communication Barriers', desc: 'Our bilingual team bridges language and cultural gaps with your suppliers.' },
  { title: 'Delayed Shipments', desc: 'We monitor production timelines and escalate issues before they cause delays.' },
  { title: 'Hidden Costs', desc: 'We provide transparent cost breakdowns — no surprises at customs.' },
  { title: 'Compliance Risks', desc: 'We verify certifications and ensure products meet your market requirements.' },
];

const trustPoints = [
  { icon: Award, value: '10+', label: 'Years in China Sourcing' },
  { icon: Users, value: '300+', label: 'Global Clients Served' },
  { icon: Factory, value: '1,200+', label: 'Factory Audits Completed' },
  { icon: CheckCircle, value: '98%', label: 'Client Satisfaction Rate' },
];

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'We offer flexible fee structures depending on the scope of work — from a flat project fee to a percentage of order value. We provide a clear quote before any work begins.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with buyers of all sizes, from startups placing their first order to established importers scaling their supply chain.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'Typically 5–10 business days for initial supplier shortlisting. Factory audits and sample procurement add additional time depending on complexity.',
  },
  {
    q: 'Can you handle products not listed on your website?',
    a: 'Absolutely. Our network covers most manufacturing categories in China. Contact us with your product details and we will assess feasibility.',
  },
  {
    q: 'Do you offer quality inspection only, without full sourcing?',
    a: 'Yes. You can engage us for standalone services — inspection, factory audit, or shipping coordination — without a full sourcing engagement.',
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
      <section className="relative bg-primary overflow-hidden min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-ssourcing-x1y2z3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-blue-200 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Globe className="w-4 h-4" />
              Trusted by buyers in 40+ countries
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-accent-gold">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-blue-100 text-xl leading-relaxed mb-10 max-w-2xl">
              We help overseas businesses find reliable Chinese manufacturers, verify factories, inspect quality, and coordinate shipping — so you can import with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent-gold text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {trustPoints.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <Icon className="w-7 h-7 text-primary" />
                <span className="text-3xl font-bold text-text-dark">{value}</span>
                <span className="text-sm text-gray-500">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mt-2 mb-4">End-to-End Sourcing Services</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              From finding the right factory to delivering goods to your door, we manage every step of the China sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, titleId, descId }) => (
              <div key={title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 id={titleId} className="text-lg font-semibold text-text-dark mb-2">{title}</h3>
                <p id={descId} className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mt-2 mb-4">How We Work</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              A structured, transparent process designed to reduce risk and deliver results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="relative bg-bg-light rounded-xl p-6 border border-gray-100">
                <span className="text-5xl font-black text-gray-100 absolute top-4 right-6 select-none">{step.num}</span>
                <div className="relative">
                  <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Step {step.num}</span>
                  <h3 className="text-lg font-semibold text-text-dark mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
              Learn More About Our Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 md:py-28 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Product Categories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mt-2 mb-4">Products We Source</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              We source across a wide range of manufacturing categories from China's key industrial regions.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {products.map((p) => (
              <span key={p} className="bg-white border border-gray-200 text-text-medium px-5 py-2.5 rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-colors cursor-default">
                {p}
              </span>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
              See Full Product List <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Buyers Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mt-2 mb-4">Problems We Solve</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Sourcing from China comes with real risks. Here is how we help you avoid the most common ones.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map(({ title, desc }) => (
              <div key={title} className="flex gap-4 p-6 bg-bg-light rounded-xl border border-gray-100">
                <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-text-dark mb-1">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 md:py-28 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Client Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mt-2 mb-4">Case Studies</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Real sourcing projects, real outcomes. See how we have helped buyers across industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: 'cs-furniture',
                category: 'Furniture',
                title: 'UK Retailer Cuts Sourcing Costs by 22%',
                desc: 'We identified three verified furniture manufacturers in Guangdong, negotiated pricing, and managed QC for a 500-unit order.',
                titleId: 'cs-furniture-title',
                descId: 'cs-furniture-desc',
                imgId: 'cs-furniture-img-a1b2',
              },
              {
                id: 'cs-electronics',
                category: 'Electronics',
                title: 'US Startup Launches First Hardware Product',
                desc: 'From prototype to production-ready units in 14 weeks. We sourced the factory, managed samples, and coordinated air freight.',
                titleId: 'cs-electronics-title',
                descId: 'cs-electronics-desc',
                imgId: 'cs-electronics-img-c3d4',
              },
              {
                id: 'cs-apparel',
                category: 'Apparel',
                title: 'Australian Brand Passes EU Compliance Audit',
                desc: 'We verified factory certifications and arranged third-party lab testing to meet EU textile regulations.',
                titleId: 'cs-apparel-title',
                descId: 'cs-apparel-desc',
                imgId: 'cs-apparel-img-e5f6',
              },
            ].map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-100 overflow-hidden">
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-primary bg-blue-50 px-3 py-1 rounded-full">{cs.category}</span>
                  <h3 id={cs.titleId} className="text-lg font-semibold text-text-dark mt-3 mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-gray-500 text-sm leading-relaxed">{cs.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mt-2 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group bg-bg-light rounded-xl border border-gray-100 p-6 cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-text-dark list-none">
                  {q}
                  <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <p className="mt-4 text-gray-500 text-sm leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
