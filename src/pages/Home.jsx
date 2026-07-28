import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  ArrowRight, CheckCircle, Star, Globe, Users, Award, ChevronDown
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
    desc: 'On-site audits confirm factory capacity, certifications, working conditions, and production capabilities.',
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
  {
    icon: Globe,
    title: 'Trade Compliance',
    desc: 'We help ensure your products meet import regulations, labeling requirements, and certification standards.',
    titleId: 'svc-trade-title',
    descId: 'svc-trade-desc',
    imgId: 'svc-trade-img-p7q8r9',
  },
];

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, quantity, target price, and destination.' },
  { num: '02', title: 'Supplier Research', desc: 'We search our network and identify 3–5 qualified manufacturers for your review.' },
  { num: '03', title: 'Factory Audit', desc: 'We visit shortlisted factories to verify credentials, capacity, and quality systems.' },
  { num: '04', title: 'Sample & Approval', desc: 'Samples are arranged, reviewed, and approved before production begins.' },
  { num: '05', title: 'Production Monitoring', desc: 'We follow up with the factory throughout production to keep things on track.' },
  { num: '06', title: 'Inspection & Shipping', desc: 'Final inspection is completed, then we coordinate freight and documentation.' },
];

const trustStats = [
  { value: '8+', label: 'Years in China Sourcing' },
  { value: '500+', label: 'Clients Served Globally' },
  { value: '40+', label: 'Countries Reached' },
  { value: '98%', label: 'Client Satisfaction Rate' },
];

