import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, CheckCircle, Package, Truck, Shield, Clock, Globe, 
  Users, Award, FileCheck, ChevronDown, ChevronUp, ArrowRight,
  Factory, ClipboardCheck, Ship, BarChart3, Phone, Mail
} from 'lucide-react';

const services = [
  {
    icon: <Search className="w-8 h-8" />,
    title: 'Supplier Search & Verification',
    description: 'We identify and verify reliable manufacturers based on your product requirements, budget, and quality standards.',
  },
  {
    icon: <Factory className="w-8 h-8" />,
    title: 'Factory Audits',
    description: 'Comprehensive on-site inspections to verify factory capabilities, certifications, and production capacity.',
  },
  {
    icon: <ClipboardCheck className="w-8 h-8" />,
    title: 'Quality Control',
    description: 'Professional QC inspections at any production stage to ensure your products meet specifications.',
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: 'Production Follow-up',
    description: 'Regular monitoring of production progress with detailed updates and photos.',
  },
  {
    icon: <Ship className="w-8 h-8" />,
    title: 'Shipping & Logistics',
    description: 'End-to-end shipping coordination from factory to your destination.',
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: 'Documentation',
    description: 'Complete handling of export documents, customs clearance, and compliance paperwork.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Submit Your Request',
    description: 'Tell us what products you need, quantities, and quality requirements.',
  },
  {
    number: '02',
    title: 'Supplier Matching',
    description: 'We source and pre-screen manufacturers that match your criteria.',
  },
  {
    number: '03',
    title: 'Verification & Sampling',
    description: 'Factory audits and sample production to confirm quality.',
  },
  {
    number: '04',
    title: 'Production & QC',
    description: 'Full production monitoring with quality checks at key stages.',
  },
  {
    number: '05',
    title: 'Shipping & Delivery',
    description: 'Safe packaging and coordinated shipping to your location.',
  },
];

const productCategories = [
  { name: 'Electronics & Components', examples: 'PCB, wiring harnesses, consumer electronics' },
  { name: 'Home & Garden', examples: 'Furniture, decor, outdoor equipment' },
  { name: 'Apparel & Textiles', examples: 'Garments, fabrics, accessories' },
  { name: 'Industrial Parts', examples: 'Machinery parts, metal components, tools' },
  { name: 'Packaging Materials', examples: 'Boxes, labels, containers' },
  { name: 'Promotional Products', examples: 'Merchandise, giveaways, branded items' },
];

const problems = [
  {
    title: 'Language Barriers',
    description: 'Communication gaps with Chinese suppliers leading to misunderstandings and errors.',
    solution: 'Our bilingual team ensures clear communication and accurate translation of requirements.',
  },
  {
    title: 'Quality Issues',
    description: 'Products arriving not matching samples or specifications.',
    solution: 'Rigorous QC inspections at every production stage to catch issues early.',
  },
  {
    title: 'Supplier Reliability',
    description: 'Difficulty verifying if a supplier is legitimate and capable.',
    solution: 'On-site factory audits and verification of credentials and facilities.',
  },
  {
    title: 'Shipping Complexities',
    description: 'Confusing logistics and customs procedures causing delays.',
    solution: 'End-to-end logistics management ensuring smooth delivery.',
  },
];

const trustPoints = [
  { number: '500+', label: 'Projects Completed' },
  { number: '15+', label: 'Years Experience' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '50+', label: 'Countries Served' },
];

