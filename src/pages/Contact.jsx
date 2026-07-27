import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, Clock, Send, CheckCircle, 
  MessageSquare, ArrowRight, Linkedin, Twitter, Facebook
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    product: '',
    quantity: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      value: 'info@ssourcingchina.com',
      link: 'mailto:info@ssourcingchina.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      value: '+86 21 1234 5678',
      link: 'tel:+862112345678'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      value: 'Shanghai, China',
      link: null
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Working Hours',
      value: 'Mon-Fri: 9AM-6PM CST',
      link: null
    }
  ];

  const services = [
    'Supplier Verification',
    'Factory Audit',
    'Quality Control',
    'Production Follow-up',
    'Shipping & Logistics',
    'Full Sourcing Service'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2D5A7B] text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="badge badge-accent mb-4">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Ready to start your China sourcing project? Contact us for a free consultation 
              and custom quote for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#EFF3F8] rounded-xl flex items-center justify-center text-[#1E3A5F] flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-[#6B7280]">{item.title}</p>
                  {item.link ? (
                    <a href={item.link} className="font-medium hover:text-[#E67E22]">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                {formStatus === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                    <p className="text-[#6B7280] mb-6 max-w-md mx-auto">
                      We've received your inquiry and will get back to you within 24 hours. 
                      Check your email for confirmation.
                    </p>
                    <button
                      onClick={() => setFormStatus('idle')}
                      className="btn-outline"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E67E22] focus:ring-2 focus:ring-[#E67E22]/20 outline-none transition"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E67E22] focus:ring-2 focus:ring-[#E67E22]/20 outline-none transition"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E67E22] focus:ring-2 focus:ring-[#E67E22]/20 outline-none transition"
                          placeholder="Your Company Inc."
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E67E22] focus:ring-2 focus:ring-[#E67E22]/20 outline-none transition"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium mb-2">
                          Your Country
                        </label>
                        <input
                          type="text"
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E67E22] focus:ring-2 focus:ring-[#E67E22]/20 outline-none transition"
                          placeholder="United States"
                        />
                      </div>
                      <div>
                        <label htmlFor="product" className="block text-sm font-medium mb-2">
                          Product Category
                        </label>
                        <input
                          type="text"
                          id="product"
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E67E22] focus:ring-2 focus:ring-[#E67E22]/20 outline-none transition"
                          placeholder="Electronics, Textiles, etc."
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      <div>
                        <label htmlFor="quantity" className="block text-sm font-medium mb-2">
                          Estimated Quantity
                        </label>
                        <input
                          type="text"
                          id="quantity"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E67E22] focus:ring-2 focus:ring-[#E67E22]/20 outline-none transition"
                          placeholder="e.g. 1000 units"
                        />
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium mb-2">
                          Budget Range
                        </label>
                        <input
                          type="text"
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E67E22] focus:ring-2 focus:ring-[#E67E22]/20 outline-none transition"
                          placeholder="e.g. $10,000-$50,000"
                        />
                      </div>
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                          Timeline
                        </label>
                        <input
                          type="text"
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E67E22] focus:ring-2 focus:ring-[#E67E22]/20 outline-none transition"
                          placeholder="e.g. 3-6 months"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium mb-3">
                        Services You're Interested In
                      </label>
                      <div className="flex flex-wrap gap-3">
                        {services.map((service) => (
                          <label key={service} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="checkbox"
                              className="w-4 h-4 text-[#E67E22] border-gray-300 rounded focus:ring-[#E67E22]"
                            />
                            <span className="text-sm">{service}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E67E22] focus:ring-2 focus:ring-[#E67E22]/20 outline-none transition resize-none"
                        placeholder="Tell us about your sourcing needs, requirements, and any questions you have..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="btn-primary w-full flex items-center justify-center"
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-[#6B7280] mt-4 text-center">
                      By submitting this form, you agree to our Privacy Policy. We typically respond within 24 hours.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Quick Response */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-[#E67E22] rounded-full flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-lg">Quick Response</h3>
                </div>
                <p className="text-[#6B7280] mb-4">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-[#059669]" />
                    <span>Free initial consultation</span>
                  </li>
                  <li className="flex items-center space-x-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-[#059669]" />
                    <span>Custom sourcing proposal</span>
                  </li>
                  <li className="flex items-center space-x-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-[#059669]" />
                    <span>No obligation quote</span>
                  </li>
                </ul>
              </div>

              {/* Services Overview */}
              <div className="bg-[#1E3A5F] text-white rounded-2xl p-8">
                <h3 className="font-bold text-lg mb-4">Our Services</h3>
                <p className="text-white/80 text-sm mb-6">
                  We offer comprehensive China sourcing services to help you find reliable suppliers and ensure quality production.
                </p>
                <ul className="space-y-3 mb-6">
                  {services.slice(0, 4).map((service) => (
                    <li key={service} className="flex items-center space-x-3 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#E67E22]" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="text-[#E67E22] font-medium inline-flex items-center text-sm hover:underline">
                  View all services
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              {/* Connect */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
                <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
                <p className="text-[#6B7280] text-sm mb-4">
                  Follow us for updates and insights on China sourcing.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-[#EFF3F8] rounded-full flex items-center justify-center text-[#1E3A5F] hover:bg-[#E67E22] hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#EFF3F8] rounded-full flex items-center justify-center text-[#1E3A5F] hover:bg-[#E67E22] hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#EFF3F8] rounded-full flex items-center justify-center text-[#1E3A5F] hover:bg-[#E67E22] hover:text-white transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-[#6B7280]">
                Quick answers to common questions about working with us.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-[#F8FAFC] rounded-xl p-6">
                <h3 className="font-semibold mb-2">How do I get started?</h3>
                <p className="text-[#6B7280]">
                  Simply fill out the contact form or email us directly. We'll respond within 24 hours to schedule an initial consultation where we discuss your needs and how we can help.
                </p>
              </div>
              <div className="bg-[#F8FAFC] rounded-xl p-6">
                <h3 className="font-semibold mb-2">What information do you need from me?</h3>
                <p className="text-[#6B7280]">
                  We'll need details about the products you want to source, estimated quantities, quality requirements, budget, and timeline. The more details you provide, the better we can help.
                </p>
              </div>
              <div className="bg-[#F8FAFC] rounded-xl p-6">
                <h3 className="font-semibold mb-2">Is there a minimum order quantity?</h3>
                <p className="text-[#6B7280]">
                  MOQs vary by product and supplier. During our consultation, we'll identify suppliers that match your order quantities. We often negotiate favorable terms even for smaller initial orders.
                </p>
              </div>
              <div className="bg-[#F8FAFC] rounded-xl p-6">
                <h3 className="font-semibold mb-2">How are your fees structured?</h3>
                <p className="text-[#6B7280]">
                  Our fees depend on the services required. We typically charge a percentage of the order value or a flat project fee. We provide transparent pricing in our initial proposal with no hidden costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
