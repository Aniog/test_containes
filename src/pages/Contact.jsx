import React from 'react';
import { Link } from 'react-router-dom';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import {
  Mail, Phone, MapPin, Clock, Send, ArrowRight, MessageSquare,
  Globe, CheckCircle, Users, Building2
} from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ');
  }
  return error?.message || 'Submission failed. Please try again.';
};

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    country: '',
    phone: '',
    productCategory: '',
    quantity: '',
    budget: '',
    timeline: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (submitError) setSubmitError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const { data: response, error: insertError } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            country: formData.country,
            phone: formData.phone,
            product_category: formData.productCategory,
            quantity: formData.quantity,
            budget: formData.budget,
            timeline: formData.timeline,
            message: formData.message,
            status: 'new',
          },
        })
        .select()
        .single();

      if (insertError || response?.success === false) {
        throw new Error(getErrorMessage(response, insertError));
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error('Inquiry submission error:', err);
      setSubmitError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-navy text-white py-16 lg:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <span className="badge bg-white/10 text-white mb-4">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-slate-300 mb-4">
              Tell us about your sourcing needs and get a free quote within 24 hours. No commitment required.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-navy mb-6">Let's Discuss Your Project</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Whether you need help finding suppliers, verifying factories, or managing your entire sourcing process, our team is ready to assist.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Email</h3>
                    <a href="mailto:info@ssourcingchina.com" className="text-primary-600 hover:text-primary-700">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Phone</h3>
                    <a href="tel:+86-21-5555-0123" className="text-primary-600 hover:text-primary-700">
                      +86 21 5555 0123
                    </a>
                    <p className="text-sm text-slate-500 mt-1">Mon-Fri, 9am-6pm (China Time)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Office</h3>
                    <p className="text-slate-600">
                      Shanghai, China<br />
                      <span className="text-sm text-slate-500">Near major manufacturing hubs</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Response Time</h3>
                    <p className="text-slate-600">Within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Trust Signals */}
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-semibold text-navy mb-4">Why Work With Us</h3>
                <ul className="space-y-3">
                  {[
                    'Free consultation and quote',
                    'No upfront sourcing fees',
                    'English-speaking team in China',
                    '10+ years sourcing experience',
                    '500+ satisfied global clients',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-navy mb-3">Thank You!</h2>
                    <p className="text-slate-600 mb-6 max-w-md mx-auto">
                      We have received your inquiry. Our team will review your requirements and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '', email: '', company: '', country: '', phone: '',
                          productCategory: '', quantity: '', budget: '', timeline: '', message: '',
                        });
                      }}
                      className="btn-secondary"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-navy mb-2">Get a Free Sourcing Quote</h2>
                      <p className="text-slate-500">
                        Fill out the form below and we will respond with supplier options and pricing within 24 hours.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name & Email */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-navy mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-navy mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      {/* Company & Country */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-navy mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="Your Company Ltd."
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-navy mb-2">
                            Country *
                          </label>
                          <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="United States"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>

                      {/* Product Category & Quantity */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-navy mb-2">
                            Product Category *
                          </label>
                          <select
                            name="productCategory"
                            value={formData.productCategory}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                          >
                            <option value="">Select category</option>
                            <option value="electronics">Electronics & Components</option>
                            <option value="home-garden">Home & Garden</option>
                            <option value="machinery">Machinery & Equipment</option>
                            <option value="textiles">Textiles & Apparel</option>
                            <option value="building">Building Materials</option>
                            <option value="packaging">Packaging & Printing</option>
                            <option value="toys">Toys & Gifts</option>
                            <option value="custom">Custom / OEM Products</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-navy mb-2">
                            Estimated Quantity
                          </label>
                          <select
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                          >
                            <option value="">Select quantity range</option>
                            <option value="sample">Sample only</option>
                            <option value="100-500">100 - 500 units</option>
                            <option value="500-1000">500 - 1,000 units</option>
                            <option value="1000-5000">1,000 - 5,000 units</option>
                            <option value="5000-10000">5,000 - 10,000 units</option>
                            <option value="10000+">10,000+ units</option>
                          </select>
                        </div>
                      </div>

                      {/* Budget & Timeline */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-navy mb-2">
                            Budget Range
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                          >
                            <option value="">Select budget range</option>
                            <option value="under-5k">Under $5,000</option>
                            <option value="5k-20k">$5,000 - $20,000</option>
                            <option value="20k-50k">$20,000 - $50,000</option>
                            <option value="50k-100k">$50,000 - $100,000</option>
                            <option value="100k+">$100,000+</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-navy mb-2">
                            Timeline
                          </label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                          >
                            <option value="">When do you need it?</option>
                            <option value="asap">As soon as possible</option>
                            <option value="1-month">Within 1 month</option>
                            <option value="2-3-months">2-3 months</option>
                            <option value="3-6-months">3-6 months</option>
                            <option value="planning">Just planning ahead</option>
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">
                          Product Details & Requirements *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                          placeholder="Please describe the products you need, including specifications, materials, dimensions, target price, and any certifications required..."
                        />
                      </div>

                      {/* Error Message */}
                      {submitError && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
                          {submitError}
                        </div>
                      )}

                      {/* Submit */}
                      <div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn-primary w-full text-lg py-4 flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>
                              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5" />
                              Submit Inquiry
                              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </button>
                        <p className="text-sm text-slate-500 mt-3 text-center">
                          We respond within 24 hours. No spam, no obligation.
                        </p>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-96 bg-slate-100 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <p className="text-slate-500 text-lg">Shanghai, China</p>
            <p className="text-slate-400 text-sm">Located near major manufacturing hubs</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
