import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  Star, ArrowRight, CheckCircle, Globe, Users, Award, TrendingUp,
  ChevronDown, MessageSquare
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CTAButton from '../components/ui/CTAButton';
import SectionHeader from '../components/ui/SectionHeader';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified manufacturers that match your product specifications, MOQ, and budget.',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site audits to confirm factory capabilities, certifications, production capacity, and compliance.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment, during-production, and final inspections to ensure your goods meet agreed standards.',
  },
  {
    icon: TrendingUp,
    title: 'Production Follow-up',
    desc: 'Regular updates and milestone checks throughout production to prevent delays and quality issues.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle documentation, and track shipments to your destination.',
  },
  {
    icon: ShieldCheck,
    title: 'Supplier Negotiation',
    desc: 'Leverage our local presence and relationships to negotiate better pricing and payment terms.',
  },
];

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, specs, quantity, and target price.' },
  { num: '02', title: 'Supplier Research', desc: 'We identify and vet potential suppliers from our network and verified databases.' },
  { num: '03', title: 'Factory Audit', desc: 'We visit shortlisted factories to verify capabilities, certifications, and working conditions.' },
  { num: '04', title: 'Sample & Approval', desc: 'Samples are arranged, inspected, and sent to you for final approval before production.' },
  { num: '05', title: 'Production & QC', desc: 'We monitor production progress and conduct quality checks at key milestones.' },
  { num: '06', title: 'Shipping & Delivery', desc: 'We coordinate logistics, prepare export documents, and track your shipment to arrival.' },
];

const problems = [
  { title: 'Unreliable Suppliers', desc: 'Struggling to find manufacturers who deliver consistent quality? We pre-screen every supplier.' },
  { title: 'Quality Failures', desc: 'Received goods that didn\'t match samples? Our QC inspections catch issues before shipment.' },
  { title: 'Communication Barriers', desc: 'Language and time zone gaps causing delays? We act as your local representative in China.' },
  { title: 'Shipping Complications', desc: 'Confused by customs, freight, and documentation? We handle the logistics end-to-end.' },
  { title: 'Overpaying for Products', desc: 'Not sure if you\'re getting fair pricing? Our local knowledge helps you negotiate effectively.' },
  { title: 'No Local Presence', desc: 'Can\'t visit factories yourself? We are your eyes and ears on the ground in China.' },
];

const trustPoints = [
  { icon: Globe, value: '30+', label: 'Countries Served' },
  { icon: Factory, value: '500+', label: 'Factories Audited' },
  { icon: Users, value: '200+', label: 'Active Clients' },
  { icon: Award, value: '8+', label: 'Years Experience' },
];

