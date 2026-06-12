import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  Star, CheckCircle, ArrowRight, Globe, Users, Award, TrendingUp,
  ChevronDown, MessageSquare, Package, Zap
} from 'lucide-react';

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
    desc: 'On-site audits confirm factory capacity, certifications, working conditions, and production capabilities.',
    id: 'svc-factory',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment, during-production, and container loading inspections to catch defects before they ship.',
    id: 'svc-qc',
  },
  {
    icon: Zap,
    title: 'Production Follow-up',
    desc: 'We monitor your order timeline, communicate with the factory, and flag issues before they become delays.',
    id: 'svc-production',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    desc: 'We coordinate freight forwarding, customs documentation, and door-to-door delivery to your warehouse.',
    id: 'svc-shipping',
  },
  {
    icon: Package,
    title: 'Private Label & OEM',
    desc: 'We help you develop custom-branded products with Chinese manufacturers, from sample to bulk production.',
    id: 'svc-oem',
  },
];

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, specs, quantity, and target price.' },
  { num: '02', title: 'Supplier Research', desc: 'We search our network and verified databases to find matching factories.' },
  { num: '03', title: 'Factory Audit', desc: 'We visit or remotely verify shortlisted suppliers before recommending them.' },
  { num: '04', title: 'Sample & Negotiation', desc: 'We request samples, review quality, and negotiate pricing on your behalf.' },
  { num: '05', title: 'Production Monitoring', desc: 'We follow up with the factory throughout production to keep things on track.' },
  { num: '06', title: 'QC & Shipment', desc: 'Final inspection before goods leave China, then we coordinate your shipment.' },
];

const products = [
  'Electronics & Components', 'Furniture & Home Décor', 'Apparel & Textiles',
  'Industrial Equipment', 'Toys & Baby Products', 'Sports & Outdoor Gear',
  'Packaging & Labels', 'Auto Parts', 'Health & Beauty', 'Pet Products',
];

const problems = [
  { title: 'Unreliable Suppliers', desc: 'We pre-screen and audit every factory before you commit a single dollar.' },
  { title: 'Quality Failures', desc: 'Our inspectors catch defects at the source — not after goods arrive at your door.' },
  { title: 'Communication Barriers', desc: 'Our bilingual team handles all factory communication in Chinese and English.' },
  { title: 'Shipping Delays', desc: 'We track production milestones and coordinate logistics to meet your deadlines.' },
  { title: 'Hidden Costs', desc: 'Transparent pricing with no hidden fees. You know exactly what you\'re paying for.' },
  { title: 'Scam Risk', desc: 'We verify business licenses, export records, and factory existence before any engagement.' },
];

const trustPoints = [
  { icon: Globe, value: '40+', label: 'Countries Served' },
  { icon: Users, value: '500+', label: 'Clients Worldwide' },
  { icon: Factory, value: '1,200+', label: 'Verified Factories' },
  { icon: Award, value: '98%', label: 'Client Satisfaction' },
];

