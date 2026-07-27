import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, Shield, CheckCircle, Truck, ArrowRight, Factory, Users,
  Globe, Award, Clock, FileCheck, Phone, Mail, Star, ChevronRight,
  BarChart3, Package, Eye, TrendingUp, AlertTriangle, Zap, Target,
  Headphones, MessageSquare, ShieldCheck, Building2, Warehouse, Ship
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We find and vet reliable suppliers across China\'s manufacturing hubs, matching your specifications with proven manufacturers.',
    link: '/services#sourcing',
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify legitimacy, production capacity, certifications, and compliance with international standards.',
    link: '/services#verification',
  },
  {
    icon: CheckCircle,
    title: 'Quality Inspection',
    description: 'Pre-shipment inspections, in-line QC checks, and AQL sampling to ensure your products meet specifications before shipping.',
    link: '/services#inspection',
  },
  {
    icon: Eye,
    title: 'Production Follow-up',
    description: 'Real-time production monitoring with regular updates, milestone tracking, and proactive issue resolution.',
    link: '/services#production',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'End-to-end shipping coordination including customs clearance, freight forwarding, and door-to-door delivery.',
    link: '/services#shipping',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Tell Us What You Need',
    description: 'Share your product specifications, target price, quantity, and delivery timeline. We\'ll review and confirm feasibility.',
  },
  {
    step: '02',
    title: 'We Source & Verify',
    description: 'Our team identifies qualified suppliers, conducts factory audits, and presents you with vetted options and samples.',
  },
  {
    step: '03',
    title: 'Production & QC',
    description: 'We manage production, conduct inspections at key stages, and keep you updated with photos and reports.',
  },
  {
    step: '04',
    title: 'Ship & Deliver',
    description: 'We handle packaging, customs documentation, and coordinate shipping to your destination with full tracking.',
  },
];

const productCategories = [
  {
    icon: Zap,
    title: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, LED products, chargers, cables, and electronic components.',
    id: 'electronics',
    titleId: 'products-electronics-title',
    descId: 'products-electronics-desc',
  },
  {
    icon: Package,
    title: 'Home & Garden',
    description: 'Furniture, kitchenware, storage solutions, garden tools, and home decor items.',
    id: 'home-garden',
    titleId: 'products-home-garden-title',
    descId: 'products-home-garden-desc',
  },
  {
    icon: Warehouse,
    title: 'Machinery & Equipment',
    description: 'Industrial machinery, manufacturing equipment, spare parts, and production line components.',
    id: 'machinery',
    titleId: 'products-machinery-title',
    descId: 'products-machinery-desc',
  },
  {
    icon: Target,
    title: 'Textiles & Apparel',
    description: 'Garments, fabrics, accessories, promotional textiles, and custom-branded clothing.',
    id: 'textiles',
    titleId: 'products-textiles-title',
    descId: 'products-textiles-desc',
  },
  {
    icon: Building2,
    title: 'Building Materials',
    description: 'Flooring, tiles, hardware, lighting fixtures, and construction supplies.',
    id: 'building',
    titleId: 'products-building-title',
    descId: 'products-building-desc',
  },
  {
    icon: Star,
    title: 'Custom & OEM Products',
    description: 'Custom-designed products, private labeling, and OEM manufacturing to your exact specifications.',
    id: 'custom',
    titleId: 'products-custom-title',
    descId: 'products-custom-desc',
  },
];

const problems = [
  {
    icon: AlertTriangle,
    problem: 'Unreliable Suppliers',
    solution: 'We verify every supplier with on-site audits, check business licenses, and validate production capabilities before you commit.',
  },
  {
    icon: TrendingUp,
    problem: 'Quality Issues',
    solution: 'Multi-stage quality inspections catch defects early. We follow AQL standards and provide detailed reports with photos.',
  },
  {
    icon: Clock,
    problem: 'Production Delays',
    solution: 'Active production monitoring with milestone tracking. We identify delays early and work with factories to keep schedules on track.',
  },
  {
    icon: Globe,
    problem: 'Communication Barriers',
    solution: 'English-speaking team on the ground in China. We bridge the language gap and handle all factory communications for you.',
  },
  {
    icon: Ship,
    problem: 'Shipping Complications',
    solution: 'Complete logistics management from factory to your door. We handle customs, documentation, and find the best freight rates.',
  },
  {
    icon: FileCheck,
    problem: 'Compliance Concerns',
    solution: 'We ensure products meet your market\'s regulatory requirements, including CE, FCC, FDA, and other certifications.',
  },
];

