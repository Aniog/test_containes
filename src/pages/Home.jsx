import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory, Star,
  CheckCircle, ArrowRight, Globe, Users, Award, Clock
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
    desc: 'On-site audits to confirm factory capabilities, certifications, production capacity, and compliance.',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
    imgId: 'svc-factory-img-d4e5f6',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections by our QC team to catch defects before goods leave the factory.',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-img-g7h8i9',
  },
  {
    icon: ShieldCheck,
    title: 'Production Follow-up',
    desc: 'We monitor your order from raw materials to finished goods, keeping you updated at every stage.',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-prod-img-j1k2l3',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We handle freight booking, customs documentation, and delivery coordination to your destination.',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-ship-img-m4n5o6',
  },
  {
    icon: Globe,
    title: 'Sample Procurement',
    desc: 'We source and ship product samples from multiple suppliers so you can evaluate quality before committing.',
    titleId: 'svc-sample-title',
    descId: 'svc-sample-desc',
    imgId: 'svc-sample-img-p7q8r9',
  },
];

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product specs, quantity, target price, and timeline.' },
  { num: '02', title: 'Supplier Research', desc: 'We search our vetted network and identify 3–5 qualified manufacturers.' },
  { num: '03', title: 'Factory Audit', desc: 'We visit shortlisted factories to verify capabilities and compliance.' },
  { num: '04', title: 'Sample & Approval', desc: 'Samples are procured and shipped to you for review and approval.' },
  { num: '05', title: 'Production & QC', desc: 'We monitor production and conduct quality inspections before shipment.' },
  { num: '06', title: 'Shipping & Delivery', desc: 'We coordinate freight and customs to deliver goods to your door.' },
];

const problems = [
  { title: 'Unreliable Suppliers', desc: 'We pre-screen and audit every factory before recommending them to you.' },
  { title: 'Quality Failures', desc: 'Our QC inspectors catch defects before goods are shipped, saving costly returns.' },
  { title: 'Communication Barriers', desc: 'We bridge language and cultural gaps between you and Chinese manufacturers.' },
  { title: 'Shipping Delays', desc: 'We proactively manage timelines and logistics to keep your supply chain on track.' },
  { title: 'Hidden Costs', desc: 'Transparent pricing with no hidden fees — you know exactly what you pay for.' },
  { title: 'Scam Risk', desc: 'We verify business licenses, certifications, and factory existence before any payment.' },
];

const trustPoints = [
  { icon: Award, value: '10+', label: 'Years in China Sourcing' },
  { icon: Users, value: '500+', label: 'Global Buyers Served' },
  { icon: Factory, value: '2,000+', label: 'Verified Factories' },
  { icon: CheckCircle, value: '98%', label: 'Client Satisfaction Rate' },
  { icon: Globe, value: '40+', label: 'Countries Served' },
  { icon: Clock, value: '24h', label: 'Average Response Time' },
];

