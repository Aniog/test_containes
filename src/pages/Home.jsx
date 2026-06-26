import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Search, Eye, Truck, ClipboardCheck, Users, Award, Globe, Clock, CheckCircle2, Star, ChevronRight, MessageSquare, Package, BarChart3, Factory, ThumbsUp, Zap } from 'lucide-react';

/* ─── HERO SECTION ─── */
const HeroSection = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light">
    {/* Background pattern */}
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6 border border-white/15">
            <ShieldCheck className="w-4 h-4 text-accent-light" />
            Trusted by 500+ Global Buyers
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold text-white leading-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-xl">
            We help overseas businesses find reliable suppliers in China, verify factories, inspect product quality,
            monitor production, and coordinate shipping — so you can source with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white text-base font-bold rounded-xl transition-all no-underline shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-base font-semibold rounded-xl transition-all no-underline border border-white/20"
            >
              See How It Works
            </Link>
          </div>
          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-white/15">
            {[
              { value: '500+', label: 'Clients Worldwide' },
              { value: '10+', label: 'Years Experience' },
              { value: '50+', label: 'Industry Categories' },
              { value: '98%', label: 'Satisfaction Rate' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-extrabold text-white">{stat.value}</div>
                <div className="text-xs text-blue-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Hero image area */}
        <div className="hidden lg:block relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              data-strk-img-id="hero-sourcing-factory-a7b3c9"
              data-strk-img="[hero-section-title] china factory quality control inspection warehouse"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Factory quality control and sourcing in China"
              className="w-full h-auto rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 to-transparent" />
          </div>
          {/* Floating card */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-4 max-w-[220px] animate-fade-in">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="text-sm font-bold text-text">Quality Verified</p>
                <p className="text-xs text-text-muted">Factory inspection passed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <span id="hero-section-title" className="sr-only">China Sourcing Agent for Global Buyers</span>
  </section>
);

/* ─── SERVICES OVERVIEW ─── */
const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and vet reliable suppliers from our network of 5,000+ factories across China\'s major manufacturing hubs.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site factory audits to verify licenses, production capacity, certifications, and compliance with your standards.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control',
    desc: 'Pre-production, in-line, and pre-shipment inspections to ensure products meet your specifications before they leave China.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Eye,
    title: 'Production Follow-up',
    desc: 'Regular progress updates and on-site monitoring to keep your orders on schedule and catch issues early.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'Freight forwarding, customs clearance, and logistics management for FCL, LCL, and air freight shipments.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: Package,
    title: 'Sample Management',
    desc: 'We collect, consolidate, and ship product samples so you can evaluate quality before placing bulk orders.',
    color: 'bg-cyan-50 text-cyan-600',
  },
];

const ServicesOverview = () => (
  <section id="services-section" className="py-20 md:py-28 bg-surface">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="inline-block px-4 py-1 bg-primary/5 text-primary text-sm font-semibold rounded-full mb-4">Our Services</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-text mb-4">End-to-End China Sourcing Solutions</h2>
        <p className="text-text-secondary text-lg">From finding the right supplier to delivering goods to your door — we manage every step of the sourcing process.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={s.title} className="group bg-surface border border-border rounded-2xl p-7 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
            <div className={`w-12 h-12 ${s.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
              <s.icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-text mb-2">{s.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-dark no-underline transition-colors">
          View All Services <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

/* ─── HOW IT WORKS PREVIEW ─── */
const steps = [
  { num: '01', title: 'Tell Us What You Need', desc: 'Share your product specs, target price, and quantity. We respond within 24 hours.', icon: MessageSquare },
  { num: '02', title: 'We Source & Verify Suppliers', desc: 'Our team finds matching suppliers, verifies factories, and negotiates pricing on your behalf.', icon: Search },
  { num: '03', title: 'Samples & QC Inspection', desc: 'We arrange samples, conduct quality checks, and confirm the products meet your requirements.', icon: ClipboardCheck },
  { num: '04', title: 'Production & Shipping', desc: 'We monitor manufacturing, perform pre-shipment inspection, and coordinate door-to-door delivery.', icon: Truck },
];

const HowItWorksPreview = () => (
  <section className="py-20 md:py-28 bg-surface-alt">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="inline-block px-4 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">Simple Process</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-text mb-4">How We Work</h2>
        <p className="text-text-secondary text-lg">A clear, four-step process designed to make sourcing from China straightforward and risk-free.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <div key={step.num} className="relative">
            <div className="bg-white rounded-2xl p-7 border border-border h-full">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary font-extrabold text-sm">{step.num}</span>
              </div>
              <h3 className="text-base font-bold text-text mb-2">{step.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-12 -right-4 z-10">
                <ChevronRight className="w-6 h-6 text-border" />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/how-it-works" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-dark no-underline transition-colors">
          Learn More About Our Process <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

/* ─── PROBLEMS WE SOLVE ─── */
const problems = [
  { problem: 'Uncertain about supplier reliability and credentials', solution: 'We verify every factory in person — checking licenses, capacity, and compliance before you commit.' },
  { problem: 'Receiving defective products or inconsistent quality', solution: 'Multi-stage QC inspections at pre-production, mid-production, and pre-shipment catch defects early.' },
  { problem: 'Communication barriers with Chinese suppliers', solution: 'Our bilingual team handles all supplier communication, negotiations, and documentation in your language.' },
  { problem: 'Unpredictable shipping delays and logistics issues', solution: 'We coordinate freight, customs, and delivery timelines to keep your supply chain on schedule.' },
  { problem: 'Difficulty managing orders across multiple suppliers', solution: 'One point of contact manages all your suppliers, orders, and shipments — no more juggling contacts.' },
];

const ProblemsSection = () => (
  <section className="py-20 md:py-28 bg-surface">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <span className="inline-block px-4 py-1 bg-red-50 text-red-600 text-sm font-semibold rounded-full mb-4">Common Challenges</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text mb-4">Problems We Solve for Global Buyers</h2>
          <p className="text-text-secondary text-lg mb-6">
            Sourcing from China comes with real risks. Here's how SSourcing China protects your interests at every stage.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light text-white text-sm font-semibold rounded-lg transition-colors no-underline">
            Discuss Your Sourcing Needs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="space-y-4">
          {problems.map((p, i) => (
            <div key={i} className="bg-surface-alt border border-border rounded-xl p-5 hover:border-primary/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <Zap className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text mb-1">{p.problem}</p>
                  <div className="flex items-start gap-2 mt-2">
                    <ThumbsUp className="w-4 h-4 text-success shrink-0 mt-0.5" />
                    <p className="text-sm text-text-secondary leading-relaxed">{p.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── TRUST POINTS ─── */
const trustPoints = [
  { icon: Award, title: 'Licensed & Registered', desc: 'Registered Chinese company with full business licenses and export credentials.' },
  { icon: Users, title: 'Local Team in China', desc: 'Our team is based in Guangzhou and travels to factories across China for in-person verification.' },
  { icon: Globe, title: '500+ Global Clients', desc: 'Serving buyers from the US, Europe, Australia, Middle East, and South America.' },
  { icon: Clock, title: '24-Hour Response', desc: 'We respond to all sourcing inquiries within one business day with supplier options.' },
  { icon: ShieldCheck, title: 'Transparent Pricing', desc: 'No hidden fees. Clear quotes with itemized costs for sourcing, inspection, and shipping.' },
  { icon: CheckCircle2, title: 'Quality Guarantee', desc: 'If goods don\'t match approved samples, we work with suppliers to resolve issues at no extra cost.' },
];

const TrustSection = () => (
  <section className="py-20 md:py-28 bg-gradient-to-br from-primary-dark to-primary text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="inline-block px-4 py-1 bg-white/10 text-white/90 text-sm font-semibold rounded-full mb-4">Why Choose Us</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Built on Trust & Transparency</h2>
        <p className="text-blue-100 text-lg">We earn your trust through clear communication, verified processes, and consistent results.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trustPoints.map((t) => (
          <div key={t.title} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/15 transition-colors">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-5">
              <t.icon className="w-6 h-6 text-accent-light" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">{t.title}</h3>
            <p className="text-sm text-blue-100 leading-relaxed">{t.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── PRODUCTS WE SOURCE ─── */
const productCategories = [
  { name: 'Consumer Electronics', desc: 'Phone accessories, audio devices, smart home products, LED lighting.' },
  { name: 'Home & Garden', desc: 'Furniture, kitchenware, garden tools, storage solutions, decorative items.' },
  { name: 'Apparel & Textiles', desc: 'Clothing, bags, shoes, fabrics, promotional textiles, and uniforms.' },
  { name: 'Industrial & Machinery', desc: 'CNC parts, metal fabrication, packaging machines, construction materials.' },
  { name: 'Health & Beauty', desc: 'Cosmetics packaging, wellness devices, personal care tools, supplements.' },
  { name: 'Toys & Gifts', desc: 'Promotional products, seasonal gifts, educational toys, custom merchandise.' },
];

const ProductsPreview = () => (
  <section className="py-20 md:py-28 bg-surface-alt">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="inline-block px-4 py-1 bg-primary/5 text-primary text-sm font-semibold rounded-full mb-4">Product Categories</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-text mb-4">Products We Source</h2>
        <p className="text-text-secondary text-lg">We source across a wide range of industries. If it's manufactured in China, we can find it.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {productCategories.map((cat) => (
          <div key={cat.name} className="flex items-start gap-4 bg-white border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/20 transition-all">
            <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center shrink-0">
              <Package className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-text mb-1">{cat.name}</h3>
              <p className="text-xs text-text-secondary leading-relaxed">{cat.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/products" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-dark no-underline transition-colors">
          View All Product Categories <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

/* ─── CASE STUDIES PREVIEW ─── */
const caseStudies = [
  {
    title: 'Reducing Defect Rate by 90% for a US Electronics Importer',
    industry: 'Consumer Electronics',
    result: 'Defect rate dropped from 12% to under 1.2%',
    desc: 'A US-based e-commerce brand was receiving inconsistent quality from their Chinese supplier. We conducted a factory audit, identified the root cause, and implemented a 3-stage QC process.',
  },
  {
    title: 'Cutting Sourcing Costs by 25% for a European Retailer',
    industry: 'Home & Garden',
    result: '25% cost reduction on 200+ SKUs',
    desc: 'A European home goods retailer wanted to diversify suppliers and reduce costs. We identified 8 new verified factories and negotiated improved pricing through volume consolidation.',
  },
  {
    title: 'On-Time Delivery for an Australian Construction Firm',
    industry: 'Industrial Equipment',
    result: '100% on-time delivery over 12 months',
    desc: 'An Australian construction company needed reliable supply of custom metal parts. We managed 3 suppliers, oversaw production, and coordinated monthly container shipments.',
  },
];

const CaseStudiesPreview = () => (
  <section className="py-20 md:py-28 bg-surface">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="inline-block px-4 py-1 bg-emerald-50 text-emerald-600 text-sm font-semibold rounded-full mb-4">Proven Results</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-text mb-4">Case Studies</h2>
        <p className="text-text-secondary text-lg">Real projects, real outcomes. See how we've helped businesses source from China successfully.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {caseStudies.map((cs, i) => (
          <div key={i} className="bg-surface-alt border border-border rounded-2xl p-7 hover:shadow-lg transition-all">
            <span className="inline-block px-3 py-1 bg-primary/5 text-primary text-xs font-semibold rounded-full mb-4">{cs.industry}</span>
            <h3 className="text-base font-bold text-text mb-3 leading-snug">{cs.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">{cs.desc}</p>
            <div className="bg-success/5 border border-success/20 rounded-lg p-3">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-success" />
                <span className="text-sm font-bold text-success">{cs.result}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/case-studies" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-dark no-underline transition-colors">
          View All Case Studies <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

/* ─── FAQ SECTION ─── */
const faqs = [
  {
    q: 'What types of products can you source from China?',
    a: 'We source virtually any manufactured product — from consumer electronics, apparel, and home goods to industrial components, packaging, and custom machinery. If it\'s made in China, we can find a reliable supplier for it.',
  },
  {
    q: 'How do you verify suppliers and factories?',
    a: 'We conduct on-site factory audits that include verifying business licenses, export certifications, production capacity, quality management systems, and compliance with relevant standards. We also check references from other buyers.',
  },
  {
    q: 'What are your fees?',
    a: 'We offer transparent, itemized quotes. Our sourcing fee is typically a percentage of the order value, and we provide clear pricing for inspections and shipping coordination before you commit. No hidden charges.',
  },
  {
    q: 'Can I get product samples before placing a bulk order?',
    a: 'Yes. We arrange samples from shortlisted suppliers, consolidate them if needed, and ship them to you. Sample costs and shipping are quoted upfront so there are no surprises.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Initial supplier shortlists are typically delivered within 5–7 business days. Full sourcing projects including samples, negotiation, and production setup usually take 2–4 weeks depending on product complexity.',
  },
  {
    q: 'Do you handle shipping and customs?',
    a: 'Yes. We coordinate ocean freight (FCL/LCL), air freight, and express shipping. We also handle export documentation and work with customs brokers to ensure smooth clearance at your destination port.',
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  return (
    <section className="py-20 md:py-28 bg-surface-alt">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/5 text-primary text-sm font-semibold rounded-full mb-4">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text mb-4">Frequently Asked Questions</h2>
          <p className="text-text-secondary text-lg">Clear answers to common questions about sourcing from China.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-transparent border-none cursor-pointer hover:bg-surface-alt transition-colors"
              >
                <span className="text-sm font-semibold text-text pr-4">{faq.q}</span>
                <span className={`text-text-muted transition-transform duration-200 ${openIndex === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-text-secondary leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── INQUIRY FORM ─── */
const InquiryForm = () => {
  const [formData, setFormData] = React.useState({
    name: '', email: '', company: '', phone: '', product: '', quantity: '', message: '',
  });
  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-success" />
          </div>
          <h2 className="text-2xl font-bold text-text mb-3">Thank You!</h2>
          <p className="text-text-secondary">We've received your inquiry and will respond within 24 business hours.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-28 bg-surface" id="inquiry-form">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">Get Started</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text mb-4">Get a Free Sourcing Quote</h2>
          <p className="text-text-secondary text-lg">Tell us what you need and our team will respond within 24 business hours.</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-surface-alt border border-border rounded-2xl p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-sm font-medium text-text mb-1.5">Full Name *</label>
              <input name="name" value={formData.name} onChange={handleChange} required placeholder="John Smith"
                className="w-full px-4 py-3 bg-white border border-border rounded-lg text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-text mb-1.5">Email *</label>
              <input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="john@company.com"
                className="w-full px-4 py-3 bg-white border border-border rounded-lg text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-text mb-1.5">Company</label>
              <input name="company" value={formData.company} onChange={handleChange} placeholder="Company Name"
                className="w-full px-4 py-3 bg-white border border-border rounded-lg text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-text mb-1.5">Phone</label>
              <input name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 234 567 8900"
                className="w-full px-4 py-3 bg-white border border-border rounded-lg text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-text mb-1.5">Product You Want to Source *</label>
              <input name="product" value={formData.product} onChange={handleChange} required placeholder="e.g. LED lights, phone cases, furniture"
                className="w-full px-4 py-3 bg-white border border-border rounded-lg text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-text mb-1.5">Estimated Quantity</label>
              <input name="quantity" value={formData.quantity} onChange={handleChange} placeholder="e.g. 1,000 units"
                className="w-full px-4 py-3 bg-white border border-border rounded-lg text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-text mb-1.5">Additional Details</label>
            <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Describe your requirements, target price, preferred materials, certifications needed, etc."
              className="w-full px-4 py-3 bg-white border border-border rounded-lg text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-y" />
          </div>
          <button type="submit" className="w-full md:w-auto px-10 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl transition-colors text-base cursor-pointer border-none shadow-lg">
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  );
};

/* ─── HOME PAGE ─── */
const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection />
      <ServicesOverview />
      <HowItWorksPreview />
      <ProblemsSection />
      <ProductsPreview />
      <TrustSection />
      <CaseStudiesPreview />
      <FaqSection />
      <InquiryForm />
    </div>
  );
};

export default Home;
