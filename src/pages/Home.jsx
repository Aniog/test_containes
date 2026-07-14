import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  CheckCircle, Globe, Users, Award, ArrowRight, Star,
  ChevronDown, Package, Zap, Clock
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
    desc: 'On-site factory audits to confirm production capacity, certifications, working conditions, and compliance with your standards.',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
    imgId: 'svc-factory-img-d4e5f6',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections by trained QC staff to catch defects before goods leave the factory.',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-img-g7h8i9',
  },
  {
    icon: ShieldCheck,
    title: 'Production Follow-up',
    desc: 'Regular updates and milestone checks during manufacturing to keep your order on schedule and on spec.',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-prod-img-j1k2l3',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle export documentation, and ensure your goods arrive on time.',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-ship-img-m4n5o6',
  },
  {
    icon: Package,
    title: 'Sample Management',
    desc: 'Arrange product samples from multiple suppliers, consolidate them, and ship to your location for evaluation.',
    titleId: 'svc-sample-title',
    descId: 'svc-sample-desc',
    imgId: 'svc-sample-img-p7q8r9',
  },
];

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, specs, target price, and quantity. We respond within 24 hours.' },
  { num: '02', title: 'Supplier Research', desc: 'Our team identifies and vets 3–5 qualified suppliers from our network and verified databases.' },
  { num: '03', title: 'Quotation & Samples', desc: 'We collect competitive quotes and arrange samples so you can evaluate quality before committing.' },
  { num: '04', title: 'Order & Production', desc: 'Once you confirm, we place the order, monitor production milestones, and keep you updated.' },
  { num: '05', title: 'QC Inspection', desc: 'Our inspectors visit the factory before shipment to verify quality against your specifications.' },
  { num: '06', title: 'Shipping & Delivery', desc: 'We coordinate logistics, prepare export documents, and track your shipment to destination.' },
];

const problems = [
  { icon: ShieldCheck, title: 'Unreliable Suppliers', desc: 'We pre-screen every supplier with background checks, trade records, and on-site visits.' },
  { icon: ClipboardCheck, title: 'Quality Failures', desc: 'Our QC inspections catch defects before goods ship, saving you costly returns and delays.' },
  { icon: Globe, title: 'Language Barriers', desc: 'Our bilingual team handles all supplier communication in Chinese and English.' },
  { icon: Clock, title: 'Missed Deadlines', desc: 'We track production milestones and escalate issues early to keep your timeline on track.' },
  { icon: Zap, title: 'Overpaying for Products', desc: 'Direct factory access and negotiation expertise help you get competitive pricing.' },
  { icon: Truck, title: 'Shipping Complexity', desc: 'We manage freight, customs, and documentation so you don\'t have to.' },
];

const trustPoints = [
  { value: '10+', label: 'Years in China Sourcing' },
  { value: '500+', label: 'Clients Served Globally' },
  { value: '40+', label: 'Countries Reached' },
  { value: '98%', label: 'Client Satisfaction Rate' },
];

const caseStudies = [
  {
    id: 'cs-furniture',
    industry: 'Furniture',
    title: 'US Retailer Cuts Sourcing Costs by 22%',
    desc: 'A mid-size US furniture retailer needed to diversify away from a single supplier. We identified three verified factories, negotiated pricing, and managed QC across two production runs.',
    result: '22% cost reduction, 0 defect shipments',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-s1t2u3',
  },
  {
    id: 'cs-electronics',
    industry: 'Electronics',
    title: 'EU Brand Launches Private Label Product',
    desc: 'A European consumer electronics brand needed a reliable OEM partner for a new product line. We sourced, audited, and managed production from prototype to first shipment in 14 weeks.',
    result: 'On-time delivery, CE certification secured',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-electronics-img-v4w5x6',
  },
  {
    id: 'cs-apparel',
    industry: 'Apparel',
    title: 'Australian Brand Scales Production',
    desc: 'An Australian fashion brand needed to scale from 500 to 5,000 units per SKU. We found a compliant factory, ran inline inspections, and coordinated sea freight to Melbourne.',
    result: 'Production scaled 10x, on-spec delivery',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    imgId: 'cs-apparel-img-y7z8a9',
  },
];

