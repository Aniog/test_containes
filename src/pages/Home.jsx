import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, CheckCircle, Factory, Truck, Search, ClipboardCheck, 
  Package, Users, Clock, DollarSign, ArrowRight, ChevronDown, 
  ChevronUp, Star, Globe, Award, FileCheck, Building2, MessageSquare,
  Settings
} from 'lucide-react';

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const stats = [
    { value: '500+', label: 'Verified Suppliers' },
    { value: '1,200+', label: 'Orders Managed' },
    { value: '15+', label: 'Industries Served' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  const services = [
    {
      icon: Search,
      title: 'Supplier Verification',
      description: 'We conduct thorough due diligence on potential suppliers, including factory visits, business license verification, and capability assessments.',
      href: '/services#supplier-verification'
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Professional QC services at every stage - from pre-shipment inspections to during-production checks and container loading supervision.',
      href: '/services#quality-inspection'
    },
    {
      icon: Factory,
      title: 'Production Follow-up',
      description: 'Regular factory visits and progress monitoring to ensure your orders are completed on time and meet specifications.',
      href: '/services#production-followup'
    },
    {
      icon: Truck,
      title: 'Shipping Coordination',
      description: 'End-to-end logistics support including freight booking, customs clearance, and last-mile delivery coordination.',
      href: '/services#shipping'
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Submit Your Request',
      description: 'Tell us what you need - product specifications, quantity, target price, and timeline.',
    },
    {
      step: '02',
      title: 'Supplier Matching',
      description: 'We identify and verify suitable factories from our network of 500+ vetted suppliers.',
    },
    {
      step: '03',
      title: 'Sample & Negotiation',
      description: 'We facilitate sample requests, price negotiations, and contract finalization.',
    },
    {
      step: '04',
      title: 'Production & QC',
      description: 'Regular factory visits and quality inspections throughout production.',
    },
    {
      step: '05',
      title: 'Shipping & Delivery',
      description: 'We coordinate freight, handle documentation, and ensure smooth delivery.',
    },
  ];

  const products = [
    { name: 'Electronics & Components', count: '120+', icon: Package },
    { name: 'Machinery & Equipment', count: '85+', icon: Factory },
    { name: 'Textiles & Apparel', count: '95+', icon: CheckCircle },
    { name: 'Home & Garden', count: '110+', icon: Building2 },
    { name: 'Packaging Materials', count: '60+', icon: Package },
    { name: 'Industrial Parts', count: '150+', icon: Settings },
  ];

  const problems = [
    {
      problem: "Can't verify if suppliers are real",
      solution: "We conduct factory visits and verify business licenses, production capabilities, and certifications.",
      icon: Shield,
    },
    {
      problem: "Concerned about product quality",
      solution: "Our professional QC team performs inspections at multiple production stages.",
      icon: CheckCircle,
    },
    {
      problem: "Communication barriers",
      solution: "We bridge the language gap and ensure clear communication between you and suppliers.",
      icon: MessageSquare,
    },
    {
      problem: "Complex logistics and customs",
      solution: "We handle all shipping documentation and coordinate with reliable freight partners.",
      icon: Truck,
    },
  ];

  const trustPoints = [
    { icon: Award, title: 'Verified Suppliers', desc: 'All suppliers pass our rigorous vetting process' },
    { icon: FileCheck, title: 'Quality Assured', desc: 'Professional QC inspections at every stage' },
    { icon: Clock, title: 'On-Time Delivery', desc: '98% on-time delivery rate' },
    { icon: Globe, title: 'Global Reach', desc: 'Serving buyers from 30+ countries' },
  ];

  const caseStudies = [
    {
      title: 'Electronics Retailer Expands Product Line',
      client: 'US-based electronics retailer',
      challenge: 'Needed to source 15 different product categories from China with consistent quality.',
      result: 'Reduced sourcing time by 60% and maintained 99.2% quality pass rate across 500+ orders.',
      category: 'Electronics',
    },
    {
      title: 'Furniture Wholesaler Streamlines Supply Chain',
      client: 'European furniture wholesaler',
      challenge: 'Struggled with inconsistent quality and delayed shipments from multiple suppliers.',
      result: 'Consolidated to 3 verified factories with 100% on-time delivery and zero quality issues.',
      category: 'Furniture',
    },
    {
      title: 'Apparel Brand Launches New Collection',
      client: 'Canadian fashion brand',
      challenge: 'Required fast production turnaround while ensuring ethical manufacturing practices.',
      result: 'Completed full production within 6 weeks with full compliance documentation.',
      category: 'Apparel',
    },
  ];

  const faqs = [
    {
      question: 'What is a China sourcing agent?',
      answer: 'A China sourcing agent acts as your local representative in China. We help you find reliable suppliers, verify factories, conduct quality inspections, monitor production, and coordinate shipping. We bridge the gap between international buyers and Chinese manufacturers, handling everything from language barriers to logistics complexities.',
    },
    {
      question: 'How do you verify suppliers?',
      answer: 'We conduct comprehensive supplier verification through multiple steps: factory visits to confirm physical existence and capacity, business license and registration verification, assessment of production capabilities and equipment, review of quality control systems, and checking references from existing clients. We provide detailed verification reports with photos and video documentation.',
    },
    {
      question: 'What quality control services do you offer?',
      answer: 'We offer multiple levels of quality control: Pre-shipment inspection (PSI) - final check before shipping; During Production Inspection (DPI) - monitoring at key production stages; First Article Inspection (FAI) - verification of initial samples; and Container Loading Supervision - ensuring correct quantities and packaging. All inspections follow AQL standards and include detailed photo documentation.',
    },
    {
      question: 'How much do your services cost?',
      answer: 'Our pricing is competitive and transparent. Service fees typically range from 3-8% of the order value, depending on order complexity, services required, and volume. We provide detailed quotes upfront with no hidden fees. For larger orders or ongoing partnerships, we offer customized pricing packages.',
    },
    {
      question: 'What products can you help source?',
      answer: 'We have experience across diverse product categories including electronics and components, machinery and equipment, textiles and apparel, home and garden products, packaging materials, industrial parts, consumer goods, and more. If you have a specific product need, contact us - we can likely help or point you to the right resources.',
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Timeline varies by product complexity and supplier availability. Typical timeline: Supplier identification takes 3-7 days, sample requests take 1-3 weeks, negotiation and contract finalization takes 1-2 weeks, and production time varies by order size (usually 2-8 weeks). We work efficiently while ensuring thoroughness at each step.',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-200/50"></div>
        <div className="container-custom relative py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Trusted by 200+ Global Companies
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                China Sourcing Agent for{' '}
                <span className="text-blue-600">Global Buyers</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
                Find reliable suppliers, verify factories, inspect quality, and coordinate shipping — 
                all with one trusted partner based in Shenzhen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
                >
                  Get a Free Sourcing Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  See How It Works
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center text-white text-xs font-medium"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">4.9/5 from 150+ reviews</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="text-3xl font-bold text-blue-600">500+</div>
                    <div className="text-sm text-gray-600 mt-1">Verified Suppliers</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <div className="text-3xl font-bold text-green-600">15+</div>
                    <div className="text-sm text-gray-600 mt-1">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <div className="text-3xl font-bold text-purple-600">30+</div>
                    <div className="text-sm text-gray-600 mt-1">Countries Served</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-xl">
                    <div className="text-3xl font-bold text-orange-600">98%</div>
                    <div className="text-sm text-gray-600 mt-1">Client Satisfaction</div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Quality Verified</p>
                      <p className="text-sm text-gray-500">Every shipment inspected</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-y border-gray-100">
        <div className="container-custom py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-sm md:text-base text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="section-header">
            <h2>Our Sourcing Services</h2>
            <p>Comprehensive solutions to simplify your China sourcing operations</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="group card card-hover h-full"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors">
                  <service.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center text-blue-600 font-medium text-sm">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>From request to delivery, we handle every step of your China sourcing journey</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="relative z-10 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                  {step.step}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-1/2 w-full h-0.5 bg-blue-200 -z-0"></div>
                )}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/how-it-works" className="btn-primary">
              View Full Process
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="section-header">
            <h2>Products We Source</h2>
            <p>Extensive experience across diverse product categories</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {products.map((product, index) => (
              <Link
                key={index}
                to={`/products#${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="card card-hover text-center"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <product.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.count} suppliers</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products" className="btn-secondary">
              View All Products
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section-padding bg-blue-600">
        <div className="container-custom">
          <div className="section-header">
            <h2 className="text-white">Problems We Solve</h2>
            <p className="text-blue-100">Common challenges buyers face when sourcing from China — and how we help</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.problem}</h3>
                    <p className="text-blue-100">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="section-header">
            <h2>Why Choose SSourcing China</h2>
            <p>Built on trust, delivered with excellence</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <point.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{point.title}</h3>
                <p className="text-gray-600">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="section-header">
            <h2>Success Stories</h2>
            <p>See how we've helped businesses transform their China sourcing operations</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Link
                key={index}
                to={`/case-studies#${study.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="card card-hover h-full flex flex-col"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="badge-blue">{study.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{study.title}</h3>
                <p className="text-sm text-gray-500 mb-4">Client: {study.client}</p>
                <div className="flex-grow">
                  <p className="text-gray-600 mb-4">
                    <span className="font-medium text-gray-700">Challenge:</span> {study.challenge}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-700">Result:</span> {study.result}
                  </p>
                </div>
                <div className="flex items-center text-blue-600 font-medium text-sm mt-4 pt-4 border-t border-gray-100">
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/case-studies" className="btn-secondary">
              View All Case Studies
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-white">
        <div className="container-custom">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions about our China sourcing services</p>
          </div>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className="faq-question w-full"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="faq-answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Inquiry Form Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Simplify Your China Sourcing?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Get a free, no-obligation quote for your sourcing needs. Our team will respond 
                within 24 hours with tailored solutions for your requirements.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Free supplier matching</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">No upfront costs</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Customized solutions</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Get a Free Quote</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="input-label">Your Name *</label>
                  <input type="text" className="input-field" placeholder="John Smith" required />
                </div>
                <div>
                  <label className="input-label">Company Name *</label>
                  <input type="text" className="input-field" placeholder="Your Company Ltd." required />
                </div>
                <div>
                  <label className="input-label">Email Address *</label>
                  <input type="email" className="input-field" placeholder="john@company.com" required />
                </div>
                <div>
                  <label className="input-label">Phone Number</label>
                  <input type="tel" className="input-field" placeholder="+1 (555) 123-4567" />
                </div>
                <div>
                  <label className="input-label">Products You're Looking For *</label>
                  <select className="input-field" required>
                    <option value="">Select a category</option>
                    <option value="electronics">Electronics & Components</option>
                    <option value="machinery">Machinery & Equipment</option>
                    <option value="textiles">Textiles & Apparel</option>
                    <option value="home">Home & Garden</option>
                    <option value="packaging">Packaging Materials</option>
                    <option value="industrial">Industrial Parts</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="input-label">Tell Us About Your Requirements *</label>
                  <textarea 
                    className="input-field min-h-[120px]" 
                    placeholder="Describe your product needs, estimated quantity, target price, timeline, etc."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="w-full btn-primary py-4">
                  Submit Inquiry
                </button>
                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our Privacy Policy. We never share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
