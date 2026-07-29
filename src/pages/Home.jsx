import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory, Globe,
  CheckCircle, ArrowRight, Star, Users, Package, TrendingUp,
  AlertTriangle, Clock, DollarSign, HelpCircle, ChevronDown
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import SectionHeader from '@/components/shared/SectionHeader';
import CTABanner from '@/components/shared/CTABanner';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified manufacturers that match your product specs, MOQ, and budget — saving you weeks of research.',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site audits covering production capacity, certifications, workforce, and compliance. Know exactly who you are buying from.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment, during-production, and container loading inspections following AQL standards. Catch defects before they ship.',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'Regular factory visits and progress reports keep your order on schedule. We flag issues early so you can act fast.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We work with freight forwarders to arrange sea, air, or express shipping, handle documentation, and track your cargo.',
  },
  {
    icon: Package,
    title: 'Sample Procurement',
    desc: 'We source, evaluate, and ship product samples to you before you commit to a full order — reducing risk significantly.',
  },
];

const steps = [
  { num: '01', title: 'Submit Your Inquiry', desc: 'Tell us what you need — product type, quantity, target price, and any specific requirements.' },
  { num: '02', title: 'Sourcing & Shortlisting', desc: 'Our team identifies 3–5 qualified suppliers and sends you a detailed comparison report within 5 business days.' },
  { num: '03', title: 'Factory Audit & Samples', desc: 'We visit shortlisted factories, verify credentials, and arrange samples for your review.' },
  { num: '04', title: 'Order & Production', desc: 'Once you confirm, we place the order, follow production progress, and report back regularly.' },
  { num: '05', title: 'Inspection & Shipping', desc: 'Pre-shipment inspection is conducted. We coordinate logistics and send you tracking details.' },
];

const products = [
  'Electronics & Components', 'Furniture & Home Decor', 'Apparel & Textiles',
  'Machinery & Industrial', 'Toys & Baby Products', 'Health & Beauty',
  'Sports & Outdoor', 'Packaging & Printing', 'Auto Parts', 'LED Lighting',
  'Hardware & Tools', 'Pet Products',
];

const problems = [
  { icon: AlertTriangle, title: 'Unreliable Suppliers', desc: 'Factories that overpromise and underdeliver. We verify before you commit.' },
  { icon: DollarSign, title: 'Hidden Costs', desc: 'Unexpected fees and poor pricing. We negotiate directly and transparently.' },
  { icon: ClipboardCheck, title: 'Quality Failures', desc: 'Defective goods arriving at your warehouse. Our inspections catch issues early.' },
  { icon: Clock, title: 'Delayed Shipments', desc: 'Production delays that disrupt your business. We monitor and escalate proactively.' },
  { icon: Globe, title: 'Language Barriers', desc: 'Miscommunication with Chinese factories. Our bilingual team bridges the gap.' },
  { icon: ShieldCheck, title: 'Compliance Risks', desc: 'Products failing safety or import standards. We check certifications upfront.' },
];

const trustPoints = [
  { value: '500+', label: 'Verified Suppliers' },
  { value: '12+', label: 'Years in China Sourcing' },
  { value: '40+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction Rate' },
];

