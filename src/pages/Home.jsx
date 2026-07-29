import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  Star, CheckCircle, ArrowRight, Globe, Users, Award, Clock,
  ChevronDown, MessageSquare, Package, BarChart3
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified manufacturers that match your product specs, MOQ, and budget.',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-sourcing-img-a1b2c3',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site audits to confirm factory capabilities, certifications, and production standards before you commit.',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
    imgId: 'svc-factory-img-d4e5f6',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections by our QC team to catch defects before goods leave the factory.',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-img-g7h8i9',
  },
  {
    icon: BarChart3,
    title: 'Production Follow-up',
    desc: 'Regular updates and milestone tracking so you always know where your order stands.',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-prod-img-j1k2l3',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate freight, customs documentation, and delivery to your warehouse or port.',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-ship-img-m4n5o6',
  },
  {
    icon: Package,
    title: 'Private Label & OEM',
    desc: 'Support for custom branding, packaging design, and OEM production with trusted factories.',
    titleId: 'svc-oem-title',
    descId: 'svc-oem-desc',
    imgId: 'svc-oem-img-p7q8r9',
  },
];

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, specs, quantity, and target price.' },
  { num: '02', title: 'Supplier Research', desc: 'We search our network and identify 3–5 qualified manufacturers for your review.' },
  { num: '03', title: 'Factory Audit', desc: 'We visit shortlisted factories to verify capabilities, certifications, and reliability.' },
  { num: '04', title: 'Sample & Negotiation', desc: 'We arrange samples and negotiate pricing, MOQ, and lead times on your behalf.' },
  { num: '05', title: 'Production & QC', desc: 'We monitor production progress and conduct quality inspections at key milestones.' },
  { num: '06', title: 'Shipping & Delivery', desc: 'We coordinate freight, handle documentation, and ensure on-time delivery.' },
];

const problems = [
  { title: 'Unreliable Suppliers', desc: 'We pre-screen and audit every factory before recommending them to you.' },
  { title: 'Quality Surprises', desc: 'Our QC team inspects goods before shipment — no more receiving defective products.' },
  { title: 'Communication Barriers', desc: 'We bridge language and cultural gaps so nothing gets lost in translation.' },
  { title: 'Shipping Delays', desc: 'We track production and coordinate logistics to keep your supply chain on schedule.' },
  { title: 'Overpaying for Products', desc: 'We negotiate directly with factories to get you competitive pricing.' },
  { title: 'No Local Presence', desc: 'Our team is on the ground in China — available to visit factories when needed.' },
];

const trustPoints = [
  { icon: Globe, value: '30+', label: 'Countries Served' },
  { icon: Factory, value: '500+', label: 'Factories Audited' },
  { icon: Users, value: '200+', label: 'Active Clients' },
  { icon: Award, value: '8+', label: 'Years Experience' },
];

