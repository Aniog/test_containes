import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship,
  Star, CheckCircle, ArrowRight, Users, Globe, Award, TrendingUp,
  ChevronDown, Quote
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CTAButton from '../components/ui/CTAButton';
import SectionHeader from '../components/ui/SectionHeader';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified manufacturers that match your product specifications, MOQ, and budget.',
    id: 'svc-sourcing',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site audits to confirm factory capabilities, certifications, production capacity, and compliance.',
    id: 'svc-factory',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment, during-production, and final inspections to ensure goods meet your standards.',
    id: 'svc-qc',
  },
  {
    icon: TrendingUp,
    title: 'Production Follow-up',
    desc: 'Regular updates and on-site monitoring to keep your production on schedule and on spec.',
    id: 'svc-production',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle documentation, and manage logistics from factory to port.',
    id: 'svc-shipping',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & Certification',
    desc: 'Guidance on product certifications, labeling requirements, and import regulations for your target market.',
    id: 'svc-compliance',
  },
];

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, specs, quantity, and target price.' },
  { num: '02', title: 'Supplier Research', desc: 'We search our network and identify 3–5 qualified manufacturers for your review.' },
  { num: '03', title: 'Factory Audit', desc: 'We visit shortlisted factories to verify capabilities, quality systems, and compliance.' },
  { num: '04', title: 'Sample & Negotiation', desc: 'We arrange samples, review quality, and negotiate pricing and terms on your behalf.' },
  { num: '05', title: 'Production & QC', desc: 'We monitor production progress and conduct inspections at key milestones.' },
  { num: '06', title: 'Shipping & Delivery', desc: 'We coordinate logistics, prepare documentation, and ensure on-time delivery.' },
];

const trustPoints = [
  { icon: Users, value: '500+', label: 'Global Buyers Served' },
  { icon: Factory, value: '1,200+', label: 'Factories Audited' },
  { icon: Globe, value: '30+', label: 'Countries Covered' },
  { icon: Award, value: '98%', label: 'Client Satisfaction Rate' },
];

const problems = [
  { title: 'Unreliable Suppliers', desc: 'We pre-screen and audit every factory before you commit a single dollar.' },
  { title: 'Quality Failures', desc: 'Our inspectors catch defects before goods leave the factory — not after they arrive.' },
  { title: 'Communication Barriers', desc: 'Our bilingual team bridges the language and cultural gap between you and your supplier.' },
  { title: 'Shipping Delays', desc: 'We track production timelines and coordinate logistics to keep your supply chain on schedule.' },
  { title: 'Hidden Costs', desc: 'Transparent pricing with no hidden fees. You know exactly what you pay and why.' },
  { title: 'Compliance Risks', desc: 'We guide you through certifications, labeling, and import requirements for your market.' },
];

