import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  CheckCircle, Star, ArrowRight, ChevronRight, Globe,
  Users, Award, Clock, TrendingUp, Package, Zap, AlertTriangle
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified manufacturers that match your product specs, quality standards, and budget.',
    link: '/services#sourcing',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site audits to confirm factory capabilities, certifications, production capacity, and compliance.',
    link: '/services#verification',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment, in-line, and final inspections to ensure your products meet specifications before they leave China.',
    link: '/services#inspection',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'Regular updates and on-site monitoring to keep your production on schedule and within spec.',
    link: '/services#production',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle documentation, and ensure smooth delivery to your destination.',
    link: '/services#shipping',
  },
  {
    icon: Package,
    title: 'Private Label & OEM',
    desc: 'From product design to branded packaging, we manage the full OEM process with trusted factories.',
    link: '/services#oem',
  },
];

const process = [
  { step: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, quantity, target price, and quality requirements.' },
  { step: '02', title: 'Supplier Research', desc: 'We search our network and databases to find qualified manufacturers that match your criteria.' },
  { step: '03', title: 'Factory Audit', desc: 'We visit shortlisted factories to verify capabilities, certifications, and working conditions.' },
  { step: '04', title: 'Sample & Negotiation', desc: 'We arrange samples, review quality, and negotiate pricing and terms on your behalf.' },
  { step: '05', title: 'Production Monitoring', desc: 'We follow up during production to catch issues early and keep your order on track.' },
  { step: '06', title: 'QC & Shipment', desc: 'Final inspection before shipment, then we coordinate logistics until goods arrive at your door.' },
];

const problems = [
  { icon: AlertTriangle, title: 'Unreliable Suppliers', desc: 'Factories that overpromise and underdeliver. We verify before you commit.' },
  { icon: ShieldCheck, title: 'Quality Failures', desc: 'Goods that don\'t match samples. Our inspectors catch defects before shipment.' },
  { icon: Globe, title: 'Language Barriers', desc: 'Miscommunication leads to costly mistakes. We bridge the gap fluently.' },
  { icon: Clock, title: 'Delayed Shipments', desc: 'Production delays that disrupt your business. We monitor and escalate proactively.' },
  { icon: TrendingUp, title: 'Overpaying for Products', desc: 'Paying retail prices without leverage. We negotiate factory-direct pricing.' },
  { icon: Zap, title: 'No Local Presence', desc: 'Buying blind from overseas. We are your eyes and ears on the ground in China.' },
];

const trustPoints = [
  { value: '500+', label: 'Verified Suppliers' },
  { value: '12+', label: 'Years in China Sourcing' },
  { value: '40+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction Rate' },
];

const caseStudies = [
  {
    id: 'furniture-uk',
    category: 'Furniture & Home Decor',
    title: 'UK Retailer Cuts Sourcing Costs by 28%',
    desc: 'A UK-based furniture importer needed to reduce costs without sacrificing quality. We identified 3 verified factories, negotiated pricing, and implemented a QC protocol.',
    result: '28% cost reduction, zero defect shipments over 18 months.',
    titleId: 'cs-furniture-uk-title',
    descId: 'cs-furniture-uk-desc',
    imgId: 'cs-furniture-uk-img-a1b2c3',
  },
  {
    id: 'electronics-us',
    category: 'Electronics',
    title: 'US Brand Launches Private Label Electronics',
    desc: 'An American startup needed a reliable OEM partner for consumer electronics. We managed factory selection, sample development, and compliance testing.',
    result: 'Product launched on time, passed all FCC certifications.',
    titleId: 'cs-electronics-us-title',
    descId: 'cs-electronics-us-desc',
    imgId: 'cs-electronics-us-img-d4e5f6',
  },
  {
    id: 'clothing-au',
    category: 'Clothing & Textiles',
    title: 'Australian Brand Scales Apparel Production',
    desc: 'A growing Australian fashion brand needed to scale from 500 to 5,000 units per style. We sourced a certified factory and managed production follow-up.',
    result: 'On-time delivery, consistent quality across 12 SKUs.',
    titleId: 'cs-clothing-au-title',
    descId: 'cs-clothing-au-desc',
    imgId: 'cs-clothing-au-img-g7h8i9',
  },
];

const faqs = [
  {
    q: 'How do you verify that a factory is reliable?',
    a: 'We conduct on-site factory audits covering production capacity, quality management systems, certifications (ISO, CE, etc.), worker conditions, and financial stability. We also check trade records and references.',
  },
  {
    q: 'What is your minimum order quantity?',
    a: 'MOQ depends on the product and factory. We work with buyers at various scales — from startups placing their first order to established importers with large volumes. We\'ll advise on realistic MOQs for your product.',
  },
  {
    q: 'How much does your sourcing service cost?',
    a: 'We offer transparent pricing based on the scope of services. Some services are commission-based, others are fixed-fee. We provide a clear quote before any work begins — no hidden charges.',
  },
  {
    q: 'Can you handle shipping and customs documentation?',
    a: 'Yes. We coordinate with licensed freight forwarders for sea, air, and express shipments. We also assist with commercial invoices, packing lists, certificates of origin, and other export documents.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'A typical sourcing project takes 2–4 weeks from inquiry to confirmed supplier. Production time varies by product. We provide a realistic timeline at the start of each project.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with buyers of all sizes. Whether you\'re placing your first order or scaling an established supply chain, we tailor our services to your needs and budget.',
  },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-navy to-brand-blue text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0"
            data-strk-bg-id="hero-bg-main-x9y8z7"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <Globe className="w-4 h-4 text-brand-gold" />
              <span className="text-sm font-medium text-white/90">Trusted by buyers in 40+ countries</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-brand-gold">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              We help overseas buyers find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can import with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
              >
                How It Works
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustPoints.map((tp) => (
              <div key={tp.label}>
                <div className="text-3xl font-bold text-brand-blue">{tp.value}</div>
                <div className="text-sm text-brand-muted mt-1">{tp.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-brand-gray py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue bg-blue-50 px-3 py-1 rounded-full">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-4 mb-4">
              End-to-End China Sourcing Services
            </h2>
            <p className="text-brand-muted max-w-2xl mx-auto text-base leading-relaxed">
              From finding the right supplier to delivering goods to your warehouse, we manage every step of the sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.title} className="bg-white rounded-xl p-6 shadow-sm border border-brand-border hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-blue transition-colors">
                    <Icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-navy mb-2">{svc.title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed mb-4">{svc.desc}</p>
                  <Link to={svc.link} className="inline-flex items-center gap-1 text-brand-blue text-sm font-medium hover:gap-2 transition-all">
                    Learn more <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-navy text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-red bg-red-50 px-3 py-1 rounded-full">Common Challenges</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-4 mb-4">
              Problems We Solve for Importers
            </h2>
            <p className="text-brand-muted max-w-2xl mx-auto text-base leading-relaxed">
              Sourcing from China without local support is risky. Here's how we protect your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="flex gap-4 p-5 rounded-xl border border-brand-border hover:border-brand-blue/30 hover:bg-blue-50/30 transition-all">
                  <div className="w-10 h-10 bg-brand-navy/5 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-1">{p.title}</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="bg-brand-gray py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue bg-blue-50 px-3 py-1 rounded-full">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-4 mb-4">
              How We Source for You
            </h2>
            <p className="text-brand-muted max-w-2xl mx-auto text-base leading-relaxed">
              A structured, transparent process from your first inquiry to final delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, i) => (
              <div key={step.step} className="bg-white rounded-xl p-6 border border-brand-border relative">
                <div className="text-5xl font-bold text-brand-blue/10 absolute top-4 right-5 leading-none select-none">{step.step}</div>
                <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-sm">{step.step}</span>
                </div>
                <h3 className="font-semibold text-brand-navy mb-2">{step.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              See Full Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold bg-yellow-50 px-3 py-1 rounded-full">Case Studies</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-4 mb-4">
              Real Results for Real Buyers
            </h2>
            <p className="text-brand-muted max-w-2xl mx-auto text-base leading-relaxed">
              See how we've helped businesses across industries source smarter from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl border border-brand-border overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-brand-blue bg-blue-50 px-2 py-1 rounded-full">{cs.category}</span>
                  <h3 id={cs.titleId} className="font-semibold text-brand-navy mt-3 mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-brand-muted text-sm leading-relaxed mb-3">{cs.desc}</p>
                  <div className="flex items-start gap-2 bg-green-50 rounded-lg p-3">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-green-700 text-sm font-medium">{cs.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-brand-gray py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue bg-blue-50 px-3 py-1 rounded-full">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-4 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-brand-border">
                <h3 className="font-semibold text-brand-navy mb-2">{faq.q}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-brand-navy to-brand-blue py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China with Confidence?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Tell us what you need. We'll respond within 24 hours with a tailored sourcing plan and free quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white font-bold px-10 py-4 rounded-lg text-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
