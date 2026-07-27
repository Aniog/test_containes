import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory, Eye,
  CheckCircle, ArrowRight, Star, Users, Package, Globe,
  ChevronDown, ChevronUp, MessageSquare
} from 'lucide-react';
import { useState } from 'react';

const Home = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current);
  }, []);

  return (
    <div ref={pageRef}>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <CaseStudiesSection />
      <FAQSection />
      <InquirySection />
    </div>
  );
};

/* ===== HERO ===== */
const HeroSection = () => {
  return (
    <section className="relative bg-brand-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-brand-blue/10 text-brand-blue text-sm font-medium px-3 py-1 rounded-full mb-4">
              Trusted by 500+ Global Buyers
            </span>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy tracking-tight leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg text-brand-gray-600 leading-relaxed mb-8 max-w-lg">
              We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — all under one roof.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-brand-orange text-white font-semibold px-6 py-3.5 rounded-lg hover:bg-orange-600 transition-colors text-center no-underline"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link
                to="/how-it-works"
                className="border-2 border-brand-navy text-brand-navy font-semibold px-6 py-3.5 rounded-lg hover:bg-brand-navy hover:text-white transition-colors text-center no-underline"
              >
                See How It Works
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                data-strk-img-id="hero-main-img-7f3a2b"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="China sourcing agent inspecting products in factory"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ===== TRUST BAR ===== */
const TrustBar = () => {
  const stats = [
    { number: '500+', label: 'Global Clients' },
    { number: '2,000+', label: 'Suppliers Verified' },
    { number: '10,000+', label: 'Shipments Managed' },
    { number: '8+', label: 'Years Experience' },
  ];

  return (
    <section className="bg-white border-y border-brand-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-brand-navy m-0">{stat.number}</p>
              <p className="text-sm text-brand-gray-600 mt-1 m-0">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ===== SERVICES ===== */
const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified manufacturers matching your product specs, MOQ, and budget requirements.',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site factory audits to verify production capacity, certifications, equipment, and business legitimacy.',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment, during-production, and container loading inspections following AQL standards.',
  },
  {
    id: 'production-followup',
    icon: Eye,
    title: 'Production Follow-up',
    desc: 'Regular factory visits and progress reports to keep your order on schedule and within spec.',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping & Logistics',
    desc: 'End-to-end freight coordination including customs documentation, consolidation, and door-to-door delivery.',
  },
  {
    id: 'negotiation-support',
    icon: MessageSquare,
    title: 'Negotiation & Contracts',
    desc: 'Price negotiation, payment term structuring, and contract review to protect your interests.',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-4">
            End-to-End Sourcing Services
          </h2>
          <p id="services-subtitle" className="text-brand-gray-600 text-lg">
            From finding the right supplier to delivering goods at your door — we handle every step of the China sourcing process.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-brand-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 id={`service-${service.id}-title`} className="text-lg font-semibold text-brand-navy mb-2">
                {service.title}
              </h3>
              <p id={`service-${service.id}-desc`} className="text-sm text-brand-gray-600 leading-relaxed m-0">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-brand-blue font-medium hover:underline no-underline"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

/* ===== PROCESS ===== */
const steps = [
  { step: '01', title: 'Share Your Requirements', desc: 'Tell us what you need — product specs, target price, quantity, and timeline.' },
  { step: '02', title: 'We Find Suppliers', desc: 'Our team identifies and vets 3-5 qualified factories matching your criteria.' },
  { step: '03', title: 'Samples & Verification', desc: 'We arrange samples, conduct factory audits, and present our findings.' },
  { step: '04', title: 'Production & QC', desc: 'We monitor production, perform inspections, and send you progress reports.' },
  { step: '05', title: 'Shipping & Delivery', desc: 'We coordinate logistics and customs to deliver goods to your warehouse.' },
];

const ProcessSection = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 id="process-title" className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-4">
            How Our Sourcing Process Works
          </h2>
          <p id="process-subtitle" className="text-brand-gray-600 text-lg">
            A clear, structured approach that keeps you informed and in control at every stage.
          </p>
        </div>
        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((item, idx) => (
            <div key={item.step} className="relative text-center">
              <div className="w-14 h-14 bg-brand-navy text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                {item.step}
              </div>
              <h3 className="text-sm font-semibold text-brand-navy mb-2">{item.title}</h3>
              <p className="text-xs text-brand-gray-600 leading-relaxed m-0">{item.desc}</p>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[60%] w-[80%] h-px bg-brand-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ===== PRODUCTS WE SOURCE ===== */
const productCategories = [
  'Electronics & Components',
  'Home & Garden',
  'Apparel & Textiles',
  'Industrial Equipment',
  'Packaging Materials',
  'Auto Parts & Accessories',
  'Health & Beauty',
  'Toys & Sporting Goods',
];

const ProductsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="products-title" className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-4">
              Products We Source
            </h2>
            <p id="products-subtitle" className="text-brand-gray-600 text-lg mb-8">
              We source across 50+ product categories from verified Chinese manufacturers. Whatever your industry, we have the supplier network to match.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {productCategories.map((cat) => (
                <div key={cat} className="flex items-center gap-2.5">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                  <span className="text-sm text-brand-gray-600">{cat}</span>
                </div>
              ))}
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-brand-blue font-medium mt-8 hover:underline no-underline"
            >
              See Full Product List <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              data-strk-img-id="products-section-img-4c8d1e"
              data-strk-img="[products-subtitle] [products-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Various products sourced from China factories"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ===== PROBLEMS WE SOLVE ===== */
const problems = [
  { problem: 'Unreliable suppliers', solution: 'We verify every factory on-site before recommending them.' },
  { problem: 'Quality inconsistency', solution: 'Our QC team inspects at multiple production stages.' },
  { problem: 'Communication barriers', solution: 'Bilingual team bridges language and cultural gaps.' },
  { problem: 'Shipping delays', solution: 'Proactive logistics management with real-time tracking.' },
  { problem: 'Scams and fraud', solution: 'Background checks, business license verification, and secure payment guidance.' },
  { problem: 'Hidden costs', solution: 'Transparent pricing with no surprise fees.' },
];

const ProblemsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-4">
            Problems We Solve
          </h2>
          <p className="text-brand-gray-600 text-lg">
            Sourcing from China comes with real challenges. Here is how we address each one.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item) => (
            <div key={item.problem} className="bg-white border border-brand-gray-200 rounded-xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <ShieldCheck className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                <h3 className="text-base font-semibold text-brand-navy m-0">{item.problem}</h3>
              </div>
              <p className="text-sm text-brand-gray-600 leading-relaxed m-0 ml-8">{item.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ===== CASE STUDIES ===== */
const caseStudies = [
  {
    id: 'electronics-us',
    client: 'US Electronics Brand',
    result: 'Reduced unit cost by 22% while improving quality consistency',
    category: 'Electronics',
    titleId: 'case-electronics-us-title',
    descId: 'case-electronics-us-desc',
    imgId: 'case-study-electronics-3b7f9a',
  },
  {
    id: 'furniture-eu',
    client: 'European Furniture Retailer',
    result: 'Found 3 verified suppliers and shipped 40ft containers monthly',
    category: 'Home & Garden',
    titleId: 'case-furniture-eu-title',
    descId: 'case-furniture-eu-desc',
    imgId: 'case-study-furniture-6d2e4c',
  },
  {
    id: 'apparel-au',
    client: 'Australian Apparel Startup',
    result: 'Launched private label line with zero defect rate on first shipment',
    category: 'Apparel',
    titleId: 'case-apparel-au-title',
    descId: 'case-apparel-au-desc',
    imgId: 'case-study-apparel-9a1c5f',
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 id="cases-title" className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-4">
            Client Success Stories
          </h2>
          <p id="cases-subtitle" className="text-brand-gray-600 text-lg">
            Real results from real sourcing projects we have managed for global buyers.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <div key={cs.id} className="bg-white border border-brand-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${cs.descId}] [${cs.titleId}] [cases-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cs.client}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-medium text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded-full">
                  {cs.category}
                </span>
                <h3 id={cs.titleId} className="text-base font-semibold text-brand-navy mt-3 mb-2">
                  {cs.client}
                </h3>
                <p id={cs.descId} className="text-sm text-brand-gray-600 m-0">
                  {cs.result}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-brand-blue font-medium hover:underline no-underline"
          >
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

/* ===== FAQ ===== */
const faqs = [
  { q: 'What is a sourcing agent?', a: 'A sourcing agent acts as your representative in China, finding suppliers, negotiating prices, managing quality control, and coordinating logistics on your behalf.' },
  { q: 'How much does your service cost?', a: 'Our fees depend on the scope of work. Typically we charge a service fee of 5-8% of order value, or a fixed project fee for specific services like factory audits.' },
  { q: 'What is your minimum order requirement?', a: 'We work with orders starting from $5,000. For smaller orders, we can arrange consolidation services.' },
  { q: 'How long does the sourcing process take?', a: 'Initial supplier identification takes 5-10 business days. The full process from inquiry to first shipment typically takes 4-8 weeks depending on product complexity.' },
  { q: 'Do you handle customs and import duties?', a: 'We coordinate shipping and prepare all export documentation. We can recommend customs brokers in your country for import clearance.' },
];

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-brand-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-brand-gray-600 text-lg">
            Common questions from buyers considering a China sourcing agent.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-brand-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer"
              >
                <span className="text-sm font-medium text-brand-navy pr-4">{faq.q}</span>
                {openIdx === idx ? (
                  <ChevronUp className="w-5 h-5 text-brand-gray-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-brand-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIdx === idx && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-brand-gray-600 leading-relaxed m-0">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ===== INQUIRY FORM ===== */
const InquirySection = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', product: '', quantity: '', message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Inquiry submitted:', formData);
    alert('Thank you! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', company: '', product: '', quantity: '', message: '' });
  };

  return (
    <section className="py-16 md:py-24 bg-brand-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Get a Free Sourcing Quote
          </h2>
          <p className="text-gray-300 text-lg">
            Tell us what you are looking for and our team will respond within 24 hours with supplier options and pricing.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 md:p-8 shadow-xl">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-brand-gray-900 mb-1.5">Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 border border-brand-gray-200 rounded-lg text-sm text-brand-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                placeholder="John Smith"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-gray-900 mb-1.5">Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 border border-brand-gray-200 rounded-lg text-sm text-brand-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                placeholder="john@company.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-gray-900 mb-1.5">Company</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-2.5 border border-brand-gray-200 rounded-lg text-sm text-brand-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                placeholder="Your Company Ltd."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-gray-900 mb-1.5">Product / Category *</label>
              <input
                type="text"
                required
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                className="w-full px-4 py-2.5 border border-brand-gray-200 rounded-lg text-sm text-brand-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                placeholder="e.g. LED lighting, furniture, textiles"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-gray-900 mb-1.5">Estimated Quantity</label>
              <input
                type="text"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className="w-full px-4 py-2.5 border border-brand-gray-200 rounded-lg text-sm text-brand-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                placeholder="e.g. 1,000 units"
              />
            </div>
          </div>
          <div className="mt-5">
            <label className="block text-sm font-medium text-brand-gray-900 mb-1.5">Additional Details</label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2.5 border border-brand-gray-200 rounded-lg text-sm text-brand-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue resize-none"
              placeholder="Tell us more about your sourcing needs, target price, timeline, etc."
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full sm:w-auto bg-brand-orange text-white font-semibold px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors border-none cursor-pointer text-base"
            >
              Submit Inquiry
            </button>
          </div>
          <p className="text-xs text-brand-gray-400 mt-4 m-0">
            We respect your privacy. Your information will only be used to respond to your inquiry.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Home;
