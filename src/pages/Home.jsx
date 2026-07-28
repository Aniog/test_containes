import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, ArrowRight,
  CheckCircle2, Globe, Users, Award, ChevronDown, ChevronUp,
  Factory, Package, BarChart3, FileCheck, Ship, Clock
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified suppliers from our verified network across China, matched to your product specifications and quality requirements.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site factory audits covering business licenses, production capacity, quality systems, and compliance certifications before you commit.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-production, during-production, and pre-shipment inspections following AQL standards to catch issues before they ship.',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'Regular production monitoring and status updates so you stay informed on timelines, delays, and milestones throughout manufacturing.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'End-to-end logistics management including freight booking, customs documentation, and door-to-door delivery coordination.',
  },
];

const processSteps = [
  { num: '01', title: 'Tell Us What You Need', desc: 'Share your product requirements, specifications, and target pricing. We assess feasibility and propose a sourcing plan.' },
  { num: '02', title: 'Supplier Matching & Verification', desc: 'We identify suitable suppliers, verify their credentials, and arrange factory audits on your behalf.' },
  { num: '03', title: 'Sample & Price Negotiation', desc: 'We coordinate sample production, compare quotes, and negotiate pricing and terms with shortlisted suppliers.' },
  { num: '04', title: 'Order Management & QC', desc: 'We place orders, monitor production, conduct inspections at key stages, and keep you updated throughout.' },
  { num: '05', title: 'Shipping & Delivery', desc: 'We arrange freight, handle customs documentation, and coordinate delivery to your warehouse or designated port.' },
];

const productCategories = [
  { name: 'Electronics & Components', imgId: 'prod-elec-a1b2c3', titleId: 'prod-elec-title', descId: 'prod-elec-desc' },
  { name: 'Home & Garden Products', imgId: 'prod-home-d4e5f6', titleId: 'prod-home-title', descId: 'prod-home-desc' },
  { name: 'Apparel & Textiles', imgId: 'prod-apparel-g7h8i9', titleId: 'prod-apparel-title', descId: 'prod-apparel-desc' },
  { name: 'Industrial & Machinery', imgId: 'prod-indust-j1k2l3', titleId: 'prod-indust-title', descId: 'prod-indust-desc' },
  { name: 'Auto Parts & Accessories', imgId: 'prod-auto-m4n5o6', titleId: 'prod-auto-title', descId: 'prod-auto-desc' },
  { name: 'Packaging & Printing', imgId: 'prod-pack-p7q8r9', titleId: 'prod-pack-title', descId: 'prod-pack-desc' },
];

const problems = [
  { icon: ShieldCheck, title: 'Unverified Suppliers', desc: 'Avoid the risk of working with factories that misrepresent their capabilities or certifications.' },
  { icon: ClipboardCheck, title: 'Quality Inconsistency', desc: 'Prevent costly quality issues with systematic inspections at every production stage.' },
  { icon: Clock, title: 'Communication Barriers', desc: 'Bridge language and time zone gaps with our bilingual team managing supplier communications.' },
  { icon: Package, title: 'Shipping Complications', desc: 'Eliminate logistics headaches with coordinated freight, documentation, and customs handling.' },
];

const trustPoints = [
  { num: '500+', label: 'Verified Suppliers' },
  { num: '12+', label: 'Years in China Sourcing' },
  { num: '30+', label: 'Countries Served' },
  { num: '98%', label: 'Client Satisfaction Rate' },
];

const caseStudies = [
  {
    id: 'cs-electronics',
    title: 'Electronics Sourcing for EU Distributor',
    desc: 'Helped a German electronics distributor find 5 verified PCB suppliers, reducing defect rates from 8% to under 1%.',
    imgId: 'cs-elec-s1t2u3',
    titleId: 'cs-elec-title',
    descId: 'cs-elec-desc',
  },
  {
    id: 'cs-furniture',
    title: 'Furniture Quality Control Program',
    desc: 'Implemented a full QC program for a US furniture brand, catching 23 critical defects before shipment over 6 months.',
    imgId: 'cs-furn-v4w5x6',
    titleId: 'cs-furn-title',
    descId: 'cs-furn-desc',
  },
  {
    id: 'cs-apparel',
    title: 'Apparel Production Management',
    desc: 'Managed end-to-end production for a UK fashion retailer across 4 factories, delivering on time with zero quality rejections.',
    imgId: 'cs-appr-y7z8a9',
    titleId: 'cs-appr-title',
    descId: 'cs-appr-desc',
  },
];

