// SSourcing China - Home Page
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory, Star,
  CheckCircle, ArrowRight, ChevronRight, Users, Globe, Award, Clock
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified Chinese manufacturers that match your product specifications, MOQ, and budget requirements.',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-sourcing-img-a1b2c3',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site factory audits to confirm business legitimacy, production capacity, certifications, and working conditions.',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
    imgId: 'svc-factory-img-d4e5f6',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections following AQL standards to catch defects before goods leave the factory.',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-img-g7h8i9',
  },
  {
    icon: ShieldCheck,
    title: 'Production Follow-up',
    desc: 'Regular updates and on-site monitoring throughout the production cycle to keep your order on schedule.',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-prod-img-j1k2l3',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle export documentation, and ensure timely delivery to your destination.',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-ship-img-m4n5o6',
  },
  {
    icon: Star,
    title: 'Private Label & OEM',
    desc: 'From product design to branded packaging, we help you develop private label products with reliable OEM factories.',
    titleId: 'svc-oem-title',
    descId: 'svc-oem-desc',
    imgId: 'svc-oem-img-p7q8r9',
  },
];

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, quantity, target price, and any specific requirements.' },
  { num: '02', title: 'Supplier Research', desc: 'Our team searches our verified supplier network and identifies the best-fit manufacturers.' },
  { num: '03', title: 'Factory Audit', desc: 'We conduct on-site or document-based audits to verify factory credentials and capabilities.' },
  { num: '04', title: 'Sample & Approval', desc: 'Samples are arranged, inspected, and sent to you for approval before bulk production begins.' },
  { num: '05', title: 'Production & QC', desc: 'We monitor production progress and conduct quality inspections at key milestones.' },
  { num: '06', title: 'Shipping & Delivery', desc: 'We coordinate logistics, prepare export documents, and ensure your goods arrive on time.' },
];

const products = [
  'Electronics & Components', 'Furniture & Home Décor', 'Apparel & Textiles',
  'Machinery & Industrial', 'Toys & Baby Products', 'Health & Beauty',
  'Sports & Outdoor', 'Packaging & Labels', 'Auto Parts', 'LED & Lighting',
  'Hardware & Tools', 'Food & Agriculture',
];

const problems = [
  { title: 'Unreliable Suppliers', desc: 'We pre-screen and audit every supplier before recommending them, so you avoid scams and low-quality factories.' },
  { title: 'Quality Failures', desc: 'Our AQL-based inspections catch defects before shipment, protecting your brand and reducing costly returns.' },
  { title: 'Communication Barriers', desc: 'Our bilingual team handles all supplier communication in Chinese, eliminating misunderstandings.' },
  { title: 'Delayed Shipments', desc: 'We monitor production timelines and coordinate with logistics partners to keep your orders on schedule.' },
  { title: 'Hidden Costs', desc: 'We provide transparent pricing with no hidden fees, so you know exactly what you are paying for.' },
  { title: 'Compliance Risks', desc: "We verify certifications (CE, RoHS, FDA, etc.) and ensure products meet your market's regulatory requirements." },
];

const trustPoints = [
  { icon: Users, value: '500+', label: 'Global Clients Served' },
  { icon: Globe, value: '30+', label: 'Countries Covered' },
  { icon: Award, value: '10+', label: 'Years of Experience' },
  { icon: Clock, value: '98%', label: 'On-Time Delivery Rate' },
];

