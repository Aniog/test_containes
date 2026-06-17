import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  ArrowRight, CheckCircle, Globe, Award,
  ChevronDown, MessageSquare, TrendingUp, AlertTriangle
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified suppliers from our network across China, matching your product specs and budget.',
    id: 'svc-sourcing',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site factory audits covering production capacity, certifications, workforce, and compliance standards.',
    id: 'svc-factory',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment, in-line, and final inspections by our local QC team to ensure products meet your specifications.',
    id: 'svc-qc',
  },
  {
    icon: TrendingUp,
    title: 'Production Follow-up',
    desc: 'Regular updates and milestone tracking throughout production so you always know where your order stands.',
    id: 'svc-production',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle export documentation, and manage logistics from factory to port.',
    id: 'svc-shipping',
  },
  {
    icon: MessageSquare,
    title: 'Supplier Negotiation',
    desc: 'Leverage our local presence and language skills to negotiate better pricing, MOQs, and payment terms.',
    id: 'svc-negotiation',
  },
];

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, specs, target price, and quantity.' },
  { num: '02', title: 'Supplier Matching', desc: 'We identify and vet 3–5 qualified suppliers from our verified network.' },
  { num: '03', title: 'Samples & Negotiation', desc: 'We arrange samples, review quality, and negotiate pricing on your behalf.' },
  { num: '04', title: 'Production & QC', desc: 'We monitor production progress and conduct quality inspections before shipment.' },
  { num: '05', title: 'Shipping & Delivery', desc: 'We coordinate logistics and ensure your goods arrive on time and in full.' },
];

const products = [
  'Electronics & Components', 'Furniture & Home Goods', 'Apparel & Textiles',
  'Industrial Equipment', 'Packaging Materials', 'Consumer Products',
  'Toys & Sporting Goods', 'Auto Parts', 'Health & Beauty',
];

const problems = [
  { icon: AlertTriangle, title: 'Unreliable Suppliers', desc: 'We pre-screen and audit every supplier before recommending them to you.' },
  { icon: ShieldCheck, title: 'Quality Failures', desc: 'Our on-site QC inspections catch defects before goods leave the factory.' },
  { icon: Globe, title: 'Language Barriers', desc: 'Our bilingual team handles all communication with Chinese suppliers directly.' },
  { icon: Truck, title: 'Shipping Delays', desc: 'We track production milestones and coordinate logistics to keep timelines on track.' },
];

const trustPoints = [
  { value: '500+', label: 'Verified Suppliers' },
  { value: '12+', label: 'Years in China' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '30+', label: 'Countries Served' },
];

const caseStudies = [
  {
    id: 'cs-furniture',
    industry: 'Furniture',
    title: 'UK Retailer Cuts Sourcing Costs by 22%',
    desc: 'A UK-based furniture importer needed to diversify suppliers after quality issues. We identified 4 verified factories, conducted audits, and managed QC across 3 production runs.',
    result: '22% cost reduction, zero defect shipments',
    imgId: 'cs-furniture-img-a1b2c3',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
  },
  {
    id: 'cs-electronics',
    industry: 'Electronics',
    title: 'US Brand Launches Private Label Product Line',
    desc: 'An American consumer electronics brand needed a reliable OEM partner for a new product line. We sourced, verified, and managed production for their first 10,000-unit order.',
    result: 'On-time delivery, full CE/FCC compliance',
    imgId: 'cs-electronics-img-d4e5f6',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
  },
  {
    id: 'cs-apparel',
    industry: 'Apparel',
    title: 'Australian Brand Scales Production 3x',
    desc: 'A growing Australian fashion brand needed to scale from 500 to 1,500 units per style. We found a factory with the right capacity and managed inline QC throughout.',
    result: '3x volume increase, consistent quality',
    imgId: 'cs-apparel-img-g7h8i9',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
  },
];

const faqs = [
  {
    q: 'How do you verify suppliers?',
    a: 'We conduct on-site factory audits covering business licenses, production capacity, quality management systems, worker conditions, and export history. We only recommend suppliers who pass our internal checklist.',
  },
  {
    q: 'What is your fee structure?',
    a: 'We charge a transparent service fee based on the scope of work — sourcing, inspection, or full project management. We do not take hidden commissions from suppliers. Contact us for a tailored quote.',
  },
  {
    q: 'Can you handle small orders?',
    a: 'Yes. We work with buyers at various stages, from first-time importers testing with small MOQs to established brands placing large repeat orders.',
  },
  {
    q: 'Which regions of China do you cover?',
    a: 'We operate across all major manufacturing hubs including Guangdong, Zhejiang, Jiangsu, Fujian, and Shandong, covering electronics, textiles, furniture, hardware, and more.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'A typical sourcing project takes 2–4 weeks from inquiry to confirmed supplier. Production timelines vary by product and order size. We provide a project timeline at the start of each engagement.',
  },
];

