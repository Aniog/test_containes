import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  Star, CheckCircle, ArrowRight, Globe, Users, Award, TrendingUp,
  ChevronRight, MessageSquare
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified manufacturers that match your product specs, MOQ, and budget.',
    id: 'svc-sourcing',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site audits confirm production capacity, certifications, and working conditions before you commit.',
    id: 'svc-factory',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections catch defects early, protecting your brand and reducing returns.',
    id: 'svc-qc',
  },
  {
    icon: TrendingUp,
    title: 'Production Follow-up',
    desc: 'We monitor your order through every production stage and report progress directly to you.',
    id: 'svc-production',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle documentation, and track your shipment to destination.',
    id: 'svc-shipping',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & Certification',
    desc: "We verify that products meet your market's regulatory requirements — CE, FCC, RoHS, and more.",
    id: 'svc-compliance',
  },
];

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, specs, quantity, and target price.' },
  { num: '02', title: 'Supplier Matching', desc: 'We search our vetted network and identify 3–5 qualified manufacturers.' },
  { num: '03', title: 'Factory Audit', desc: 'We visit shortlisted factories and verify their capabilities in person.' },
  { num: '04', title: 'Sample & Approval', desc: 'Samples are arranged, inspected, and sent to you for final approval.' },
  { num: '05', title: 'Production & QC', desc: 'We follow production and conduct quality inspections at key milestones.' },
  { num: '06', title: 'Shipping & Delivery', desc: 'We coordinate logistics and ensure your goods arrive on time.' },
];

const problems = [
  { title: 'Unreliable Suppliers', desc: 'We pre-screen and audit every factory before recommending them to you.' },
  { title: 'Quality Failures', desc: 'Our inspection team catches defects before goods leave the factory.' },
  { title: 'Communication Barriers', desc: 'We bridge language and cultural gaps between you and Chinese manufacturers.' },
  { title: 'Shipping Delays', desc: 'We coordinate logistics proactively to keep your supply chain on schedule.' },
  { title: 'Hidden Costs', desc: 'Transparent pricing with no hidden fees — you know exactly what you pay.' },
  { title: 'Scam Risk', desc: 'We verify business licenses, export records, and factory ownership before engagement.' },
];

const trustPoints = [
  { icon: Globe, value: '40+', label: 'Countries Served' },
  { icon: Factory, value: '500+', label: 'Verified Factories' },
  { icon: Users, value: '300+', label: 'Active Clients' },
  { icon: Award, value: '98%', label: 'Client Satisfaction' },
];

const testimonials = [
  {
    name: 'James Whitfield',
    role: 'CEO, HomeGoods Direct (UK)',
    text: 'SSourcing China found us a reliable furniture manufacturer within two weeks. Their factory audit report gave us the confidence to place a large order. No surprises at delivery.',
    rating: 5,
  },
  {
    name: 'Maria Santos',
    role: 'Procurement Manager, TechRetail (Brazil)',
    text: 'We had been burned by a bad supplier before. SSourcing\'s verification process is thorough — they checked certifications, production lines, and even worker conditions. Highly recommended.',
    rating: 5,
  },
  {
    name: 'Erik Larsson',
    role: 'Founder, Nordic Outdoor Gear (Sweden)',
    text: 'The production follow-up service is excellent. I get weekly updates with photos. It feels like having someone on the ground in China without the cost of a full-time employee.',
    rating: 5,
  },
];

const faqs = [
  {
    q: 'What types of products can you source?',
    a: 'We source a wide range of products including electronics, furniture, apparel, industrial equipment, consumer goods, and more. If it\'s manufactured in China, we can likely help.',
  },
  {
    q: 'How do you verify factories?',
    a: 'Our team conducts on-site audits covering business licenses, production capacity, quality management systems, certifications, and working conditions. We provide a detailed written report.',
  },
  {
    q: 'What is your minimum order value?',
    a: 'We work with buyers from $5,000 USD per order. For smaller orders, we can explore consolidated shipping options.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Supplier identification typically takes 5–10 business days. Factory audits add another 3–5 days. The full process from inquiry to production start is usually 2–4 weeks.',
  },
  {
    q: 'Do you handle shipping and customs?',
    a: 'We coordinate with licensed freight forwarders for sea, air, and express shipping. We assist with documentation but recommend working with a customs broker in your country.',
  },
  {
    q: 'How are your fees structured?',
    a: 'We charge a service fee based on the scope of work — sourcing, audit, inspection, or full management. We provide a clear quote before starting. No hidden commissions from suppliers.',
  },
];

