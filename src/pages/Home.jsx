import { Link } from 'react-router-dom';
import {
  Search, Shield, ClipboardCheck, Truck, Factory, Package,
  CheckCircle, ChevronRight, Star, MapPin, HardHat,
  BarChart3, Globe, ArrowRight, ClipboardList, FileSearch,
  Ship, Warehouse, Users, Quote, MessageSquare, Phone
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and vet reliable suppliers that match your product requirements, budget, and quality standards across Chinese manufacturing hubs.',
    link: '/services'
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    desc: 'On-site audits and verification of factory credentials, production capacity, certifications, and compliance with international standards.',
    link: '/services'
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment inspections, in-process quality control, and product testing to ensure your goods meet specifications before shipping.',
    link: '/services'
  },
  {
    icon: Truck,
    title: 'Production Monitoring',
    desc: 'Regular progress tracking, milestone checks, and real-time updates to keep your production on schedule and within budget.',
    link: '/services'
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'End-to-end logistics coordination including freight forwarding, customs clearance, and door-to-door delivery to your destination.',
    link: '/services'
  },
  {
    icon: FileSearch,
    title: 'Product Sourcing Strategy',
    desc: 'Market research, cost analysis, and strategic sourcing recommendations to optimize your supply chain and maximize margins.',
    link: '/services'
  },
];

const process = [
  {
    step: '01',
    title: 'Tell Us Your Requirements',
    desc: 'Share your product specifications, budget, target price, quality standards, and any certifications needed. The more detail, the better we can serve you.',
    icon: MessageSquare,
  },
  {
    step: '02',
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team researches and screens suppliers from our vetted database and Chinese manufacturing networks, presenting you with 3-5 qualified candidates.',
    icon: Search,
  },
  {
    step: '03',
    title: 'Factory Audit & Verification',
    desc: 'We conduct on-site factory audits to verify capabilities, certifications, production capacity, and working conditions before any order is placed.',
    icon: HardHat,
  },
  {
    step: '04',
    title: 'Negotiation & Sampling',
    desc: 'We help negotiate pricing, payment terms, and lead times. Samples are arranged and evaluated to ensure they meet your specifications.',
    icon: BarChart3,
  },
  {
    step: '05',
    title: 'Production & Quality Control',
    desc: 'Throughout production, we monitor progress, conduct inspections at key milestones, and perform final quality checks before shipment.',
    icon: ClipboardCheck,
  },
  {
    step: '06',
    title: 'Shipping & Delivery',
    desc: 'We coordinate logistics, documentation, and shipping. You receive regular tracking updates until goods arrive at your destination.',
    icon: Ship,
  },
];

const productCategories = [
  { name: 'Consumer Electronics', desc: 'Smartphones, accessories, audio devices, wearables, and smart home products.', flag: '🇨🇳' },
  { name: 'Home & Kitchen', desc: 'Household goods, kitchenware, storage solutions, home decor, and cleaning products.', flag: '🇨🇳' },
  { name: 'Apparel & Textiles', desc: 'Garments, fabrics, accessories, footwear, and custom apparel manufacturing.', flag: '🇨🇳' },
  { name: 'Industrial & Machinery', desc: 'Manufacturing equipment, tools, industrial parts, and automation components.', flag: '🇨🇳' },
  { name: 'Health & Beauty', desc: 'Cosmetics, personal care products, supplements, and wellness equipment.', flag: '🇨🇳' },
  { name: 'Packaging & Printing', desc: 'Custom packaging solutions, labels, boxes, and commercial printing services.', flag: '🇨🇳' },
  { name: 'Auto Parts & Accessories', desc: 'Vehicle components, accessories, tools, and aftermarket parts.', flag: '🇨🇳' },
  { name: 'Furniture & Lighting', desc: 'Indoor and outdoor furniture, lighting fixtures, and home furnishings.', flag: '🇨🇳' },
];

const problems = [
  {
    problem: 'Hard to find trustworthy suppliers',
    solution: 'We vet every supplier through on-the-ground verification, checking licenses, capabilities, and track records before you commit.',
  },
  {
    problem: 'Quality is inconsistent or below standards',
    solution: 'Our QC team conducts inspections at every stage from raw materials to finished goods, ensuring consistent quality.',
  },
  {
    problem: 'Communication barriers and time zone differences',
    solution: 'Our bilingual team bridges the gap. We provide regular updates in your language and work your business hours.',
  },
  {
    problem: 'Hidden costs and unexpected fees',
    solution: 'We provide transparent pricing with no hidden charges. You know the full cost breakdown before any order begins.',
  },
  {
    problem: 'Shipment delays and logistics headaches',
    solution: 'We manage the entire logistics chain, coordinating with freight forwarders and tracking every shipment in real time.',
  },
  {
    problem: 'Risk of intellectual property theft',
    solution: 'We enforce strict NDAs, work with IP-safe suppliers, and implement protective measures for your product designs.',
  },
];