const trustPoints = [
  { icon: Users, value: '500+', label: 'Global Clients Served' },
  { icon: Factory, value: '2,000+', label: 'Verified Suppliers' },
  { icon: Globe, value: '50+', label: 'Countries Delivered' },
  { icon: Award, value: '10+', label: 'Years Experience' },
];

const caseStudies = [
  {
    title: 'US Retailer Reduces Costs by 35%',
    industry: 'Home Goods',
    description: 'A mid-size US retailer needed to diversify their supply chain. We sourced 12 product categories from verified suppliers, reducing their landed cost by 35% while maintaining quality standards.',
    result: '35% cost reduction',
    id: 'case-study-1',
    titleId: 'case-study-1-title',
    descId: 'case-study-1-desc',
  },
  {
    title: 'European Brand Launches Private Label',
    industry: 'Electronics',
    description: 'A European electronics brand wanted to launch their own product line. We managed the entire OEM process from design consultation to mass production and shipping.',
    result: '6-month launch timeline',
    id: 'case-study-2',
    titleId: 'case-study-2-title',
    descId: 'case-study-2-desc',
  },
  {
    title: 'Australian Importer Streamlines Supply Chain',
    industry: 'Building Materials',
    description: 'An Australian building materials importer was experiencing inconsistent quality. We implemented QC protocols and consolidated their supplier base from 15 to 5 reliable factories.',
    result: '98% quality pass rate',
    id: 'case-study-3',
    titleId: 'case-study-3-title',
    descId: 'case-study-3-desc',
  },
];

