import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, CheckCircle, Package, Truck, Search, Building2, 
  ClipboardCheck, Users, ArrowRight, ChevronDown, ChevronUp,
  Factory, Globe, Clock, DollarSign, Star, Quote
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle');

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Supplier Verification',
      description: 'We verify supplier credentials, business licenses, and production capabilities before you commit.',
      link: '/services#supplier-verification'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Factory Audit',
      description: 'On-site inspections to assess factory conditions, capacity, and compliance with your standards.',
      link: '/services#factory-audit'
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: 'Quality Control',
      description: 'Pre-shipment inspections and during-production checks to ensure your products meet specifications.',
      link: '/services#quality-control'
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Production Follow-up',
      description: 'Regular updates on production进度, sample approval, and timeline management.',
      link: '/services#production'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Shipping & Logistics',
      description: 'Coordination of freight forwarding, customs clearance, and delivery to your door.',
      link: '/services#shipping'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Contract Support',
      description: 'Assistance with negotiation, contract review, and dispute resolution.',
      link: '/services#contracts'
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Submit Inquiry',
      description: 'Tell us what products you need and your requirements.'
    },
    {
      number: '02',
      title: 'Supplier Matching',
      description: 'We identify and verify suitable manufacturers from our network.'
    },
    {
      number: '03',
      title: 'Sample Approval',
      description: 'You review and approve samples before mass production begins.'
    },
    {
      number: '04',
      title: 'Production & QC',
      description: 'We monitor production and conduct quality inspections.'
    },
    {
      number: '05',
      title: 'Shipping',
      description: 'Products are shipped to your destination with full documentation.'
    },
  ];

  const productCategories = [
    { name: 'Electronics & Components', image: 'electronics manufacturing circuit boards', count: '150+' },
    { name: 'Machinery & Equipment', image: 'industrial machinery manufacturing', count: '80+' },
    { name: 'Textiles & Apparel', image: 'textile factory garment production', count: '200+' },
    { name: 'Home & Garden', image: 'home goods manufacturing furniture', count: '120+' },
    { name: 'Packaging Materials', image: 'packaging materials factory boxes', count: '60+' },
    { name: 'Consumer Products', image: 'consumer products manufacturing', count: '180+' },
  ];

  const problems = [
    {
      title: 'Language Barriers',
      description: 'Communication gaps leading to misunderstandings, errors, and delays in production.'
    },
    {
      title: 'Quality Issues',
      description: 'Products arriving not matching specifications or acceptable quality standards.'
    },
    {
      title: 'Supplier Reliability',
      description: 'Difficulty verifying if suppliers are legitimate and capable of fulfilling orders.'
    },
    {
      title: 'Hidden Costs',
      description: 'Unexpected fees, MOQ requirements, and price fluctuations during production.'
    },
    {
      title: 'Shipping Complexity',
      description: 'Navigating customs, documentation, and logistics coordination across borders.'
    },
    {
      title: 'Intellectual Property Risk',
      description: 'Concerns about product designs or proprietary information being compromised.'
    },
  ];

  const trustPoints = [
    { value: '500+', label: 'Clients Served' },
    { value: '10+', label: 'Years Experience' },
    { value: '50+', label: 'Verified Factories' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  const caseStudies = [
    {
      title: 'US Retailer Saves 35% on Electronics Sourcing',
      client: 'HomeTech Direct',
      industry: 'Electronics',
      result: 'Found reliable OEM partner and reduced costs significantly.',
      image: 'electronics warehouse inspection'
    },
    {
      title: 'European Brand Expands with Apparel Line',
      client: 'Nordic Threads',
      industry: 'Apparel',
      result: 'Successfully launched 3 product lines with zero quality issues.',
      image: 'garment factory quality inspection'
    },
    {
      title: 'Startup Launches Kitchenware Collection',
      client: 'Culinary Start',
      industry: 'Home Goods',
      result: 'From concept to delivery in 4 months with full QC coverage.',
      image: 'kitchenware manufacturing'
    },
  ];

  const faqs = [
    {
      question: 'What are your service fees?',
      answer: 'Our fees are typically a percentage of the order value or a flat project fee, depending on the scope of services. Supplier verification and initial consultations are often free. We provide transparent pricing before starting any work.'
    },
    {
      question: 'How do you verify suppliers?',
      answer: 'We conduct thorough background checks including business license verification, factory visits, production capacity assessment, financial stability review, and reference checks from previous clients.'
    },
    {
      question: 'What quality control services do you offer?',
      answer: 'We offer pre-shipment inspections (PSI), during-production inspections (DPI), container loading supervision, and sample approval at various stages. All inspections follow AQL standards and detailed checklist criteria.'
    },
    {
      question: 'Can you handle shipping and logistics?',
      answer: 'Yes, we coordinate with freight forwarders for sea freight, air freight, and express shipping. We handle customs documentation, consolidate shipments, and track deliveries to your location.'
    },
    {
      question: 'What industries do you work with?',
      answer: 'We have experience across electronics, machinery, textiles, home goods, packaging, consumer products, and more. If you have a product category not listed, contact us and we will assess our capability to help.'
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Timeline varies by complexity. Simple product sourcing may take 2-4 weeks. Complex projects with tooling, samples, and production can take 2-4 months. We provide estimated timelines during the planning phase.'
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', company: '', product: '', message: '' });
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E3A5F] to-[#2D5A7B] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            data-strk-bg-id="hero-bg-001"
            data-strk-bg="[hero-title] [hero-subtitle]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          />
        </div>
        <div className="container-custom py-20 lg:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-[#E67E22] rounded-full mr-2"></span>
                <span className="text-sm font-medium">Trusted by 500+ Global Buyers</span>
              </div>
              <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                China Sourcing Agent for Global Buyers
              </h1>
              <p id="hero-subtitle" className="text-xl text-white/80 mb-8 max-w-xl">
                Find verified suppliers, ensure product quality, and streamline shipping. 
                We handle the complexities of China sourcing so you can focus on growing your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary inline-flex items-center justify-center">
                  Get a Free Sourcing Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link to="/how-it-works" className="btn-outline border-white text-white hover:bg-white hover:text-[#1E3A5F] inline-flex items-center justify-center">
                  How It Works
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-[#E67E22] rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Verified Supplier</p>
                      <p className="text-sm text-white/70">License Confirmed</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                      <span className="text-sm">Factory Audit</span>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                      <span className="text-sm">Quality Check</span>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                      <span className="text-sm">Shipping Ready</span>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50L60 45C120 40 240 30 360 35C480 40 600 60 720 65C840 70 960 60 1080 50C1200 40 1320 30 1380 25L1440 20V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z" fill="#F8FAFC"/>
          </svg>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#1E3A5F] mb-2">{point.value}</div>
                <div className="text-[#6B7280]">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge badge-accent mb-4">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive China Sourcing Solutions
            </h2>
            <p className="text-lg text-[#6B7280]">
              From supplier discovery to final delivery, we provide end-to-end support 
              for your China sourcing needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="card group hover:border-[#E67E22] border-2 border-transparent"
              >
                <div className="w-16 h-16 bg-[#EFF3F8] rounded-xl flex items-center justify-center text-[#1E3A5F] mb-6 group-hover:bg-[#E67E22] group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#E67E22] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#6B7280] mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-[#E67E22] font-medium">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 lg:py-24 bg-[#EFF3F8]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge badge-primary mb-4">Why Work With Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Problems We Solve for You
              </h2>
              <p className="text-lg text-[#6B7280] mb-8">
                Sourcing from China comes with challenges. We handle the complexities 
                so you can focus on your core business.
              </p>
              <div className="space-y-6">
                {problems.map((problem, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="w-8 h-8 bg-[#E67E22] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{problem.title}</h4>
                      <p className="text-[#6B7280]">{problem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-[#1E3A5F] rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#E67E22] fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-[#6B7280]">Client Review</p>
                  </div>
                </div>
                <blockquote className="text-lg text-[#1F2937] mb-6 italic">
                  "SSourcing China transformed our supply chain. We went from constant quality issues 
                  to zero defects in our last 3 shipments. Their on-the-ground presence gives us 
                  confidence we never had before."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#EFF3F8] rounded-full flex items-center justify-center">
                    <span className="font-semibold text-[#1E3A5F]">MK</span>
                  </div>
                  <div>
                    <p className="font-semibold">Michael K.</p>
                    <p className="text-sm text-[#6B7280]">CEO, HomeTech Direct</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge badge-accent mb-4">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How We Work Together
            </h2>
            <p className="text-lg text-[#6B7280]">
              A transparent, step-by-step approach to finding the right suppliers 
              and ensuring quality production.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-[#EFF3F8] rounded-xl p-6 text-center h-full">
                  <div className="w-12 h-12 bg-[#1E3A5F] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-[#6B7280]">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                    <ArrowRight className="w-4 h-4 text-[#CBD5E1]" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/how-it-works" className="btn-secondary inline-flex items-center">
              Learn More About Our Process
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge badge-primary mb-4">Product Categories</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Products We Source
            </h2>
            <p className="text-lg text-[#6B7280]">
              We have established networks across major product categories with 
              verified manufacturers ready to work with international buyers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category, index) => (
              <Link
                key={index}
                to="/products"
                className="group relative overflow-hidden rounded-xl aspect-[4/3]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  data-strk-bg-id={`product-${index}`}
                  data-strk-bg={`${category.image} manufacturing`}
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="800"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                    <span className="bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                      {category.count}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products" className="btn-outline inline-flex items-center">
              View All Categories
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge badge-accent mb-4">Success Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Case Studies
            </h2>
            <p className="text-lg text-[#6B7280]">
              Real results for real businesses. See how we've helped clients 
              overcome sourcing challenges and grow their operations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="card overflow-hidden p-0">
                <div className="aspect-video overflow-hidden">
                  <img
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    data-strk-img-id={`case-study-${index}`}
                    data-strk-img={`${study.image} factory inspection`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6">
                  <span className="badge badge-primary mb-3">{study.industry}</span>
                  <h3 className="text-lg font-bold mb-2">{study.title}</h3>
                  <p className="text-[#6B7280] text-sm mb-4">
                    <strong>{study.client}:</strong> {study.result}
                  </p>
                  <Link to="/case-studies" className="text-[#E67E22] font-medium inline-flex items-center hover:underline">
                    Read Case Study
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/case-studies" className="btn-secondary inline-flex items-center">
              View All Case Studies
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-[#EFF3F8]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge badge-primary mb-4">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-5 text-left flex items-center justify-between"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-semibold text-lg pr-4">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-[#E67E22] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#6B7280] flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-5">
                      <p className="text-[#6B7280]">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-24 bg-white" id="contact">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="badge badge-accent mb-4">Get Started</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get a Free Sourcing Quote
              </h2>
              <p className="text-lg text-[#6B7280] mb-8">
                Tell us about your sourcing needs and we'll provide a detailed 
                proposal including supplier recommendations and cost estimates.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#EFF3F8] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Quick Response</h4>
                    <p className="text-[#6B7280]">We respond to all inquiries within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#EFF3F8] rounded-full flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-5 h-5 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">No Obligation</h4>
                    <p className="text-[#6B7280]">Initial consultations and quotes are completely free</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#EFF3F8] rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Global Support</h4>
                    <p className="text-[#6B7280]">We work with clients from USA, Europe, Australia, and beyond</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {formStatus === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-green-800">Thank You!</h3>
                  <p className="text-green-700">
                    We've received your inquiry and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-[#F8FAFC] rounded-xl p-8">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E67E22] focus:ring-2 focus:ring-[#E67E22]/20 outline-none transition"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E67E22] focus:ring-2 focus:ring-[#E67E22]/20 outline-none transition"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E67E22] focus:ring-2 focus:ring-[#E67E22]/20 outline-none transition"
                        placeholder="Your Company Inc."
                      />
                    </div>
                    <div>
                      <label htmlFor="product" className="block text-sm font-medium mb-2">Product Category</label>
                      <input
                        type="text"
                        id="product"
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E67E22] focus:ring-2 focus:ring-[#E67E22]/20 outline-none transition"
                        placeholder="Electronics, Textiles, etc."
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Your Requirements</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E67E22] focus:ring-2 focus:ring-[#E67E22]/20 outline-none transition resize-none"
                      placeholder="Tell us about your sourcing needs, quantities, timeline, etc."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Inquiry
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-[#6B7280] mt-4 text-center">
                    By submitting, you agree to our Privacy Policy. We'll never share your information.
                  </p>
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