const caseStudies = [
  {
    id: 'cs-1',
    category: 'Electronics',
    title: 'US Retailer Saves 22% on LED Lighting Costs',
    result: '22% cost reduction, zero defects on 50,000 units',
    imgId: 'cs-home-1-img-a3f9b2',
    titleId: 'cs-home-1-title',
    descId: 'cs-home-1-desc',
    desc: 'LED lighting factory audit and quality inspection for US retail chain',
  },
  {
    id: 'cs-2',
    category: 'Furniture',
    title: 'UK Brand Launches Private Label Furniture Line',
    result: 'First order delivered on time, 3 new SKUs launched',
    imgId: 'cs-home-2-img-b7c4d1',
    titleId: 'cs-home-2-title',
    descId: 'cs-home-2-desc',
    desc: 'Private label furniture sourcing and production follow-up for UK brand',
  },
  {
    id: 'cs-3',
    category: 'Apparel',
    title: 'Australian Brand Scales Apparel Production',
    result: 'Production capacity doubled, lead time cut by 30%',
    imgId: 'cs-home-3-img-e2a8f5',
    titleId: 'cs-home-3-title',
    descId: 'cs-home-3-desc',
    desc: 'Apparel factory sourcing and production scaling for Australian fashion brand',
  },
];

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'We offer a free initial consultation and sourcing quote. Our fees depend on the scope of services required — typically a flat project fee or a small percentage of order value. We are transparent about costs upfront.',
  },
  {
    q: 'What is your minimum order value?',
    a: 'We work with buyers whose orders are typically USD 5,000 or above. For smaller orders, we can still assist with supplier introductions and sample procurement.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'For standard products, we typically present a shortlist of 3–5 qualified suppliers within 5–7 business days. Complex or highly customized products may take 10–14 days.',
  },
  {
    q: 'Do you work with specific product categories?',
    a: 'We source across a wide range of categories including electronics, furniture, apparel, machinery, toys, and more. If you are unsure, contact us and we will let you know if we can help.',
  },
  {
    q: 'Can you handle shipping and customs?',
    a: 'Yes. We coordinate with trusted freight forwarders for sea, air, and express shipping. We assist with documentation but recommend you work with a licensed customs broker in your country.',
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
      <section className="relative bg-navy-900 min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            data-strk-bg-id="hero-bg-main-7f3a9c"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
            className="w-full h-full bg-cover bg-center"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-brand-red/20 text-red-300 mb-6">
              China-Based Sourcing Agent
            </span>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              China Sourcing Agent<br />
              <span className="text-brand-red">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-navy-200 mb-10 leading-relaxed max-w-2xl">
              We help importers and brands find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — all from one trusted partner on the ground.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="primary" size="lg">Get a Free Sourcing Quote</Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline-white" size="lg">How It Works</Button>
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-6">
              {trustPoints.map((tp) => (
                <div key={tp.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">{tp.value}</div>
                  <div className="text-xs text-navy-300 mt-1">{tp.label}</div>
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
            badge="Our Services"
            title="Everything You Need to Source from China"
            subtitle="From finding the right supplier to delivering goods to your door — we manage the entire process."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Card key={s.title} hover className="p-6 md:p-8">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                  <s.icon size={22} className="text-brand-blue" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-3">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline" size="md">View All Services <ArrowRight size={16} /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Sourcing Process"
            title="How We Work With You"
            subtitle="A clear, structured process designed to reduce risk and deliver results."
          />
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gray-200 z-0" style={{ left: '10%', right: '10%' }} />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
              {steps.map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center mb-4 flex-shrink-0">
                    <span className="text-white font-bold text-sm">{step.num}</span>
                  </div>
                  <h4 className="font-semibold text-navy-900 mb-2 text-sm">{step.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/how-it-works">
              <Button variant="secondary" size="md">Learn More About Our Process <ArrowRight size={16} /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Product Categories"
            title="Products We Source"
            subtitle="We have established supplier networks across major manufacturing hubs in China."
          />
          <div className="flex flex-wrap gap-3 justify-center">
            {products.map((p) => (
              <span key={p} className="bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-full hover:bg-navy-50 hover:border-navy-200 hover:text-navy-900 transition-colors cursor-default">
                {p}
              </span>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products">
              <Button variant="outline" size="md">See All Product Categories <ArrowRight size={16} /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 md:py-28 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Why Buyers Need Us"
            title="Common Sourcing Problems We Solve"
            subtitle="Importing from China comes with real risks. We help you navigate them."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 bg-brand-red/20 rounded-lg flex items-center justify-center mb-4">
                  <p.icon size={18} className="text-red-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">{p.title}</h4>
                <p className="text-navy-300 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Case Studies"
            title="Results We've Delivered"
            subtitle="Real projects, real outcomes. See how we've helped buyers like you."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <Card key={cs.id} hover className="overflow-hidden">
                <div className="aspect-video overflow-hidden bg-gray-100">
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
                  <Badge variant="blue" className="mb-3">{cs.category}</Badge>
                  <h3 id={cs.titleId} className="font-semibold text-navy-900 mb-2 leading-snug">{cs.title}</h3>
                  <p id={cs.descId} className="text-gray-500 text-xs mb-4 hidden">{cs.desc}</p>
                  <div className="flex items-center gap-2 text-sm text-green-700 font-medium">
                    <CheckCircle size={15} />
                    {cs.result}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies">
              <Button variant="outline" size="md">View All Case Studies <ArrowRight size={16} /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, value: '500+', label: 'Verified Suppliers in Network' },
              { icon: Globe, value: '40+', label: 'Countries Served' },
              { icon: ShieldCheck, value: '12+', label: 'Years of China Sourcing' },
              { icon: Star, value: '98%', label: 'Client Satisfaction Rate' },
            ].map((t) => (
              <div key={t.label} className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-3">
                  <t.icon size={20} className="text-brand-blue" />
                </div>
                <div className="text-3xl font-bold text-navy-900 mb-1">{t.value}</div>
                <div className="text-sm text-gray-500">{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="FAQ"
            title="Frequently Asked Questions"
            subtitle="Answers to the most common questions from buyers new to China sourcing."
          />
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white border border-gray-100 rounded-xl group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-semibold text-navy-900 hover:text-brand-blue transition-colors">
                  {faq.q}
                  <ChevronDown size={18} className="text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Ready to Source from China with Confidence?"
        subtitle="Submit your inquiry today and receive a free sourcing assessment within 24 hours."
        buttonText="Get a Free Sourcing Quote"
      />
    </div>
  );
}
