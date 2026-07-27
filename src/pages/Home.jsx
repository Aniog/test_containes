import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  CheckCircle, Star, ArrowRight, Users, Globe, Award, TrendingUp,
  ChevronRight, MessageSquare, Package, Zap
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified manufacturers that match your product specs, MOQ, and budget — saving you weeks of research.',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-sourcing-img-a1b2c3',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site audits confirm that factories are legitimate, capable, and compliant before you commit to any order.',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
    imgId: 'svc-factory-img-d4e5f6',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections catch defects early, so you receive goods that meet your standards.',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-img-g7h8i9',
  },
  {
    icon: ShieldCheck,
    title: 'Production Follow-up',
    desc: 'We monitor your order from raw materials to finished goods, keeping you informed at every production milestone.',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-prod-img-j1k2l3',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We handle freight booking, customs documentation, and logistics coordination to get your goods delivered on time.',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-ship-img-m4n5o6',
  },
  {
    icon: Package,
    title: 'Private Label & OEM',
    desc: 'From product design to branded packaging, we help you develop private label products with trusted OEM factories.',
    titleId: 'svc-oem-title',
    descId: 'svc-oem-desc',
    imgId: 'svc-oem-img-p7q8r9',
  },
];

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, specs, target price, and quantity. No commitment required.' },
  { num: '02', title: 'We Source & Shortlist', desc: 'Our team identifies qualified suppliers, verifies their credentials, and presents you with a curated shortlist.' },
  { num: '03', title: 'Sample & Confirm', desc: 'We arrange samples, coordinate feedback, and help you finalize the supplier and order terms.' },
  { num: '04', title: 'Production & QC', desc: 'We monitor production progress and conduct quality inspections before goods leave the factory.' },
  { num: '05', title: 'Ship & Deliver', desc: 'We coordinate freight, handle documentation, and track your shipment until it reaches your door.' },
];

const problems = [
  { title: 'Unreliable Suppliers', desc: 'We pre-screen and audit every factory before recommending them, so you avoid scams and substandard manufacturers.' },
  { title: 'Quality Failures', desc: 'Our inspection team catches defects before shipment — not after you\'ve paid and received the goods.' },
  { title: 'Communication Barriers', desc: 'We bridge the language and cultural gap, acting as your local representative in China.' },
  { title: 'Shipping Delays', desc: 'We proactively manage timelines, coordinate with freight forwarders, and keep your supply chain on schedule.' },
  { title: 'Hidden Costs', desc: 'We provide transparent pricing with no hidden fees. You know exactly what you\'re paying for.' },
  { title: 'No Local Presence', desc: 'Without boots on the ground, it\'s hard to verify anything. We are your eyes and ears in China.' },
];

const trustPoints = [
  { icon: Users, value: '500+', label: 'Global Buyers Served' },
  { icon: Factory, value: '1,200+', label: 'Factories Audited' },
  { icon: Globe, value: '40+', label: 'Countries Served' },
  { icon: Award, value: '98%', label: 'Client Satisfaction Rate' },
];

const caseStudies = [
  {
    id: 'electronics-buyer',
    category: 'Electronics',
    title: 'UK Electronics Retailer Cuts Sourcing Time by 60%',
    result: 'Found 3 verified PCB manufacturers in 2 weeks, passed QC on first inspection.',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-electronics-img-s1t2u3',
  },
  {
    id: 'furniture-importer',
    category: 'Furniture',
    title: 'US Furniture Importer Reduces Defect Rate to Under 1%',
    result: 'Implemented in-line QC process across 2 factories, saving $40K in returns.',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-v4w5x6',
  },
  {
    id: 'apparel-brand',
    category: 'Apparel',
    title: 'Australian Apparel Brand Launches Private Label Line',
    result: 'Sourced OEM factory, developed samples, and shipped first order in 10 weeks.',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    imgId: 'cs-apparel-img-y7z8a9',
  },
];

const faqs = [
  { q: 'How much does your sourcing service cost?', a: 'We offer a free initial consultation and sourcing quote. Our fees are transparent and depend on the scope of services required — typically a flat project fee or a small percentage of order value.' },
  { q: 'Do you work with small businesses and startups?', a: 'Yes. We work with buyers of all sizes, from individual entrepreneurs placing their first order to established importers managing multiple product lines.' },
  { q: 'How do you verify that a factory is legitimate?', a: 'We conduct on-site factory audits that cover business license verification, production capacity, equipment, workforce, and compliance documentation.' },
  { q: 'What products can you source?', a: 'We source a wide range of products including electronics, furniture, apparel, hardware, toys, packaging, and more. If it\'s made in China, we can likely help.' },
  { q: 'How long does the sourcing process take?', a: 'A typical sourcing project takes 2–4 weeks from inquiry to supplier shortlist. Full order cycles including production and shipping vary by product.' },
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
      <section className="relative bg-navy-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-main-b1c2d3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold-600/20 border border-gold-600/40 text-gold-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Globe className="w-4 h-4" />
              <span>Trusted by buyers in 40+ countries</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-gold-400">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              We help overseas buyers find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — all from one trusted partner on the ground.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold-600 hover:bg-gold-500 text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-navy-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustPoints.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <Icon className="w-6 h-6 text-gold-400 mb-1" />
                <span className="text-2xl font-bold text-white">{value}</span>
                <span className="text-gray-300 text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">End-to-End Sourcing Services</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              From finding the right supplier to delivering goods to your warehouse, we manage every step of the China sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, titleId, descId }) => (
              <div key={title} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-navy-800" />
                </div>
                <h3 id={titleId} className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p id={descId} className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-navy-800 font-semibold hover:text-navy-600 transition-colors">
              View All Services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">How We Work With You</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              A clear, structured process designed to give you full visibility and control over your sourcing project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="relative flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-navy-800 text-white flex items-center justify-center font-bold text-lg mb-4 flex-shrink-0">
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] right-0 h-0.5 bg-navy-100" />
                )}
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-navy-800 hover:bg-navy-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Start Your Sourcing Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 md:py-28 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">Why Work With Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Problems We Solve for Buyers</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Sourcing from China without local support is risky. Here's how we protect your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map(({ title, desc }) => (
              <div key={title} className="bg-navy-800 rounded-xl p-6 border border-navy-700">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">{title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Client Case Studies</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Real outcomes from real buyers who trusted us with their China sourcing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map(({ id, category, title, result, titleId, descId, imgId }) => (
              <div key={id} className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 bg-gray-100">
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-gold-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 id={titleId} className="font-semibold text-gray-900 mb-2 leading-snug">{title}</h3>
                  <p id={descId} className="text-gray-500 text-sm leading-relaxed mb-4">{result}</p>
                  <Link to="/case-studies" className="text-navy-800 font-semibold text-sm hover:text-navy-600 inline-flex items-center gap-1">
                    Read More <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-navy-800 font-semibold hover:text-navy-600 transition-colors">
              View All Case Studies <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-start gap-2">
                  <MessageSquare className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  {q}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed pl-7">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gold-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China with Confidence?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Tell us what you need and we'll get back to you within 24 hours with a free sourcing assessment.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-gold-700 font-bold px-10 py-4 rounded-lg text-base hover:bg-gray-50 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
