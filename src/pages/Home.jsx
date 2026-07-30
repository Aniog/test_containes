import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory, Star,
  CheckCircle, ArrowRight, Globe, Users, Award, Clock
} from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import SectionHeader from '@/components/SectionHeader';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified Chinese manufacturers that match your product specs, quality standards, and budget.',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-sourcing-img-a1b2c3',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site factory audits to confirm production capacity, certifications, working conditions, and business legitimacy.',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
    imgId: 'svc-factory-img-d4e5f6',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections by our local QC team to catch defects before goods leave the factory.',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-img-g7h8i9',
  },
  {
    icon: ShieldCheck,
    title: 'Production Follow-up',
    desc: 'We monitor your order through every production stage, keeping you informed and resolving issues in real time.',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-prod-img-j1k2l3',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle export documentation, and ensure your goods arrive on time.',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-ship-img-m4n5o6',
  },
  {
    icon: Globe,
    title: 'Private Label & OEM',
    desc: 'From product design to branded packaging, we help you develop and launch your own product line from China.',
    titleId: 'svc-oem-title',
    descId: 'svc-oem-desc',
    imgId: 'svc-oem-img-p7q8r9',
  },
];

const stats = [
  { value: '500+', label: 'Verified Suppliers', icon: Factory },
  { value: '12+', label: 'Years in China Sourcing', icon: Award },
  { value: '40+', label: 'Countries Served', icon: Globe },
  { value: '98%', label: 'Client Satisfaction Rate', icon: Star },
];

const problems = [
  { problem: 'Scammed by unreliable suppliers', solution: 'We verify every factory before you commit a single dollar.' },
  { problem: 'Poor product quality on arrival', solution: 'Our QC team inspects goods at the factory before shipment.' },
  { problem: 'No visibility into production', solution: 'Regular updates and photos throughout the production cycle.' },
  { problem: 'Language and communication barriers', solution: 'Fluent English-speaking team bridges the gap for you.' },
  { problem: 'Shipping delays and customs issues', solution: 'We coordinate logistics and documentation end-to-end.' },
  { problem: 'Overpaying due to lack of market knowledge', solution: 'We negotiate fair prices using local market expertise.' },
];

const processSteps = [
  { step: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product specs, quantity, target price, and timeline.' },
  { step: '02', title: 'Supplier Research', desc: 'We identify and vet 3–5 qualified manufacturers that match your requirements.' },
  { step: '03', title: 'Factory Audit', desc: 'We visit shortlisted factories to verify capacity, quality systems, and compliance.' },
  { step: '04', title: 'Sample & Approval', desc: 'Samples are arranged, inspected, and shipped to you for final approval.' },
  { step: '05', title: 'Production & QC', desc: 'We monitor production and conduct in-line and pre-shipment inspections.' },
  { step: '06', title: 'Shipping & Delivery', desc: 'We coordinate freight, handle documentation, and track delivery to your door.' },
];

const testimonials = [
  {
    name: 'James Whitfield',
    company: 'HomeGoods Direct, UK',
    text: 'SSourcing China found us a reliable furniture supplier within two weeks. Their factory audit report gave us the confidence to place a large order. Quality was exactly as specified.',
    rating: 5,
  },
  {
    name: 'Maria Santos',
    company: 'Bella Imports, Brazil',
    text: 'We had been burned by bad suppliers before. SSourcing\'s verification process is thorough and professional. Our first order went smoothly from production to delivery.',
    rating: 5,
  },
  {
    name: 'David Kim',
    company: 'TechParts Inc., USA',
    text: 'The production follow-up service is invaluable. We get weekly updates with photos. No more surprises when the container arrives. Highly recommended.',
    rating: 5,
  },
];

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of services required. We offer transparent pricing — typically a flat project fee or a small percentage of order value. Contact us for a tailored quote.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'For standard products, we typically present a shortlist of verified suppliers within 5–10 business days. Complex or custom products may take 2–3 weeks.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with buyers of all sizes, from individual entrepreneurs to established importers. We tailor our services to your order volume and budget.',
  },
  {
    q: 'What industries do you cover?',
    a: 'We source across a wide range of categories including electronics, furniture, clothing, machinery, toys, health products, and more. See our Products page for the full list.',
  },
  {
    q: 'Can you help with private label or OEM products?',
    a: 'Absolutely. We have experience managing OEM and private label projects from initial design through to branded packaging and delivery.',
  },
];

