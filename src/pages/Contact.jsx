import React, { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { 
  Mail, Phone, MapPin, Clock, Send, MessageCircle, 
  Globe, ArrowRight, CheckCircle, Users
} from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    requirements: '',
    timeline: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const { data: response, error } = await client
        .from('SourcingInquiries')
        .insert({
          data: {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            phone: formData.phone,
            product_category: formData.product,
            estimated_quantity: formData.quantity,
            timeline: formData.timeline,
            requirements: formData.requirements,
            status: 'new'
          }
        })
        .select()
        .single();

      if (error) {
        throw new Error(error.message || 'Failed to submit inquiry');
      }

      console.log('Inquiry submitted successfully:', response);
      setIsSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-brand-300 font-semibold text-sm uppercase tracking-wide">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-lg text-brand-200 leading-relaxed">
              Tell us about your sourcing needs, and our team will provide a detailed proposal within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              {isSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-12 text-center">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Thank You for Your Inquiry!
                  </h2>
                  <p className="text-gray-600 text-lg mb-6">
                    We've received your sourcing request. Our team will review your requirements and get back to you within 24 hours with a detailed proposal.
                  </p>
                  <button
                    onClick={() => { setIsSubmitted(false); setSubmitError(null); }}
                    className="bg-brand-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-900 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Sourcing Inquiry Form</h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below with your product requirements. Fields marked with * are required.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                          placeholder="Your Company Ltd."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Product Category *
                        </label>
                        <select
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white"
                        >
                          <option value="">Select a category</option>
                          <option value="electronics">Electronics & Electrical</option>
                          <option value="home">Home & Garden</option>
                          <option value="apparel">Apparel & Textiles</option>
                          <option value="machinery">Machinery & Equipment</option>
                          <option value="auto">Automotive Parts</option>
                          <option value="building">Building Materials</option>
                          <option value="beauty">Beauty & Health</option>
                          <option value="promotional">Promotional Items</option>
                          <option value="toys">Toys & Baby Products</option>
                          <option value="sports">Sports & Outdoor</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Estimated Quantity
                        </label>
                        <input
                          type="text"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                          placeholder="e.g., 1,000 units"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white"
                      >
                        <option value="">When do you need the products?</option>
                        <option value="urgent">Urgent (within 2 weeks)</option>
                        <option value="1month">Within 1 month</option>
                        <option value="2months">Within 2 months</option>
                        <option value="3months">Within 3 months</option>
                        <option value="flexible">Flexible / No rush</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Product Requirements *
                      </label>
                      <textarea
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        placeholder="Please describe the products you need, including specifications, materials, dimensions, target price, and any other requirements..."
                      />
                    </div>

                    {submitError && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                        {submitError}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-900 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Submit Sourcing Inquiry
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-8 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-6 h-6 text-brand-800" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <a href="mailto:info@ssourcingchina.com" className="text-brand-600 hover:text-brand-800 transition-colors">
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="w-6 h-6 text-brand-800" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <a href="tel:+862012345678" className="text-brand-600 hover:text-brand-800 transition-colors">
                        +86 20 1234 5678
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-brand-800" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600">
                        Guangzhou, Guangdong, China
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="w-6 h-6 text-brand-800" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Business Hours</h4>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM (CST)<br />
                        Saturday: 9:00 AM - 1:00 PM (CST)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">What to Expect</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">Response within 24 hours</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">Free initial consultation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">Detailed sourcing proposal</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">No obligation to proceed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our sourcing services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'How much does your sourcing service cost?',
                a: 'Our service fees depend on the scope of work required. We offer transparent pricing with no hidden fees. After reviewing your requirements, we provide a detailed quote that includes all service fees. There\'s no charge for the initial consultation and quote.'
              },
              {
                q: 'What is the minimum order quantity (MOQ)?',
                a: 'MOQs vary significantly by product and manufacturer. We work with suppliers who can accommodate both small trial orders and large volume orders. We\'ll help you find suppliers whose MOQs align with your needs.'
              },
              {
                q: 'How long does the sourcing process take?',
                a: 'The timeline varies by project complexity. Supplier identification and verification typically takes 1-2 weeks, sampling takes 1-3 weeks, and production takes 2-8 weeks depending on the product. We provide detailed timelines for each project.'
              },
              {
                q: 'Do you provide samples before mass production?',
                a: 'Yes, we always arrange product samples for your approval before moving to mass production. This ensures the products meet your specifications and quality expectations.'
              },
              {
                q: 'What happens if there are quality issues?',
                a: 'We conduct multiple quality inspections throughout the production process. If issues are identified, we work directly with the manufacturer to resolve them. If products don\'t meet agreed specifications, we negotiate replacements or refunds on your behalf.'
              },
              {
                q: 'Can you help with product customization?',
                a: 'Absolutely. We work with manufacturers who offer OEM and ODM services. Whether you need custom branding, packaging, or product modifications, we can help you find the right suppliers.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: '50+ Countries', desc: 'Clients worldwide trust our services' },
              { icon: Users, title: 'Local Team', desc: 'Based in Guangzhou, China' },
              { icon: CheckCircle, title: 'Verified Suppliers', desc: '2000+ manufacturers in our network' },
              { icon: Clock, title: 'Fast Response', desc: '24-hour response guarantee' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-brand-800" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;