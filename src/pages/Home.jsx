import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory, PackageCheck,
  Star, ChevronRight, CheckCircle, ArrowRight, Users, Globe, Award,
  Phone, Mail, MessageSquare
} from 'lucide-react';

const services = [
  { icon: Search, title: 'Supplier Sourcing', desc: 'We identify and shortlist qualified Chinese manufacturers that match your product specifications, volume requirements, and budget.' },
  { icon: Factory, title: 'Factory Verification', desc: 'On-site factory audits covering production capacity, certifications, quality management systems, and financial stability.' },
  { icon: ClipboardCheck, title: 'Quality Inspection', desc: 'Pre-shipment, during-production, and container-loading inspections to ensure your products meet specifications.' },
  { icon: ShieldCheck, title: 'Production Monitoring', desc: 'Regular production follow-ups with detailed progress reports, photos, and timeline tracking.' },
  { icon: PackageCheck, title: 'Product Development', desc: 'From design to prototype, we help develop your product with the right materials and manufacturing processes.' },
  { icon: Truck, title: 'Shipping & Logistics', desc: 'Freight forwarding, customs clearance, and door-to-door delivery coordination.' },
];

const processSteps = [
  { step: '01', title: 'Tell Us Your Needs', desc: 'Share your product requirements, target price, order volume, and quality standards with our team.' },
  { step: '02', title: 'Supplier Identification', desc: 'We search our network of 5,000+ verified factories and shortlist the best matches for your project.' },
  { step: '03', title: 'Factory Audit & Sampling', desc: 'We conduct on-site audits, collect samples, and negotiate pricing on your behalf.' },
  { step: '04', title: 'Order & Production', desc: 'Once you approve, we place the order and monitor production with regular progress updates.' },
  { step: '05', title: 'Quality Control', desc: 'Our QC team inspects your goods before shipment to ensure they meet agreed specifications.' },
  { step: '06', title: 'Shipping & Delivery', desc: 'We coordinate freight, handle export documentation, and track your shipment to destination.' },
];

const products = [
  { name: 'Electronics & Components', icon: '🔌' },
  { name: 'Home & Kitchen Appliances', icon: '🏠' },
  { name: 'Furniture & Home Decor', icon: '🪑' },
  { name: 'Textiles & Garments', icon: '👕' },
  { name: 'Packaging & Printing', icon: '📦' },
  { name: 'Hardware & Tools', icon: '🔧' },
  { name: 'Auto Parts & Accessories', icon: '🚗' },
  { name: 'Sports & Outdoor Gear', icon: '⚽' },
  { name: 'Toys & Educational Products', icon: '🧸' },
  { name: 'Beauty & Personal Care', icon: '💄' },
  { name: 'Medical Devices & Supplies', icon: '🏥' },
  { name: 'Industrial Machinery', icon: '⚙️' },
];

const problems = [
  { icon: Search, title: 'Can\'t Find Reliable Suppliers', desc: 'Online platforms are full of trading companies posing as factories. We verify real manufacturers.' },
  { icon: ShieldCheck, title: 'Quality Concerns', desc: 'Inconsistent product quality can damage your brand. Our QC team ensures every shipment meets spec.' },
  { icon: MessageSquare, title: 'Communication Barriers', desc: 'Language and cultural gaps lead to misunderstandings. Our bilingual team bridges the gap.' },
  { icon: Truck, title: 'Logistics Complexity', desc: 'Shipping from China involves multiple steps. We handle the entire logistics chain for you.' },
];

const trustPoints = [
  { number: '12+', label: 'Years Experience' },
  { number: '500+', label: 'Clients Worldwide' },
  { number: '5,000+', label: 'Verified Factories' },
  { number: '15,000+', label: 'Inspections Completed' },
];

const caseStudies = [
  {
    id: 'cs1',
    title: 'European Electronics Brand Cuts Costs by 30%',
    desc: 'A German electronics brand needed a reliable PCB assembly partner. We identified 3 ISO-certified factories, conducted audits, and negotiated pricing that reduced their unit cost by 30% while maintaining quality.',
    result: '30% cost reduction, 98% on-time delivery rate',
    imgId: 'cs-electronics-a1b2c3',
    titleId: 'cs1-title',
    descId: 'cs1-desc',
  },
  {
    id: 'cs2',
    title: 'US Furniture Retailer Scales from 1 to 15 SKUs',
    desc: 'A US-based furniture startup needed to expand their product line. We sourced 5 specialized factories across Guangdong and Zhejiang, managed sampling, and coordinated production for 15 new SKUs in 6 months.',
    result: '15 new SKUs launched, 40% margin improvement',
    imgId: 'cs-furniture-d4e5f6',
    titleId: 'cs2-title',
    descId: 'cs2-desc',
  },
  {
    id: 'cs3',
    title: 'Australian Brand Avoids $200K Quality Disaster',
    desc: 'During a routine pre-shipment inspection, our QC team discovered a critical material defect in 10,000 units. We worked with the factory to rework the order before shipping, saving the client from a costly recall.',
    result: '$200K saved, zero customer returns',
    imgId: 'cs-quality-g7h8i9',
    titleId: 'cs3-title',
    descId: 'cs3-desc',
  },
];

