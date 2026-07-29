import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  ArrowRight, CheckCircle, Shield, Search, ClipboardCheck,
  Truck, Factory, Star, Users, Globe, Award, ChevronDown,
  Package, Zap, TrendingUp, MessageSquare
} from 'lucide-react';
import CTABanner from '@/components/layout/CTABanner';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified manufacturers that match your product specifications, MOQ, and budget.',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-sourcing-img-a1b2c3',
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    desc: 'On-site audits confirm factory capabilities, certifications, production capacity, and compliance standards.',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
    imgId: 'svc-factory-img-d4e5f6',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections ensure your products meet specifications before they leave China.',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-img-g7h8i9',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'We monitor production timelines, communicate with factories, and flag issues before they become problems.',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-prod-img-j1k2l3',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate freight, customs documentation, and logistics to ensure smooth delivery to your destination.',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-ship-img-m4n5o6',
  },
  {
    icon: Package,
    title: 'Private Label & OEM',
    desc: 'From product design to branded packaging, we help you build your own product line with Chinese manufacturers.',
    titleId: 'svc-oem-title',
    descId: 'svc-oem-desc',
    imgId: 'svc-oem-img-p7q8r9',
  },
];

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, quantity, target price, and destination.' },
  { num: '02', title: 'Supplier Research', desc: 'We search our network and identify 3–5 qualified manufacturers for your review.' },
  { num: '03', title: 'Factory Verification', desc: 'We audit shortlisted factories on-site or via video to confirm legitimacy and capability.' },
  { num: '04', title: 'Sampling & Approval', desc: 'Samples are arranged, inspected, and shipped to you for final approval.' },
  { num: '05', title: 'Production & QC', desc: 'We monitor production and conduct quality inspections at key milestones.' },
  { num: '06', title: 'Shipping & Delivery', desc: 'We coordinate freight, documentation, and customs clearance to your door.' },
];

const products = [
  'Electronics & Components', 'Furniture & Home Goods', 'Apparel & Textiles',
  'Industrial Equipment', 'Consumer Products', 'Packaging Materials',
  'Toys & Sporting Goods', 'Health & Beauty', 'Auto Parts',
];

const problems = [
  { icon: Shield, title: 'Unreliable Suppliers', desc: 'We verify every factory before you commit — no more scams or disappearing vendors.' },
  { icon: ClipboardCheck, title: 'Quality Failures', desc: 'Our inspectors catch defects before shipment, saving you costly returns and disputes.' },
  { icon: Globe, title: 'Language Barriers', desc: 'We communicate directly with factories in Chinese, eliminating misunderstandings.' },
  { icon: Truck, title: 'Shipping Delays', desc: 'We track production and coordinate logistics to keep your supply chain on schedule.' },
  { icon: TrendingUp, title: 'Overpaying for Products', desc: 'Our local presence and supplier network help you negotiate competitive factory prices.' },
  { icon: MessageSquare, title: 'No Local Presence', desc: 'We act as your eyes and ears on the ground in China, 7 days a week.' },
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
    title: 'US Retailer Cuts Sourcing Costs by 28%',
    desc: 'A mid-size US furniture retailer needed to diversify away from a single supplier. We identified 4 verified factories, negotiated pricing, and managed QC across 3 production runs.',
    result: '28% cost reduction, 0 quality rejections',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-s1t2u3',
  },
  {
    id: 'cs-electronics',
    industry: 'Electronics',
    title: 'EU Brand Launches Private Label Product Line',
    desc: 'A European consumer electronics brand needed OEM manufacturing for a new product. We sourced the factory, managed tooling, and coordinated CE certification.',
    result: 'Product launched on schedule, full CE compliance',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-electronics-img-v4w5x6',
  },
  {
    id: 'cs-apparel',
    industry: 'Apparel',
    title: 'Australian Brand Scales Production 3x',
    desc: 'An Australian fashion brand needed to scale from 500 to 1,500 units per style. We found a factory with the right capacity and managed production follow-up across 6 months.',
    result: '3x volume increase, consistent quality maintained',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    imgId: 'cs-apparel-img-y7z8a9',
  },
];

