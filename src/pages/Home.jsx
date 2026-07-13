import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  CheckCircle, ArrowRight, Star, Users, Package, Globe,
  AlertTriangle, Clock, DollarSign, ChevronDown, ChevronRight
} from 'lucide-react';
import { SectionHeader, Card, Badge, Button } from '@/components/ui/index.jsx';
import { useState } from 'react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified manufacturers that match your product specifications, MOQ, and budget requirements.',
    color: 'text-[#1a4f8a]',
    bg: 'bg-blue-50',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site factory audits covering production capacity, certifications, workforce, and compliance with international standards.',
    color: 'text-green-700',
    bg: 'bg-green-50',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment, during-production, and final inspections to ensure your goods meet agreed specifications before they leave China.',
    color: 'text-yellow-700',
    bg: 'bg-yellow-50',
  },
  {
    icon: ShieldCheck,
    title: 'Production Follow-up',
    desc: 'Regular updates and on-site monitoring throughout the production cycle to prevent delays and quality deviations.',
    color: 'text-purple-700',
    bg: 'bg-purple-50',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle export documentation, and ensure your cargo ships on time.',
    color: 'text-[#c0392b]',
    bg: 'bg-red-50',
  },
  {
    icon: Globe,
    title: 'Trade Compliance',
    desc: 'Guidance on import regulations, labeling requirements, and customs documentation for your target market.',
    color: 'text-teal-700',
    bg: 'bg-teal-50',
  },
];

