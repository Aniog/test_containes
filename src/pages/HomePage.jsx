import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory, Star,
  ArrowRight, CheckCircle, Globe, Users, Award, TrendingUp
} from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';

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
    title: 'Factory Audit',
    desc: 'On-site factory visits to verify production capacity, certifications, and working conditions.',
    titleId: 'svc-audit-title',
    descId: 'svc-audit-desc',
    imgId: 'svc-audit-img-d4e5f6',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections to catch defects before goods leave the factory.',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-img-g7h8i9',
  },
  {
    icon: ShieldCheck,
    title: 'Production Follow-up',
    desc: 'Regular updates and milestone checks to keep your order on schedule and on spec.',
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
    icon: Globe,
    title: 'Sample Procurement',
    desc: 'We source and ship product samples so you can evaluate quality before placing a full order.',
    titleId: 'svc-sample-title',
    descId: 'svc-sample-desc',
    imgId: 'svc-sample-img-p7q8r9',
  },
];

const problems = [
  'Struggling to find reliable suppliers on Alibaba?',
  'Received goods that didn\'t match the samples?',
  'Lost money to a factory that disappeared mid-order?',
  'No visibility into production progress?',
  'Confused by Chinese shipping and customs paperwork?',
  'Paying too much because you lack local negotiation leverage?',
];

const trustPoints = [
  { icon: Award, value: '10+', label: 'Years in China Sourcing' },
  { icon: Users, value: '500+', label: 'Buyers Served Globally' },
  { icon: Factory, value: '1,200+', label: 'Factories Audited' },
  { icon: TrendingUp, value: '98%', label: 'Client Satisfaction Rate' },
];

const caseStudies = [
  {
    id: 'cs-furniture',
    buyer: 'UK Furniture Retailer',
    product: 'Solid Wood Dining Sets',
    result: 'Reduced unit cost by 22% and passed all UK safety certifications on first shipment.',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-s1t2u3',
  },
  {
    id: 'cs-electronics',
    buyer: 'US Electronics Brand',
    product: 'Wireless Earbuds',
    result: 'Identified 3 qualified factories, completed FCC compliance testing, and shipped 10,000 units on time.',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-electronics-img-v4w5x6',
  },
  {
    id: 'cs-apparel',
    buyer: 'Australian Apparel Brand',
    product: 'Sustainable Activewear',
    result: 'Sourced GOTS-certified fabric suppliers and reduced sampling time from 8 weeks to 3 weeks.',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    imgId: 'cs-apparel-img-y7z8a9',
  },
];

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'We offer a free initial consultation and sourcing quote. Our fees are typically a percentage of the order value or a flat project fee, depending on the scope. We\'ll provide a clear cost breakdown before you commit.',
  },
  {
    q: 'Do you work with small businesses and first-time importers?',
    a: 'Yes. We work with buyers of all sizes, from startups placing their first order to established brands scaling their supply chain. We tailor our service to your experience level and order volume.',
  },
  {
    q: 'How do you verify that a factory is legitimate?',
    a: 'We conduct on-site factory audits covering business licenses, production capacity, equipment, workforce, and quality management systems. We also check third-party certifications where applicable.',
  },
  {
    q: 'What happens if the goods fail quality inspection?',
    a: 'We work with the factory to resolve defects before shipment. If issues cannot be resolved, we advise you on your options including rework, partial acceptance, or cancellation — protecting your interests throughout.',
  },
  {
    q: 'Which product categories do you cover?',
    a: 'We source across most consumer and industrial categories including electronics, furniture, apparel, machinery, toys, health products, and more. Contact us to confirm your specific product.',
  },
];

export default function HomePage() {
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
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            data-strk-bg-id="hero-bg-main-b1c2d3"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
            className="w-full h-full bg-cover bg-center"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-5">
              China-Based Sourcing Agent
            </span>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-blue-200 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl">
              We help overseas buyers find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — so you can import with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#a93226] transition-colors text-base"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors text-base"
              >
                See How It Works
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-10">
              {['No upfront fees', 'Response within 24h', 'On-the-ground in China'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-blue-200 text-sm">
                  <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-border py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {trustPoints.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center">
                <Icon className="w-7 h-7 text-accent mb-2" />
                <div className="text-3xl font-bold text-primary">{value}</div>
                <div className="text-sm text-bodytext mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-lightbg py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Do"
            title="End-to-End China Sourcing Services"
            subtitle="From finding the right factory to delivering goods to your door, we manage every step of the sourcing process."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, titleId, descId, imgId }) => (
              <div key={title} className="bg-white rounded-xl border border-border p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 id={titleId} className="font-semibold text-darktext text-lg mb-2">{title}</h3>
                <p id={descId} className="text-bodytext text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-3">
                Common Challenges
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-darktext mb-6">
                Problems We Solve for Global Buyers
              </h2>
              <p className="text-bodytext mb-8 leading-relaxed">
                Sourcing from China without local expertise is risky. Language barriers, supplier fraud, quality failures, and logistics complexity cost buyers time and money every day. We eliminate these risks.
              </p>
              <ul className="space-y-3">
                {problems.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-bodytext">{p}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-8 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#152f58] transition-colors"
              >
                Talk to a Sourcing Expert
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                id="problems-img"
                data-strk-img-id="problems-img-e1f2g3"
                data-strk-img="[problems-img] China factory quality control inspection"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Quality control inspection in a Chinese factory"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="bg-lightbg py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Process"
            title="How We Source for You"
            subtitle="A structured, transparent process from your first inquiry to final delivery."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Submit Your Requirements', desc: 'Tell us what you need — product specs, quantity, target price, and timeline.' },
              { step: '02', title: 'Supplier Research & Shortlist', desc: 'We identify and vet 3–5 qualified factories that match your criteria.' },
              { step: '03', title: 'Audit, Sample & Negotiate', desc: 'We visit factories, arrange samples, and negotiate pricing on your behalf.' },
              { step: '04', title: 'QC, Production & Shipping', desc: 'We monitor production, inspect goods, and coordinate delivery to your door.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-white rounded-xl border border-border p-6 relative">
                <div className="text-5xl font-bold text-blue-100 mb-4 leading-none">{step}</div>
                <h3 className="font-semibold text-darktext text-base mb-2">{title}</h3>
                <p className="text-bodytext text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
              Full Process Details <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Client Results"
            title="Case Studies"
            subtitle="Real outcomes from buyers who trusted us to manage their China sourcing."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map(({ id, buyer, product, result, titleId, descId, imgId }) => (
              <div key={id} className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[3x2] overflow-hidden">
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">{buyer}</span>
                  <h3 id={titleId} className="font-semibold text-darktext text-lg mt-1 mb-2">{product}</h3>
                  <p id={descId} className="text-bodytext text-sm leading-relaxed">{result}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-lightbg py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Answers to the most common questions from buyers new to China sourcing."
          />
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-semibold text-darktext mb-2">{q}</h3>
                <p className="text-bodytext text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
