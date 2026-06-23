import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Factory, Truck, Search, FileCheck, ClipboardCheck, Package, Globe, Users, Award } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'We find verified manufacturers matching your exact requirements, quality standards, and budget.'
    },
    {
      icon: Shield,
      title: 'Factory Verification',
      description: 'On-site audits to confirm factory existence, production capacity, certifications, and compliance.'
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Control',
      description: 'Pre-shipment inspections ensuring your products meet specifications and quality standards.'
    },
    {
      icon: Factory,
      title: 'Production Follow-up',
      description: 'Regular updates and on-site monitoring throughout the manufacturing process.'
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'End-to-end freight coordination from factory to your designated warehouse or port.'
    },
    {
      icon: FileCheck,
      title: 'Sample Management',
      description: 'Handling sample requests, testing, and approval process with suppliers.'
    }
  ];

  const process = [
    { step: '01', title: 'Submit Inquiry', description: 'Tell us what you need - product details, quantity, target price, and timeline.' },
    { step: '02', title: 'We Find Suppliers', description: 'We research, vet, and present 3-5 qualified manufacturers within 7 days.' },
    { step: '03', title: 'Factory Audit', description: 'We visit factories, verify capabilities, and provide detailed audit reports.' },
    { step: '04', title: 'Quality Inspection', description: 'Pre-shipment QC checks ensure your products meet agreed specifications.' },
    { step: '05', title: 'Shipping', description: 'We coordinate freight, customs clearance, and delivery to your location.' }
  ];

  const products = [
    'Electronics & Gadgets',
    'Home & Garden',
    'Textiles & Apparel',
    'Industrial Equipment',
    'Packaging Materials',
    'Automotive Parts',
    'Health & Beauty',
    'Toys & Gifts'
  ];

  const problems = [
    { title: 'Language Barriers', description: 'Communication gaps leading to misunderstandings and errors.' },
    { title: 'Quality Issues', description: 'Products arriving different from samples or with defects.' },
    { title: 'Supplier Scams', description: 'Fake factories, middlemen posing as manufacturers, or payment fraud.' },
    { title: 'Shipping Delays', description: 'Lack of coordination causing missed deadlines and additional costs.' },
    { title: 'Hidden Costs', description: 'Unexpected fees for tooling, molds, or shipping that inflate budgets.' }
  ];

  const trustPoints = [
    { icon: Users, number: '500+', label: 'Clients Served' },
    { icon: Factory, number: '1,200+', label: 'Factories Verified' },
    { icon: Award, number: '15+', label: 'Years Experience' },
    { icon: Globe, number: '30+', label: 'Countries' }
  ];

  const caseStudies = [
    {
      category: 'Electronics',
      title: 'US Retailer Sourcing Smart Home Devices',
      result: 'Saved 35% on manufacturing costs while improving quality pass rate to 98%.',
      challenge: 'Client needed a reliable supplier for smart home sensors with strict quality requirements.',
      solution: 'We verified 8 factories, conducted thorough QC inspections, and established quality protocols.'
    },
    {
      category: 'Home Goods',
      title: 'European Importer Kitchenware Batch',
      result: 'Successfully delivered 50,000 units with zero defects on first shipment.',
      challenge: 'Previous supplier delivered substandard products causing customer returns.',
      solution: 'Implemented pre-shipment inspection and production monitoring process.'
    }
  ];

  const faqs = [
    {
      question: 'How do you verify factories?',
      answer: 'We conduct on-site visits to verify factory existence, production capacity, machinery, worker count, certifications (ISO, CE, etc.), and business license validity. We provide detailed audit reports with photos and videos.'
    },
    {
      question: 'What are your fees?',
      answer: 'Our sourcing service fee is based on the complexity of your project and services required. We offer transparent pricing with no hidden costs. Contact us for a customized quote.'
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Typical supplier matching takes 5-10 business days. Factory verification adds 3-5 days. The entire process from inquiry to production typically takes 2-4 weeks depending on requirements.'
    },
    {
      question: 'Do you only work with large orders?',
      answer: 'We work with businesses of all sizes, from startups to large enterprises. Minimum order quantities (MOQs) vary by supplier and product type.'
    },
    {
      question: 'Can you help with product development?',
      answer: 'Yes, we can assist with prototyping, technical drawings, and working with manufacturers to refine product designs for production.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              We help overseas businesses find reliable suppliers, verify factories, 
              inspect quality, and coordinate seamless shipping. Your trusted partner 
              for trouble-free China sourcing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <point.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-slate-900">{point.number}</div>
                <div className="text-slate-600">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Sourcing Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive sourcing solutions to help you source from China with confidence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-5">
                  <service.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Sourcing Process
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A proven 5-step process to ensure smooth sourcing from China
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-slate-50 p-6 rounded-xl h-full">
                  <div className="text-4xl font-bold text-blue-100 mb-4">{item.step}</div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Products We Source
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We have expertise across a wide range of product categories
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <div key={index} className="bg-white p-5 rounded-lg text-center hover:shadow-md transition-shadow">
                <Package className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <span className="font-medium text-slate-900">{product}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Common Sourcing Problems We Solve
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Don't let these challenges stop you from sourcing from China
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-xl">
                <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{problem.title}</h3>
                <p className="text-slate-600">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real results from our clients who trusted us with their China sourcing
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-600 text-white px-6 py-3">
                  <span className="text-sm font-medium">{study.category}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{study.title}</h3>
                  <p className="text-slate-600 mb-4">{study.challenge}</p>
                  <p className="text-slate-600 mb-4">{study.solution}</p>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <p className="text-green-800 font-medium">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
              View All Case Studies
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Get answers to common questions about our sourcing services
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Sourcing from China?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free sourcing quote tailored to your specific requirements
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;