const caseStudies = [
  {
    id: 'electronics-buyer',
    category: 'Electronics',
    title: 'US Electronics Retailer Cuts Sourcing Costs by 22%',
    desc: 'A US-based electronics retailer needed a reliable supplier for Bluetooth accessories. We identified 4 qualified factories, conducted audits, and negotiated a 22% cost reduction.',
    result: '22% cost reduction',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-electronics-img-s1t2u3',
  },
  {
    id: 'furniture-buyer',
    category: 'Furniture',
    title: 'European Furniture Brand Achieves Zero Defect Rate',
    desc: 'A German furniture importer struggled with quality inconsistencies. Our in-line and pre-shipment inspections reduced defect rates to near zero over 6 months.',
    result: '0% defect rate',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-v4w5x6',
  },
  {
    id: 'apparel-buyer',
    category: 'Apparel',
    title: 'Australian Fashion Brand Launches Private Label Line',
    desc: 'We helped an Australian fashion startup source OEM manufacturers, develop samples, and manage production for their first private label collection.',
    result: 'On-time delivery',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    imgId: 'cs-apparel-img-y7z8a9',
  },
];

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work. We offer a free initial consultation and quote. Typical services include a sourcing fee, factory audit fee, and QC inspection fee — all clearly outlined before you commit.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'A standard sourcing project takes 2–4 weeks from inquiry to supplier shortlist. Factory audits add 1–2 weeks. Total timeline from inquiry to first shipment is typically 6–12 weeks depending on product complexity.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with buyers of all sizes, from startups placing their first order to established importers managing multiple product lines. We tailor our services to your needs and budget.',
  },
  {
    q: 'What industries do you cover?',
    a: 'We source across a wide range of categories including electronics, furniture, apparel, home goods, industrial equipment, toys, and more. If it\'s manufactured in China, we can help you source it.',
  },
  {
    q: 'Can you help if I already have a supplier?',
    a: 'Absolutely. We can audit your existing supplier, conduct quality inspections, or simply help with shipping coordination — you don\'t need to use all our services.',
  },
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
      <section className="relative bg-[#1A2332] overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-main-b1c2d3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C0392B]/20 border border-[#C0392B]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-[#C0392B] rounded-full"></span>
              <span className="text-[#C0392B] text-sm font-medium">China-Based Sourcing Agent</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-[#D4A017]">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
              We help importers worldwide find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — so you can source with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#C0392B] hover:bg-[#a93226] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-slate-500 hover:border-white text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                How It Works
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-10">
              {trustPoints.map((t) => (
                <div key={t.label} className="flex items-center gap-2">
                  <t.icon className="w-5 h-5 text-[#D4A017]" />
                  <span className="text-white font-bold">{t.value}</span>
                  <span className="text-slate-400 text-sm">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#1A3C6E] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-white/80 text-sm">
            {['ISO-Certified Factory Audits', 'Pre-Shipment QC Inspections', 'Bilingual Team (EN/ZH)', 'On-Ground China Presence', 'No Hidden Fees'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D4A017] flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C0392B] mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">End-to-End Sourcing Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From finding the right supplier to delivering goods to your door, we manage every step of the China sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div key={svc.title} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md hover:border-[#1A3C6E]/20 transition-all group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#1A3C6E] transition-colors">
                  <svc.icon className="w-6 h-6 text-[#1A3C6E] group-hover:text-white transition-colors" />
                </div>
                <h3 id={svc.titleId} className="text-lg font-semibold text-slate-900 mb-2">{svc.title}</h3>
                <p id={svc.descId} className="text-slate-600 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-[#1A3C6E] font-semibold hover:text-[#152f58] transition-colors">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C0392B] mb-3">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How We Source for You</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A structured, transparent process from your first inquiry to final delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="text-4xl font-bold text-slate-100 mb-3">{step.num}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 bg-[#1A3C6E] hover:bg-[#152f58] text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              See Full Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C0392B] mb-3">Why Work With Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">
                Common Sourcing Problems We Solve
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Sourcing from China without local support is risky. We eliminate the most common pain points that cost importers time and money.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#C0392B] hover:bg-[#a93226] text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                Talk to a Sourcing Expert <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {problems.map((p) => (
                <div key={p.title} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm mb-1">{p.title}</h4>
                      <p className="text-slate-600 text-xs leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C0392B] mb-3">Client Results</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Case Studies</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real results from real clients. See how we've helped global buyers source smarter from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group">
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#1A3C6E] text-white text-xs font-semibold px-2.5 py-1 rounded-full">{cs.category}</span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-green-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">{cs.result}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 id={cs.titleId} className="font-semibold text-slate-900 mb-2 leading-snug">{cs.title}</h3>
                  <p id={cs.descId} className="text-slate-600 text-sm leading-relaxed">{cs.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-[#1A3C6E] font-semibold hover:text-[#152f58] transition-colors">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C0392B] mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-slate-50 rounded-xl border border-slate-200 group">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-semibold text-slate-900 pr-4">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-[#1A3C6E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China with Confidence?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Tell us what you need and we'll get back to you within 24 hours with a tailored sourcing plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#C0392B] hover:bg-[#a93226] text-white font-bold px-10 py-4 rounded-lg text-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
