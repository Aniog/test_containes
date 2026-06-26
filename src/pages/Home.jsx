import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  CheckCircle, ArrowRight, Star, Globe, Users, Package,
  ChevronDown, Award, Clock, MessageSquare
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified manufacturers that match your product specifications, MOQ, and budget.',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site factory audits to confirm production capacity, certifications, and working conditions before you commit.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections by trained QC staff to catch defects before goods leave the factory.',
  },
  {
    icon: ShieldCheck,
    title: 'Production Follow-up',
    desc: 'Regular updates and milestone checks throughout production to keep your order on schedule.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle export documentation, and track your shipment to destination.',
  },
  {
    icon: Package,
    title: 'Sample Management',
    desc: 'Arrange, review, and ship product samples so you can approve quality before placing bulk orders.',
  },
];

const stats = [
  { value: '500+', label: 'Buyers Served', icon: Users },
  { value: '12+', label: 'Years in China', icon: Clock },
  { value: '98%', label: 'On-Time Delivery', icon: CheckCircle },
  { value: '30+', label: 'Product Categories', icon: Package },
];

const problems = [
  { problem: 'Unreliable suppliers with no way to verify them', solution: 'We audit factories in person and provide detailed reports.' },
  { problem: 'Poor product quality on arrival', solution: 'Our QC team inspects goods before shipment — every order.' },
  { problem: 'Communication barriers and time zone gaps', solution: 'Your dedicated agent handles all supplier communication in Chinese.' },
  { problem: 'Unexpected delays and production issues', solution: 'We follow up on production milestones and flag issues early.' },
  { problem: 'Confusing shipping and customs paperwork', solution: 'We coordinate logistics and prepare all export documentation.' },
];

const trustPoints = [
  { icon: Globe, title: 'China-Based Team', desc: 'Our agents are on the ground in Shenzhen, Yiwu, and Guangzhou — where your suppliers are.' },
  { icon: Award, title: 'Certified QC Inspectors', desc: 'All inspections follow AQL international standards with full photographic reports.' },
  { icon: MessageSquare, title: 'Transparent Communication', desc: 'You receive regular updates, photos, and reports at every stage of your order.' },
  { icon: ShieldCheck, title: 'No Hidden Fees', desc: 'Clear, upfront pricing. No commissions from suppliers — we work for you.' },
];

