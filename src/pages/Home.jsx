import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Truck, Search, Factory, ClipboardCheck, Ship, ArrowRight, Star, ChevronDown, Users, Globe, Award } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const heroRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, heroRef.current);
  }, []);

  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'We identify and vet reliable manufacturers in China that match your product requirements, budget, and quality standards.',
    },
    {
      icon: Shield,
      title: 'Factory Verification',
      description: 'On-site factory audits to verify business licenses, production capacity, quality systems, and social compliance.',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Pre-production, during-production, and pre-shipment inspections to ensure products meet your specifications.',
    },
    {
      icon: Factory,
      title: 'Production Monitoring',
      description: 'Regular factory visits and progress reports to keep your production on schedule and within budget.',
    },
    {
      icon: Ship,
      title: 'Shipping Coordination',
      description: 'End-to-end logistics support including freight forwarding, customs documentation, and delivery tracking.',
    },
    {
      icon: Globe,
      title: 'Sourcing Strategy',
      description: 'Market research, cost analysis, and supplier negotiation to optimize your China sourcing strategy.',
    },
  ];

  const processSteps = [
    { step: '01', title: 'Share Requirements', description: 'Tell us your product specs, target price, and timeline.' },
    { step: '02', title: 'Supplier Matching', description: 'We find and verify suitable factories in China.' },
    { step: '03', title: 'Verification & QC', description: 'Factory audits and sample inspections before production.' },
    { step: '04', title: 'Production & Shipping', description: 'Monitor production and coordinate delivery to your door.' },
  ];

  const problems = [
    { title: 'Unreliable Suppliers', description: 'We verify every factory so you avoid scams and quality failures.' },
    { title: 'Communication Gaps', description: 'Native Mandarin speakers bridge language and cultural barriers.' },
    { title: 'Quality Issues', description: 'Professional inspectors catch defects before they reach your customers.' },
    { title: 'Hidden Costs', description: 'Transparent pricing with no surprise fees or markups.' },
    { title: 'Shipping Delays', description: 'Experienced logistics coordination keeps your supply chain on time.' },
  ];

  const trustPoints = [
    { stat: '500+', label: 'Factories Verified' },
    { stat: '50+', label: 'Countries Served' },
    { stat: '98%', label: 'Client Satisfaction' },
    { stat: '15+', label: 'Years Experience' },
  ];

  const caseStudies = [
    {
      title: 'Electronics Importer from USA',
      category: 'Electronics',
      result: 'Reduced supplier costs by 22% while improving quality pass rate from 85% to 99.5%.',
    },
    {
      title: 'Home Goods Retailer from UK',
      category: 'Home & Garden',
      result: 'Consolidated 12 suppliers into 3 reliable partners, cutting lead time by 30%.',
    },
    {
      title: 'Automotive Parts Distributor from Germany',
      category: 'Automotive',
      result: 'Established ISO-certified supply chain with zero quality complaints in 18 months.',
    },
  ];

  const faqs = [
    {
      question: 'What does a China sourcing agent do?',
      answer: 'A China sourcing agent helps overseas buyers find reliable suppliers, verify factories, inspect product quality, monitor production, and coordinate shipping. We act as your local representative in China, reducing risks and saving you time and money.',
    },
    {
      question: 'How much does your sourcing service cost?',
      answer: 'Our fees depend on the scope of work. We offer project-based pricing for sourcing and verification, inspection fees per visit, and monthly retainers for ongoing production monitoring. Contact us for a customized quote.',
    },
    {
      question: 'Do you work with small orders or only large volume?',
      answer: 'We work with buyers of all sizes, from small trial orders to large volume production. Our minimum order quantity (MOQ) guidance helps you start with manageable quantities while building a reliable supply chain.',
    },
    {
      question: 'How do you verify suppliers?',
      answer: 'We conduct on-site factory audits including business registration verification, production capacity assessment, quality system review, and reference checks. For critical suppliers, we also perform social compliance audits.',
    },
    {
      question: 'Can you help with product customization and OEM?',
      answer: 'Yes, we coordinate with factories on custom designs, OEM production, packaging customization, and branding requirements. We ensure your specifications are clearly communicated and verified throughout production.',
    },
  ];

  return (
    <div ref={heroRef}>
      {/* Hero Section */}
      <section className="relative bg-slate-50 overflow-hidden">
        <div className="absolute inset-0">
          <div
            data-strk-bg-id="hero-bg-8f2a9c"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
            className="absolute inset-0 bg-cover bg-center opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                Trusted by 500+ global buyers
              </div>
              <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                China Sourcing Agent for Global Buyers
              </h1>
              <p id="hero-subtitle" className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
                Find reliable suppliers, verify factories, inspect quality, and coordinate shipping from China. Your trusted local partner for hassle-free sourcing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
                >
                  Get a Free Sourcing Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
                >
                  See How It Works
                </Link>
              </div>
              <div className="flex items-center mt-8 space-x-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-medium text-slate-600">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="flex items-center">
                  <div className="flex text-amber-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-slate-600">4.9/5 from 200+ reviews</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                data-strk-img-id="hero-main-img-8f2a9c"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="China sourcing agent with factory and quality control"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">ISO 9001 Certified</p>
                  <p className="text-xs text-slate-500">Quality Management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPoints.map((item, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-slate-900 mb-1">{item.stat}</p>
                <p className="text-sm text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">End-to-End Sourcing Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From finding the right supplier to delivering products to your warehouse, we handle every step of the China sourcing process.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-slate-700" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-slate-900 font-semibold hover:text-slate-700 transition-colors"
            >
              View all services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A simple, transparent process designed to minimize risk and maximize results for your sourcing projects.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-slate-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="inline-flex items-center text-slate-900 font-semibold hover:text-slate-700 transition-colors"
            >
              Learn more about our process
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Common Sourcing Challenges We Solve</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Overseas buyers face unique challenges when sourcing from China. Here is how we help.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{problem.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Products We Source</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We source a wide range of products across multiple industries. Here are some of the categories we specialize in.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Electronics & Components',
              'Home & Garden',
              'Textiles & Apparel',
              'Automotive Parts',
              'Industrial Equipment',
              'Consumer Goods',
              'Toys & Recreation',
              'Health & Beauty',
            ].map((category, index) => (
              <div
                key={index}
                className="group relative bg-slate-50 rounded-xl p-6 text-center hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <p className="text-sm font-medium text-slate-700 group-hover:text-slate-900">{category}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center text-slate-900 font-semibold hover:text-slate-700 transition-colors"
            >
              View all product categories
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Case Studies</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real results for real buyers. See how we have helped companies source better from China.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-slate-100">
                <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full mb-4">
                  {study.category}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{study.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{study.result}</p>
                <Link to="/case-studies" className="text-sm font-medium text-slate-900 hover:text-slate-700 inline-flex items-center">
                  Read full case study
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="inline-flex items-center text-slate-900 font-semibold hover:text-slate-700 transition-colors"
            >
              View all case studies
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">
              Answers to common questions about our China sourcing services.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-lg">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-medium text-slate-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Start Sourcing from China?</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation sourcing quote. Tell us what you need, and we will find the right suppliers for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
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
