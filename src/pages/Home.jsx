import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, ArrowRight,
  CheckCircle2, AlertTriangle, Globe, Factory, Package,
  ChevronDown, ChevronUp, Phone, Mail, MessageSquare,
  Users, BarChart3, Clock, Star
} from 'lucide-react';

/* ─── Hero Section ─── */
const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-navy-900 overflow-hidden">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-navy-900/85" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <p className="text-brand-blue-light font-medium text-sm uppercase tracking-wider mb-4" id="hero-subtitle">
            Reliable China Sourcing Partner
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6" id="hero-title">
            China Sourcing Agent for Global Buyers
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
            We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can import from China with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition-colors no-underline"
            >
              Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-white/20 transition-colors no-underline border border-white/20"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Services Section ─── */
const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified suppliers from our verified network based on your product requirements, target price, and quality standards.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site factory audits to verify business licenses, production capacity, quality systems, and real manufacturing capabilities before you commit.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-production, during-production, and pre-shipment inspections following international AQL standards to catch issues before they ship.',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'We monitor your orders throughout production, track milestones, and keep you informed of progress and any potential delays.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'End-to-end logistics support including freight booking, customs documentation, and door-to-door delivery coordination.',
  },
  {
    icon: Package,
    title: 'Consolidation & Repacking',
    desc: 'Combine multiple supplier shipments, repackage for compliance, and optimize container space to reduce your shipping costs.',
  },
];

const ServicesSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <p className="text-brand-blue font-medium text-sm uppercase tracking-wider mb-2">Our Services</p>
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Full-Service China Sourcing Support</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          From finding suppliers to delivering goods, we handle every step of your China sourcing journey.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="p-6 rounded-lg border border-slate-200 hover:shadow-md transition-shadow bg-white">
            <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mb-4">
              <s.icon className="w-6 h-6 text-navy-800" />
            </div>
            <h3 className="text-lg font-semibold text-navy-900 mb-2">{s.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/services" className="inline-flex items-center gap-1 text-brand-blue font-medium hover:text-blue-700 no-underline">
          View All Services <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

/* ─── Process Section ─── */
const processSteps = [
  { step: '01', title: 'Tell Us What You Need', desc: 'Share your product specifications, target price, quantity, and quality requirements.' },
  { step: '02', title: 'We Find & Verify Suppliers', desc: 'We source from our network, verify factories on-site, and send you qualified options.' },
  { step: '03', title: 'Sample & Confirm Order', desc: 'Review samples, negotiate terms, and place your order with confidence.' },
  { step: '04', title: 'We Monitor Production', desc: 'Regular updates, in-line inspections, and milestone tracking throughout production.' },
  { step: '05', title: 'Final Inspection & Ship', desc: 'Pre-shipment quality check, consolidation, and coordinated delivery to your door.' },
];

const ProcessSection = () => (
  <section className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <p className="text-brand-blue font-medium text-sm uppercase tracking-wider mb-2">How It Works</p>
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">From Inquiry to Delivery in 5 Steps</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          A clear, structured process that keeps you informed and in control at every stage.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {processSteps.map((s, i) => (
          <div key={s.step} className="relative text-center">
            {i < processSteps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-navy-200" />
            )}
            <div className="relative z-10 w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
              {s.step}
            </div>
            <h3 className="text-base font-semibold text-navy-900 mb-2">{s.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/how-it-works" className="inline-flex items-center gap-1 text-brand-blue font-medium hover:text-blue-700 no-underline">
          Learn More About Our Process <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

/* ─── Products We Source Section ─── */
const productCategories = [
  { name: 'Electronics & Components', imgId: 'prod-electronics-d4e5f6', titleId: 'prod-electronics-title', descId: 'prod-electronics-desc', desc: 'Consumer electronics, PCBs, sensors, and electronic components' },
  { name: 'Home & Garden', imgId: 'prod-home-g7h8i9', titleId: 'prod-home-title', descId: 'prod-home-desc', desc: 'Furniture, kitchenware, decor, and home improvement products' },
  { name: 'Apparel & Textiles', imgId: 'prod-apparel-j1k2l3', titleId: 'prod-apparel-title', descId: 'prod-apparel-desc', desc: 'Clothing, fabrics, accessories, and textile products' },
  { name: 'Machinery & Equipment', imgId: 'prod-machinery-m4n5o6', titleId: 'prod-machinery-title', descId: 'prod-machinery-desc', desc: 'Industrial machinery, tools, and manufacturing equipment' },
  { name: 'Auto Parts & Accessories', imgId: 'prod-auto-p7q8r9', titleId: 'prod-auto-title', descId: 'prod-auto-desc', desc: 'Automotive parts, EV components, and vehicle accessories' },
  { name: 'Packaging & Printing', imgId: 'prod-packaging-s1t2u3', titleId: 'prod-packaging-title', descId: 'prod-packaging-desc', desc: 'Custom packaging, labels, and printing solutions' },
];

const ProductsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-blue font-medium text-sm uppercase tracking-wider mb-2">Products We Source</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Sourcing Across Major Product Categories</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We work with verified manufacturers across China's key industrial regions to source a wide range of products.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((cat) => (
            <div key={cat.name} className="group rounded-lg overflow-hidden border border-slate-200 hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                <img
                  alt={cat.name}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 id={cat.titleId} className="text-base font-semibold text-navy-900 mb-1">{cat.name}</h3>
                <p id={cat.descId} className="text-slate-600 text-sm">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/products" className="inline-flex items-center gap-1 text-brand-blue font-medium hover:text-blue-700 no-underline">
            View All Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

/* ─── Problems We Solve Section ─── */
const problems = [
  { icon: AlertTriangle, title: 'Unreliable Suppliers', desc: 'We verify every factory on-site so you avoid scams, trading companies posing as manufacturers, and quality surprises.' },
  { icon: AlertTriangle, title: 'Quality Inconsistency', desc: 'Our AQL-based inspections at multiple production stages catch defects before they become your problem.' },
  { icon: AlertTriangle, title: 'Communication Barriers', desc: 'Our bilingual team bridges the language and cultural gap between you and Chinese suppliers.' },
  { icon: AlertTriangle, title: 'Production Delays', desc: 'We follow up on production schedules, identify risks early, and keep your orders on track.' },
  { icon: AlertTriangle, title: 'Shipping Complexity', desc: 'From freight booking to customs clearance, we coordinate the entire logistics chain for you.' },
  { icon: AlertTriangle, title: 'No On-the-Ground Presence', desc: 'You don\'t need to fly to China — we act as your local team with eyes on the ground.' },
];

const ProblemsSection = () => (
  <section className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <p className="text-brand-blue font-medium text-sm uppercase tracking-wider mb-2">Problems We Solve</p>
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Common Challenges When Sourcing from China</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Importing from China doesn't have to be risky. We address the most common pain points overseas buyers face.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {problems.map((p) => (
          <div key={p.title} className="p-6 rounded-lg bg-white border border-slate-200 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mb-4">
              <p.icon className="w-5 h-5 text-amber-600" />
            </div>
            <h3 className="text-base font-semibold text-navy-900 mb-2">{p.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Trust Points Section ─── */
const trustPoints = [
  { icon: Factory, value: '2,000+', label: 'Verified Suppliers' },
  { icon: Globe, value: '50+', label: 'Countries Served' },
  { icon: ClipboardCheck, value: '10,000+', label: 'Inspections Completed' },
  { icon: Users, value: '15+', label: 'Years of Experience' },
];

const TrustSection = () => (
  <section className="py-16 bg-navy-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {trustPoints.map((tp) => (
          <div key={tp.label} className="text-center">
            <tp.icon className="w-8 h-8 text-brand-blue-light mx-auto mb-3" />
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">{tp.value}</div>
            <div className="text-slate-300 text-sm">{tp.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Case Studies Section ─── */
const caseStudies = [
  {
    title: 'Electronics Importer Reduces Defect Rate by 73%',
    industry: 'Consumer Electronics',
    summary: 'A US-based electronics company was struggling with a 12% defect rate from their Chinese supplier. Our inspection program brought it down to under 3%.',
    link: '/case-studies',
  },
  {
    title: 'Furniture Retailer Cuts Lead Time by 40%',
    industry: 'Home & Garden',
    summary: 'By consolidating suppliers and implementing production tracking, we helped a European furniture retailer reduce their average lead time from 90 to 54 days.',
    link: '/case-studies',
  },
  {
    title: 'Auto Parts Buyer Avoids $200K Loss',
    industry: 'Automotive',
    summary: 'Our factory verification uncovered that a "manufacturer" was actually a trading company reselling at markup — saving the buyer from a costly mistake.',
    link: '/case-studies',
  },
];

const CaseStudiesSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <p className="text-brand-blue font-medium text-sm uppercase tracking-wider mb-2">Case Studies</p>
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Real Results for Real Buyers</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          See how we've helped companies across industries source better, reduce risk, and save money.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {caseStudies.map((cs) => (
          <div key={cs.title} className="p-6 rounded-lg border border-slate-200 hover:shadow-md transition-shadow bg-white">
            <span className="inline-block bg-navy-50 text-navy-800 text-xs font-medium px-2.5 py-1 rounded mb-4">{cs.industry}</span>
            <h3 className="text-lg font-semibold text-navy-900 mb-3">{cs.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">{cs.summary}</p>
            <Link to={cs.link} className="inline-flex items-center gap-1 text-brand-blue text-sm font-medium hover:text-blue-700 no-underline">
              Read More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/case-studies" className="inline-flex items-center gap-1 text-brand-blue font-medium hover:text-blue-700 no-underline">
          View All Case Studies <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

/* ─── FAQ Section ─── */
const faqs = [
  {
    q: 'How do you find suppliers for my product?',
    a: 'We start by understanding your product specifications, quality requirements, and target price. Then we search our database of verified suppliers, attend trade shows, and leverage our factory network in key industrial hubs across China. You receive a shortlist of 3-5 qualified suppliers with detailed profiles.',
  },
  {
    q: 'What does a factory verification include?',
    a: 'Our on-site factory verification covers business license checks, production capacity assessment, quality management system review, worker conditions, and actual manufacturing capability confirmation. We provide a detailed report with photos so you know exactly who you\'re working with.',
  },
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our sourcing services are tailored to your needs. We offer free initial consultations and transparent pricing based on the scope of work. Basic supplier matching can start from a few hundred dollars, while full-service sourcing programs are priced based on order value and complexity. Contact us for a detailed quote.',
  },
  {
    q: 'Do you work with small businesses or only large importers?',
    a: 'We work with businesses of all sizes — from startups placing their first order to established importers managing large volumes. Our services are scalable and we can tailor a package that fits your needs and budget.',
  },
  {
    q: 'What happens if quality issues are found during inspection?',
    a: 'If our inspectors find quality issues, we immediately notify you with a detailed report including photos and defect classifications. We then work with the factory to develop a corrective action plan, re-inspect after fixes are made, and ensure the issues are resolved before shipment.',
  },
  {
    q: 'Can you help with shipping and customs clearance?',
    a: 'Yes. We coordinate the entire logistics chain including freight booking (sea, air, or rail), customs documentation, compliance requirements, and door-to-door delivery. We can also consolidate shipments from multiple suppliers to save you on shipping costs.',
  },
];

const FAQItem = ({ faq }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left bg-transparent border-none cursor-pointer"
      >
        <span className="text-base font-medium text-navy-900 pr-4">{faq.q}</span>
        {open ? <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />}
      </button>
      {open && (
        <div className="pb-5 text-slate-600 text-sm leading-relaxed">
          {faq.a}
        </div>
      )}
    </div>
  );
};

const FAQSection = () => (
  <section className="py-20 bg-slate-50">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <p className="text-brand-blue font-medium text-sm uppercase tracking-wider mb-2">FAQ</p>
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Frequently Asked Questions</h2>
      </div>
      <div className="bg-white rounded-lg border border-slate-200 px-6">
        {faqs.map((faq) => (
          <FAQItem key={faq.q} faq={faq} />
        ))}
      </div>
    </div>
  </section>
);

/* ─── Inquiry Form Section ─── */
const InquirySection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-brand-blue font-medium text-sm uppercase tracking-wider mb-2">Get Started</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Request a Free Sourcing Quote</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Tell us about your sourcing needs and we'll get back to you within 24 hours with a tailored proposal. No commitment required.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
              <span className="text-slate-700 text-sm">Free initial consultation and supplier assessment</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
              <span className="text-slate-700 text-sm">Response within 24 hours on business days</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
              <span className="text-slate-700 text-sm">No obligation — we earn your trust first</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
              <span className="text-slate-700 text-sm">Confidential handling of your product information</span>
            </div>
          </div>
        </div>
        <div className="bg-slate-50 rounded-lg p-6 md:p-8 border border-slate-200">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-navy-900 mb-1">Full Name *</label>
                <input type="text" className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white text-slate-900" placeholder="John Smith" />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-900 mb-1">Company Name</label>
                <input type="text" className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white text-slate-900" placeholder="Your Company" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-navy-900 mb-1">Email *</label>
                <input type="email" className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white text-slate-900" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-900 mb-1">Phone</label>
                <input type="tel" className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white text-slate-900" placeholder="+1 234 567 890" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-900 mb-1">Product You Want to Source *</label>
              <input type="text" className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white text-slate-900" placeholder="e.g. Stainless steel water bottles" />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-900 mb-1">Estimated Quantity</label>
              <select className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white text-slate-900">
                <option value="">Select range</option>
                <option>1 - 500 units</option>
                <option>500 - 5,000 units</option>
                <option>5,000 - 50,000 units</option>
                <option>50,000+ units</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-900 mb-1">Additional Details</label>
              <textarea rows={3} className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white text-slate-900" placeholder="Tell us more about your requirements, target price, timeline, etc." />
            </div>
            <button
              type="submit"
              className="w-full bg-brand-blue text-white py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition-colors border-none cursor-pointer"
            >
              Submit Your Sourcing Request
            </button>
            <p className="text-xs text-slate-500 text-center">
              We'll respond within 24 hours. Your information is kept confidential.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
);

/* ─── Home Page ─── */
const Home = () => {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <CaseStudiesSection />
      <FAQSection />
      <InquirySection />
    </>
  );
};

export default Home;
