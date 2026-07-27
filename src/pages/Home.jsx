import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  Star, CheckCircle, ArrowRight, Globe, Users, Award, TrendingUp,
  ChevronDown, Package, Zap, MessageSquare
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified manufacturers that match your product specs, quality standards, and budget.',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-sourcing-img-a1b2c3',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site audits confirm factory capabilities, certifications, production capacity, and compliance.',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
    imgId: 'svc-factory-img-d4e5f6',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections ensure your goods meet specifications before they leave China.',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-img-g7h8i9',
  },
  {
    icon: ShieldCheck,
    title: 'Production Follow-up',
    desc: 'We monitor production milestones, resolve issues early, and keep you informed at every stage.',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-prod-img-j1k2l3',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate freight, customs documentation, and delivery to your warehouse or port.',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-ship-img-m4n5o6',
  },
  {
    icon: Package,
    title: 'Private Label & OEM',
    desc: 'We help you develop custom-branded products with reliable OEM factories across China.',
    titleId: 'svc-oem-title',
    descId: 'svc-oem-desc',
    imgId: 'svc-oem-img-p7q8r9',
  },
];

const problems = [
  { problem: 'Struggling to find trustworthy suppliers?', solution: 'We vet and verify every factory before you commit.' },
  { problem: 'Worried about product quality?', solution: 'Our inspectors check goods before shipment — not after.' },
  { problem: 'Language and communication barriers?', solution: 'We handle all supplier communication in Chinese.' },
  { problem: 'No visibility into production?', solution: 'Regular updates and photos keep you in control.' },
  { problem: 'Confused by shipping and customs?', solution: 'We coordinate logistics from factory to your door.' },
  { problem: 'Burned by unreliable agents before?', solution: 'We operate transparently with clear fees and reports.' },
];

const trustPoints = [
  { icon: Globe, value: '40+', label: 'Countries Served' },
  { icon: Factory, value: '500+', label: 'Verified Factories' },
  { icon: Award, value: '98%', label: 'Client Satisfaction' },
  { icon: TrendingUp, value: '$50M+', label: 'Goods Sourced' },
];