export default function Home() {
  const containerRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative min-h-[620px] md:min-h-[700px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="home-hero-bg-a1b2c3"
          data-strk-bg="[home-hero-subtitle] [home-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/80 to-navy/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/15 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5">
              China-Based Sourcing Agent
            </span>
            <h1 id="home-hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              China Sourcing Agent<br />for Global Buyers
            </h1>
            <p id="home-hero-subtitle" className="text-lg md:text-xl text-white/85 mb-8 leading-relaxed max-w-2xl">
              We help overseas buyers find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — all from one trusted partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#C0392B] hover:bg-[#A93226] text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors duration-200"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-navy font-semibold px-8 py-4 rounded-lg text-base transition-colors duration-200"
              >
                See How It Works
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-10">
              {[
                '✓ No upfront commitment',
                '✓ On-site factory audits',
                '✓ English-speaking team',
              ].map((item) => (
                <span key={item} className="text-white/80 text-sm font-medium">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {trustPoints.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center text-center">
                <Icon className="w-7 h-7 text-navy mb-2" />
                <span className="text-2xl md:text-3xl font-bold text-navy">{value}</span>
                <span className="text-sm text-body-text mt-1">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-navy/10 text-navy text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">
              End-to-End Sourcing Support
            </h2>
            <p className="text-body-text text-lg max-w-2xl mx-auto">
              From finding the right supplier to delivering goods to your door, we manage every step of the China sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, id }) => (
              <div key={id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-navy" />
                </div>
                <h3 id={id} className="text-lg font-semibold text-dark-text mb-2">{title}</h3>
                <p className="text-body-text text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-navy font-semibold hover:text-navy-light transition-colors"
            >
              View All Services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-navy/10 text-navy text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">
              How We Work
            </h2>
            <p className="text-body-text text-lg max-w-2xl mx-auto">
              A clear, structured process that keeps you informed and in control at every stage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="relative p-6 rounded-xl border border-gray-100 bg-white hover:border-navy/30 transition-colors">
                <span className="text-4xl font-bold text-navy/10 leading-none block mb-3">{step.num}</span>
                <h3 className="text-lg font-semibold text-dark-text mb-2">{step.title}</h3>
                <p className="text-body-text text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
            >
              Full Process Details <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-navy/10 text-navy text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Why Work With Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">
                Common Sourcing Problems We Solve
              </h2>
              <p className="text-body-text text-lg mb-8 leading-relaxed">
                Sourcing from China without local support exposes you to real risks. Our team is on the ground to protect your interests.
              </p>
              <div className="space-y-4">
                {problems.map((p) => (
                  <div key={p.title} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-dark-text text-sm">{p.title}: </span>
                      <span className="text-body-text text-sm">{p.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img
                data-strk-img-id="home-problems-img-d4e5f6"
                data-strk-img="[home-problems-title] factory quality control inspection China"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Factory quality inspection"
                id="home-problems-title"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-navy/10 text-navy text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Client Feedback
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-light-blue rounded-xl p-6 border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-body-text text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-dark-text text-sm">{t.name}</p>
                  <p className="text-muted-text text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-light-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-navy/10 text-navy text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-dark-text text-sm md:text-base">{faq.q}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-navy flex-shrink-0 ml-4 transition-transform duration-200 ${openFaq === i ? 'rotate-90' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-body-text text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Sourcing from China?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Tell us what you need. We handle supplier search, verification, quality control, and shipping — so you can focus on your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C0392B] hover:bg-[#A93226] text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors duration-200"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-navy font-semibold px-8 py-4 rounded-lg text-base transition-colors duration-200"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
