import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  CheckCircle, Star, Globe, Users, ArrowRight, ChevronRight,
  Package, Award, Clock, TrendingUp
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
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site audits confirm factory capabilities, certifications, production capacity, and compliance standards.',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
    imgId: 'svc-factory-img-d4e5f6',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections ensure your goods meet agreed specifications before they leave China.',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-img-g7h8i9',
  },
  {
    icon: ShieldCheck,
    title: 'Production Follow-up',
    desc: 'We monitor production milestones, communicate with factories, and flag issues before they become costly.',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-prod-img-j1k2l3',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'From freight booking to customs documentation, we coordinate logistics to get your goods delivered on time.',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-ship-img-m4n5o6',
  },
  {
    icon: Package,
    title: 'Private Label & OEM',
    desc: 'We help you develop custom-branded products with reliable OEM factories across multiple categories.',
    titleId: 'svc-oem-title',
    descId: 'svc-oem-desc',
    imgId: 'svc-oem-img-p7q8r9',
  },
];

const problems = [
  { problem: 'Unreliable suppliers sending substandard goods', solution: 'Factory audits + pre-shipment inspection' },
  { problem: 'Language and communication barriers', solution: 'Bilingual team on the ground in China' },
  { problem: 'No visibility into production progress', solution: 'Regular production updates and milestone tracking' },
  { problem: 'Shipping delays and customs issues', solution: 'End-to-end logistics coordination' },
  { problem: 'Overpaying due to lack of market knowledge', solution: 'Competitive price benchmarking' },
  { problem: 'Difficulty verifying factory legitimacy', solution: 'On-site audits and document verification' },
];

const trustPoints = [
  { value: '500+', label: 'Verified Suppliers', icon: Factory },
  { value: '12+', label: 'Years in China Sourcing', icon: Clock },
  { value: '40+', label: 'Countries Served', icon: Globe },
  { value: '98%', label: 'Client Satisfaction Rate', icon: Star },
];

const caseStudies = [
  {
    id: 'electronics-buyer',
    category: 'Electronics',
    title: 'US Electronics Importer Reduces Defect Rate by 60%',
    excerpt: 'A California-based electronics distributor was receiving shipments with high defect rates. We implemented a structured QC process and reduced defects from 8% to under 3%.',
    result: 'Defect rate reduced by 60%',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-electronics-img-s1t2u3',
  },
  {
    id: 'furniture-buyer',
    category: 'Furniture',
    title: 'UK Furniture Brand Launches Private Label Line',
    excerpt: 'A UK home goods brand wanted to launch a private label furniture range. We sourced 3 qualified factories, managed sampling, and coordinated the first container shipment.',
    result: 'First order delivered on time',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-v4w5x6',
  },
  {
    id: 'apparel-buyer',
    category: 'Apparel',
    title: 'Australian Fashion Brand Scales Production',
    excerpt: 'An Australian fashion startup needed to scale from samples to bulk production. We managed factory selection, production follow-up, and shipping for 5 consecutive seasons.',
    result: '5 seasons delivered successfully',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    imgId: 'cs-apparel-img-y7z8a9',
  },
];

