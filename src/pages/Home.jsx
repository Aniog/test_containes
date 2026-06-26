import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory, Star,
  CheckCircle, ArrowRight, ChevronDown, ChevronUp, Globe, Users, Award, Package
} from 'lucide-react';
import CTAButton from '../components/shared/CTAButton.jsx';
import SectionHeader from '../components/shared/SectionHeader.jsx';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified Chinese manufacturers that match your product specs, MOQ, and budget.',
    id: 'svc-sourcing',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site factory audits to confirm production capacity, certifications, and working conditions before you commit.',
    id: 'svc-factory',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections by our local QC team to catch defects before goods leave China.',
    id: 'svc-qc',
  },
  {
    icon: ShieldCheck,
    title: 'Production Follow-up',
    desc: 'We monitor your order from raw materials to finished goods, keeping you updated at every stage.',
    id: 'svc-production',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders to arrange sea, air, or express shipping to your destination.',
    id: 'svc-shipping',
  },
  {
    icon: Package,
    title: 'Private Label & OEM',
    desc: 'We help you develop custom-branded products with Chinese manufacturers, from design to delivery.',
    id: 'svc-oem',
  },
];

const stats = [
  { value: '500+', label: 'Verified Suppliers', icon: Factory },
  { value: '12+', label: 'Years in China', icon: Award },
  { value: '40+', label: 'Countries Served', icon: Globe },
  { value: '2,000+', label: 'Orders Managed', icon: Package },
];

const problems = [
  'Receiving goods that don\'t match the sample',
  'Suppliers disappearing after payment',
  'No visibility into production progress',
  'Unexpected delays at customs',
  'Language and communication barriers',
  'Overpaying due to lack of market knowledge',
];

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, specs, quantity, and target price.' },
  { num: '02', title: 'Supplier Matching', desc: 'We identify 3–5 pre-vetted suppliers that fit your requirements within 48 hours.' },
  { num: '03', title: 'Quotation & Samples', desc: 'We negotiate pricing, request samples, and send you a clear comparison report.' },
  { num: '04', title: 'Factory Audit', desc: 'We visit the factory to verify capacity, certifications, and production standards.' },
  { num: '05', title: 'Order & QC', desc: 'We place the order, monitor production, and conduct quality inspections before shipment.' },
  { num: '06', title: 'Shipping & Delivery', desc: 'We coordinate logistics and keep you informed until goods arrive at your door.' },
];

const caseStudies = [
  {
    id: 'cs-electronics',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-electronics-img-a1b2c3',
    category: 'Electronics',
    title: 'US Retailer Saves 22% on LED Lighting',
    desc: 'A US-based lighting distributor needed a reliable LED supplier. We sourced 3 factories, conducted audits, and reduced unit cost by 22% vs. their previous supplier.',
    result: '22% cost reduction',
  },
  {
    id: 'cs-furniture',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-d4e5f6',
    category: 'Furniture',
    title: 'European Brand Launches Private Label Line',
    desc: 'A German home goods brand wanted to launch a private label furniture range. We managed OEM development, quality control, and sea freight to Hamburg.',
    result: 'On-time delivery, 0 defects',
  },
  {
    id: 'cs-apparel',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    imgId: 'cs-apparel-img-g7h8i9',
    category: 'Apparel',
    title: 'Australian Brand Scales Production 3x',
    desc: 'An Australian activewear brand needed to scale from 500 to 1,500 units per style. We found a compliant factory and managed production across 3 seasons.',
    result: '3x production scale-up',
  },
];

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'We offer flexible fee structures depending on the scope of work — from a flat sourcing fee to a percentage of order value. We provide a clear quote before any work begins. The initial consultation is free.',
  },
  {
    q: 'Do you work with small orders or only large volumes?',
    a: 'We work with buyers at various stages. While some factories have minimum order quantities, we can often negotiate lower MOQs for new clients. Contact us with your requirements and we\'ll advise honestly.',
  },
  {
    q: 'How do you verify that a factory is legitimate?',
    a: 'We conduct on-site factory audits covering business licenses, production capacity, equipment, workforce, and certifications. We also check trade records and references where available.',
  },
  {
    q: 'What product categories do you cover?',
    a: 'We source across a wide range of categories including electronics, furniture, apparel, hardware, packaging, toys, and more. See our Products page for a full list.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Initial supplier shortlisting typically takes 3–5 business days. Full sourcing including samples and factory audit can take 2–4 weeks depending on product complexity.',
  },
  {
    q: 'Can you help if I already have a supplier but need QC only?',
    a: 'Yes. We offer standalone quality inspection and production monitoring services. You don\'t need to use our full sourcing service to benefit from our QC team.',
  },
];

const trustPoints = [
  { icon: ShieldCheck, title: 'No Hidden Fees', desc: 'Transparent pricing with a clear scope of work before we start.' },
  { icon: Globe, title: 'English-Speaking Team', desc: 'Our team communicates clearly in English — no translation barriers.' },
  { icon: Users, title: 'Local Presence', desc: 'We are based in China, not a remote desk operation. We visit factories in person.' },
  { icon: Star, title: 'Honest Assessments', desc: 'We tell you when a supplier is not suitable, even if it means more work for us.' },
];

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e2e8f0]">
      <button
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-[#1a2e4a] pr-4">{q}</span>
        {open ? <ChevronUp className="w-5 h-5 flex-shrink-0 text-[#c0392b]" /> : <ChevronDown className="w-5 h-5 flex-shrink-0 text-[#4a5568]" />}
      </button>
      {open && (
        <p className="pb-5 text-[#4a5568] leading-relaxed">{a}</p>
      )}
    </div>
  );
};

