import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, CheckCircle, Factory, Truck, Search, ClipboardCheck, 
  Package, Users, Clock, DollarSign, ArrowRight, ChevronDown, 
  ChevronUp, Star, Building2, FileCheck, MessageSquare
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    icon: Search,
    title: 'Supplier Verification',
    description: 'We verify factory existence, capabilities, licenses, and business legitimacy before you commit.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Professional QC inspections during and after production to ensure your standards are met.',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    description: 'Regular updates on production progress, samples, and timeline management.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support from factory to your doorstep, including customs clearance.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Submit Inquiry',
    description: 'Tell us what you need - product details, quantity, target price, and timeline.',
  },
  {
    step: '02',
    title: 'Supplier Matching',
    description: 'We identify and verify suitable factories from our pre-screened network.',
  },
  {
    step: '03',
    title: 'Sample & Quote',
    description: 'Receive samples, compare quotes, and negotiate terms with our assistance.',
  },
  {
    step: '04',
    title: 'Production & QC',
    description: 'We monitor production, conduct inspections, and resolve any issues.',
  },
  {
    step: '05',
    title: 'Shipping & Delivery',
    description: 'Coordinate shipping, documentation, and ensure smooth delivery.',
  },
];

const products = [
  { name: 'Electronics & Components', icon: Package },
  { name: 'Home Goods & Furniture', icon: Building2 },
  { name: 'Textiles & Apparel', icon: Factory },
  { name: 'Machinery & Equipment', icon: Factory },
  { name: 'Packaging Materials', icon: Package },
  { name: 'Industrial Parts', icon: Factory },
];

const problems = [
  {
    title: 'Language & Communication Barriers',
    description: 'Misunderstandings lead to wrong products, missed deadlines, and costly mistakes.',
    solution: 'Our bilingual team bridges the communication gap with clear, professional correspondence.',
  },
  {
    title: 'Quality Control Risks',
    description: 'Without on-site oversight, defective products may ship, damaging your reputation and finances.',
    solution: 'We conduct thorough inspections at every production stage to catch issues early.',
  },
  {
    title: 'Supplier Scams & Fraud',
    description: 'Fake factories, payment scams, and bait-and-switch tactics target unfamiliar buyers.',
    solution: 'We verify every supplier\'s legitimacy before you pay a single dollar.',
  },
  {
    title: 'Logistics Complexities',
    description: 'Shipping from China involves complex documentation, customs, and multiple carriers.',
    solution: 'We handle all logistics coordination, ensuring compliance and smooth delivery.',
  },
];

const trustPoints = [
  { value: '500+', label: 'Clients Served' },
  { value: '1,200+', label: 'Factory Partners' },
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
];

const faqItems = [
  {
    question: 'What types of products can you help me source?',
    answer: 'We work with a wide range of product categories including electronics, home goods, textiles, machinery, packaging materials, and industrial parts. If you have a specific product in mind, contact us to discuss your requirements.',
  },
  {
    question: 'How do you verify factories before recommending them?',
    answer: 'We conduct comprehensive factory verification including business license checks, on-site visits, capability assessments, and reference checks with existing clients. We only work with suppliers who pass our strict vetting criteria.',
  },
  {
    question: 'What are your fees for sourcing services?',
    answer: 'Our pricing is based on the scope of services required. We offer flexible packages ranging from one-time supplier verification to comprehensive end-to-end sourcing. Contact us for a customized quote based on your specific needs.',
  },
  {
    question: 'How do you handle quality control?',
    answer: 'We offer multiple QC options: pre-production inspection, during-production inspection, pre-shipment inspection, and container loading supervision. Our inspectors are trained professionals who follow your specifications and provide detailed reports.',
  },
  {
    question: 'What is the typical timeline for a sourcing project?',
    answer: 'Timeline varies based on product complexity, quantity, and availability. A typical project takes 4-12 weeks from initial inquiry to delivery. We provide estimated timelines during the planning phase and keep you updated throughout.',
  },
  {
    question: 'Do you offer sample services?',
    answer: 'Yes, we facilitate sample orders with suppliers. We can request samples on your behalf, verify they meet your specifications, and ship them to you for approval before mass production begins.',
  },
];

