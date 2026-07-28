import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, ArrowRight,
  CheckCircle2, Globe, Factory, Users, Clock, Shield,
  ChevronDown, ChevronUp, Star, BarChart3, Package
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and connect you with vetted manufacturers matching your product specifications, quality standards, and budget.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site audits to verify factory legitimacy, production capacity, certifications, and business registration before you commit.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-production, during-production, and pre-shipment inspections to catch issues before your goods leave the factory.',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'We monitor your orders throughout production, tracking timelines and resolving issues to keep your schedule on track.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'End-to-end logistics support including freight booking, customs documentation, and door-to-door delivery coordination.',
  },
  {
    icon: BarChart3,
    title: 'Price Negotiation',
    desc: 'Leverage our local expertise and supplier relationships to negotiate competitive pricing without compromising quality.',
  },
];

const processSteps = [
  { step: '01', title: 'Tell Us What You Need', desc: 'Share your product requirements, specifications, and target pricing. We assess feasibility and propose a sourcing plan.' },
  { step: '02', title: 'Supplier Identification & Verification', desc: 'We search our network, shortlist qualified factories, and conduct on-site verification audits.' },
  { step: '03', title: 'Sample & Quotation', desc: 'Get product samples and detailed quotations from verified suppliers for your evaluation and approval.' },
  { step: '04', title: 'Order & Production Monitoring', desc: 'We place orders, track production milestones, and conduct inspections throughout manufacturing.' },
  { step: '05', title: 'Quality Inspection & Shipping', desc: 'Final pre-shipment inspection, logistics coordination, and delivery to your door.' },
];

const productCategories = [
  { name: 'Electronics & Components', imgId: 'prod-elec-a1b2c3', titleId: 'prod-elec-title', descId: 'prod-elec-desc', desc: 'Consumer electronics, PCBs, sensors, and electronic components' },
  { name: 'Textiles & Apparel', imgId: 'prod-text-d4e5f6', titleId: 'prod-text-title', descId: 'prod-text-desc', desc: 'Clothing, fabrics, home textiles, and fashion accessories' },
  { name: 'Machinery & Equipment', imgId: 'prod-mach-g7h8i9', titleId: 'prod-mach-title', descId: 'prod-mach-desc', desc: 'Industrial machinery, CNC equipment, and automation systems' },
  { name: 'Home & Garden', imgId: 'prod-home-j1k2l3', titleId: 'prod-home-title', descId: 'prod-home-desc', desc: 'Furniture, kitchenware, garden tools, and home decor' },
  { name: 'Auto Parts & Accessories', imgId: 'prod-auto-m4n5o6', titleId: 'prod-auto-title', descId: 'prod-auto-desc', desc: 'OEM parts, aftermarket components, and vehicle accessories' },
  { name: 'Packaging & Printing', imgId: 'prod-pack-p7q8r9', titleId: 'prod-pack-title', descId: 'prod-pack-desc', desc: 'Custom packaging, labels, and commercial printing solutions' },
];

const problems = [
  { icon: Shield, title: 'Unverified Suppliers', desc: 'Avoid scams and unreliable factories. We verify every supplier through on-site audits and business registration checks.' },
  { icon: ClipboardCheck, title: 'Quality Inconsistency', desc: 'Stop receiving goods that don\'t match samples. Our inspectors check quality at every production stage.' },
  { icon: Clock, title: 'Production Delays', desc: 'No more missed deadlines. We follow up with factories weekly and flag delays before they impact your schedule.' },
  { icon: Globe, title: 'Communication Barriers', desc: 'Bridge the language and culture gap. Our bilingual team manages all supplier communication for you.' },
  { icon: Package, title: 'Shipping Complexity', desc: 'Simplify international logistics. We coordinate freight, customs, and documentation from factory to your warehouse.' },
  { icon: BarChart3, title: 'Price Uncertainty', desc: 'Get transparent, competitive pricing. We negotiate with multiple suppliers and provide detailed cost breakdowns.' },
];

const trustPoints = [
  { number: '500+', label: 'Verified Suppliers' },
  { number: '12+', label: 'Years in China Sourcing' },
  { number: '30+', label: 'Countries Served' },
  { number: '98%', label: 'Client Satisfaction Rate' },
];

const caseStudies = [
  {
    title: 'US Electronics Brand Cuts Defect Rate by 85%',
    industry: 'Consumer Electronics',
    result: 'Reduced defect rate from 12% to under 2% through systematic supplier verification and in-line QC inspections.',
    imgId: 'cs-elec-s1t2u3',
    titleId: 'cs-elec-title',
    descId: 'cs-elec-desc',
  },
  {
    title: 'European Furniture Retailer Saves 30% on Procurement',
    industry: 'Home Furniture',
    result: 'Consolidated 8 suppliers to 3 verified factories, achieving significant cost savings while improving quality consistency.',
    imgId: 'cs-furn-v4w5x6',
    titleId: 'cs-furn-title',
    descId: 'cs-furn-desc',
  },
  {
    title: 'Australian Auto Parts Importer Eliminates Delays',
    industry: 'Auto Parts',
    result: 'Implemented production monitoring system that reduced average lead time delays from 3 weeks to under 3 days.',
    imgId: 'cs-auto-y7z8a9',
    titleId: 'cs-auto-title',
    descId: 'cs-auto-desc',
  },
];

