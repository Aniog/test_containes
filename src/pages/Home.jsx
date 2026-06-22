import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory, Star,
  ArrowRight, CheckCircle, Users, Globe, Award, TrendingUp,
  ChevronRight, MessageSquare, Package, Zap
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '500+', label: 'Verified Suppliers', icon: Factory },
  { value: '12+', label: 'Years Experience', icon: Award },
  { value: '40+', label: 'Countries Served', icon: Globe },
  { value: '98%', label: 'Client Satisfaction', icon: Star },
];

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified manufacturers that match your product specifications, MOQ, and budget requirements.',
    id: 'svc-sourcing',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site audits confirm factory capabilities, certifications, production capacity, and compliance standards.',
    id: 'svc-verify',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections ensure your products meet agreed specifications before they leave China.',
    id: 'svc-qc',
  },
  {
    icon: TrendingUp,
    title: 'Production Follow-up',
    desc: 'We monitor production timelines, communicate with factories, and flag issues before they become costly delays.',
    id: 'svc-production',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle export documentation, and ensure smooth delivery to your destination.',
    id: 'svc-shipping',
  },
  {
    icon: Package,
    title: 'Private Label & OEM',
    desc: 'From product design to branded packaging, we manage the full OEM process with reliable manufacturing partners.',
    id: 'svc-oem',
  },
];

const problems = [
  'Struggling to find reliable suppliers in China?',
  'Worried about product quality before shipment?',
  'Unsure if a factory is legitimate?',
  'Losing time managing overseas production?',
  'Facing delays and communication barriers?',
  'Overpaying due to lack of local market knowledge?',
];

const solutions = [
  'We source from verified, audited manufacturers only',
  'Independent QC inspections at every production stage',
  'On-site factory audits with detailed reports',
  'Dedicated project manager handles all follow-up',
  'Bilingual team eliminates language barriers',
  'Local market expertise ensures competitive pricing',
];

const trustPoints = [
  { icon: ShieldCheck, title: 'Independent & Unbiased', desc: 'We work for you, not the factory. Our recommendations are based solely on your best interests.' },
  { icon: Globe, title: 'China-Based Team', desc: 'Our team is on the ground in China, visiting factories and inspecting goods in person.' },
  { icon: Users, title: 'Dedicated Account Manager', desc: 'One point of contact manages your entire sourcing project from inquiry to delivery.' },
  { icon: Award, title: 'Transparent Reporting', desc: 'Detailed audit reports, inspection photos, and production updates keep you fully informed.' },
];

const faqs = [
  {
    q: 'How do you charge for your services?',
    a: 'We offer flexible pricing: a flat project fee for sourcing, or a percentage-based fee for ongoing procurement. We provide a clear quote before starting any work.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'Typically 5–10 business days to shortlist qualified suppliers, depending on product complexity. We provide regular updates throughout the process.',
  },
  {
    q: 'Can you handle small orders or samples?',
    a: 'Yes. We work with buyers at all stages, from initial samples to full production runs. We help negotiate sample terms with factories.',
  },
  {
    q: 'Do you cover all product categories?',
    a: 'We source across a wide range of categories including electronics, textiles, furniture, hardware, consumer goods, and more. Contact us to discuss your specific product.',
  },
  {
    q: 'What happens if quality issues are found?',
    a: 'We document all defects with photos and reports, then work with the factory to resolve issues before shipment. You decide whether to accept, rework, or reject the goods.',
  },
];