function FAQ({ q, a }) {
  return (
    <details className="border border-gray-200 rounded-xl overflow-hidden group">
      <summary className="flex items-center justify-between p-5 cursor-pointer list-none bg-white hover:bg-gray-50 transition-colors">
        <span className="font-semibold text-[#1a2e4a] pr-4">{q}</span>
        <ChevronDown className="w-5 h-5 text-[#6b7280] flex-shrink-0 group-open:rotate-180 transition-transform" />
      </summary>
      <div className="px-5 pb-5 bg-white">
        <p className="text-[#6b7280] leading-relaxed">{a}</p>
      </div>
    </details>
  );
}

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative bg-[#1a2e4a] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-main-x9y8z7"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e4a] via-[#1a2e4a]/90 to-[#1a2e4a]/60" />
        <div className="relative section-container py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#e85d26]/20 border border-[#e85d26]/30 text-[#e85d26] text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Globe className="w-4 h-4" />
              China-Based Sourcing Agent
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-[#e85d26]">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-blue-200 leading-relaxed mb-8 max-w-2xl">
              We help overseas buyers find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — all from one trusted partner on the ground.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#e85d26] hover:bg-[#c94d1e] text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="section-container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {trustPoints.map((tp) => (
              <div key={tp.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#e85d26] mb-1">{tp.value}</div>
                <div className="text-sm text-[#6b7280] font-medium">{tp.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#f3f4f6] py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#e85d26]/10 text-[#e85d26] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-3">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e4a] mb-4">
              End-to-End Sourcing Support
            </h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto text-lg">
              From finding the right supplier to getting goods to your door, we manage every step of the China sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div key={svc.id} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md hover:border-[#e85d26]/30 transition-all group">
                <div className="w-12 h-12 bg-[#e85d26]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#e85d26] transition-colors">
                  <svc.icon className="w-6 h-6 text-[#e85d26] group-hover:text-white transition-colors" />
                </div>
                <h3 id={svc.id} className="font-semibold text-[#1a2e4a] text-lg mb-2">{svc.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[#e85d26] font-semibold hover:underline"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#e85d26]/10 text-[#e85d26] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-3">
              Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e4a] mb-4">
              How We Work With You
            </h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto text-lg">
              A clear, structured process designed to reduce risk and save you time at every stage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
            {steps.map((step, i) => (
              <div key={step.num} className="relative flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-[#1a2e4a] rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 relative z-10">
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] right-0 h-0.5 bg-gray-200 z-0" />
                )}
                <h3 className="font-semibold text-[#1a2e4a] mb-2 text-sm">{step.title}</h3>
                <p className="text-[#6b7280] text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 border-2 border-[#1a2e4a] text-[#1a2e4a] hover:bg-[#1a2e4a] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Learn More About Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="bg-[#f3f4f6] py-16 md:py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#e85d26]/10 text-[#e85d26] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-3">
                Product Categories
              </span>
              <h2 id="products-title" className="text-3xl md:text-4xl font-bold text-[#1a2e4a] mb-4">
                Products We Source from China
              </h2>
              <p id="products-desc" className="text-[#6b7280] text-lg leading-relaxed mb-8">
                We source across a wide range of product categories, working with factories in Guangdong, Zhejiang, Jiangsu, and beyond.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {products.map((p) => (
                  <span key={p} className="bg-white border border-gray-200 text-[#1a2e4a] text-sm font-medium px-4 py-2 rounded-full">
                    {p}
                  </span>
                ))}
              </div>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-[#e85d26] hover:bg-[#c94d1e] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Browse All Categories <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <img
                data-strk-img-id="products-factory-img-j1k2l3"
                data-strk-img="[products-desc] [products-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="China factory production floor"
                className="w-full rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-[#1a2e4a] py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#e85d26]/20 text-[#e85d26] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-3">
              Why Use a Sourcing Agent
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Common Problems We Solve
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto text-lg">
              Sourcing from China without local support carries real risks. Here's how we protect your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="bg-white/5 border border-white/10 rounded-xl p-6 flex gap-4">
                <div className="w-12 h-12 bg-[#e85d26]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <p.icon className="w-6 h-6 text-[#e85d26]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">{p.title}</h3>
                  <p className="text-blue-200 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#e85d26]/10 text-[#e85d26] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-3">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e4a] mb-4">
              Real Results for Real Buyers
            </h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto text-lg">
              See how we've helped businesses across industries source smarter from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group">
                <div className="relative overflow-hidden h-48">
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#e85d26] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {cs.industry}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 id={cs.titleId} className="font-bold text-[#1a2e4a] text-lg mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-[#6b7280] text-sm leading-relaxed mb-4">{cs.desc}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#e85d26]">
                    <CheckCircle className="w-4 h-4" />
                    {cs.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-[#e85d26] font-semibold hover:underline"
            >
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f3f4f6] py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-[#e85d26]/10 text-[#e85d26] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-3">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e4a] mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <FAQ key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#e85d26] py-16 md:py-20">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China with Confidence?
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Tell us what you need and we'll get back to you within 24 hours with a tailored sourcing plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#e85d26] hover:bg-gray-50 font-bold px-8 py-4 rounded-lg text-base transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
