import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Shield, 
  Clock, 
  Globe, 
  FileCheck,
  ChevronDown,
  Search,
  ClipboardCheck,
  Settings,
  Truck,
  Package,
  Handshake
} from 'lucide-react';
import { 
  services, 
  processSteps, 
  products, 
  problems, 
  trustPoints, 
  caseStudies, 
  faqs 
} from '@/lib/data';

const iconMap = {
  Search,
  ClipboardCheck,
  Settings,
  Truck,
  Package,
  Handshake
};

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', company: '', product: '', message: '' });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E3A5F] via-[#2D4F7C] to-[#1E3A5F] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6">
                <Shield className="w-4 h-4" />
                <span>Trusted by 500+ global buyers</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                China Sourcing Agent for Global Buyers
              </h1>
              <p className="text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed">
                Find reliable suppliers, verify factories, inspect quality, and coordinate shipping — all with one trusted partner on the ground in China.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#0891B2] text-white font-semibold rounded-lg hover:bg-[#0E7490] transition-colors text-lg"
                >
                  Get a Free Sourcing Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors text-lg"
                >
                  How It Works
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold mb-1">500+</div>
                    <div className="text-sm text-gray-300">Projects Completed</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold mb-1">99%</div>
                    <div className="text-sm text-gray-300">Client Satisfaction</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold mb-1">15+</div>
                    <div className="text-sm text-gray-300">Years Experience</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold mb-1">30+</div>
                    <div className="text-sm text-gray-300">Countries Served</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points Strip */}
      <section className="bg-gray-50 border-y border-gray-200 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#1E3A5F]">{point.value}</div>
                <div className="text-sm text-gray-600 mt-1">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Sourcing Services</h2>
            <p className="section-subtitle">
              Comprehensive China sourcing solutions from supplier verification to final delivery.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <div key={service.id} className="card p-6 card-hover">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                    {IconComponent && <IconComponent className="w-6 h-6 text-[#1E3A5F]" />}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-secondary">
              View All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">
              A simple 5-step process to get your products from China reliably.
            </p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2" />
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
              {processSteps.map((step) => (
                <div key={step.step} className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative z-10">
                    <div className="w-10 h-10 bg-[#1E3A5F] text-white rounded-full flex items-center justify-center font-bold mb-4 mx-auto lg:mx-0">
                      {step.step}
                    </div>
                    <h3 className="text-base font-semibold mb-2 text-center lg:text-left">{step.title}</h3>
                    <p className="text-sm text-gray-600 text-center lg:text-left">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="btn-primary">
              Learn More About Our Process
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Products We Source</h2>
            <p className="section-subtitle">
              We have established supplier networks across a wide range of product categories.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div key={product.id} className="bg-gray-50 rounded-xl p-5 hover:bg-blue-50 transition-colors">
                <h3 className="font-semibold text-[#1E3A5F] mb-1">{product.name}</h3>
                <p className="text-xs text-gray-500">{product.examples}</p>
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

      {/* Problems We Solve */}
      <section className="section bg-[#1E3A5F] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Problems We Solve</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Common challenges that our clients face before working with us.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((item, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-400 text-lg">✕</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{item.problem}</h3>
                    <div className="flex items-start gap-2 mt-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300 text-sm">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Success Stories</h2>
            <p className="section-subtitle">
              Real results from real sourcing projects we've managed.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <div key={study.id} className="card card-hover">
                <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-4xl opacity-20">
                    {study.image === 'ceramic' && '🏺'}
                    {study.image === 'electronics' && '📱'}
                    {study.image === 'sportswear' && '👕'}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-[#0891B2] font-medium mb-2">{study.industry}</div>
                  <h3 className="font-semibold mb-2">{study.client}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{study.result}</p>
                  <Link to="/case-studies" className="text-[#0891B2] text-sm font-medium hover:underline inline-flex items-center">
                    Read More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
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
      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3">
              {faqs.slice(0, 5).map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-medium pr-4">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="section bg-gray-50" id="quote">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Get a Free Sourcing Quote</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Tell us about your product requirements and we'll provide a detailed sourcing plan within 24 hours.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">No obligation, free consultation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Supplier recommendations within 48 hours</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Transparent pricing, no hidden fees</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Response within 24 hours</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891B2] focus:border-transparent outline-none transition"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Business Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891B2] focus:border-transparent outline-none transition"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891B2] focus:border-transparent outline-none transition"
                      placeholder="Your Company Ltd."
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Products You're Looking For *</label>
                    <textarea
                      required
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891B2] focus:border-transparent outline-none transition resize-none"
                      placeholder="Describe the products, quantities, and any specifications..."
                      value={formData.product}
                      onChange={(e) => setFormData({...formData, product: e.target.value})}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#0891B2] text-white font-semibold rounded-lg hover:bg-[#0E7490] transition-colors"
                  >
                    Submit Inquiry
                  </button>
                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy. We never share your information.
                  </p>
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
