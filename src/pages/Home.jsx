import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory, Star,
  CheckCircle, ArrowRight, ChevronDown, Globe, Users, Package, Award
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified Chinese manufacturers that match your product specs, MOQ, and budget.',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-sourcing-img-a1b2c3',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site audits confirm that factories are legitimate, capable, and compliant before you commit to an order.',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
    imgId: 'svc-factory-img-d4e5f6',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections catch defects early, protecting your brand and reducing returns.',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-img-g7h8i9',
  },
  {
    icon: ShieldCheck,
    title: 'Production Follow-up',
    desc: 'We monitor your order from raw materials to finished goods, keeping you informed at every stage.',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-prod-img-j1k2l3',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We handle freight booking, customs documentation, and delivery tracking so goods arrive on time.',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-ship-img-m4n5o6',
  },
  {
    icon: Package,
    title: 'Private Label / OEM',
    desc: 'From product design to branded packaging, we help you build your own product line with Chinese manufacturers.',
    titleId: 'svc-oem-title',
    descId: 'svc-oem-desc',
    imgId: 'svc-oem-img-p7q8r9',
  },
];

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, quantity, target price, and any specific requirements.' },
  { num: '02', title: 'Supplier Research', desc: 'We search our network and verified databases to find 3–5 qualified suppliers for your product.' },
  { num: '03', title: 'Factory Audit', desc: 'We visit shortlisted factories to verify their capabilities, certifications, and production standards.' },
  { num: '04', title: 'Sample & Negotiation', desc: 'We procure samples, review quality, and negotiate pricing and terms on your behalf.' },
  { num: '05', title: 'Production Monitoring', desc: 'Once you place the order, we follow up on production milestones and conduct quality checks.' },
  { num: '06', title: 'Shipping & Delivery', desc: 'We coordinate freight, prepare export documents, and track your shipment to the destination.' },
];

const problems = [
  'Receiving goods that don\'t match the sample',
  'Dealing with unreliable or fraudulent suppliers',
  'No visibility into production progress',
  'Unexpected delays and missed deadlines',
  'Overpaying due to poor negotiation',
  'Customs and shipping complications',
];

const trustPoints = [
  { icon: Globe, value: '40+', label: 'Countries Served' },
  { icon: Users, value: '500+', label: 'Buyers Assisted' },
  { icon: Factory, value: '1,200+', label: 'Factories Audited' },
  { icon: Award, value: '8 Years', label: 'Industry Experience' },
];

