import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  CheckCircle, Star, ArrowRight, Globe, Users, Award, TrendingUp,
  ChevronDown, Package, Zap, MessageSquare
} from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import SectionHeader from '@/components/SectionHeader';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified Chinese manufacturers that match your product specs, MOQ, and budget requirements.',
    href: '/services',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site factory audits to confirm legitimacy, production capacity, certifications, and working conditions.',
    href: '/services',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment, during-production, and final inspections to ensure your goods meet agreed specifications.',
    href: '/services',
  },
  {
    icon: Zap,
    title: 'Production Follow-up',
    desc: 'Regular updates and on-site monitoring to keep your production on schedule and within spec.',
    href: '/services',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle export documentation, and track your shipment to destination.',
    href: '/services',
  },
  {
    icon: MessageSquare,
    title: 'Supplier Communication',
    desc: 'We bridge language and cultural gaps, negotiating pricing and terms directly with Chinese suppliers on your behalf.',
    href: '/services',
  },
];

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, quantity, target price, and any specific requirements.' },
  { num: '02', title: 'Supplier Research', desc: 'We search our network and verified databases to find suitable manufacturers in China.' },
  { num: '03', title: 'Factory Audit', desc: 'We visit shortlisted factories to verify credentials, capacity, and quality standards.' },
  { num: '04', title: 'Sample & Approval', desc: 'Samples are arranged and reviewed. We coordinate revisions until you approve.' },
  { num: '05', title: 'Production & QC', desc: 'We monitor production progress and conduct quality inspections at key milestones.' },
  { num: '06', title: 'Shipping & Delivery', desc: 'We coordinate logistics, prepare export documents, and track your shipment to arrival.' },
];

const problems = [
  { title: 'Unreliable Suppliers', desc: 'Scam factories and middlemen are common. We verify every supplier before you commit a dollar.' },
  { title: 'Quality Failures', desc: 'Goods arrive damaged or off-spec. Our inspections catch issues before shipment.' },
  { title: 'Communication Barriers', desc: 'Language and time zone gaps cause costly misunderstandings. We handle all supplier communication.' },
  { title: 'Delayed Shipments', desc: 'Production delays and logistics issues are common. We monitor timelines and escalate early.' },
  { title: 'Hidden Costs', desc: 'Unexpected fees erode margins. We provide transparent cost breakdowns upfront.' },
  { title: 'No Local Presence', desc: 'Without boots on the ground, you can\'t verify what\'s really happening. We are your eyes in China.' },
];

const trustPoints = [
  { icon: Globe, value: '30+', label: 'Countries Served' },
  { icon: Factory, value: '500+', label: 'Factories Audited' },
  { icon: Package, value: '1,200+', label: 'Orders Managed' },
  { icon: Award, value: '98%', label: 'Client Satisfaction' },
];

const caseStudies = [
  {
    id: 'furniture-uk',
    titleId: 'cs-furniture-uk-title',
    descId: 'cs-furniture-uk-desc',
    imgId: 'cs-img-furniture-uk-a1b2c3',
    category: 'Furniture',
    title: 'UK Retailer Cuts Sourcing Costs by 22%',
    desc: 'A UK home goods retailer needed a reliable furniture supplier in Foshan. We audited 8 factories, negotiated pricing, and managed 3 production runs.',
    result: '22% cost reduction, zero quality rejections',
  },
  {
    id: 'electronics-us',
    titleId: 'cs-electronics-us-title',
    descId: 'cs-electronics-us-desc',
    imgId: 'cs-img-electronics-us-d4e5f6',
    category: 'Electronics',
    title: 'US Brand Launches Private Label Electronics',
    desc: 'An American startup needed a certified electronics manufacturer for a new product line. We sourced, verified, and managed the full production cycle.',
    result: 'On-time delivery, CE & FCC certified products',
  },
  {
    id: 'apparel-au',
    titleId: 'cs-apparel-au-title',
    descId: 'cs-apparel-au-desc',
    imgId: 'cs-img-apparel-au-g7h8i9',
    category: 'Apparel',
    title: 'Australian Brand Scales Apparel Production',
    desc: 'A growing Australian fashion brand needed to scale production without sacrificing quality. We found a compliant factory and implemented a QC process.',
    result: 'Production scaled 3x, defect rate under 1%',
  },
];

