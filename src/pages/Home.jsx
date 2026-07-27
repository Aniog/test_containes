import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Search, 
  CheckCircle, 
  Truck, 
  Factory, 
  Package, 
  TrendingUp, 
  Clock,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Star,
  Users,
  Globe,
  Award
} from 'lucide-react';

const HomePage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      icon: Search,
      title: 'Supplier Verification',
      description: 'We verify supplier credentials, business licenses, factory capacity, and production capabilities to ensure legitimacy.',
    },
    {
      icon: CheckCircle,
      title: 'Quality Inspection',
      description: 'Our QC team performs pre-shipment inspections, during-production checks, and final random inspections to your specifications.',
    },
    {
      icon: Factory,
      title: 'Production Follow-up',
      description: 'We monitor production progress, ensure timeline adherence, and provide regular updates throughout the manufacturing process.',
    },
    {
      icon: Truck,
      title: 'Shipping Coordination',
      description: 'We handle freight forwarding, customs documentation, and logistics coordination from factory to your designated port.',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Submit Your Request',
      description: 'Tell us what you need - product specifications, quantity, target price, and delivery timeline.',
    },
    {
      number: '02',
      title: 'Supplier Matching',
      description: 'We identify and verify suitable suppliers from our network of pre-vetted factories.',
    },
    {
      number: '03',
      title: 'Sample Evaluation',
      description: 'We arrange samples, evaluate quality, and provide detailed feedback with photos and videos.',
    },
    {
      number: '04',
      title: 'Order Placement',
      description: 'We negotiate terms, finalize contracts, and ensure all details are clearly documented.',
    },
    {
      number: '05',
      title: 'Production Monitoring',
      description: 'Regular factory visits and progress reports keep you informed throughout production.',
    },
    {
      number: '06',
      title: 'Quality Control',
      description: 'Professional inspection at your specified checkpoints before shipment.',
    },
    {
      number: '07',
      title: 'Shipping & Delivery',
      description: 'We coordinate freight, handle documentation, and track shipment to destination.',
    },
  ];

  const products = [
    { name: 'Electronics', count: '2,400+ suppliers' },
    { name: 'Furniture', count: '1,800+ suppliers' },
    { name: 'Textiles & Apparel', count: '3,200+ suppliers' },
    { name: 'Machinery', count: '950+ suppliers' },
    { name: 'Packaging', count: '1,200+ suppliers' },
    { name: 'Home & Garden', count: '2,100+ suppliers' },
    { name: 'Sports & Outdoors', count: '1,500+ suppliers' },
    { name: 'Automotive Parts', count: '1,100+ suppliers' },
  ];

  const problems = [
    {
      problem: 'Language barriers and communication issues',
      solution: 'Our bilingual team bridges the communication gap, ensuring clear understanding between you and Chinese suppliers.',
    },
    {
      problem: 'Unreliable suppliers and fraud risk',
      solution: 'We verify every supplier through on-site visits, business license checks, and reference verification.',
    },
    {
      problem: 'Quality control challenges',
      solution: 'Professional inspectors ensure your products meet specifications at every production stage.',
    },
    {
      problem: 'Complex logistics and shipping',
      solution: 'We handle all documentation, customs clearance, and coordinate reliable freight forwarding.',
    },
  ];

  const trustPoints = [
    { icon: Clock, value: '12+', label: 'Years Experience' },
    { icon: Shield, value: '5,000+', label: 'Suppliers Verified' },
    { icon: Users, value: '850+', label: 'Clients Served' },
    { icon: Globe, value: '35+', label: 'Countries' },
  ];

  const caseStudies = [
    {
      client: 'European Retail Chain',
      industry: 'Home Furnishings',
      challenge: 'Needed to source 50,000 units of home decor products from China within 3 months.',
      result: 'We identified 3 verified suppliers, conducted quality inspections, and delivered on time with 98% quality pass rate.',
      image: 'home-furnishings-sourcing',
    },
    {
      client: 'US Tech Startup',
      industry: 'Electronics',
      challenge: 'Required custom electronic components with specific quality certifications.',
      result: 'Matched with ISO-certified factory, arranged UL certification, and completed first order of 10,000 units successfully.',
      image: 'electronics-manufacturing',
    },
    {
      client: 'Australian Distributor',
      industry: 'Outdoor Products',
      challenge: 'Sourcing outdoor equipment while ensuring competitive pricing and reliable quality.',
      result: 'Negotiated 18% cost reduction while maintaining premium quality standards. Now a repeat client for 3 years.',
      image: 'outdoor-equipment',
    },
  ];

  const faqs = [
    {
      question: 'How do you verify suppliers?',
      answer: 'We conduct on-site factory visits to verify business licenses, production capacity, quality management systems, and employee conditions. We also check references and verify company registration documents.',
    },
    {
      question: 'What are your service fees?',
      answer: 'Our fees vary based on project scope and service type. We offer transparent pricing - contact us for a customized quote. Generally, we charge a service fee based on the value of goods sourced or a flat fee per project.',
    },
    {
      question: 'Do you only work with large orders?',
      answer: 'We work with businesses of all sizes, from startups to large enterprises. Minimum order quantities vary by product category. We can help you find suppliers suitable for your volume requirements.',
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Timeline varies based on product complexity and supplier availability. Typically, initial supplier shortlisting takes 1-2 weeks, sample evaluation 2-4 weeks, and production 4-12 weeks depending on order size.',
    },
    {
      question: 'Can you help with product development?',
      answer: 'Yes, we can assist with product development including design improvements, material selection, prototyping, and manufacturing process optimization. Our team has extensive experience in various industries.',
    },
    {
      question: 'What quality control services do you offer?',
      answer: 'We offer comprehensive QC services including pre-production inspection, during-production inspection, pre-shipment inspection, and container loading supervision. Reports include detailed photos, measurements, and compliance verification.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E3A5F] via-[#2D5A8A] to-[#1E3A5F] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.03%22%3E%3Cpath%20d=%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        <div className="container-custom relative py-20 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              We help overseas businesses find reliable Chinese suppliers, verify factories, 
              inspect quality, and coordinate seamless shipping. Your trusted partner for 
              successful China sourcing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                Get a Free Sourcing Quote
              </Link>
              <Link to="/how-it-works" className="btn-secondary border-white text-white hover:bg-white/10">
                Learn How It Works
              </Link>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/20">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#F97316]" />
                <span className="text-sm text-gray-300">Verified Suppliers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#F97316]" />
                <span className="text-sm text-gray-300">Quality Inspected</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-[#F97316]" />
                <span className="text-sm text-gray-300">End-to-End Logistics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Sourcing Services</h2>
            <p className="section-subtitle mx-auto mt-4">
              Comprehensive sourcing solutions to help you source from China with confidence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="card text-center group">
                <div className="w-14 h-14 bg-[#F8FAFC] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1E3A5F] transition-colors">
                  <service.icon className="w-7 h-7 text-[#1E3A5F] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-3">{service.title}</h3>
                <p className="text-sm text-[#64748B]">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/services" className="btn-secondary">
              View All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing Process Section */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Sourcing Process</h2>
            <p className="section-subtitle mx-auto mt-4">
              A proven 7-step process to ensure successful sourcing from China
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-[#E2E8F0] h-full">
                  <div className="text-4xl font-bold text-[#F97316]/20 mb-3">{step.number}</div>
                  <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#64748B]">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden xl:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-[#CBD5E1]" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="btn-secondary">
              Learn More About Our Process
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Products We Source</h2>
            <p className="section-subtitle mx-auto mt-4">
              We have established relationships with verified suppliers across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <div 
                key={index} 
                className="bg-[#F8FAFC] rounded-lg p-5 border border-[#E2E8F0] hover:border-[#1E3A5F] hover:shadow-md transition-all cursor-pointer"
              >
                <Package className="w-8 h-8 text-[#1E3A5F] mb-3" />
                <h3 className="font-semibold text-[#1E3A5F]">{product.name}</h3>
                <p className="text-sm text-[#64748B] mt-1">{product.count}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/products" className="btn-secondary">
              View All Product Categories
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Problems We Solve</h2>
            <p className="section-subtitle mx-auto mt-4">
              Common challenges when sourcing from China and how we help overcome them
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-[#E2E8F0]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1E3A5F] mb-2">{item.problem}</h3>
                    <p className="text-sm text-[#64748B]">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points Section */}
      <section className="section-padding bg-[#1E3A5F] text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SSourcing China</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Years of experience helping businesses source from China successfully
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <point.icon className="w-8 h-8 text-[#F97316]" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{point.value}</div>
                <div className="text-gray-300">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Success Stories</h2>
            <p className="section-subtitle mx-auto mt-4">
              Real results from our clients who trusted us with their China sourcing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div key={index} className="card overflow-hidden p-0">
                <div className="h-48 bg-gradient-to-br from-[#1E3A5F] to-[#2D5A8A] flex items-center justify-center">
                  <Factory className="w-16 h-16 text-white/30" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-[#F97316] font-medium mb-2">{study.industry}</div>
                  <h3 className="text-lg font-semibold text-[#1E3A5F] mb-3">{study.client}</h3>
                  <p className="text-sm text-[#64748B] mb-4">{study.challenge}</p>
                  <div className="pt-4 border-t border-[#E2E8F0]">
                    <p className="text-sm font-medium text-[#10B981]">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/case-studies" className="btn-secondary">
              View All Case Studies
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle mx-auto mt-4">
              Common questions about our China sourcing services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border border-[#E2E8F0] mb-4 overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-[#1E3A5F]">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#64748B] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#64748B] flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-sm text-[#64748B]">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Ready to Start Sourcing?</h2>
              <p className="text-lg text-[#64748B] mt-4 mb-8">
                Get a free sourcing quote from our team. Tell us what you need, and we'll 
                find the right suppliers for your business.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#10B981]" />
                  <span className="text-[#64748B]">Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#10B981]" />
                  <span className="text-[#64748B]">No obligation quote</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#10B981]" />
                  <span className="text-[#64748B]">Expert sourcing advice</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#F8FAFC] rounded-xl p-8 border border-[#E2E8F0]">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#1E293B] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/20 outline-none transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1E293B] mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/20 outline-none transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#1E293B] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/20 outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#1E293B] mb-2">
                    Product Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/20 outline-none transition-all resize-none"
                    placeholder="Tell us about the products you want to source - type, quantity, specifications, target price, etc."
                  />
                </div>
                
                <button type="submit" className="btn-primary w-full text-lg py-4">
                  Get a Free Sourcing Quote
                </button>
                
                <p className="text-xs text-center text-[#94A3B8] mt-4">
                  By submitting, you agree to our Privacy Policy. We'll never share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;