const stats = [
  { value: '500+', label: 'Suppliers Vetted' },
  { value: '98%', label: 'On-Time Delivery' },
  { value: '50+', label: 'Countries Served' },
  { value: '1,200+', label: 'Orders Managed' },
];

const caseStudies = [
  {
    client: 'European Retail Chain',
    product: 'Home & Kitchen Products',
    result: '40% cost reduction, consistent quality across 15 SKUs',
    desc: 'A European retailer needed to source 15 kitchen product lines. We identified 3 qualified manufacturers, negotiated pricing, and implemented a QC protocol that reduced defect rates from 8% to under 1%.',
  },
  {
    client: 'US E-commerce Brand',
    product: 'Consumer Electronics Accessories',
    result: 'Scaled from 2 to 25 SKUs in 6 months',
    desc: 'Starting with 2 accessory products, we helped this US brand scale their China supply chain to 25 SKUs with reliable quality control, resulting in 3x revenue growth.',
  },
  {
    client: 'Australian Hardware Distributor',
    product: 'Industrial Tools & Equipment',
    result: 'Reduced lead time from 90 to 45 days',
    desc: 'By restructuring the supply chain and implementing production monitoring, we cut lead times in half while improving product consistency across multiple factory partners.',
  },
];

const faqs = [
  {
    q: 'What types of products can you source?',
    a: 'We source across virtually all manufacturing categories including electronics, home goods, apparel, industrial equipment, packaging, auto parts, furniture, and more. If it is manufactured in China, we can help source it.',
  },
  {
    q: 'How do you verify suppliers?',
    a: 'We conduct on-site factory audits checking business licenses, production capabilities, quality control systems, certifications, and compliance. We also check trade records and speak with existing clients when possible.',
  },
  {
    q: 'What are your fees?',
    a: 'Our fee structure varies based on project scope. Typically we charge a percentage of order value or a fixed project fee. We provide a transparent quote upfront with no hidden costs.',
  },
  {
    q: 'Do you handle shipping and customs?',
    a: 'Yes. We coordinate freight forwarding, documentation, customs clearance, and door-to-door delivery. We work with major carriers to get competitive shipping rates.',
  },
  {
    q: 'What is the minimum order quantity?',
    a: 'MOQs vary by product category and manufacturer. We work with suppliers offering flexible MOQs and can help negotiate lower minimums for testing or smaller runs.',
  },
  {
    q: 'How do you protect my product designs?',
    a: 'We require NDAs with all suppliers, work exclusively with IP-compliant factories, and implement design protection measures. Your intellectual property is handled with strict confidentiality.',
  },
];

