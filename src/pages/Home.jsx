import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, Truck, PackageCheck, ChevronRight, CheckCircle2, ArrowRight, Factory, Users, Globe, Award } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import CTASection from '@/components/shared/CTASection';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified suppliers from our verified network based on your product requirements, target price, and quality standards.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site factory audits covering business licenses, production capacity, quality systems, and working conditions before you place an order.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-production, during-production, and pre-shipment inspections to catch issues early and ensure your products meet specifications.',
  },
  {
    icon: PackageCheck,
    title: 'Production Follow-up',
    desc: 'We monitor production schedules, track milestones, and keep you informed so your orders are delivered on time.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'End-to-end logistics support including freight booking, customs documentation, and door-to-door delivery coordination.',
  },
];

const processSteps = [
  { step: '01', title: 'Tell Us What You Need', desc: 'Share your product specifications, target price, and order volume. We will assess feasibility and propose a plan.' },
  { step: '02', title: 'Supplier Search & Verification', desc: 'We search our network, shortlist candidates, and conduct factory audits to verify capabilities and reliability.' },
  { step: '03', title: 'Sample & Negotiation', desc: 'We arrange samples, negotiate pricing and terms on your behalf, and ensure clear specifications before production.' },
  { step: '04', title: 'Production & Quality Control', desc: 'We follow production progress, conduct inspections at key stages, and report results with photos and findings.' },
  { step: '05', title: 'Shipping & Delivery', desc: 'We coordinate freight, handle documentation, and track your shipment until it arrives at your door.' },
];

const productCategories = [
  { name: 'Electronics & Components', id: 'cat-electronics' },
  { name: 'Machinery & Equipment', id: 'cat-machinery' },
  { name: 'Home & Garden Products', id: 'cat-home' },
  { name: 'Apparel & Textiles', id: 'cat-apparel' },
  { name: 'Auto Parts & Accessories', id: 'cat-auto' },
  { name: 'Packaging & Printing', id: 'cat-packaging' },
];

const problems = [
  { title: 'Unreliable Suppliers', desc: 'Suppliers who overpromise and underdeliver, leading to quality issues and delays.' },
  { title: 'Quality Inconsistency', desc: 'Products that look different from samples or fail to meet agreed specifications.' },
  { title: 'Communication Barriers', desc: 'Language gaps, time zone differences, and cultural misunderstandings that slow progress.' },
  { title: 'Production Delays', desc: 'Missed deadlines and lack of visibility into what is happening on the factory floor.' },
  { title: 'Shipping Complications', desc: 'Complex logistics, customs issues, and unexpected costs that erode margins.' },
  { title: 'No Local Presence', desc: 'You cannot visit factories or inspect goods yourself, making it hard to verify claims.' },
];

const trustPoints = [
  { icon: Factory, value: '500+', label: 'Verified Suppliers' },
  { icon: Users, value: '200+', label: 'Clients Served' },
  { icon: Globe, value: '30+', label: 'Countries Covered' },
  { icon: Award, value: '10+', label: 'Years of Experience' },
];

const faqs = [
  {
    q: 'What types of products can you source?',
    a: 'We source a wide range of products including electronics, machinery, home goods, apparel, auto parts, and packaging. If it is made in China, we can likely find a qualified supplier for it.',
  },
  {
    q: 'How do you verify suppliers?',
    a: 'We conduct on-site factory audits covering business licenses, production capacity, quality management systems, and working conditions. We also check references and review past export records.',
  },
  {
    q: 'What does your quality inspection cover?',
    a: 'Our inspections follow the AQL (Acceptable Quality Level) standard. We check product appearance, dimensions, functionality, packaging, and labeling. We provide detailed reports with photos.',
  },
  {
    q: 'Do you handle shipping and customs?',
    a: 'Yes. We coordinate freight booking (sea, air, or rail), prepare customs documentation, and work with forwarders to manage door-to-door delivery.',
  },
  {
    q: 'How much does your service cost?',
    a: 'Our fees depend on the scope of work. We provide transparent quotes after understanding your requirements. Initial consultations and sourcing assessments are free.',
  },
  {
    q: 'Can I visit the factory myself?',
    a: 'Absolutely. We can arrange factory visits and accompany you during audits. For clients who cannot travel, we conduct virtual factory tours via video call.',
  },
];