const Home = () => {
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
      <section className="relative overflow-hidden py-20 md:py-32" style={{ backgroundColor: '#1a2e4a' }}>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #2980b9 0%, transparent 50%), radial-gradient(circle at 80% 20%, #c0392b 0%, transparent 40%)'
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6" style={{ backgroundColor: 'rgba(192,57,43,0.2)', color: '#e88a80' }}>
                China-Based Sourcing Agent
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                China Sourcing Agent for{' '}
                <span style={{ color: '#e88a80' }}>Global Buyers</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                We help importers find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — so you can buy from China with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton to="/contact" variant="primary" className="text-center text-base px-8 py-4">
                  Get a Free Sourcing Quote
                </CTAButton>
                <CTAButton to="/how-it-works" variant="secondary" className="text-center text-base px-8 py-4">
                  How It Works
                </CTAButton>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                {['No upfront commitment', 'English-speaking team', 'On-site in China'].map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" style={{ color: '#27ae60' }} />
                    <span className="text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  data-strk-img-id="hero-factory-img-x9y8z7"
                  data-strk-img="[hero-title-ref] China factory production floor manufacturing"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="China factory floor"
                  className="w-full h-full object-cover"
                />
                <span id="hero-title-ref" className="sr-only">China factory manufacturing production floor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center">
                <Icon className="w-7 h-7 mx-auto mb-2" style={{ color: '#c0392b' }} />
                <div className="text-3xl font-bold mb-1" style={{ color: '#1a2e4a' }}>{value}</div>
                <div className="text-sm" style={{ color: '#4a5568' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#f4f6f9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Services"
            title="Everything You Need to Source from China"
            subtitle="From finding the right supplier to getting goods delivered, we handle the entire sourcing process on your behalf."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, id }) => (
              <div key={id} className="bg-white rounded-xl p-6 shadow-sm border border-[#e2e8f0] hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#fef2f2' }}>
                  <Icon className="w-6 h-6" style={{ color: '#c0392b' }} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#1a2e4a' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#4a5568' }}>{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 font-semibold no-underline hover:gap-3 transition-all" style={{ color: '#2980b9' }}>
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                label="Problems We Solve"
                title="Buying from China Shouldn't Be This Hard"
                subtitle="Most importers face the same challenges. We've built our service to address each one directly."
                center={false}
              />
              <ul className="space-y-3">
                {problems.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#fef2f2' }}>
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#c0392b' }} />
                    </div>
                    <span style={{ color: '#4a5568' }}>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CTAButton to="/contact" variant="outline">
                  Talk to a Sourcing Expert
                </CTAButton>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img
                data-strk-img-id="problems-qc-img-p1q2r3"
                data-strk-img="quality control inspection China factory worker"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Quality control inspection"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#1a2e4a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Process"
            title="How We Work"
            subtitle="A clear, structured process from your first inquiry to final delivery."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="rounded-xl p-6" style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="text-4xl font-bold mb-3" style={{ color: 'rgba(192,57,43,0.6)' }}>{num}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/how-it-works" variant="secondary">
              See Full Process Details
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#f4f6f9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Case Studies"
            title="Real Results for Real Buyers"
            subtitle="A selection of sourcing projects we've completed for clients across different industries."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#e2e8f0] hover:shadow-md transition-shadow">
                <div className="aspect-[3x2] overflow-hidden">
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded" style={{ backgroundColor: '#fef2f2', color: '#c0392b' }}>
                    {cs.category}
                  </span>
                  <h3 id={cs.titleId} className="text-lg font-semibold mt-3 mb-2" style={{ color: '#1a2e4a' }}>{cs.title}</h3>
                  <p id={cs.descId} className="text-sm leading-relaxed mb-4" style={{ color: '#4a5568' }}>{cs.desc}</p>
                  <div className="flex items-center gap-2 pt-3 border-t border-[#e2e8f0]">
                    <CheckCircle className="w-4 h-4" style={{ color: '#27ae60' }} />
                    <span className="text-sm font-medium" style={{ color: '#27ae60' }}>{cs.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 font-semibold no-underline hover:gap-3 transition-all" style={{ color: '#2980b9' }}>
              View all case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Why SSourcing China"
            title="What Makes Us Different"
            subtitle="We're not a marketplace or a directory. We're a hands-on sourcing team based in China."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-6 rounded-xl border border-[#e2e8f0]">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#f4f6f9' }}>
                  <Icon className="w-7 h-7" style={{ color: '#1a2e4a' }} />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: '#1a2e4a' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#4a5568' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#f4f6f9' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="FAQ"
            title="Frequently Asked Questions"
            subtitle="Answers to the most common questions from buyers considering sourcing from China."
          />
          <div className="bg-white rounded-xl shadow-sm border border-[#e2e8f0] px-6">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#c0392b' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China?
          </h2>
          <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Tell us what you need. We'll send you a free sourcing plan within 24 hours.
          </p>
          <CTAButton to="/contact" variant="secondary" className="text-base px-8 py-4">
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  );
};

export default Home;