const products = [
  { name: 'Electronics & Components', titleId: 'hp-prod-elec-title', imgId: 'hp-prod-elec-img-s1t2u3' },
  { name: 'Furniture & Home Decor', titleId: 'hp-prod-furn-title', imgId: 'hp-prod-furn-img-v4w5x6' },
  { name: 'Clothing & Textiles', titleId: 'hp-prod-cloth-title', imgId: 'hp-prod-cloth-img-y7z8a9' },
  { name: 'Machinery & Industrial', titleId: 'hp-prod-mach-title', imgId: 'hp-prod-mach-img-b1c2d3' },
  { name: 'Toys & Baby Products', titleId: 'hp-prod-toys-title', imgId: 'hp-prod-toys-img-e4f5g6' },
  { name: 'Health & Beauty', titleId: 'hp-prod-health-title', imgId: 'hp-prod-health-img-h7i8j9' },
];

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
      <section className="relative bg-brand-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0"
            style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #C0392B 0%, transparent 50%), radial-gradient(circle at 80% 20%, #D4A017 0%, transparent 40%)' }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-white/20">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                China-Based Sourcing Team — Available Now
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                China Sourcing Agent<br />
                <span className="text-brand-gold">for Global Buyers</span>
              </h1>
              <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                We help overseas buyers find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can import with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton to="/contact" variant="primary" showArrow>
                  Get a Free Sourcing Quote
                </CTAButton>
                <CTAButton to="/how-it-works" variant="white-outline">
                  See How It Works
                </CTAButton>
              </div>
              <div className="flex flex-wrap gap-6 mt-10">
                {[
                  'Verified Suppliers',
                  'On-Site QC Inspections',
                  'End-to-End Support',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-blue-100 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]"
                data-strk-bg-id="hero-bg-main-k1l2m3"
                data-strk-bg="[hero-title-text] [hero-subtitle-text]"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
                style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="absolute inset-0 bg-brand-blue/20" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-brand-dark font-semibold text-sm">Factory Audit Completed</p>
                      <p className="text-gray-500 text-xs">Guangzhou Electronics Manufacturer — Verified ✓</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hidden text for image context */}
        <span id="hero-title-text" className="sr-only">China factory sourcing agent manufacturing</span>
        <span id="hero-subtitle-text" className="sr-only">Chinese factory production floor workers</span>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center">
                <div className="flex justify-center mb-2">
                  <Icon className="w-6 h-6 text-brand-red" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-1">{value}</div>
                <div className="text-gray-500 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-brand-bg py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Services"
            title="Everything You Need to Source from China"
            subtitle="From finding the right supplier to delivering goods to your door, we manage the entire sourcing process on your behalf."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, titleId, descId, imgId }) => (
              <div key={title} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group">
                <div className="h-44 overflow-hidden relative">
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-brand-blue" />
                  </div>
                  <h3 id={titleId} className="text-brand-dark font-bold text-lg mb-2">{title}</h3>
                  <p id={descId} className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/services" variant="secondary" showArrow>
              View All Services
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Problems We Solve"
            title="Common Challenges When Sourcing from China"
            subtitle="Importing from China can be complex. Here's how we protect your business at every step."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {problems.map(({ problem, solution }) => (
              <div key={problem} className="bg-brand-bg rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-brand-red text-xs font-bold">✕</span>
                  </div>
                  <p className="text-brand-dark font-semibold text-sm">{problem}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="bg-brand-blue py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Process"
            title="How We Source for You"
            subtitle="A structured, transparent process from inquiry to delivery."
            light
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map(({ step, title, desc }) => (
              <div key={step} className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors">
                <div className="text-brand-gold font-bold text-3xl mb-3">{step}</div>
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/how-it-works" variant="white" showArrow>
              See the Full Process
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="bg-brand-bg py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Product Categories"
            title="Products We Source from China"
            subtitle="We have established supplier networks across major manufacturing categories."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {products.map(({ name, titleId, imgId }) => (
              <Link
                key={name}
                to="/products"
                className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <p id={titleId} className="text-brand-dark font-semibold text-xs text-center leading-tight">{name}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <CTAButton to="/products" variant="secondary" showArrow>
              View All Product Categories
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Client Testimonials"
            title="What Our Clients Say"
            subtitle="We've helped buyers from over 40 countries source successfully from China."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ name, company, text, rating }) => (
              <div key={name} className="bg-brand-bg rounded-xl p-6 border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-gold fill-brand-gold" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{text}"</p>
                <div>
                  <p className="text-brand-dark font-semibold text-sm">{name}</p>
                  <p className="text-gray-400 text-xs">{company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-bg py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="FAQ"
            title="Frequently Asked Questions"
            subtitle="Answers to the most common questions from buyers new to China sourcing."
          />
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-brand-dark font-semibold text-base mb-2">{q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
              </div>
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
            Tell us what you need. Our team will respond within 24 hours with a tailored sourcing plan and transparent pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton to="/contact" variant="white" showArrow>
              Get a Free Sourcing Quote
            </CTAButton>
            <CTAButton to="/how-it-works" variant="white-outline">
              Learn How It Works
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