const caseStudies = [
  {
    id: 'cs-1',
    titleId: 'cs-title-1',
    descId: 'cs-desc-1',
    imgId: 'cs-img-1-a3f9b2',
    category: 'Electronics',
    title: 'US Retailer Cuts Sourcing Costs by 22%',
    desc: 'A mid-size US electronics retailer needed a reliable supplier for Bluetooth speakers. We sourced 4 factories, audited 2, and secured a 22% cost reduction vs. their previous supplier.',
    result: '22% cost reduction',
  },
  {
    id: 'cs-2',
    titleId: 'cs-title-2',
    descId: 'cs-desc-2',
    imgId: 'cs-img-2-b7e1c4',
    category: 'Furniture',
    title: 'European Brand Launches New Product Line',
    desc: 'A European home goods brand needed a manufacturer for a new outdoor furniture line. We managed the full process from sourcing to first shipment in 14 weeks.',
    result: '14-week launch',
  },
  {
    id: 'cs-3',
    titleId: 'cs-title-3',
    descId: 'cs-desc-3',
    imgId: 'cs-img-3-d2a8f5',
    category: 'Apparel',
    title: 'Australian Brand Resolves Quality Issues',
    desc: 'An Australian fashion brand was experiencing recurring quality defects. Our QC team implemented a 3-stage inspection protocol that reduced defect rates from 8% to under 0.5%.',
    result: '0.5% defect rate',
  },
];

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work. We offer a free initial consultation and sourcing quote. Typical services include a one-time sourcing fee, factory audit fee, and per-shipment inspection fee. Contact us for a tailored quote.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'For standard products, we typically present a shortlist of qualified suppliers within 5–10 business days. Complex or highly specialized products may take 2–3 weeks.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with buyers of all sizes, from individual entrepreneurs to large corporations. We tailor our services to your order volume and budget.',
  },
  {
    q: 'What product categories do you cover?',
    a: 'We source across a wide range of categories including electronics, furniture, apparel, toys, hardware, packaging, and more. See our Products page for a full list.',
  },
  {
    q: 'Can you handle the full process from sourcing to delivery?',
    a: 'Yes. We offer end-to-end sourcing management — from supplier identification and factory audit through production monitoring, quality inspection, and shipping coordination.',
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
      <section className="relative bg-brand-navy overflow-hidden min-h-[600px] flex items-center">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-main-9f3a1c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="text-brand-sky text-sm font-semibold uppercase tracking-widest mb-4">
              China-Based Sourcing Agent
            </p>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-brand-sky">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              We help overseas buyers find reliable Chinese suppliers, verify factories,
              inspect quality, follow production, and coordinate shipping — so you can
              import with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton to="/contact" variant="primary" className="text-base px-8 py-4">
                Get a Free Sourcing Quote
              </CTAButton>
              <CTAButton to="/how-it-works" variant="white-outline" className="text-base px-8 py-4">
                How It Works
              </CTAButton>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-10">
              {['500+ Buyers Served', '1,200+ Factories Audited', '30+ Countries'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-brand-sky flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-brand-blue py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {trustPoints.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center">
                <Icon className="w-7 h-7 text-white/70 mb-2" />
                <div className="text-3xl font-bold text-white">{value}</div>
                <div className="text-sm text-blue-100 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Do"
            title="End-to-End Sourcing Services"
            subtitle="From finding the right supplier to getting goods to your door — we manage every step of the China sourcing process."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, id }) => (
              <div key={id} className="bg-brand-light rounded-xl p-6 hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 id={id} className="text-lg font-semibold text-brand-navy mb-2">{title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/services" variant="secondary">
              View All Services <ArrowRight className="w-4 h-4 ml-2 inline" />
            </CTAButton>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Process"
            title="How We Work With You"
            subtitle="A clear, structured process designed to reduce risk and deliver results at every stage."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="text-4xl font-bold text-brand-blue/20 mb-3">{step.num}</div>
                <h3 className="text-lg font-semibold text-brand-navy mb-2">{step.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/how-it-works" variant="primary">
              See Full Process
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 md:py-28 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Work With Us"
            title="Problems We Solve for Global Buyers"
            subtitle="Sourcing from China comes with real risks. We help you navigate them."
            center
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                <CheckCircle className="w-6 h-6 text-brand-sky mb-3" />
                <h3 className="text-white font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Client Results"
            title="Case Studies"
            subtitle="Real results from real buyers. See how we've helped businesses like yours source smarter from China."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 bg-brand-light overflow-hidden">
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-brand-blue text-white text-xs font-semibold px-2 py-1 rounded">
                    {cs.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 id={cs.titleId} className="text-brand-navy font-bold text-lg mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-brand-gray text-sm leading-relaxed mb-4">{cs.desc}</p>
                  <div className="flex items-center gap-2 text-brand-blue font-semibold text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>{cs.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/case-studies" variant="secondary">
              View All Case Studies
            </CTAButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Answers to the most common questions from buyers considering China sourcing."
            center
          />
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-semibold text-brand-navy pr-4">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-brand-blue flex-shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-brand-gray text-sm leading-relaxed border-t border-gray-100 pt-4">
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source Smarter from China?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Tell us what you need and we'll send you a free sourcing plan within 24 hours.
            No commitment required.
          </p>
          <CTAButton to="/contact" variant="white" className="text-base px-8 py-4">
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
