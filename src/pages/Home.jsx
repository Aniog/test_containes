import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  ArrowRight, CheckCircle, Star, Users, Globe, Package,
  AlertTriangle, TrendingUp, Clock, ChevronDown
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified manufacturers that match your product specs, MOQ, and budget.',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-sourcing-img-a1b2c3',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site audits confirm production capacity, certifications, and working conditions before you commit.',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
    imgId: 'svc-factory-img-d4e5f6',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections catch defects early, protecting your brand and reducing returns.',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-img-g7h8i9',
  },
  {
    icon: ShieldCheck,
    title: 'Production Follow-up',
    desc: 'We monitor your order from raw materials to finished goods, keeping you informed at every stage.',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-prod-img-j1k2l3',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We handle freight booking, customs documentation, and delivery tracking so goods arrive on time.',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-ship-img-m4n5o6',
  },
  {
    icon: Globe,
    title: 'Trade Compliance',
    desc: 'Guidance on import regulations, labelling requirements, and documentation for your target market.',
    titleId: 'svc-trade-title',
    descId: 'svc-trade-desc',
    imgId: 'svc-trade-img-p7q8r9',
  },
];

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, specs, quantity, and target price.' },
  { num: '02', title: 'Supplier Research', desc: 'We identify and vet 3–5 qualified manufacturers from our network.' },
  { num: '03', title: 'Quotation & Samples', desc: 'You receive competitive quotes and can request product samples.' },
  { num: '04', title: 'Factory Audit', desc: 'We visit the factory to verify capacity, quality systems, and compliance.' },
  { num: '05', title: 'Order & Production', desc: 'We place the order and monitor production progress on your behalf.' },
  { num: '06', title: 'Inspection & Shipping', desc: 'Final QC inspection before goods are shipped to your destination.' },
];

const problems = [
  { icon: AlertTriangle, title: 'Unreliable Suppliers', desc: 'Factories that miss deadlines, change specs, or disappear after payment.' },
  { icon: ClipboardCheck, title: 'Quality Failures', desc: 'Receiving goods that do not match samples or fail your market standards.' },
  { icon: Clock, title: 'Communication Gaps', desc: 'Language barriers and time zones making it hard to stay informed.' },
  { icon: TrendingUp, title: 'Hidden Costs', desc: 'Unexpected fees, poor packaging, or non-compliant labelling on arrival.' },
];

const trustPoints = [
  { value: '10+', label: 'Years in China Sourcing' },
  { value: '500+', label: 'Clients Served Globally' },
  { value: '30+', label: 'Countries Reached' },
  { value: '98%', label: 'On-Time Delivery Rate' },
];

const caseStudies = [
  {
    id: 'cs-furniture',
    industry: 'Furniture',
    title: 'EU Retailer Cuts Sourcing Costs by 22%',
    result: 'Identified 4 verified factories, negotiated pricing, and managed 3 shipments within 6 months.',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-s1t2u3',
  },
  {
    id: 'cs-electronics',
    industry: 'Electronics',
    title: 'US Brand Passes Amazon Compliance Audit',
    result: 'Full factory audit and pre-shipment inspection ensured FCC and CE certification compliance.',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-electronics-img-v4w5x6',
  },
  {
    id: 'cs-apparel',
    industry: 'Apparel',
    title: 'Australian Importer Scales to 10,000 Units',
    result: 'Managed production follow-up and quality control across two factories simultaneously.',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    imgId: 'cs-apparel-img-y7z8a9',
  },
];

const faqs = [
  {
    q: 'How do you charge for your services?',
    a: 'We offer both project-based fees and a percentage-of-order-value model depending on the scope. We provide a clear quote before any work begins.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with buyers at all stages, from first-time importers to established brands scaling their supply chain.',
  },
  {
    q: 'Which product categories do you cover?',
    a: 'We source across electronics, furniture, apparel, packaging, hardware, home goods, and more. Contact us to discuss your specific product.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Initial supplier shortlisting typically takes 5–10 business days. Full factory audit and sample approval can take 3–6 weeks depending on complexity.',
  },
  {
    q: 'Can you handle shipping to any country?',
    a: 'Yes. We coordinate sea freight, air freight, and express courier to destinations worldwide, including customs documentation support.',
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
          data-strk-bg-id="hero-bg-main-b1c2d3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20">
              <Globe className="w-4 h-4" />
              <span>China-Based. Globally Connected.</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-red-400">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              We help overseas buyers find reliable Chinese suppliers, verify factories,
              inspect quality, follow production, and coordinate shipping — with full
              transparency from inquiry to delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-china-red hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors text-center"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link
                to="/how-it-works"
                className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors text-center flex items-center justify-center gap-2"
              >
                How It Works <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {trustPoints.map((tp) => (
              <div key={tp.label}>
                <div className="text-3xl md:text-4xl font-bold text-navy mb-1">{tp.value}</div>
                <div className="text-sm text-slate-500 font-medium">{tp.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-china-red uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">End-to-End Sourcing Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From finding the right factory to getting goods to your door — we manage every step of your China supply chain.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.title} className="bg-white rounded-xl border border-slate-100 p-6 hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-navy/10 transition-colors">
                    <Icon className="w-6 h-6 text-navy" />
                  </div>
                  <h3 id={svc.titleId} className="text-lg font-semibold text-navy mb-2">{svc.title}</h3>
                  <p id={svc.descId} className="text-slate-600 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-steel font-semibold hover:text-navy transition-colors">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-red-400 uppercase tracking-widest mb-3">Common Challenges</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Problems We Solve for Buyers</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Importing from China without local support exposes you to risks that cost time and money.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="bg-white/5 border border-white/10 rounded-xl p-6 flex gap-4">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{p.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/contact"
              className="bg-china-red hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors inline-block"
            >
              Talk to a Sourcing Expert
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-china-red uppercase tracking-widest mb-3">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">How We Work With You</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A structured, transparent process that keeps you in control at every stage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="relative bg-surface rounded-xl p-6 border border-slate-100">
                <div className="text-5xl font-bold text-slate-100 mb-3 leading-none">{step.num}</div>
                <h3 className="text-navy font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-steel font-semibold hover:text-navy transition-colors">
              See Full Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-china-red uppercase tracking-widest mb-3">Results</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Client Case Studies</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real outcomes from buyers who trusted us to manage their China supply chain.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-shadow">
                <div className="relative h-48 bg-slate-100">
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
                    {cs.industry}
                  </span>
                </div>
                <div className="p-6">
                  <h3 id={cs.titleId} className="text-navy font-semibold text-lg mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-slate-600 text-sm leading-relaxed">{cs.result}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-steel font-semibold hover:text-navy transition-colors">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-china-red uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-surface rounded-xl border border-slate-100 p-6">
                <h4 className="text-navy font-semibold mb-2">{faq.q}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-china-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China with Confidence?
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Submit your sourcing inquiry today and receive a free consultation from our team within 24 hours.
          </p>
          <Link
            to="/contact"
            className="bg-white hover:bg-slate-100 text-china-red font-bold px-10 py-4 rounded-lg text-base transition-colors inline-block"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
