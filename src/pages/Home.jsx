import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship, ArrowRight,
  CheckCircle, Star, Globe, Users, Package, TrendingUp, ChevronRight
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
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site audits to confirm factory capabilities, certifications, and production capacity before you commit.',
    id: 'svc-verify',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections to ensure products meet your specifications and standards.',
    id: 'svc-qc',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'Regular updates and on-site monitoring to keep your order on schedule and on spec.',
    id: 'svc-production',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders to arrange sea, air, or express delivery to your door.',
    id: 'svc-shipping',
  },
  {
    icon: Package,
    title: 'Sample Procurement',
    desc: 'We source and ship product samples so you can evaluate quality before placing a full order.',
    id: 'svc-samples',
  },
];

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, quantity, target price, and any specific requirements.' },
  { num: '02', title: 'Supplier Research', desc: 'We search our network and identify 3–5 qualified manufacturers that match your criteria.' },
  { num: '03', title: 'Factory Verification', desc: 'We audit shortlisted factories on-site to confirm legitimacy, capacity, and compliance.' },
  { num: '04', title: 'Sampling & Approval', desc: 'Samples are sourced and shipped to you for review before production begins.' },
  { num: '05', title: 'Production Monitoring', desc: 'We follow up with the factory throughout production to ensure quality and timeline.' },
  { num: '06', title: 'Inspection & Shipping', desc: 'Final inspection before goods leave the factory, then we coordinate delivery to your destination.' },
];

const problems = [
  { title: 'Unreliable Suppliers', desc: 'We pre-screen and audit every factory before recommending them to you.' },
  { title: 'Quality Failures', desc: 'Our inspectors check products at multiple stages — not just at the end.' },
  { title: 'Communication Barriers', desc: 'We handle all supplier communication in Chinese, eliminating misunderstandings.' },
  { title: 'Delayed Shipments', desc: 'We monitor production timelines and flag issues before they become delays.' },
  { title: 'Hidden Costs', desc: 'We provide transparent pricing with no hidden fees or undisclosed commissions.' },
  { title: 'Scam Risk', desc: 'We verify business licenses, export records, and factory premises in person.' },
];

const trustPoints = [
  { value: '500+', label: 'Verified Suppliers' },
  { value: '12+', label: 'Years in China Sourcing' },
  { value: '30+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction Rate' },
];

const caseStudies = [
  {
    id: 'cs-furniture',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-a1b2c3',
    category: 'Furniture',
    title: 'UK Retailer Cuts Sourcing Costs by 22%',
    desc: 'A UK home goods retailer needed a reliable furniture supplier in Foshan. We identified 4 factories, conducted audits, and managed production for their first container order.',
    result: '22% cost reduction vs. previous supplier',
  },
  {
    id: 'cs-electronics',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-electronics-img-d4e5f6',
    category: 'Electronics',
    title: 'US Brand Launches Private Label Electronics',
    desc: 'An American startup needed a Shenzhen manufacturer for custom Bluetooth speakers. We handled supplier selection, sample rounds, and pre-shipment inspection.',
    result: 'Product launched on Amazon within 4 months',
  },
  {
    id: 'cs-apparel',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    imgId: 'cs-apparel-img-g7h8i9',
    category: 'Apparel',
    title: 'French Brand Sources Sustainable Textiles',
    desc: 'A French fashion brand required OEKO-TEX certified fabric suppliers. We sourced compliant mills, verified certifications, and coordinated sample shipments.',
    result: 'Certified supply chain established in 6 weeks',
  },
];

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work — sourcing only, inspection, or full-service management. We offer a free initial consultation and quote. Contact us to discuss your specific needs.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with buyers of all sizes, from startups placing their first order to established importers managing multiple product lines.',
  },
  {
    q: 'How do you verify that a factory is legitimate?',
    a: 'We conduct on-site audits that include checking business licenses, export records, production equipment, worker conditions, and quality management systems.',
  },
  {
    q: 'Which product categories do you cover?',
    a: 'We source across most consumer and industrial categories including electronics, furniture, apparel, machinery, toys, health products, and more. See our Products page for the full list.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Supplier identification typically takes 5–10 business days. Factory audits and sampling add 2–4 weeks. Full production timelines vary by product and factory.',
  },
  {
    q: 'Can you handle shipping and customs documentation?',
    a: 'Yes. We coordinate with licensed freight forwarders for sea, air, and express shipments, and assist with commercial invoices, packing lists, and certificates of origin.',
  },
];

