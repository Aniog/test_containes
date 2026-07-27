import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  ArrowRight,
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  CheckCircle2,
  Users,
  Globe,
  Award,
  Package,
  Zap,
  AlertTriangle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { useState } from 'react';
import CTABanner from '@/components/shared/CTABanner';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified manufacturers that match your product specs, MOQ, and budget requirements.',
    titleId: 'svc-supplier-sourcing-title',
    descId: 'svc-supplier-sourcing-desc',
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site factory audits covering production capacity, certifications, quality systems, and business legitimacy.',
    titleId: 'svc-factory-verification-title',
    descId: 'svc-factory-verification-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment, during-production, and container loading inspections with detailed photo reports.',
    titleId: 'svc-quality-inspection-title',
    descId: 'svc-quality-inspection-desc',
  },
  {
    id: 'production-followup',
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'Regular factory visits and progress updates to keep your order on schedule and within spec.',
    titleId: 'svc-production-followup-title',
    descId: 'svc-production-followup-desc',
  },
  {
    id: 'shipping-coordination',
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'End-to-end freight coordination including customs documentation, consolidation, and door-to-door delivery.',
    titleId: 'svc-shipping-coordination-title',
    descId: 'svc-shipping-coordination-desc',
  },
];

const processSteps = [
  { step: '01', title: 'Share Your Requirements', desc: 'Tell us what you need — product specs, target price, quantity, and timeline.' },
  { step: '02', title: 'We Source & Shortlist', desc: 'Our team identifies 3–5 qualified suppliers and presents detailed comparisons.' },
  { step: '03', title: 'Verify & Negotiate', desc: 'We audit factories, negotiate pricing, and finalize terms on your behalf.' },
  { step: '04', title: 'Manage Production & QC', desc: 'We monitor production milestones and conduct quality inspections.' },
  { step: '05', title: 'Ship to Your Door', desc: 'We coordinate logistics and handle documentation until goods arrive safely.' },
];

const problems = [
  { icon: AlertTriangle, title: 'Unreliable Suppliers', desc: 'Avoid scams and low-quality factories with our verified supplier network.' },
  { icon: Globe, title: 'Language & Culture Barriers', desc: 'Our bilingual team bridges communication gaps and prevents misunderstandings.' },
  { icon: Package, title: 'Quality Inconsistency', desc: 'Systematic QC inspections ensure every shipment meets your standards.' },
  { icon: Zap, title: 'Production Delays', desc: 'Proactive follow-up keeps your orders on track and on time.' },
];

const trustPoints = [
  { value: '500+', label: 'Verified Suppliers' },
  { value: '12+', label: 'Years Experience' },
  { value: '30+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction' },
];

const faqs = [
  {
    q: 'What is a China sourcing agent?',
    a: 'A sourcing agent acts as your local representative in China. We find suppliers, verify factories, negotiate prices, inspect quality, and coordinate shipping — so you don\'t have to travel or manage suppliers directly.',
  },
  {
    q: 'How much does your service cost?',
    a: 'Our fees depend on the scope of work. Typically we charge a service fee of 5–8% of the order value, or a fixed project fee for specific tasks like factory audits or inspections. We provide a clear quote before starting.',
  },
  {
    q: 'What is your minimum order requirement?',
    a: 'We work with orders of all sizes, though most suppliers have their own MOQs (typically $3,000–$5,000 per product). We can help negotiate lower MOQs for first orders or find suppliers suited to smaller quantities.',
  },
  {
    q: 'How do you verify suppliers?',
    a: 'We conduct on-site factory audits checking business licenses, production capacity, quality management systems, worker conditions, and past export experience. We provide a detailed audit report with photos.',
  },
  {
    q: 'Can you help with product customization?',
    a: 'Yes. We work with factories on custom designs, materials, packaging, and branding. We manage sample development and revisions until you approve the final product.',
  },
];

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesPreview />
      <FAQSection />
      <CTABanner />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-3">
              Trusted China Sourcing Partner
            </p>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed max-w-xl">
              We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, and ship products worldwide — with full transparency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors no-underline"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors no-underline"
              >
                How It Works
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              data-strk-img-id="hero-factory-img-a7f3b2"
              data-strk-img="[hero-subtitle] [hero-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="China factory sourcing and quality inspection"
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 id="services-section-title" className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
            End-to-End Sourcing Services
          </h2>
          <p id="services-section-subtitle" className="text-lg text-neutral-600 max-w-2xl mx-auto">
            From finding the right supplier to delivering goods at your door — we manage every step of the sourcing process.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-neutral-200 p-6 md:p-8 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 id={service.titleId} className="text-xl font-semibold text-neutral-900 mb-2">
                  {service.title}
                </h3>
                <p id={service.descId} className="text-neutral-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark no-underline transition-colors"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
            How Our Sourcing Process Works
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            A clear, structured approach that keeps you informed and in control at every stage.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {processSteps.map((item, idx) => (
            <div key={idx} className="relative text-center">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">{item.step}</span>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">{item.title}</h3>
              <p className="text-sm text-neutral-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProblemsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
            Problems We Solve
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Sourcing from China comes with real challenges. Here is how we address them.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex gap-4 p-6 bg-neutral-50 rounded-xl border border-neutral-200">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-1">{item.title}</h3>
                  <p className="text-neutral-600 text-sm">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Why Buyers Trust SSourcing China
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Backed by years of experience and hundreds of successful projects across 30+ countries.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustPoints.map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">{item.value}</div>
              <div className="text-white/80 text-sm font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudiesPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 id="cases-section-title" className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
            Client Success Stories
          </h2>
          <p id="cases-section-subtitle" className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Real results from real sourcing projects we have managed for global buyers.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {[
            { id: 'case-furniture', title: 'Custom Furniture for EU Retailer', result: '35% cost reduction with certified suppliers', category: 'Furniture' },
            { id: 'case-electronics', title: 'Electronics Components for US Startup', result: 'Delivered 10,000 units in 6 weeks', category: 'Electronics' },
            { id: 'case-textiles', title: 'Textile Sourcing for Australian Brand', result: 'Passed all compliance audits first time', category: 'Textiles' },
          ].map((item) => (
            <div key={item.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-neutral-100 relative">
                <img
                  data-strk-img-id={`case-study-${item.id}-img-d4e5f6`}
                  data-strk-img={`[${item.id}-title] [cases-section-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">{item.category}</span>
                <h3 id={`${item.id}-title`} className="text-lg font-semibold text-neutral-900 mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-600 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                  {item.result}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark no-underline transition-colors"
          >
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-600">
            Common questions from buyers considering a China sourcing agent.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-neutral-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-neutral-50 border-none cursor-pointer"
              >
                <span className="font-medium text-neutral-900 pr-4">{faq.q}</span>
                {openIdx === idx ? (
                  <ChevronUp className="w-5 h-5 text-neutral-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-neutral-600 flex-shrink-0" />
                )}
              </button>
              {openIdx === idx && (
                <div className="px-5 pb-5 text-neutral-600 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