const faqs = [
  {
    question: 'How much does your sourcing service cost?',
    answer: 'Our sourcing service fees depend on the project scope, product complexity, and order volume. We offer transparent pricing with no hidden fees. Contact us for a free quote tailored to your specific needs.',
  },
  {
    question: 'How long does it take to find suppliers?',
    answer: 'For standard products, we typically present qualified supplier options within 5-7 business days. Complex or custom products may take 1-2 weeks for thorough sourcing and verification.',
  },
  {
    question: 'Do you handle small orders?',
    answer: 'Yes, we work with businesses of all sizes. While minimum order quantities vary by product and supplier, we can often negotiate MOQs as low as 100-500 units for many product categories.',
  },
  {
    question: 'What quality guarantees do you provide?',
    answer: 'We conduct inspections at multiple production stages using AQL standards. If defects exceed agreed thresholds, we work with the factory to rework or replace goods before shipping at no additional cost to you.',
  },
  {
    question: 'Can you help with product customization?',
    answer: 'Absolutely. We specialize in OEM and custom manufacturing. From product design consultation to tooling, sampling, and mass production, we manage the entire customization process.',
  },
  {
    question: 'Which countries do you ship to?',
    answer: 'We ship worldwide. Our logistics partners cover major ports and destinations globally. We handle all export documentation and can arrange door-to-door delivery to most countries.',
  },
];

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-800 via-primary-900 to-navy overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        <div className="container relative py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <ShieldCheck className="w-4 h-4 text-accent-400" />
                <span className="text-sm font-medium">Trusted by 500+ Global Buyers</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                China Sourcing Agent for Global Buyers
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl">
                Find reliable suppliers, verify factories, inspect quality, and manage shipping — all from one trusted partner on the ground in China.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary text-lg px-8 py-4 group">
                  Get a Free Sourcing Quote
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/how-it-works" className="btn-outline border-white text-white hover:bg-white hover:text-primary-800 text-lg px-8 py-4">
                  How It Works
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent-400" />
                  <span>No upfront fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent-400" />
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent-400" />
                  <span>24-hour response</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  data-strk-img-id="hero-factory-8f2a9c"
                  data-strk-img="[hero-subtitle] [hero-title] China manufacturing factory warehouse"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="China manufacturing factory"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm">Quality Verified</p>
                  <p className="text-slate-500 text-xs">100% inspected shipments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hidden text for image interpolation */}
        <span id="hero-title" className="hidden">China Sourcing Agent for Global Buyers</span>
        <span id="hero-subtitle" className="hidden">Find reliable suppliers verify factories inspect quality</span>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-slate-200">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point) => (
              <div key={point.label} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center">
                    <point.icon className="w-6 h-6 text-primary-600" />
                  </div>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-navy">{point.value}</p>
                <p className="text-sm text-slate-500 mt-1">{point.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-slate-50" id="services">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge bg-primary-100 text-primary-700 mb-4">Our Services</span>
            <h2 className="section-heading mb-4">End-to-End Sourcing Solutions</h2>
            <p className="section-subheading">
              From finding the right supplier to delivering products to your door, we handle every step of the sourcing process.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link key={service.title} to={service.link} className="card group">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                  <service.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{service.description}</p>
                <span className="text-primary-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-16 lg:py-24 bg-white" id="process">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge bg-accent-100 text-accent-700 mb-4">How It Works</span>
            <h2 className="section-heading mb-4">Simple 4-Step Sourcing Process</h2>
            <p className="section-subheading">
              We make sourcing from China straightforward and transparent. Here is how we work with you from start to finish.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {index < 3 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-slate-200 -z-10" />
                )}
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="btn-secondary">
              See Full Process Details
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 lg:py-24 bg-slate-50" id="products">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge bg-primary-100 text-primary-700 mb-4">Product Categories</span>
            <h2 className="section-heading mb-4">Products We Source</h2>
            <p className="section-subheading">
              We source a wide range of products across major manufacturing categories. Each category is handled by specialists with deep supplier networks.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((cat) => (
              <div key={cat.id} className="card group">
                <div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-100 transition-colors">
                  <cat.icon className="w-6 h-6 text-accent-600" />
                </div>
                <h3 id={cat.titleId} className="text-lg font-semibold text-navy mb-2">{cat.title}</h3>
                <p id={cat.descId} className="text-slate-500 text-sm leading-relaxed">{cat.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="btn-secondary">
              View All Product Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 lg:py-24 bg-white" id="problems">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge bg-red-100 text-red-700 mb-4">Common Challenges</span>
            <h2 className="section-heading mb-4">Problems We Solve</h2>
            <p className="section-subheading">
              Sourcing from China comes with real challenges. Here is how we help you overcome the most common ones.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((item) => (
              <div key={item.problem} className="card border-l-4 border-l-red-400">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy mb-1">{item.problem}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-16 lg:py-24 bg-slate-50" id="case-studies">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge bg-green-100 text-green-700 mb-4">Success Stories</span>
            <h2 className="section-heading mb-4">Case Studies</h2>
            <p className="section-subheading">
              See how we have helped businesses around the world source products from China successfully.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <div key={study.id} className="card">
                <div className="badge bg-green-100 text-green-700 mb-4">{study.industry}</div>
                <h3 id={study.titleId} className="text-lg font-semibold text-navy mb-2">{study.title}</h3>
                <p id={study.descId} className="text-slate-500 text-sm leading-relaxed mb-4">{study.description}</p>
                <div className="flex items-center gap-2 text-sm">
                  <BarChart3 className="w-4 h-4 text-green-600" />
                  <span className="font-semibold text-green-700">{study.result}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="btn-secondary">
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white" id="faq">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge bg-slate-100 text-slate-700 mb-4">FAQ</span>
            <h2 className="section-heading mb-4">Frequently Asked Questions</h2>
            <p className="section-subheading">
              Get answers to common questions about our sourcing services.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-800 to-navy text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Sourcing from China Today
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Tell us what you need and get a free sourcing quote within 24 hours. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4 group">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="mailto:info@ssourcingchina.com" className="btn-outline border-white text-white hover:bg-white hover:text-primary-800 text-lg px-8 py-4 flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Email Us Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// FAQ Accordion Component
const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-navy pr-4">{faq.question}</span>
        <ChevronRight className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-5 pb-5">
          <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
