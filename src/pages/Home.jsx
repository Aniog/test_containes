import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  CheckCircle, ArrowRight, Star, Users, Package, Globe,
  ChevronRight, MessageSquare, BarChart3, Clock
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified Chinese manufacturers that match your product specs, MOQ, and budget.',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-sourcing-img-a1b2c3',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site audits to confirm factory capabilities, certifications, production capacity, and compliance.',
    titleId: 'svc-verify-title',
    descId: 'svc-verify-desc',
    imgId: 'svc-verify-img-d4e5f6',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections following AQL standards to catch defects before goods leave China.',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-img-g7h8i9',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'Regular updates and on-site visits during production to keep your order on schedule and on spec.',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-prod-img-j1k2l3',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle export documentation, and track shipments to your door.',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-ship-img-m4n5o6',
  },
  {
    icon: Globe,
    title: 'Trade Compliance',
    desc: 'Guidance on import regulations, labeling requirements, and customs documentation for your target market.',
    titleId: 'svc-trade-title',
    descId: 'svc-trade-desc',
    imgId: 'svc-trade-img-p7q8r9',
  },
];

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product specs, target price, quantity, and destination.' },
  { num: '02', title: 'Supplier Research', desc: 'We search our network and identify 3–5 qualified manufacturers for your review.' },
  { num: '03', title: 'Factory Audit', desc: 'We visit shortlisted factories to verify capabilities, certifications, and reliability.' },
  { num: '04', title: 'Sample & Negotiation', desc: 'We arrange samples and negotiate pricing, lead times, and payment terms on your behalf.' },
  { num: '05', title: 'Production Oversight', desc: 'We monitor production progress and conduct quality inspections at key milestones.' },
  { num: '06', title: 'Shipping & Delivery', desc: 'We coordinate export, freight, and customs documentation until goods reach you.' },
];

const problems = [
  { title: 'Unreliable Suppliers', desc: 'We pre-screen and audit every factory before recommending them to you.' },
  { title: 'Quality Surprises', desc: 'Our inspectors check goods before shipment — not after they arrive at your warehouse.' },
  { title: 'Communication Barriers', desc: 'Our bilingual team bridges language and cultural gaps with Chinese manufacturers.' },
  { title: 'Delayed Shipments', desc: 'We track production milestones and flag delays early so you can plan ahead.' },
  { title: 'Hidden Costs', desc: 'We provide transparent cost breakdowns including factory price, freight, and duties.' },
  { title: 'Compliance Risks', desc: 'We help ensure products meet your market\'s safety and labeling requirements.' },
];

const trustPoints = [
  { icon: Users, value: '200+', label: 'Global Clients Served' },
  { icon: Factory, value: '1,500+', label: 'Factory Audits Completed' },
  { icon: Package, value: '5,000+', label: 'Shipments Coordinated' },
  { icon: Star, value: '4.8/5', label: 'Average Client Rating' },
];

const caseStudies = [
  {
    id: 'cs-furniture',
    category: 'Furniture',
    title: 'EU Retailer Reduces Sourcing Cost by 22%',
    desc: 'A German furniture importer needed to diversify away from a single supplier. We identified 4 qualified factories, conducted audits, and managed the transition over 3 months.',
    result: '22% cost reduction, 2 new approved suppliers',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-s1t2u3',
  },
  {
    id: 'cs-electronics',
    category: 'Electronics',
    title: 'US Brand Passes Amazon Quality Standards',
    desc: 'An American consumer electronics brand needed consistent quality for their Amazon listings. We implemented a pre-shipment inspection protocol that reduced return rates significantly.',
    result: 'Return rate dropped from 8% to 1.2%',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-electronics-img-v4w5x6',
  },
  {
    id: 'cs-apparel',
    category: 'Apparel',
    title: 'Australian Brand Launches Private Label Line',
    desc: 'A Sydney-based fashion startup needed a reliable factory for their first private label collection. We sourced, sampled, and managed production for their 500-piece launch order.',
    result: 'On-time delivery, 98% quality pass rate',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    imgId: 'cs-apparel-img-y7z8a9',
  },
];