const faqs = [
  { q: 'How much does your sourcing service cost?', a: 'Our fees depend on the scope of work. We offer a free initial consultation and quote. Typical services are priced as a flat project fee or a percentage of order value. Contact us for a tailored quote.' },
  { q: 'Do you work with small businesses and startups?', a: 'Yes. We work with businesses of all sizes, from startups placing their first order to established importers managing multiple product lines.' },
  { q: 'How do you verify that a factory is legitimate?', a: 'We conduct on-site factory audits that include checking business licenses, production capacity, equipment, worker conditions, and quality management systems. We also verify certifications relevant to your product.' },
  { q: 'What products can you source?', a: 'We source a wide range of products including electronics, furniture, apparel, machinery, packaging, consumer goods, and more. Visit our Products page for a full list.' },
  { q: 'How long does the sourcing process take?', a: 'A typical sourcing project takes 2–4 weeks from inquiry to supplier shortlist. Full production and delivery timelines depend on the product and order size.' },
  { q: 'Can you handle shipping and customs?', a: 'Yes. We coordinate with freight forwarders, prepare export documentation, and can advise on import duties. We work with both sea and air freight.' },
];

export default function HomePage() {
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
      <section className="relative bg-primary min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-ssourcing-7f3a1b"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent/20 text-red-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-accent/30">
              China-Based · English-Speaking · Trusted by 500+ Buyers
            </span>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-gold">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-xl text-blue-200 leading-relaxed mb-10 max-w-2xl">
              We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — reducing risk and saving time on every order.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton to="/contact" variant="primary" className="text-base px-8 py-4">
                Get a Free Sourcing Quote
              </CTAButton>
              <CTAButton to="/how-it-works" variant="secondary" className="text-base px-8 py-4">
                See How It Works
              </CTAButton>
            </div>
            <div className="mt-12 flex flex-wrap gap-6">
              {['No upfront commitment', 'English-speaking team', 'On-site in China', 'Transparent pricing'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-blue-200 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-border py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {trustPoints.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <Icon className="w-7 h-7 text-accent" />
                <span className="text-3xl font-bold text-primary">{value}</span>
                <span className="text-text-muted text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Do"
            title="End-to-End China Sourcing Services"
            subtitle="From finding the right supplier to delivering goods to your door, we manage every step of the China sourcing process."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, href }) => (
              <Link
                key={title}
                to={href}
                className="bg-white rounded-xl p-6 border border-border hover:shadow-md hover:border-primary/20 transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-text-dark text-lg mb-2">{title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
                <div className="mt-4 flex items-center gap-1 text-accent text-sm font-medium">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/services" variant="outline">View All Services</CTAButton>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Process"
            title="How We Source for You"
            subtitle="A structured, transparent process designed to reduce risk and deliver results at every stage."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="relative p-6 rounded-xl border border-border bg-white hover:shadow-sm transition-shadow">
                <span className="text-5xl font-bold text-primary/10 absolute top-4 right-6">{step.num}</span>
                <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-4">{step.num}</span>
                <h3 className="font-bold text-text-dark text-lg mb-2">{step.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/how-it-works" variant="outline">Full Process Details</CTAButton>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Buyers Choose Us"
            title="Common Sourcing Problems We Solve"
            subtitle="Importing from China comes with real risks. Here's how we protect your business."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map(({ title, desc }) => (
              <div key={title} className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white mb-2">{title}</h3>
                    <p className="text-blue-200 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Client Results"
            title="Case Studies"
            subtitle="Real projects, real outcomes. See how we've helped buyers across industries source successfully from China."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl overflow-hidden border border-border hover:shadow-md transition-shadow">
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {cs.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 id={cs.titleId} className="font-bold text-text-dark text-lg mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-text-muted text-sm leading-relaxed mb-4">{cs.desc}</p>
                  <div className="flex items-center gap-2 text-green-700 bg-green-50 rounded-lg px-3 py-2 text-sm font-medium">
                    <TrendingUp className="w-4 h-4" />
                    {cs.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/case-studies" variant="outline">View All Case Studies</CTAButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Answers to the most common questions from buyers considering China sourcing."
          />
          <div className="flex flex-col gap-4">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group border border-border rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-text-dark hover:bg-light-blue transition-colors list-none">
                  <span>{q}</span>
                  <ChevronDown className="w-5 h-5 text-text-muted group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-5 text-text-muted text-sm leading-relaxed border-t border-border bg-white">
                  <p className="pt-4">{a}</p>
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
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Tell us what you need. We'll provide a free, no-obligation sourcing quote within 24 hours.
          </p>
          <CTAButton to="/contact" variant="secondary" className="text-base px-8 py-4">
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
