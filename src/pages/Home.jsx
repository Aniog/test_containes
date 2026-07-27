import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { submitInquiry } from '@/api/inquiry.js';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Eye, FileCheck,
  ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Globe, Factory,
  Package, Users, Award, Clock, Handshake
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Search',
    desc: 'We identify and evaluate suppliers across China that match your product specifications, quality standards, and budget requirements.',
    imgId: 'home-svc-search-a1b2c3',
    titleId: 'home-svc-search-title',
    descId: 'home-svc-search-desc',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site factory audits to verify business licenses, production capacity, quality management systems, and real manufacturing capabilities.',
    imgId: 'home-svc-verify-d4e5f6',
    titleId: 'home-svc-verify-title',
    descId: 'home-svc-verify-desc',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-production, during-production, and pre-shipment inspections following international AQL standards to ensure product quality.',
    imgId: 'home-svc-inspect-g7h8i9',
    titleId: 'home-svc-inspect-title',
    descId: 'home-svc-inspect-desc',
  },
  {
    icon: Eye,
    title: 'Production Follow-up',
    desc: 'Regular monitoring of production progress, material sourcing, and timeline tracking to keep your orders on schedule.',
    imgId: 'home-svc-followup-j1k2l3',
    titleId: 'home-svc-followup-title',
    descId: 'home-svc-followup-desc',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'End-to-end logistics coordination including freight booking, customs documentation, and delivery tracking to your destination.',
    imgId: 'home-svc-ship-m4n5o6',
    titleId: 'home-svc-ship-title',
    descId: 'home-svc-ship-desc',
  },
  {
    icon: FileCheck,
    title: 'Customs & Compliance',
    desc: 'Navigate import regulations, product certifications, labeling requirements, and customs procedures for your target markets.',
    imgId: 'home-svc-compliance-p7q8r9',
    titleId: 'home-svc-compliance-title',
    descId: 'home-svc-compliance-desc',
  },
];

const processSteps = [
  { num: '01', title: 'Tell Us What You Need', desc: 'Share your product requirements, target price, quality standards, and desired quantity.' },
  { num: '02', title: 'We Find & Verify Suppliers', desc: 'Our team searches, screens, and audits potential factories to find the best match for your needs.' },
  { num: '03', title: 'Sample & Negotiate', desc: 'We arrange samples, negotiate pricing and terms, and confirm production details with the supplier.' },
  { num: '04', title: 'Monitor Production', desc: 'Regular updates on production progress with on-site checks to ensure quality and timeline compliance.' },
  { num: '05', title: 'Inspect Before Shipment', desc: 'Final pre-shipment inspection following AQL standards before goods leave the factory.' },
  { num: '06', title: 'Ship & Deliver', desc: 'We coordinate freight, customs clearance, and delivery to your warehouse or distribution center.' },
];

const productCategories = [
  { name: 'Electronics & Components', imgId: 'home-prod-elec-s1t2u3', titleId: 'home-prod-elec-title' },
  { name: 'Textiles & Apparel', imgId: 'home-prod-text-v4w5x6', titleId: 'home-prod-text-title' },
  { name: 'Home & Garden Products', imgId: 'home-prod-home-y7z8a9', titleId: 'home-prod-home-title' },
  { name: 'Industrial & Machinery', imgId: 'home-prod-indus-b1c2d3', titleId: 'home-prod-indus-title' },
  { name: 'Auto Parts & Accessories', imgId: 'home-prod-auto-e4f5g6', titleId: 'home-prod-auto-title' },
  { name: 'Packaging & Printing', imgId: 'home-prod-pack-h7i8j9', titleId: 'home-prod-pack-title' },
];

const problems = [
  { icon: ShieldCheck, title: 'Unverified Suppliers', desc: 'Avoid the risk of trading companies posing as factories, or suppliers with poor quality records.' },
  { icon: ClipboardCheck, title: 'Quality Failures', desc: 'Prevent costly quality issues that lead to returns, refunds, and damaged brand reputation.' },
  { icon: Clock, title: 'Production Delays', desc: 'Stay on schedule with proactive monitoring and early intervention when issues arise.' },
  { icon: Truck, title: 'Shipping Complications', desc: 'Navigate complex logistics, customs requirements, and documentation with local expertise.' },
  { icon: Globe, title: 'Communication Barriers', desc: 'Bridge language and cultural gaps with our bilingual team managing supplier communications.' },
  { icon: Package, title: 'Hidden Costs', desc: 'Identify and avoid unexpected fees, inflated quotes, and unfavorable payment terms.' },
];

const trustPoints = [
  { icon: Users, value: '500+', label: 'Clients Served' },
  { icon: Factory, value: '2,000+', label: 'Factories Verified' },
  { icon: Globe, value: '30+', label: 'Countries Served' },
  { icon: Award, value: '10+', label: 'Years of Experience' },
];