function SmoothAnchor({ id, children, className = '' }) {
  return (
    <a href={`#${id}`} onClick={(e) => {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }} className={className}>
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative bg-gradient-to-br from-slate-900 via-brand-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 text-sm text-slate-200">
              <Globe className="w-4 h-4" />
              Your Trusted China Sourcing Partner
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
              We help international businesses find reliable Chinese suppliers, verify factories, ensure product quality, and manage logistics end-to-end. Save time, reduce risk, and source with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent-600 hover:bg-accent-500 text-white font-semibold px-8 py-3.5 rounded-lg text-lg transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <SmoothAnchor
                id="services"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white font-medium px-8 py-3.5 rounded-lg text-lg transition-colors"
              >
                Explore Our Services
                <ChevronRight className="w-5 h-5" />
              </SmoothAnchor>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOGO / TRUST BAND ===== */}
      <section className="bg-white border-b border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-slate-500 font-medium mb-6">Trusted by buyers from around the world</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-slate-400">
            <span className="text-lg font-semibold text-slate-300">EU Retail Group</span>
            <span className="text-lg font-semibold text-slate-300">NA E-com</span>
            <span className="text-lg font-semibold text-slate-300">AU Hardware</span>
            <span className="text-lg font-semibold text-slate-300">UK Brands</span>
            <span className="text-lg font-semibold text-slate-300">SEA Dist.</span>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Sourcing Services</h2>
            <p className="text-lg text-slate-600">Comprehensive support across your entire China sourcing journey, from supplier discovery to final delivery.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((svc, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4">
                  <svc.icon className="w-6 h-6 text-brand-800" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{svc.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{svc.desc}</p>
                <Link to={svc.link} className="inline-flex items-center gap-1 text-sm font-medium text-brand-800 hover:text-brand-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="bg-brand-800 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-brand-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SOURCING PROCESS ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How Our Sourcing Process Works</h2>
            <p className="text-lg text-slate-600">A structured, transparent approach from your initial inquiry to successful delivery — no surprises, just results.</p>
          </div>
          <div className="relative">
            {/* Vertical line for desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />
            <div className="space-y-12 lg:space-y-0">
              {process.map((step, i) => (
                <div key={i} className={`lg:flex items-center gap-8 lg:gap-16 ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'} ${i > 0 ? 'lg:mt-16' : ''}`}>
                  <div className={`lg:w-1/2 ${i % 2 === 0 ? 'lg:text-right' : ''}`}>
                    <div className={`inline-flex items-center gap-3 bg-brand-50 rounded-full px-4 py-1.5 mb-3 ${i % 2 === 0 ? 'lg:ml-auto' : ''}`}>
                      <step.icon className="w-4 h-4 text-brand-800" />
                      <span className="text-sm font-semibold text-brand-800">Step {step.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                  <div className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-brand-800 text-white font-bold text-sm shrink-0 relative z-10">
                    {step.step}
                  </div>
                  <div className="lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-brand-800 font-semibold hover:text-brand-700">
              View Detailed Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS WE SOURCE ===== */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Products We Source</h2>
            <p className="text-lg text-slate-600">We source across a wide range of categories from manufacturing hubs throughout China.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {productCategories.map((cat, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <Factory className="w-5 h-5 text-brand-600" />
                  <h3 className="font-semibold text-slate-900 text-sm">{cat.name}</h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border-2 border-brand-800 text-brand-800 hover:bg-brand-50 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              View All Categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PROBLEMS WE SOLVE ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Problems We Solve</h2>
            <p className="text-lg text-slate-600">China sourcing comes with challenges. Here is how we address the most common concerns.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-xl p-6 hover:shadow-sm transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-red-500 font-bold text-lg">!</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 mb-1">{item.problem}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      <span className="text-brand-700 font-medium">Solution:</span> {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRUST POINTS ===== */}
      <section className="py-16 md:py-24 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Work With SSourcing China</h2>
            <p className="text-lg text-slate-600">We are on the ground in China with years of experience connecting global buyers with reliable manufacturers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-brand-800" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">On the Ground in China</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Our team is based in Guangzhou with direct access to manufacturing hubs across Guangdong, Zhejiang, Jiangsu, and beyond.</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-brand-800" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Bilingual Team</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Fluent in English and Chinese. No miscommunication, no lost details. We bridge the language and cultural gap seamlessly.</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-brand-800" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Rigorous Vetting</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Every supplier in our network is verified through on-site audits, trade record checks, and ongoing performance monitoring.</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-brand-800" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Transparent Reporting</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Regular updates with detailed reports, photos, and inspection results. Full visibility into every stage of your order.</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-brand-800" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Global Experience</h3>
              <p className="text-sm text-slate-600 leading-relaxed">We have served buyers from over 50 countries, understanding diverse quality standards, compliance requirements, and logistics needs.</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-brand-800" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Results-Driven Approach</h3>
              <p className="text-sm text-slate-600 leading-relaxed">We measure success by your outcomes: on-time delivery, consistent quality, cost savings, and satisfied end customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CASE STUDIES ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Case Studies</h2>
            <p className="text-lg text-slate-600">Real results from real partnerships. See how we have helped businesses optimize their China sourcing.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {caseStudies.map((cs, i) => (
              <div key={i} className="border border-slate-200 rounded-xl p-6 md:p-8 hover:shadow-md transition-shadow flex flex-col">
                <div className="mb-4">
                  <span className="text-xs text-brand-700 font-semibold bg-brand-50 rounded-full px-3 py-1">{cs.product}</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">{cs.client}</h3>
                <p className="text-sm text-brand-800 font-medium mb-3">{cs.result}</p>
                <p className="text-sm text-slate-600 leading-relaxed flex-1">{cs.desc}</p>
                <Link to="/case-studies" className="inline-flex items-center gap-1 text-sm font-medium text-brand-800 hover:text-brand-700 mt-4">
                  Read full story <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Common questions about working with a China sourcing agent.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-slate-200 group">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-medium text-slate-900 pr-4">{faq.q}</span>
                  <ChevronRight className="w-5 h-5 text-slate-400 shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="bg-gradient-to-br from-brand-800 to-brand-900 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Sourcing from China?
          </h2>
          <p className="text-lg text-brand-200 mb-8 max-w-2xl mx-auto">
            Tell us about your product needs and we will send you a free, no-obligation sourcing proposal within 48 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-500 text-white font-semibold px-8 py-3.5 rounded-lg text-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}