const faqs = [
  {
    q: 'What types of products can you source?',
    a: 'We source a wide range of products including electronics, home goods, apparel, industrial parts, auto components, and packaging. Our supplier network covers most manufacturing categories across China.',
  },
  {
    q: 'How do you verify suppliers?',
    a: 'We conduct on-site factory audits that verify business licenses, production capabilities, quality management systems, worker conditions, and relevant certifications such as ISO, CE, and FDA compliance.',
  },
  {
    q: 'What are your inspection standards?',
    a: 'We follow AQL (Acceptable Quality Level) standards, typically AQL 2.5 for major defects and AQL 4.0 for minor defects. We can adjust inspection levels based on your specific requirements.',
  },
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our pricing depends on the scope of work. We offer free initial consultations and provide transparent quotes based on your sourcing needs. Contact us for a detailed proposal.',
  },
  {
    q: 'Can you handle small order quantities?',
    a: 'Yes, we work with suppliers who accept smaller MOQs. We help you find the right balance between order size, pricing, and quality based on your business stage and requirements.',
  },
  {
    q: 'Do you provide after-delivery support?',
    a: 'Yes, we provide post-delivery support including quality claim assistance, supplier performance reviews, and ongoing order management for repeat purchases.',
  },
];

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border-b border-neutral-200">
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-neutral-800 pr-4">{q}</span>
        {open ? <ChevronUp className="w-5 h-5 text-neutral-400 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-neutral-400 flex-shrink-0" />}
      </button>
      {open && (
        <div className="pb-5 text-neutral-600 leading-relaxed">
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
      <section className="relative bg-neutral-800 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          data-strk-bg-id="hero-bg-7f3a2b"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-neutral-900/70 to-neutral-900/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-8">
              Find reliable suppliers. Verify factories. Inspect quality. Follow production. Coordinate shipping. We handle the entire sourcing process so you can import from China with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-600 transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-brand-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustPoints.map((tp) => (
              <div key={tp.label}>
                <div className="text-3xl md:text-4xl font-extrabold text-white">{tp.num}</div>
                <div className="text-sm md:text-base text-brand-100 mt-1">{tp.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Comprehensive Sourcing Services
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              From finding suppliers to delivering your goods, we manage every step of the China sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-neutral-50 rounded-xl p-6 md:p-8 border border-neutral-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-brand-500" />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-3">{s.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-brand-500 font-semibold hover:text-brand-600 transition-colors"
            >
              Learn More About Our Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              How Our Sourcing Process Works
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              A structured, transparent process that keeps you informed and in control at every stage.
            </p>
          </div>
          <div className="space-y-6 md:space-y-8">
            {processSteps.map((step) => (
              <div key={step.num} className="flex gap-4 md:gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.num}
                </div>
                <div className="bg-white rounded-xl p-6 border border-neutral-200 flex-1">
                  <h3 className="text-lg font-bold text-neutral-800 mb-2">{step.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-brand-500 font-semibold hover:text-brand-600 transition-colors"
            >
              View Full Process Details
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Products We Source
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              We work across a wide range of product categories, connecting you with specialized manufacturers in each field.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((cat) => (
              <div key={cat.name} className="group relative rounded-xl overflow-hidden border border-neutral-200">
                <img
                  alt={cat.name}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-48 object-cover bg-neutral-100"
                />
                <div className="p-5">
                  <h3 id={cat.titleId} className="font-bold text-neutral-800 text-lg">{cat.name}</h3>
                  <p id={cat.descId} className="text-neutral-500 text-sm mt-1">Reliable suppliers and quality manufacturing</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-brand-500 font-semibold hover:text-brand-600 transition-colors"
            >
              View All Product Categories
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Problems We Solve
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Importing from China comes with real challenges. Here is how we help you overcome them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {problems.map((p) => (
              <div key={p.title} className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200 flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                  <p.icon className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-2">{p.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Client Success Stories
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Real results from real clients. See how we have helped businesses source better from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
                <img
                  alt={cs.title}
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-48 object-cover bg-neutral-100"
                />
                <div className="p-6">
                  <h3 id={cs.titleId} className="font-bold text-neutral-800 text-lg mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-neutral-600 text-sm leading-relaxed">{cs.desc}</p>
                  <Link
                    to="/case-studies"
                    className="inline-flex items-center gap-1 text-brand-500 font-semibold text-sm mt-4 hover:text-brand-600 transition-colors"
                  >
                    Read More <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-brand-500 font-semibold hover:text-brand-600 transition-colors"
            >
              View All Case Studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Trust Points */}
      <section className="py-16 md:py-24 bg-brand-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Buyers Trust SSourcing China
            </h2>
            <p className="text-lg text-brand-100 max-w-2xl mx-auto">
              We combine local expertise with international service standards to deliver reliable sourcing results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: 'Local Presence', desc: 'Based in Guangzhou with teams across major manufacturing hubs in China.' },
              { icon: Users, title: 'Bilingual Team', desc: 'English-speaking account managers who understand both Western and Chinese business culture.' },
              { icon: Award, title: 'Proven Track Record', desc: '12+ years helping businesses from 30+ countries source from China successfully.' },
              { icon: FileCheck, title: 'Transparent Process', desc: 'Detailed reports, photo documentation, and real-time updates at every stage.' },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <item.icon className="w-8 h-8 text-accent-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-brand-100 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-neutral-500">
              Common questions about our China sourcing services.
            </p>
          </div>
          <div>
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Inquiry Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Ready to Source from China?
          </h2>
          <p className="text-lg text-neutral-500 mb-8 max-w-2xl mx-auto">
            Tell us about your product requirements and get a free sourcing quote. Our team will respond within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-600 transition-colors"
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