const caseStudies = [
  {
    title: 'European Furniture Importer',
    desc: 'Reduced defect rate from 12% to under 2% through systematic factory audits and quality inspections.',
    result: '85% defect reduction',
    imgId: 'home-cs-furn-k1l2m3',
    titleId: 'home-cs-furn-title',
    descId: 'home-cs-furn-desc',
  },
  {
    title: 'US Electronics Distributor',
    desc: 'Identified 3 verified factories replacing unreliable suppliers, cutting lead times by 40%.',
    result: '40% faster delivery',
    imgId: 'home-cs-elec-n4o5p6',
    titleId: 'home-cs-elec-title',
    descId: 'home-cs-elec-desc',
  },
  {
    title: 'Australian Home Goods Brand',
    desc: 'Coordinated first container shipment from sample to delivery in 8 weeks for a new product line.',
    result: '8 weeks to delivery',
    imgId: 'home-cs-home-q7r8s9',
    titleId: 'home-cs-home-title',
    descId: 'home-cs-home-desc',
  },
];

const faqs = [
  {
    q: 'What types of products can you help source?',
    a: 'We work across most product categories manufactured in China, including electronics, textiles, home goods, industrial equipment, auto parts, packaging materials, and more. Our network covers thousands of verified factories across major manufacturing hubs.',
  },
  {
    q: 'How do you verify suppliers?',
    a: 'We conduct on-site factory audits that verify business licenses, production capacity, quality management systems (ISO certifications), actual manufacturing facilities versus trading companies, and past export records. We also check references from other international buyers.',
  },
  {
    q: 'What are your fees?',
    a: 'Our fee structure depends on the scope of services required. We offer flexible pricing based on project complexity, from single inspection visits to full sourcing management packages. Contact us for a detailed quote based on your specific needs.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Typical timelines range from 2-6 weeks for supplier identification and verification, 1-3 weeks for sample arrangement, and production timelines vary by product. We provide detailed timeline estimates at the start of each project.',
  },
  {
    q: 'Do you handle shipping and customs?',
    a: 'Yes, we coordinate freight booking (sea, air, rail), prepare customs documentation, manage import/export compliance, and track delivery to your destination. We work with reliable logistics partners to ensure smooth transit.',
  },
  {
    q: 'Can I visit the factory myself?',
    a: 'Absolutely. We can arrange factory visits for you or your team, including transportation, translation, and meeting coordination. Many clients combine factory visits with trade show trips in Guangzhou, Shenzhen, or Shanghai.',
  },
];

