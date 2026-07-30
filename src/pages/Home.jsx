import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  CheckCircle, Star, Globe, ArrowRight, ChevronDown, Users, Award, Clock
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
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site audits confirm factory legitimacy, production capacity, certifications, and working conditions before you commit.',
    titleId: 'svc-verify-title',
    descId: 'svc-verify-desc',
    imgId: 'svc-verify-img-d4e5f6',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections catch defects early, protecting your brand and reducing costly returns.',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-img-g7h8i9',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'We monitor your order through every production stage, keeping you informed and resolving issues in real time.',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-prod-img-j1k2l3',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'From freight booking to customs documentation, we coordinate door-to-door logistics so your goods arrive on time.',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-ship-img-m4n5o6',
  },
  {
    icon: Globe,
    title: 'Trade Compliance',
    desc: 'We help ensure your products meet import regulations, labelling requirements, and certification standards in your market.',
    titleId: 'svc-trade-title',
    descId: 'svc-trade-desc',
    imgId: 'svc-trade-img-p7q8r9',
  },
];

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, quantity, target price, and timeline.' },
  { num: '02', title: 'Supplier Research', desc: 'We search our vetted network and identify 3–5 qualified manufacturers for your review.' },
  { num: '03', title: 'Factory Audit', desc: 'We visit shortlisted factories to verify credentials, capacity, and quality systems.' },
  { num: '04', title: 'Sample & Negotiation', desc: 'We arrange samples and negotiate pricing, MOQ, and lead times on your behalf.' },
  { num: '05', title: 'Production & QC', desc: 'We monitor production and conduct inspections at key milestones.' },
  { num: '06', title: 'Shipping & Delivery', desc: 'We coordinate freight, customs, and final delivery to your warehouse.' },
];

const problems = [
  { title: 'Unreliable Suppliers', desc: 'Scam factories and low-quality producers are common. We pre-screen every supplier before you spend a dollar.' },
  { title: 'Quality Failures', desc: 'Goods that don\'t match samples cost you time and money. Our inspections catch issues before shipment.' },
  { title: 'Communication Barriers', desc: 'Language and time-zone gaps slow everything down. We act as your local representative in China.' },
  { title: 'Shipping Delays', desc: 'Missed deadlines damage your business. We track production and logistics to keep your supply chain on schedule.' },
  { title: 'Hidden Costs', desc: 'Unexpected fees erode margins. We provide transparent cost breakdowns before you commit to any order.' },
  { title: 'No Local Presence', desc: 'Without boots on the ground, you\'re relying on photos and promises. We visit factories so you don\'t have to.' },
];

const trustPoints = [
  { icon: Award, value: '10+', label: 'Years in China Sourcing' },
  { icon: Users, value: '500+', label: 'Global Buyers Served' },
  { icon: CheckCircle, value: '98%', label: 'Client Satisfaction Rate' },
  { icon: Clock, value: '24h', label: 'Average Response Time' },
];

const caseStudies = [
  {
    id: 'cs-furniture',
    industry: 'Home Furniture',
    country: 'United States',
    result: 'Reduced unit cost by 22% while maintaining CE certification compliance.',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-s1t2u3',
  },
  {
    id: 'cs-electronics',
    industry: 'Consumer Electronics',
    country: 'Germany',
    result: 'Identified 3 qualified PCB manufacturers and passed first-batch QC with zero defects.',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-electronics-img-v4w5x6',
  },
  {
    id: 'cs-apparel',
    industry: 'Apparel & Textiles',
    country: 'Australia',
    result: 'Sourced sustainable fabric supplier and cut lead time from 90 to 45 days.',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    imgId: 'cs-apparel-img-y7z8a9',
  },
];

