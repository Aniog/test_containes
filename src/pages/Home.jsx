import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Clock,
  DollarSign,
  Globe,
  ChevronDown,
  ChevronUp,
  Package,
  Cpu,
  Shirt,
  Sofa,
  Wrench,
  Lightbulb,
  Stethoscope,
  Hammer,
} from 'lucide-react';

const serviceCards = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist reliable manufacturers matched to your product specifications, budget, and volume requirements.',
    imgId: 'service-supplier-sourcing',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site audits and background checks to confirm legal registration, production capacity, and export experience.',
    imgId: 'service-factory-verification',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment, during-production, and container-loading inspections to catch defects before goods leave China.',
    imgId: 'service-quality-inspection',
  },
  {
    icon: Factory,
    title: 'Production Follow-Up',
    desc: 'Weekly progress reports, sample approvals, and deadline monitoring to keep your order on track.',
    imgId: 'service-production-followup',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    desc: 'We handle customs documentation, freight forwarding, and delivery scheduling to your warehouse or Amazon FBA.',
    imgId: 'service-shipping-coordination',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Submit Your Requirements',
    desc: 'Share product specs, target price, and order volume. We review within 24 hours.',
  },
  {
    step: '02',
    title: 'We Source & Verify',
    desc: 'We identify 3–5 qualified suppliers and conduct factory audits before you commit.',
  },
  {
    step: '03',
    title: 'Negotiate & Sample',
    desc: 'We negotiate pricing, MOQ, and lead times, then coordinate sample delivery for your approval.',
  },
  {
    step: '04',
    title: 'Place Order & Monitor',
    desc: 'After your PO, we follow production weekly and conduct quality inspections at key milestones.',
  },
  {
    step: '05',
    title: 'Ship & Deliver',
    desc: 'We arrange freight, handle export docs, and track shipment until it reaches your door.',
  },
];

const productCategories = [
  { icon: Package, name: 'Consumer Electronics', desc: 'Mobile accessories, chargers, cables, smart home devices, audio equipment.' },
  { icon: Cpu, name: 'Industrial Components', desc: 'Machinery parts, hardware, fasteners, bearings, valves, and tooling.' },
  { icon: Shirt, name: 'Apparel & Textiles', desc: 'Clothing, bags, fabrics, footwear, and fashion accessories.' },
  { icon: Sofa, name: 'Furniture & Home Goods', desc: 'Indoor and outdoor furniture, lighting, kitchenware, and décor.' },
  { icon: Wrench, name: 'Tools & Hardware', desc: 'Power tools, hand tools, safety equipment, and building materials.' },
  { icon: Lightbulb, name: 'LED & Lighting', desc: 'LED bulbs, strips, commercial lighting, and custom lighting fixtures.' },
  { icon: Stethoscope, name: 'Medical & PPE', desc: 'Disposable medical supplies, personal protective equipment, and health products.' },
  { icon: Hammer, name: 'Construction Materials', desc: 'Tiles, flooring, sanitary ware, windows, doors, and building finishes.' },
];

const problems = [
  {
    icon: AlertTriangle,
    title: 'Supplier Scams & Fake Factories',
    desc: 'Many buyers lose deposits to trading companies posing as manufacturers. We verify real factory credentials with on-site visits.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs & Price Creep',
    desc: 'Quotes often omit tooling, packaging, or shipping fees. We negotiate all-in pricing with no surprises.',
  },
  {
    icon: Clock,
    title: 'Missed Deadlines & Delays',
    desc: 'Without local oversight, production slips go unnoticed. Our weekly reports catch delays early and push for recovery.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Issues on Arrival',
    desc: 'Defective batches discovered too late are expensive to return. We inspect before shipment, not after.',
  },
];

const trustPoints = [
  { number: '10+', label: 'Years in China Sourcing' },
  { number: '500+', label: 'Verified Supplier Network' },
  { number: '200+', label: 'Buyers Served Worldwide' },
  { number: '98%', label: 'On-Time Delivery Rate' },
];

const caseStudies = [
  {
    title: 'US Retail Chain — LED Lighting',
    desc: 'Sourced 50,000 LED fixtures across 12 SKUs, reduced unit cost by 18%, and achieved zero-defect delivery within 90 days.',
    imgId: 'case-led-lighting',
  },
  {
    title: 'EU E-commerce Brand — Kitchenware',
    desc: 'Found a new manufacturer after a previous supplier failed inspection. Re-launched product line with improved quality and packaging.',
    imgId: 'case-kitchenware',
  },
  {
    title: 'Australian Importer — Industrial Tools',
    desc: 'Consolidated orders from 4 suppliers into 2 verified factories, cutting logistics costs by 22% and improving lead-time consistency.',
    imgId: 'case-industrial-tools',
  },
];

const faqs = [
  {
    q: 'What does SSourcing China charge?',
    a: 'We typically charge a percentage of the order value or a fixed project fee, depending on complexity and volume. Our first consultation and quote are free.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'For standard products, we present 3–5 verified options within 5–7 business days. Custom or specialized items may take 10–14 days.',
  },
  {
    q: 'Do you work with small businesses or startups?',
    a: 'Yes. We adapt our approach to your order size. Even if your first order is small, we help you build a reliable supply chain for growth.',
  },
  {
    q: 'Can you help with Amazon FBA shipments?',
    a: 'Absolutely. We coordinate labeling, carton requirements, and direct-to-FBA freight forwarding for Amazon sellers globally.',
  },
  {
    q: 'What if the supplier fails inspection?',
    a: 'We work with the factory on rework or replacement at their cost. If issues are systemic, we pivot to a backup supplier from our network.',
  },
];