const Home = () => {
  const containerRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', product: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle');
  const [formError, setFormError] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);
    if (!formData.name.trim() || !formData.email.trim() || !formData.product.trim() || !formData.message.trim()) {
      setFormError('Please fill in all required fields.');
      return;
    }
    setFormStatus('submitting');
    try {
      await submitInquiry({ ...formData, source_page: 'home' });
      setFormStatus('success');
      setFormData({ name: '', email: '', company: '', product: '', message: '' });
    } catch (err) {
      setFormError(err.message || 'Submission failed. Please try again.');
      setFormStatus('error');
    }
  };

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-bg-7d34fa"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-navy-900/80" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-navy-200 leading-relaxed mb-8">
              Find reliable suppliers. Verify factories. Inspect quality. Follow production. Coordinate shipping. One partner for your entire China sourcing journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-accent-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-600 transition-colors inline-flex items-center justify-center gap-2"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:border-white hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-white py-12 border-b border-navy-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point) => (
              <div key={point.label} className="text-center">
                <point.icon className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-navy-900">{point.value}</div>
                <div className="text-sm text-navy-500 mt-1">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-navy-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Our Sourcing Services
            </h2>
            <p id="services-subtitle" className="text-lg text-navy-500 max-w-2xl mx-auto">
              End-to-end support from supplier search to delivered goods, so you can source from China with confidence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((svc) => (
              <div key={svc.title} className="bg-white rounded-xl border border-navy-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <img
                  alt={svc.title}
                  data-strk-img-id={svc.imgId}
                  data-strk-img={`[${svc.descId}] [${svc.titleId}] [services-subtitle] [services-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <svc.icon className="w-6 h-6 text-primary-500" />
                    <h3 id={svc.titleId} className="text-lg font-semibold text-navy-900">{svc.title}</h3>
                  </div>
                  <p id={svc.descId} className="text-sm text-navy-500 leading-relaxed">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:text-primary-600 transition-colors"
            >
              Learn More About Our Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 id="process-title" className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              How Our Sourcing Process Works
            </h2>
            <p id="process-subtitle" className="text-lg text-navy-500 max-w-2xl mx-auto">
              A clear, step-by-step approach that keeps you informed and in control at every stage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {processSteps.map((step) => (
              <div key={step.num} className="relative bg-navy-50 rounded-xl p-6 md:p-8 border border-navy-100">
                <div className="text-4xl font-bold text-primary-500/20 mb-4">{step.num}</div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{step.title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:text-primary-600 transition-colors"
            >
              See Full Process Details
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="bg-navy-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 id="products-title" className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Products We Source
            </h2>
            <p id="products-subtitle" className="text-lg text-navy-500 max-w-2xl mx-auto">
              From consumer electronics to industrial machinery, we connect you with verified factories across China's major manufacturing hubs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {productCategories.map((cat) => (
              <div key={cat.name} className="bg-white rounded-xl border border-navy-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <img
                  alt={cat.name}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.titleId}] [products-subtitle] [products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 id={cat.titleId} className="text-lg font-semibold text-navy-900">{cat.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:text-primary-600 transition-colors"
            >
              View All Product Categories
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 id="problems-title" className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Problems We Solve
            </h2>
            <p id="problems-subtitle" className="text-lg text-navy-500 max-w-2xl mx-auto">
              Common challenges that overseas buyers face when sourcing from China, and how we address them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {problems.map((prob) => (
              <div key={prob.title} className="bg-navy-50 rounded-xl p-6 md:p-8 border border-navy-100">
                <prob.icon className="w-8 h-8 text-accent-500 mb-4" />
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{prob.title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed">{prob.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-navy-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 id="cases-title" className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Client Results
            </h2>
            <p id="cases-subtitle" className="text-lg text-navy-500 max-w-2xl mx-auto">
              Real outcomes from clients who sourced through SSourcing China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {caseStudies.map((cs) => (
              <div key={cs.title} className="bg-white rounded-xl border border-navy-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <img
                  alt={cs.title}
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${cs.descId}] [${cs.titleId}] [cases-subtitle] [cases-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 id={cs.titleId} className="text-lg font-semibold text-navy-900 mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-sm text-navy-500 leading-relaxed mb-4">{cs.desc}</p>
                  <div className="inline-flex items-center gap-2 bg-accent-50 text-accent-600 px-3 py-1.5 rounded-full text-sm font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    {cs.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:text-primary-600 transition-colors"
            >
              Read More Case Studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-primary-500 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="why-title" className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose SSourcing China?
              </h2>
              <p id="why-subtitle" className="text-lg text-primary-100 leading-relaxed mb-8">
                We combine local expertise with international standards to give you a sourcing partner you can trust.
              </p>
              <div className="space-y-4">
                {[
                  'Based in Shenzhen, at the heart of China\'s manufacturing region',
                  'Bilingual team fluent in English and Mandarin',
                  'On-site presence at factories across major production hubs',
                  'Transparent reporting with photos, videos, and data',
                  'No hidden fees — clear pricing for every service',
                  'Flexible service packages from single inspections to full management',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-400 mt-0.5" />
                    <span className="text-sm text-primary-50 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                alt="SSourcing China team at factory"
                data-strk-img-id="home-why-team-u1v2w3"
                data-strk-img="[why-subtitle] [why-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-navy-500">
              Common questions about sourcing from China through SSourcing China.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-navy-100 rounded-xl overflow-hidden">
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-navy-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="font-semibold text-navy-900">{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-navy-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-navy-500" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4 text-sm text-navy-500 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="bg-navy-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="inquiry-title" className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Get a Free Sourcing Quote
              </h2>
              <p id="inquiry-subtitle" className="text-lg text-navy-500 leading-relaxed mb-6">
                Tell us about the product you want to source from China. Our team will respond within 24 hours with a preliminary assessment and proposal.
              </p>
              <div className="space-y-4 text-sm text-navy-500">
                <div className="flex items-center gap-3">
                  <Handshake className="w-5 h-5 text-primary-500" />
                  <span>No commitment required — initial consultation is free</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary-500" />
                  <span>Response within 24 hours on business days</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-primary-500" />
                  <span>We serve buyers from over 30 countries worldwide</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-navy-100 shadow-sm p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-1">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-navy-200 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-navy-200 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="business@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-1">Company Name</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-navy-200 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-1">Product You Want to Source</label>
                  <input
                    type="text"
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-navy-200 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Product category or description"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-1">Details / Requirements</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-navy-200 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                    placeholder="Quantity, quality standards, target price, timeline..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-accent-500 text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-accent-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? 'Submitting...' : 'Submit Your Sourcing Inquiry'}
                </button>
                {formStatus === 'success' && (
                  <p className="text-green-600 text-sm font-medium mt-3">
                    Thank you! Your inquiry has been submitted. We will respond within 24 hours.
                  </p>
                )}
                {formError && (
                  <p className="text-red-600 text-sm font-medium mt-3">{formError}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