const testimonials = [
  {
    name: 'James Whitfield',
    company: 'HomeGoods Direct, UK',
    text: 'SSourcing China found us three qualified furniture suppliers within a week. Their factory audit reports gave us the confidence to place our first order. Quality was exactly as specified.',
    rating: 5,
  },
  {
    name: 'Maria Santos',
    company: 'Retail Solutions, Brazil',
    text: 'We had bad experiences with Chinese suppliers before. SSourcing China changed that completely. Their QC team caught issues before shipment and saved us from a costly mistake.',
    rating: 5,
  },
  {
    name: 'Erik Larsson',
    company: 'Nordic Imports, Sweden',
    text: 'Professional, responsive, and genuinely helpful. They handled everything from supplier negotiation to shipping coordination. I would not source from China without them.',
    rating: 5,
  },
];

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative bg-brand-navy overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-bg-ssourcing-a1b2c3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(26, 60, 110, 0.78)' }} />
        <div className="relative section-container py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-red-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6" style={{ backgroundColor: 'rgba(192,57,43,0.2)', border: '1px solid rgba(192,57,43,0.35)' }}>
              <Zap className="w-3.5 h-3.5" />
              <span>China-Based Sourcing Experts</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-brand-gold">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-blue-200 leading-relaxed mb-8 max-w-2xl">
              We help overseas buyers find reliable Chinese suppliers, verify factories, inspect product quality, follow production, and coordinate shipping — all from one trusted partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-red text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-brand-border">
        <div className="section-container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-brand-navy" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-brand-navy">{value}</div>
                  <div className="text-sm text-brand-muted">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-brand-bg">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">End-to-End Sourcing Services</h2>
            <p className="text-brand-muted text-lg max-w-2xl mx-auto">
              From finding the right supplier to delivering goods to your door, we manage every step of the China sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, id }) => (
              <div key={id} className="bg-white rounded-xl border border-brand-border p-6 hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-navy transition-colors">
                  <Icon className="w-6 h-6 text-brand-navy group-hover:text-white transition-colors" />
                </div>
                <h3 id={id} className="text-lg font-semibold text-brand-navy mb-2">{title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-red transition-colors">
              View All Services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-3">Common Challenges</p>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Problems We Solve for Global Buyers</h2>
              <div className="space-y-3 mb-8">
                {problems.map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-brand-red text-xs font-bold">✕</span>
                    </div>
                    <p className="text-brand-dark text-sm">{p}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-brand-navy rounded-2xl p-8">
                <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-4">Our Solutions</p>
                <div className="space-y-3">
                  {solutions.map((s) => (
                    <div key={s} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-success flex-shrink-0 mt-0.5" />
                      <p className="text-blue-100 text-sm">{s}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                  >
                    Discuss Your Sourcing Needs
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-16 md:py-24 bg-brand-bg">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-3">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">How We Source for You</h2>
            <p className="text-brand-muted text-lg max-w-2xl mx-auto">
              A structured, transparent process designed to reduce risk and deliver results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Submit Your Requirements', desc: 'Tell us what you need — product specs, target price, quantity, and timeline.' },
              { step: '02', title: 'Supplier Research & Shortlist', desc: 'We identify and vet qualified manufacturers, then present you with a curated shortlist.' },
              { step: '03', title: 'Factory Audit & Sampling', desc: 'We visit factories, verify credentials, and arrange samples for your approval.' },
              { step: '04', title: 'Production, QC & Delivery', desc: 'We monitor production, conduct inspections, and coordinate shipping to your destination.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative">
                <div className="bg-white rounded-xl border border-brand-border p-6 h-full">
                  <div className="text-4xl font-bold text-blue-100 mb-3">{step}</div>
                  <h3 className="text-base font-semibold text-brand-navy mb-2">{title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-red transition-colors">
              See Full Process Details <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Built on Transparency and Results</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-6">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-brand-navy" />
                </div>
                <h3 className="text-base font-semibold text-brand-navy mb-2">{title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-16 md:py-24 bg-brand-bg">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-3">Client Results</p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, company, text, rating }) => (
              <div key={name} className="bg-white rounded-xl border border-brand-border p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-gold fill-brand-gold" />
                  ))}
                </div>
                <p className="text-brand-dark text-sm leading-relaxed mb-4 italic">"{text}"</p>
                <div>
                  <p className="font-semibold text-brand-navy text-sm">{name}</p>
                  <p className="text-brand-muted text-xs">{company}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-red transition-colors">
              View Case Studies <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map(({ q, a }) => (
                <div key={q} className="bg-brand-bg rounded-xl border border-brand-border p-6">
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-2">{q}</h4>
                      <p className="text-brand-muted text-sm leading-relaxed">{a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-20 bg-brand-navy">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China with Confidence?
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            Tell us what you need. We'll provide a free consultation and sourcing quote within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
