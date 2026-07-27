import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Shield, 
  Factory, 
  ClipboardCheck, 
  Truck, 
  Search,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Star,
  Users,
  Award,
  Clock
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HomePage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const stats = [
    { value: '10+', label: 'Years Experience', icon: Clock },
    { value: '2,500+', label: 'Suppliers Verified', icon: Shield },
    { value: '15,000+', label: 'Orders Completed', icon: Factory },
    { value: '98%', label: 'Client Satisfaction', icon: Star },
  ];

  const services = [
    {
      icon: Search,
      title: 'Supplier Verification',
      description: 'We verify supplier credentials, business licenses, and factory capabilities to ensure legitimacy.',
      link: '/services#verification',
    },
    {
      icon: Factory,
      title: 'Factory Audit',
      description: 'Comprehensive on-site audits to assess production capacity, quality management systems, and compliance.',
      link: '/services#audit',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Control',
      description: 'Pre-shipment inspections and during-production checks to ensure your products meet specifications.',
      link: '/services#qc',
    },
    {
      icon: Shield,
      title: 'Production Follow-up',
      description: 'Regular updates and on-site monitoring throughout the production process to keep projects on track.',
      link: '/services#production',
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'End-to-end logistics coordination including freight forwarding, customs clearance, and delivery.',
      link: '/services#shipping',
    },
    {
      icon: CheckCircle,
      title: 'Sourcing & Negotiation',
      description: 'Product sourcing, price negotiation, and contract management to secure the best terms.',
      link: '/services#sourcing',
    },
  ];

  const problems = [
    {
      title: 'Finding Reliable Suppliers',
      description: 'We verify supplier credentials and conduct factory audits so you work only with proven manufacturers.',
    },
    {
      title: 'Quality Issues',
      description: 'Our QC inspectors catch defects before shipment, saving you costly returns and reputation damage.',
    },
    {
      title: 'Communication Barriers',
      description: 'Our bilingual team bridges the gap, ensuring clear communication and accurate translations.',
    },
    {
      title: 'Complex Logistics',
      description: 'We handle shipping, customs, and documentation so your products arrive smoothly.',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Submit Your Request',
      description: 'Tell us what you need - product specifications, quantity, target price, and timeline.',
    },
    {
      step: '02',
      title: 'We Find Suppliers',
      description: 'We identify and verify suitable manufacturers, then present you with options.',
    },
    {
      step: '03',
      title: 'Negotiate & Agree',
      description: 'We negotiate prices and terms on your behalf until you approve the order.',
    },
    {
      step: '04',
      title: 'Production & QC',
      description: 'We monitor production and conduct quality inspections to ensure standards are met.',
    },
    {
      step: '05',
      title: 'Shipping & Delivery',
      description: 'We coordinate logistics and handle customs to deliver products to your door.',
    },
  ];

  const products = [
    'Electronics & Gadgets',
    'Furniture & Home Goods',
    'Textiles & Apparel',
    'Machinery & Equipment',
    'Packaging Materials',
    'Consumer Products',
    'Automotive Parts',
    'Industrial Components',
  ];

  const caseStudies = [
    {
      category: 'Electronics',
      title: 'Smart Home Device Sourcing for European Retailer',
      challenge: 'A European electronics retailer needed a reliable supplier for smart home devices with consistent quality.',
      result: 'We verified 15 factories, conducted thorough quality audits, and established a long-term partnership that increased their margins by 23%.',
      imageId: 'case-study-1',
    },
    {
      category: 'Furniture',
      title: 'Office Furniture Batch Sourcing for US Distributor',
      challenge: 'A US distributor wanted to source office furniture from China but struggled with quality consistency.',
      result: 'Implemented a rigorous QC program that reduced defect rate from 12% to under 2%, securing a $2M annual contract.',
      imageId: 'case-study-2',
    },
    {
      category: 'Textiles',
      title: 'Private Label Apparel for Australian Brand',
      challenge: 'An Australian fashion brand needed a manufacturer for private label clothing with ethical production standards.',
      result: 'Found a BSCI-certified factory, negotiated favorable terms, and delivered 50,000 units with 99.5% quality pass rate.',
      imageId: 'case-study-3',
    },
  ];

  const faqs = [
    {
      question: 'How do you verify suppliers?',
      answer: 'We conduct comprehensive supplier verification including business license checks, factory visits, capability assessments, and reference verification. We provide detailed reports on each supplier\'s legitimacy, production capacity, and track record.',
    },
    {
      question: 'What are your fees?',
      answer: 'Our fee structure is transparent and varies based on service scope. We offer per-project pricing, retainer options, and commission-based models. Contact us for a customized quote based on your specific needs.',
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Timeline varies based on product complexity and supplier availability. Typically, initial supplier shortlist takes 1-2 weeks, negotiation takes 2-4 weeks, and production depends on order size. We provide detailed timelines for each project.',
    },
    {
      question: 'Do you handle shipping and customs?',
      answer: 'Yes, we provide end-to-end logistics support including freight forwarding, customs clearance, documentation, and delivery coordination. We work with trusted logistics partners to ensure smooth delivery.',
    },
    {
      question: 'Can you inspect products before shipping?',
      answer: 'Absolutely. We offer pre-shipment inspections (PSI) and during-production inspections (DPI). Our QC team follows AQL standards and provides detailed inspection reports with photos and recommendations.',
    },
    {
      question: 'What industries do you work with?',
      answer: 'We have experience across multiple industries including electronics, furniture, textiles, machinery, packaging, consumer goods, automotive parts, and more. Contact us to discuss your specific industry needs.',
    },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-[#1E3A5F] text-white overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          data-strk-bg-id="hero-bg-001"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F] via-[#1E3A5F]/90 to-[#1E3A5F]/70 z-10" />
        <div className="container-custom relative z-20 py-20 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
              Supporting overseas businesses with supplier verification, quality control, production monitoring, and seamless logistics. Turn your China sourcing into a competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary text-center">
                Get a Free Sourcing Quote
              </Link>
              <Link to="/how-it-works" className="btn-secondary border-white text-white hover:bg-white hover:text-[#1E3A5F] text-center">
                Learn How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Bar */}
      <section className="bg-[#F8FAFC] py-8 border-b border-[#E5E7EB]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center justify-center space-x-3">
                <stat.icon className="w-8 h-8 text-[#F5A623]" />
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-[#1E3A5F]">{stat.value}</div>
                  <div className="text-sm text-[#6B7280]">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Our Sourcing Services
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Comprehensive sourcing solutions to help you find, verify, and work with reliable Chinese suppliers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="card group h-full"
              >
                <div className="w-12 h-12 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#F5A623] transition-colors">
                  <service.icon className="w-6 h-6 text-[#1E3A5F] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-[#1E3A5F] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#6B7280] mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-[#F5A623] font-medium">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Problems We Solve
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Common challenges when sourcing from China, and how we help you overcome them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <div key={index} className="card flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#4CAF50]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-[#4CAF50]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-[#6B7280]">
                    {problem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Our Sourcing Process
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              A proven 5-step process that ensures quality, reliability, and peace of mind.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="card h-full text-center">
                  <div className="w-12 h-12 bg-[#F5A623] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#6B7280]">
                    {step.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-[#E5E7EB]" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/how-it-works" className="btn-secondary inline-flex items-center">
              View Full Process
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Products We Source
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              We have expertise sourcing a wide range of products from verified Chinese manufacturers.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <Link
                key={index}
                to="/products"
                className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow border border-[#E5E7EB]"
              >
                <span className="text-[#1E3A5F] font-medium">{product}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/products" className="btn-secondary inline-flex items-center">
              View All Categories
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Success Stories
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Real results from our clients who transformed their China sourcing operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div key={index} className="card">
                <div className="text-xs font-medium text-[#F5A623] uppercase tracking-wide mb-2">
                  {study.category}
                </div>
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-3">
                  {study.title}
                </h3>
                <div className="mb-4">
                  <p className="text-sm text-[#6B7280] mb-2">
                    <span className="font-medium text-[#1E3A5F]">Challenge:</span> {study.challenge}
                  </p>
                  <p className="text-sm text-[#6B7280]">
                    <span className="font-medium text-[#4CAF50]">Result:</span> {study.result}
                  </p>
                </div>
                <Link
                  to="/case-studies"
                  className="text-[#F5A623] font-medium inline-flex items-center hover:underline"
                >
                  Read full case study
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/case-studies" className="btn-secondary inline-flex items-center">
              View All Case Studies
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Common questions about our China sourcing services.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg mb-4 border border-[#E5E7EB] overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-[#1E3A5F]">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#6B7280] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#6B7280] flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-[#6B7280]">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#1E3A5F] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Sourcing?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Get a free consultation and quote for your sourcing needs. Our team will respond within 24 hours.
          </p>
          <Link to="/contact" className="btn-primary inline-block text-lg px-8 py-4">
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;