const caseStudies = [
  {
    id: 'cs-furniture',
    category: 'Furniture',
    title: 'UK Retailer Cuts Sourcing Cost by 22%',
    desc: 'A UK home goods retailer needed a reliable sofa manufacturer. We audited 6 factories, negotiated pricing, and managed 3 production runs.',
    result: '22% cost reduction, zero defect rate on final inspection',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-s1t2u3',
  },
  {
    id: 'cs-electronics',
    category: 'Electronics',
    title: 'US Brand Launches Private Label Earbuds',
    desc: 'An American startup needed an OEM partner for wireless earbuds. We sourced the factory, managed tooling, and coordinated certification.',
    result: 'Product launched in 14 weeks, passed FCC & CE certification',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-electronics-img-v4w5x6',
  },
  {
    id: 'cs-apparel',
    category: 'Apparel',
    title: 'Australian Brand Scales Apparel Production',
    desc: 'An Australian fashion brand needed consistent quality across 5,000 units per season. We set up a QC process and supplier relationship.',
    result: 'Defect rate dropped from 8% to under 1% within two seasons',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    imgId: 'cs-apparel-img-y7z8a9',
  },
];

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work. We offer a free initial consultation and quote. Typical services are priced as a flat project fee or a percentage of order value.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with buyers of all sizes, from startups placing their first order to established brands managing multiple product lines.',
  },
  {
    q: 'How do you verify that a factory is legitimate?',
    a: 'We conduct on-site audits covering business licenses, production capacity, equipment, workforce, and quality management systems. We also check third-party certifications.',
  },
  {
    q: 'Can you help with custom or OEM products?',
    a: 'Absolutely. We have experience managing OEM and private label projects, including product design, tooling, sampling, and branded packaging.',
  },
  {
    q: 'What product categories do you cover?',
    a: 'We source across most consumer and industrial categories including electronics, furniture, apparel, machinery, toys, health products, and more.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'A typical sourcing project from inquiry to first shipment takes 6–12 weeks depending on product complexity, sampling rounds, and production lead time.',
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
      <section className="relative bg-brand-navy text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-main-b1c2d3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 px-3 py-1.5 rounded-full text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              Trusted by buyers in 40+ countries
            </div>
            <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white">
              China Sourcing Agent<br />
              <span className="text-brand-accent">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
              We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — so you can import with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-accent text-white px-7 py-3.5 rounded font-semibold text-base hover:bg-amber-600 transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded font-semibold text-base hover:bg-white/10 transition-colors"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {trustPoints.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center text-center">
                <Icon className="w-6 h-6 text-brand-blue mb-2" />
                <span className="text-2xl font-extrabold text-brand-navy">{value}</span>
                <span className="text-sm text-brand-muted mt-0.5">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-brand-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-navy mb-4">Our Sourcing Services</h2>
            <p className="text-brand-muted text-lg max-w-2xl mx-auto">
              End-to-end support from supplier search to delivery, tailored to your product and market.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, titleId, descId }) => (
              <div key={title} className="bg-white rounded-xl p-6 border border-brand-border hover:shadow-md transition-shadow">
                <div className="w-11 h-11 bg-brand-light rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-brand-blue" />
                </div>
                <h3 id={titleId} className="text-brand-navy font-bold text-lg mb-2">{title}</h3>
                <p id={descId} className="text-brand-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-navy transition-colors"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems we solve */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-navy mb-4">
                Common Problems We Solve
              </h2>
              <p className="text-brand-muted text-lg mb-8">
                Importing from China without local support is risky. These are the issues our clients faced before working with us.
              </p>
              <ul className="space-y-3">
                {problems.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-brand-navy text-sm">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded font-semibold hover:bg-brand-navy transition-colors"
                >
                  Talk to a Sourcing Expert
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <img
                id="problems-img"
                data-strk-img-id="problems-img-e1f2g3"
                data-strk-img="[problems-section-title] factory quality control inspection China"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Quality control inspection in a Chinese factory"
                className="w-full h-full object-cover"
              />
              <span id="problems-section-title" className="sr-only">Quality control inspection China factory</span>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-brand-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-navy mb-4">How the Sourcing Process Works</h2>
            <p className="text-brand-muted text-lg max-w-2xl mx-auto">
              A structured, transparent process from your first inquiry to goods arriving at your door.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="bg-white rounded-xl p-6 border border-brand-border">
                <div className="text-4xl font-extrabold text-brand-border mb-3">{step.num}</div>
                <h3 className="text-brand-navy font-bold text-base mb-2">{step.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-navy transition-colors"
            >
              See the full process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-navy mb-4">Client Case Studies</h2>
            <p className="text-brand-muted text-lg max-w-2xl mx-auto">
              Real results from real buyers. Here's how we've helped businesses source successfully from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="rounded-xl border border-brand-border overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden">
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
                <div className="p-5">
                  <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider">{cs.category}</span>
                  <h3 id={cs.titleId} className="text-brand-navy font-bold text-base mt-1 mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-brand-muted text-sm leading-relaxed mb-3">{cs.desc}</p>
                  <div className="flex items-start gap-2 bg-brand-light rounded p-2.5">
                    <Star className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                    <span className="text-brand-navy text-xs font-medium">{cs.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-navy transition-colors"
            >
              View all case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-light py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-navy mb-4">Frequently Asked Questions</h2>
            <p className="text-brand-muted text-lg">Answers to the questions buyers ask most often.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="bg-white rounded-xl border border-brand-border group">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none font-semibold text-brand-navy text-sm">
                  {faq.q}
                  <ChevronDown className="w-4 h-4 text-brand-muted group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-4 text-brand-muted text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-blue py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
            Ready to Source from China?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Submit your sourcing inquiry and receive a free consultation within 24 hours. No commitment required.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-accent text-white px-8 py-4 rounded font-bold text-base hover:bg-amber-600 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
