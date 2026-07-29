import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  CheckCircle, ArrowRight, Star, Globe, Users, Package,
  ChevronDown, Award, Clock, DollarSign, AlertTriangle,
  MessageSquare, BarChart3, Zap
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button, SectionHeader, Card, Badge } from '@/components/ui/index.jsx';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified manufacturers that match your product specs, MOQ, and budget — saving you weeks of research.',
    id: 'svc-sourcing',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site audits confirm a factory\'s legitimacy, production capacity, certifications, and working conditions before you commit.',
    id: 'svc-verify',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections catch defects early. We follow AQL standards and provide detailed inspection reports.',
    id: 'svc-qc',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'We monitor your order from sample approval to final production, keeping you updated and resolving issues in real time.',
    id: 'svc-production',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle export documentation, and ensure your goods arrive on time and in full.',
    id: 'svc-shipping',
  },
  {
    icon: Package,
    title: 'Consolidation & Labeling',
    desc: 'Combine orders from multiple suppliers into one shipment. We handle repackaging, labeling, and Amazon FBA prep.',
    id: 'svc-consolidation',
  },
];

const problems = [
  { icon: AlertTriangle, text: 'Scammed by fake suppliers or trading companies' },
  { icon: AlertTriangle, text: 'Received goods that don\'t match the samples' },
  { icon: AlertTriangle, text: 'No visibility into production progress' },
  { icon: AlertTriangle, text: 'Delayed shipments with no explanation' },
  { icon: AlertTriangle, text: 'Language barriers causing costly misunderstandings' },
  { icon: AlertTriangle, text: 'Overpaying due to lack of local market knowledge' },
];

const trustStats = [
  { value: '500+', label: 'Sourcing Projects Completed' },
  { value: '12+', label: 'Years in China Sourcing' },
  { value: '98%', label: 'Client Satisfaction Rate' },
  { value: '30+', label: 'Countries Served' },
];

const processSteps = [
  { step: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product specs, target price, quantity, and timeline.' },
  { step: '02', title: 'Supplier Research', desc: 'We identify and vet 3–5 qualified manufacturers from our verified network.' },
  { step: '03', title: 'Quotation & Samples', desc: 'We negotiate pricing, request samples, and review them on your behalf.' },
  { step: '04', title: 'Order & Production', desc: 'We place the order, follow production milestones, and resolve any issues.' },
  { step: '05', title: 'Inspection & Shipping', desc: 'Quality inspection before shipment, then we coordinate delivery to your door.' },
];

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'We offer flexible pricing: a flat project fee for one-time sourcing, or a percentage-based commission for ongoing orders. Contact us for a tailored quote based on your needs.',
  },
  {
    q: 'How do I know the suppliers you find are legitimate?',
    a: 'We conduct on-site factory audits, verify business licenses, check production capacity, and review certifications. We only recommend suppliers we have personally vetted.',
  },
  {
    q: 'What products can you source from China?',
    a: 'We source across a wide range of categories including electronics, furniture, textiles, hardware, packaging, toys, and more. If it\'s made in China, we can likely source it.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with businesses of all sizes, from first-time importers to established brands. We adapt our service to your order volume and budget.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Typically 2–4 weeks from inquiry to confirmed supplier and samples. Production and shipping timelines depend on the product and order size.',
  },
];

