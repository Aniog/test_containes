import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from './strk-img-config.json';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, ArrowRight, CheckCircle, Factory, Search, ClipboardCheck, Truck, Package, Shield, Clock, Users, TrendingUp, Star, Quote } from 'lucide-react';
import './App.css';

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Products', path: '/products' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">SSourcing China</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === link.path ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block py-2 text-gray-700 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block bg-blue-600 text-white px-5 py-3 rounded-lg text-center font-medium"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

// Footer Component
const Footer = () => {
  const footerLinks = {
    Services: ['Supplier Verification', 'Quality Inspection', 'Production Follow-up', 'Shipping & Logistics', 'Product Sourcing'],
    Company: ['About Us', 'How It Works', 'Case Studies', 'Blog', 'Contact'],
    Resources: ['Sourcing Guide', 'QC Checklist', 'Shipping Guide', 'FAQ', 'Privacy Policy'],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="ml-3 text-xl font-bold">SSourcing China</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted China sourcing agent. We help overseas buyers find reliable suppliers, verify factories, and ensure quality.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-3" />
                <span>Shenzhen, China</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3" />
                <span>+86 755 1234 5678</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3" />
                <span>info@ssourcing-china.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.Services.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.Company.map((link) => (
                <li key={link}>
                  <Link to={link === 'About Us' || link === 'How It Works' || link === 'Case Studies' || link === 'Blog' || link === 'Contact' ? `/${link.toLowerCase().replace(/ /g, '-').replace('about us', '').replace('how it works', 'how-it-works').replace('case studies', 'case-studies')}` : '#'} className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.Resources.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Home Page
const HomePage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'Find verified manufacturers and suppliers matching your exact requirements.',
    },
    {
      icon: Factory,
      title: 'Factory Verification',
      description: 'On-site inspections to verify legitimacy, capacity, and certifications.',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Control',
      description: 'Pre-shipment inspections ensuring products meet your specifications.',
    },
    {
      icon: Package,
      title: 'Production Follow-up',
      description: 'Regular updates and monitoring throughout the manufacturing process.',
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'End-to-end logistics coordination from factory to your doorstep.',
    },
    {
      icon: Shield,
      title: 'Supplier Audits',
      description: 'Comprehensive audits covering compliance, social responsibility, and capabilities.',
    },
  ];

  const processSteps = [
    { number: '01', title: 'Submit Requirements', description: 'Tell us what you need - product specs, quantity, target price, and timeline.' },
    { number: '02', title: 'We Find Suppliers', description: 'We research, vet, and shortlist 3-5 qualified manufacturers for your review.' },
    { number: '03', title: 'Factory Verification', description: 'Our team visits shortlisted factories to verify capabilities and legitimacy.' },
    { number: '04', title: 'Quality Inspection', description: 'We conduct pre-shipment inspections to ensure quality standards are met.' },
    { number: '05', title: 'Shipping & Delivery', description: 'We coordinate logistics and handle all documentation for smooth delivery.' },
  ];

  const products = [
    'Electronics & Gadgets', 'Textiles & Apparel', 'Furniture & Home Goods',
    'Machinery & Parts', 'Packaging Materials', 'Beauty & Personal Care',
    'Toys & Gifts', 'Sports & Outdoor', 'Automotive Parts', 'Medical Supplies',
  ];

  const problems = [
    { title: 'Language Barriers', description: 'We bridge communication gaps between you and Chinese suppliers.' },
    { title: 'Quality Issues', description: 'Our QC inspections prevent defective products from reaching you.' },
    { title: 'Supplier Scams', description: 'Factory verification ensures you work with legitimate manufacturers.' },
    { title: 'Shipping Complexities', description: 'We handle customs, documentation, and logistics coordination.' },
    { title: 'Cultural Differences', description: 'Our local team navigates business practices and negotiations.' },
  ];

  const trustPoints = [
    { number: '500+', label: 'Clients Served' },
    { number: '8+', label: 'Years Experience' },
    { number: '2000+', label: 'Factories Verified' },
    { number: '98%', label: 'Client Satisfaction' },
  ];

  const caseStudies = [
    {
      category: 'Electronics',
      title: 'US Retailer Sourced Smart Home Devices',
      challenge: 'A US retailer needed a reliable supplier for smart home devices with consistent quality.',
      solution: 'We verified 5 factories, conducted QC inspections, and arranged sea freight.',
      result: 'Successfully imported 50,000 units with 99.2% quality pass rate.',
    },
    {
      category: 'Textiles',
      title: 'European Brand Sourced Sustainable Apparel',
      challenge: 'A European fashion brand needed eco-friendly textile suppliers.',
      solution: 'We identified certified green factories and conducted sustainability audits.',
      result: 'Established a 2-year partnership with 3 verified manufacturers.',
    },
  ];

  const faqs = [
    { q: 'How do you verify factories?', a: 'Our team conducts on-site visits to verify business licenses, production capacity, certifications, and facility conditions.' },
    { q: 'What are your fees?', a: 'Our fee structure is transparent. We offer both project-based and retainer models. Contact us for a customized quote.' },
    { q: 'Do you only work with large orders?', a: 'We work with businesses of all sizes, from startup orders to large-scale manufacturing.' },
    { q: 'How long does the sourcing process take?', a: 'Typical sourcing takes 2-4 weeks for supplier identification, plus additional time for verification and sampling.' },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 opacity-20"
            data-strk-bg-id="hero-bg-001"
            data-strk-bg="China factory manufacturing warehouse industrial"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We help overseas businesses find reliable suppliers, verify factories, inspect quality, and coordinate seamless shipping from China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="border border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{point.number}</div>
                <div className="text-blue-100">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive sourcing solutions to help you source from China with confidence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
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
      <section className="py-20" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our proven 5-step process ensures smooth sourcing from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                  <div className="text-4xl font-bold text-blue-600 mb-4">{step.number}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 bg-gray-50" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Products We Source</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We have expertise across a wide range of product categories.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((product, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <p className="font-medium text-gray-900">{product}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Problems We Solve</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common challenges when sourcing from China, and how we help.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-600">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50" id="case-studies">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from our sourcing partnerships.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
                  <span className="text-white/30 text-6xl font-bold">{study.category[0]}</span>
                </div>
                <div className="p-8">
                  <span className="text-blue-600 font-medium text-sm">{study.category}</span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-4">{study.title}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900">Challenge:</h4>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Solution:</h4>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Result:</h4>
                      <p className="text-green-600 text-sm font-medium">{study.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/case-studies" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700">
              View All Case Studies <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common questions about our sourcing services.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source from China?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free sourcing quote from our expert team. We'll help you find the right suppliers.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

// Services Page
const ServicesPage = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'We find and vet manufacturers that match your specific requirements.',
      details: [
        'Market research and supplier identification',
        'Capability and capacity assessment',
        'Price negotiation and comparison',
        'Sample coordination and evaluation',
      ],
    },
    {
      icon: Factory,
      title: 'Factory Verification',
      description: 'On-site inspections to ensure you work with legitimate, capable manufacturers.',
      details: [
        'Business license verification',
        'Production capacity assessment',
        'Quality management system review',
        'Certification verification (ISO, CE, etc.)',
      ],
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Control Inspection',
      description: 'Pre-shipment inspections to ensure products meet your specifications.',
      details: [
        'AQL-based inspection protocols',
        'Function and safety testing',
        'Packaging and labeling verification',
        'Detailed inspection reports with photos',
      ],
    },
    {
      icon: Package,
      title: 'Production Follow-up',
      description: 'Regular monitoring throughout the manufacturing process.',
      details: [
        'Production progress updates',
        'Quality milestone checks',
        'Issue identification and resolution',
        'Timeline management',
      ],
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'End-to-end logistics coordination from factory to your doorstep.',
      details: [
        'Freight forwarding coordination',
        'Customs clearance assistance',
        'Documentation management',
        'Multi-modal transport options',
      ],
    },
    {
      icon: Shield,
      title: 'Supplier Audits',
      description: 'Comprehensive audits for due diligence and compliance.',
      details: [
        'Social compliance audits (SA8000)',
        'Environmental audits',
        'Security audits',
        'Pre-audit preparation support',
      ],
    },
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Comprehensive China sourcing solutions tailored to your business needs.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-8">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your specific sourcing requirements.
          </p>
          <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
            Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

// How It Works Page
const HowItWorksPage = () => {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We start by understanding your requirements in detail.',
      details: [
        'Product specifications and requirements',
        'Target price and quantity',
        'Quality standards and certifications',
        'Timeline and delivery expectations',
      ],
    },
    {
      number: '02',
      title: 'Supplier Research',
      description: 'Our team identifies and evaluates potential manufacturers.',
      details: [
        'Database of 10,000+ verified factories',
        'Market research and competitor analysis',
        'Supplier capability assessment',
        'Initial price comparisons',
      ],
    },
    {
      number: '03',
      title: 'Supplier Shortlisting',
      description: 'We present you with 3-5 qualified suppliers for review.',
      details: [
        'Detailed supplier profiles',
        'Factory visit reports',
        'Price and lead time comparisons',
        'Certification and compliance status',
      ],
    },
    {
      number: '04',
      title: 'Factory Verification',
      description: 'Our team conducts on-site inspections of shortlisted factories.',
      details: [
        'Business license verification',
        'Production capacity assessment',
        'Quality management review',
        'Worker conditions evaluation',
      ],
    },
    {
      number: '05',
      title: 'Sample Evaluation',
      description: 'We coordinate samples and ensure they meet your standards.',
      details: [
        'Sample request and tracking',
        'Quality evaluation',
        'Feedback and refinement',
        'Price negotiation',
      ],
    },
    {
      number: '06',
      title: 'Production Monitoring',
      description: 'Regular updates throughout the manufacturing process.',
      details: [
        'Production progress tracking',
        'Quality milestone checks',
        'Issue identification and resolution',
        'Timeline management',
      ],
    },
    {
      number: '07',
      title: 'Pre-Shipment Inspection',
      description: 'Final quality check before goods leave the factory.',
      details: [
        'AQL-based inspection',
        'Function and safety testing',
        'Packaging verification',
        'Detailed photo report',
      ],
    },
    {
      number: '08',
      title: 'Shipping & Delivery',
      description: 'We coordinate logistics to get your goods delivered.',
      details: [
        'Freight forwarding',
        'Customs clearance',
        'Documentation handling',
        'Delivery tracking',
      ],
    },
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Our 8-step process ensures reliable sourcing from China.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Submit your requirements and we'll start the sourcing process.
          </p>
          <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
            Start Sourcing <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

// Products Page
const ProductsPage = () => {
  const categories = [
    {
      name: 'Electronics & Gadgets',
      items: ['Smart Home Devices', 'Consumer Electronics', 'LED Lighting', 'Power Banks', 'Audio Equipment', 'Wearable Devices'],
    },
    {
      name: 'Textiles & Apparel',
      items: ['Casual Wear', 'Sportswear', 'Formal Attire', 'Kids Clothing', 'Activewear', 'Uniforms'],
    },
    {
      name: 'Furniture & Home Goods',
      items: ['Office Furniture', 'Home Furniture', 'Kitchenware', 'Home Decor', 'Bedding', 'Storage Solutions'],
    },
    {
      name: 'Machinery & Parts',
      items: ['Industrial Machinery', 'Auto Parts', 'Machine Components', 'Tools & Hardware', 'Electrical Parts', 'Hydraulic Components'],
    },
    {
      name: 'Packaging Materials',
      items: ['Paper Packaging', 'Plastic Packaging', 'Metal Containers', 'Gift Boxes', 'Labels & Stickers', 'Corrugated Boxes'],
    },
    {
      name: 'Beauty & Personal Care',
      items: ['Skincare Products', 'Hair Care', 'Cosmetics', 'Personal Care Appliances', 'Fragrances', 'Bath Products'],
    },
    {
      name: 'Toys & Gifts',
      items: ['Educational Toys', 'Electronic Toys', 'Plush Toys', 'Gift Items', 'Party Supplies', 'Seasonal Products'],
    },
    {
      name: 'Sports & Outdoor',
      items: ['Fitness Equipment', 'Camping Gear', 'Outdoor Furniture', 'Sports Accessories', 'Cycling Products', 'Water Sports Equipment'],
    },
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Products We Source</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            We have expertise across a wide range of product categories from China.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Don't See Your Product?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us with your specific requirements. We likely have suppliers for your product category.
          </p>
          <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
            Ask About Your Product <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

// Case Studies Page
const CaseStudiesPage = () => {
  const cases = [
    {
      category: 'Electronics',
      title: 'US Retailer Sourced Smart Home Devices',
      client: 'TechHome Inc. (USA)',
      challenge: 'A US retailer needed a reliable supplier for smart home devices with consistent quality and competitive pricing. Previous attempts to source directly had resulted in quality issues and delays.',
      solution: 'We conducted thorough supplier research, verified 5 factories, performed quality inspections, and arranged sea freight. We also established a quality control protocol for ongoing orders.',
      result: 'Successfully imported 50,000 units over 6 months with a 99.2% quality pass rate. The client expanded their product line and now sources 3 additional product categories through us.',
      metrics: ['50,000 units imported', '99.2% quality pass rate', '15% cost savings'],
    },
    {
      category: 'Textiles',
      title: 'European Brand Sourced Sustainable Apparel',
      client: 'EcoWear GmbH (Germany)',
      challenge: 'A European fashion brand needed eco-friendly textile suppliers who could meet their sustainability standards and GOTS certification requirements.',
      solution: 'We identified certified green factories, conducted sustainability audits, and negotiated favorable terms. We also coordinated organic cotton sourcing and fair-trade certification.',
      result: 'Established a 2-year partnership with 3 verified manufacturers. The brand successfully launched their sustainable line in 150 retail locations across Europe.',
      metrics: ['3 verified manufacturers', 'GOTS certified', '2-year partnership'],
    },
    {
      category: 'Furniture',
      title: 'Canadian Importer Sourced Office Furniture',
      client: 'OfficePro Canada',
      challenge: 'A Canadian office furniture importer needed to diversify their supply chain away from a single supplier and find manufacturers who could meet their quality standards.',
      solution: 'We identified and verified 4 potential manufacturers, conducted factory audits, negotiated pricing, and established quality control protocols. We also coordinated sample development.',
      result: 'Reduced supplier risk by 75% and achieved 20% cost savings. The client now has a diversified supplier base with consistent quality.',
      metrics: ['4 new suppliers', '20% cost savings', 'Diversified supply chain'],
    },
    {
      category: 'Machinery',
      title: 'Australian Company Sourced Industrial Equipment',
      client: 'AusTech Industries',
      challenge: 'An Australian industrial equipment company needed to source specialized machinery parts with specific technical specifications.',
      solution: 'We worked with the client to develop detailed technical specifications, identified qualified manufacturers, coordinated sample production, and performed quality inspections.',
      result: 'Successfully sourced custom machinery parts that met Australian safety standards. The client reduced their procurement costs by 30%.',
      metrics: ['Custom specifications met', '30% cost reduction', 'AS/NZS compliance'],
    },
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Real results from our sourcing partnerships with global buyers.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {cases.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-4">
                  <span className="text-blue-100 font-medium">{study.category}</span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{study.title}</h3>
                  <p className="text-gray-500 mb-6">{study.client}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">Result</h4>
                      <p className="text-green-700 text-sm">{study.result}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.metrics.map((metric, i) => (
                      <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Be Our Next Success Story?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you source from China with confidence.
          </p>
          <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
            Get Started <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

// Blog Page
const BlogPage = () => {
  const posts = [
    {
      title: 'How to Verify a Chinese Factory Before Placing Orders',
      excerpt: 'Learn the essential steps to verify a factory\'s legitimacy and capabilities before committing to large orders.',
      category: 'Factory Verification',
      date: 'July 20, 2026',
      readTime: '8 min read',
    },
    {
      title: 'Understanding Quality Control Inspections: AQL Explained',
      excerpt: 'A comprehensive guide to Acceptable Quality Level (AQL) testing and how it protects your orders.',
      category: 'Quality Control',
      date: 'July 15, 2026',
      readTime: '6 min read',
    },
    {
      title: 'Shipping from China: Sea Freight vs Air Freight',
      excerpt: 'Compare shipping methods and learn when to choose sea freight vs air freight for your imports.',
      category: 'Logistics',
      date: 'July 10, 2026',
      readTime: '5 min read',
    },
    {
      title: 'Common Mistakes When Sourcing from China',
      excerpt: 'Avoid these frequent pitfalls that many first-time importers encounter when working with Chinese suppliers.',
      category: 'Sourcing Tips',
      date: 'July 5, 2026',
      readTime: '7 min read',
    },
    {
      title: 'How to Negotiate with Chinese Suppliers',
      excerpt: 'Effective negotiation strategies for getting the best prices and terms from your Chinese suppliers.',
      category: 'Negotiation',
      date: 'June 28, 2026',
      readTime: '6 min read',
    },
    {
      title: 'Understanding Chinese Business Culture',
      excerpt: 'Key cultural insights to help you build stronger relationships with your Chinese suppliers.',
      category: 'Business Culture',
      date: 'June 20, 2026',
      readTime: '5 min read',
    },
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Insights and guides for successful China sourcing.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                  <span className="text-white/30 text-4xl font-bold">{post.category[0]}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-blue-600 text-sm font-medium">{post.category}</span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="text-gray-500 text-sm">{post.date}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Contact Page
const ContactPage = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  });
  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Get a free sourcing quote. Our team will respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form and our sourcing experts will get back to you within 24 hours with a customized quote.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">Office</h3>
                    <p className="text-gray-600">Shenzhen, China</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+86 755 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@ssourcing-china.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM (China Time)</p>
                <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM (China Time)</p>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    Your inquiry has been submitted. Our team will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Product Category *</label>
                      <select
                        name="product"
                        required
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a category</option>
                        <option value="electronics">Electronics & Gadgets</option>
                        <option value="textiles">Textiles & Apparel</option>
                        <option value="furniture">Furniture & Home Goods</option>
                        <option value="machinery">Machinery & Parts</option>
                        <option value="packaging">Packaging Materials</option>
                        <option value="beauty">Beauty & Personal Care</option>
                        <option value="toys">Toys & Gifts</option>
                        <option value="sports">Sports & Outdoor</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Quantity</label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="e.g., 10,000 units"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Describe your sourcing requirements, including product specifications, target price, and any other details..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Submit Inquiry
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

// Main App Component
function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
