import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, CheckCircle, Factory, Truck, Search, FileCheck, 
  MessageSquare, Clock, Users, Award, ArrowRight, ChevronDown,
  Package, Building2, ClipboardCheck, Ship
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);
  const [faqOpen, setFaqOpen] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle');

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', company: '', product: '', quantity: '', message: '' });
    }, 1000);
  };

  const services = [
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Supplier Verification',
      description: 'We verify factory credentials, business licenses, production capacity, and past performance to ensure you work with legitimate partners.'
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: 'Quality Inspection',
      description: 'Professional QC inspectors conduct pre-shipment inspections, during-production checks, and loading supervision.'
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: 'Production Follow-up',
      description: 'We monitor production progress, track timelines, and ensure your specifications are met throughout the manufacturing process.'
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Shipping Coordination',
      description: 'From freight forwarding to customs clearance, we handle all logistics to ensure smooth delivery to your destination.'
    }
  ];

  const processSteps = [
    { number: '01', title: 'Submit Inquiry', description: 'Tell us what you need - product specifications, quantity, and timeline.' },
    { number: '02', title: 'Supplier Matching', description: 'We identify and verify suitable factories based on your requirements.' },
    { number: '03', title: 'Sample Approval', description: 'We coordinate samples for your review and approval before production.' },
    { number: '04', title: 'Production & QC', description: 'We monitor production and conduct quality inspections.' },
    { number: '05', title: 'Shipping & Delivery', description: 'We coordinate shipping and provide tracking until delivery.' }
  ];

  const products = [
    { name: 'Electronics & Components', icon: <Package className="w-8 h-8" /> },
    { name: 'Machinery & Equipment', icon: <Building2 className="w-8 h-8" /> },
    { name: 'Textiles & Garments', icon: <ClipboardCheck className="w-8 h-8" /> },
    { name: 'Home & Garden', icon: <Factory className="w-8 h-8" /> },
    { name: 'Packaging Materials', icon: <Ship className="w-8 h-8" /> },
    { name: 'Industrial Parts', icon: <Shield className="w-8 h-8" /> }
  ];

  const problems = [
    { title: 'Language Barriers', solution: 'We bridge communication gaps with fluent English and Mandarin teams.' },
    { title: 'Quality Risks', solution: 'Professional inspections ensure products meet your specifications.' },
    { title: 'Supplier Fraud', solution: 'Thorough verification protects you from unreliable partners.' },
    { title: 'Logistics Complexity', solution: 'End-to-end logistics coordination simplifies international shipping.' }
  ];

  const trustPoints = [
    { number: '500+', label: 'Clients Served' },
    { number: '50+', label: 'Countries Reached' },
    { number: '10+', label: 'Years Experience' },
    { number: '98%', label: 'Client Satisfaction' }
  ];

  const caseStudies = [
    {
      title: 'Electronics Retailer Expands Product Line',
      client: 'European Electronics Brand',
      description: 'Successfully sourced 15 new product categories from verified Chinese manufacturers with zero quality issues.',
      results: ['15 product categories', '40% cost reduction', 'Zero defects']
    },
    {
      title: 'Home Goods Startup Launches Successfully',
      client: 'US-based Home Decor Company',
      description: 'End-to-end sourcing solution from supplier verification to door-to-door delivery for 5,000 unit initial order.',
      results: ['5,000 units delivered', 'On-time delivery', 'Under budget']
    }
  ];

  const faqs = [
    {
      question: 'What is the minimum order quantity (MOQ) you work with?',
      answer: 'MOQ varies by supplier and product type. We work with suppliers who offer MOQs ranging from 100 to 1,000 units. During our initial consultation, we will identify suppliers that match your order volume requirements.'
    },
    {
      question: 'How do you verify factory legitimacy?',
      answer: 'We conduct thorough factory verification including business license checks, on-site visits, production capacity assessment, and reference checks with past clients. We provide detailed verification reports for your review.'
    },
    {
      question: 'What quality inspection standards do you follow?',
      answer: 'We follow internationally recognized inspection standards including AQL (Acceptable Quality Level) sampling, and can customize inspection criteria based on your specific requirements. All inspections include detailed photo documentation.'
    },
    {
      question: 'How long does typical sourcing take?',
      answer: 'Timeline varies based on product complexity and supplier availability. A typical sourcing cycle takes 4-8 weeks from inquiry to delivery. We provide estimated timelines during the supplier matching phase.'
    },
    {
      question: 'What are your service fees?',
      answer: 'Our fee structure depends on the services required. We offer transparent pricing based on project scope. Contact us for a customized quote tailored to your specific needs.'
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-primary-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            data-strk-bg-id="hero-bg-001"
            data-strk-bg="[hero-title] [hero-subtitle]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg lg:text-xl text-neutral-300 mb-8">
              Find reliable suppliers, verify factories, inspect quality, and coordinate shipping. 
              We handle the complexity so you can focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-neutral-900 transition-colors"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPoints.map((point) => (
              <div key={point.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-1">{point.number}</div>
                <div className="text-sm text-neutral-600">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-neutral-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">Our Services</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Comprehensive sourcing solutions to help you source products from China with confidence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">{service.title}</h3>
                <p className="text-neutral-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                We Solve Your Sourcing Challenges
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Sourcing from China comes with challenges. We help you overcome them with professional expertise and proven processes.
              </p>
              <div className="space-y-6">
                {problems.map((problem, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">{problem.title}</h4>
                      <p className="text-neutral-600">{problem.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-neutral-100 rounded-2xl overflow-hidden">
                <div 
                  className="w-full h-full"
                  data-strk-bg-id="problems-bg-002"
                  data-strk-bg="[problems-title]"
                  data-strk-bg-ratio="1x1"
                  data-strk-bg-width="800"
                />
              </div>
              <h2 id="problems-title" className="sr-only">Sourcing Solutions</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="bg-neutral-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">How Our Sourcing Process Works</h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              A transparent, step-by-step approach to sourcing from China.
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-neutral-800 rounded-xl p-6 h-full">
                  <div className="text-4xl font-bold text-primary-500 mb-4">{step.number}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-neutral-400">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-neutral-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">Products We Source</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We have extensive experience sourcing a wide range of products from verified Chinese manufacturers.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {products.map((product, index) => (
              <div key={index} className="bg-neutral-50 rounded-xl p-6 text-center hover:bg-primary-50 transition-colors group cursor-pointer">
                <div className="w-16 h-16 mx-auto mb-4 text-neutral-400 group-hover:text-primary-600 transition-colors flex items-center justify-center">
                  {product.icon}
                </div>
                <h3 className="font-medium text-neutral-700 group-hover:text-primary-700 transition-colors">{product.name}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700">
              View All Products
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="bg-neutral-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">Success Stories</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              See how we've helped businesses successfully source from China.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="text-sm text-primary-600 font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{study.title}</h3>
                <p className="text-neutral-600 mb-6">{study.description}</p>
                <div className="flex flex-wrap gap-3">
                  {study.results.map((result, i) => (
                    <span key={i} className="inline-flex items-center gap-1 px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm">
                      <CheckCircle className="w-4 h-4" />
                      {result}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center px-6 py-3 font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors">
              View All Case Studies
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-neutral-600">
              Find answers to common questions about our sourcing services.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-neutral-200 rounded-lg">
                <button
                  onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-neutral-900 pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-neutral-500 flex-shrink-0 transition-transform ${faqOpen === index ? 'rotate-180' : ''}`} />
                </button>
                {faqOpen === index && (
                  <div className="px-6 pb-6 text-neutral-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-neutral-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Start Sourcing?</h2>
              <p className="text-lg text-neutral-400 mb-8">
                Get a free sourcing quote tailored to your requirements. Our team will respond within 24 hours.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-neutral-300">
                  <Clock className="w-5 h-5 text-primary-400" />
                  <span>Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-300">
                  <MessageSquare className="w-5 h-5 text-primary-400" />
                  <span>Free consultation and quote</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-300">
                  <Shield className="w-5 h-5 text-primary-400" />
                  <span>No obligation quote</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8">
              {formStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Thank You!</h3>
                  <p className="text-neutral-600">We've received your inquiry and will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-neutral-700 mb-2">Product Interest *</label>
                      <input
                        type="text"
                        id="product"
                        name="product"
                        value={formData.product}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Electronics, Textiles, etc."
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-neutral-700 mb-2">Estimated Quantity</label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="e.g., 1,000 units"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">Additional Details</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                      placeholder="Tell us about your sourcing requirements, timeline, and any specific needs..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full py-4 px-6 text-lg font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 disabled:bg-primary-400 transition-colors"
                  >
                    {formStatus === 'submitting' ? 'Submitting...' : 'Get a Free Sourcing Quote'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
