import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship, ArrowRight,
  CheckCircle, Star, Globe, Users, Award, ChevronRight, MessageSquare
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { SectionHeader, CTAButton, Card, TrustBar } from '@/components/ui/SharedComponents';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified manufacturers that match your product specifications, MOQ, and budget.',
    id: 'svc-sourcing',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site audits confirm factory capabilities, certifications, production capacity, and compliance standards.',
    id: 'svc-factory',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections ensure your products meet agreed specifications before they leave China.',
    id: 'svc-qc',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'We monitor production milestones, communicate with factories, and flag issues before they become costly.',
    id: 'svc-production',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle documentation, and ensure your goods arrive on time.',
    id: 'svc-shipping',
  },
];

const problems = [
  'Receiving goods that don\'t match the sample',
  'Dealing with unreliable suppliers who miss deadlines',
  'Paying for products that fail quality checks',
  'Struggling with language and communication barriers',
  'Overpaying due to lack of local market knowledge',
  'Losing time managing multiple suppliers remotely',
];

const trustPoints = [
  { icon: Globe, title: 'China-Based Team', desc: 'Our team is on the ground in China, visiting factories and inspecting goods in person.' },
  { icon: Users, title: 'Dedicated Account Manager', desc: 'One point of contact for your entire sourcing project — no handoffs, no confusion.' },
  { icon: Award, title: 'Transparent Reporting', desc: 'Detailed inspection reports, factory audit summaries, and production updates at every stage.' },
  { icon: ShieldCheck, title: 'No Hidden Fees', desc: 'Clear, upfront pricing. We earn from our service fees, not supplier commissions.' },
];

const faqs = [
  {
    q: 'How do you find reliable suppliers in China?',
    a: 'We use a combination of trade databases, industry contacts, and on-site visits. Every supplier goes through a verification process before we recommend them to clients.',
  },
  {
    q: 'What is your minimum order value?',
    a: 'We work with buyers from $5,000 USD per order. For smaller orders, we can discuss consolidated purchasing options.',
  },
  {
    q: 'Do you handle all product categories?',
    a: 'We specialize in consumer goods, electronics, textiles, furniture, hardware, and industrial products. Contact us to discuss your specific category.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Typically 2–4 weeks to identify and verify suppliers, followed by sample review. Production timelines depend on the product and factory.',
  },
  {
    q: 'Can you inspect goods before shipment?',
    a: 'Yes. Pre-shipment inspection is one of our core services. We check quantity, quality, packaging, and labeling against your specifications.',
  },
];

