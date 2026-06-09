import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  CheckCircle, Star, Users, Globe, ArrowRight, ChevronDown,
  Package, Zap, Award, TrendingUp, MessageSquare, Phone
} from 'lucide-react';
import SectionHeader, { CTAButton } from '@/components/ui/SectionHeader';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified manufacturers that match your product specs, MOQ, and budget — saving you weeks of research.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site factory audits covering production capacity, certifications, workforce, and compliance before you commit.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment, during-production, and container loading inspections to ensure every order meets your standards.',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'Regular updates and milestone checks throughout manufacturing so you stay informed without being on the ground.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle export documentation, and track shipments to your destination.',
  },
  {
    icon: Package,
    title: 'Sample Management',
    desc: 'Request, review, and approve product samples before bulk production — with detailed feedback loops.',
  },
];

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, specs, target price, and quantity. No obligation.' },
  { num: '02', title: 'Supplier Research', desc: 'We search our vetted network and identify 3–5 qualified manufacturers for your review.' },
  { num: '03', title: 'Factory Audit', desc: 'We visit shortlisted factories, verify credentials, and send you a detailed audit report.' },
  { num: '04', title: 'Sample & Negotiation', desc: 'We request samples, review quality, and negotiate pricing and terms on your behalf.' },
  { num: '05', title: 'Production & QC', desc: 'We monitor production progress and conduct quality inspections at key milestones.' },
  { num: '06', title: 'Shipping & Delivery', desc: 'We coordinate logistics, prepare export documents, and track your shipment to arrival.' },
];

const products = [
  { name: 'Electronics & Components', icon: Zap },
  { name: 'Furniture & Home Goods', icon: Package },
  { name: 'Apparel & Textiles', icon: Award },
  { name: 'Industrial Equipment', icon: Factory },
  { name: 'Consumer Products', icon: Star },
  { name: 'Packaging & Labels', icon: ClipboardCheck },
];

const problems = [
  { title: 'Unreliable Suppliers', desc: 'We pre-screen and audit every factory before you place an order, eliminating guesswork.' },
  { title: 'Quality Failures', desc: 'Our inspection team catches defects before shipment — not after you receive the goods.' },
  { title: 'Communication Barriers', desc: 'We bridge language and cultural gaps, acting as your local representative in China.' },
  { title: 'Shipping Delays', desc: 'We coordinate with freight partners and monitor timelines to keep your supply chain on track.' },
];

const trustPoints = [
  { value: '500+', label: 'Sourcing Projects Completed' },
  { value: '12+', label: 'Years in China Sourcing' },
  { value: '98%', label: 'Client Satisfaction Rate' },
  { value: '30+', label: 'Countries Served' },
];