const faqs = [
  {
    q: 'How do you verify suppliers?',
    a: 'We conduct on-site factory audits including business license verification, production capacity assessment, quality management system review, and worker condition evaluation. We also check references from existing clients and verify export certifications.',
  },
  {
    q: 'What does your quality inspection cover?',
    a: 'Our inspections follow AQL (Acceptable Quality Level) standards and cover product appearance, dimensions, functionality, packaging, and labeling. We offer pre-production, during-production, and pre-shipment inspection options.',
  },
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the complexity and volume of your project. We offer transparent pricing with no hidden costs. Contact us for a free initial consultation and quote tailored to your needs.',
  },
  {
    q: 'Can you help with small order quantities?',
    a: 'Yes. While MOQs vary by product and supplier, we work with factories that accommodate smaller trial orders. We help you find the right balance between order size and unit pricing.',
  },
  {
    q: 'What happens if there is a quality issue after shipment?',
    a: 'We document all inspections with detailed reports and photos. If issues arise, we work with the supplier to negotiate replacements, refunds, or corrective actions. Our goal is to resolve problems quickly and protect your investment.',
  },
  {
    q: 'Do you handle customs and import documentation?',
    a: 'Yes. We coordinate with freight forwarders to prepare all necessary export and import documentation, including commercial invoices, packing lists, certificates of origin, and customs declarations.',
  },
];

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-base font-medium text-navy-900 pr-4">{q}</span>
        {open ? <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
      </button>
      {open && (
        <div className="pb-5 text-slate-600 leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
};

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-navy-950 overflow-hidden">
        <div
          data-strk-bg-id="hero-bg-7f3a2b"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-brand-300 text-sm font-medium">Trusted by 500+ global buyers</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Find reliable suppliers, verify factories, inspect quality, and coordinate shipping — all with one trusted partner on the ground in China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-600 text-white px-7 py-3.5 rounded-lg text-base font-semibold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/25"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border border-slate-500 text-slate-200 px-7 py-3.5 rounded-lg text-base font-medium hover:bg-white/5 transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {trustPoints.map((tp) => (
              <div key={tp.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-navy-900">{tp.number}</div>
                <div className="text-sm text-slate-500 mt-1">{tp.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight mb-4">Our Sourcing Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              End-to-end sourcing support from supplier discovery to delivery at your door.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-5">
                  <s.icon className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors">
              Learn More About Our Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight mb-4">How It Works</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A clear, structured process from your first inquiry to delivered goods.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, i) => (
              <div key={step.step} className="flex gap-6 md:gap-8 pb-8 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {step.step}
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-slate-200 mt-2" />
                  )}
                </div>
                <div className="pb-8 last:pb-0">
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors">
              See Full Process Details <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight mb-4">Products We Source</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We source across a wide range of industries with verified manufacturers.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {productCategories.map((cat) => (
              <div key={cat.name} className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] bg-slate-100 relative">
                  <img
                    alt={cat.name}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 id={cat.titleId} className="font-semibold text-navy-900 mb-1">{cat.name}</h3>
                  <p id={cat.descId} className="text-sm text-slate-500">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors">
              View All Product Categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight mb-4">Problems We Solve</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Common challenges when sourcing from China — and how we address them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {problems.map((p) => (
              <div key={p.title} className="bg-slate-50 rounded-xl p-6 md:p-8 border border-slate-100">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-5">
                  <p.icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{p.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-navy-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Why Buyers Trust SSourcing China</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              We operate with transparency, local expertise, and a commitment to your success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Factory, title: 'On-the-Ground Team', desc: 'Our team is based in Shenzhen, at the heart of China\'s manufacturing hub. We visit factories in person.' },
              { icon: ShieldCheck, title: 'Verified Suppliers Only', desc: 'Every supplier in our network has passed our verification audit. No middlemen, no trading companies posing as factories.' },
              { icon: ClipboardCheck, title: 'Transparent Reporting', desc: 'Detailed inspection reports with photos, test results, and clear recommendations. You see exactly what we see.' },
              { icon: Users, title: 'Dedicated Account Manager', desc: 'One point of contact who understands your business, products, and quality standards throughout the engagement.' },
            ].map((item) => (
              <div key={item.title} className="bg-navy-800/50 rounded-xl p-6 border border-navy-700">
                <div className="w-12 h-12 bg-brand-500/10 rounded-lg flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-brand-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight mb-4">Case Studies</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real results from real clients across different industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {caseStudies.map((cs) => (
              <div key={cs.title} className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[16/10] bg-slate-100 relative">
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs font-medium text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full mb-3">{cs.industry}</span>
                  <h3 id={cs.titleId} className="font-semibold text-navy-900 mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-sm text-slate-600 leading-relaxed">{cs.result}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">
              Common questions about our sourcing services.
            </p>
          </div>
          <div>
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="bg-brand-600 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Ready to Source from China?
          </h2>
          <p className="text-lg text-brand-100 mb-8 max-w-2xl mx-auto">
            Tell us about your product requirements and get a free sourcing quote within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-brand-700 px-8 py-4 rounded-lg text-base font-semibold hover:bg-brand-50 transition-colors shadow-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
