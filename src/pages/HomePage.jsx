import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Factory, 
  ClipboardCheck, 
  Truck, 
  Search, 
  Shield, 
  TrendingUp,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Package,
  Globe,
  Users,
  FileText,
  BarChart3
} from 'lucide-react';

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 md:py-32">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Find reliable suppliers, verify factories, inspect quality, and coordinate shipping - all from one trusted partner
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-secondary bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-4"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link
                to="/how-it-works"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 text-lg px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
              >
                Learn How It Works
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>500+ Clients Served</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>98% Quality Pass Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>15+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Sourcing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end sourcing solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="w-8 h-8" />,
                title: 'Supplier Sourcing',
                description: 'Identify and evaluate reliable manufacturers based on your product requirements, quality standards, and budget.'
              },
              {
                icon: <ClipboardCheck className="w-8 h-8" />,
                title: 'Factory Audit & Verification',
                description: 'Comprehensive factory assessments including certifications, production capacity, and quality management systems.'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Quality Inspection',
                description: 'Pre-shipment and during-production inspections to ensure products meet your specifications and quality standards.'
              },
              {
                icon: <Factory className="w-8 h-8" />,
                title: 'Production Monitoring',
                description: 'Regular updates and oversight during production to ensure timelines are met and quality is maintained.'
              },
              {
                icon: <Truck className="w-8 h-8" />,
                title: 'Shipping & Logistics',
                description: 'Coordinate freight forwarding, customs clearance, and delivery to your warehouse or fulfillment center.'
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Cost Optimization',
                description: 'Negotiate better pricing, reduce MOQs, and optimize your supply chain for maximum profitability.'
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven 6-step process to source with confidence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Understand Requirements',
                description: 'We discuss your product specs, quality standards, target price, and timeline.'
              },
              {
                step: '02',
                title: 'Supplier Identification',
                description: 'We search our network and database to find 3-5 qualified suppliers matching your needs.'
              },
              {
                step: '03',
                title: 'Factory Verification',
                description: 'We audit factories for certifications, capacity, and quality systems before recommending.'
              },
              {
                step: '04',
                title: 'Sample & Quotation',
                description: 'We coordinate samples and negotiate competitive pricing with selected suppliers.'
              },
              {
                step: '05',
                title: 'Production & QC',
                description: 'We monitor production and conduct quality inspections at key stages.'
              },
              {
                step: '06',
                title: 'Shipping & Delivery',
                description: 'We arrange freight, handle customs, and ensure safe delivery to your door.'
              }
            ].map((step, index) => (
              <div key={index} className="relative bg-white rounded-xl p-6 shadow-sm">
                <div className="text-5xl font-bold text-blue-100 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
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
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Products We Source
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience across diverse industries and product categories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Electronics & Gadgets', icon: <Package className="w-6 h-6" /> },
              { name: 'Home & Garden', icon: <Package className="w-6 h-6" /> },
              { name: 'Fashion & Apparel', icon: <Package className="w-6 h-6" /> },
              { name: 'Automotive Parts', icon: <Package className="w-6 h-6" /> },
              { name: 'Industrial Equipment', icon: <Package className="w-6 h-6" /> },
              { name: 'Toys & Gifts', icon: <Package className="w-6 h-6" /> },
              { name: 'Furniture & Decor', icon: <Package className="w-6 h-6" /> },
              { name: 'Sports & Outdoor', icon: <Package className="w-6 h-6" /> },
            ].map((product, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-blue-50 hover:border-blue-200 border-2 border-transparent transition-all cursor-pointer">
                <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center mx-auto mb-3">
                  {product.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{product.name}</h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products" className="btn-primary inline-flex items-center gap-2">
              View All Product Categories
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section-padding bg-blue-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Problems We Solve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common challenges we help you overcome
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                problem: 'Unreliable Suppliers',
                solution: 'We verify factories, check certifications, and validate production capacity before you place orders.'
              },
              {
                problem: 'Quality Issues',
                solution: 'Our inspectors check products at multiple stages to ensure they meet your specifications.'
              },
              {
                problem: 'Communication Barriers',
                solution: 'We bridge the language and cultural gap, ensuring clear communication with suppliers.'
              },
              {
                problem: 'Hidden Costs',
                solution: 'Transparent pricing with no hidden fees. We negotiate the best possible rates for you.'
              },
              {
                problem: 'Shipping Delays',
                solution: 'We coordinate logistics and track shipments to ensure on-time delivery.'
              },
              {
                problem: 'No Local Presence',
                solution: 'Our team in China acts as your local representative, visiting factories and solving problems on the ground.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-red-600 mb-3">❌ {item.problem}</h3>
                <p className="text-gray-700">
                  <span className="font-semibold text-green-600">✓ Solution:</span> {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SSourcing China
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on trust, proven by results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-10 h-10" />,
                title: 'Verified & Trusted',
                description: '15+ years in China sourcing. 500+ successful projects. All suppliers verified before recommendation.'
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: 'Dedicated Support',
                description: 'Your dedicated account manager provides regular updates and is always available for questions.'
              },
              {
                icon: <Globe className="w-10 h-10" />,
                title: 'Global Reach',
                description: 'Serving clients in USA, Europe, Australia, and beyond. We understand international standards.'
              }
            ].map((point, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  {point.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 bg-blue-700 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '500+', label: 'Clients Served' },
                { number: '2000+', label: 'Suppliers Verified' },
                { number: '98%', label: 'Quality Pass Rate' },
                { number: '15+', label: 'Years Experience' }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results for real clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                client: 'US Retail Chain',
                industry: 'Home Decor',
                challenge: 'Needed reliable supplier for ceramic vases with strict quality standards.',
                result: 'Reduced defects by 85%, saved 22% on costs.',
                savings: '22%'
              },
              {
                client: 'German E-commerce',
                industry: 'Electronics',
                challenge: 'Sourcing electronic components with CE certification.',
                result: 'Found certified supplier, 30% cost reduction achieved.',
                savings: '30%'
              },
              {
                client: 'Australian Brand',
                industry: 'Sports Equipment',
                challenge: 'Quality issues with existing supplier, needed urgent replacement.',
                result: 'New supplier found in 2 weeks, quality improved 90%.',
                savings: '90%'
              }
            ].map((study, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full">
                    {study.industry}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{study.client}</h3>
                <p className="text-gray-600 mb-4">{study.challenge}</p>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                  <p className="text-green-800 font-semibold">{study.result}</p>
                </div>
                <div className="text-3xl font-bold text-blue-700">{study.savings} Savings</div>
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
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our sourcing services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'How does your sourcing service work?',
                answer: 'We start by understanding your requirements, then identify and verify suppliers, negotiate pricing, monitor production, inspect quality, and coordinate shipping. You get regular updates throughout the process.'
              },
              {
                question: 'What are your fees?',
                answer: 'We offer transparent pricing with no hidden fees. Our service fee is typically 5-10% of the order value, depending on the complexity. We also offer fixed-fee packages for smaller projects.'
              },
              {
                question: 'How do you verify suppliers?',
                answer: 'We conduct on-site factory audits checking business licenses, production capacity, quality certifications (ISO, CE, etc.), equipment, workforce, and past client references.'
              },
              {
                question: 'Can you help with small orders?',
                answer: 'Yes, we work with both small and large orders. While we specialize in orders of $10,000+, we can often negotiate lower MOQs with suppliers in our network.'
              },
              {
                question: 'How long does the sourcing process take?',
                answer: 'Typically 2-4 weeks for supplier identification and verification, plus production time (varies by product). We provide a detailed timeline after understanding your requirements.'
              },
              {
                question: 'Do you handle shipping and customs?',
                answer: 'Yes, we coordinate the entire logistics process including freight forwarding, customs clearance, and delivery to your warehouse. We work with trusted logistics partners.'
              }
            ].map((faq, index) => (
              <details key={index} className="bg-gray-50 rounded-lg p-6 group">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900">
                  {faq.question}
                  <ChevronRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="section-padding bg-blue-700 text-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get Your Free Sourcing Quote
              </h2>
              <p className="text-xl text-blue-100">
                Tell us about your sourcing needs. We'll respond within 24 hours with a customized plan.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-12 text-gray-900">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="ABC Company"
                  />
                </div>

                <div>
                  <label htmlFor="product" className="block text-sm font-semibold mb-2">
                    Product You Want to Source *
                  </label>
                  <input
                    type="text"
                    id="product"
                    name="product"
                    required
                    value={formData.product}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Wireless Earbuds"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="quantity" className="block text-sm font-semibold mb-2">
                    Estimated Order Quantity
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., 1000 units per month"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us about your quality requirements, target price, timeline, etc."
                  ></textarea>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  type="submit"
                  className="btn-primary text-lg px-12 py-4"
                >
                  Submit Inquiry
                </button>
                <p className="text-gray-600 text-sm mt-4">
                  By submitting, you agree to our privacy policy. We respect your data.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
