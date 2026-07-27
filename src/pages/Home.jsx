import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Shield, ClipboardCheck, Factory, Ship, 
  ChevronRight, CheckCircle, Users, Globe, Award,
  Phone, Mail, ArrowRight, Package, Cog, Truck,
  BarChart3, MessageSquare, Star, Clock, Building2,
  AlertCircle
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'We identify and vet reliable manufacturers matching your product specifications, volume, and quality requirements.',
      color: 'blue'
    },
    {
      icon: Shield,
      title: 'Factory Verification',
      description: 'On-site inspections to verify legal business status, production capacity, certifications, and facility conditions.',
      color: 'green'
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Control',
      description: 'Pre-production, during-production, and pre-shipment inspections to ensure products meet your specifications.',
      color: 'purple'
    },
    {
      icon: Factory,
      title: 'Production Follow-up',
      description: 'Regular updates on production progress, addressing issues promptly to keep your order on schedule.',
      color: 'orange'
    },
    {
      icon: Ship,
      title: 'Shipping & Logistics',
      description: 'End-to-end logistics coordination including freight forwarding, customs clearance, and last-mile delivery.',
      color: 'teal'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Share Your Requirements',
      description: 'Tell us what you need: product type, specifications, quantity, target price, and timeline.'
    },
    {
      number: '02',
      title: 'Supplier Matching',
      description: 'We identify 3-5 suitable factories, conduct verification visits, and present detailed profiles.'
    },
    {
      number: '03',
      title: 'Sample & Negotiation',
      description: 'We facilitate sample requests, quality assessments, and price negotiations on your behalf.'
    },
    {
      number: '04',
      title: 'Production & QC',
      description: 'Regular production monitoring with quality inspections at key stages.'
    },
    {
      number: '05',
      title: 'Shipping & Delivery',
      description: 'We handle documentation, shipping arrangements, and coordinate delivery to your door.'
    }
  ];

  const productCategories = [
    { name: 'Electronics & Components', icon: Cog, count: '2,500+' },
    { name: 'Home & Garden', icon: Package, count: '1,800+' },
    { name: 'Apparel & Textiles', icon: Package, count: '1,200+' },
    { name: 'Machinery & Industrial', icon: Factory, count: '950+' },
    { name: 'Promotional Products', icon: Package, count: '800+' },
    { name: 'Packaging Materials', icon: Package, count: '600+' }
  ];

  const problems = [
    {
      title: 'Language Barriers',
      description: 'Miscommunication leads to quality issues and missed requirements.'
    },
    {
      title: 'Quality Uncertainty',
      description: 'Without professional inspection, defective products may reach your customers.'
    },
    {
      title: 'Supply Chain Risks',
      description: 'Unverified suppliers may delay orders or disappear with deposits.'
    },
    {
      title: 'Hidden Costs',
      description: 'Unexpected fees, MOQs, and logistics costs can surprise buyers.'
    }
  ];

  const solutions = [
    {
      title: 'Clear Communication',
      description: 'Professional bilingual team bridges language gaps.',
      icon: MessageSquare
    },
    {
      title: 'Verified Quality',
      description: 'Third-party inspections catch issues before shipment.',
      icon: ClipboardCheck
    },
    {
      title: 'Risk Mitigation',
      description: 'Factory verification and secure payment terms protect you.',
      icon: Shield
    },
    {
      title: 'Transparent Pricing',
      description: 'All costs disclosed upfront with no hidden fees.',
      icon: BarChart3
    }
  ];

  const trustPoints = [
    { value: '500+', label: 'Active Clients' },
    { value: '15+', label: 'Years Experience' },
    { value: '50M+', label: 'Orders Managed' },
    { value: '98%', label: 'Client Satisfaction' }
  ];

  const caseStudies = [
    {
      client: 'European Retail Chain',
      industry: 'Home Decor',
      challenge: 'Needed 50,000 units across 200 SKUs with strict quality standards.',
      solution: 'We identified 8 verified factories, implemented a comprehensive QC system, and coordinated consolidated shipping.',
      result: '40% cost savings, zero quality issues in first year.',
      imageId: 'case-study-home-decor'
    },
    {
      client: 'US E-commerce Brand',
      industry: 'Consumer Electronics',
      challenge: 'Sourcing reliable suppliers for a new product line without prior China experience.',
      solution: 'Complete sourcing package: supplier identification, sample management, and pre-shipment inspections.',
      result: 'Launched 12 products on schedule with 99.2% quality pass rate.',
      imageId: 'case-study-electronics'
    }
  ];

  const faqs = [
    {
      question: 'What is the minimum order quantity (MOQ) you work with?',
      answer: 'MOQ requirements vary by supplier and product. Many factories we work with accept MOQs starting at 500-1000 units per SKU. We can negotiate flexible terms for startups and smaller orders.'
    },
    {
      question: 'How do you ensure product quality?',
      answer: 'We implement a multi-stage QC process: pre-production sample approval, during-production inspections, and pre-shipment inspections. We use internationally recognized inspection standards (AQL) and provide detailed reports with photos.'
    },
    {
      question: 'What are your service fees?',
      answer: 'Our fee structure depends on the services required. Typical sourcing services range from 3-8% of order value. We provide transparent pricing upfront with no hidden costs. Contact us for a customized quote.'
    },
    {
      question: 'How do you verify factories?',
      answer: 'Our verification process includes: legal business registration checks, on-site facility visits, production capacity assessment, quality management system review, and reference checks with existing clients.'
    },
    {
      question: 'Can you handle shipping to my country?',
      answer: 'Yes, we coordinate all shipping logistics including freight forwarding (sea, air, express), customs documentation, and can arrange door-to-door delivery. We work with trusted logistics partners worldwide.'
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Typical timelines: supplier identification 1-2 weeks, sample approval 2-4 weeks, production 4-12 weeks depending on order size. We provide detailed timelines during the initial consultation based on your requirements.'
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>
        <div className="container-custom relative py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
                <Building2 className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-300">Trusted by 500+ Global Buyers</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                China Sourcing Agent for <span className="text-blue-400">Global Buyers</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-xl">
                Find reliable suppliers, verify factories, ensure quality, and manage logistics. We handle the complexity of China sourcing so you can focus on growing your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-4">
                  Get a Free Sourcing Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/how-it-works" className="btn-secondary inline-flex items-center justify-center gap-2 text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10">
                  How It Works
                </Link>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>24h Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>No Obligation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Free Consultation</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <img
                 
                 
                 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Crect fill='%231e3a5f' width='800' height='450'/%3E%3Ctext x='400' y='200' font-family='system-ui' font-size='24' fill='%2364748b' text-anchor='middle'%3EFactory Sourcing Operations%3C/text%3E%3Ctext x='400' y='240' font-family='system-ui' font-size='16' fill='%23475569' text-anchor='middle'%3EChina manufacturing facility%3C/text%3E%3C/svg%3E"
                  alt="China sourcing operations"
                  className="rounded-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Trust Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 section-alt">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Common Challenges in China Sourcing
            </h2>
            <p className="text-lg text-gray-600">
              We understand the risks and complexities of sourcing from China. Here's how we help you overcome them.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{problem.title}</h3>
                <p className="text-sm text-gray-600">{problem.description}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-blue-600 rounded-xl p-6 text-white">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">{solution.title}</h3>
                <p className="text-sm text-blue-100">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white" id="services">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
              End-to-End China Sourcing Solutions
            </h2>
            <p className="text-lg text-gray-600">
              From finding suppliers to delivering products, we manage every step of your China sourcing journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300 card-hover"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  service.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  service.color === 'green' ? 'bg-green-100 text-green-600' :
                  service.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  service.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                  'bg-teal-100 text-teal-600'
                }`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-blue-600 font-medium text-sm group-hover:gap-2 transition-all"
                >
                  Learn more
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 section-alt">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Simple Process, Reliable Results
            </h2>
            <p className="text-lg text-gray-600">
              Our structured approach ensures transparency and quality at every stage.
            </p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 -translate-y-1/2"></div>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative z-10">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold mb-4">
                      {step.number}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/how-it-works" className="btn-primary inline-flex items-center gap-2">
              View Detailed Process
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 bg-white" id="products">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Product Categories</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Products We Source
            </h2>
            <p className="text-lg text-gray-600">
              Extensive experience across multiple product categories with verified supplier networks.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category, index) => (
              <Link
                key={index}
                to="/products"
                className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <category.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-blue-600">{category.count} suppliers</span>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="btn-secondary inline-flex items-center gap-2">
              View All Categories
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Success Stories</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-4">
              Case Studies
            </h2>
            <p className="text-lg text-gray-400">
              Real results for real businesses sourcing from China.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-slate-800 rounded-2xl overflow-hidden">
                <div className="h-48 bg-slate-700">
                  <img
                   
                   
                   
                   
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 300'%3E%3Crect fill='%23374151' width='800' height='300'/%3E%3Ctext x='400' y='150' font-family='system-ui' font-size='20' fill='%2364748b' text-anchor='middle'%3ECase Study%3C/text%3E%3C/svg%3E"
                    alt={study.client}
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-medium text-blue-400 bg-blue-400/20 px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{study.client}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-1">Challenge</h4>
                      <p className="text-sm text-gray-300">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-1">Solution</h4>
                      <p className="text-sm text-gray-300">{study.solution}</p>
                    </div>
                    <div className="pt-4 border-t border-slate-700">
                      <h4 className="text-sm font-semibold text-green-400 mb-1">Result</h4>
                      <p className="text-sm text-green-300">{study.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/case-studies" className="btn-primary inline-flex items-center gap-2">
              View All Case Studies
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 section-alt">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about our sourcing services.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${activeFaq === index ? 'rotate-90' : ''}`} />
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Start Sourcing from China?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a free consultation and quote. No obligation, just practical advice for your sourcing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="mailto:info@ssourcingchina.com"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