const caseStudies = [
  {
    id: 'cs-1',
    industry: 'Consumer Electronics',
    title: 'Reducing Defect Rate by 40% for a UK Retailer',
    result: '40% fewer defects, on-time delivery, 15% cost saving',
    titleId: 'cs-1-title',
    descId: 'cs-1-desc',
    imgId: 'cs-img-1-a3b4c5',
  },
  {
    id: 'cs-2',
    industry: 'Home Furniture',
    title: 'Scaling Production for a US E-Commerce Brand',
    result: '3x production capacity, new certified supplier, 20% lower unit cost',
    titleId: 'cs-2-title',
    descId: 'cs-2-desc',
    imgId: 'cs-img-2-d6e7f8',
  },
  {
    id: 'cs-3',
    industry: 'Apparel',
    title: 'Streamlining Textile Sourcing for an EU Brand',
    result: 'Verified 4 new suppliers, reduced lead time by 3 weeks',
    titleId: 'cs-3-title',
    descId: 'cs-3-desc',
    imgId: 'cs-img-3-g9h0i1',
  },
];

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'We offer flexible pricing — project-based fees, monthly retainers, or a percentage of order value. Contact us for a tailored quote based on your needs.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with buyers of all sizes, from startups placing their first order to established brands scaling production.',
  },
  {
    q: 'How do you verify that a factory is legitimate?',
    a: 'We conduct on-site audits covering business licenses, production capacity, certifications, workforce conditions, and quality systems.',
  },
  {
    q: 'Can you handle shipping and customs documentation?',
    a: 'Yes. We coordinate with licensed freight forwarders and prepare all necessary export documentation for your shipment.',
  },
  {
    q: 'What product categories do you source?',
    a: 'We source across electronics, furniture, apparel, industrial goods, consumer products, packaging, and more. Contact us to discuss your specific category.',
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
      <section className="relative bg-primary-dark overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-main-7a8b9c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4 bg-accent/10 px-3 py-1 rounded-full">
              China-Based Sourcing Agent
            </span>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-blue-300">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-blue-200 leading-relaxed mb-8 max-w-2xl">
              We help overseas buyers find reliable Chinese suppliers, verify factories,
              inspect quality, follow production, and coordinate shipping — all from one trusted partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton to="/contact" variant="accent" className="text-base px-8 py-4">
                Get a Free Sourcing Quote
              </CTAButton>
              <CTAButton to="/how-it-works" variant="outline" className="text-base px-8 py-4">
                See How It Works
              </CTAButton>
            </div>
            <div className="flex flex-wrap gap-6 mt-10">
              {trustPoints.map((tp) => (
                <div key={tp.label} className="text-center">
                  <div className="text-2xl font-bold text-white">{tp.value}</div>
                  <div className="text-xs text-blue-300 mt-0.5">{tp.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="What We Do"
            title="End-to-End Sourcing Services"
            subtitle="From finding the right supplier to delivering goods to your door — we manage every step of the China sourcing process."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="bg-white border border-border-color rounded-xl p-6 hover:shadow-md hover:border-primary/30 transition-all group">
                  <div className="w-12 h-12 bg-light-blue rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary-dark text-lg mb-2">{s.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/services" variant="outline-primary">
              View All Services
            </CTAButton>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Process"
            title="How We Source for You"
            subtitle="A structured, transparent process from inquiry to delivery — so you always know what's happening."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="bg-white rounded-xl p-6 border border-border-color">
                <div className="text-3xl font-bold text-primary/20 mb-3">{step.num}</div>
                <h3 className="font-semibold text-primary-dark text-lg mb-2">{step.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/how-it-works" variant="primary">
              Full Process Details
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Product Categories"
            title="Products We Source"
            subtitle="We have experience sourcing across a wide range of industries and product types from China."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {products.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.name} className="bg-light-blue rounded-xl p-5 text-center hover:bg-primary/10 transition-colors group">
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:text-primary-dark transition-colors" />
                  <p className="text-sm font-medium text-primary-dark">{p.name}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/products" variant="outline-primary">
              Browse All Categories
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 md:py-28 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Why Buyers Choose Us"
            title="Problems We Solve"
            subtitle="Sourcing from China comes with real risks. We eliminate them."
            className="text-white [&_h2]:text-white [&_p]:text-blue-200 [&_span]:text-accent"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="flex gap-4 bg-white/5 border border-white/10 rounded-xl p-6">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-white text-lg mb-1">{p.title}</h3>
                  <p className="text-blue-200 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Client Results"
            title="Case Studies"
            subtitle="Real outcomes from real sourcing projects — no exaggerated claims."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl overflow-hidden border border-border-color hover:shadow-md transition-shadow">
                <div className="h-48 bg-neutral-bg overflow-hidden">
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">{cs.industry}</span>
                  <h3 id={cs.titleId} className="font-semibold text-primary-dark text-lg mt-2 mb-3">{cs.title}</h3>
                  <p id={cs.descId} className="text-text-muted text-sm">{cs.result}</p>
                  <Link to="/case-studies" className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4 hover:gap-2 transition-all">
                    Read more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/case-studies" variant="primary">
              View All Case Studies
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-16 bg-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {trustPoints.map((tp) => (
              <div key={tp.label}>
                <div className="text-4xl font-bold text-primary mb-2">{tp.value}</div>
                <div className="text-text-muted text-sm font-medium">{tp.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="FAQ"
            title="Frequently Asked Questions"
            subtitle="Answers to the most common questions from buyers new to China sourcing."
          />
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-neutral-bg border border-border-color rounded-xl">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-primary-dark list-none">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-text-muted group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <div className="px-5 pb-5 text-text-muted text-sm leading-relaxed border-t border-border-color pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China with Confidence?
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Submit your sourcing inquiry today and get a free consultation within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton to="/contact" variant="outline" className="text-base px-8 py-4">
              Get a Free Sourcing Quote
            </CTAButton>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 text-white font-semibold text-base px-8 py-4 rounded-lg border-2 border-transparent hover:border-white/30 transition-colors"
            >
              <Phone className="w-5 h-5" /> Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