const faqs = [
  { q: 'How much does your sourcing service cost?', a: 'We offer flexible pricing models including a flat project fee, a percentage of order value, or a monthly retainer for ongoing sourcing. Contact us for a tailored quote based on your needs.' },
  { q: 'How long does it take to find a supplier?', a: 'For standard products, we typically present shortlisted suppliers within 5–10 business days. Complex or custom products may take 2–3 weeks depending on specifications.' },
  { q: 'Do you work with small businesses and startups?', a: 'Yes. We work with buyers of all sizes, from startups placing their first order to established brands managing multiple product lines.' },
  { q: 'Can you handle shipping and customs?', a: 'Yes. We coordinate with freight forwarders, prepare export documentation, and can assist with customs clearance in most major markets.' },
  { q: 'What if the product quality is not acceptable?', a: 'We conduct pre-shipment inspections and will work with the factory to resolve issues before goods leave China. If problems arise post-shipment, we assist with claims and resolution.' },
  { q: 'Which regions of China do you cover?', a: 'We operate across all major manufacturing hubs including Guangdong, Zhejiang, Jiangsu, Shandong, and Fujian provinces.' },
];

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative bg-brand-navy overflow-hidden min-h-[600px] flex items-center">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-main-b1c2d3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/40 text-brand-gold px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              Trusted by buyers in 30+ countries
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-brand-gold">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — all from one trusted partner on the ground.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-yellow-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                How It Works
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-10">
              {['No upfront commitment', 'On-the-ground team in China', 'English-speaking project managers'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-brand-blue py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustPoints.map((tp) => (
              <div key={tp.label}>
                <div className="text-3xl md:text-4xl font-bold text-white">{tp.value}</div>
                <div className="text-blue-200 text-sm mt-1">{tp.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-brand-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-brand-blue font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-2 mb-4">
              End-to-End China Sourcing Services
            </h2>
            <p className="text-brand-gray max-w-2xl mx-auto">
              From finding the right factory to delivering goods to your warehouse, we manage every step of the sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.title} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <h3 id={svc.titleId} className="font-semibold text-brand-navy text-lg mb-2">{svc.title}</h3>
                  <p id={svc.descId} className="text-brand-gray text-sm leading-relaxed">{svc.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-sky transition-colors">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-brand-blue font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-2 mb-4">
              How We Source for You
            </h2>
            <p className="text-brand-gray max-w-2xl mx-auto">
              A structured, transparent process from your first inquiry to final delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="relative p-6 rounded-xl border border-gray-100 bg-brand-light hover:border-brand-blue/30 transition-colors">
                <div className="text-5xl font-bold text-brand-blue/10 absolute top-4 right-4">{step.num}</div>
                <div className="w-10 h-10 bg-brand-navy rounded-lg flex items-center justify-center mb-4">
                  <span className="text-brand-gold font-bold text-sm">{step.num}</span>
                </div>
                <h3 className="font-semibold text-brand-navy text-lg mb-2">{step.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-sky transition-colors">
              Learn More About Our Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="bg-brand-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-gold font-semibold text-sm uppercase tracking-wider">Product Categories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Products We Source
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We source across a wide range of product categories from China's major manufacturing regions.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {products.map((product) => (
              <span
                key={product}
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors cursor-default"
              >
                {product}
              </span>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center gap-2 text-brand-gold font-semibold hover:text-yellow-400 transition-colors">
              See Full Product List <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-brand-blue font-semibold text-sm uppercase tracking-wider">Why Work With Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-2 mb-4">
              Problems We Solve for Buyers
            </h2>
            <p className="text-brand-gray max-w-2xl mx-auto">
              Sourcing from China comes with real challenges. Here is how we address the most common ones.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="flex gap-4 p-6 rounded-xl bg-brand-light border border-gray-100">
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-1">{p.title}</h3>
                    <p className="text-brand-gray text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-brand-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-brand-blue font-semibold text-sm uppercase tracking-wider">Client Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-2 mb-4">
              Case Studies
            </h2>
            <p className="text-brand-gray max-w-2xl mx-auto">
              Real results from real clients. Here are a few examples of how we have helped buyers source successfully from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48 bg-gray-100">
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-brand-blue text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {cs.industry}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 id={cs.titleId} className="font-bold text-brand-navy text-lg mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-brand-gray text-sm leading-relaxed mb-4">{cs.desc}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-brand-blue">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {cs.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-sky transition-colors">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-brand-blue font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-2 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer bg-white hover:bg-brand-light transition-colors list-none">
                  <span className="font-semibold text-brand-navy pr-4">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-brand-gray flex-shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-5 text-brand-gray text-sm leading-relaxed bg-brand-light">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </div>
  );
};

export default Home;
