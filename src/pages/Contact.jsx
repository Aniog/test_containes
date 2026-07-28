import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Clock, ArrowRight, CheckCircle, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    product: '',
    quantity: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const services = [
    'Supplier Verification',
    'Factory Inspection',
    'Quality Control',
    'Production Follow-up',
    'Sample Management',
    'Shipping & Logistics',
    'Not Sure - Need Consultation',
  ];

  const countries = [
    'United States',
    'United Kingdom',
    'Germany',
    'France',
    'Australia',
    'Canada',
    'Netherlands',
    'Japan',
    'South Korea',
    'Other',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0F172A] via-[#1E3A5F] to-[#2D5A8A] text-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-[#CBD5E1] mb-8">
              Ready to start sourcing from China? Get in touch with our team for a free consultation and quote. We typically respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1E293B] mb-6">
                Get In Touch
              </h2>
              <p className="text-lg text-[#64748B] mb-8">
                Have questions about sourcing from China? Our team is here to help. Reach out through any of the channels below.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1E293B] mb-1">Our Office</div>
                    <div className="text-[#64748B]">
                      Room 1501, Building A<br />
                      Shenzhen International Trade Center<br />
                      Shenzhen, Guangdong, China
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1E293B] mb-1">Email Us</div>
                    <div className="text-[#64748B]">info@ssourcingchina.com</div>
                    <div className="text-[#64748B]">sales@ssourcingchina.com</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1E293B] mb-1">Call Us</div>
                    <div className="text-[#64748B]">+86 755 1234 5678</div>
                    <div className="text-sm text-[#94A3B8]">Mon-Fri, 9AM-6PM CST</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1E293B] mb-1">Business Hours</div>
                    <div className="text-[#64748B]">Monday - Friday: 9:00 AM - 6:00 PM</div>
                    <div className="text-[#64748B]">Saturday: 9:00 AM - 1:00 PM</div>
                    <div className="text-sm text-[#94A3B8]">China Standard Time (CST)</div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-[#F8FAFC] rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-[#1E293B] mb-4">Why Work With Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0" />
                    <span className="text-[#64748B]">15+ years of China sourcing experience</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0" />
                    <span className="text-[#64748B]">500+ verified suppliers in our network</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0" />
                    <span className="text-[#64748B]">Bilingual team (English & Mandarin)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0" />
                    <span className="text-[#64748B]">24-hour response time</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#10B981]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-[#10B981]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1E293B] mb-4">
                    Thank You!
                  </h3>
                  <p className="text-[#64748B] mb-6">
                    We've received your inquiry and will get back to you within 24 hours.
                  </p>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-[#1E3A5F] font-semibold hover:text-[#F97316] transition-colors"
                  >
                    Back to Home
                    <ArrowRight size={20} />
                  </Link>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-semibold text-[#1E293B] mb-6">
                    Send Us a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#1E293B] mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent outline-none"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1E293B] mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent outline-none"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#1E293B] mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent outline-none"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1E293B] mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent outline-none"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#1E293B] mb-2">
                          Your Country
                        </label>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent outline-none bg-white"
                        >
                          <option value="">Select your country</option>
                          {countries.map(country => (
                            <option key={country} value={country}>{country}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1E293B] mb-2">
                          Service Interested In *
                        </label>
                        <select
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent outline-none bg-white"
                        >
                          <option value="">Select a service</option>
                          {services.map(service => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#1E293B] mb-2">
                          Product Interested In *
                        </label>
                        <input
                          type="text"
                          name="product"
                          required
                          value={formData.product}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent outline-none"
                          placeholder="e.g., Electronics, Textiles"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1E293B] mb-2">
                          Estimated Quantity
                        </label>
                        <input
                          type="text"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent outline-none"
                          placeholder="e.g., 5000 units"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#1E293B] mb-2">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent outline-none resize-none"
                        placeholder="Tell us about your requirements, target price, timeline, or any specific questions..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#EA580C] transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Submit Inquiry
                    </button>

                    <p className="text-xs text-center text-[#64748B]">
                      By submitting this form, you agree to our privacy policy. We typically respond within 24 hours during business days.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <h3 className="text-lg font-semibold text-[#1E293B] mb-4">Our Location</h3>
            <div className="h-64 bg-[#F8FAFC] rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-[#1E3A5F] mx-auto mb-2" />
                <p className="text-[#64748B]">Shenzhen, Guangdong, China</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;