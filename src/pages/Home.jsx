import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, Shield, ClipboardCheck, Truck, ArrowRight,
  CheckCircle, AlertTriangle, DollarSign, Clock,
  Star, Users, Award, Globe, ChevronDown, ChevronUp,
  Factory, Package, FileText, Headphones
} from 'lucide-react';

// Hero Section
function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-gradient-to-br from-[#0A1628] via-[#0F4C81] to-[#0A3659] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          data-strk-bg-id="hero-bg-1a2b3c"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
          className="absolute inset-0 bg-cover bg-center"
        />
      </div>
      <div className="container-custom relative z-10 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
            <Globe className="w-4 h-4" />
            <span>Trusted by buyers in 40+ countries</span>
          </div>
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
            We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/how-it-works" className="btn-outline border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50 text-lg px-8 py-4">
              See How It Works
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 md:gap-8">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-accent">500+</div>
              <div className="text-sm text-white/60 mt-1">Verified Suppliers</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-accent">1,200+</div>
              <div className="text-sm text-white/60 mt-1">Orders Completed</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-accent">98%</div>
              <div className="text-sm text-white/60 mt-1">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services = [
    {
      icon: Search,
      title: 'Product Sourcing',
      description: 'We find the right suppliers for your products, negotiate prices, and handle all communication in Chinese.',
      link: '/services'
    },
    {
      icon: Shield,
      title: 'Supplier Verification',
      description: 'We verify factory licenses, production capacity, and quality systems before you place any orders.',
      link: '/services'
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Pre-shipment inspections ensure your products meet specifications before they leave the factory.',
      link: '/services'
    },
    {
      icon: Factory,
      title: 'Production Follow-up',
      description: 'We monitor production progress, report issues early, and keep you informed at every stage.',
      link: '/services'
    },
    {
      icon: Truck,
      title: 'Shipping Coordination',
      description: 'We arrange freight forwarding, customs documentation, and door-to-door delivery worldwide.',
      link: '/services'
    },
    {
      icon: FileText,
      title: 'Sample Management',
      description: 'We collect samples from multiple suppliers, consolidate them, and ship them to you for evaluation.',
      link: '/services'
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">Our Sourcing Services</h2>
          <p className="section-subtitle mx-auto">
            End-to-end sourcing support from supplier discovery to delivery at your door.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link key={index} to={service.link} className="card group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
              <span className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Process Section
function ProcessSection() {
  const steps = [
    { step: '01', title: 'Submit Your Request', description: 'Tell us what products you need, your specifications, and target price.' },
    { step: '02', title: 'Supplier Matching', description: 'We search our network and identify the best suppliers for your needs.' },
    { step: '03', title: 'Verification & Sampling', description: 'We verify factories and collect samples for your approval.' },
    { step: '04', title: 'Production & QC', description: 'We monitor production and conduct quality inspections before shipment.' },
    { step: '05', title: 'Shipping & Delivery', description: 'We arrange freight and handle all documentation for smooth delivery.' },
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">How Our Sourcing Process Works</h2>
          <p className="section-subtitle mx-auto">
            A transparent, step-by-step process that keeps you in control.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-4">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              <div className="card text-center h-full">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 lg:-right-2 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-5 h-5 text-primary/40" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/how-it-works" className="btn-secondary">
            Learn More About Our Process
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Products Section
function ProductsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const products = [
    { title: 'Electronics & Components', desc: 'PCBs, sensors, consumer electronics', imgId: 'prod-electronics-1a2b' },
    { title: 'Machinery & Equipment', desc: 'Industrial machines, tools, automation', imgId: 'prod-machinery-2c3d' },
    { title: 'Consumer Goods', desc: 'Home products, gifts, personal care', imgId: 'prod-consumer-3e4f' },
    { title: 'Building Materials', desc: 'Hardware, fixtures, construction supplies', imgId: 'prod-building-4g5h' },
    { title: 'Textiles & Apparel', desc: 'Fabrics, garments, accessories', imgId: 'prod-textiles-5i6j' },
    { title: 'Auto Parts & Accessories', desc: 'Components, tools, aftermarket parts', imgId: 'prod-auto-6k7l' },
  ];

  return (
    <section ref={containerRef} className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">Products We Source</h2>
          <p className="section-subtitle mx-auto">
            We source a wide range of products from verified Chinese manufacturers.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <Link key={index} to="/products" className="card group overflow-hidden p-0">
              <div className="aspect-video relative overflow-hidden">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.title}-desc] [${product.title}-title] [products-subtitle] [products-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 id={`${product.title}-title`} className="text-lg font-semibold text-foreground mb-1">{product.title}</h3>
                <p id={`${product.title}-desc`} className="text-muted-foreground text-sm">{product.desc}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/products" className="btn-outline">
            View All Product Categories
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Problems Section
function ProblemsSection() {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Unreliable Suppliers',
      description: 'Many suppliers on B2B platforms are trading companies or have no real production capacity. We verify every factory before introduction.'
    },
    {
      icon: DollarSign,
      title: 'Hidden Costs',
      description: 'Unexpected fees for samples, shipping, and customs can blow your budget. We provide transparent pricing with no surprises.'
    },
    {
      icon: Clock,
      title: 'Communication Barriers',
      description: 'Language differences and time zones slow down negotiations. Our bilingual team handles all communication for you.'
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Issues',
      description: 'Products that look good in photos may not meet your standards. We inspect every order before shipment.'
    }
  ];

  return (
    <section className="section-padding bg-[#0A1628] text-white">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title text-white">Problems We Solve for Buyers</h2>
          <p className="section-subtitle mx-auto text-white/70">
            Sourcing from China can be risky. We remove the uncertainty.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{problem.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Trust Points Section
function TrustSection() {
  const trustPoints = [
    { icon: Users, stat: '40+', label: 'Countries Served' },
    { icon: Factory, stat: '500+', label: 'Verified Factories' },
    { icon: Package, stat: '1,200+', label: 'Orders Completed' },
    { icon: Star, stat: '98%', label: 'Client Satisfaction' },
    { icon: Award, stat: '10+', label: 'Years Experience' },
    { icon: Headphones, stat: '24/7', label: 'Support Available' },
  ];

  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title text-white">Why Buyers Trust Us</h2>
          <p className="section-subtitle mx-auto text-white/70">
            Numbers that reflect our commitment to reliable sourcing.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustPoints.map((point, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <point.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{point.stat}</div>
              <div className="text-sm text-white/60">{point.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Case Studies Preview
function CaseStudiesPreview() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const cases = [
    {
      title: 'US Retailer Saves 30% on Electronics Sourcing',
      description: 'A US electronics retailer needed a reliable supplier for smart home devices. We verified 8 factories, negotiated pricing, and managed quality control for their first 10,000-unit order.',
      result: '30% cost savings, zero defect rate',
      imgId: 'case-electronics-1a2b'
    },
    {
      title: 'European Brand Launches Custom Packaging Line',
      description: 'A European cosmetics brand wanted custom packaging from China. We found a certified manufacturer, managed the tooling process, and ensured all materials met EU standards.',
      result: 'On-time delivery, full compliance',
      imgId: 'case-packaging-2c3d'
    },
    {
      title: 'Australian Builder Sources Construction Materials',
      description: 'An Australian construction company needed bulk building materials. We coordinated with multiple suppliers, consolidated shipments, and handled all customs documentation.',
      result: '15% under budget, 2-week early delivery',
      imgId: 'case-construction-3e4f'
    }
  ];

  return (
    <section ref={containerRef} className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">Recent Case Studies</h2>
          <p className="section-subtitle mx-auto">
            Real results from real sourcing projects.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((item, index) => (
            <Link key={index} to="/case-studies" className="card group overflow-hidden p-0">
              <div className="aspect-video relative overflow-hidden">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.title}-desc] [${item.title}-title] [case-studies-subtitle] [case-studies-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 id={`${item.title}-title`} className="text-lg font-semibold text-foreground mb-2 line-clamp-2">{item.title}</h3>
                <p id={`${item.title}-desc`} className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{item.description}</p>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-3 py-1.5 rounded-full">
                  <CheckCircle className="w-4 h-4" />
                  {item.result}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/case-studies" className="btn-outline">
            View All Case Studies
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How do you find suppliers?',
      answer: 'We use our network of verified factories, industry databases, and on-the-ground research in major manufacturing regions. Every supplier goes through a verification process before we introduce them to you.'
    },
    {
      question: 'What are your fees?',
      answer: 'Our fees depend on the scope of services you need. We offer transparent pricing with no hidden costs. Contact us for a free quote tailored to your sourcing requirements.'
    },
    {
      question: 'Do you handle shipping and customs?',
      answer: 'Yes. We coordinate with reliable freight forwarders to arrange sea, air, or express shipping. We also prepare all necessary customs documentation for smooth clearance.'
    },
    {
      question: 'Can I visit the factory before ordering?',
      answer: 'Absolutely. We can arrange factory visits for you, or conduct video tours if travel is not possible. We always recommend visiting or verifying a factory before placing large orders.'
    },
    {
      question: 'What if the quality is not acceptable?',
      answer: 'We conduct pre-shipment inspections and provide detailed reports. If quality does not meet your specifications, we work with the supplier to resolve the issue before goods are shipped.'
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Typical timelines: supplier identification (3-7 days), sampling (1-3 weeks), production (2-8 weeks depending on product), and shipping (1-6 weeks depending on method). We provide a detailed timeline for each project.'
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle mx-auto">
            Common questions about sourcing from China with SSourcing China.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="card p-0 overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium text-foreground pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Inquiry Form Section
function InquiryFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <section className="section-padding bg-secondary">
        <div className="container-custom max-w-2xl text-center">
          <div className="card">
            <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
            <p className="text-muted-foreground">
              We have received your sourcing request. Our team will review it and contact you within 24 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="section-title">Get a Free Sourcing Quote</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Tell us what you need, and we will get back to you within 24 hours with a detailed sourcing plan and quote.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Quick Response</h4>
                  <p className="text-muted-foreground text-sm">We respond to all inquiries within 24 hours.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Free Quote</h4>
                  <p className="text-muted-foreground text-sm">No obligation. Get a detailed sourcing plan at no cost.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Confidential</h4>
                  <p className="text-muted-foreground text-sm">Your product details and business information are kept strictly confidential.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-white"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-white"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1.5">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-white"
                  placeholder="Your Company Ltd."
                />
              </div>
              <div>
                <label htmlFor="product" className="block text-sm font-medium text-foreground mb-1.5">Product Description *</label>
                <input
                  type="text"
                  id="product"
                  name="product"
                  required
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-white"
                  placeholder="e.g., Custom packaging boxes, 5000 units"
                />
              </div>
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-foreground mb-1.5">Estimated Quantity</label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-white"
                  placeholder="e.g., 1000-5000 units"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Additional Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-white resize-none"
                  placeholder="Any specific requirements, target price, or timeline..."
                />
              </div>
              <button type="submit" className="btn-primary w-full text-lg py-3.5">
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <p className="text-xs text-muted-foreground text-center">
                We will never share your information with third parties.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Banner
function CTABanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-[#0A3659] text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Source from China?</h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Let us handle the complexity. You focus on growing your business.
        </p>
        <Link to="/contact" className="btn-primary text-lg px-8 py-4 bg-accent hover:bg-[#D4691F]">
          Get a Free Sourcing Quote
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </section>
  );
}

// Home Page
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesPreview />
      <FAQSection />
      <InquiryFormSection />
      <CTABanner />
    </>
  );
}