const caseStudies = [
  {
    id: 'cs-furniture',
    category: 'Furniture',
    title: 'US Retailer Saves 28% on Furniture Sourcing',
    result: 'Identified 3 verified factories, reduced unit cost by 28%, zero defects on first shipment.',
    country: 'United States',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-s1t2u3',
  },
  {
    id: 'cs-electronics',
    category: 'Electronics',
    title: 'UK Brand Launches Private Label Electronics',
    result: 'Full OEM development in 90 days, CE-certified, delivered to Amazon FBA on schedule.',
    country: 'United Kingdom',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-electronics-img-v4w5x6',
  },
  {
    id: 'cs-apparel',
    category: 'Apparel',
    title: 'Australian Brand Scales Clothing Production',
    result: 'Scaled from 500 to 5,000 units per month with consistent quality across 6 factories.',
    country: 'Australia',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    imgId: 'cs-apparel-img-y7z8a9',
  },
];

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'We offer flexible pricing: a flat project fee for one-time sourcing, or a percentage-based model for ongoing orders. Contact us for a tailored quote based on your needs.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'Typically 5–10 business days to shortlist verified suppliers. Factory audits and sampling add 2–4 weeks depending on complexity.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with buyers at all stages — from first-time importers to established brands scaling production.',
  },
  {
    q: 'Which product categories do you cover?',
    a: 'We source across most categories: electronics, furniture, apparel, toys, machinery, health products, packaging, and more.',
  },
  {
    q: 'Can you handle shipping and customs?',
    a: 'Yes. We coordinate with freight forwarders, prepare export documentation, and ensure smooth customs clearance.',
  },
  {
    q: 'How do I get started?',
    a: 'Fill out our free sourcing inquiry form. We\'ll review your requirements and respond within 24 hours with a plan.',
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
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-slate-900"
          data-strk-bg-id="hero-bg-main-b1c2d3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center md:text-left">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-red mb-4 bg-red-900/30 px-3 py-1 rounded-full">
              China-Based Sourcing Agent
            </span>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-brand-gold">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
              We find reliable suppliers, verify factories, inspect quality, and coordinate shipping — so you can import from China with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/contact"
                className="bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors text-center"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link
                to="/how-it-works"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold px-8 py-4 rounded-lg text-lg transition-colors text-center"
              >
                How It Works
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-10 justify-center md:justify-start">
              {trustPoints.map((tp) => (
                <div key={tp.label} className="text-center">
                  <div className="text-2xl font-bold text-white">{tp.value}</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wide">{tp.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <a href="#services" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </a>
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red mb-3 block">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">End-to-End Sourcing Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              From finding the right factory to delivering goods to your door — we manage every step of the China sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.title} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md hover:border-brand-blue/30 transition-all group">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-blue transition-colors">
                    <Icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                  </div>
                  <h3 id={svc.titleId} className="text-lg font-semibold text-slate-900 mb-2">{svc.title}</h3>
                  <p id={svc.descId} className="text-slate-600 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red mb-3 block">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How We Source for You</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              A structured, transparent process that keeps you informed and in control from day one.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Submit Your Requirements', desc: 'Tell us what you need — product specs, quantity, target price, and timeline.' },
              { step: '02', title: 'Supplier Research & Vetting', desc: 'We identify and audit factories, then present you with a shortlist of verified options.' },
              { step: '03', title: 'Sampling & Negotiation', desc: 'We arrange samples, negotiate pricing, and confirm terms on your behalf.' },
              { step: '04', title: 'Production & Delivery', desc: 'We monitor production, inspect quality, and coordinate shipping to your destination.' },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-white rounded-xl border border-slate-200 p-6 h-full">
                  <div className="text-4xl font-bold text-slate-100 mb-3">{item.step}</div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all">
              See Full Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 md:py-28 bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3 block">Why Work With Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Problems We Solve for Global Buyers</h2>
            <p className="text-blue-200 max-w-2xl mx-auto text-lg">
              Importing from China comes with real challenges. Here's how we address them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {problems.map((item) => (
              <div key={item.problem} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-5 h-5 rounded-full bg-brand-red flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">?</span>
                  </div>
                  <p className="text-white font-semibold text-sm">{item.problem}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                  <p className="text-blue-100 text-sm">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red mb-3 block">Product Categories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Products We Source from China</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              We have established supplier networks across major manufacturing hubs in China.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: 'Electronics', icon: Zap, titleId: 'prod-electronics-title' },
              { name: 'Furniture', icon: Package, titleId: 'prod-furniture-title' },
              { name: 'Clothing & Textiles', icon: Users, titleId: 'prod-clothing-title' },
              { name: 'Machinery', icon: Factory, titleId: 'prod-machinery-title' },
              { name: 'Toys & Baby', icon: Star, titleId: 'prod-toys-title' },
              { name: 'Health & Beauty', icon: ShieldCheck, titleId: 'prod-health-title' },
              { name: 'Sports & Outdoor', icon: TrendingUp, titleId: 'prod-sports-title' },
              { name: 'Packaging', icon: Package, titleId: 'prod-packaging-title' },
              { name: 'Auto Parts', icon: Truck, titleId: 'prod-auto-title' },
              { name: 'Home Decor', icon: Globe, titleId: 'prod-homedecor-title' },
            ].map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.name}
                  to="/products"
                  className="flex flex-col items-center gap-3 p-5 bg-slate-50 rounded-xl border border-slate-200 hover:border-brand-blue hover:bg-blue-50 transition-all group text-center"
                >
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:bg-brand-blue transition-colors">
                    <Icon className="w-5 h-5 text-brand-blue group-hover:text-white transition-colors" />
                  </div>
                  <span id={cat.titleId} className="text-sm font-medium text-slate-700 group-hover:text-brand-blue transition-colors">{cat.name}</span>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all">
              Browse All Categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red mb-3 block">Client Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Case Studies</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Real results from real buyers. See how we've helped businesses source smarter from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group">
                <div className="relative h-48 overflow-hidden bg-slate-200">
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
                    <span className="bg-brand-blue text-white text-xs font-semibold px-2.5 py-1 rounded-full">{cs.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 id={cs.titleId} className="font-semibold text-slate-900 mb-2 text-base">{cs.title}</h3>
                  <p id={cs.descId} className="text-slate-600 text-sm leading-relaxed mb-4">{cs.result}</p>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Globe className="w-3.5 h-3.5" />
                    <span>{cs.country}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPoints.map((tp) => {
              const Icon = tp.icon;
              return (
                <div key={tp.label} className="text-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">{tp.value}</div>
                  <div className="text-sm text-slate-500">{tp.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red mb-3 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-slate-200 group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-semibold text-slate-900 pr-4">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageSquare className="w-12 h-12 text-brand-gold mx-auto mb-5" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China?
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            Tell us what you need. We'll respond within 24 hours with a sourcing plan and transparent pricing.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