const faqs = [
  {
    q: 'How do you find and verify suppliers?',
    a: 'We use a combination of trade databases, industry networks, and on-site factory visits. Every supplier we recommend goes through a structured audit covering business registration, production capacity, quality systems, and compliance certifications.',
  },
  {
    q: 'What is your fee structure?',
    a: 'We offer both project-based and retainer pricing depending on the scope of work. Sourcing projects are typically quoted per engagement. Contact us for a tailored quote based on your requirements.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with buyers at all stages — from first-time importers to established brands scaling their supply chain. We adapt our services to your order size and complexity.',
  },
  {
    q: 'Which product categories do you cover?',
    a: 'We source across a wide range of categories including electronics, furniture, apparel, home goods, industrial equipment, packaging, and more. See our Products page for the full list.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'A typical sourcing project takes 2–4 weeks from briefing to shortlisted suppliers. Factory audits add 1–2 weeks. Timelines vary based on product complexity and your requirements.',
  },
  {
    q: 'Can you handle shipping and customs?',
    a: 'Yes. We coordinate with freight forwarders, prepare shipping documentation, and liaise with customs brokers to ensure smooth delivery to your destination port or warehouse.',
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
      {/* Hero Section */}
      <section className="relative bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full bg-cover bg-center"
            data-strk-bg-id="hero-bg-main-b1c2d3"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Globe className="w-4 h-4 text-brand-gold" />
              <span>Trusted by buyers in 40+ countries</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-brand-gold">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              We help overseas buyers find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — all from one trusted partner on the ground.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-brand-red hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors text-center"
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
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {trustPoints.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center text-center">
                <Icon className="w-6 h-6 text-brand-red mb-2" />
                <span className="text-2xl md:text-3xl font-bold text-brand-navy">{value}</span>
                <span className="text-slate-500 text-sm mt-1">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">End-to-End Sourcing Services</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              From finding the right factory to delivering goods to your door, we manage every step of the China sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, titleId, descId, imgId }) => (
              <div key={title} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-brand-navy/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-navy transition-colors">
                  <Icon className="w-6 h-6 text-brand-navy group-hover:text-white transition-colors" />
                </div>
                <h3 id={titleId} className="font-bold text-slate-900 text-lg mb-2">{title}</h3>
                <p id={descId} className="text-slate-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-red transition-colors"
            >
              View All Services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-3">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How We Work With You</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              A structured, transparent process designed to reduce risk and deliver results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Submit Your Brief', desc: 'Tell us what you need — product specs, target price, quantity, and timeline.' },
              { step: '02', title: 'Supplier Research', desc: 'We identify and vet qualified manufacturers from our network and trade databases.' },
              { step: '03', title: 'Factory Audit & Sampling', desc: 'We visit shortlisted factories, verify credentials, and arrange product samples.' },
              { step: '04', title: 'Production & Delivery', desc: 'We monitor production, inspect finished goods, and coordinate shipping to you.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative">
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 h-full">
                  <span className="text-4xl font-bold text-brand-navy/10 block mb-3">{step}</span>
                  <h3 className="font-bold text-slate-900 text-base mb-2">{title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 bg-brand-navy hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              See Full Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 md:py-28 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Why Use a Sourcing Agent</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Problems We Solve for Buyers</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Importing from China comes with real risks. Here's how we help you avoid the most common pitfalls.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {problems.map(({ problem, solution }) => (
              <div key={problem} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-5 h-5 rounded-full bg-brand-red/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-brand-red text-xs font-bold">✕</span>
                  </div>
                  <p className="text-slate-300 text-sm">{problem}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                  <p className="text-white text-sm font-medium">{solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-3">Client Results</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Case Studies</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Real results from real buyers. See how we've helped businesses source smarter from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map(({ id, category, title, excerpt, result, titleId, descId, imgId }) => (
              <div key={id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden bg-slate-100">
                  <img
                    alt={title}
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="bg-brand-red/10 text-brand-red text-xs font-semibold px-3 py-1 rounded-full">{category}</span>
                  <h3 id={titleId} className="font-bold text-slate-900 text-base mt-3 mb-2 leading-snug">{title}</h3>
                  <p id={descId} className="text-slate-600 text-sm leading-relaxed mb-4">{excerpt}</p>
                  <div className="flex items-center gap-2 text-brand-gold text-sm font-semibold">
                    <TrendingUp className="w-4 h-4" />
                    {result}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-red transition-colors"
            >
              View All Case Studies <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-slate-50 rounded-xl border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-900 mb-2">{q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-brand-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China with Confidence?
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Tell us what you need and we'll get back to you within 24 hours with a tailored sourcing plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-brand-red font-bold px-8 py-4 rounded-lg text-base transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
