import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, CheckCircle, Factory, ClipboardCheck, Truck, Users, 
  Search, FileCheck, Package, Star, ChevronDown, ChevronUp,
  ArrowRight, Globe, Award, Clock, Building, Mail, Phone
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { submitInquiry } from '@/api/inquiries';

const Home = () => {
  const containerRef = useRef(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  React.useEffect(() => {
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    return cleanup;
  }, []);

  const handleHomeFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleHomeFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      const result = await submitInquiry({
        ...formData,
        products: formData.message || 'General inquiry',
        quantity: '',
      });
      
      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setErrorMessage(result.error || 'Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrorMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const stats = [
    { value: '500+', label: 'Verified Suppliers' },
    { value: '1,200+', label: 'Inspections Completed' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '15+', label: 'Years Experience' },
  ];

  const services = [
    {
      icon: Search,
      title: 'Supplier Search & Verification',
      description: 'We identify and verify reliable manufacturers that match your product specifications, quality requirements, and budget.',
    },
    {
      icon: FileCheck,
      title: 'Factory Audits',
      description: 'Comprehensive on-site inspections to verify factory capabilities, certifications, production capacity, and compliance.',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Control Inspections',
      description: 'Pre-shipment inspections, during-production checks, and loading supervision to ensure your standards are met.',
    },
    {
      icon: Package,
      title: 'Production Follow-up',
      description: 'Regular updates on production progress, sample approvals, and proactive issue resolution throughout manufacturing.',
    },
    {
      icon: Truck,
      title: 'Shipping Coordination',
      description: 'End-to-end logistics management including consolidation, customs documentation, and freight forwarding.',
    },
    {
      icon: Users,
      title: 'Sample Management',
      description: 'Sourcing, approval, and shipping of product samples to help you make informed decisions before bulk orders.',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Submit Your Inquiry',
      description: 'Tell us what you need—product details, quantity, target price, and timeline.',
    },
    {
      number: '02',
      title: 'We Find Suppliers',
      description: 'Our team researches and identifies qualified manufacturers matching your criteria.',
    },
    {
      number: '03',
      title: 'You Select',
      description: 'We present options with detailed profiles, factory tours arranged if needed.',
    },
    {
      number: '04',
      title: 'We Manage Production',
      description: 'Quality inspections, progress updates, and issue resolution throughout.',
    },
    {
      number: '05',
      title: 'Safe Delivery',
      description: 'Coordinated shipping with full documentation to your destination.',
    },
  ];

  const products = [
    { name: 'Electronics & Components', examples: 'PCBs, Consumer electronics, Smart devices' },
    { name: 'Home & Garden', examples: 'Furniture, Decor, Outdoor equipment' },
    { name: 'Textiles & Apparel', examples: 'Garments, Fabrics, Accessories' },
    { name: 'Machinery & Parts', examples: 'Industrial equipment, Auto parts, Tools' },
    { name: 'Packaging & Printing', examples: 'Boxes, Labels, Custom packaging' },
    { name: 'Health & Beauty', examples: 'Cosmetics, Personal care, Supplements' },
  ];

  const problems = [
    {
      title: 'Language Barriers',
      description: 'We bridge communication gaps with fluent English-Chinese communication and detailed reporting.',
    },
    {
      title: 'Quality Uncertainty',
      description: 'Our QC inspections ensure products meet your specifications before shipment.',
    },
    {
      title: 'Supplier Reliability',
      description: 'We verify factories firsthand—checking licenses, capacity, and track records.',
    },
    {
      title: 'Shipping Complexities',
      description: 'We handle documentation, consolidation, and freight coordination end-to-end.',
    },
  ];

  const caseStudies = [
    {
      title: 'US Retailer Sources Home Furnishings',
      client: 'Mid-size furniture retailer, USA',
      challenge: 'Needed 500+ SKUs from multiple factories with consistent quality.',
      result: '30% cost reduction, 98% on-time delivery rate.',
      tag: 'Home Goods',
    },
    {
      title: 'European Startup Launches Electronics',
      client: 'Tech startup, Germany',
      challenge: 'Limited budget needed reliable OEM partner for new product line.',
      result: 'Successful product launch in 4 months.',
      tag: 'Electronics',
    },
    {
      title: 'Australian Brand Expands Apparel Range',
      client: 'Fashion brand, Australia',
      challenge: 'Required sustainable manufacturing with ethical certifications.',
      result: 'GOTS-certified production with 25% growth in 2 years.',
      tag: 'Textiles',
    },
  ];

  const faqs = [
    {
      question: 'What are your service fees?',
      answer: 'Our fees depend on the services you need. Typically, we charge a percentage of the order value or a flat fee per inspection. We provide transparent pricing upfront with no hidden costs. Contact us for a customized quote.',
    },
    {
      question: 'How do you verify factories?',
      answer: 'We conduct on-site visits to verify business licenses, factory facilities, production capacity, worker conditions, and quality management systems. We provide detailed reports with photos and videos.',
    },
    {
      question: 'Can you handle small orders?',
      answer: 'Yes, we work with clients across all order sizes. While per-unit costs may be higher for smaller orders, our expertise helps mitigate risks that could cost much more in defective products or failed shipments.',
    },
    {
      question: 'What quality standards do you follow?',
      answer: 'We follow international quality standards including AQL (Acceptable Quality Limit) sampling, and can adapt to your specific requirements or industry standards like ISO, CE, UL, or others.',
    },
    {
      question: 'How do you handle communication with suppliers?',
      answer: 'We serve as your dedicated point of contact, handling all supplier communication in Mandarin with professional translation. You receive all key information in English with clear documentation.',
    },
    {
      question: 'What shipping options do you offer?',
      answer: 'We coordinate sea freight (LCL/FCL), air freight, and express shipping. We handle all customs documentation, consolidation services, and can arrange door-to-door delivery to your warehouse.',
    },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" 
            data-strk-bg-id="hero-bg-a1b2c3"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}
          />
        </div>
        <div className="section-container py-20 md:py-32 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-800/50 backdrop-blur-sm border border-blue-700/50 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-medium text-blue-200">Trusted by 200+ Global Buyers</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-xl text-blue-100 mb-8 max-w-2xl">
              Find reliable suppliers, verify factories, inspect quality, and coordinate shipping—all with one trusted partner based in China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-blue-400 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800/50 transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white -mt-12 relative z-10">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-2xl shadow-xl p-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Building className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">On-the-Ground Presence</h3>
                <p className="text-gray-600 text-sm">Our team is based in China, enabling regular factory visits and real-time quality oversight.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Professional Standards</h3>
                <p className="text-gray-600 text-sm">We follow international quality protocols and provide detailed documentation for every inspection.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Time Zone Advantage</h3>
                <p className="text-gray-600 text-sm">Working during Chinese business hours ensures quick responses and efficient coordination.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive sourcing solutions designed to protect your interests and streamline your China procurement.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center mb-5 transition-colors">
                  <service.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A simple, transparent process to source products from China with confidence.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-blue-100 absolute -top-4 -left-2">{step.number}</div>
                <div className="relative pt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-16 -right-3 w-6 h-0.5 bg-blue-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Products We Source</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We have established relationships with manufacturers across a wide range of product categories.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div key={index} className="flex items-center gap-4 p-5 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center">
                  <Package className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.examples}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700">
              View All Product Categories
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section-padding bg-blue-900 text-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Problems We Solve</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Sourcing from China comes with challenges. We help you navigate them effectively.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="w-8 h-8 text-blue-300" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{problem.title}</h3>
                <p className="text-blue-200 text-sm">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how we've helped businesses worldwide achieve their sourcing goals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
                    {study.tag}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{study.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{study.client}</p>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 text-sm mb-3">
                      <span className="font-medium text-gray-700">Challenge:</span> {study.challenge}
                    </p>
                    <p className="text-gray-600 text-sm">
                      <span className="font-medium text-green-700">Result:</span> {study.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              View All Case Studies
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Find answers to common questions about our sourcing services.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    {activeFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  {activeFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Inquiry Form */}
      <section className="section-padding bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Source from China?</h2>
              <p className="text-blue-100 text-lg mb-8">
                Tell us about your sourcing needs and we'll provide a free consultation with actionable recommendations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-300" />
                  <span>contact@ssourcingchina.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-300" />
                  <span>+86 21 8888 8888</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-blue-300" />
                  <span>Shanghai, China (GMT+8)</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Get a Free Sourcing Quote</h3>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Thank You!</h4>
                  <p className="text-gray-600 mb-4">We've received your inquiry and will respond within 24 hours.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-blue-600 font-medium hover:text-blue-700"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleHomeFormSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg text-sm">
                      {errorMessage}
                    </div>
                  )}
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleHomeFormChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleHomeFormChange}
                      placeholder="Business Email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleHomeFormChange}
                      placeholder="Company Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleHomeFormChange}
                      rows="4"
                      placeholder="What products are you looking to source? Include quantity, timeline, and any specific requirements."
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-400 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      'Submit Inquiry'
                    )}
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