const faqs = [
  { q: 'How much does your sourcing service cost?', a: 'We offer flexible fee structures including flat-fee sourcing packages and commission-based models. Contact us for a tailored quote based on your order volume and requirements.' },
  { q: 'How long does it take to find a supplier?', a: 'For standard products, we typically present qualified supplier options within 5–10 business days. Complex or highly customised products may take 2–3 weeks.' },
  { q: 'Do you work with small businesses and startups?', a: 'Yes. We work with buyers of all sizes, from startups placing their first order to established importers managing multiple SKUs.' },
  { q: 'Which product categories do you cover?', a: 'We source across a wide range of categories including electronics, furniture, apparel, industrial equipment, packaging, and consumer goods. See our Products page for the full list.' },
  { q: 'Can you handle shipping and customs?', a: 'Yes. We coordinate with freight forwarders and customs brokers to manage the full logistics chain, including documentation and compliance.' },
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
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            data-strk-bg-id="hero-bg-main-b1c2d3"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
              China-Based Sourcing Agent
            </span>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-gold">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-blue-200 mb-8 leading-relaxed max-w-2xl">
              We help importers worldwide find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — so you can source with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton variant="primary" className="text-base px-8 py-4">
                Get a Free Sourcing Quote
              </CTAButton>
              <CTAButton to="/how-it-works" variant="white-outline" className="text-base px-8 py-4">
                How It Works
              </CTAButton>
            </div>
            <div className="mt-10 flex flex-wrap gap-6">
              {trustPoints.map((tp) => (
                <div key={tp.label} className="flex items-center gap-2 text-blue-200">
                  <tp.icon className="w-4 h-4 text-gold" />
                  <span className="font-bold text-white">{tp.value}</span>
                  <span className="text-sm">{tp.label}</span>
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
            eyebrow="Our Services"
            title="End-to-End China Sourcing Support"
            subtitle="From finding the right factory to delivering goods to your door, we manage every step of the sourcing process."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div key={svc.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-primary transition-all group">
                <div className="w-12 h-12 bg-lightblue rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <svc.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 id={svc.titleId} className="font-bold text-darktext text-lg mb-2">{svc.title}</h3>
                <p id={svc.descId} className="text-mutedtext text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/services" variant="secondary">View All Services</CTAButton>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-lightblue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Process"
            title="How We Source for You"
            subtitle="A structured, transparent process from your first inquiry to final delivery."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-4xl font-bold text-primary opacity-20 mb-3">{step.num}</div>
                <h3 className="font-bold text-darktext text-lg mb-2">{step.title}</h3>
                <p className="text-mutedtext text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/how-it-works" variant="primary">See Full Process</CTAButton>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Buyers Choose Us"
            title="Problems We Solve for Global Importers"
            subtitle="Sourcing from China comes with real risks. We exist to eliminate them."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="bg-blue-800 bg-opacity-50 rounded-xl p-6 border border-blue-700">
                <CheckCircle className="w-6 h-6 text-gold mb-3" />
                <h3 className="font-bold text-white text-lg mb-2">{p.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Case Studies"
            title="Real Results for Real Buyers"
            subtitle="A selection of sourcing projects we have completed for international clients."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-lightblue overflow-hidden">
                  <img
                    alt={cs.industry}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">{cs.country}</span>
                  <h3 id={cs.titleId} className="font-bold text-darktext text-lg mt-1 mb-2">{cs.industry}</h3>
                  <p id={cs.descId} className="text-mutedtext text-sm leading-relaxed">{cs.result}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/case-studies" variant="secondary">View All Case Studies</CTAButton>
          </div>
        </div>
      </section>

      {/* Trust / Stats */}
      <section className="py-16 bg-lightblue border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {trustPoints.map((tp) => (
              <div key={tp.label}>
                <div className="text-4xl font-bold text-primary mb-1">{tp.value}</div>
                <div className="text-mutedtext text-sm">{tp.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Answers to the most common questions from buyers new to China sourcing."
          />
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-darktext hover:bg-lightblue transition-colors list-none">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-mutedtext group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <div className="px-5 pb-5 text-mutedtext text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China?
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Submit your inquiry today and receive a free sourcing consultation within 24 hours.
          </p>
          <CTAButton to="/contact" variant="white" className="text-base px-8 py-4">
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