const faqs = [
  {
    q: 'How do you find suppliers?',
    a: 'We use our established network of verified manufacturers, trade shows like Canton Fair, and platforms like Alibaba — then we vet each supplier through background checks and factory visits.',
  },
  {
    q: 'What is your minimum order value?',
    a: 'We work with buyers from $3,000 USD per order. For smaller orders, we can consolidate shipments to reduce costs.',
  },
  {
    q: 'How long does sourcing take?',
    a: 'Initial supplier shortlist: 3–5 business days. Factory audit: 5–7 days. Full sourcing cycle from inquiry to shipment typically takes 4–8 weeks depending on product complexity.',
  },
  {
    q: 'Do you handle customs and import duties?',
    a: 'We coordinate the export side from China, including documentation and freight forwarding. Import duties in your country are your responsibility, but we can advise on HS codes.',
  },
  {
    q: 'Can I visit the factory myself?',
    a: 'Yes. We can arrange factory visits and accompany you as interpreter and guide. Many clients visit once and then rely on us for ongoing orders.',
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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0d2340]">
        <div
          className="absolute inset-0 opacity-30"
          data-strk-bg-id="hero-bg-ss001"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2340]/90 via-[#0d2340]/70 to-transparent" />
        <div className="section-container relative z-10 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#1a4f8a]/40 border border-[#1a4f8a]/60 text-blue-200 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Globe className="w-4 h-4" />
              <span>Trusted by buyers in 40+ countries</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 max-w-xl">
              We find reliable Chinese manufacturers, verify factories, inspect quality, and coordinate shipping — so you can import with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-[#e8621a] hover:bg-[#c9521a] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-center text-lg"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link
                to="/how-it-works"
                className="border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-lg transition-colors text-center text-lg flex items-center justify-center gap-2"
              >
                How It Works <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#1a4f8a] py-10">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center text-white">
                <Icon className="w-6 h-6 mx-auto mb-2 text-blue-200" />
                <div className="text-3xl font-bold mb-1">{value}</div>
                <div className="text-blue-200 text-sm font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-white">
        <div className="section-container">
          <div className="text-center mb-14">
            <p className="text-[#e8621a] font-semibold text-sm uppercase tracking-wider mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d2340] mb-4">End-to-End Sourcing Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              From finding the right supplier to getting goods to your door — we manage every step of the China sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md hover:border-[#1a4f8a]/30 transition-all group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#1a4f8a] transition-colors">
                  <Icon className="w-6 h-6 text-[#1a4f8a] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-[#0d2340] mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-[#1a4f8a] font-semibold hover:gap-3 transition-all">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-20 md:py-28 bg-[#f4f6f9]">
        <div className="section-container">
          <div className="text-center mb-14">
            <p className="text-[#e8621a] font-semibold text-sm uppercase tracking-wider mb-3">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d2340] mb-4">How We Source for You</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-lg">A clear, structured process from your first inquiry to delivery.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product specs, quantity, target price, and timeline.' },
              { step: '02', title: 'Supplier Shortlist', desc: 'We identify 3–5 verified manufacturers and send you a comparison report within 5 days.' },
              { step: '03', title: 'Sample & Audit', desc: 'We arrange samples and conduct a factory audit before you place your order.' },
              { step: '04', title: 'Production & Shipping', desc: 'We monitor production, inspect finished goods, and coordinate shipment to your door.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-white rounded-xl p-6 border border-slate-200 relative">
                <div className="text-5xl font-bold text-[#1a4f8a]/10 mb-3 leading-none">{step}</div>
                <h3 className="text-lg font-semibold text-[#0d2340] mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="bg-[#1a4f8a] hover:bg-[#0d2340] text-white font-semibold px-8 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              See Full Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 md:py-28 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#e8621a] font-semibold text-sm uppercase tracking-wider mb-3">Why Buyers Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d2340] mb-6">Common Sourcing Problems — Solved</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Sourcing from China without local support is risky. Here's how we protect your business at every step.
              </p>
              <div className="flex flex-col gap-4">
                {problems.map(({ problem, solution }) => (
                  <div key={problem} className="flex gap-4 p-4 bg-[#f4f6f9] rounded-xl">
                    <CheckCircle className="w-5 h-5 text-[#1a4f8a] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-[#0d2340] mb-1">{problem}</p>
                      <p className="text-sm text-gray-600">{solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                data-strk-img-id="problems-img-ss002"
                data-strk-img="[problems-section-title] factory quality control inspection China"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Quality control inspection at Chinese factory"
                className="w-full h-full object-cover"
              />
              <span id="problems-section-title" className="sr-only">factory quality control inspection China sourcing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 md:py-28 bg-[#f4f6f9]">
        <div className="section-container">
          <div className="text-center mb-14">
            <p className="text-[#e8621a] font-semibold text-sm uppercase tracking-wider mb-3">Product Categories</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d2340] mb-4">Products We Source</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-lg">We have supplier networks across 30+ product categories.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: 'Electronics', imgId: 'cat-electronics-ss003', desc: 'consumer electronics gadgets China' },
              { label: 'Furniture', imgId: 'cat-furniture-ss004', desc: 'furniture manufacturing factory China' },
              { label: 'Apparel', imgId: 'cat-apparel-ss005', desc: 'clothing textile factory China' },
              { label: 'Hardware', imgId: 'cat-hardware-ss006', desc: 'hardware tools manufacturing China' },
              { label: 'Packaging', imgId: 'cat-packaging-ss007', desc: 'packaging materials factory China' },
              { label: 'Home Goods', imgId: 'cat-homegoods-ss008', desc: 'home goods products China factory' },
            ].map(({ label, imgId, desc }) => (
              <div key={label} className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-md transition-shadow group">
                <div className="aspect-square overflow-hidden">
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={desc}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 text-center">
                  <span className="text-sm font-semibold text-[#0d2340]">{label}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center gap-2 text-[#1a4f8a] font-semibold hover:gap-3 transition-all">
              View All Categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-20 md:py-28 bg-[#1a4f8a]">
        <div className="section-container">
          <div className="text-center mb-14">
            <p className="text-[#e8621a] font-semibold text-sm uppercase tracking-wider mb-3">Why SSourcing China</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built on Transparency and Results</h2>
            <p className="text-blue-200 max-w-xl mx-auto text-lg">We operate with clear processes, honest reporting, and a commitment to your business outcomes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white/10 border border-white/20 rounded-xl p-6 text-white">
                <Icon className="w-8 h-8 text-[#e8621a] mb-4" />
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-white">
        <div className="section-container">
          <div className="text-center mb-14">
            <p className="text-[#e8621a] font-semibold text-sm uppercase tracking-wider mb-3">Client Results</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d2340] mb-4">Case Studies</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-lg">Real sourcing projects, real outcomes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                id: 'case1',
                category: 'Electronics',
                title: 'US Retailer Reduces Defect Rate by 60%',
                desc: 'A US-based electronics retailer was receiving 15% defective goods. We implemented pre-shipment inspections and supplier audits, reducing defects to under 6%.',
                result: '60% fewer defects',
                imgId: 'case-electronics-ss009',
              },
              {
                id: 'case2',
                category: 'Furniture',
                title: 'UK Importer Cuts Lead Time by 3 Weeks',
                desc: 'By switching to a verified manufacturer in Foshan and implementing production follow-up, a UK furniture importer reduced average lead time from 90 to 65 days.',
                result: '3 weeks faster delivery',
                imgId: 'case-furniture-ss010',
              },
              {
                id: 'case3',
                category: 'Apparel',
                title: 'Australian Brand Launches Private Label Line',
                desc: 'We sourced a compliant garment factory, managed sampling, and coordinated the first production run for an Australian fashion startup entering private label.',
                result: 'First order shipped on time',
                imgId: 'case-apparel-ss011',
              },
            ].map(({ id, category, title, desc, result, imgId }) => (
              <div key={id} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[case-title-${id}] [case-cat-${id}] China factory sourcing`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span id={`case-cat-${id}`} className="text-xs font-semibold text-[#e8621a] uppercase tracking-wider">{category}</span>
                  <h3 id={`case-title-${id}`} className="text-lg font-bold text-[#0d2340] mt-2 mb-3">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{desc}</p>
                  <div className="flex items-center gap-2 text-[#1a4f8a] font-semibold text-sm">
                    <CheckCircle className="w-4 h-4" />
                    <span>{result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-[#1a4f8a] font-semibold hover:gap-3 transition-all">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-[#f4f6f9]">
        <div className="section-container">
          <div className="text-center mb-14">
            <p className="text-[#e8621a] font-semibold text-sm uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d2340] mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-lg">Answers to the most common questions from buyers new to China sourcing.</p>
          </div>
          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="text-base font-semibold text-[#0d2340] mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-[#0d2340]">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Source from China?</h2>
          <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
            Tell us what you need. We'll respond within 24 hours with a sourcing plan and free quote.
          </p>
          <Link
            to="/contact"
            className="bg-[#e8621a] hover:bg-[#c9521a] text-white font-semibold px-10 py-4 rounded-lg transition-colors text-lg inline-block"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