const faqItems = [
  {
    question: 'What is the typical timeline for sourcing a new product?',
    answer: 'The timeline varies based on product complexity and supplier availability. Typically, supplier matching takes 1-2 weeks, sampling 2-4 weeks, and production 3-8 weeks depending on order size. We provide detailed timelines during the initial consultation.',
  },
  {
    question: 'What are your service fees?',
    answer: 'Our fees are structured based on the services required and order value. We offer transparent pricing with no hidden costs. Contact us for a custom quote based on your specific needs.',
  },
  {
    question: 'Do you work with small orders?',
    answer: 'Yes, we work with businesses of all sizes. Our minimum order requirements are flexible, and we can help source manufacturers suitable for both small pilot runs and large-scale production.',
  },
  {
    question: 'How do you ensure product quality?',
    answer: 'We implement multiple quality control checkpoints: pre-production sample approval, during-production inspections, and pre-shipment inspections. All inspections follow AQL standards and detailed checklists.',
  },
  {
    question: 'Can you help with product design or modifications?',
    answer: 'While we primarily focus on sourcing, we can connect you with design services and help facilitate technical discussions with manufacturers for product modifications or custom designs.',
  },
];

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', company: '', product: '', quantity: '', message: '' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }} />
        </div>
        <div className="container mx-auto px-4 lg:px-6 py-20 lg:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">Trusted by buyers from 50+ countries</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              China Sourcing Agent<br />
              <span className="text-blue-400">for Global Buyers</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We help overseas businesses find reliable suppliers, verify factories, 
              inspect quality, and manage shipping from China — so you can source with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors border border-white/30"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Trust Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-1">
                  {point.number}
                </div>
                <div className="text-[var(--color-text-secondary)] text-sm">
                  {point.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[var(--color-bg-alt)]">
        <div className="container mx-auto px-4 lg:px-6">
          <h2 className="section-title">Our Sourcing Services</h2>
          <p className="section-subtitle">
            Comprehensive solutions to streamline your China sourcing operations
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-14 h-14 bg-blue-50 text-[var(--color-primary)] rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[var(--color-text)]">
                  {service.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:gap-3 transition-all"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <h2 className="section-title">Our Sourcing Process</h2>
          <p className="section-subtitle">
            A systematic approach to ensure reliable sourcing from China
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative flex gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold text-lg z-10">
                      {step.number}
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold mb-2 text-[var(--color-text)]">
                        {step.title}
                      </h3>
                      <p className="text-[var(--color-text-secondary)]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 bg-[var(--color-bg-alt)]">
        <div className="container mx-auto px-4 lg:px-6">
          <h2 className="section-title">Products We Source</h2>
          <p className="section-subtitle">
            Wide range of product categories from verified Chinese manufacturers
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <h3 className="text-lg font-semibold mb-2 text-[var(--color-text)]">
                  {category.name}
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm">
                  {category.examples}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:gap-3 transition-all"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <h2 className="section-title">Problems We Solve</h2>
          <p className="section-subtitle">
            Common challenges in China sourcing and how we address them
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">✗</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[var(--color-text)]">
                      {problem.title}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] text-sm mb-4">
                      {problem.description}
                    </p>
                    <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-green-800 text-sm">
                        {problem.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[var(--color-primary)] text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <h2 className="section-title text-white">Why Choose SSourcing China</h2>
          <p className="section-subtitle text-blue-100">
            Professional expertise backed by years of experience
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Verified Suppliers</h3>
              <p className="text-blue-200 text-sm">
                All suppliers undergo rigorous verification before recommendation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Quality Assured</h3>
              <p className="text-blue-200 text-sm">
                Professional QC inspections at every production stage.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Time Savings</h3>
              <p className="text-blue-200 text-sm">
                We handle the complexity so you can focus on your business.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Dedicated Support</h3>
              <p className="text-blue-200 text-sm">
                Personal account manager for your sourcing needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-[var(--color-bg-alt)]">
        <div className="container mx-auto px-4 lg:px-6">
          <h2 className="section-title">Success Stories</h2>
          <p className="section-subtitle">
            How we have helped businesses achieve their sourcing goals
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <Package className="w-16 h-16 text-blue-400" />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider">
                  Electronics
                </span>
                <h3 className="text-lg font-semibold mt-2 mb-3 text-[var(--color-text)]">
                  Consumer Electronics Sourcing for US Retailer
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm mb-4">
                  Successfully sourced 50,000 units of wireless earbuds with full QC coverage.
                </p>
                <Link
                  to="/case-studies"
                  className="text-[var(--color-primary)] font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <Factory className="w-16 h-16 text-green-400" />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider">
                  Furniture
                </span>
                <h3 className="text-lg font-semibold mt-2 mb-3 text-[var(--color-text)]">
                  Furniture Factory Verification for European Importer
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm mb-4">
                  Verified 12 factories and established reliable supply chain for outdoor furniture.
                </p>
                <Link
                  to="/case-studies"
                  className="text-[var(--color-primary)] font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <Truck className="w-16 h-16 text-orange-400" />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider">
                  Apparel
                </span>
                <h3 className="text-lg font-semibold mt-2 mb-3 text-[var(--color-text)]">
                  Apparel Production with Quality Control
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm mb-4">
                  Managed production of 100,000 garments with 100% pass rate on QC inspections.
                </p>
                <Link
                  to="/case-studies"
                  className="text-[var(--color-primary)] font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Common questions about our China sourcing services
          </p>
          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-0"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between py-6 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-[var(--color-text)] pr-8">
                    {item.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[var(--color-text-secondary)] flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="pb-6 text-[var(--color-text-secondary)]">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-[var(--color-bg-alt)]">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-[var(--color-text)]">
                  Ready to Source from China?
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-8">
                  Get a free consultation and quote for your sourcing needs. 
                  Our team typically responds within 24 hours.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <p className="text-sm text-[var(--color-text-secondary)]">Email us</p>
                      <p className="font-semibold text-[var(--color-text)]">contact@ssourcingchina.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <p className="text-sm text-[var(--color-text-secondary)]">Call us</p>
                      <p className="font-semibold text-[var(--color-text)]">+86 186 8888 8888</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-text)] mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-text)] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-text)] mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your Company Ltd."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-text)] mb-1">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        placeholder="e.g., 10,000 units"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text)] mb-1">
                      Product / Service Needed *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none"
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      placeholder="Describe the products or services you need"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text)] mb-1">
                      Additional Details
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Any specific requirements, timeline, or questions..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white py-4 rounded-lg font-semibold transition-colors"
                  >
                    Get a Free Sourcing Quote
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
