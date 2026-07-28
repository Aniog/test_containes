import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Factory, 
  Shield, 
  Truck, 
  Search, 
  ClipboardCheck, 
  Package, 
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Star,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 opacity-10"
        data-strk-bg-id="hero-bg-001"
        data-strk-bg="[hero-title] [hero-subtitle] sourcing agent factory"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>Trusted by 500+ Global Buyers</span>
            </div>
            
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            
            <p id="hero-subtitle" className="text-lg text-text-muted mb-8 leading-relaxed">
              We help overseas businesses find reliable suppliers, verify factories, inspect quality, and coordinate seamless shipping from China. Your trusted partner for risk-free procurement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-white transition-colors inline-flex items-center justify-center gap-2"
              >
                See How It Works
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-8 mt-12 pt-8 border-t border-border">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm text-text-muted">Verified Suppliers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm text-text-muted">Quality Inspected</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm text-text-muted">On-Time Delivery</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                data-strk-img-id="hero-img-001"
                data-strk-img="[hero-title] [hero-subtitle] factory warehouse China"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="China Factory Warehouse"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-semibold text-lg">Trusted Sourcing Partner</p>
                <p className="text-white/80 text-sm">Since 2015</p>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -left-6 top-1/4 bg-white rounded-xl shadow-xl p-4 max-w-[200px]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <Factory className="w-6 h-6 text-success" />
                </div>
                <div>
                  <p className="font-bold text-text-dark text-xl">200+</p>
                  <p className="text-text-muted text-sm">Verified Factories</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 bottom-1/4 bg-white rounded-xl shadow-xl p-4 max-w-[200px]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-text-dark text-xl">98%</p>
                  <p className="text-text-muted text-sm">Client Satisfaction</p>
                </div>
              </div>
            </div>
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
      title: 'Supplier Verification',
      description: 'We verify supplier credentials, business licenses, factory capacity, and production capabilities to ensure legitimacy.',
      color: 'bg-blue-500',
    },
    {
      icon: Factory,
      title: 'Factory Audits',
      description: 'Comprehensive on-site audits including production lines, quality management systems, and compliance verification.',
      color: 'bg-green-500',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Control',
      description: 'Pre-shipment inspections, during-production checks, and final random inspection to guarantee product quality.',
      color: 'bg-purple-500',
    },
    {
      icon: Package,
      title: 'Production Follow-up',
      description: 'Regular production updates, milestone tracking, and sample approval to keep your order on schedule.',
      color: 'bg-orange-500',
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'End-to-end logistics coordination including freight forwarding, customs clearance, and door-to-door delivery.',
      color: 'bg-teal-500',
    },
    {
      icon: Shield,
      title: 'Sample Management',
      description: 'Sample sourcing, evaluation, and approval process management to ensure products meet your specifications.',
      color: 'bg-red-500',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Our Sourcing Services
          </h2>
          <p className="text-text-muted text-lg">
            Comprehensive sourcing solutions to help you source products from China with confidence. We handle every step of the process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-3">{service.title}</h3>
              <p className="text-text-muted leading-relaxed mb-6">
                {service.description}
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-light transition-colors"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
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
      title: 'Submit Your Request',
      description: 'Tell us what products you need, quantity, target price, and any specific requirements.',
    },
    {
      number: '02',
      title: 'We Find Suppliers',
      description: 'Our team researches and identifies verified manufacturers matching your criteria.',
    },
    {
      number: '03',
      title: 'Supplier Verification',
      description: 'We conduct factory audits, verify credentials, and assess production capabilities.',
    },
    {
      number: '04',
      title: 'Sample & Negotiation',
      description: 'We request samples, negotiate prices, and finalize terms with the selected supplier.',
    },
    {
      number: '05',
      title: 'Production & QC',
      description: 'We monitor production progress and conduct quality inspections throughout the process.',
    },
    {
      number: '06',
      title: 'Shipping & Delivery',
      description: 'We coordinate logistics, handle customs, and ensure safe delivery to your door.',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            How Our Sourcing Process Works
          </h2>
          <p className="text-text-muted text-lg">
            A transparent, step-by-step approach to sourcing from China. We guide you through every stage of the process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 h-full border border-border hover:shadow-lg transition-shadow">
                <div className="text-6xl font-bold text-primary/10 absolute top-4 right-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-3 relative z-10">
                  {step.title}
                </h3>
                <p className="text-text-muted leading-relaxed relative z-10">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -bottom-4 left-1/2 w-8 h-8 bg-accent rounded-full flex items-center justify-center transform -translate-x-1/2 translate-y-full">
                  <ArrowRight className="w-4 h-4 text-white rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Learn more about our process <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProductsSection = () => {
  const products = [
    {
      name: 'Electronics & Tech',
      items: 'Consumer Electronics, Smart Devices, PC Accessories',
      image: 'electronics',
    },
    {
      name: 'Home & Garden',
      items: 'Furniture, Decor, Kitchenware, Outdoor',
      image: 'home',
    },
    {
      name: 'Apparel & Textiles',
      items: 'Clothing, Fabrics, Accessories, Shoes',
      image: 'apparel',
    },
    {
      name: 'Industrial Equipment',
      items: 'Machinery, Tools, Parts, Components',
      image: 'industrial',
    },
    {
      name: 'Packaging & Printing',
      items: 'Boxes, Labels, Bags, Custom Printing',
      image: 'packaging',
    },
    {
      name: 'Health & Beauty',
      items: 'Cosmetics, Personal Care, Wellness Products',
      image: 'beauty',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Products We Source
          </h2>
          <p className="text-text-muted text-lg">
            We have established relationships with manufacturers across various industries in China.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-background hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                <Package className="w-16 h-16 text-primary/30 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-dark mb-2">{product.name}</h3>
                <p className="text-text-muted text-sm">{product.items}</p>
              </div>
              <Link
                to="/products"
                className="absolute inset-0"
              >
                <span className="sr-only">View {product.name}</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-text-muted mb-4">
            Don't see your product category? We source across many industries.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Discuss Your Sourcing Needs
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProblemsSection = () => {
  const problems = [
    {
      icon: Shield,
      title: 'Risk of Fraud',
      solution: 'We verify every supplier through on-site factory audits and background checks.',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Issues',
      solution: 'Our QC team conducts inspections at multiple production stages.',
    },
    {
      icon: Factory,
      title: 'Language Barriers',
      solution: 'Native Mandarin speakers handle all communications with factories.',
    },
    {
      icon: Truck,
      title: 'Complex Logistics',
      solution: 'We coordinate end-to-end shipping, customs, and delivery.',
    },
    {
      icon: Search,
      title: 'Finding Reliable Suppliers',
      solution: 'Access our network of 200+ pre-vetted manufacturers.',
    },
    {
      icon: Package,
      title: 'Sample Management',
      solution: 'We handle sample requests, testing, and approval process.',
    },
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Problems We Solve
          </h2>
          <p className="text-white/70 text-lg">
            Sourcing from China comes with challenges. We help you overcome them all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-colors">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-white/70 leading-relaxed">
                {item.solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '500+', label: 'Clients Worldwide' },
    { number: '200+', label: 'Verified Factories' },
    { number: '98%', label: 'Client Satisfaction' },
  ];

  const certifications = [
    'ISO 9001', 'SGS', 'BV', 'TUV', 'Intertek'
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-text-muted">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center">
          <p className="text-text-muted mb-8">Trusted by leading companies, certified by international standards</p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {certifications.map((cert, index) => (
              <div key={index} className="px-6 py-3 bg-white rounded-lg border border-border text-text-muted font-semibold">
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CaseStudiesSection = () => {
  const cases = [
    {
      company: 'TechStart Inc.',
      industry: 'Electronics',
      challenge: 'Needed to source 50,000 smartphone accessories from China',
      result: 'Saved 35% on costs, delivered on time with zero quality issues',
      year: '2024',
    },
    {
      company: 'HomeGoods Co.',
      industry: 'Home & Garden',
      challenge: 'Finding reliable supplier for kitchenware products',
      result: 'Connected with certified factory, 99% inspection pass rate',
      year: '2023',
    },
    {
      company: 'FashionLine Ltd.',
      industry: 'Apparel',
      challenge: 'Complex supply chain for textile manufacturing',
      result: 'End-to-end solution, reduced lead time by 40%',
      year: '2024',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Success Stories
          </h2>
          <p className="text-text-muted text-lg">
            See how we've helped businesses source products from China successfully.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <div key={index} className="bg-background rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-text-muted">{caseStudy.industry}</span>
                <span className="text-sm text-primary font-medium">{caseStudy.year}</span>
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-4">{caseStudy.company}</h3>
              <div className="mb-4">
                <p className="text-sm text-text-muted mb-2"><strong>Challenge:</strong></p>
                <p className="text-text-dark text-sm">{caseStudy.challenge}</p>
              </div>
              <div>
                <p className="text-sm text-text-muted mb-2"><strong>Result:</strong></p>
                <p className="text-success font-semibold text-sm">{caseStudy.result}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-light transition-colors"
          >
            View All Case Studies
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: 'How do you verify suppliers?',
      answer: 'We conduct comprehensive factory audits including on-site inspections, verification of business licenses, assessment of production capacity, and background checks. We also request references from existing clients.',
    },
    {
      question: 'What are your fees?',
      answer: 'Our fee structure depends on the services you require. We offer transparent pricing with no hidden costs. Contact us for a customized quote based on your specific sourcing needs.',
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'The timeline varies depending on product complexity and supplier availability. Typically, supplier verification takes 1-2 weeks, sample approval 2-4 weeks, and production 4-8 weeks.',
    },
    {
      question: 'Do you handle shipping and customs?',
      answer: 'Yes, we provide end-to-end logistics support including freight forwarding, customs clearance documentation, and coordination of door-to-door delivery.',
    },
    {
      question: 'Can you inspect products before shipping?',
      answer: 'Absolutely. We offer comprehensive quality control services including pre-production inspections, during-production inspections, pre-shipment inspections, and container loading supervision.',
    },
    {
      question: 'What industries do you work with?',
      answer: 'We work with a wide range of industries including electronics, home goods, apparel, industrial equipment, packaging, and more. Contact us to discuss your specific product requirements.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-text-muted text-lg">
            Get answers to common questions about our sourcing services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl mb-4 border border-border overflow-hidden">
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-text-dark">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-text-muted flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-text-muted flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-text-muted leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    productType: '',
    quantity: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">
              Get Your Free Sourcing Quote
            </h2>
            <p className="text-text-muted text-lg mb-8">
              Tell us about your sourcing needs and we'll connect you with verified suppliers in China.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-dark mb-1">Our Office</h4>
                  <p className="text-text-muted">Guangzhou, China</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-dark mb-1">Email Us</h4>
                  <p className="text-text-muted">info@ssourcing-china.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-dark mb-1">Call Us</h4>
                  <p className="text-text-muted">+86 123 4567 8900</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Star className="w-5 h-5 text-accent" />
                <span className="font-semibold text-text-dark">Quick Response</span>
              </div>
              <p className="text-text-muted text-sm">
                We respond to all inquiries within 24 hours. Get a detailed quote within 2-3 business days.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                    placeholder="Your Company Ltd"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Product Type *
                  </label>
                  <select
                    name="productType"
                    required
                    value={formData.productType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                  >
                    <option value="">Select product type</option>
                    <option value="electronics">Electronics</option>
                    <option value="home">Home & Garden</option>
                    <option value="apparel">Apparel & Textiles</option>
                    <option value="industrial">Industrial Equipment</option>
                    <option value="packaging">Packaging</option>
                    <option value="beauty">Health & Beauty</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Estimated Quantity
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                    placeholder="e.g., 10,000 units"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-dark mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors resize-none"
                  placeholder="Tell us about your sourcing requirements, target price, and any specific needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-hover text-white py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Submit Inquiry
              </button>

              <p className="text-center text-text-muted text-sm">
                By submitting, you agree to our Privacy Policy. We'll never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;