const problems = [
  'Receiving goods that don\'t match the sample',
  'Suppliers disappearing after payment',
  'Delayed shipments with no updates',
  'Hidden costs and unclear pricing',
  'Language barriers with Chinese factories',
  'No visibility into production progress',
];

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work. We offer transparent pricing — typically a flat sourcing fee or a small percentage of order value. Contact us for a tailored quote.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with buyers of all sizes, from startups placing their first order to established importers managing multiple product lines.',
  },
  {
    q: 'How do you verify that a factory is legitimate?',
    a: 'We conduct on-site factory audits, review business licenses, check certifications, and assess production capacity and quality management systems.',
  },
  {
    q: 'Can you handle products outside your listed categories?',
    a: 'In most cases, yes. China manufactures an enormous range of products. Contact us with your requirements and we\'ll assess feasibility.',
  },
  {
    q: 'What happens if quality issues are found during inspection?',
    a: 'We document all findings and work with the factory to resolve issues before shipment. You receive a detailed inspection report with photos.',
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
      <section className="relative bg-gradient-to-br from-brand-navy-dark via-brand-navy to-blue-700 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-main-x9y8z7"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-blue-100 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              China-Based · English-Speaking · Fully Independent
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-red-400">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
              We help importers find reliable Chinese suppliers, verify factories, inspect quality,
              and coordinate shipping — so you can source with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-light text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-base"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-base"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-brand-navy py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustStats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-navy bg-brand-blue-tint px-3 py-1 rounded-full">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-4 mb-4">
              End-to-End China Sourcing Services
            </h2>
            <p className="text-brand-mid text-lg max-w-2xl mx-auto">
              From finding the right factory to getting goods to your door — we manage every step of the sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.title} className="bg-white rounded-xl border border-brand-border p-6 hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 bg-brand-blue-tint rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-brand-navy" />
                  </div>
                  <h3 id={svc.titleId} className="text-lg font-semibold text-brand-dark mb-2">{svc.title}</h3>
                  <p id={svc.descId} className="text-brand-mid text-sm leading-relaxed">{svc.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-navy-light transition-colors"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-red bg-red-50 px-3 py-1 rounded-full">
                Common Challenges
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-4 mb-4">
                Problems We Help You Avoid
              </h2>
              <p className="text-brand-mid text-lg mb-8">
                Sourcing from China without local support exposes you to real risks.
                Our team is on the ground to protect your interests at every stage.
              </p>
              <ul className="space-y-3">
                {problems.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-navy flex-shrink-0 mt-0.5" />
                    <span className="text-brand-mid">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-light text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Talk to a Sourcing Expert <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                id="problems-img"
                alt="Quality control inspection in Chinese factory"
                className="w-full h-full object-cover"
                data-strk-img-id="problems-img-s1t2u3"
                data-strk-img="quality control inspection Chinese factory manufacturing"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-16 md:py-24 bg-brand-blue-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-navy bg-white px-3 py-1 rounded-full">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-4 mb-4">
              How We Source for You
            </h2>
            <p className="text-brand-mid text-lg max-w-2xl mx-auto">
              A structured, transparent process from your first inquiry to goods arriving at your warehouse.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="bg-white rounded-xl border border-brand-border p-6">
                <div className="text-4xl font-bold text-brand-border mb-3">{step.num}</div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">{step.title}</h3>
                <p className="text-brand-mid text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-navy-light text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              See Full Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-navy bg-brand-blue-tint px-3 py-1 rounded-full">
              Product Categories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-4 mb-4">
              Products We Source from China
            </h2>
            <p className="text-brand-mid text-lg max-w-2xl mx-auto">
              We have experience sourcing across a wide range of product categories for global buyers.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { label: 'Electronics & Gadgets', imgId: 'prod-elec-img-v4w5x6', titleId: 'prod-elec-title' },
              { label: 'Furniture & Home Décor', imgId: 'prod-furn-img-y7z8a9', titleId: 'prod-furn-title' },
              { label: 'Apparel & Textiles', imgId: 'prod-app-img-b1c2d3', titleId: 'prod-app-title' },
              { label: 'Industrial Equipment', imgId: 'prod-ind-img-e4f5g6', titleId: 'prod-ind-title' },
              { label: 'Toys & Baby Products', imgId: 'prod-toy-img-h7i8j9', titleId: 'prod-toy-title' },
              { label: 'Health & Beauty', imgId: 'prod-hlt-img-k1l2m3', titleId: 'prod-hlt-title' },
              { label: 'Sports & Outdoor', imgId: 'prod-spt-img-n4o5p6', titleId: 'prod-spt-title' },
              { label: 'Packaging & Labels', imgId: 'prod-pkg-img-q7r8s9', titleId: 'prod-pkg-title' },
            ].map((cat) => (
              <div key={cat.label} className="relative rounded-xl overflow-hidden aspect-square group cursor-pointer">
                <img
                  alt={cat.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.titleId}] China manufacturing factory`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span id={cat.titleId} className="absolute bottom-3 left-3 right-3 text-white font-semibold text-sm leading-tight">
                  {cat.label}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-navy-light transition-colors"
            >
              View All Product Categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Teaser */}
      <section className="py-16 md:py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-navy bg-brand-blue-tint px-3 py-1 rounded-full">
              Client Results
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-4 mb-4">
              Real Sourcing Results
            </h2>
            <p className="text-brand-mid text-lg max-w-2xl mx-auto">
              See how we've helped buyers across industries source smarter from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                tag: 'Electronics',
                title: 'US Retailer Cuts Component Costs by 28%',
                desc: 'We identified 4 qualified PCB manufacturers, ran factory audits, and negotiated pricing — saving a US electronics brand $180K annually.',
                country: 'United States',
                titleId: 'cs-elec-title',
                descId: 'cs-elec-desc',
                imgId: 'cs-elec-img-t1u2v3',
              },
              {
                tag: 'Furniture',
                title: 'Australian Importer Launches Private Label Line',
                desc: 'From product design to first shipment in 14 weeks. We sourced 3 furniture factories, managed samples, and coordinated sea freight.',
                country: 'Australia',
                titleId: 'cs-furn-title',
                descId: 'cs-furn-desc',
                imgId: 'cs-furn-img-w4x5y6',
              },
              {
                tag: 'Apparel',
                title: 'UK Brand Resolves Quality Issues Mid-Production',
                desc: 'In-line inspection caught stitching defects early. We worked with the factory to correct the issue before 10,000 units were completed.',
                country: 'United Kingdom',
                titleId: 'cs-app-title',
                descId: 'cs-app-desc',
                imgId: 'cs-app-img-z7a8b9',
              },
            ].map((cs) => (
              <div key={cs.title} className="bg-white rounded-xl border border-brand-border overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    alt={cs.title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-navy bg-brand-blue-tint px-2 py-1 rounded-full">
                    {cs.tag}
                  </span>
                  <h3 id={cs.titleId} className="text-lg font-semibold text-brand-dark mt-3 mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-brand-mid text-sm leading-relaxed">{cs.desc}</p>
                  <div className="mt-4 text-xs text-brand-muted">Client: {cs.country}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-navy-light transition-colors"
            >
              Read All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-navy bg-brand-blue-tint px-3 py-1 rounded-full">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-4 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-brand-surface border border-brand-border rounded-xl">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-semibold text-brand-dark text-sm md:text-base">{faq.q}</span>
                  <ChevronDown className="w-4 h-4 text-brand-muted group-open:rotate-180 transition-transform flex-shrink-0 ml-3" />
                </summary>
                <div className="px-5 pb-5 text-brand-mid text-sm leading-relaxed border-t border-brand-border pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-brand-navy-dark to-brand-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Source from China with Confidence?
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            Tell us what you need. We'll respond within 24 hours with a tailored sourcing plan and transparent pricing.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-light text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
