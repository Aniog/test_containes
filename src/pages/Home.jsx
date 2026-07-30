import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory, Star,
  CheckCircle, ArrowRight, Globe, Users, Award, Clock
} from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import SectionHeader from '@/components/SectionHeader';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified manufacturers that match your product specs, MOQ, and budget requirements.',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-sourcing-img-a1b2c3',
  },
  {
    icon: Factory,
    title: 'Factory Audit',
    desc: 'On-site factory assessments covering production capacity, certifications, compliance, and working conditions.',
    titleId: 'svc-audit-title',
    descId: 'svc-audit-desc',
    imgId: 'svc-audit-img-d4e5f6',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections to ensure your products meet specifications before they leave China.',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-img-g7h8i9',
  },
  {
    icon: ShieldCheck,
    title: 'Production Follow-up',
    desc: 'Regular factory visits and progress reports to keep your production on schedule and on spec.',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-prod-img-j1k2l3',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle export documentation, and track your shipment to destination.',
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
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, quantity, target price, and any specific requirements.' },
  { num: '02', title: 'Supplier Research', desc: 'Our team identifies and vets 3–5 qualified manufacturers from our verified supplier network.' },
  { num: '03', title: 'Quotation & Samples', desc: 'We collect competitive quotes and arrange samples for your review and approval.' },
  { num: '04', title: 'Factory Audit', desc: 'We conduct on-site audits to verify production capability, certifications, and compliance.' },
  { num: '05', title: 'Production & QC', desc: 'We monitor production progress and perform quality inspections at key milestones.' },
  { num: '06', title: 'Shipping & Delivery', desc: 'We coordinate logistics, handle documentation, and ensure your goods arrive on time.' },
];

const problems = [
  { title: 'Unreliable Suppliers', desc: 'Struggling to find manufacturers who deliver consistent quality? We pre-screen and audit every supplier we recommend.' },
  { title: 'Quality Failures', desc: 'Received goods that didn\'t match the sample? Our inspection team catches defects before shipment.' },
  { title: 'Communication Barriers', desc: 'Language and time zone gaps causing delays? Our bilingual team bridges the gap between you and your factory.' },
  { title: 'Shipping Complexity', desc: 'Confused by export procedures and freight options? We handle all logistics coordination end-to-end.' },
  { title: 'Production Delays', desc: 'Orders running late with no visibility? We follow up with factories weekly and report back to you.' },
  { title: 'Scam Risk', desc: 'Worried about paying and receiving nothing? We verify business licenses, certifications, and factory existence.' },
];

const trustPoints = [
  { icon: Award, value: '10+', label: 'Years in China Sourcing' },
  { icon: Users, value: '300+', label: 'Global Buyers Served' },
  { icon: CheckCircle, value: '1,200+', label: 'Successful Orders' },
  { icon: Clock, value: '48h', label: 'Average Response Time' },
];

const caseStudies = [
  {
    id: 'cs-furniture',
    category: 'Furniture',
    title: 'US Retailer Saves 22% on Furniture Sourcing',
    desc: 'A mid-size US home goods retailer needed to diversify their supplier base. We identified 4 verified factories, negotiated pricing, and managed QC across 3 production runs.',
    result: '22% cost reduction, 0 defect shipments',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-s1t2u3',
  },
  {
    id: 'cs-electronics',
    category: 'Electronics',
    title: 'EU Importer Passes CE Certification First Time',
    desc: 'A European electronics distributor needed CE-compliant products. We sourced certified factories, coordinated lab testing, and managed the entire compliance process.',
    result: 'CE certified, on-time delivery, 18% below budget',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-electronics-img-v4w5x6',
  },
  {
    id: 'cs-apparel',
    category: 'Apparel',
    title: 'Australian Brand Launches Private Label Line',
    desc: 'An Australian fashion startup needed a reliable OEM partner for their first private label collection. We managed sampling, production, and quality inspection across 8 SKUs.',
    result: 'Launched on schedule, 98% quality pass rate',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    imgId: 'cs-apparel-img-y7z8a9',
  },
];

