import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  CheckCircle, Star, Globe, Users, ArrowRight, ChevronRight,
  Package, Zap, Award, MessageSquare
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified suppliers that match your product specs, MOQ, and budget requirements.',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-sourcing-img-a1b2c3',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site audits to confirm factory capabilities, certifications, production capacity, and compliance.',
    titleId: 'svc-verify-title',
    descId: 'svc-verify-desc',
    imgId: 'svc-verify-img-d4e5f6',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections following AQL standards to catch defects before goods leave China.',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-img-g7h8i9',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'Regular factory visits and progress reports to keep your production on schedule and on spec.',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-prod-img-j1k2l3',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle export documentation, and track your shipment to destination.',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-ship-img-m4n5o6',
  },
  {
    icon: Package,
    title: 'Private Label & OEM',
    desc: 'Support for custom branding, packaging design, and OEM production with Chinese manufacturers.',
    titleId: 'svc-oem-title',
    descId: 'svc-oem-desc',
    imgId: 'svc-oem-img-p7q8r9',
  },
];

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product specs, target price, quantity, and timeline.' },
  { num: '02', title: 'Supplier Research', desc: 'We search our network and verified databases to find matching suppliers.' },
  { num: '03', title: 'Quotation & Samples', desc: 'We collect quotes and arrange samples for your review and approval.' },
  { num: '04', title: 'Factory Audit', desc: 'We visit and audit shortlisted factories before you commit to an order.' },
  { num: '05', title: 'Order & Production', desc: 'We place the order, follow production progress, and report back regularly.' },
  { num: '06', title: 'QC & Shipment', desc: 'Final inspection before shipment, then we coordinate delivery to your door.' },
];

const problems = [
  { title: 'Unreliable Suppliers', desc: 'Scam factories, poor quality, and broken promises are common risks. We verify every supplier before you pay.' },
  { title: 'Quality Failures', desc: 'Receiving defective goods is costly. Our AQL inspections catch issues before goods leave China.' },
  { title: 'Communication Barriers', desc: 'Language and time zone gaps slow everything down. We act as your local representative in China.' },
  { title: 'Shipping Delays', desc: 'Missed deadlines hurt your business. We monitor production and coordinate logistics proactively.' },
  { title: 'Hidden Costs', desc: 'Unexpected fees erode margins. We provide transparent cost breakdowns from sourcing to delivery.' },
  { title: 'No Local Presence', desc: 'Without boots on the ground, you cannot verify what you are buying. We are your eyes in China.' },
];

const trustStats = [
  { value: '10+', label: 'Years in China Sourcing' },
  { value: '500+', label: 'Clients Worldwide' },
  { value: '30+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction Rate' },
];