const testimonials = [
  {
    name: 'James Whitfield',
    company: 'UK Retail Buyer',
    text: 'SSourcing China saved us from a costly mistake. Their factory audit revealed issues we never would have caught remotely. Highly professional team.',
    rating: 5,
  },
  {
    name: 'Sophie Marchand',
    company: 'French E-commerce Brand',
    text: 'We\'ve been working with them for 3 years. Consistent quality, clear communication, and they always deliver on time. Exactly what we needed.',
    rating: 5,
  },
  {
    name: 'Carlos Reyes',
    company: 'Mexican Importer',
    text: 'Their production follow-up service is excellent. We get weekly updates and photos. It feels like having our own team in China.',
    rating: 5,
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
      {/* Hero Section */}
      <section className="relative bg-brand-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            data-strk-bg-id="hero-bg-ss001"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <span className="inline-block bg-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              China Sourcing Agent
            </span>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
              China Sourcing Agent<br />for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
              We help importers and brands source products from China with confidence — verified suppliers, quality inspections, production monitoring, and shipping coordination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton to="/contact" variant="primary" className="text-base px-8 py-4">
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </CTAButton>
              <CTAButton to="/how-it-works" variant="white-outline" className="text-base px-8 py-4">
                How It Works
              </CTAButton>
            </div>
            <div className="mt-10 flex flex-wrap gap-6">
              {['500+ Verified Suppliers', '12+ Years in China', '30+ Countries Served'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-blue-100 text-sm">
                  <CheckCircle className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Services"
            title="Everything You Need to Source from China"
            subtitle="From finding the right supplier to getting goods delivered — we manage the entire process so you don't have to."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <Card key={svc.id} className="group">
                  <div className="w-12 h-12 bg-brand-blue-light rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-blue transition-colors">
                    <Icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                  </div>
                  <h3 id={svc.id} className="text-lg font-bold text-brand-dark mb-2">{svc.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{svc.desc}</p>
                </Card>
              );
            })}
            <Card className="bg-brand-blue border-brand-blue flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Ready to start sourcing?</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-6">Tell us what you need and we'll send you a free sourcing plan within 24 hours.</p>
              </div>
              <CTAButton to="/contact" variant="white" className="self-start">
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </CTAButton>
            </Card>
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline">
              View all services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 md:py-28 bg-brand-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-brand-orange/10 text-brand-orange text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                Problems We Solve
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 tracking-tight">
                Sourcing from China is complex.<br />We make it straightforward.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Most buyers face the same challenges when importing from China. Our team is on the ground to prevent these problems before they cost you time and money.
              </p>
              <ul className="space-y-3">
                {problems.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CTAButton to="/contact" variant="primary">
                  Discuss Your Sourcing Needs
                </CTAButton>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                data-strk-img-id="problems-img-ss002"
                data-strk-img="[problems-section-title] factory quality inspection China"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Quality inspection at a Chinese factory"
                className="w-full h-full object-cover"
                id="problems-section-title"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Process"
            title="How We Source for You"
            subtitle="A clear, step-by-step process designed to minimize risk and maximize efficiency."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Submit Your Brief', desc: 'Tell us what you need — product specs, target price, quantity, and timeline.' },
              { step: '02', title: 'Supplier Research', desc: 'We identify and vet 3–5 qualified manufacturers that match your requirements.' },
              { step: '03', title: 'Sample & Audit', desc: 'We arrange samples and conduct factory audits before you commit to an order.' },
              { step: '04', title: 'Production & Delivery', desc: 'We monitor production, inspect finished goods, and coordinate shipping to your door.' },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-brand-blue-light rounded-xl p-6 h-full">
                  <div className="text-4xl font-bold text-brand-blue/20 mb-3">{item.step}</div>
                  <h3 className="text-lg font-bold text-brand-dark mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/how-it-works" variant="secondary">
              See the Full Process
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Product Categories"
            title="Products We Source from China"
            subtitle="We have established supplier networks across major manufacturing hubs in China."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: 'Electronics', id: 'cat-electronics' },
              { label: 'Textiles & Apparel', id: 'cat-textiles' },
              { label: 'Furniture & Home', id: 'cat-furniture' },
              { label: 'Hardware & Tools', id: 'cat-hardware' },
              { label: 'Toys & Gifts', id: 'cat-toys' },
              { label: 'Industrial Parts', id: 'cat-industrial' },
            ].map((cat, i) => (
              <div key={cat.id} className="relative rounded-xl overflow-hidden aspect-square group cursor-pointer">
                <img
                  data-strk-img-id={`cat-img-ss${i + 10}`}
                  data-strk-img={`[${cat.id}] China manufacturing`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
                <span id={cat.id} className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold leading-tight">{cat.label}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline">
              View all product categories <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Why Choose Us"
            title="Why Buyers Trust SSourcing China"
            subtitle="We operate with full transparency and a clear focus on protecting your interests."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((tp) => {
              const Icon = tp.icon;
              return (
                <div key={tp.title} className="text-center p-6">
                  <div className="w-14 h-14 bg-brand-blue-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-brand-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark mb-2">{tp.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{tp.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-brand-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Client Feedback"
            title="What Our Clients Say"
            subtitle="We work with importers, brands, and retailers across Europe, North America, and beyond."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-4">"{t.text}"</p>
                <div>
                  <div className="font-semibold text-brand-dark text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.company}</div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline">
              Read full case studies <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="FAQ"
            title="Frequently Asked Questions"
            subtitle="Common questions from buyers considering working with a China sourcing agent."
          />
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-brand-dark text-sm md:text-base">{faq.q}</span>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-blue py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageSquare className="w-12 h-12 text-brand-orange mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Ready to Source from China?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Submit your sourcing brief and receive a free consultation and quote within 24 hours.
          </p>
          <CTAButton to="/contact" variant="primary" className="text-base px-8 py-4">
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
