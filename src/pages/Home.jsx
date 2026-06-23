import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory, Star,
  ArrowRight, CheckCircle, Users, Package, Globe, ChevronRight
} from 'lucide-react';
import { SectionHeader, Badge, Card } from '@/components/ui/SharedComponents';

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
    desc: 'On-site audits confirm factory capacity, certifications, and compliance before you commit.',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
    imgId: 'svc-factory-img-d4e5f6',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections catch defects early, protecting your brand and margins.',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-img-g7h8i9',
  },
  {
    icon: ShieldCheck,
    title: 'Production Follow-up',
    desc: 'We monitor your order through every production stage and report progress in real time.',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-prod-img-j1k2l3',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'From freight booking to customs documentation, we coordinate door-to-door logistics.',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-ship-img-m4n5o6',
  },
  {
    icon: Package,
    title: 'Sample Procurement',
    desc: 'We source and ship product samples so you can evaluate quality before placing bulk orders.',
    titleId: 'svc-sample-title',
    descId: 'svc-sample-desc',
    imgId: 'svc-sample-img-p7q8r9',
  },
];

const problems = [
  'Struggling to find reliable suppliers in China?',
  'Worried about product quality and factory fraud?',
  'Losing time managing production from overseas?',
  'Confused by Chinese shipping and customs rules?',
  'Received goods that didn\'t match the samples?',
  'No local presence to verify factories in person?',
];

const trustPoints = [
  { value: '500+', label: 'Verified Suppliers', icon: Factory },
  { value: '12+', label: 'Years in China Sourcing', icon: Globe },
  { value: '98%', label: 'Client Satisfaction Rate', icon: Star },
  { value: '30+', label: 'Countries Served', icon: Users },
];

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product specs, quantity, and target price.' },
  { num: '02', title: 'Supplier Matching', desc: 'We identify and vet 3–5 qualified manufacturers within 5 business days.' },
  { num: '03', title: 'Samples & Negotiation', desc: 'We arrange samples and negotiate pricing and terms on your behalf.' },
  { num: '04', title: 'Production & QC', desc: 'We monitor production and conduct quality inspections before shipment.' },
  { num: '05', title: 'Shipping & Delivery', desc: 'We coordinate freight and customs clearance to your destination.' },
];

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of services required. We offer transparent pricing with no hidden charges. Contact us for a free initial consultation and quote.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'For most product categories, we can present a shortlist of verified suppliers within 5–7 business days after receiving your detailed requirements.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with buyers of all sizes, from individual entrepreneurs to established importers. We adapt our services to your order volume and budget.',
  },
  {
    q: 'Can you handle products not listed on your website?',
    a: 'Absolutely. Our network covers most manufacturing categories in China. If you have a specific product in mind, reach out and we will assess feasibility.',
  },
  {
    q: 'What quality standards do your inspections follow?',
    a: 'We follow AQL (Acceptable Quality Limit) standards and can align with your specific requirements, including ISO, CE, or custom checklists.',
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
      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-brand-navy"
          data-strk-bg-id="hero-bg-main-x9y8z7"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-brand-navy/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <Badge variant="gold" className="mb-5">China-Based Sourcing Agent</Badge>
            <h1 id="hero-title" className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8">
              We help overseas buyers find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — so you can import with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-sky text-white font-semibold px-7 py-4 rounded-lg transition-colors text-base"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white hover:bg-white/10 font-semibold px-7 py-4 rounded-lg transition-colors text-base"
              >
                How It Works
              </Link>
            </div>
            <div className="flex flex-wrap gap-5 mt-8">
              {['No upfront fees', 'On-site factory audits', 'Real-time updates'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-gray-200 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-brand-dark py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {trustPoints.map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center">
                <div className="flex justify-center mb-2">
                  <Icon className="w-6 h-6 text-brand-gold" />
                </div>
                <div className="text-white text-3xl font-extrabold">{value}</div>
                <div className="text-gray-400 text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Do"
            title="End-to-End China Sourcing Services"
            subtitle="From finding the right supplier to delivering goods to your door, we manage every step of the sourcing process."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, titleId, descId }) => (
              <Card key={title} className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h3 id={titleId} className="text-brand-navy font-semibold text-lg mb-2">{title}</h3>
                  <p id={descId} className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
                <Link to="/services" className="text-brand-blue text-sm font-medium hover:text-brand-sky flex items-center gap-1 mt-auto">
                  Learn more <ChevronRight className="w-4 h-4" />
                </Link>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-3">Problems We Solve</p>
              <h2 className="text-brand-navy text-3xl md:text-4xl font-bold mb-5">
                Importing from China is complex. We make it simple.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Most overseas buyers face the same challenges when sourcing from China. Our team is on the ground to solve them for you.
              </p>
              <ul className="space-y-3">
                {problems.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-sky text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                >
                  Discuss Your Sourcing Challenge <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                id="problems-img"
                alt="China factory quality control inspection"
                className="w-full h-full object-cover"
                data-strk-img-id="problems-img-s1t2u3"
                data-strk-img="quality control inspection China factory manufacturing"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-16 md:py-24 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Process"
            title="How We Source for You"
            subtitle="A clear, structured process from inquiry to delivery."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 h-full">
                  <div className="text-brand-gold text-3xl font-extrabold mb-3">{step.num}</div>
                  <h3 className="text-white font-semibold text-base mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-3 z-10">
                    <ChevronRight className="w-5 h-5 text-brand-gold" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              See Full Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Client Results"
            title="Real Sourcing Success Stories"
            subtitle="See how we've helped buyers across industries source smarter from China."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: 'cs-furniture',
                category: 'Furniture',
                title: 'US Retailer Cuts Sourcing Costs by 28%',
                desc: 'A US home goods retailer needed to diversify their supplier base. We identified 4 verified factories and negotiated a 28% cost reduction.',
                country: 'United States',
              },
              {
                id: 'cs-electronics',
                category: 'Electronics',
                title: 'UK Brand Launches New Product Line On Time',
                desc: 'A UK consumer electronics brand needed a reliable PCB manufacturer. We sourced, audited, and managed production for a successful on-time launch.',
                country: 'United Kingdom',
              },
              {
                id: 'cs-apparel',
                category: 'Apparel',
                title: 'Australian Importer Resolves Quality Issues',
                desc: 'After receiving defective shipments, an Australian clothing importer engaged us for QC. Defect rates dropped from 12% to under 1%.',
                country: 'Australia',
              },
            ].map((cs) => (
              <Card key={cs.id} className="overflow-hidden p-0">
                <div className="aspect-[3x2] overflow-hidden">
                  <img
                    alt={cs.title}
                    className="w-full h-48 object-cover"
                    data-strk-img-id={`${cs.id}-img-v4w5x6`}
                    data-strk-img={`[${cs.id}-desc] [${cs.id}-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="blue">{cs.category}</Badge>
                    <span className="text-gray-400 text-xs">{cs.country}</span>
                  </div>
                  <h3 id={`${cs.id}-title`} className="text-brand-navy font-semibold text-base mb-2">{cs.title}</h3>
                  <p id={`${cs.id}-desc`} className="text-gray-600 text-sm leading-relaxed">{cs.desc}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Answers to the most common questions from buyers new to China sourcing."
          />
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-brand-navy font-semibold text-base mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Ready to Source from China with Confidence?
          </h2>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed">
            Submit your sourcing inquiry today and receive a free consultation from our team within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-brand-blue hover:bg-gray-50 font-bold px-8 py-4 rounded-lg transition-colors text-base"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