const caseStudies = [
  {
    id: 'cs-furniture',
    category: 'Furniture',
    title: 'UK Retailer Cuts Sourcing Costs by 32%',
    desc: 'A UK home goods retailer needed to source solid wood furniture at competitive prices. We identified 4 verified factories in Guangdong, negotiated pricing, and managed QC across 3 production runs.',
    result: '32% cost reduction, 0 defect shipments',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-s1t2u3',
  },
  {
    id: 'cs-electronics',
    category: 'Electronics',
    title: 'US Brand Launches Private Label Electronics',
    desc: 'An American startup needed a reliable OEM partner for Bluetooth speakers. We sourced 3 factories, managed sample rounds, and coordinated CE/FCC certification testing.',
    result: 'Product launched in 14 weeks, passed all certifications',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-electronics-img-v4w5x6',
  },
  {
    id: 'cs-apparel',
    category: 'Apparel',
    title: 'Australian Brand Scales Apparel Production',
    desc: 'An Australian fashion brand needed to scale from 500 to 5,000 units per style. We found a Guangzhou factory with the right capacity and managed inline QC for 6 consecutive seasons.',
    result: 'On-time delivery for 6 seasons, defect rate under 1%',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    imgId: 'cs-apparel-img-y7z8a9',
  },
];

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work. We offer a free initial consultation and quote. Typical services include a sourcing fee, factory audit fee, and inspection fee — all clearly itemized upfront.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'For most product categories, we can present a shortlist of verified suppliers within 5–10 business days of receiving your inquiry.',
  },
  {
    q: 'Do you work with small orders or only large volumes?',
    a: 'We work with buyers at various stages — from startups placing their first order to established brands scaling production. We will advise on realistic MOQs for your product.',
  },
  {
    q: 'Can you help with product customization and private labeling?',
    a: 'Yes. We regularly assist buyers with OEM/ODM projects, including custom designs, private labeling, and packaging development.',
  },
  {
    q: 'How do you ensure factory quality and legitimacy?',
    a: 'We conduct on-site factory audits, verify business licenses and certifications, and assess production capabilities before recommending any supplier.',
  },
  {
    q: 'What happens if there is a quality issue after shipment?',
    a: 'We document all inspections thoroughly. If issues arise, we work with the factory on your behalf to negotiate replacements, rework, or compensation.',
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
      <section className="relative bg-navy-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-main-b1c2d3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative container-xl py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-navy-700 text-gold-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-widest">
              <Globe className="w-3.5 h-3.5" />
              China-Based Sourcing Agent
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-gold-400">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              We help overseas buyers find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — so you can source with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-gold text-center">
                Get a Free Sourcing Quote
              </Link>
              <Link to="/how-it-works" className="btn-outline border-white text-white hover:bg-white hover:text-navy-800 text-center">
                How It Works
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-10">
              {[
                { v: '500+', l: 'Global Buyers' },
                { v: '2,000+', l: 'Verified Factories' },
                { v: '10+', l: 'Years Experience' },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-extrabold text-gold-400">{s.v}</div>
                  <div className="text-gray-400 text-sm">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-navy-800 py-5">
        <div className="container-xl">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm text-gray-300">
            {['Trusted by buyers in 40+ countries', 'On-site factory audits', 'Pre-shipment QC inspections', 'Transparent pricing', 'English-speaking team'].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-xl">
          <div className="text-center mb-12">
            <p className="section-eyebrow mb-2">What We Do</p>
            <h2 className="section-title mb-4">End-to-End Sourcing Services</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              From finding the right factory to delivering goods to your warehouse, we manage every step of the China sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.title} className="card group">
                  <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-navy-800 transition-colors">
                    <Icon className="w-6 h-6 text-navy-800 group-hover:text-white transition-colors" />
                  </div>
                  <h3 id={svc.titleId} className="text-navy-800 font-semibold text-lg mb-2">{svc.title}</h3>
                  <p id={svc.descId} className="text-gray-600 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary">
              View All Services <ArrowRight className="inline w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <div className="text-center mb-12">
            <p className="section-eyebrow mb-2">Our Process</p>
            <h2 className="section-title mb-4">How We Source for You</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              A structured, transparent process from your first inquiry to final delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="relative p-6 rounded-xl border border-gray-200 bg-white hover:border-navy-200 hover:shadow-card transition-all">
                <div className="text-4xl font-extrabold text-navy-100 mb-3">{step.num}</div>
                <h3 className="text-navy-800 font-semibold text-base mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="btn-outline">
              See Full Process
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-xl">
          <div className="text-center mb-12">
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-2">Why Work With Us</p>
            <h2 className="text-white text-3xl font-bold mb-4">Problems We Solve for Global Buyers</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Sourcing from China comes with real risks. Here is how we protect your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="bg-navy-800 rounded-xl p-6 border border-navy-700 hover:border-gold-600 transition-colors">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">{p.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <div className="text-center mb-12">
            <p className="section-eyebrow mb-2">By the Numbers</p>
            <h2 className="section-title mb-4">Why Buyers Trust SSourcing China</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {trustPoints.map((tp) => {
              const Icon = tp.icon;
              return (
                <div key={tp.label} className="text-center p-4">
                  <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-navy-800" />
                  </div>
                  <div className="text-3xl font-extrabold text-navy-800 mb-1">{tp.value}</div>
                  <div className="text-gray-500 text-xs leading-tight">{tp.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-gray-50">
        <div className="container-xl">
          <div className="text-center mb-12">
            <p className="section-eyebrow mb-2">Client Results</p>
            <h2 className="section-title mb-4">Case Studies</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Real results from real buyers who sourced through SSourcing China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="card overflow-hidden p-0">
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-gold-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">{cs.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 id={cs.titleId} className="text-navy-800 font-bold text-base mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-gray-600 text-sm leading-relaxed mb-4">{cs.desc}</p>
                  <div className="flex items-center gap-2 text-success text-sm font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    {cs.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="btn-primary">
              View All Case Studies <ArrowRight className="inline w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="section-eyebrow mb-2">FAQ</p>
              <h2 className="section-title mb-4">Frequently Asked Questions</h2>
            </div>
            <div className="flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer text-navy-800 font-semibold text-sm hover:bg-gray-50 transition-colors list-none">
                    {faq.q}
                    <ArrowRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0 ml-3" />
                  </summary>
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gold-600 py-16">
        <div className="container-xl text-center">
          <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Source from China?
          </h2>
          <p className="text-gold-100 text-lg mb-8 max-w-xl mx-auto">
            Get a free sourcing consultation and quote within 24 hours. No commitment required.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-gold-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-100 transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
