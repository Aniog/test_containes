import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  CheckCircle, ArrowRight, Star, Globe, Users, Award,
  ChevronRight, Package, Zap, MessageSquare
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified manufacturers that match your product specs, MOQ, and budget.',
    id: 'svc-sourcing',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site audits to confirm factory capabilities, certifications, and production capacity before you commit.',
    id: 'svc-factory',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections by trained QC staff to catch defects before goods leave China.',
    id: 'svc-qc',
  },
  {
    icon: Zap,
    title: 'Production Follow-up',
    desc: 'Regular updates and milestone checks during manufacturing so you stay informed without being on-site.',
    id: 'svc-production',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We work with freight forwarders to arrange sea, air, or express shipping and handle export documentation.',
    id: 'svc-shipping',
  },
  {
    icon: MessageSquare,
    title: 'Supplier Communication',
    desc: 'Fluent Chinese-English communication to eliminate misunderstandings and keep negotiations on track.',
    id: 'svc-comms',
  },
];

const problems = [
  { problem: 'Unreliable suppliers', solution: 'We audit factories before you place any order.' },
  { problem: 'Poor product quality', solution: 'QC inspections at every production stage.' },
  { problem: 'Missed deadlines', solution: 'Production follow-up keeps your timeline on track.' },
  { problem: 'Language barriers', solution: 'Native Chinese speakers handle all supplier communication.' },
  { problem: 'Shipping delays', solution: 'We coordinate logistics and documentation end-to-end.' },
  { problem: 'Scam risk', solution: 'Factory verification and contract review protect your investment.' },
];

const trustPoints = [
  { icon: Globe, value: '30+', label: 'Countries Served' },
  { icon: Factory, value: '500+', label: 'Factories Audited' },
  { icon: Package, value: '1,200+', label: 'Shipments Coordinated' },
  { icon: Star, value: '4.9/5', label: 'Client Satisfaction' },
];

const caseStudies = [
  {
    id: 'cs-1',
    titleId: 'cs-title-1',
    descId: 'cs-desc-1',
    imgId: 'cs-img-1-a3f9b2',
    category: 'Electronics',
    title: 'US Retailer Cuts Sourcing Costs by 22%',
    desc: 'A US-based electronics retailer needed a reliable PCB manufacturer. We sourced 3 verified factories, ran quality audits, and coordinated a 40-container shipment.',
    result: '22% cost reduction, zero defects on first shipment',
  },
  {
    id: 'cs-2',
    titleId: 'cs-title-2',
    descId: 'cs-desc-2',
    imgId: 'cs-img-2-b7c4d1',
    category: 'Furniture',
    title: 'European Brand Launches Private Label Line',
    desc: 'A German furniture brand wanted to launch a private label collection. We managed supplier selection, sample approval, and full production oversight.',
    result: 'On-time delivery, 100% spec compliance',
  },
  {
    id: 'cs-3',
    titleId: 'cs-title-3',
    descId: 'cs-desc-3',
    imgId: 'cs-img-3-e2a8f5',
    category: 'Apparel',
    title: 'Australian Brand Scales Production 3x',
    desc: 'An Australian fashion brand needed to scale from 500 to 1,500 units per SKU. We found a compliant factory and managed the entire production ramp-up.',
    result: '3x volume increase, maintained quality standards',
  },
];

