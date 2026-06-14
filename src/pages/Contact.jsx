import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    product: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // For demo purposes, we'll just show success
    setStatus('success');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      country: '',
      product: '',
      message: '',
    });
  };

  const products = [
    'Double Folding Machine',
    'Sheet Metal Folder',
    'Metal Folding Machine',
    'Double Folder',
    'Metal Folder Machine',
    'Other / Not Sure',
  ];

  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Italy',
    'Spain', 'Netherlands', 'Australia', 'Japan', 'South Korea', 'China',
    'India', 'Brazil', 'Mexico', 'Other',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Get In Touch
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mt-3 mb-6">
              Contact Our Team
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Have questions about our products or need a customized solution? Our experts are ready to help you find the perfect machine for your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-serif text-2xl font-bold text-neutral-800 mb-8">
                Let's Connect
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-neutral-800 mb-1">Email</h3>
                    <p className="text-neutral-600">sales@artitectmachinery.com</p>
                    <p className="text-neutral-600">support@artitectmachinery.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-neutral-800 mb-1">Phone</h3>
                    <p className="text-neutral-600">+1 (555) 123-4567</p>
                    <p className="text-neutral-500 text-sm mt-1">Mon - Fri: 9AM - 6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-neutral-800 mb-1">Headquarters</h3>
                    <p className="text-neutral-600">Global Manufacturing Center</p>
                    <p className="text-neutral-500 text-sm mt-1">Serving clients worldwide</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-neutral-800 mb-1">Response Time</h3>
                    <p className="text-neutral-600">Within 24 hours</p>
                    <p className="text-neutral-500 text-sm mt-1">During business days</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Card */}
              <div className="mt-10 bg-primary rounded-2xl p-6 text-white">
                <h3 className="font-sans font-semibold text-lg mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="text-white/70 text-sm mb-6">
                  For urgent inquiries or technical support, call our dedicated hotline.
                </p>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center gap-2 bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent-dark transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Now: +1 (555) 123-4567
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="font-serif text-2xl font-bold text-neutral-800 mb-2">
                  Request a Quote
                </h2>
                <p className="text-neutral-500 mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-sans font-semibold text-xl text-neutral-800 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-neutral-500 mb-6">
                      Thank you for reaching out. Our team will contact you shortly.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-primary font-semibold hover:text-primary-dark transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.name ? 'border-red-500' : 'border-neutral-300'
                          } focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none`}
                          placeholder="John Smith"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.email ? 'border-red-500' : 'border-neutral-300'
                          } focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none`}
                          placeholder="john@company.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none"
                          placeholder="Acme Manufacturing"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium text-neutral-700 mb-2">
                          Country
                        </label>
                        <select
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none bg-white"
                        >
                          <option value="">Select your country</option>
                          {countries.map((country) => (
                            <option key={country} value={country}>
                              {country}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="product" className="block text-sm font-medium text-neutral-700 mb-2">
                          Product Interest
                        </label>
                        <select
                          id="product"
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none bg-white"
                        >
                          <option value="">Select a product</option>
                          {products.map((product) => (
                            <option key={product} value={product}>
                              {product}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.message ? 'border-red-500' : 'border-neutral-300'
                        } focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none resize-none`}
                        placeholder="Tell us about your requirements, production volume, materials you work with, and any specific features you need..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="privacy"
                        className="mt-1 w-4 h-4 text-primary border-neutral-300 rounded focus:ring-primary"
                        required
                      />
                      <label htmlFor="privacy" className="text-sm text-neutral-500">
                        I agree to the{' '}
                        <a href="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </a>{' '}
                        and consent to being contacted regarding my inquiry.
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {status === 'submitting' ? (
                        <>
                          <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.657A8 8 0 0112 4.343V0C5.373 0 0 5.373 0 12h4zm2 5.657A8 8 0 0112 19.657V12a8 8 0 018-8V4.343z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Common Questions
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-800 mt-3">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What is the typical delivery time for a folding machine?',
                a: 'Delivery times vary based on the machine model and customization requirements. Standard models typically ship within 4-6 weeks, while customized configurations may take 8-12 weeks.',
              },
              {
                q: 'Do you offer installation and training services?',
                a: 'Yes, we provide comprehensive installation and operator training services. Our technical team can travel to your facility for on-site setup and training.',
              },
              {
                q: 'What warranty do your machines come with?',
                a: 'All ARTITECT machines come with a 2-year comprehensive warranty covering parts and labor. Extended warranty options are available.',
              },
              {
                q: 'Can you provide financing options?',
                a: 'We partner with leading equipment financing companies to offer flexible payment terms. Contact our sales team for customized financing solutions.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-neutral-50 rounded-xl p-6">
                <h3 className="font-sans font-semibold text-neutral-800 mb-2">
                  {faq.q}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;