const caseStudies = [
  {
    id: 'cs-1',
    titleId: 'cs-1-title',
    descId: 'cs-1-desc',
    imgId: 'cs-img-1-a3f9b2',
    category: 'Electronics',
    title: 'US Retailer Cuts Sourcing Costs by 22%',
    desc: 'A mid-size US electronics retailer needed a reliable PCB manufacturer. We audited 8 factories and secured a certified supplier at 22% below their previous cost.',
    result: '22% cost reduction',
  },
  {
    id: 'cs-2',
    titleId: 'cs-2-title',
    descId: 'cs-2-desc',
    imgId: 'cs-img-2-b7e1c4',
    category: 'Furniture',
    title: 'EU Brand Launches Private Label Furniture Line',
    desc: 'A European home brand wanted to launch a private label furniture range. We sourced 3 OEM factories, managed sampling, and coordinated the first container shipment.',
    result: 'On-time delivery, 0 defects',
  },
  {
    id: 'cs-3',
    titleId: 'cs-3-title',
    descId: 'cs-3-desc',
    imgId: 'cs-img-3-d2a8f5',
    category: 'Apparel',
    title: 'Australian Fashion Brand Scales Production',
    desc: 'An Australian fashion startup needed to scale from 500 to 5,000 units. We found a compliant garment factory and managed quality across 3 production runs.',
    result: 'Scaled 10x in 6 months',
  },
];

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'We offer flexible pricing: a flat project fee for one-time sourcing, or a percentage-based model for ongoing orders. Contact us for a tailored quote.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with buyers of all sizes, from startups placing their first order to established brands managing multiple SKUs.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'Typically 5–10 business days for initial supplier shortlisting. Factory audits and sampling add 2–4 weeks depending on complexity.',
  },
  {
    q: 'Can you handle shipping and customs?',
    a: 'Yes. We coordinate with freight forwarders, prepare export documentation, and can arrange door-to-door delivery to your warehouse.',
  },
  {
    q: 'What if the product quality is not acceptable?',
    a: 'Our pre-shipment inspection process is designed to catch issues before goods leave China. If problems arise, we work with the factory to resolve them at no extra cost.',
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
      <section className="relative bg-[#1A3C6E] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            data-strk-bg-id="hero-bg-main-7f3a1c"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#C0392B] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
              Trusted by 500+ Global Buyers
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-[#D4A017]">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
              We help overseas buyers find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — so you can import with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-[#C0392B] hover:bg-[#A93226] text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors duration-200 no-underline text-center"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link
                to="/how-it-works"
                className="border-2 border-white text-white hover:bg-white hover:text-[#1A3C6E] font-semibold px-8 py-4 rounded-lg text-base transition-colors duration-200 no-underline text-center"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }} />
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-10 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {trustPoints.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center">
                <Icon className="w-7 h-7 text-[#1A3C6E] mb-2" />
                <div className="text-3xl font-bold text-[#1A3C6E]">{value}</div>
                <div className="text-sm text-[#4A5568] mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-[#EEF2F7] text-[#1A3C6E] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              End-to-End China Sourcing Support
            </h2>
            <p className="text-[#4A5568] max-w-2xl mx-auto text-lg">
              From finding the right factory to delivering goods to your door, we manage every step of the sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, id }) => (
              <div key={id} className="bg-white rounded-xl border border-[#E2E8F0] p-6 hover:shadow-md transition-shadow duration-200">
                <div className="w-12 h-12 bg-[#EEF2F7] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#1A3C6E]" />
                </div>
                <h3 id={`${id}-title`} className="text-lg font-semibold text-[#1A1A2E] mb-2">{title}</h3>
                <p id={`${id}-desc`} className="text-[#4A5568] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[#1A3C6E] font-semibold hover:text-[#C0392B] transition-colors no-underline"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-[#EEF2F7] text-[#1A3C6E] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              How We Source for You
            </h2>
            <p className="text-[#4A5568] max-w-2xl mx-auto text-lg">
              A structured, transparent process designed to reduce risk and deliver results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="relative p-6 rounded-xl border border-[#E2E8F0] bg-[#F7F9FC]">
                <div className="text-4xl font-bold text-[#E2E8F0] mb-3">{step.num}</div>
                <h3 className="text-lg font-semibold text-[#1A1A2E] mb-2">{step.title}</h3>
                <p className="text-[#4A5568] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-[#1A3C6E] font-semibold hover:text-[#C0392B] transition-colors no-underline"
            >
              See Full Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 bg-[#1A3C6E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-white/10 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Product Categories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Products We Source from China
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto text-lg">
              We have experience sourcing across a wide range of product categories from verified Chinese manufacturers.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {products.map((product) => (
              <span
                key={product}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-default"
              >
                {product}
              </span>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-white text-[#1A3C6E] hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg text-sm transition-colors no-underline"
            >
              Browse All Categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-[#EEF2F7] text-[#1A3C6E] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Why Work With Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              Problems We Solve for Importers
            </h2>
            <p className="text-[#4A5568] max-w-2xl mx-auto text-lg">
              Importing from China comes with real risks. Here's how we address the most common challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-xl border border-[#E2E8F0] p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C0392B] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[#1A1A2E] mb-1">{title}</h3>
                    <p className="text-[#4A5568] text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-[#EEF2F7] text-[#1A3C6E] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              Real Results for Real Clients
            </h2>
            <p className="text-[#4A5568] max-w-2xl mx-auto text-lg">
              See how we've helped global buyers source smarter from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden bg-[#EEF2F7]">
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
                  <span className="inline-block bg-[#EEF2F7] text-[#1A3C6E] text-xs font-semibold px-2 py-1 rounded mb-3">
                    {cs.category}
                  </span>
                  <h3 id={cs.titleId} className="font-semibold text-[#1A1A2E] mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-[#4A5568] text-sm leading-relaxed mb-4">{cs.desc}</p>
                  <div className="flex items-center gap-2 text-[#C0392B] font-semibold text-sm">
                    <TrendingUp className="w-4 h-4" />
                    {cs.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-[#1A3C6E] font-semibold hover:text-[#C0392B] transition-colors no-underline"
            >
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-[#EEF2F7] text-[#1A3C6E] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details key={q} className="bg-white rounded-xl border border-[#E2E8F0] group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-semibold text-[#1A1A2E] pr-4">{q}</span>
                  <ChevronDown className="w-5 h-5 text-[#4A5568] flex-shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-[#4A5568] text-sm leading-relaxed border-t border-[#E2E8F0] pt-4">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-[#C0392B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China?
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Tell us what you need and we'll get back to you within 24 hours with a tailored sourcing plan.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#C0392B] hover:bg-red-50 font-bold px-10 py-4 rounded-lg text-base transition-colors duration-200 no-underline"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