const faqs = [
  { q: 'What types of products can you source?', a: 'We source a wide range of products including electronics, furniture, apparel, hardware, packaging, toys, and more. If it\'s manufactured in China, we can likely help.' },
  { q: 'What is your minimum order quantity?', a: 'We work with buyers at various stages. There is no fixed MOQ on our end — we match you with suppliers whose MOQs fit your order size.' },
  { q: 'How do you verify suppliers?', a: 'We conduct background checks, review business licenses and certifications, check trade history, and perform on-site factory audits before recommending any supplier.' },
  { q: 'How long does the sourcing process take?', a: 'Initial supplier shortlisting typically takes 5–10 business days. Full production and delivery timelines depend on the product and order size, but we provide clear estimates upfront.' },
  { q: 'What are your fees?', a: 'We offer transparent, project-based pricing. Fees vary by service scope. Contact us for a free consultation and quote tailored to your needs.' },
  { q: 'Do you handle shipping and customs?', a: 'Yes. We coordinate with freight forwarders, prepare export documentation, and can arrange door-to-door delivery. We work with both sea and air freight.' },
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
      <section className="relative bg-navy overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-main-x1y2z3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-blue-200 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Globe className="w-4 h-4" />
              <span>Trusted by buyers in 40+ countries</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-red-300">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
              We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — so you can import with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors text-center"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link
                to="/how-it-works"
                className="border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors text-center"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-navy-light border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustPoints.map((tp) => (
              <div key={tp.label}>
                <div className="text-3xl font-bold text-navy">{tp.value}</div>
                <div className="text-sm text-text-muted mt-1">{tp.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-brand-red uppercase tracking-wider mb-2">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">End-to-End Sourcing Services</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              From finding the right supplier to delivering goods to your door, we manage every step of the China sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.title} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6">
                  <div className="w-12 h-12 bg-navy-light rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-navy" />
                  </div>
                  <h3 id={svc.titleId} className="text-lg font-semibold text-navy mb-2">{svc.title}</h3>
                  <p id={svc.descId} className="text-text-muted text-sm leading-relaxed">{svc.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-brand-red transition-colors">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-brand-red uppercase tracking-wider mb-2">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">How We Work With You</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              A clear, structured process from your first inquiry to final delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="text-4xl font-bold text-navy/10 mb-3">{step.num}</div>
                <h3 className="text-base font-semibold text-navy mb-2">{step.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-brand-red transition-colors">
              See Full Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-red-300 uppercase tracking-wider mb-2">Why Use a Sourcing Agent</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Problems We Help You Avoid</h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Sourcing from China without local support carries real risks. Here's how we protect your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                  <Icon className="w-8 h-8 text-red-300 mb-3" />
                  <h3 className="text-white font-semibold mb-2">{p.title}</h3>
                  <p className="text-blue-200 text-sm leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-brand-red uppercase tracking-wider mb-2">Client Results</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Case Studies</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Real projects, real outcomes. See how we've helped buyers across industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
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
                  <span className="absolute top-3 left-3 bg-navy text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {cs.industry}
                  </span>
                </div>
                <div className="p-6">
                  <h3 id={cs.titleId} className="text-base font-semibold text-navy mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-sm text-text-muted mb-4 leading-relaxed">{cs.desc}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-brand-red">
                    <CheckCircle className="w-4 h-4" />
                    {cs.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-brand-red transition-colors">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-brand-red uppercase tracking-wider mb-2">Common Questions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-semibold text-navy text-sm md:text-base">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-text-muted group-open:rotate-180 transition-transform shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-6 text-sm text-text-muted leading-relaxed border-t border-gray-50 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-brand-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China with Confidence?
          </h2>
          <p className="text-lg text-red-100 mb-8 max-w-2xl mx-auto">
            Tell us what you need and we'll get back to you within 24 hours with a tailored sourcing plan.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white hover:bg-gray-50 text-brand-red font-bold px-10 py-4 rounded-lg text-base transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
