import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Factory, 
  ShieldCheck, 
  PackageCheck, 
  Ship, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Users,
  Globe,
  Clock,
  Award
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { createInquiry } from '../api/inquiries';

const Home = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const productsRef = useRef(null);
  const problemsRef = useRef(null);
  const trustRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const faqRef = useRef(null);
  const inquiryRef = useRef(null);

  const [homeForm, setHomeForm] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    message: '',
  });
  const [homeStatus, setHomeStatus] = useState('idle');
  const [homeError, setHomeError] = useState(null);

  const handleHomeChange = (e) => {
    const { name, value } = e.target;
    setHomeForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleHomeSubmit = async (e) => {
    e.preventDefault();
    setHomeError(null);
    setHomeStatus('submitting');

    try {
      const payload = {
        name: homeForm.name.trim(),
        email: homeForm.email.trim(),
        company: homeForm.company.trim() || undefined,
        phone: undefined,
        product_interest: homeForm.product.trim() || undefined,
        message: homeForm.message.trim(),
        source_page: 'home',
      };

      if (homeForm.country.trim()) {
        payload.message = `${payload.message}\n\nCountry: ${homeForm.country.trim()}`
      }

      await createInquiry(payload)
      setHomeStatus('success')
      setHomeForm({
        name: '',
        email: '',
        company: '',
        country: '',
        product: '',
        message: '',
      })
    } catch (err) {
      setHomeError(err.message || 'Failed to submit inquiry')
      setHomeStatus('error')
    }
  };

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, heroRef.current);
  }, []);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, servicesRef.current);
  }, []);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, processRef.current);
  }, []);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, productsRef.current);
  }, []);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, problemsRef.current);
  }, []);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, trustRef.current);
  }, []);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, caseStudiesRef.current);
  }, []);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, faqRef.current);
  }, []);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, inquiryRef.current);
  }, []);

  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'Find verified manufacturers and suppliers matching your product requirements, budget, and quality standards.',
    },
    {
      icon: Factory,
      title: 'Factory Verification',
      description: 'On-site factory audits to verify business licenses, production capacity, quality systems, and social compliance.',
    },
    {
      icon: ShieldCheck,
      title: 'Quality Control',
      description: 'Pre-production, during-production, and pre-shipment inspections to ensure products meet your specifications.',
    },
    {
      icon: PackageCheck,
      title: 'Production Monitoring',
      description: 'Track production progress, manage timelines, and coordinate with factories to keep your orders on schedule.',
    },
    {
      icon: Ship,
      title: 'Shipping Coordination',
      description: 'Arrange logistics, handle customs documentation, and coordinate freight forwarding from factory to your door.',
    },
    {
      icon: Globe,
      title: 'Market Intelligence',
      description: 'Get insights on pricing trends, supplier landscapes, and regulatory requirements for your target products.',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Share Your Requirements',
      description: 'Tell us about your product, quantity, budget, and quality expectations. We\'ll ask the right questions to understand your needs.',
    },
    {
      step: '02',
      title: 'We Source & Verify',
      description: 'Our team finds suitable suppliers, verifies their credentials, and conducts factory audits to ensure reliability.',
    },
    {
      step: '03',
      title: 'Samples & Negotiation',
      description: 'We coordinate sample production, facilitate quality checks, and negotiate pricing and terms on your behalf.',
    },
    {
      step: '04',
      title: 'Production & QC',
      description: 'We monitor production, conduct inspections at key stages, and ensure your products meet specifications.',
    },
    {
      step: '05',
      title: 'Shipping & Delivery',
      description: 'We handle logistics, documentation, and customs clearance to get your products delivered safely and on time.',
    },
  ];

  const productCategories = [
    'Electronics & Components',
    'Home & Garden',
    'Apparel & Textiles',
    'Industrial Equipment',
    'Consumer Goods',
    'Auto Parts',
    'Health & Beauty',
    'Toys & Gifts',
  ];

  const problems = [
    {
      problem: 'Finding reliable suppliers',
      solution: 'We vet factories, check references, and verify business credentials so you work with trustworthy partners.',
    },
    {
      problem: 'Quality concerns & defects',
      solution: 'Our QC team conducts thorough inspections at every stage to catch issues before they reach your customers.',
    },
    {
      problem: 'Communication barriers',
      solution: 'Native English speakers with China market expertise bridge the gap between you and your suppliers.',
    },
    {
      problem: 'Hidden costs & delays',
      solution: 'Transparent pricing, clear timelines, and proactive issue management keep your project on track.',
    },
  ];

  const trustPoints = [
    { icon: Users, stat: '500+', label: 'Clients Served' },
    { icon: Globe, stat: '15+', label: 'Countries' },
    { icon: Clock, stat: '8+', label: 'Years Experience' },
    { icon: Award, stat: '98%', label: 'Client Satisfaction' },
  ];

  const caseStudies = [
    {
      title: 'Electronics Importer from USA',
      category: 'Electronics',
      result: 'Reduced supplier lead time by 35% and cut defect rate from 8% to 1.2%',
      image: 'electronics-factory-quality-control',
    },
    {
      title: 'Home Goods Retailer from UK',
      category: 'Home & Garden',
      result: 'Saved $45K in first year through better supplier negotiation and logistics optimization',
      image: 'warehouse-shipping-logistics',
    },
    {
      title: 'Fashion Brand from Australia',
      category: 'Apparel',
      result: 'Scaled production from 5,000 to 50,000 units while maintaining quality standards',
      image: 'apparel-textile-factory',
    },
  ];

  const faqs = [
    {
      question: 'What is a sourcing agent?',
      answer: 'A sourcing agent acts as your local representative in China, helping you find suppliers, negotiate prices, inspect quality, and manage logistics. We bridge the gap between your business needs and Chinese manufacturers.',
    },
    {
      question: 'How much do your services cost?',
      answer: 'Our pricing depends on the scope of work. We offer flexible arrangements including commission-based models, project fees, and retainer options. Contact us for a customized quote based on your specific needs.',
    },
    {
      question: 'Do you work with small orders?',
      answer: 'Yes, we work with businesses of all sizes. Whether you need 100 units or 100,000, we can help you find the right suppliers and manage your order efficiently.',
    },
    {
      question: 'How do you ensure supplier reliability?',
      answer: 'We conduct comprehensive factory audits, verify business licenses, check references, and monitor production quality. We also maintain a database of vetted suppliers with performance history.',
    },
    {
      question: 'What quality control services do you offer?',
      answer: 'We offer pre-production inspections, during-production inspections, pre-shipment inspections, and container loading supervision. Each inspection follows international quality standards.',
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Timeline varies by product complexity. Typically, supplier identification takes 1-2 weeks, sample approval 2-4 weeks, and production 4-8 weeks. We provide detailed timelines during the initial consultation.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            data-strk-bg-id="hero-bg-8f2a9c"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
            className="absolute inset-0"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Find reliable suppliers, verify factories, inspect quality, and coordinate shipping. 
              Your trusted partner for sourcing from China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors text-lg"
              >
                Learn How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section ref={trustRef} className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <point.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900">{point.stat}</div>
                <div className="text-sm text-slate-600">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              End-to-End Sourcing Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From finding suppliers to delivering products, we handle every step of your China sourcing journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section ref={processRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A simple, transparent process designed to make sourcing from China easy and reliable.
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1" />
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full items-center justify-center text-white font-bold z-10">
                    {step.step}
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-slate-200 md:mx-8">
                    <div className="md:hidden flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                    </div>
                    <h3 className="hidden md:block text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Learn More About Our Process
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section ref={productsRef} className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Products We Source
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We source a wide range of products across multiple industries. Here are some of the categories we specialize in.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-slate-900">{category}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              View All Product Categories
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section ref={problemsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Problems We Solve
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Common challenges businesses face when sourcing from China, and how we help you overcome them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {problems.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-8 border border-slate-200"
              >
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-red-600 font-bold text-sm">!</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.problem}</h3>
                </div>
                <div className="flex items-start ml-12">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-slate-600">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section ref={caseStudiesRef} className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Case Studies
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how we've helped businesses like yours succeed with China sourcing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className="aspect-video bg-slate-200 relative">
                  <img
                    data-strk-img-id={`case-study-${index}-8f2a9c`}
                    data-strk-img={`[case-study-title-${index}] [case-study-category-${index}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-blue-600 font-medium">{study.category}</span>
                  <h3 id={`case-study-title-${index}`} className="text-lg font-semibold text-slate-900 mt-1 mb-2">
                    {study.title}
                  </h3>
                  <p id={`case-study-category-${index}`} className="text-slate-600 text-sm mb-4">
                    {study.result}
                  </p>
                  <Link
                    to="/case-studies"
                    className="text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors"
                  >
                    Read full case study →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              View All Case Studies
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Get answers to common questions about our sourcing services.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section ref={inquiryRef} className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Get a Free Sourcing Quote
              </h2>
              <p className="text-xl text-slate-600">
                Tell us about your sourcing needs and we'll get back to you within 24 hours.
              </p>
            </div>
            {homeStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                <p className="text-slate-600 mb-4">
                  Your inquiry has been received. Our team will get back to you within 24 hours.
                </p>
                <p className="text-sm text-slate-500">
                  For urgent inquiries, please call us at +86 755 8123 4567
                </p>
              </div>
            ) : (
              <form onSubmit={handleHomeSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={homeForm.name}
                      onChange={handleHomeChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={homeForm.email}
                      onChange={handleHomeChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={homeForm.company}
                      onChange={handleHomeChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-2">
                      Country *
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      required
                      value={homeForm.country}
                      onChange={handleHomeChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="United States"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-2">
                    Product Category *
                  </label>
                  <select
                    id="product"
                    name="product"
                    required
                    value={homeForm.product}
                    onChange={handleHomeChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  >
                    <option value="">Select a category</option>
                    <option value="electronics">Electronics & Components</option>
                    <option value="home-garden">Home & Garden</option>
                    <option value="apparel">Apparel & Textiles</option>
                    <option value="industrial">Industrial Equipment</option>
                    <option value="consumer-goods">Consumer Goods</option>
                    <option value="auto-parts">Auto Parts</option>
                    <option value="health-beauty">Health & Beauty</option>
                    <option value="toys-gifts">Toys & Gifts</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Tell Us About Your Needs *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={homeForm.message}
                    onChange={handleHomeChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                    placeholder="Describe the products you're looking for, estimated quantities, budget range, and any specific requirements..."
                  />
                </div>
                {homeError && (
                  <p className="text-sm text-red-600" role="alert">{homeError}</p>
                )}
                <button
                  type="submit"
                  disabled={homeStatus === 'submitting'}
                  className="w-full bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors text-lg disabled:opacity-70"
                >
                  {homeStatus === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