const caseStudies = [
  {
    id: 'furniture-uk',
    industry: 'Furniture',
    country: 'United Kingdom',
    challenge: 'A UK retailer needed a reliable sofa manufacturer after two failed supplier relationships.',
    result: 'Sourced and audited 3 factories, selected one with ISO certification. 40% cost reduction vs. previous supplier.',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-a1b2c3',
  },
  {
    id: 'electronics-us',
    industry: 'Electronics',
    country: 'United States',
    challenge: 'A US startup needed a PCB assembly partner with strict quality standards and fast turnaround.',
    result: 'Identified 2 qualified EMS factories, managed NDA process, and coordinated first production run within 6 weeks.',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-electronics-img-d4e5f6',
  },
  {
    id: 'apparel-au',
    industry: 'Apparel',
    country: 'Australia',
    challenge: 'An Australian brand needed sustainable fabric suppliers and ethical manufacturing partners.',
    result: 'Sourced OEKO-TEX certified fabric mills and audited 4 garment factories for ethical compliance.',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    imgId: 'cs-apparel-img-g7h8i9',
  },
];

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work — sourcing only, inspection, or full project management. We offer a free initial consultation and quote. Most clients find our fees are offset by savings in product cost and avoided quality issues.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with businesses of all sizes, from startups placing their first order to established importers managing multiple product lines.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'A typical sourcing project takes 2–4 weeks from inquiry to supplier shortlist. Factory audits add 1–2 weeks. Timelines vary by product complexity and urgency.',
  },
  {
    q: 'Which product categories do you cover?',
    a: 'We source across a wide range of categories including electronics, furniture, apparel, hardware, packaging, and consumer goods. See our Products page for a full list.',
  },
  {
    q: 'Can you handle shipping and customs?',
    a: 'We coordinate with licensed freight forwarders and customs brokers. We prepare export documentation and track shipments, though the freight contract is typically between you and the forwarder.',
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
      {/* Hero */}
      <section className="relative bg-[#0d2b4e] text-white overflow-hidden min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-main-x1y2z3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2b4e] via-[#0d2b4e]/90 to-[#0d2b4e]/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <ShieldCheck className="w-4 h-4 text-[#e8621a]" />
              <span className="text-sm text-slate-200">Trusted by buyers in 30+ countries</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-[#e8621a]">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — so you can import with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton to="/contact" variant="primary" className="text-base px-8 py-4">
                Get a Free Sourcing Quote
              </CTAButton>
              <CTAButton to="/how-it-works" variant="secondary" className="text-base px-8 py-4 border-white text-white hover:bg-white hover:text-[#0d2b4e]">
                How It Works
              </CTAButton>
            </div>
            <div className="mt-10 flex flex-wrap gap-6">
              {trustPoints.map((tp) => (
                <div key={tp.label} className="text-center">
                  <div className="text-2xl font-bold text-white">{tp.value}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{tp.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                data-strk-img-id="hero-factory-img-p9q8r7"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="China factory sourcing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Services"
            heading="End-to-End China Sourcing Support"
            subtext="From finding the right supplier to delivering goods to your door, we manage every step of the sourcing process."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md hover:border-[#1a4f8a]/30 transition-all group">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#1a4f8a] transition-colors">
                    <Icon className="w-6 h-6 text-[#1a4f8a] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-[#0d2b4e] text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/services" variant="secondary">View All Services</CTAButton>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 md:py-28 bg-[#f4f6f9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Problems We Solve"
            heading="Common Challenges When Sourcing from China"
            subtext="Importing from China comes with real risks. Here's how we help you avoid the most common pitfalls."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-sm transition-shadow">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#1a4f8a] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[#0d2b4e] mb-1">{p.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Process"
            heading="How We Work With You"
            subtext="A structured, transparent process from your first inquiry to final delivery."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="relative bg-[#f4f6f9] rounded-xl p-6 border border-slate-200">
                <div className="text-4xl font-bold text-[#1a4f8a]/15 mb-3 leading-none">{step.num}</div>
                <h3 className="font-bold text-[#0d2b4e] text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/how-it-works" variant="secondary">See Full Process</CTAButton>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-[#f4f6f9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Case Studies"
            heading="Real Results for Real Buyers"
            subtext="A selection of sourcing projects we've completed for clients across different industries."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-md transition-shadow">
                <div className="aspect-[3x2] overflow-hidden">
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.industry}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-50 text-[#1a4f8a] text-xs font-semibold px-2.5 py-1 rounded-full">{cs.industry}</span>
                    <span className="text-gray-500 text-xs">{cs.country}</span>
                  </div>
                  <h3 id={cs.titleId} className="font-bold text-[#0d2b4e] mb-2">{cs.industry} — {cs.country}</h3>
                  <p id={cs.descId} className="text-gray-600 text-sm mb-3 leading-relaxed">{cs.challenge}</p>
                  <p className="text-[#1a4f8a] text-sm font-medium leading-relaxed">{cs.result}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/case-studies" variant="secondary">View All Case Studies</CTAButton>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 bg-[#1a4f8a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {trustPoints.map((tp) => {
              const Icon = tp.icon;
              return (
                <div key={tp.label}>
                  <Icon className="w-8 h-8 text-white/60 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-white">{tp.value}</div>
                  <div className="text-blue-200 text-sm mt-1">{tp.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="FAQ"
            heading="Frequently Asked Questions"
            subtext="Answers to the most common questions from buyers considering China sourcing."
          />
          <div className="mt-12 space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-[#f4f6f9] rounded-xl border border-slate-200 overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-[#0d2b4e] list-none">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-slate-200 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-[#0d2b4e] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageSquare className="w-12 h-12 text-[#e8621a] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Sourcing from China?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
            Tell us what you need and we'll get back to you within one business day with a tailored sourcing plan.
          </p>
          <CTAButton to="/contact" variant="primary" className="text-base px-10 py-4">
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
