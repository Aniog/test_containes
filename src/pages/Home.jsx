import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { 
  Search, ShieldCheck, ClipboardCheck, Truck, Factory, 
  CheckCircle, ArrowRight, Star, Users, Package, Globe,
  AlertTriangle, Clock, DollarSign, MessageSquare
} from 'lucide-react';

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

const HeroSection = () => (
  <section className="relative bg-brand-navy overflow-hidden">
    <div
      className="absolute inset-0 opacity-20"
      data-strk-bg-id="hero-bg-main-7f3a2b"
      data-strk-bg="[hero-subtitle] [hero-title]"
      data-strk-bg-ratio="16x9"
      data-strk-bg-width="1600"
    />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-900/50 rounded-full mb-6">
          <Globe className="w-4 h-4 text-brand-orange" />
          <span className="text-blue-200 text-sm font-medium">Trusted by 500+ global buyers</span>
        </div>
        <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
          China Sourcing Agent for Global Buyers
        </h1>
        <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
          We help overseas businesses find reliable Chinese suppliers, verify factories, 
          inspect quality, follow production, and coordinate shipping — so you can import with confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors no-underline text-base"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/how-it-works"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-slate-400 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors no-underline text-base"
          >
            See How It Works
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const TrustBar = () => (
  <section className="bg-white border-b border-brand-border py-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl font-bold text-brand-blue">10+</span>
          <span className="text-sm text-brand-muted mt-1">Years Experience</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl font-bold text-brand-blue">500+</span>
          <span className="text-sm text-brand-muted mt-1">Global Clients</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl font-bold text-brand-blue">2,000+</span>
          <span className="text-sm text-brand-muted mt-1">Verified Suppliers</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl font-bold text-brand-blue">98%</span>
          <span className="text-sm text-brand-muted mt-1">Client Satisfaction</span>
        </div>
      </div>
    </div>
  </section>
);

const services = [
  { icon: Search, title: 'Supplier Sourcing', desc: 'We identify and shortlist qualified manufacturers matching your product specs, MOQ, and budget requirements.' },
  { icon: Factory, title: 'Factory Verification', desc: 'On-site factory audits to verify production capacity, certifications, equipment, and business legitimacy.' },
  { icon: ClipboardCheck, title: 'Quality Inspection', desc: 'Pre-production, during-production, and pre-shipment inspections following AQL standards.' },
  { icon: Clock, title: 'Production Follow-up', desc: 'Regular production monitoring to ensure timelines, specs, and quality standards are maintained.' },
  { icon: Truck, title: 'Shipping Coordination', desc: 'End-to-end logistics management including freight booking, customs documentation, and delivery tracking.' },
  { icon: ShieldCheck, title: 'Contract & Negotiation', desc: 'We negotiate pricing, payment terms, and contracts to protect your interests as a foreign buyer.' },
];

const ServicesSection = () => (
  <section className="py-16 md:py-24 bg-brand-light">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-text tracking-tight mb-4">
          End-to-End Sourcing Services
        </h2>
        <p className="text-brand-muted text-lg max-w-2xl mx-auto">
          From finding the right supplier to delivering goods at your door — we handle every step of the China sourcing process.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-brand-border p-6 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <service.icon className="w-6 h-6 text-brand-blue" />
            </div>
            <h3 className="text-lg font-semibold text-brand-text mb-2">{service.title}</h3>
            <p className="text-brand-muted text-sm leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/services" className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-blue-700 no-underline transition-colors">
          View All Services <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

const steps = [
  { num: '01', title: 'Share Your Requirements', desc: 'Tell us what you need — product specs, target price, quantity, and timeline.' },
  { num: '02', title: 'Supplier Matching', desc: 'We research and shortlist 3-5 verified suppliers that match your criteria.' },
  { num: '03', title: 'Samples & Negotiation', desc: 'We arrange samples, negotiate pricing, and finalize terms on your behalf.' },
  { num: '04', title: 'Production & QC', desc: 'We monitor production progress and conduct quality inspections at key stages.' },
  { num: '05', title: 'Shipping & Delivery', desc: 'We coordinate logistics and documentation for smooth customs clearance and delivery.' },
];

const ProcessSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-text tracking-tight mb-4">
          How Our Sourcing Process Works
        </h2>
        <p className="text-brand-muted text-lg max-w-2xl mx-auto">
          A clear, structured approach that keeps you informed and in control at every stage.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {steps.map((step, idx) => (
          <div key={idx} className="text-center md:text-left">
            <div className="text-3xl font-bold text-brand-orange mb-3">{step.num}</div>
            <h3 className="text-base font-semibold text-brand-text mb-2">{step.title}</h3>
            <p className="text-brand-muted text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/how-it-works" className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-blue-700 no-underline transition-colors">
          Learn More About Our Process <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

const productCategories = [
  'Electronics & Components', 'Home & Garden', 'Apparel & Textiles',
  'Industrial Equipment', 'Auto Parts & Accessories', 'Health & Beauty',
  'Packaging & Printing', 'Building Materials',
];

const ProductsSection = () => (
  <section className="py-16 md:py-24 bg-brand-light">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-text tracking-tight mb-4">
          Products We Source
        </h2>
        <p className="text-brand-muted text-lg max-w-2xl mx-auto">
          We source across a wide range of industries. If it's made in China, we can help you find it.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {productCategories.map((cat, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-brand-border p-5 text-center hover:shadow-md hover:border-brand-blue transition-all">
            <Package className="w-8 h-8 text-brand-blue mx-auto mb-3" />
            <span className="text-sm font-medium text-brand-text">{cat}</span>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/products" className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-blue-700 no-underline transition-colors">
          See Full Product List <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

const problems = [
  { icon: AlertTriangle, title: 'Unreliable Suppliers', desc: 'Avoid scams and low-quality manufacturers with our verified supplier network and on-site audits.' },
  { icon: ClipboardCheck, title: 'Quality Issues', desc: 'Prevent defective shipments with systematic inspections at every production stage.' },
  { icon: MessageSquare, title: 'Communication Barriers', desc: 'We bridge language and cultural gaps, ensuring your requirements are clearly understood.' },
  { icon: DollarSign, title: 'Hidden Costs', desc: 'Transparent pricing with no surprises — we help you understand true landed costs upfront.' },
];

const ProblemsSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-text tracking-tight mb-4">
          Problems We Solve
        </h2>
        <p className="text-brand-muted text-lg max-w-2xl mx-auto">
          Sourcing from China comes with real challenges. Here's how we address them.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {problems.map((problem, idx) => (
          <div key={idx} className="flex gap-4 p-6 bg-brand-light rounded-xl border border-brand-border">
            <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <problem.icon className="w-6 h-6 text-brand-orange" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-brand-text mb-1">{problem.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed">{problem.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const caseStudies = [
  {
    id: 'electronics-us',
    title: 'Electronics Retailer, USA',
    desc: 'Sourced custom LED lighting products from 3 verified factories, reducing unit cost by 22% while maintaining UL certification compliance.',
    result: '22% cost reduction',
    imgId: 'case-electronics-4a8b2c',
    titleId: 'case-electronics-us-title',
    descId: 'case-electronics-us-desc',
  },
  {
    id: 'furniture-eu',
    title: 'Furniture Brand, Germany',
    desc: 'Managed full production cycle for custom furniture line — from material sourcing to container loading inspection.',
    result: '0% defect rate on 3 shipments',
    imgId: 'case-furniture-7d9e1f',
    titleId: 'case-furniture-eu-title',
    descId: 'case-furniture-eu-desc',
  },
  {
    id: 'apparel-au',
    title: 'Apparel Startup, Australia',
    desc: 'Found and verified organic cotton suppliers, coordinated sample development, and managed first bulk production run.',
    result: 'Launch in 12 weeks',
    imgId: 'case-apparel-2c5f8a',
    titleId: 'case-apparel-au-title',
    descId: 'case-apparel-au-desc',
  },
];

const CaseStudiesSection = () => (
  <section className="py-16 md:py-24 bg-brand-light">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-text tracking-tight mb-4">
          Client Success Stories
        </h2>
        <p className="text-brand-muted text-lg max-w-2xl mx-auto">
          Real results from real sourcing projects we've managed for global buyers.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {caseStudies.map((cs) => (
          <div key={cs.id} className="bg-white rounded-xl border border-brand-border overflow-hidden hover:shadow-md transition-shadow">
            <img
              alt={cs.title}
              data-strk-img-id={cs.imgId}
              data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
              data-strk-img-ratio="16x9"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 id={cs.titleId} className="text-lg font-semibold text-brand-text mb-2">{cs.title}</h3>
              <p id={cs.descId} className="text-brand-muted text-sm leading-relaxed mb-3">{cs.desc}</p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 rounded-full">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-green-700 text-sm font-medium">{cs.result}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/case-studies" className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-blue-700 no-underline transition-colors">
          View All Case Studies <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

const faqs = [
  { q: 'What is a sourcing agent and why do I need one?', a: 'A sourcing agent acts as your local representative in China. We find suppliers, verify their legitimacy, negotiate terms, inspect quality, and coordinate shipping — saving you time, money, and risk.' },
  { q: 'How do you charge for your services?', a: 'We typically charge a service fee based on the order value (usually 5-8%), or a fixed project fee for specific services like factory audits or inspections. We provide a clear quote before starting.' },
  { q: 'How do you verify suppliers?', a: 'We conduct on-site factory visits, check business licenses, verify production capacity, review past export records, and assess quality management systems.' },
  { q: 'What if I already have a supplier but need QC support?', a: 'Absolutely. Many clients use us solely for quality inspection services. We can conduct pre-shipment inspections, during-production checks, or full-time QC placement.' },
  { q: 'Which countries do you serve?', a: 'We work with buyers from North America, Europe, Australia, the Middle East, and Southeast Asia. Our team communicates in English, and we can arrange translation for other languages.' },
];

const FAQSection = () => {
  const [openIdx, setOpenIdx] = React.useState(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-brand-muted text-lg">
            Common questions from buyers considering a China sourcing agent.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-brand-border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors border-none cursor-pointer"
              >
                <span className="text-brand-text font-medium text-sm md:text-base pr-4">{faq.q}</span>
                <span className="text-brand-muted text-xl flex-shrink-0">{openIdx === idx ? '−' : '+'}</span>
              </button>
              {openIdx === idx && (
                <div className="px-5 pb-5">
                  <p className="text-brand-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InquirySection = () => (
  <section className="py-16 md:py-24 bg-brand-navy">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
        Ready to Source from China?
      </h2>
      <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
        Tell us what you're looking for and get a free sourcing plan within 24 hours. No commitment required.
      </p>
      <Link
        to="/contact"
        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors no-underline text-lg"
      >
        Get a Free Sourcing Quote
        <ArrowRight className="w-5 h-5" />
      </Link>
      <p className="text-slate-400 text-sm mt-4">
        Average response time: under 12 hours
      </p>
    </div>
  </section>
);

export default Home;