const caseStudies = [
  {
    id: 'cs-furniture',
    industry: 'Furniture',
    title: 'US Retailer Cuts Sourcing Costs by 22%',
    desc: 'A mid-size US furniture retailer needed to diversify away from a single supplier. We identified 4 verified alternatives, negotiated pricing, and managed QC across 3 factories.',
    result: '22% cost reduction, 0 defective shipments in 18 months',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-s1t2u3',
  },
  {
    id: 'cs-electronics',
    industry: 'Electronics',
    title: 'EU Brand Launches Private Label Product Line',
    desc: 'A European consumer electronics brand wanted to launch a private label accessory line. We sourced OEM manufacturers, managed sampling, and coordinated CE certification.',
    result: 'Product launched on time, 15,000 units shipped in first order',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-electronics-img-v4w5x6',
  },
  {
    id: 'cs-apparel',
    industry: 'Apparel',
    title: 'Australian Brand Resolves Quality Issues',
    desc: 'An Australian clothing brand was receiving inconsistent quality from their existing supplier. We conducted a factory audit, implemented an inspection protocol, and resolved the issues.',
    result: 'Defect rate dropped from 8% to under 1% within 2 orders',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    imgId: 'cs-apparel-img-y7z8a9',
  },
];

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work. We offer a free initial consultation and quote. Typical services include a sourcing fee, inspection fee, and optional ongoing management retainer.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with businesses of all sizes, from startups placing their first order to established brands managing multiple product lines.',
  },
  {
    q: 'How do you verify that a factory is legitimate?',
    a: 'We conduct on-site factory audits, verify business licenses, check production capacity, review certifications, and assess working conditions before recommending any supplier.',
  },
  {
    q: 'What industries do you cover?',
    a: 'We source across a wide range of categories including electronics, furniture, apparel, toys, hardware, packaging, and more. See our Products page for the full list.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'A typical sourcing project takes 2–4 weeks from inquiry to confirmed supplier. Production timelines vary by product and factory capacity.',
  },
  {
    q: 'Can you handle shipping and customs?',
    a: 'Yes. We coordinate with licensed freight forwarders for sea and air freight, handle export documentation, and can assist with import customs guidance.',
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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ backgroundColor: '#0d2b4e' }}>
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-main-b1c2d3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(13,43,78,0.95) 0%, rgba(26,79,138,0.85) 100%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: 'rgba(192,57,43,0.2)', color: '#f87171', border: '1px solid rgba(192,57,43,0.4)' }}>
              <Globe className="w-4 h-4" />
              <span>Trusted by buyers in 30+ countries</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent<br />
              <span style={{ color: '#60a5fa' }}>for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
              We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — so you can import with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-base font-semibold text-white transition-colors"
                style={{ backgroundColor: '#c0392b' }}
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-base font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors"
              >
                How It Works
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {trustStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: '#e8f0fb', color: '#1a4f8a' }}>
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0d2b4e' }}>
              End-to-End China Sourcing Support
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              From finding the right supplier to delivering goods to your warehouse, we manage every step of the sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.title} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md hover:border-[#1a4f8a]/30 transition-all group">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors" style={{ backgroundColor: '#e8f0fb' }}>
                    <Icon className="w-6 h-6" style={{ color: '#1a4f8a' }} />
                  </div>
                  <h3 id={svc.titleId} className="text-lg font-semibold mb-2" style={{ color: '#0d2b4e' }}>{svc.title}</h3>
                  <p id={svc.descId} className="text-slate-600 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-colors"
              style={{ backgroundColor: '#1a4f8a' }}
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#f8fafc' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: '#e8f0fb', color: '#1a4f8a' }}>
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0d2b4e' }}>
              How We Source for You
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              A clear, structured process designed to reduce risk and deliver results at every stage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="relative bg-white rounded-xl border border-slate-200 p-6 hover:shadow-sm transition-shadow">
                <div className="text-5xl font-bold mb-3" style={{ color: '#e8f0fb' }}>{step.num}</div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#0d2b4e' }}>{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ChevronRight className="w-6 h-6 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold border-2 transition-colors"
              style={{ borderColor: '#1a4f8a', color: '#1a4f8a' }}
            >
              Learn More About Our Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: '#e8f0fb', color: '#1a4f8a' }}>
                Why Work With Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0d2b4e' }}>
                Common Sourcing Problems We Solve
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                Importing from China without local support is risky. Here is how we protect your business at every step.
              </p>
              <div className="space-y-4">
                {problems.map((p) => (
                  <div key={p.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: '#e8f0fb' }}>
                      <CheckCircle className="w-4 h-4" style={{ color: '#1a4f8a' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-0.5" style={{ color: '#0d2b4e' }}>{p.title}</h4>
                      <p className="text-slate-600 text-sm">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                id="problems-img"
                data-strk-img-id="problems-section-img-c3d4e5"
                data-strk-img="[hero-subtitle] factory quality inspection China sourcing"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Quality inspection at Chinese factory"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#e8f0fb' }}>
                    <ShieldCheck className="w-5 h-5" style={{ color: '#1a4f8a' }} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: '#0d2b4e' }}>Every supplier is verified</div>
                    <div className="text-xs text-slate-500">On-site audits before you commit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#f8fafc' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: '#e8f0fb', color: '#1a4f8a' }}>
              Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0d2b4e' }}>
              Real Results for Real Clients
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              See how we have helped businesses across industries source smarter from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3" style={{ backgroundColor: '#e8f0fb', color: '#1a4f8a' }}>
                    {cs.industry}
                  </span>
                  <h3 id={cs.titleId} className="font-bold text-lg mb-2" style={{ color: '#0d2b4e' }}>{cs.title}</h3>
                  <p id={cs.descId} className="text-slate-600 text-sm mb-4 leading-relaxed">{cs.desc}</p>
                  <div className="flex items-start gap-2 p-3 rounded-lg" style={{ backgroundColor: '#f0fdf4' }}>
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#16a34a' }} />
                    <p className="text-sm font-medium" style={{ color: '#15803d' }}>{cs.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-colors"
              style={{ backgroundColor: '#1a4f8a' }}
            >
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16" style={{ backgroundColor: '#1a4f8a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div className="flex flex-col items-center gap-3">
              <Award className="w-10 h-10 text-blue-300" />
              <h3 className="font-bold text-lg">Certified & Experienced</h3>
              <p className="text-blue-200 text-sm">10+ years sourcing across all major Chinese manufacturing hubs</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Users className="w-10 h-10 text-blue-300" />
              <h3 className="font-bold text-lg">Dedicated Account Manager</h3>
              <p className="text-blue-200 text-sm">One point of contact who knows your business and speaks your language</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Zap className="w-10 h-10 text-blue-300" />
              <h3 className="font-bold text-lg">Fast Response</h3>
              <p className="text-blue-200 text-sm">Initial supplier shortlist delivered within 3–5 business days</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: '#e8f0fb', color: '#1a4f8a' }}>
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0d2b4e' }}>
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-sm md:text-base list-none" style={{ color: '#0d2b4e' }}>
                  {faq.q}
                  <ChevronRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#0d2b4e' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China?
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Tell us what you need and we will get back to you within 24 hours with a free consultation and sourcing plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-base font-semibold text-white transition-colors"
              style={{ backgroundColor: '#c0392b' }}
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-base font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
