import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, ArrowRight,
  CheckCircle, Star, Users, Package, Globe, ChevronRight,
  Factory, BarChart3, MessageSquare
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SectionCTA from '../components/shared/SectionCTA';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified manufacturers that match your product specs, MOQ, and budget.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site audits confirm production capacity, certifications, and working conditions before you commit.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections catch defects early, with detailed photo reports sent to you.',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'We monitor your order from raw materials to finished goods, keeping you informed at every stage.',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    desc: 'We coordinate freight, customs documentation, and delivery to your warehouse or port of choice.',
  },
  {
    icon: BarChart3,
    title: 'Price Negotiation',
    desc: 'Our local presence and market knowledge help you secure competitive pricing from reliable suppliers.',
  },
];

const problems = [
  'Struggling to find trustworthy suppliers in China?',
  'Received goods that didn\'t match the samples?',
  'No visibility into what\'s happening at the factory?',
  'Confused by shipping terms, customs, and documentation?',
  'Wasted time on suppliers who don\'t respond or deliver?',
  'Unsure how to verify a factory\'s legitimacy?',
];

const trustPoints = [
  { icon: Users, value: '200+', label: 'Global Buyers Served' },
  { icon: Package, value: '1,500+', label: 'Orders Managed' },
  { icon: Globe, value: '30+', label: 'Product Categories' },
  { icon: Star, value: '98%', label: 'Client Satisfaction Rate' },
];

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, specs, quantity, and target price.' },
  { num: '02', title: 'Supplier Matching', desc: 'We identify and vet 3–5 qualified suppliers within 3–5 business days.' },
  { num: '03', title: 'Samples & Negotiation', desc: 'We arrange samples and negotiate pricing and terms on your behalf.' },
  { num: '04', title: 'Production & QC', desc: 'We monitor production and conduct quality inspections before shipment.' },
  { num: '05', title: 'Shipping & Delivery', desc: 'We coordinate freight and ensure your goods arrive on time and intact.' },
];

const caseStudies = [
  {
    id: 'cs-furniture',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'home-cs-furniture-a1b2c3',
    category: 'Furniture',
    title: 'US Retailer Cuts Sourcing Costs by 22%',
    desc: 'A mid-size US furniture importer needed to diversify away from a single supplier. We sourced 4 verified factories, negotiated pricing, and managed QC across 3 production runs.',
    result: '22% cost reduction, zero defect shipments',
  },
  {
    id: 'cs-electronics',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'home-cs-electronics-d4e5f6',
    category: 'Electronics',
    title: 'European Brand Launches Private Label Product',
    desc: 'A European consumer electronics brand needed a reliable OEM partner for a new product line. We handled factory selection, sample development, and pre-shipment inspection.',
    result: 'On-time launch, full compliance with EU standards',
  },
  {
    id: 'cs-apparel',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    imgId: 'home-cs-apparel-g7h8i9',
    category: 'Apparel',
    title: 'Australian Brand Scales Production Safely',
    desc: 'An Australian fashion brand was scaling up but had quality issues with their existing supplier. We audited 6 factories, selected the best fit, and implemented an inspection protocol.',
    result: 'Defect rate dropped from 8% to under 1%',
  },
];

const faqs = [
  {
    q: 'How do you charge for your services?',
    a: 'We offer flexible fee structures depending on the scope of work — project-based fees, monthly retainers, or a percentage of order value. We provide a clear quote before any work begins.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'For most product categories, we can present a shortlist of 3–5 verified suppliers within 3–5 business days of receiving your inquiry.',
  },
  {
    q: 'Do you work with small orders or only large volumes?',
    a: 'We work with buyers at various stages — from first-time importers placing small trial orders to established brands managing large-volume production.',
  },
  {
    q: 'What product categories do you cover?',
    a: 'We source across 30+ categories including electronics, furniture, apparel, hardware, packaging, toys, and more. Contact us to confirm your specific product.',
  },
  {
    q: 'Can you help if I already have a supplier but need QC only?',
    a: 'Yes. We offer standalone quality inspection and production monitoring services for buyers who have existing supplier relationships.',
  },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative bg-brand-dark overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          data-strk-bg-id="hero-bg-home-x1y2z3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <span className="inline-block bg-brand-red text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
              China-Based Sourcing Agent
            </span>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent<br />for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              We help overseas buyers find reliable Chinese suppliers, verify factories,
              inspect quality, follow production, and coordinate shipping — so you can
              import with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-red text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors no-underline text-base"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-dark transition-colors no-underline text-base"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustPoints.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <Icon className="w-6 h-6 text-brand-blue mb-1" />
                <span className="text-2xl font-bold text-brand-dark">{value}</span>
                <span className="text-sm text-gray-500">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-brand-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-4">
              End-to-End Sourcing Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From finding the right supplier to delivering goods to your door, we manage
              every step of the China sourcing process on your behalf.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline no-underline"
            >
              View all services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">Common Challenges</span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-4">
                Problems We Solve for Global Buyers
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Sourcing from China without local support is risky. Language barriers,
                unreliable suppliers, and quality issues cost buyers time and money.
                We eliminate those risks.
              </p>
              <ul className="flex flex-col gap-3">
                {problems.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{p}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-8 bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors no-underline"
              >
                Talk to a Sourcing Expert <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                id="problems-img"
                data-strk-img-id="home-problems-j1k2l3"
                data-strk-img="[problems-img-desc] China factory quality inspection sourcing agent"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Quality inspection at a Chinese factory"
                className="w-full h-full object-cover"
              />
              <span id="problems-img-desc" className="sr-only">Quality control inspector checking products at a Chinese manufacturing factory</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-brand-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-4">
              How We Work With You
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A clear, structured process from your first inquiry to final delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((step, i) => (
              <div key={step.num} className="relative flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-lg mb-4 flex-shrink-0">
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] right-0 h-0.5 bg-blue-200" />
                )}
                <h3 className="font-semibold text-brand-dark text-sm mb-2">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline no-underline"
            >
              See the full process <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">Client Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-4">
              Case Studies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real outcomes from buyers who trusted us to manage their China sourcing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[3x2] overflow-hidden">
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue bg-blue-50 px-2 py-1 rounded">
                    {cs.category}
                  </span>
                  <h3 id={cs.titleId} className="font-bold text-brand-dark mt-3 mb-2 text-base">
                    {cs.title}
                  </h3>
                  <p id={cs.descId} className="text-gray-600 text-sm leading-relaxed mb-4">
                    {cs.desc}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-green-700 bg-green-50 px-3 py-2 rounded-lg">
                    <CheckCircle className="w-4 h-4" />
                    {cs.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline no-underline"
            >
              View all case studies <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-light py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-2">{faq.q}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <SectionCTA
        title="Ready to Source from China with Confidence?"
        subtitle="Submit your sourcing inquiry and receive a free consultation within 24 hours."
        buttonLabel="Get a Free Sourcing Quote"
        buttonPath="/contact"
      />
    </div>
  );
}