const faqs = [
  { q: 'How much does your sourcing service cost?', a: 'We offer flexible fee structures depending on the scope of work — from a flat project fee for one-time sourcing to a monthly retainer for ongoing support. Contact us for a tailored quote.' },
  { q: 'Do you work with small businesses and startups?', a: 'Yes. We work with buyers of all sizes, from startups placing their first order to established importers managing multiple product lines.' },
  { q: 'How long does the sourcing process take?', a: 'A typical sourcing project takes 2–4 weeks from inquiry to shortlisted suppliers. Factory audits and sampling add another 2–3 weeks depending on location and complexity.' },
  { q: 'Which product categories do you cover?', a: 'We source across a wide range of categories including electronics, furniture, apparel, home goods, industrial parts, and more. See our Products page for the full list.' },
  { q: 'Can you handle shipping and customs?', a: 'Yes. We coordinate with licensed freight forwarders and can assist with export documentation, customs clearance, and delivery to your warehouse or Amazon FBA.' },
  { q: 'What if the factory fails the audit?', a: 'We will not recommend a factory that fails our audit. We continue searching until we find a supplier that meets your requirements and our quality standards.' },
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
      <section className="relative bg-gradient-to-br from-[#0f2d5e] to-[#1a4f8a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            data-strk-bg-id="hero-bg-main-001"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <Globe className="w-4 h-4 text-blue-300" />
              <span className="text-sm text-blue-100 font-medium">China-Based Sourcing Agent</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-blue-300">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
              We help importers worldwide find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — so you can focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#2563eb] hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-lg text-base transition-colors no-underline"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-7 py-3.5 rounded-lg text-base transition-colors no-underline"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustPoints.map((tp) => (
              <div key={tp.label} className="flex flex-col items-center gap-1">
                <tp.icon className="w-6 h-6 text-[#2563eb] mb-1" />
                <span className="text-2xl font-bold text-[#1a4f8a]">{tp.value}</span>
                <span className="text-sm text-slate-500">{tp.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">End-to-End Sourcing Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From finding the right factory to getting goods to your door, we manage every step of the China sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div key={svc.title} className="bg-white rounded-xl border border-slate-100 p-6 hover:shadow-md transition-shadow">
                <div className="w-11 h-11 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <svc.icon className="w-6 h-6 text-[#2563eb]" />
                </div>
                <h3 id={svc.titleId} className="text-lg font-semibold text-slate-900 mb-2">{svc.title}</h3>
                <p id={svc.descId} className="text-sm text-slate-600 leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-[#2563eb] font-semibold hover:text-[#1a4f8a] transition-colors no-underline">
              View All Services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-widest mb-3">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How We Work With You</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A structured, transparent process from your first inquiry to final delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="relative bg-slate-50 rounded-xl p-6 border border-slate-100">
                <span className="text-4xl font-black text-[#2563eb]/15 absolute top-4 right-5 select-none">{step.num}</span>
                <span className="inline-block bg-[#2563eb] text-white text-xs font-bold px-2.5 py-1 rounded-md mb-3">{step.num}</span>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1a4f8a] text-white font-semibold px-6 py-3 rounded-lg transition-colors no-underline">
              See Full Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-[#0f2d5e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-blue-300 uppercase tracking-widest mb-3">Why Use a Sourcing Agent</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Problems We Help You Avoid</h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Sourcing from China without local support carries real risks. Here's how we protect your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {problems.map((p) => (
              <div key={p.title} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-300 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">{p.title}</h3>
                    <p className="text-sm text-blue-200 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-widest mb-3">Client Results</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Case Studies</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real outcomes from real clients. Here's how we've helped global buyers source smarter from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video bg-slate-100 overflow-hidden">
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
                <div className="p-5">
                  <span className="inline-block bg-blue-50 text-[#1a4f8a] text-xs font-semibold px-2.5 py-1 rounded-full mb-3">{cs.category}</span>
                  <h3 id={cs.titleId} className="text-base font-semibold text-slate-900 mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-sm text-slate-600 mb-3 leading-relaxed">{cs.desc}</p>
                  <div className="flex items-center gap-2 bg-green-50 rounded-lg px-3 py-2">
                    <BarChart3 className="w-4 h-4 text-green-600 shrink-0" />
                    <span className="text-xs font-semibold text-green-700">{cs.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-[#2563eb] font-semibold hover:text-[#1a4f8a] transition-colors no-underline">
              View All Case Studies <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl border border-slate-100 p-5">
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-[#2563eb] mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 mb-1.5">{faq.q}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#2563eb]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Source from China?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            Tell us what you need and we'll get back to you within 24 hours with a tailored sourcing plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#1a4f8a] font-bold px-8 py-4 rounded-lg text-base transition-colors no-underline"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