const caseStudies = [
  {
    client: 'European Retail Chain',
    industry: 'Home Goods',
    challenge: 'Needed to source 50,000 units of home decor items from verified factories within 3 months.',
    solution: 'We identified 3 pre-screened factories, conducted capability assessments, and coordinated parallel production with strict QC protocols.',
    result: 'Delivered on time with 99.2% quality pass rate, saving 25% compared to their previous supplier.',
    imageId: 'case-study-1',
  },
  {
    client: 'North American Tech Startup',
    industry: 'Electronics',
    challenge: 'Required custom-designed consumer electronics with strict IP protection.',
    solution: 'Implemented NDA-protected development process, verified manufacturer\'s IP security measures, and established escrow payment terms.',
    result: 'Successfully launched product with zero IP leaks, completing first order of 10,000 units.',
    imageId: 'case-study-2',
  },
];

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('idle');
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        product: '',
        quantity: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>
        <div className="container mx-auto px-4 lg:px-6 py-16 lg:py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 text-green-400" />
              Trusted by 500+ Global Buyers
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-lg lg:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Find reliable suppliers, verify factories, inspect quality, and coordinate shipping. We handle the complexity so you can focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg rounded-lg transition-colors shadow-lg shadow-orange-500/25"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-lg rounded-lg transition-colors border border-white/30"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* Trust Points */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-800 mb-1">{point.value}</div>
                <div className="text-sm text-slate-600">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive sourcing solutions to help you source products from China with confidence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A clear, step-by-step process to help you source products efficiently and safely.
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-slate-50 p-6 rounded-xl h-full">
                  <div className="text-4xl font-bold text-blue-100 mb-4">{step.step}</div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800 transition-colors"
            >
              Learn more about our process
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Products We Source</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We have experience across a wide range of product categories and can help you find the right suppliers.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <product.icon className="w-6 h-6 text-blue-700" />
                </div>
                <span className="font-medium text-slate-800">{product.name}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800 transition-colors"
            >
              View all product categories
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Problems We Solve</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We understand the challenges of sourcing from China and provide solutions to address them.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-slate-50 p-6 lg:p-8 rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold">!</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
                    <p className="text-sm text-slate-600 mb-4">{problem.description}</p>
                    <div className="flex items-start gap-2 bg-green-50 p-4 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-green-800">{problem.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-16 lg:py-24 bg-blue-900 text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              See how we've helped businesses overcome sourcing challenges and achieve their goals.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur p-6 lg:p-8 rounded-xl border border-white/20"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm text-blue-200">Case Study</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{study.client}</h3>
                <p className="text-sm text-blue-200 mb-4">{study.industry}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-blue-200 mb-1">Challenge</h4>
                    <p className="text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-blue-200 mb-1">Solution</h4>
                    <p className="text-sm">{study.solution}</p>
                  </div>
                  <div className="bg-green-500/20 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-green-300 mb-1">Result</h4>
                    <p className="text-sm font-medium text-green-100">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              View All Case Studies
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-600">
                Find answers to common questions about our sourcing services.
              </p>
            </div>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-100">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <span className="font-medium text-slate-800 pr-4">{item.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Inquiry Form Section */}
      <section className="py-16 lg:py-24 bg-white" id="contact">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Get a Free Sourcing Quote</h2>
              <p className="text-slate-600 mb-8">
                Tell us about your sourcing needs and we'll provide you with a customized plan and quote within 24 hours.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Quick Response</h3>
                    <p className="text-sm text-slate-600">We respond to all inquiries within 24 hours during business days.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">No Obligation</h3>
                    <p className="text-sm text-slate-600">Our initial consultation and quote are completely free with no strings attached.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Confidential</h3>
                    <p className="text-sm text-slate-600">All project details are kept strictly confidential. We sign NDAs upon request.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-6 lg:p-8 rounded-xl border border-slate-200">
              {formStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-slate-600 mb-6">We've received your inquiry and will get back to you within 24 hours.</p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="text-blue-700 font-medium hover:text-blue-800"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-800"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-800"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-800"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-800"
                        placeholder="+1 555 123 4567"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-1">
                      Product to Source *
                    </label>
                    <input
                      type="text"
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-800"
                      placeholder="Describe the product you need"
                    />
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-1">
                      Estimated Quantity
                    </label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-800"
                      placeholder="e.g., 10,000 units"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-800 resize-none"
                      placeholder="Tell us more about your requirements, timeline, budget, etc."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
                  </button>
                  <p className="text-xs text-slate-500 text-center">
                    By submitting this form, you agree to our Privacy Policy. We'll never share your information.
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