const faqs = [
  {
    q: 'How do you verify that a factory is legitimate?',
    a: 'We conduct on-site factory audits that include business license verification, production capacity assessment, worker conditions review, and equipment inspection. We also check third-party certifications where applicable.',
  },
  {
    q: 'What is your minimum order value?',
    a: 'We work with buyers from $5,000 USD per order. For smaller orders, we can explore consolidated shipping options to keep costs manageable.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Typically 2–4 weeks from initial brief to shortlisted suppliers with quotes. Production timelines vary by product and factory capacity.',
  },
  {
    q: 'Do you handle customs and import documentation?',
    a: 'We coordinate with freight forwarders and prepare all export documentation from the China side. We recommend working with a licensed customs broker in your country for import clearance.',
  },
  {
    q: 'Can you source products not listed on your website?',
    a: 'Yes. Our network covers most manufacturing categories. Contact us with your product brief and we will assess feasibility within 48 hours.',
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
      <section className="relative bg-navy overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-main-9f3a2c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Globe className="w-4 h-4" />
              <span>Trusted by buyers in 30+ countries</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-gold-accent">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              We help importers find reliable Chinese manufacturers, verify factories,
              inspect quality, and coordinate shipping — so you can source with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-china-red hover:bg-china-red-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors text-center"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link
                to="/how-it-works"
                className="border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors text-center flex items-center justify-center gap-2"
              >
                How It Works <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        {/* Trust bar */}
        <div className="relative bg-navy-dark border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {trustPoints.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon className="w-8 h-8 text-gold-accent flex-shrink-0" />
                  <div>
                    <div className="text-xl font-bold text-white">{value}</div>
                    <div className="text-xs text-gray-400">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label">What We Do</p>
            <h2 className="section-heading">End-to-End Sourcing Services</h2>
            <p className="section-subtext max-w-2xl mx-auto">
              From finding the right factory to getting goods to your door — we manage every step of the China sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, id }) => (
              <div key={id} className="card group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-navy transition-colors">
                  <Icon className="w-6 h-6 text-navy group-hover:text-white transition-colors" />
                </div>
                <h3 id={id} className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary">
              View All Services <ArrowRight className="w-4 h-4 inline ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-16 md:py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label">Our Process</p>
            <h2 className="section-heading">How We Work With You</h2>
            <p className="section-subtext max-w-2xl mx-auto">
              A structured, transparent process designed to reduce risk and deliver results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Submit Your Brief', desc: 'Tell us what you need — product specs, target price, quantity, and timeline.' },
              { step: '02', title: 'Supplier Research', desc: 'We identify and vet 3–5 qualified manufacturers from our verified network.' },
              { step: '03', title: 'Factory Audit & Samples', desc: 'We visit shortlisted factories, review samples, and negotiate pricing on your behalf.' },
              { step: '04', title: 'Production & Delivery', desc: 'We monitor production, conduct QC inspections, and coordinate shipping to your door.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative">
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm h-full">
                  <div className="text-4xl font-bold text-gray-100 mb-3">{step}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="btn-secondary">
              See Full Process
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-gold-accent uppercase tracking-widest mb-3">Common Challenges</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Problems We Solve for Importers</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Sourcing from China comes with real risks. Here is how we address them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {problems.map(({ problem, solution }) => (
              <div key={problem} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white mb-1">{problem}</p>
                    <p className="text-gray-300 text-sm">{solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label">Client Results</p>
            <h2 className="section-heading">Case Studies</h2>
            <p className="section-subtext max-w-2xl mx-auto">
              Real projects, real outcomes. See how we have helped buyers across industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="card overflow-hidden p-0">
                <div className="relative h-48 overflow-hidden rounded-t-xl bg-gray-100">
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-navy text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {cs.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 id={cs.titleId} className="font-bold text-gray-900 mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-gray-500 text-sm mb-4 leading-relaxed">{cs.desc}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-china-red">
                    <CheckCircle className="w-4 h-4" />
                    <span>{cs.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="btn-primary">
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 md:py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label">Product Categories</p>
            <h2 className="section-heading">Products We Source</h2>
            <p className="section-subtext max-w-2xl mx-auto">
              We have active supplier networks across major manufacturing categories.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: 'Electronics', icon: '⚡', id: 'prod-electronics' },
              { label: 'Furniture', icon: '🪑', id: 'prod-furniture' },
              { label: 'Apparel', icon: '👕', id: 'prod-apparel' },
              { label: 'Hardware', icon: '🔧', id: 'prod-hardware' },
              { label: 'Packaging', icon: '📦', id: 'prod-packaging' },
              { label: 'Home Goods', icon: '🏠', id: 'prod-homegoods' },
            ].map(({ label, icon, id }) => (
              <div key={id} className="bg-white rounded-xl p-5 text-center border border-gray-100 shadow-sm hover:shadow-md hover:border-navy/20 transition-all cursor-pointer">
                <div className="text-3xl mb-2">{icon}</div>
                <p id={id} className="text-sm font-semibold text-gray-700">{label}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/products" className="btn-secondary">
              See All Categories
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label">FAQ</p>
            <h2 className="section-heading">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details key={q} className="bg-bg-light rounded-xl border border-gray-100 group">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-gray-900 list-none">
                  <span>{q}</span>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-20 bg-china-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China with Confidence?
          </h2>
          <p className="text-lg text-red-100 mb-8 max-w-2xl mx-auto">
            Tell us what you need and we will get back to you within 24 hours with a tailored sourcing plan.
          </p>
          <Link
            to="/contact"
            className="bg-white hover:bg-gray-50 text-china-red font-bold px-10 py-4 rounded-lg text-lg transition-colors inline-block"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
