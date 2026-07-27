import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Shield, 
  Factory, 
  Truck, 
  Search, 
  ClipboardCheck, 
  Package, 
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Star,
  MapPin,
  Clock,
  Mail,
  Phone
} from 'lucide-react';
import { cn } from '@/lib/utils';

const HomePage = () => {
  const [faqOpen, setFaqOpen] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', company: '', product: '', message: '' });
  };

  const services = [
    {
      icon: Search,
      title: 'Supplier Verification',
      description: 'We verify factory credentials, business licenses, production capacity, and certifications to ensure you work with legitimate suppliers.',
      features: ['Factory audit reports', 'Business license verification', 'Production capacity assessment', 'Certification verification']
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Control Inspection',
      description: 'Professional QC inspectors conduct thorough inspections at your specified stages of production to ensure quality standards are met.',
      features: ['Pre-shipment inspection', 'During production inspection', 'Container loading supervision', 'Detailed inspection reports']
    },
    {
      icon: Factory,
      title: 'Production Follow-up',
      description: 'We monitor production progress, address issues promptly, and ensure timelines are met while maintaining quality standards.',
      features: ['Regular progress updates', 'Sample approval', 'Production scheduling', 'Issue resolution']
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'We coordinate end-to-end shipping from factory to your doorstep, handling customs clearance and documentation.',
      features: ['Freight forwarding', 'Customs clearance', 'Documentation handling', 'Door-to-door delivery']
    }
  ];

  const process = [
    { step: 1, title: 'Submit Inquiry', description: 'Tell us what you need - product details, quantity, target price, and any special requirements.' },
    { step: 2, title: 'Supplier Matching', description: 'We identify and vet 3-5 qualified suppliers based on your criteria and verify their credentials.' },
    { step: 3, title: 'Sample Evaluation', description: 'We arrange samples, conduct evaluations, and provide recommendations based on quality and value.' },
    { step: 4, title: 'Order & Production', description: 'We place the order, monitor production, and provide regular updates on progress and quality.' },
    { step: 5, title: 'Quality Inspection', description: 'Our QC team inspects your goods before shipment to ensure they meet your specifications.' },
    { step: 6, title: 'Shipping & Delivery', description: 'We handle all logistics, customs, and deliver your goods to your specified location.' }
  ];

  const products = [
    { name: 'Electronics', description: 'Consumer electronics, components, gadgets' },
    { name: 'Textiles & Apparel', description: 'Garments, fabrics, accessories' },
    { name: 'Furniture', description: 'Home furniture, office furniture, outdoor' },
    { name: 'Machinery', description: 'Industrial equipment, parts, tools' },
    { name: 'Packaging', description: 'Boxes, labels, custom packaging' },
    { name: 'Health & Beauty', description: 'Cosmetics, personal care products' },
    { name: 'Toys & Games', description: 'Educational toys, games, puzzles' },
    { name: 'Automotive', description: 'Parts, accessories, components' }
  ];

  const trustPoints = [
    { number: '500+', label: 'Clients Served' },
    { number: '10+', label: 'Years Experience' },
    { number: '2000+', label: 'Factories Verified' },
    { number: '98%', label: 'Client Satisfaction' }
  ];

  const caseStudies = [
    {
      company: 'European Retail Brand',
      industry: 'Home Goods',
      challenge: 'Needed to find reliable suppliers for kitchenware products with consistent quality.',
      solution: 'We verified 15 factories, conducted quality inspections, and established a reliable supply chain.',
      result: 'Reduced procurement costs by 25% while improving quality consistency.',
      image: 'kitchenware manufacturing'
    },
    {
      company: 'US Tech Startup',
      industry: 'Electronics',
      challenge: 'First-time sourcing from China with no local network or experience.',
      solution: 'End-to-end sourcing support including supplier verification, sample testing, and QC.',
      result: 'Successfully launched product on time with zero quality issues.',
      image: 'electronics factory'
    },
    {
      company: 'Australian Distributor',
      industry: 'Furniture',
      challenge: 'Needed quality furniture suppliers with export experience to Australia.',
      solution: 'Matched with verified manufacturers, conducted pre-shipment inspections, arranged shipping.',
      result: 'Established 3-year supply partnership, 40% faster delivery times.',
      image: 'furniture workshop'
    }
  ];

  const faqs = [
    {
      question: 'How do you verify if a factory is legitimate?',
      answer: 'We conduct comprehensive factory audits that include verifying business licenses, checking production capacity, confirming certifications (ISO, CE, etc.), and visiting the facility in person. We provide detailed audit reports with photos and videos.'
    },
    {
      question: 'What quality control services do you offer?',
      answer: 'We offer multiple QC options: pre-shipment inspection (PSI), during production inspection (DPI), initial production inspection (IPI), and container loading supervision. Each inspection includes detailed reports with photos, measurements, and compliance checklists.'
    },
    {
      question: 'How do you charge for your services?',
      answer: 'Our fee structure is transparent and based on the services you need. We offer both project-based pricing and retainer options. Most clients find our fees are offset by the savings we achieve through better supplier negotiations and reduced quality issues.'
    },
    {
      question: 'Can you help with small orders?',
      answer: 'Yes, we work with businesses of all sizes. While we have minimum order requirements for some services, we can discuss flexible options for startups and small businesses. We also help connect you with suppliers who accept smaller MOQs.'
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Timeline varies based on complexity. Typically: supplier identification takes 1-2 weeks, sample evaluation 2-4 weeks, and production 4-12 weeks depending on order size and customization. We provide detailed timelines for each project.'
    },
    {
      question: 'Do you only work with factories in China?',
      answer: 'While our primary expertise is in China, we have partner networks in Vietnam, India, and other Asian manufacturing hubs. We can help you source from the best location based on your product type, quality requirements, and budget.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.03%22%3E%3Cpath%20d=%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-8">
              <Shield className="w-4 h-4 mr-2" />
              Trusted by 500+ Global Buyers
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              China Sourcing Agent for{' '}
              <span className="text-blue-400">Global Buyers</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              We help you find reliable suppliers, verify factories, inspect quality, and coordinate shipping. 
              Your trusted partner for seamless China sourcing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/20"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
        
        {/* Trust Stats */}
        <div className="bg-slate-800/50 border-t border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {trustPoints.map((point, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">{point.number}</div>
                  <div className="text-slate-400 text-sm">{point.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Sourcing Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive sourcing solutions to help you source from China with confidence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-slate-100"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
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

      {/* Problems We Solve Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              We Solve Your Sourcing Challenges
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Common problems overseas buyers face when sourcing from China - and how we help
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Fake or Unverified Suppliers</h3>
              <p className="text-slate-600">
                We verify every supplier through factory audits, business license checks, and on-site inspections before recommending them.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <ClipboardCheck className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Quality Issues</h3>
              <p className="text-slate-600">
                Our QC inspectors ensure your products meet specifications at every production stage, preventing costly mistakes.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Factory className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Production Delays</h3>
              <p className="text-slate-600">
                We monitor production closely and address issues immediately, keeping your project on schedule.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Shipping Complexities</h3>
              <p className="text-slate-600">
                We handle all logistics, customs documentation, and freight forwarding - from factory to your door.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Language Barriers</h3>
              <p className="text-slate-600">
                Our bilingual team bridges communication gaps, ensuring clear understanding between you and suppliers.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Finding the Right Supplier</h3>
              <p className="text-slate-600">
                We leverage our extensive network to match you with suppliers that meet your quality, capacity, and price requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Our Sourcing Process Works
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              A transparent, step-by-step approach to sourcing from China
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-slate-800 rounded-2xl p-6 h-full border border-slate-700">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                      {item.step}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold">{item.title}</h3>
                    </div>
                  </div>
                  <p className="text-slate-400">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-slate-600" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300"
            >
              Learn More About Our Process
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source Section */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Products We Source
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We have expertise across a wide range of product categories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-slate-100"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{product.name}</h3>
                <p className="text-sm text-slate-500">{product.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
              View All Product Categories
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See how we've helped other businesses succeed with China sourcing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                  <Factory className="w-16 h-16 text-slate-400" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-medium mb-2">{study.industry}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{study.company}</h3>
                  <div className="mb-4">
                    <div className="text-sm font-medium text-slate-700 mb-1">Challenge:</div>
                    <p className="text-sm text-slate-600">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <div className="text-sm font-medium text-slate-700 mb-1">Solution:</div>
                    <p className="text-sm text-slate-600">{study.solution}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <div className="text-sm font-medium text-green-600">Result:</div>
                    <p className="text-sm text-slate-600">{study.result}</p>
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
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Common questions about our China sourcing services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden border border-slate-200">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                  onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                >
                  <span className="font-semibold text-slate-900">{faq.question}</span>
                  {faqOpen === index ? (
                    <ChevronUp className="w-5 h-5 text-slate-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />
                  )}
                </button>
                {faqOpen === index && (
                  <div className="px-6 pb-4">
                    <p className="text-slate-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Form Section */}
      <section className="py-20 lg:py-28 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Sourcing?
              </h2>
              <p className="text-lg text-slate-400 mb-8">
                Get a free sourcing quote tailored to your needs. Our team will respond within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">No Obligation Quote</h4>
                    <p className="text-slate-400">Get detailed pricing with no commitment required</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Expert Advice</h4>
                    <p className="text-slate-400">Receive personalized recommendations from our sourcing experts</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Fast Response</h4>
                    <p className="text-slate-400">We respond to all inquiries within 24 business hours</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-800">
                <div className="flex items-center text-slate-400 mb-4">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>Guangzhou, China</span>
                </div>
                <div className="flex items-center text-slate-400 mb-4">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>info@ssourcing-china.com</span>
                </div>
                <div className="flex items-center text-slate-400">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+86 20 1234 5678</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get Your Free Quote</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Company Ltd"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Product You're Sourcing *</label>
                  <input
                    type="text"
                    required
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Electronics, Furniture, Textiles"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us about your requirements, quantity, target price..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;