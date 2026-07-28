import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  ArrowRight, CheckCircle, Star, Globe, Users, Award, ChevronRight
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
    desc: 'From freight booking to customs documentation, we coordinate logistics so your goods arrive on time.',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-ship-img-m4n5o6',
  },
];

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, quantity, target price, and timeline.' },
  { num: '02', title: 'Supplier Research', desc: 'We search our network and identify 3–5 qualified manufacturers for your review.' },
  { num: '03', title: 'Factory Audit', desc: 'We visit shortlisted factories to verify capabilities, certifications, and reliability.' },
  { num: '04', title: 'Sample & Approval', desc: 'Samples are arranged, reviewed, and approved before production begins.' },
  { num: '05', title: 'Production & QC', desc: 'We follow production progress and conduct quality inspections at key stages.' },
  { num: '06', title: 'Shipping & Delivery', desc: 'We coordinate freight, documentation, and customs clearance to your destination.' },
];

const problems = [
  { title: 'Unreliable Suppliers', desc: 'We pre-screen and audit every factory before recommending them to you.' },
  { title: 'Quality Failures', desc: 'Our inspectors check goods before shipment — not after they arrive at your warehouse.' },
  { title: 'Communication Barriers', desc: 'We bridge language and cultural gaps so nothing gets lost in translation.' },
  { title: 'Delayed Shipments', desc: 'We track production timelines and escalate issues before they cause delays.' },
  { title: 'Hidden Costs', desc: 'Transparent pricing with no hidden fees. You know what you pay before we start.' },
  { title: 'Scam Risk', desc: 'We verify business licenses, export records, and factory ownership before engagement.' },
];

const trustPoints = [
  { value: '12+', label: 'Years in China Sourcing' },
  { value: '500+', label: 'Clients Served Globally' },
  { value: '40+', label: 'Countries Reached' },
  { value: '98%', label: 'Client Retention Rate' },
];

const caseStudies = [
  {
    id: 'cs-furniture',
    industry: 'Furniture',
    title: 'US Retailer Reduces Sourcing Cost by 22%',
    desc: 'A mid-size US furniture importer needed to diversify suppliers after quality issues with their existing factory. We identified three verified alternatives, conducted audits, and managed the transition.',
    result: '22% cost reduction, zero quality rejections in 18 months',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-p7q8r9',
  },
  {
    id: 'cs-electronics',
    industry: 'Electronics',
    title: 'European Brand Launches New Product Line',
    desc: 'A European consumer electronics brand needed a reliable PCB assembly partner with CE certification. We sourced, audited, and onboarded a factory within 6 weeks.',
    result: 'Product launched on schedule, CE certified, 0 compliance issues',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-electronics-img-s1t2u3',
  },
  {
    id: 'cs-apparel',
    industry: 'Apparel',
    title: 'Australian Brand Scales Private Label Production',
    desc: 'An Australian fashion brand needed a scalable garment factory for private label production. We managed supplier selection, sample development, and ongoing QC.',
    result: 'Scaled from 500 to 5,000 units/month in 12 months',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    imgId: 'cs-apparel-img-v4w5x6',
  },
];

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work. We offer a free initial consultation and quote. Typical services include a one-time sourcing fee, factory audit fee, and per-shipment inspection fee. Contact us for a tailored proposal.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with buyers of all sizes, from startups placing their first order to established importers managing multiple product lines. We tailor our service to your volume and budget.',
  },
  {
    q: 'Which product categories do you cover?',
    a: 'We source across a wide range of categories including electronics, furniture, apparel, hardware, packaging, and more. If it is manufactured in China, we can likely help you source it.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Initial supplier shortlisting typically takes 5–10 business days. Factory audits add another 3–7 days. The full process from inquiry to production start is usually 3–6 weeks depending on complexity.',
  },
  {
    q: 'Can you handle shipping and customs?',
    a: 'Yes. We coordinate with freight forwarders, prepare export documentation, and liaise with customs brokers to ensure smooth delivery to your destination port or warehouse.',
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
      <section className="relative bg-brand-navy text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-main-a1b2c3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-brand-sky text-sm font-medium px-3 py-1 rounded-full mb-6">
              <Globe className="w-4 h-4" />
              <span>Trusted by buyers in 40+ countries</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-brand-sky">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              We help overseas buyers find reliable Chinese suppliers, verify factories,
              inspect quality, follow production, and coordinate shipping — all from one trusted partner in China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-brand-red text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors text-center"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link
                to="/how-it-works"
                className="border-2 border-white/40 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors text-center flex items-center justify-center gap-2"
              >
                How It Works <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustPoints.map((tp) => (
              <div key={tp.label}>
                <div className="text-3xl font-bold text-brand-navy">{tp.value}</div>
                <div className="text-sm text-neutral-600 mt-1">{tp.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              What We Do for You
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              End-to-end sourcing support so you can focus on your business while we handle China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.titleId}
                  className="bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-brand-navy/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-navy" />
                  </div>
                  <h3 id={svc.titleId} className="text-lg font-semibold text-neutral-900 mb-2">
                    {svc.title}
                  </h3>
                  <p id={svc.descId} className="text-neutral-600 text-sm leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
              );
            })}
            <div className="bg-brand-navy rounded-xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Ready to Start Sourcing?</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Tell us what you need and we will send you a free sourcing proposal within 24 hours.
                </p>
              </div>
              <Link
                to="/contact"
                className="mt-6 bg-brand-red text-white px-5 py-3 rounded-lg font-semibold text-sm hover:bg-red-700 transition-colors text-center"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Sourcing Process
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              A structured, transparent process from your first inquiry to delivery at your door.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-red rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{step.num}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-navy transition-colors"
            >
              See the full process <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Problems We Solve
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Sourcing from China comes with real risks. Here is how we address them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="bg-white rounded-xl p-6 border border-neutral-200">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">{p.title}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{p.desc}</p>
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Client Results
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Real outcomes from buyers who trusted us with their China sourcing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-neutral-50 rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden bg-neutral-200">
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
                  <span className="inline-block bg-brand-navy/10 text-brand-navy text-xs font-semibold px-2 py-1 rounded mb-3">
                    {cs.industry}
                  </span>
                  <h3 id={cs.titleId} className="font-semibold text-neutral-900 mb-2 leading-snug">
                    {cs.title}
                  </h3>
                  <p id={cs.descId} className="text-sm text-neutral-600 leading-relaxed mb-4">
                    {cs.desc}
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg px-3 py-2">
                    <p className="text-xs font-semibold text-green-700">Result: {cs.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-navy transition-colors"
            >
              View all case studies <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-neutral-200 p-6">
                <h3 className="font-semibold text-neutral-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China with Confidence?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Submit your sourcing inquiry today and receive a free proposal within 24 hours.
            No commitment required.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand-red text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