const caseStudies = [
  {
    id: 'cs-electronics',
    title: 'Electronics Importer Reduces Defect Rate by 85%',
    summary: 'A US-based electronics company was struggling with a 12% defect rate from their Chinese supplier. After switching to our verified supplier and implementing our QC process, defects dropped to under 2%.',
    industry: 'Consumer Electronics',
  },
  {
    id: 'cs-furniture',
    title: 'Furniture Retailer Cuts Lead Time by 30%',
    summary: 'A European furniture retailer needed faster turnaround. We restructured their supply chain, consolidated shipments, and introduced production milestone tracking — reducing lead time from 90 to 63 days.',
    industry: 'Home & Furniture',
  },
  {
    id: 'cs-apparel',
    title: 'Apparel Brand Scales from 5K to 50K Units',
    summary: 'An Australian apparel brand needed to scale production without sacrificing quality. We identified a factory with the right capacity, set up inline QC, and managed the transition smoothly.',
    industry: 'Apparel & Textiles',
  },
];

export default function HomePage() {
  const heroRef = useRef(null);
  const productsRef = useRef(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const { ImageHelper } = await import('@strikingly/sdk');
        const strkImgConfig = (await import('@/strk-img-config.json')).default;
        if (heroRef.current) ImageHelper.loadImages(strkImgConfig, heroRef.current);
        if (productsRef.current) ImageHelper.loadImages(strkImgConfig, productsRef.current);
      } catch (e) {
        console.log('Image loading skipped:', e.message);
      }
    };
    loadImages();
  }, []);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative bg-navy overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-bg-a1b2c3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              We help you find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can import from China with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-block bg-gold text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-gold-dark transition-colors no-underline text-center"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors no-underline"
              >
                See How It Works <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((item) => (
              <div key={item.label} className="text-center">
                <item.icon className="w-8 h-8 text-gold mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-navy">{item.value}</div>
                <div className="text-sm text-gray-600 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Services"
            title="End-to-End Sourcing Support"
            subtitle="From finding suppliers to delivering goods, we handle every step so you can import with confidence."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 hover:shadow-lg transition-shadow">
                <s.icon className="w-10 h-10 text-gold mb-4" />
                <h3 className="text-lg font-semibold text-navy mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-1 text-navy font-semibold hover:text-gold no-underline transition-colors">
              Learn More About Our Services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="How It Works"
            title="Our Sourcing Process"
            subtitle="A clear, structured process that keeps you informed and in control at every stage."
          />
          <div className="max-w-3xl mx-auto space-y-8">
            {processSteps.map((step, i) => (
              <div key={step.step} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-1 text-navy font-semibold hover:text-gold no-underline transition-colors">
              See Full Process Details <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section ref={productsRef} className="bg-surface py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Product Categories"
            title="Products We Source"
            subtitle="We work across a wide range of industries. If it is made in China, we can find the right supplier for you."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((cat) => (
              <div key={cat.id} className="relative rounded-xl overflow-hidden group">
                <img
                  alt={cat.name}
                  data-strk-img-id={`home-product-${cat.id}`}
                  data-strk-img={`[home-product-desc-${cat.id}] [home-product-title-${cat.id}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-48 object-cover bg-gray-200"
                />
                <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/70 transition-colors flex items-end p-5">
                  <div>
                    <h3 id={`home-product-title-${cat.id}`} className="text-white font-semibold text-lg">{cat.name}</h3>
                    <p id={`home-product-desc-${cat.id}`} className="text-gray-200 text-sm mt-1">Sourced from verified Chinese suppliers</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center gap-1 text-navy font-semibold hover:text-gold no-underline transition-colors">
              View All Categories <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Common Challenges"
            title="Problems We Solve"
            subtitle="Importing from China does not have to be risky. Here is how we help you avoid the most common pitfalls."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="bg-surface rounded-xl p-6 border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                </div>
                <h3 className="text-base font-semibold text-navy mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Case Studies"
            title="Real Results for Real Clients"
            subtitle="See how we have helped businesses overcome sourcing challenges and achieve better outcomes."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <span className="inline-block bg-navy/10 text-navy text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {cs.industry}
                </span>
                <h3 className="text-lg font-semibold text-navy mb-3">{cs.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{cs.summary}</p>
                <Link to="/case-studies" className="text-gold font-semibold text-sm hover:text-gold-dark no-underline inline-flex items-center gap-1">
                  Read More <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-1 text-navy font-semibold hover:text-gold no-underline transition-colors">
              View All Case Studies <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="FAQ"
            title="Frequently Asked Questions"
          />
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-gray-200 pb-6">
                <h3 className="text-base font-semibold text-navy mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