const faqs = [
  { q: 'What is the minimum order quantity (MOQ) you work with?', a: 'We work with orders of all sizes. While MOQs vary by product and factory, we can typically help with orders starting from 500-1,000 units. For smaller quantities, we can connect you with factories that specialize in low-MOQ production.' },
  { q: 'How do you charge for your services?', a: 'We offer flexible pricing models: a percentage of order value (typically 5-10%), a fixed project fee, or a retainer for ongoing sourcing. The model depends on your order volume and service scope. Contact us for a tailored quote.' },
  { q: 'How do you verify factories?', a: 'Our team conducts on-site audits covering: business license verification, production capacity assessment, quality management systems (ISO, BSCI, etc.), equipment inspection, financial health review, and reference checks with previous clients.' },
  { q: 'Can you help with product design and development?', a: 'Yes. We have partnerships with industrial design firms and can assist with concept development, material selection, prototyping, and tooling. We ensure your design is optimized for manufacturing in China.' },
  { q: 'What regions in China do you cover?', a: 'We have team members based in Guangzhou, Shenzhen, Yiwu, Ningbo, and Qingdao, covering all major manufacturing clusters: Pearl River Delta, Yangtze River Delta, and Bohai Rim.' },
  { q: 'How long does the sourcing process take?', a: 'Initial supplier identification typically takes 1-2 weeks. Factory audits and sampling take 2-4 weeks. The full timeline depends on product complexity, but most projects move from inquiry to first shipment within 8-12 weeks.' },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            data-strk-bg-id="hero-bg-8f2a9c"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
            className="w-full h-full"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-white/90 text-sm mb-6">
              <Globe className="w-4 h-4" />
              Trusted by 500+ Global Buyers
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              We help overseas businesses find reliable Chinese suppliers, verify factories, 
              inspect quality, and manage production — so you can source with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-orange text-white font-semibold rounded-md hover:bg-brand-orange-hover transition-colors text-lg shadow-lg shadow-brand-orange/25"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-md hover:bg-white/20 transition-colors text-lg border border-white/20"
              >
                How It Works
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-10 text-sm text-gray-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" />
                No upfront fee for initial consultation
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Response within 24 hours
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" />
                English, French, Spanish support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {trustPoints.map((tp) => (
              <div key={tp.label}>
                <div className="text-3xl md:text-4xl font-extrabold text-brand-blue">{tp.number}</div>
                <div className="text-sm text-gray-500 mt-1">{tp.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">Problems We Solve</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
              Sourcing from China Shouldn't Be a Gamble
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We eliminate the common risks and frustrations international buyers face when sourcing from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem) => (
              <div key={problem.title} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <problem.icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="font-semibold text-navy mb-2">{problem.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
              End-to-End Sourcing Solutions
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              From finding the right factory to delivering finished goods to your warehouse, we handle every step.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="group p-6 rounded-lg border border-gray-200 hover:border-brand-blue hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-blue transition-colors">
                  <service.icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-navy text-lg mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-blue-dark transition-colors">
              View All Services
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
              Simple, Transparent Process
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our proven 6-step process ensures your sourcing project runs smoothly from start to finish.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((ps) => (
              <div key={ps.step} className="bg-white rounded-lg p-6 border border-gray-200 relative">
                <div className="text-5xl font-extrabold text-blue-50 mb-4">{ps.step}</div>
                <h3 className="font-semibold text-navy text-lg mb-2">{ps.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{ps.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-blue-dark transition-colors">
              Learn More About Our Process
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">Products We Source</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
              We Source Across All Major Categories
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our network spans 5,000+ factories across every major manufacturing category in China.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div key={product.name} className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-brand-blue hover:bg-blue-50/50 transition-all cursor-default">
                <span className="text-2xl">{product.icon}</span>
                <span className="text-sm font-medium text-gray-700">{product.name}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-blue-dark transition-colors">
              View All Categories
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">Case Studies</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
              Real Results for Real Clients
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              See how we've helped businesses around the world source successfully from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                <div className="aspect-[16/10] bg-gray-100 relative overflow-hidden">
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 id={cs.titleId} className="font-semibold text-navy mb-2">{cs.title}</h3>
                  <p id={cs.descId} className="text-gray-500 text-sm leading-relaxed mb-4">{cs.desc}</p>
                  <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                    <CheckCircle className="w-4 h-4" />
                    {cs.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-blue-dark transition-colors">
              View All Case Studies
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              Your Trusted Partner in China
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We combine deep local expertise with international business standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Bilingual Team', desc: 'Our team speaks English, French, Spanish, and Mandarin. No communication gaps, no misunderstandings.' },
              { icon: Award, title: 'Certified Process', desc: 'We follow ISO 9001-aligned quality management processes and AQL standards for all inspections.' },
              { icon: Globe, title: 'Local Presence', desc: 'With offices in Guangzhou, Shenzhen, Yiwu, and Ningbo, we are where the factories are.' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-navy-light rounded-full flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="font-semibold text-white text-lg mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-gray-200 rounded-lg">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-medium text-navy hover:text-brand-blue transition-colors list-none">
                  {faq.q}
                  <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-4 text-gray-500 text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-blue-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Sourcing from China?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Tell us what you need. We'll find the right factory, verify quality, and manage production — so you can focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white font-semibold rounded-md hover:bg-brand-orange-hover transition-colors text-lg shadow-lg"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+8613812345678"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-md hover:bg-white/20 transition-colors text-lg border border-white/20"
            >
              <Phone className="w-5 h-5" />
              Call Us Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}