const faqs = [
  { q: 'How much does your sourcing service cost?', a: 'Our fees depend on the scope of services required. We offer transparent pricing with no hidden charges. Contact us for a tailored quote based on your project.' },
  { q: 'How long does it take to find a supplier?', a: 'For standard products, we typically present qualified supplier options within 5–7 business days. Complex or highly customized products may take 10–14 days.' },
  { q: 'Do you work with small businesses and startups?', a: 'Yes. We work with buyers of all sizes, from startups placing their first order to established importers managing multiple product lines.' },
  { q: 'Which product categories do you cover?', a: 'We source across a wide range of categories including electronics, furniture, apparel, machinery, toys, health products, and more. See our Products page for the full list.' },
  { q: 'How do you verify suppliers?', a: 'We verify business licenses, export records, certifications, and conduct on-site factory audits. We only recommend suppliers we have personally vetted.' },
  { q: 'Can you handle shipping to my country?', a: 'Yes. We coordinate with freight forwarders for sea, air, and express shipping to most destinations worldwide, including customs documentation support.' },
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
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0"
            data-strk-bg-id="hero-bg-main-b1c2d3"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-accent/20 text-[#e8a09a] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
                China-Based Sourcing Agent
              </span>
              <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
                China Sourcing Agent for Global Buyers
              </h1>
              <p id="hero-subtitle" className="text-lg md:text-xl text-blue-200 leading-relaxed mb-8 max-w-xl">
                We help overseas buyers find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — so you can import with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton size="lg">Get a Free Sourcing Quote</CTAButton>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-blue-200 transition-colors"
                >
                  How It Works <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 mt-10">
                {trustPoints.map((tp) => (
                  <div key={tp.label} className="text-center">
                    <div className="text-2xl font-bold text-white">{tp.value}</div>
                    <div className="text-blue-300 text-xs mt-0.5">{tp.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  data-strk-img-id="hero-factory-img-e4f5g6"
                  data-strk-img="[hero-subtitle] [hero-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="China factory sourcing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-border py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-muted text-sm">
            <span className="font-medium text-darktext">Trusted by buyers from:</span>
            {['United States', 'United Kingdom', 'Australia', 'Germany', 'Canada', 'France', 'UAE'].map((c) => (
              <span key={c} className="font-semibold text-primary">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-lightbg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Services"
            title="End-to-End China Sourcing Services"
            subtitle="From finding the right supplier to delivering goods to your door, we manage every step of the sourcing process."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.title} className="bg-white rounded-xl border border-border p-6 hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 id={svc.titleId} className="text-lg font-semibold text-darktext mb-2">{svc.title}</h3>
                  <p id={svc.descId} className="text-muted text-sm leading-relaxed">{svc.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/services" variant="outline">View All Services</CTAButton>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Process"
            title="How We Source for You"
            subtitle="A structured, transparent process designed to reduce risk and deliver results at every stage."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="relative p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-sm transition-all">
                <div className="text-5xl font-bold text-primary/10 mb-3 leading-none">{step.num}</div>
                <h3 className="text-lg font-semibold text-darktext mb-2">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/how-it-works" variant="outline">See Full Process</CTAButton>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Problems We Solve"
            title="Common Challenges We Eliminate"
            subtitle="Importing from China comes with real risks. Here's how we protect your business."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="bg-white/10 rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-white mb-1.5">{p.title}</h3>
                    <p className="text-blue-200 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-lightbg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Case Studies"
            title="Real Results for Real Buyers"
            subtitle="See how we've helped businesses like yours source successfully from China."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl overflow-hidden border border-border hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">{cs.category}</span>
                  <h3 id={cs.titleId} className="text-base font-semibold text-darktext mt-2 mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-muted text-sm leading-relaxed mb-4">{cs.desc}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {cs.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/case-studies" variant="outline">View All Case Studies</CTAButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Answers to the most common questions from buyers new to China sourcing."
          />
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-border rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-darktext hover:bg-lightbg transition-colors list-none">
                  <span>{faq.q}</span>
                  <ArrowRight className="w-4 h-4 text-muted group-open:rotate-90 transition-transform flex-shrink-0 ml-3" />
                </summary>
                <div className="px-5 pb-5 text-muted text-sm leading-relaxed border-t border-border pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China with Confidence?
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Submit your sourcing inquiry today and receive a free consultation from our team within 48 hours.
          </p>
          <CTAButton variant="secondary" size="lg">Get a Free Sourcing Quote</CTAButton>
        </div>
      </section>
    </div>
  );
}