const Home = () => {
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
      <section className="bg-[#0d2d52] text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            data-strk-bg-id="hero-bg-main-x9y8z7"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#1a4f8a] text-[#bfdbfe] text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Globe className="w-4 h-4" />
              <span>Trusted by buyers in 30+ countries</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-[#94a3b8] mb-8 leading-relaxed max-w-2xl">
              We help overseas buyers find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — so you can import with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#c0392b] hover:bg-[#a93226] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-transparent border border-[#4a7ab5] text-white hover:bg-[#1a4f8a] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                How It Works
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-10">
              {['No upfront fees', 'On-site factory audits', 'English-speaking team', 'End-to-end service'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-[#94a3b8] text-sm">
                  <CheckCircle className="w-4 h-4 text-[#22c55e]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-[#1a4f8a] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustPoints.map((tp) => (
              <div key={tp.label}>
                <div className="text-3xl md:text-4xl font-bold text-white">{tp.value}</div>
                <div className="text-[#bfdbfe] text-sm mt-1">{tp.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="bg-[#e8f0fb] text-[#1a4f8a] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a202c] mt-4 mb-4">End-to-End China Sourcing Services</h2>
            <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
              From finding the right supplier to delivering goods to your warehouse, we manage every step of the sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.id} className="bg-white rounded-xl border border-[#e2e8f0] p-6 hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 bg-[#e8f0fb] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#1a4f8a] transition-colors">
                    <Icon className="w-6 h-6 text-[#1a4f8a] group-hover:text-white transition-colors" />
                  </div>
                  <h3 id={svc.id} className="text-lg font-semibold text-[#1a202c] mb-2">{svc.title}</h3>
                  <p className="text-[#64748b] text-sm leading-relaxed">{svc.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-[#1a4f8a] font-semibold hover:underline">
              View all services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#f4f6f9] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="bg-[#e8f0fb] text-[#1a4f8a] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a202c] mt-4 mb-4">How Our Sourcing Process Works</h2>
            <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
              A structured, transparent process designed to reduce risk and deliver results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="bg-white rounded-xl border border-[#e2e8f0] p-6">
                <div className="text-4xl font-bold text-[#e8f0fb] mb-3">{step.num}</div>
                <h3 className="text-lg font-semibold text-[#1a202c] mb-2">{step.title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-[#1a4f8a] font-semibold hover:underline">
              See the full process <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="bg-[#e8f0fb] text-[#1a4f8a] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">Why Use a Sourcing Agent</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a202c] mt-4 mb-4">Common Problems We Solve for Importers</h2>
              <p className="text-[#64748b] text-lg mb-8">
                Sourcing from China without local support exposes you to real risks. We eliminate them.
              </p>
              <div className="space-y-4">
                {problems.map((p) => (
                  <div key={p.title} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#1a4f8a] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#1a202c]">{p.title}: </span>
                      <span className="text-[#64748b] text-sm">{p.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#e8f0fb]">
              <img
                data-strk-img-id="problems-img-j1k2l3"
                data-strk-img="[problems-section-title] China factory quality inspection sourcing agent"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Quality inspection at a Chinese factory"
                className="w-full h-full object-cover"
                id="problems-section-title"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-[#f4f6f9] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="bg-[#e8f0fb] text-[#1a4f8a] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">Case Studies</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a202c] mt-4 mb-4">Real Results for Real Buyers</h2>
            <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
              Here's how we've helped businesses like yours source successfully from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl border border-[#e2e8f0] overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[3x2] bg-[#e8f0fb] overflow-hidden">
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="bg-[#e8f0fb] text-[#1a4f8a] text-xs font-semibold px-2 py-1 rounded-full">{cs.category}</span>
                  <h3 id={cs.titleId} className="text-lg font-semibold text-[#1a202c] mt-3 mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-[#64748b] text-sm leading-relaxed mb-4">{cs.desc}</p>
                  <div className="flex items-center gap-2 text-[#1a4f8a] text-sm font-semibold">
                    <TrendingUp className="w-4 h-4" />
                    <span>{cs.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-[#1a4f8a] font-semibold hover:underline">
              View all case studies <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="bg-[#e8f0fb] text-[#1a4f8a] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a202c] mt-4 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#f4f6f9] rounded-xl p-6">
                <h3 className="font-semibold text-[#1a202c] mb-2">{faq.q}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#1a4f8a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Source from China?</h2>
          <p className="text-[#bfdbfe] text-lg mb-8 max-w-2xl mx-auto">
            Tell us what you need. We'll identify the right suppliers and manage the process from start to finish.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#c0392b] hover:bg-[#a93226] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
