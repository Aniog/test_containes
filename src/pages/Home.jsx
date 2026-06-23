import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, Shield, Factory, Truck, Search, 
  FileCheck, Clock, ArrowRight, ChevronDown, ChevronUp,
  Star, Quote
} from 'lucide-react';

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    {
      icon: Search,
      title: 'Supplier Verification',
      description: 'We verify supplier legitimacy, business licenses, factory capacity, and certifications to ensure you work with genuine partners.',
    },
    {
      icon: Factory,
      title: 'Factory Inspection',
      description: 'Our inspectors visit factories to assess production capabilities, equipment, worker conditions, and quality management systems.',
    },
    {
      icon: FileCheck,
      title: 'Quality Control',
      description: 'Pre-shipment inspections, during-production checks, and final random inspection to ensure your products meet specifications.',
    },
    {
      icon: Clock,
      title: 'Production Follow-up',
      description: 'Regular updates on production progress, timeline adherence, and early warning of any issues that may affect delivery.',
    },
    {
      icon: Truck,
      title: 'Shipping Coordination',
      description: 'We coordinate freight forwarding, customs clearance, and documentation to ensure smooth delivery to your destination.',
    },
    {
      icon: Shield,
      title: 'Supplier Negotiation',
      description: 'We negotiate pricing, payment terms, and contracts on your behalf to secure the best deals with verified suppliers.',
    },
  ];

  const process = [
    { step: 1, title: 'Submit Inquiry', description: 'Tell us what you need - product details, quantity, target price, and timeline.' },
    { step: 2, title: 'Supplier Matching', description: 'We identify and verify 3-5 suitable suppliers based on your requirements.' },
    { step: 3, title: 'Sample Evaluation', description: 'We arrange samples, evaluate quality, and help you select the best supplier.' },
    { step: 4, title: 'Production & QC', description: 'We monitor production, conduct inspections, and ensure quality standards are met.' },
    { step: 5, title: 'Shipping & Delivery', description: 'We coordinate logistics, handle documentation, and track shipment to delivery.' },
  ];

  const products = [
    { name: 'Electronics', description: 'Consumer electronics, components, gadgets' },
    { name: 'Textiles & Apparel', description: 'Garments, fabrics, accessories' },
    { name: 'Machinery', description: 'Industrial equipment, parts, tools' },
    { name: 'Furniture', description: 'Home furniture, office furniture, outdoor' },
    { name: 'Packaging', description: 'Boxes, labels, custom packaging' },
    { name: 'Health & Beauty', description: 'Cosmetics, personal care, wellness' },
    { name: 'Toys & Games', description: 'Educational toys, games, puzzles' },
    { name: 'Automotive', description: 'Parts, accessories, components' },
  ];

  const problems = [
    { title: 'Language Barriers', description: 'Communication challenges with suppliers' },
    { title: 'Quality Issues', description: 'Products not meeting specifications' },
    { title: 'Supplier Scams', description: 'Fraudulent or non-existent suppliers' },
    { title: 'Shipping Delays', description: 'Complications in logistics and customs' },
    { title: 'Cultural Differences', description: 'Misunderstandings in business practices' },
  ];

  const trustPoints = [
    { number: '500+', label: 'Clients Served' },
    { number: '10+', label: 'Years Experience' },
    { number: '2000+', label: 'Factories Verified' },
    { number: '98%', label: 'Client Satisfaction' },
  ];

  const caseStudies = [
    {
      company: 'European Retailer',
      industry: 'Home Goods',
      challenge: 'Needed reliable suppliers for kitchenware products in China',
      solution: 'We verified 15 factories, conducted quality inspections, and negotiated favorable terms.',
      result: '40% cost reduction, zero quality issues in first year',
    },
    {
      company: 'US Distributor',
      industry: 'Electronics',
      challenge: 'Previous supplier delivered defective products',
      solution: 'We performed factory audit, implemented QC protocols, and arranged third-party inspections.',
      result: '99.5% defect-free rate, sustained partnership',
    },
  ];

  const faqs = [
    {
      question: 'How do you verify suppliers?',
      answer: 'We conduct comprehensive supplier verification including business license checks, factory visits, capacity assessment, and reference verification. We provide detailed reports with photos and videos.',
    },
    {
      question: 'What quality control services do you offer?',
      answer: 'We offer pre-shipment inspection, during-production inspection, initial production sample check, and final random inspection. All inspections include detailed photo and video reports.',
    },
    {
      question: 'How do you charge for your services?',
      answer: 'Our pricing is based on the scope of services required. We offer transparent, project-based pricing with no hidden fees. Contact us for a customized quote.',
    },
    {
      question: 'Can you help with small orders?',
      answer: 'Yes, we work with businesses of all sizes. While we specialize in medium to large orders, we can also assist with smaller quantities through our network of flexible suppliers.',
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'The timeline varies based on product complexity and requirements. Typically, supplier identification takes 1-2 weeks, sample evaluation 2-4 weeks, and production 4-12 weeks depending on order size.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">China Sourcing Agent for Global Buyers</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We help overseas businesses find verified suppliers, ensure product quality, and manage the entire sourcing process from factory to delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[var(--accent)] text-white px-8 py-4 rounded font-semibold hover:bg-[var(--accent-hover)] transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded font-semibold hover:bg-white/20 transition-colors"
              >
                Learn How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[var(--primary)] mb-2">{point.number}</div>
                <div className="text-[var(--text-secondary)]">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-[var(--background)]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Sourcing Services</h2>
            <p className="max-w-2xl mx-auto">
              Comprehensive sourcing solutions to help you source from China with confidence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[var(--border)]">
                <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-[var(--primary)]" />
                </div>
                <h3 className="mb-2">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[var(--primary)] font-medium hover:text-[var(--accent)] transition-colors"
            >
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Problems We Solve</h2>
            <p className="max-w-2xl mx-auto">
              Common challenges when sourcing from China, and how we help overcome them
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {problems.map((problem, index) => (
              <div key={index} className="text-center p-6 bg-[var(--background)] rounded-lg">
                <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <h3 className="text-lg mb-2">{problem.title}</h3>
                <p className="text-sm">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-[var(--background)]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">How It Works</h2>
            <p className="max-w-2xl mx-auto">
              Our streamlined 5-step process makes sourcing from China simple and risk-free
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-lg shadow-sm h-full border border-[var(--border)]">
                  <div className="w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg mb-2">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="text-[var(--border)]" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-[var(--primary)] font-medium hover:text-[var(--accent)] transition-colors"
            >
              Learn More About Our Process
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Products We Source</h2>
            <p className="max-w-2xl mx-auto">
              We have expertise across a wide range of product categories
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={index} className="p-6 bg-[var(--background)] rounded-lg hover:bg-[var(--primary)]/5 transition-colors">
                <h3 className="text-lg mb-2">{product.name}</h3>
                <p className="text-sm">{product.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-[var(--primary)] font-medium hover:text-[var(--accent)] transition-colors"
            >
              View All Product Categories
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section bg-[var(--background)]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Success Stories</h2>
            <p className="max-w-2xl mx-auto">
              See how we've helped other businesses succeed with China sourcing
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-[var(--border)]">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-[var(--accent)]" fill="currentColor" />
                  <span className="text-sm font-medium text-[var(--primary)]">{study.industry}</span>
                </div>
                <h3 className="text-xl mb-4">{study.company}</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm font-medium text-[var(--text-secondary)] mb-1">Challenge</p>
                    <p className="text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--text-secondary)] mb-1">Solution</p>
                    <p className="text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--text-secondary)] mb-1">Result</p>
                    <p className="text-sm font-semibold text-[var(--success)]">{study.result}</p>
                  </div>
                </div>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 text-[var(--primary)] font-medium hover:text-[var(--accent)] transition-colors"
                >
                  Read Full Case Study
                  <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="max-w-2xl mx-auto">
              Get answers to common questions about our sourcing services
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-[var(--border)]">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-5 flex items-center justify-between text-left"
                >
                  <span className="font-medium pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="text-[var(--primary)] flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-[var(--primary)] flex-shrink-0" size={20} />
                  )}
                </button>
                {openFaq === index && (
                  <div className="pb-5 text-[var(--text-secondary)]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--primary)] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-4">Ready to Start Sourcing?</h2>
            <p className="text-white/90 mb-8 text-lg">
              Get a free sourcing quote tailored to your specific requirements. Our team will respond within 24 hours.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[var(--accent)] text-white px-8 py-4 rounded font-semibold hover:bg-[var(--accent-hover)] transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;