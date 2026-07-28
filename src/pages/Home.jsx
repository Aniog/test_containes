import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, ChevronRight,
  CheckCircle2, AlertTriangle, Globe, Factory, Users, Award,
  ArrowRight, ChevronDown, ChevronUp, Package, BarChart3
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SectionHeader from '@/components/shared/SectionHeader.jsx';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-navy overflow-hidden">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-navy/85" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
            Find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — all from one trusted partner in China.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get a Free Sourcing Quote
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified suppliers from our verified network based on your product requirements, target price, and quality standards.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site factory audits to verify business licenses, production capacity, quality systems, and real manufacturing capabilities before you commit.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-production, during-production, and pre-shipment inspections following international AQL standards to catch issues before they ship.',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'We monitor your orders throughout production, track milestones, and report progress so you stay informed without traveling to China.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'Consolidation, freight booking, customs documentation, and door-to-door logistics coordination for sea, air, or rail shipments.',
  },
  {
    icon: Package,
    title: 'Order Management',
    desc: 'End-to-end order tracking from initial inquiry to delivery, with clear communication and documentation at every stage.',
  },
];

const ServicesSection = () => (
  <section className="py-20 lg:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        title="Our Sourcing Services"
        subtitle="Comprehensive sourcing support from supplier discovery to delivered goods — so you can buy from China with confidence."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s) => (
          <div
            key={s.title}
            className="group p-8 rounded-xl border border-gray-200 hover:border-navy/20 hover:shadow-lg transition-all duration-300 bg-white"
          >
            <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mb-5 group-hover:bg-navy/10 transition-colors">
              <s.icon className="w-6 h-6 text-navy" />
            </div>
            <h3 className="text-xl font-semibold text-charcoal mb-3">{s.title}</h3>
            <p className="text-body leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-navy font-semibold hover:text-navy-light transition-colors"
        >
          Learn more about our services <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

const processSteps = [
  { num: '01', title: 'Tell Us What You Need', desc: 'Share your product specifications, target price, quantity, and quality requirements.' },
  { num: '02', title: 'We Find & Verify Suppliers', desc: 'We search our network, shortlist candidates, and verify factories on your behalf.' },
  { num: '03', title: 'Sample & Confirm Order', desc: 'We arrange samples, negotiate terms, and confirm the order once you approve.' },
  { num: '04', title: 'Production & Quality Control', desc: 'We follow production, conduct inspections, and keep you updated at every stage.' },
  { num: '05', title: 'Shipping & Delivery', desc: 'We coordinate logistics, handle documentation, and ensure smooth delivery to your door.' },
];

const ProcessSection = () => (
  <section className="py-20 lg:py-28 bg-surface">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        title="How Our Sourcing Process Works"
        subtitle="A clear, structured process that takes you from initial inquiry to delivered goods — with full visibility at every step."
      />
      <div className="max-w-4xl mx-auto">
        {processSteps.map((step, i) => (
          <div key={step.num} className="flex gap-6 lg:gap-8 mb-8 last:mb-0">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-navy rounded-full flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-lg">{step.num}</span>
              </div>
              {i < processSteps.length - 1 && (
                <div className="w-0.5 flex-1 bg-navy/20 mt-3" />
              )}
            </div>
            <div className="pb-8">
              <h3 className="text-xl font-semibold text-charcoal mb-2">{step.title}</h3>
              <p className="text-body leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          to="/how-it-works"
          className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          See Full Process Details <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

const productCategories = [
  { name: 'Electronics & Components', imgId: 'prod-elec-d4e5f6', desc: 'Consumer electronics, PCBs, sensors, and electronic components' },
  { name: 'Home & Garden', imgId: 'prod-home-g7h8i9', desc: 'Furniture, kitchenware, home textiles, and garden tools' },
  { name: 'Apparel & Textiles', imgId: 'prod-apparel-j1k2l3', desc: 'Clothing, fabrics, accessories, and custom garments' },
  { name: 'Industrial & Machinery', imgId: 'prod-indust-m4n5o6', desc: 'Machinery parts, equipment, and industrial materials' },
  { name: 'Auto Parts & Accessories', imgId: 'prod-auto-p7q8r9', desc: 'OEM parts, aftermarket components, and car accessories' },
  { name: 'Packaging & Printing', imgId: 'prod-pack-s1t2u3', desc: 'Custom packaging, labels, and printing solutions' },
];

const ProductsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
  <section className="py-20 lg:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        title="Products We Source"
        subtitle="We work across a wide range of product categories. If it's made in China, we can help you source it reliably."
      />
      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productCategories.map((cat) => (
          <div key={cat.name} className="group rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
              <img
                alt={cat.name}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[prod-${cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-desc] [prod-${cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-name]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <h3 id={`prod-${cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-name`} className="text-lg font-semibold text-charcoal mb-1">{cat.name}</h3>
              <p id={`prod-${cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-desc`} className="text-sm text-body">{cat.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-navy font-semibold hover:text-navy-light transition-colors"
        >
          View all product categories <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
  );
};

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    desc: 'Trading companies posing as factories, inconsistent quality, or suppliers disappearing after deposit — we verify before you commit.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Issues',
    desc: 'Defective goods, wrong materials, or shortcuts in production — our inspections catch problems before they ship.',
  },
  {
    icon: Globe,
    title: 'Communication Barriers',
    desc: 'Language gaps, time zone differences, and cultural misunderstandings — our bilingual team bridges the gap.',
  },
  {
    icon: BarChart3,
    title: 'Lack of Transparency',
    desc: 'No visibility into production status, hidden costs, or unexpected delays — we provide clear reporting at every stage.',
  },
];

const ProblemsSection = () => (
  <section className="py-20 lg:py-28 bg-navy">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        title="Problems We Solve"
        subtitle="Sourcing from China doesn't have to be risky. We address the common challenges that overseas buyers face."
        light
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {problems.map((p) => (
          <div key={p.title} className="flex gap-5 p-6 rounded-xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center shrink-0">
              <p.icon className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-gray-400 leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const trustPoints = [
  { icon: Users, value: '500+', label: 'Verified Suppliers' },
  { icon: Award, value: '10+', label: 'Years in Sourcing' },
  { icon: Globe, value: '30+', label: 'Countries Served' },
  { icon: ClipboardCheck, value: '5,000+', label: 'Inspections Completed' },
];

const TrustSection = () => (
  <section className="py-20 lg:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        title="Why Buyers Trust SSourcing China"
        subtitle="We bring local expertise, proven processes, and transparent communication to every project."
      />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {trustPoints.map((tp) => (
          <div key={tp.label} className="text-center p-6 rounded-xl bg-surface">
            <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <tp.icon className="w-6 h-6 text-navy" />
            </div>
            <div className="text-3xl lg:text-4xl font-bold text-navy mb-1">{tp.value}</div>
            <div className="text-body text-sm font-medium">{tp.label}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: CheckCircle2, title: 'On-Ground Team in China', desc: 'Based in Shenzhen with direct access to major manufacturing hubs across Guangdong, Zhejiang, and Jiangsu.' },
          { icon: CheckCircle2, title: 'Bilingual Project Managers', desc: 'English-speaking managers who understand both Western business expectations and Chinese manufacturing culture.' },
          { icon: CheckCircle2, title: 'Transparent Reporting', desc: 'Photo and video reports from factory visits, inspections, and production milestones — so you see what we see.' },
        ].map((item) => (
          <div key={item.title} className="flex gap-4 p-6 rounded-xl border border-gray-200">
            <item.icon className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-charcoal mb-1">{item.title}</h4>
              <p className="text-sm text-body leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const caseStudies = [
  {
    title: 'US Electronics Brand Cuts Defect Rate by 85%',
    industry: 'Consumer Electronics',
    desc: 'A US-based electronics company was struggling with a 12% defect rate from their Chinese supplier. After switching to our verified factory and implementing our QC process, defects dropped to under 2%.',
    imgId: 'cs-electronics-v1w2x3',
  },
  {
    title: 'European Retailer Sources 200 SKUs in 6 Months',
    industry: 'Home & Garden',
    desc: 'A European home goods retailer needed to diversify their supply chain. We sourced and verified 200 SKUs across 15 product categories within 6 months, on time and on budget.',
    imgId: 'cs-retailer-y4z5a6',
  },
  {
    title: 'Auto Parts Importer Saves 30% on Logistics',
    industry: 'Auto Parts',
    desc: 'An auto parts distributor was paying premium rates for fragmented shipping. We consolidated their orders and optimized logistics, reducing shipping costs by 30%.',
    imgId: 'cs-auto-b7c8d9',
  },
];

const CaseStudiesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
  <section className="py-20 lg:py-28 bg-surface">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        title="Case Studies"
        subtitle="See how we've helped global buyers source better from China."
      />
      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {caseStudies.map((cs) => (
          <div key={cs.title} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="aspect-[16/9] bg-gray-100 overflow-hidden">
              <img
                alt={cs.title}
                data-strk-img-id={cs.imgId}
                data-strk-img={`[cs-${cs.imgId}-desc] [cs-${cs.imgId}-title]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <span className="text-xs font-semibold text-accent uppercase tracking-wide">{cs.industry}</span>
              <h3 id={`cs-${cs.imgId}-title`} className="text-lg font-semibold text-charcoal mt-2 mb-3">{cs.title}</h3>
              <p id={`cs-${cs.imgId}-desc`} className="text-sm text-body leading-relaxed">{cs.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-navy font-semibold hover:text-navy-light transition-colors"
        >
          Read more case studies <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
  );
};

const faqs = [
  {
    q: 'What types of products can you source?',
    a: 'We source a wide range of products including electronics, home goods, apparel, industrial parts, auto components, packaging, and more. If it\'s manufactured in China, we can likely help you source it.',
  },
  {
    q: 'How do you verify suppliers?',
    a: 'We conduct on-site factory audits that verify business licenses, production capacity, quality management systems, and actual manufacturing capabilities. We also check references and review export history.',
  },
  {
    q: 'What are your inspection standards?',
    a: 'We follow international AQL (Acceptable Quality Level) standards, typically AQL 2.5 for major defects and AQL 4.0 for minor defects. We can adjust inspection levels based on your requirements.',
  },
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our pricing depends on the scope of work — product complexity, number of suppliers, inspection frequency, and shipping requirements. Contact us for a free quote tailored to your project.',
  },
  {
    q: 'Can you help with small orders?',
    a: 'Yes, we work with buyers of all sizes. While MOQs vary by product and supplier, we can help negotiate minimums that work for your business stage.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Typical supplier sourcing takes 1–2 weeks. Including sampling, order confirmation, and production, most projects take 4–8 weeks from start to shipment, depending on product complexity.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Common questions about sourcing from China and how we work."
        />
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-charcoal pr-4">{faq.q}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-navy shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-body shrink-0" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-body leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InquirySection = () => (
  <section className="py-20 lg:py-28 bg-surface">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeader
          title="Ready to Source from China?"
          subtitle="Tell us about your product requirements and get a free sourcing quote within 24 hours."
        />
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors"
        >
          Get a Free Sourcing Quote
          <ChevronRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  </section>
);

const Home = () => (
  <div>
    <HeroSection />
    <ServicesSection />
    <ProcessSection />
    <ProductsSection />
    <ProblemsSection />
    <TrustSection />
    <CaseStudiesSection />
    <FAQSection />
    <InquirySection />
  </div>
);

export default Home;