const processSteps = [
  { step: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, specs, quantity, and target price. We respond within 24 hours.' },
  { step: '02', title: 'Supplier Research', desc: 'Our team researches and shortlists 3–5 qualified suppliers from our verified network and Alibaba/trade shows.' },
  { step: '03', title: 'Factory Audit', desc: 'We visit shortlisted factories to verify capacity, certifications, and production quality before you commit.' },
  { step: '04', title: 'Sample & Negotiation', desc: 'We arrange samples, review them against your specs, and negotiate pricing and payment terms on your behalf.' },
  { step: '05', title: 'Production Monitoring', desc: 'Once you place the order, we follow up with the factory at key milestones and report back to you regularly.' },
  { step: '06', title: 'Inspection & Shipping', desc: 'Final quality inspection before shipment, then we coordinate logistics until your goods arrive at destination.' },
];

const problems = [
  { icon: AlertTriangle, title: 'Unreliable Suppliers', desc: 'Factories that look good online but fail to deliver on quality or timelines.' },
  { icon: DollarSign, title: 'Hidden Costs', desc: 'Unexpected charges, poor negotiation, and overpaying due to lack of local market knowledge.' },
  { icon: Clock, title: 'Production Delays', desc: 'No visibility into factory progress until it\'s too late to fix problems.' },
  { icon: Package, title: 'Quality Failures', desc: 'Receiving goods that don\'t match samples or specifications, leading to returns and losses.' },
];

const trustPoints = [
  { value: '500+', label: 'Verified Suppliers' },
  { value: '12+', label: 'Years in China Sourcing' },
  { value: '98%', label: 'Client Satisfaction Rate' },
  { value: '30+', label: 'Countries Served' },
];

const caseStudies = [
  {
    id: 'furniture-uk',
    client: 'UK Furniture Retailer',
    product: 'Solid Wood Furniture',
    result: 'Reduced unit cost by 22% while maintaining EN 71 compliance',
    flag: '🇬🇧',
    titleId: 'cs-furniture-uk-title',
    descId: 'cs-furniture-uk-desc',
    imgId: 'cs-furniture-uk-img-a1b2c3',
  },
  {
    id: 'electronics-us',
    client: 'US Electronics Brand',
    product: 'Consumer Electronics',
    result: 'Identified 3 compliant factories, passed FCC certification on first attempt',
    flag: '🇺🇸',
    titleId: 'cs-electronics-us-title',
    descId: 'cs-electronics-us-desc',
    imgId: 'cs-electronics-us-img-d4e5f6',
  },
  {
    id: 'apparel-au',
    client: 'Australian Apparel Brand',
    product: 'Sustainable Clothing',
    result: 'Sourced GOTS-certified fabric suppliers, cut lead time by 3 weeks',
    flag: '🇦🇺',
    titleId: 'cs-apparel-au-title',
    descId: 'cs-apparel-au-desc',
    imgId: 'cs-apparel-au-img-g7h8i9',
  },
];

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'We offer flexible pricing: a flat project fee for one-time sourcing, or a percentage-based model for ongoing orders. Contact us for a tailored quote based on your product and volume.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with buyers of all sizes, from startups placing their first order to established brands managing multiple product lines. We adapt our service to your scale.',
  },
  {
    q: 'How do you verify that a factory is legitimate?',
    a: 'We conduct on-site audits covering business licenses, production capacity, equipment, workforce, quality management systems, and compliance certifications. We also check references and past export records.',
  },
  {
    q: 'What products can you source?',
    a: 'We source across most consumer and industrial product categories including electronics, furniture, apparel, home goods, machinery parts, and more. See our Products page for a full list.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Typically 2–4 weeks from inquiry to confirmed supplier, depending on product complexity. Production and shipping timelines vary by factory and destination.',
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-brand-border rounded-lg overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-brand-dark pr-4">{q}</span>
        <ChevronDown className={`w-5 h-5 text-brand-muted flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 bg-white">
          <p className="text-brand-body leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

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
      {/* Hero Section */}
      <section className="relative bg-[#1a4f8a] overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-main-x1y2z3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
        <div className="relative section-container py-20 md:py-28">
          <div className="max-w-3xl">
            <Badge variant="gold" className="mb-5">China-Based Sourcing Agent</Badge>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-[#d4a017]">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-blue-100 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              We help importers worldwide find reliable Chinese manufacturers, verify factories, inspect quality, and coordinate shipping — so you can focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#c0392b] text-white px-8 py-4 rounded-lg font-bold text-base hover:bg-[#a93226] transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-white/10 transition-colors"
              >
                How It Works
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6">
              {trustPoints.map((tp) => (
                <div key={tp.label} className="text-center">
                  <div className="text-2xl font-bold text-[#d4a017]">{tp.value}</div>
                  <div className="text-blue-200 text-xs mt-0.5">{tp.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-brand-border py-5">
        <div className="section-container">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-brand-muted text-sm">
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> ISO-Certified Factory Audits</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> On-Site Quality Inspections</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> English-Speaking Team</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> 24-Hour Response Time</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> No Hidden Fees</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-brand-bg">
        <div className="section-container">
          <SectionHeader
            eyebrow="Our Services"
            title="End-to-End China Sourcing Support"
            subtitle="From finding the right supplier to getting your goods delivered, we manage every step of the sourcing process."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <Card key={svc.title} className="flex flex-col">
                <div className={`w-12 h-12 ${svc.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <svc.icon className={`w-6 h-6 ${svc.color}`} />
                </div>
                <h3 className="font-bold text-brand-dark text-lg mb-2">{svc.title}</h3>
                <p className="text-brand-body text-sm leading-relaxed flex-1">{svc.desc}</p>
                <Link to="/services" className="mt-4 text-[#1a4f8a] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more <ChevronRight className="w-4 h-4" />
                </Link>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 bg-[#1a4f8a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#163f6e] transition-colors">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="Why Buyers Need Us"
            title="Common Problems We Solve"
            subtitle="Sourcing from China without local support exposes you to risks that cost time and money."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="text-center p-6 rounded-xl bg-brand-bg border border-brand-border">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <p.icon className="w-6 h-6 text-[#c0392b]" />
                </div>
                <h3 className="font-bold text-brand-dark mb-2">{p.title}</h3>
                <p className="text-brand-body text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-[#1a4f8a] rounded-2xl p-8 md:p-10 text-white text-center">
            <h3 className="text-2xl font-bold mb-3">We eliminate these risks for you</h3>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">Our team is on the ground in China, speaking the language, visiting factories, and protecting your interests at every stage.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-[#1a4f8a] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-brand-bg">
        <div className="section-container">
          <SectionHeader
            eyebrow="Our Process"
            title="How We Work With You"
            subtitle="A structured, transparent process from your first inquiry to final delivery."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="bg-white rounded-xl border border-brand-border p-6 relative">
                <div className="text-5xl font-black text-blue-50 absolute top-4 right-5 select-none">{step.step}</div>
                <div className="relative">
                  <div className="w-10 h-10 bg-[#1a4f8a] rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                  <h3 className="font-bold text-brand-dark mb-2">{step.title}</h3>
                  <p className="text-brand-body text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 border-2 border-[#1a4f8a] text-[#1a4f8a] px-6 py-3 rounded-lg font-semibold hover:bg-[#1a4f8a] hover:text-white transition-colors">
              See Full Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="Case Studies"
            title="Real Results for Real Buyers"
            subtitle="See how we've helped businesses across industries source successfully from China."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <Card key={cs.id} className="overflow-hidden p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                    alt={cs.product}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute top-3 left-3 text-2xl">{cs.flag}</span>
                </div>
                <div className="p-6">
                  <Badge variant="default" className="mb-3">{cs.product}</Badge>
                  <h3 id={cs.titleId} className="font-bold text-brand-dark mb-1">{cs.client}</h3>
                  <p id={cs.descId} className="text-brand-body text-sm leading-relaxed mb-4">{cs.result}</p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4a017] text-[#d4a017]" />
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 bg-[#1a4f8a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#163f6e] transition-colors">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-brand-bg">
        <div className="section-container">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Answers to the most common questions from buyers considering China sourcing."
          />
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#1a4f8a]">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China with Confidence?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Tell us what you need and we'll get back to you within 24 hours with a tailored sourcing plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#c0392b] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#a93226] transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-blue-200 text-sm mt-4">No commitment required. Response within 24 hours.</p>
        </div>
      </section>
    </div>
  );
}
