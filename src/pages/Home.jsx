import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  CheckCircle, ArrowRight, Star, Users, Package, Globe,
  ChevronRight, MessageSquare
} from 'lucide-react';

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
    icon: ShieldCheck,
    title: 'Production Follow-up',
    desc: 'Regular updates and on-site monitoring to keep your order on schedule and on spec.',
    id: 'svc-production',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We handle freight booking, customs documentation, and delivery coordination to your destination.',
    id: 'svc-shipping',
  },
  {
    icon: Package,
    title: 'Sample Procurement',
    desc: 'We source and ship product samples so you can evaluate quality before placing a full order.',
    id: 'svc-sample',
  },
];

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what product you need, your target price, and order quantity.' },
  { num: '02', title: 'Supplier Matching', desc: 'We identify and vet 3–5 qualified manufacturers within 5 business days.' },
  { num: '03', title: 'Quotation & Samples', desc: 'You receive competitive quotes and can request samples for evaluation.' },
  { num: '04', title: 'Order & Production', desc: 'We monitor production progress and keep you updated at every stage.' },
  { num: '05', title: 'QC Inspection', desc: 'Our inspectors verify quality before goods are packed and shipped.' },
  { num: '06', title: 'Shipping & Delivery', desc: 'We coordinate freight and documentation until goods reach your door.' },
];

const problems = [
  { title: 'Unreliable Suppliers', desc: 'We pre-screen and audit factories so you only work with verified manufacturers.' },
  { title: 'Quality Surprises', desc: 'Our QC inspections catch defects before shipment, not after arrival.' },
  { title: 'Communication Barriers', desc: 'We bridge language and time-zone gaps between you and Chinese factories.' },
  { title: 'Shipping Delays', desc: 'We track production timelines and coordinate logistics to keep orders on schedule.' },
  { title: 'Scam Risk', desc: 'We verify business licenses, export records, and factory premises in person.' },
  { title: 'Hidden Costs', desc: 'Transparent fee structure with no hidden charges or surprise markups.' },
];

const trustPoints = [
  { icon: Users, value: '500+', label: 'Global Buyers Served' },
  { icon: Factory, value: '1,200+', label: 'Factories Audited' },
  { icon: Package, value: '8,000+', label: 'Shipments Coordinated' },
  { icon: Globe, value: '40+', label: 'Countries Served' },
];

const caseStudies = [
  {
    id: 'cs-furniture',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-a1b2c3',
    category: 'Furniture',
    title: 'UK Retailer Cuts Sourcing Costs by 22%',
    desc: 'A UK home goods retailer needed a reliable furniture supplier in Foshan. We sourced 4 verified factories, arranged sample shipments, and negotiated pricing that reduced their unit cost by 22%.',
    result: '22% cost reduction',
  },
  {
    id: 'cs-electronics',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-electronics-img-d4e5f6',
    category: 'Electronics',
    title: 'US Brand Passes Amazon Quality Standards',
    desc: 'An Amazon FBA seller needed electronics accessories that met strict quality requirements. Our QC team conducted pre-shipment inspections and ensured 100% compliance before shipping.',
    result: 'Zero returns in first 3 months',
  },
  {
    id: 'cs-apparel',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    imgId: 'cs-apparel-img-g7h8i9',
    category: 'Apparel',
    title: 'Australian Brand Launches Private Label Line',
    desc: 'An Australian fashion startup needed a manufacturer for a private label clothing line. We sourced a certified factory, managed sampling rounds, and coordinated the first production run.',
    result: 'On-time delivery, 3 SKUs launched',
  },
];

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'We offer a free initial consultation and sourcing quote. Our fees depend on the scope of services required — supplier sourcing, QC inspection, and shipping coordination are priced separately. Contact us for a tailored quote.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'For most product categories, we can present a shortlist of 3–5 verified suppliers within 5–7 business days of receiving your inquiry.',
  },
  {
    q: 'Do you work with small orders or only large volumes?',
    a: 'We work with buyers at various stages — from startups placing their first order to established importers managing large volumes. We will advise on realistic MOQs for your product category.',
  },
  {
    q: 'Can you inspect goods before they are shipped?',
    a: 'Yes. Pre-shipment inspection is one of our core services. Our QC team visits the factory, checks product quality against your specifications, and provides a detailed inspection report with photos.',
  },
  {
    q: 'Which product categories do you cover?',
    a: 'We source across a wide range of categories including electronics, furniture, clothing, machinery, toys, health products, and more. See our Products page for the full list.',
  },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative bg-brand-dark overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          data-strk-bg-id="hero-bg-main-x9y8z7"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-blue-300 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-6">
              <Globe className="w-3.5 h-3.5" />
              <span>China-Based Sourcing Agent</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-blue-300">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              We help overseas buyers find reliable Chinese suppliers, verify factories, inspect product quality, and coordinate shipping — so you can import with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-500 hover:border-white text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-primary py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustPoints.map((tp) => (
              <div key={tp.label} className="flex flex-col items-center gap-1">
                <tp.icon className="w-6 h-6 text-blue-200 mb-1" />
                <span className="text-3xl font-bold text-white">{tp.value}</span>
                <span className="text-sm text-blue-200">{tp.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-primary-light text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              End-to-End China Sourcing Support
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From finding the right factory to delivering goods to your warehouse — we manage every step of the sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div key={svc.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-primary/30 transition-all group">
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <svc.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 id={svc.id} className="text-lg font-semibold text-gray-900 mb-2">{svc.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
              View all services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-primary-light text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Sourcing Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Work With You
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              A clear, structured process from your first inquiry to final delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="bg-white rounded-xl p-6 border border-gray-200 relative">
                <span className="text-5xl font-bold text-gray-100 absolute top-4 right-6 select-none">{step.num}</span>
                <div className="relative">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">{step.num}</span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-1 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
              See the full process <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-primary-light text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Why Use a Sourcing Agent
              </span>
              <h2 id="problems-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Common Problems We Solve for Importers
              </h2>
              <p id="problems-subtitle" className="text-gray-600 text-lg mb-8">
                Sourcing from China without local support carries real risks. We eliminate the most common pain points so you can focus on your business.
              </p>
              <div className="space-y-4">
                {problems.map((p) => (
                  <div key={p.title} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-900">{p.title}: </span>
                      <span className="text-gray-600 text-sm">{p.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100">
              <img
                data-strk-img-id="problems-img-j1k2l3"
                data-strk-img="[problems-subtitle] [problems-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="China factory quality inspection"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-primary-light text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Results for Real Buyers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              See how we've helped businesses across different industries source successfully from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                <div className="aspect-[3x2] bg-gray-100 overflow-hidden">
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
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{cs.category}</span>
                  <h3 id={cs.titleId} className="text-lg font-semibold text-gray-900 mt-1 mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-gray-600 text-sm leading-relaxed mb-4">{cs.desc}</p>
                  <div className="flex items-center gap-2 text-green-600 text-sm font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    {cs.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
              View all case studies <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-primary-light text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-6">
                <div className="flex gap-3">
                  <MessageSquare className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China?
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            Tell us what you need. We'll find the right suppliers, verify quality, and get your goods delivered — without the guesswork.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-primary font-bold px-10 py-4 rounded-lg text-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