const caseStudies = [
  {
    id: 'cs-furniture',
    category: 'Furniture',
    title: 'US Retailer Reduces Sourcing Cost by 22%',
    desc: 'A mid-size US furniture retailer needed to diversify their supply chain. We identified three verified factories in Foshan, conducted audits, and managed production for their first order of 500 units.',
    result: '22% cost reduction, 100% on-time delivery',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-s1t2u3',
  },
  {
    id: 'cs-electronics',
    category: 'Electronics',
    title: 'European Brand Launches Private Label Product',
    desc: 'A European consumer electronics brand wanted to develop a private label wireless charger. We managed the full OEM process from design to branded packaging and CE certification.',
    result: 'Product launched in 4 months, CE certified',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-electronics-img-v4w5x6',
  },
  {
    id: 'cs-apparel',
    category: 'Apparel',
    title: 'Australian Brand Passes Quality Audit',
    desc: 'An Australian fashion brand had recurring quality issues with their existing supplier. We sourced two alternative factories, ran comparative samples, and implemented a pre-shipment inspection protocol.',
    result: 'Defect rate reduced from 8% to under 1%',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    imgId: 'cs-apparel-img-y7z8a9',
  },
];

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work — sourcing, inspection, or full project management. We offer a free initial consultation and provide a clear quote before any work begins. Many clients find our fees are offset by the savings we generate.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with businesses of all sizes, from startups placing their first order to established brands managing complex supply chains. We tailor our services to your volume and budget.',
  },
  {
    q: 'How do you verify that a factory is legitimate?',
    a: 'We conduct on-site factory audits covering business license verification, production capacity, equipment, workforce, certifications, and quality management systems. We also check trade records and references.',
  },
  {
    q: 'Can you handle shipping and customs documentation?',
    a: 'Yes. We coordinate with licensed freight forwarders, prepare all required export documents (commercial invoice, packing list, bill of lading, certificates of origin), and track shipments to your destination.',
  },
  {
    q: 'What industries do you specialize in?',
    a: 'We source across a wide range of categories including electronics, furniture, apparel, machinery, toys, health products, and more. Our team has category specialists for most major product types.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'A typical sourcing project takes 2–4 weeks from inquiry to supplier shortlist. Factory audits add 1–2 weeks. Production timelines vary by product. We provide a project timeline at the start of each engagement.',
  },
];

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0"
            data-strk-bg-id="hero-bg-main-001"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-gold rounded-full"></span>
              <span id="hero-badge">Trusted by 500+ Global Buyers</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-gold">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
              We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — so you can source with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors shadow-lg"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors border border-white/20"
              >
                How It Works
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-borderColor">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {trustPoints.map((tp) => (
              <div key={tp.label} className="flex flex-col items-center text-center">
                <tp.icon className="w-7 h-7 text-primary mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-textDark">{tp.value}</div>
                <div className="text-sm text-textMuted mt-0.5">{tp.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-bgLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-textDark mt-2 mb-4">End-to-End Sourcing Services</h2>
            <p className="text-textBody max-w-2xl mx-auto">
              From finding the right supplier to delivering goods to your door, we manage every step of the China sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div key={svc.title} className="bg-white rounded-xl border border-borderColor p-6 hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <svc.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 id={svc.titleId} className="text-lg font-semibold text-textDark mb-2">{svc.title}</h3>
                <p id={svc.descId} className="text-textBody text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-blue-700 transition-colors">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-textDark mt-2 mb-4">How We Work</h2>
            <p className="text-textBody max-w-2xl mx-auto">
              A structured, transparent process designed to reduce risk and deliver results at every stage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="relative bg-bgLight rounded-xl p-6 border border-borderColor">
                <div className="text-4xl font-bold text-primary/10 mb-3">{step.num}</div>
                <h3 className="text-lg font-semibold text-textDark mb-2">{step.title}</h3>
                <p className="text-textBody text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-blue-700 transition-colors">
              See Full Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 md:py-24 bg-bgLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Product Categories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-textDark mt-2 mb-4">Products We Source</h2>
            <p className="text-textBody max-w-2xl mx-auto">
              We source across a wide range of product categories from China's major manufacturing hubs.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {products.map((p) => (
              <div key={p} className="bg-white rounded-lg border border-borderColor px-4 py-3 flex items-center gap-2 hover:border-primary hover:shadow-sm transition-all">
                <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                <span className="text-sm font-medium text-textBody">{p}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-blue-700 transition-colors">
              Browse All Categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">Why Work With Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Problems We Solve</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Sourcing from China comes with real challenges. Here's how we help you navigate them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="bg-white/10 rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
                <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center mb-4">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Client Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-textDark mt-2 mb-4">Case Studies</h2>
            <p className="text-textBody max-w-2xl mx-auto">
              Real projects, real outcomes. See how we've helped global buyers source successfully from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-bgLight rounded-xl border border-borderColor overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">{cs.category}</span>
                  <h3 id={cs.titleId} className="text-lg font-semibold text-textDark mt-1 mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-textBody text-sm leading-relaxed mb-4">{cs.desc}</p>
                  <div className="flex items-center gap-2 bg-success/10 rounded-lg px-3 py-2">
                    <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                    <span className="text-success text-sm font-medium">{cs.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-blue-700 transition-colors">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-bgLight">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-textDark mt-2 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-borderColor p-6">
                <h3 className="text-base font-semibold text-textDark mb-2">{faq.q}</h3>
                <p className="text-textBody text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China?
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Tell us what you need and we'll get back to you within 24 hours with a tailored sourcing plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-accent hover:bg-gray-50 font-bold px-10 py-4 rounded-lg text-base transition-colors shadow-lg"
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