const caseStudies = [
  {
    id: 'cs-furniture',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'home-cs-furniture-7a3b1c',
    title: 'Furniture Importer, UK',
    desc: 'Reduced sourcing costs by 22% and eliminated quality defects through factory audits and pre-shipment inspection.',
    tag: 'Furniture',
  },
  {
    id: 'cs-electronics',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'home-cs-electronics-8d2e4f',
    title: 'Electronics Brand, USA',
    desc: 'Launched a new product line in 90 days with full compliance documentation and Amazon FBA-ready packaging.',
    tag: 'Electronics',
  },
  {
    id: 'cs-textiles',
    titleId: 'cs-textiles-title',
    descId: 'cs-textiles-desc',
    imgId: 'home-cs-textiles-5c9a2b',
    title: 'Fashion Retailer, France',
    desc: 'Sourced 3 certified textile factories meeting EU standards, cutting lead times by 30%.',
    tag: 'Textiles',
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-surface-alt transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-navy text-sm md:text-base">{q}</span>
        <ChevronDown className={`w-5 h-5 text-steel flex-shrink-0 ml-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-6 py-4 bg-surface-alt border-t border-gray-100">
          <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative bg-navy min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="hero-bg-main-4f8a2c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-brand-red/20 text-red-300">
              China-Based Sourcing Agent
            </span>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              China Sourcing Agent<br />
              <span className="text-brand-red">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="mt-6 text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl">
              We help importers worldwide find reliable Chinese suppliers, verify factories,
              inspect quality, and coordinate shipping — so you can buy from China with confidence.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button to="/contact" variant="primary" size="lg">
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button to="/how-it-works" variant="outline-white" size="lg">
                How It Works
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-6">
              {trustStats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Verified Supplier Network</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>On-Site Factory Audits</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>AQL Quality Inspections</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>End-to-End Shipping Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>English-Speaking Team in China</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Services"
            title="Everything You Need to Source from China"
            subtitle="From finding the right supplier to delivering goods to your warehouse — we manage the entire process."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <Card key={svc.id} className="group">
                <div className="w-12 h-12 bg-surface-alt rounded-xl flex items-center justify-center mb-4 group-hover:bg-steel/10 transition-colors">
                  <svc.icon className="w-6 h-6 text-steel" />
                </div>
                <h3 id={svc.id} className="text-lg font-semibold text-navy mb-2">{svc.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button to="/services" variant="secondary">
              View All Services <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-white/10 text-blue-200">
                Problems We Solve
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
                Buying from China Shouldn't Be a Gamble
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                Many importers face the same costly mistakes. Our team is on the ground in China
                to protect your interests at every step.
              </p>
              <Button to="/contact" variant="primary" size="lg">
                Talk to a Sourcing Expert
              </Button>
            </div>
            <div className="space-y-3">
              {problems.map((p, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/5 rounded-xl px-5 py-4 border border-white/10">
                  <div className="w-6 h-6 rounded-full bg-brand-red/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-brand-red text-xs font-bold">✕</span>
                  </div>
                  <span className="text-blue-100 text-sm">{p.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-20 md:py-28 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="How It Works"
            title="A Clear, Proven Sourcing Process"
            subtitle="We follow a structured 5-step process to ensure every order is handled professionally from start to finish."
          />
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gray-200 mx-16" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {processSteps.map((step, i) => (
                <div key={i} className="relative text-center">
                  <div className="w-16 h-16 bg-navy text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4 relative z-10">
                    {step.step}
                  </div>
                  <h4 className="font-semibold text-navy text-sm mb-2">{step.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Button to="/how-it-works" variant="outline">
              Learn More About Our Process <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Case Studies"
            title="Real Results for Real Buyers"
            subtitle="See how we've helped importers across industries reduce costs, improve quality, and scale their sourcing."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <Card key={cs.id} className="overflow-hidden p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="navy">{cs.tag}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 id={cs.titleId} className="font-semibold text-navy mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-gray-500 text-sm leading-relaxed">{cs.desc}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button to="/case-studies" variant="secondary">
              View All Case Studies <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-20 md:py-28 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Why Buyers Trust SSourcing China"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: 'Based in China', desc: 'Our team is physically present in China\'s major manufacturing hubs — Guangzhou, Shenzhen, Yiwu, and more.' },
              { icon: Award, title: 'Certified Auditors', desc: 'Our QC inspectors are trained to international standards including ISO, AQL, and BSCI.' },
              { icon: Clock, title: 'Fast Response', desc: 'We respond to all inquiries within 24 hours and provide weekly production updates.' },
              { icon: DollarSign, title: 'Transparent Pricing', desc: 'No hidden fees. We provide clear, itemized quotes before any work begins.' },
            ].map((item, i) => (
              <Card key={i} className="text-center">
                <div className="w-14 h-14 bg-surface-alt rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-steel" />
                </div>
                <h3 className="font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Answers to the most common questions from buyers new to China sourcing."
          />
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-red py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China with Confidence?
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Tell us what you need and we'll get back to you within 24 hours with a free sourcing plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" variant="outline-white" size="lg">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button to="/how-it-works" size="lg" className="bg-white text-brand-red hover:bg-red-50 px-8 py-4 rounded-lg font-semibold transition-colors">
              Learn How It Works
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
