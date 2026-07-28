import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
// Temporarily disabled for debugging
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search,
  Shield,
  ClipboardCheck,
  TrendingUp,
  Ship,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Clock,
  DollarSign,
  MessageSquare,
  FileText,
  Users,
  Award,
  ChevronDown,
  ChevronUp,
  Globe,
} from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-slate-900 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-slate-900/70" />

      <div className="container-custom relative z-10 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-blue-700/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
            <Globe className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">Trusted by 500+ Global Buyers</span>
          </div>
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
            We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary text-lg">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/how-it-works" className="btn-secondary text-lg border-slate-600 text-white hover:bg-slate-800">
              See How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'We identify and evaluate manufacturers that match your product requirements, budget, and quality standards.',
    },
    {
      icon: Shield,
      title: 'Factory Verification',
      description: 'On-site audits to verify business licenses, production capacity, quality systems, and working conditions.',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Pre-production, during-production, and pre-shipment inspections to ensure products meet your specifications.',
    },
    {
      icon: TrendingUp,
      title: 'Production Monitoring',
      description: 'Regular updates and factory visits to track production progress and address issues before they become problems.',
    },
    {
      icon: Ship,
      title: 'Shipping Coordination',
      description: 'End-to-end logistics support including customs documentation, freight forwarding, and delivery tracking.',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="heading-2 mb-4">Our Sourcing Services</h2>
          <p className="text-body">
            Comprehensive sourcing support from supplier discovery to product delivery. We handle the complexity so you can focus on growing your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-default">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="heading-3 mb-3">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/services" className="btn-primary">
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Submit Your Requirements',
      description: 'Tell us what you need: product specifications, quantity, target price, and timeline.',
    },
    {
      number: '02',
      title: 'Supplier Matching',
      description: 'We research and shortlist verified manufacturers that match your criteria.',
    },
    {
      number: '03',
      title: 'Quotation & Sampling',
      description: 'Receive competitive quotes and request samples for quality evaluation.',
    },
    {
      number: '04',
      title: 'Production & QC',
      description: 'We monitor production and conduct inspections at key milestones.',
    },
    {
      number: '05',
      title: 'Shipping & Delivery',
      description: 'Coordinate logistics, handle documentation, and track your shipment to destination.',
    },
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="heading-2 mb-4">How Our Sourcing Process Works</h2>
          <p className="text-body">
            A transparent, step-by-step approach that keeps you informed at every stage of the sourcing journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="card-default h-full">
                <div className="text-4xl font-bold text-blue-700/20 mb-4">{step.number}</div>
                <h3 className="heading-3 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-blue-700" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/how-it-works" className="btn-secondary">
            Learn More About Our Process
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProductsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const products = [
    { title: 'Electronics & Components', desc: 'Consumer electronics, PCBs, cables' },
    { title: 'Textiles & Apparel', desc: 'Fabrics, garments, accessories' },
    { title: 'Home & Garden', desc: 'Furniture, decor, outdoor products' },
    { title: 'Industrial Equipment', desc: 'Machinery, tools, hardware' },
    { title: 'Packaging Materials', desc: 'Boxes, bags, custom packaging' },
    { title: 'Automotive Parts', desc: 'Components, accessories, tools' },
  ];

  return (
    <section ref={containerRef} className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="heading-2 mb-4">Products We Source</h2>
          <p className="text-body">
            From consumer goods to industrial components, we source a wide range of products from verified Chinese manufacturers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="card-default group cursor-pointer">
              <div className="aspect-video bg-slate-100 rounded-lg mb-4 overflow-hidden">
                <img
                  data-strk-img-id={`product-img-${index + 1}`}
                  data-strk-img={`[product-desc-${index}] [product-title-${index}] [products-subtitle] [products-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 id={`product-title-${index}`} className="heading-3 mb-2">{product.title}</h3>
              <p id={`product-desc-${index}`} className="text-slate-600 text-sm">{product.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/products" className="btn-primary">
            View All Product Categories
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProblemsSection = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Unreliable Suppliers',
      description: 'We verify every supplier before you commit, reducing the risk of fraud and poor quality.',
    },
    {
      icon: Clock,
      title: 'Communication Barriers',
      description: 'Our bilingual team bridges the language gap and ensures clear communication with factories.',
    },
    {
      icon: DollarSign,
      title: 'Hidden Costs',
      description: 'Transparent pricing with no surprise fees. You know exactly what you are paying for.',
    },
    {
      icon: MessageSquare,
      title: 'Quality Issues',
      description: 'Multi-stage inspections catch defects early, saving you from costly returns and rejections.',
    },
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="heading-2 mb-4">Problems We Solve for Global Buyers</h2>
            <p className="text-body mb-8">
              Sourcing from China can be challenging. We remove the common pain points so you can source with confidence.
            </p>
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <problem.icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{problem.title}</h3>
                    <p className="text-slate-600 text-sm">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div
              className="aspect-square rounded-xl overflow-hidden"
              data-strk-bg-id="problems-bg-d4e5f6"
              data-strk-bg="[problems-subtitle] [problems-title]"
              data-strk-bg-ratio="1x1"
              data-strk-bg-width="800"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  const trustPoints = [
    {
      icon: Users,
      title: '500+ Clients Served',
      description: 'Trusted by buyers from 40+ countries across North America, Europe, and Asia.',
    },
    {
      icon: Award,
      title: '10+ Years Experience',
      description: 'Deep knowledge of Chinese manufacturing and international trade regulations.',
    },
    {
      icon: Shield,
      title: 'Verified Suppliers Only',
      description: 'Every supplier passes our rigorous verification process before we recommend them.',
    },
    {
      icon: FileText,
      title: 'Transparent Reporting',
      description: 'Detailed inspection reports, photos, and production updates at every stage.',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="heading-2 mb-4">Why Buyers Trust Us</h2>
          <p className="text-body">
            We have built our reputation on reliability, transparency, and results. Here is what sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => (
            <div key={index} className="card-default text-center">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-7 h-7 text-blue-700" />
              </div>
              <h3 className="heading-3 mb-2">{point.title}</h3>
              <p className="text-slate-600 text-sm">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudiesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const caseStudies = [
    {
      title: 'Electronics Manufacturer Sourcing',
      description: 'Helped a US startup find a reliable PCB manufacturer in Shenzhen, reducing costs by 30% while maintaining quality standards.',
      result: '30% cost reduction',
      industry: 'Electronics',
    },
    {
      title: 'Apparel Brand Quality Control',
      description: 'Implemented a QC system for a European fashion brand, reducing defect rates from 15% to under 2% across three factories.',
      result: 'Defect rate reduced to 2%',
      industry: 'Textiles',
    },
    {
      title: 'Furniture Import Logistics',
      description: 'Coordinated end-to-end shipping for a UK furniture retailer, handling customs clearance and warehouse delivery for 20 containers.',
      result: '20 containers delivered',
      industry: 'Home & Garden',
    },
  ];

  return (
    <section ref={containerRef} className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="heading-2 mb-4">Case Studies</h2>
          <p className="text-body">
            Real examples of how we have helped global buyers source successfully from China.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="card-default group">
              <div className="aspect-video bg-slate-100 rounded-lg mb-4 overflow-hidden">
                <img
                  data-strk-img-id={`case-study-img-${index + 1}`}
                  data-strk-img={`[case-study-desc-${index}] [case-study-title-${index}] [case-studies-subtitle] [case-studies-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded-full">
                  {study.industry}
                </span>
                <span className="inline-block bg-green-50 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
                  {study.result}
                </span>
              </div>
              <h3 id={`case-study-title-${index}`} className="heading-3 mb-2">{study.title}</h3>
              <p id={`case-study-desc-${index}`} className="text-slate-600 text-sm">{study.description}</p>
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
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How do you verify suppliers?',
      answer: 'We conduct on-site factory audits that include checking business licenses, production capacity, quality management systems, and working conditions. We also verify export history and request references from existing clients.',
    },
    {
      question: 'What is your pricing structure?',
      answer: 'Our pricing depends on the scope of services required. We offer transparent pricing with no hidden fees. Contact us for a free quote tailored to your specific sourcing needs.',
    },
    {
      question: 'Do you work with small businesses?',
      answer: 'Yes, we work with businesses of all sizes. Whether you are ordering your first container or managing a large supply chain, we provide the same level of service and attention to detail.',
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Typical sourcing timelines range from 2-4 weeks for supplier identification and sampling, plus production time which varies by product. We provide realistic timelines upfront so you can plan accordingly.',
    },
    {
      question: 'What if there are quality issues?',
      answer: 'Our multi-stage inspection process is designed to catch issues early. If problems are found, we work with the factory to resolve them before shipment. We also help negotiate compensation if defects slip through.',
    },
    {
      question: 'Can you handle shipping and customs?',
      answer: 'Yes, we provide end-to-end logistics support including freight forwarding, customs documentation, and delivery coordination. We work with trusted logistics partners to ensure smooth delivery.',
    },
  ];

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
          <p className="text-body">
            Answers to common questions about our sourcing services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-slate-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 md:px-6 pb-4 md:pb-6">
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InquiryFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="section-padding bg-blue-700">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Source from China?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Tell us about your sourcing needs and we will get back to you within 24 hours with a free quote.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-blue-100">
                <CheckCircle className="w-5 h-5 text-blue-300" />
                <span>Free initial consultation</span>
              </div>
              <div className="flex items-center gap-3 text-blue-100">
                <CheckCircle className="w-5 h-5 text-blue-300" />
                <span>No obligation quote</span>
              </div>
              <div className="flex items-center gap-3 text-blue-100">
                <CheckCircle className="w-5 h-5 text-blue-300" />
                <span>Response within 24 hours</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 md:p-8">
            <h3 className="heading-3 mb-6 text-slate-900">Get a Free Sourcing Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-1">
                  Product You Want to Source *
                </label>
                <input
                  type="text"
                  id="product"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-1">
                  Estimated Quantity
                </label>
                <input
                  type="text"
                  id="quantity"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <InquiryFormSection />
    </>
  );
};

export default HomePage;
