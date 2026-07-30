import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CTAButton from '@/components/CTAButton';
import SectionHeader from '@/components/SectionHeader';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  CheckCircle, Star, Globe, Users, TrendingUp, ArrowRight,
  ChevronDown, ChevronUp, Package, Zap, AlertTriangle
} from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified Chinese manufacturers that match your product specs, MOQ, and budget.',
    id: 'svc-sourcing',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site audits confirm a factory\'s legitimacy, production capacity, certifications, and working conditions.',
    id: 'svc-factory',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections catch defects before goods leave China, protecting your brand.',
    id: 'svc-qc',
  },
  {
    icon: TrendingUp,
    title: 'Production Follow-up',
    desc: 'We monitor your order from raw materials to finished goods, keeping you informed at every stage.',
    id: 'svc-production',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle export documentation, and track your shipment to destination.',
    id: 'svc-shipping',
  },
  {
    icon: ShieldCheck,
    title: 'Supplier Negotiation',
    desc: 'Leverage our local relationships and market knowledge to negotiate better prices and payment terms.',
    id: 'svc-negotiation',
  },
];

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, specs, quantity, and target price.' },
  { num: '02', title: 'Supplier Research', desc: 'We search our network and databases to find qualified manufacturers.' },
  { num: '03', title: 'Factory Audit', desc: 'We visit shortlisted factories to verify credentials and production capability.' },
  { num: '04', title: 'Sampling & Approval', desc: 'Samples are arranged, inspected, and sent to you for final approval.' },
  { num: '05', title: 'Production & QC', desc: 'We follow production progress and conduct quality inspections before shipment.' },
  { num: '06', title: 'Shipping & Delivery', desc: 'We coordinate logistics and ensure your goods arrive on time and in full.' },
];

const products = [
  'Electronics & Components', 'Furniture & Home Décor', 'Apparel & Textiles',
  'Industrial Equipment', 'Toys & Baby Products', 'Packaging Materials',
  'Auto Parts', 'Health & Beauty', 'Sports & Outdoor',
];

const problems = [
  { icon: AlertTriangle, title: 'Unreliable Suppliers', desc: 'We verify every factory before you commit a single dollar.' },
  { icon: ShieldCheck, title: 'Quality Failures', desc: 'Our inspectors catch defects before goods leave the factory.' },
  { icon: Globe, title: 'Language Barriers', desc: 'We communicate in Chinese and English, eliminating misunderstandings.' },
  { icon: Zap, title: 'Slow Production', desc: 'On-the-ground follow-up keeps your orders on schedule.' },
];

const trustPoints = [
  { value: '500+', label: 'Verified Suppliers' },
  { value: '12+', label: 'Years in China Sourcing' },
  { value: '40+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction Rate' },
];

const caseStudies = [
  {
    id: 'cs-furniture',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-img-furniture-a1b2c3',
    title: 'Furniture Importer — UK',
    desc: 'Reduced sourcing costs by 22% and eliminated quality rejections through factory audits and pre-shipment inspection.',
    tag: 'Furniture',
  },
  {
    id: 'cs-electronics',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-img-electronics-d4e5f6',
    title: 'Electronics Distributor — USA',
    desc: 'Found a certified manufacturer for custom PCB assemblies within 3 weeks, meeting strict UL compliance requirements.',
    tag: 'Electronics',
  },
  {
    id: 'cs-apparel',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    imgId: 'cs-img-apparel-g7h8i9',
    title: 'Apparel Brand — Australia',
    desc: 'Managed end-to-end production of 15,000 units with in-line QC, delivering on time for a seasonal launch.',
    tag: 'Apparel',
  },
];

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work — sourcing, inspection, or full project management. We offer a free initial consultation and quote. Contact us to discuss your specific needs.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'For standard products, we typically present a shortlist of verified suppliers within 5–10 business days. Complex or highly customized products may take longer.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with buyers of all sizes, from startups placing their first order to established importers managing multiple product lines.',
  },
  {
    q: 'Can you handle shipping and customs documentation?',
    a: 'We coordinate with licensed freight forwarders and can assist with export documentation, packing lists, and commercial invoices. We do not act as a licensed customs broker.',
  },
  {
    q: 'What if the goods fail quality inspection?',
    a: 'If our inspection identifies defects, we work with the factory to arrange rework or replacement before shipment. You receive a detailed inspection report with photos.',
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-gray-900 pr-4">{q}</span>
        {open ? <ChevronUp className="w-5 h-5 text-navy flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-navy flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white">
          <p className="text-gray-600 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

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
        <div className="absolute inset-0 opacity-30"
          data-strk-bg-id="hero-bg-main-3f9a2b"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <span className="inline-block bg-brand-red text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              China-Based Sourcing Agency
            </span>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-brand-gold">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-blue-100 leading-relaxed mb-10 max-w-2xl">
              We help overseas buyers find reliable Chinese suppliers, verify factories,
              inspect quality, follow production, and coordinate shipping — all from one trusted partner on the ground.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton to="/contact" variant="primary">
                Get a Free Sourcing Quote
              </CTAButton>
              <CTAButton to="/how-it-works" variant="outline">
                See How It Works
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustPoints.map((tp) => (
              <div key={tp.label}>
                <div className="text-3xl font-bold text-navy">{tp.value}</div>
                <div className="text-sm text-gray-500 mt-1">{tp.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Do"
            title="End-to-End China Sourcing Services"
            subtitle="From finding the right supplier to delivering goods to your door, we manage every step of the China sourcing process."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.id} className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-navy" />
                  </div>
                  <h3 id={svc.id} className="font-bold text-gray-900 text-lg mb-2">{svc.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-navy-dark transition-colors">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Process"
            title="How We Source for You"
            subtitle="A structured, transparent process that keeps you in control from inquiry to delivery."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-navy rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{step.num}</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/how-it-works" variant="outline-navy">
              Full Process Details
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Buyers Choose Us"
            title="We Solve the Real Challenges of Sourcing from China"
            subtitle="Importing from China comes with real risks. We're here to eliminate them."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="flex gap-4 bg-white/10 rounded-xl p-6">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{p.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Product Categories"
            title="Products We Source from China"
            subtitle="We have experience sourcing across a wide range of industries and product categories."
          />
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {products.map((p) => (
              <span key={p} className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:border-navy hover:text-navy transition-colors cursor-default">
                {p}
              </span>
            ))}
          </div>
          <div className="text-center">
            <Link to="/products" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-navy-dark transition-colors">
              See Full Product List <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Client Results"
            title="Case Studies"
            subtitle="Real results from real buyers who trusted us with their China sourcing."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48 bg-gray-100">
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-navy text-white text-xs font-semibold px-2 py-1 rounded">
                    {cs.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 id={cs.titleId} className="font-bold text-gray-900 mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-gray-600 text-sm leading-relaxed">{cs.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-navy-dark transition-colors">
              Read All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Answers to the most common questions from buyers new to China sourcing."
          />
          <div className="flex flex-col gap-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-brand-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China with Confidence?
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
            Tell us what you need and we'll get back to you within one business day with a free sourcing plan.
          </p>
          <CTAButton to="/contact" variant="outline">
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
