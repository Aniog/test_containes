import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Truck,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Globe,
  Users,
  Clock,
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and evaluate reliable manufacturers across China that match your product requirements, budget, and quality standards.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'On-site audits to confirm business licenses, production capacity, quality management systems, and social compliance.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections with detailed reports and photo documentation.',
  },
  {
    icon: TrendingUp,
    title: 'Production Follow-up',
    description: 'Regular progress updates and milestone tracking to keep your orders on schedule and within specification.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support including freight forwarding, customs documentation, and delivery tracking.',
  },
];

const products = [
  'Electronics & Components',
  'Machinery & Industrial Parts',
  'Textiles & Apparel',
  'Home & Garden Products',
  'Automotive Parts',
  'Packaging Materials',
  'Consumer Goods',
  'Building Materials',
];

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    description: 'We verify every factory before you commit, reducing the risk of fraud and poor-quality output.',
  },
  {
    icon: AlertTriangle,
    title: 'Quality Issues',
    description: 'Multi-stage inspections catch defects early, before goods leave the factory.',
  },
  {
    icon: AlertTriangle,
    title: 'Communication Barriers',
    description: 'Our bilingual team bridges the language gap and ensures clear specifications.',
  },
  {
    icon: AlertTriangle,
    title: 'Shipping Delays',
    description: 'We coordinate logistics proactively and keep you informed at every stage.',
  },
];

const trustPoints = [
  { icon: Globe, label: '10+ Years', detail: 'Sourcing experience' },
  { icon: Users, label: '500+', detail: 'Global clients served' },
  { icon: CheckCircle, label: '2,000+', detail: 'Orders completed' },
  { icon: Clock, label: '24h', detail: 'Response time' },
];

const caseStudies = [
  {
    title: 'Electronics Manufacturer in Shenzhen',
    summary: 'Helped a US retailer source and verify a factory producing consumer electronics, reducing defect rate from 12% to under 2%.',
    tag: 'Electronics',
  },
  {
    title: 'Textile Supplier in Zhejiang',
    summary: 'Coordinated production follow-up and pre-shipment inspection for a European fashion brand, ensuring on-time delivery of 50,000 units.',
    tag: 'Textiles',
  },
  {
    title: 'Machinery Parts in Dongguan',
    summary: 'Identified a certified manufacturer for an Australian engineering firm, handling quality checks and freight forwarding.',
    tag: 'Machinery',
  },
];

const faqs = [
  {
    q: 'How do I start a sourcing request?',
    a: 'Simply fill out our inquiry form with your product details, quantity, and requirements. Our team will review your request and respond within 24 hours.',
  },
  {
    q: 'What industries do you cover?',
    a: 'We source across a wide range of industries including electronics, textiles, machinery, consumer goods, automotive parts, packaging, and building materials.',
  },
  {
    q: 'How do you verify suppliers?',
    a: 'We conduct on-site factory audits, verify business licenses, assess production capacity, and review quality management certifications such as ISO 9001.',
  },
  {
    q: 'What does quality inspection include?',
    a: 'Our inspections cover product specifications, workmanship, packaging, labeling, and functional testing. You receive a detailed report with photos.',
  },
  {
    q: 'Do you handle shipping and customs?',
    a: 'Yes. We coordinate with freight forwarders, prepare export documentation, and arrange delivery to your preferred port or warehouse.',
  },
  {
    q: 'What are your fees?',
    a: 'Our pricing depends on the scope of services required. We provide a transparent quote after reviewing your sourcing request. Contact us for a free estimate.',
  },
];

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex items-center justify-between py-4 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-medium text-slate-800 pr-4">{question}</span>
        <ArrowRight className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${open ? 'rotate-90' : ''}`} />
      </button>
      {open && (
        <div className="pb-4 text-slate-600 text-sm leading-relaxed">{answer}</div>
      )}
    </div>
  );
}

export default function HomePage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-a1b2c3"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality,
              follow production, and coordinate shipping from China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-500 text-white font-medium rounded-md hover:bg-slate-800 transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustPoints.map((tp, i) => (
              <div key={i} className="flex items-center gap-3">
                <tp.icon className="w-8 h-8 text-blue-700 shrink-0" />
                <div>
                  <div className="text-xl font-bold text-slate-800">{tp.label}</div>
                  <div className="text-sm text-slate-500">{tp.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">Our Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              End-to-end sourcing support from supplier identification to final delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <s.icon className="w-10 h-10 text-blue-700 mb-4" />
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800">
              View all services <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">How It Works</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A clear, structured process from your first inquiry to final delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Submit Inquiry', desc: 'Share your product requirements, quantity, and target price.' },
              { step: '2', title: 'Supplier Matching', desc: 'We identify and verify suitable manufacturers in China.' },
              { step: '3', title: 'Quality Control', desc: 'Inspections and production follow-up ensure standards are met.' },
              { step: '4', title: 'Shipping & Delivery', desc: 'We coordinate logistics and keep you informed until goods arrive.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800">
              Learn more about our process <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">Products We Source</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We work across a wide range of industries and product categories.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((p, i) => (
              <div key={i} className="bg-white rounded-lg p-4 text-center border border-gray-100 hover:border-blue-200 transition-colors">
                <span className="text-sm font-medium text-slate-700">{p}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800">
              See all product categories <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">Problems We Solve</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Sourcing from China comes with challenges. We address the most common ones.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((p, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-lg border border-gray-100 bg-gray-50">
                <p.icon className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">{p.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">Case Studies</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Real examples of how we have helped buyers source from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <span className="inline-block text-xs font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded mb-3">
                  {cs.tag}
                </span>
                <h3 className="font-semibold text-slate-800 mb-2">{cs.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{cs.summary}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800">
              View all case studies <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">Frequently Asked Questions</h2>
          </div>
          <div>
            {faqs.map((faq, i) => (
              <FaqItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Source from China?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Tell us about your product requirements and we will get back to you within 24 hours with a free sourcing quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-700 font-semibold rounded-md hover:bg-blue-50 transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