function FAQItem({ item }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border-b border-neutral-lightgray last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-semibold text-neutral-nearblack pr-4">{item.q}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-primary shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-primary shrink-0" />
        )}
      </button>
      {open && (
        <p className="text-neutral-mediumgray pb-5 text-sm leading-relaxed">{item.a}</p>
      )}
    </div>
  );
}

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-neutral-offwhite overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          data-strk-bg-id="hero-bg-ssourcing"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="container relative z-10 py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <span className="inline-block bg-primary-light text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
              Trusted China Sourcing Since 2014
            </span>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-nearblack mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-neutral-mediumgray mb-8 leading-relaxed max-w-2xl">
              We help overseas businesses find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — all from our office in Shanghai.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-md text-base font-semibold transition-colors text-center inline-block"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link
                to="/how-it-works"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-md text-base font-semibold transition-colors text-center inline-block"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary text-xs font-semibold uppercase tracking-wider">Our Services</span>
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-neutral-nearblack mt-2 mb-4">
              End-to-End Sourcing Support
            </h2>
            <p className="text-neutral-mediumgray">
              From the first supplier search to the final container delivery, we handle the details so you can focus on growing your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((s, i) => (
              <div
                key={i}
                className="bg-white border border-neutral-lightgray rounded-lg p-8 hover:shadow-lg transition-shadow group"
              >
                <div className="w-14 h-14 bg-primary-light rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <s.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-nearblack mb-3">{s.title}</h3>
                <p className="text-neutral-mediumgray text-sm leading-relaxed mb-4">{s.desc}</p>
                <img
                  data-strk-img-id={s.imgId}
                  data-strk-img={`[services-title] [service-${i}-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={s.title}
                  className="w-full h-40 object-cover rounded-md"
                  id={`service-${i}-title`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="section-padding bg-neutral-offwhite">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary text-xs font-semibold uppercase tracking-wider">Sourcing Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-nearblack mt-2 mb-4">
              How We Work
            </h2>
            <p className="text-neutral-mediumgray">
              A transparent, step-by-step process designed to minimize risk and keep you informed at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((p, i) => (
              <div key={i} className="relative text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {p.step}
                </div>
                <h3 className="text-base font-semibold text-neutral-nearblack mb-2">{p.title}</h3>
                <p className="text-sm text-neutral-mediumgray leading-relaxed">{p.desc}</p>
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary-light" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary text-xs font-semibold uppercase tracking-wider">Products</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-nearblack mt-2 mb-4">
              Products We Source
            </h2>
            <p className="text-neutral-mediumgray">
              Our supplier network covers a wide range of categories. If you do not see yours listed, contact us — we have likely sourced it before.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((cat, i) => (
              <div
                key={i}
                className="bg-neutral-offwhite rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <cat.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-neutral-nearblack mb-2">{cat.name}</h3>
                <p className="text-sm text-neutral-mediumgray leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section-padding bg-primary-dark text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-primary-light text-xs font-semibold uppercase tracking-wider">Why Buyers Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                Problems We Solve
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                Sourcing from China without local support exposes your business to significant risk. Here are the most common problems our clients faced before working with us — and how we fix them.
              </p>
              <Link
                to="/contact"
                className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-md text-base font-semibold transition-colors inline-block"
              >
                Get a Free Sourcing Quote
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {problems.map((p, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <p.icon className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {trustPoints.map((tp, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{tp.number}</div>
                <div className="text-sm text-neutral-mediumgray">{tp.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="section-padding bg-neutral-offwhite">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
            <div className="max-w-2xl">
              <span className="text-primary text-xs font-semibold uppercase tracking-wider">Case Studies</span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-nearblack mt-2 mb-4">
                Results Our Clients See
              </h2>
              <p className="text-neutral-mediumgray">
                Real outcomes from real sourcing projects. Each case demonstrates how we reduce cost, improve quality, and protect buyers from common pitfalls.
              </p>
            </div>
            <Link
              to="/case-studies"
              className="text-primary font-semibold hover:text-primary-dark flex items-center gap-2 shrink-0"
            >
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[case-${i}-desc] [case-${i}-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cs.title}
                  className="w-full h-48 object-cover"
                  id={`case-${i}-title`}
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-neutral-nearblack mb-2">{cs.title}</h3>
                  <p className="text-sm text-neutral-mediumgray leading-relaxed" id={`case-${i}-desc`}>
                    {cs.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container max-w-3xl">
          <div className="text-center mb-14">
            <span className="text-primary text-xs font-semibold uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-nearblack mt-2 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-mediumgray">
              Quick answers to common questions about our sourcing process, pricing, and capabilities.
            </p>
          </div>

          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} item={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Source from China?
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                Tell us what you need. We will review your requirements and send a free, no-obligation sourcing proposal within 24 hours.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Free initial consultation and quote',
                  'No upfront fees to start the search',
                  'Transparent pricing with no hidden costs',
                  'Dedicated account manager',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-md text-base font-semibold transition-colors inline-block"
              >
                Get a Free Sourcing Quote
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-neutral-nearblack mb-6">Quick Inquiry</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you for your inquiry. We will contact you within 24 hours.');
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-darkgray mb-1">Name</label>
                    <input
                      type="text"
                      required
                      className="w-full border border-neutral-lightgray rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-darkgray mb-1">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full border border-neutral-lightgray rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-darkgray mb-1">Product Description</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full border border-neutral-lightgray rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Describe the product, quantity, target price, and any special requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-dark text-white py-3 rounded-md text-base font-semibold transition-colors"
                >
                  Submit Inquiry
                </button>
                <p className="text-xs text-neutral-mediumgray text-center">
                  We respect your privacy. Your information will not be shared with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
