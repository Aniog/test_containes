import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = ({ preselectedProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: preselectedProduct || '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const products = [
    "Double Folding Machine",
    "Double Folder Pro",
    "Sheet Metal Folder",
    "Sheet Metal Folding Machine",
    "Metal Folder",
    "Metal Folder Machine",
    "Metal Folding Machine",
    "Not sure yet / General inquiry"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form after showing success
      setTimeout(() => {
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          product: '',
          message: ''
        });
        setSubmitted(false);
      }, 3000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <div className="inline-block px-4 py-1 rounded-full bg-white border border-gray-200 text-xs tracking-[2px] mb-4">GET IN TOUCH</div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#1a252f] mb-6 leading-tight">
                Let's discuss your next project.
              </h2>
              <p className="text-gray-600 text-lg mb-10">
                Our team of application engineers is ready to help you find the right machine for your needs.
              </p>

              <div className="space-y-6 text-sm">
                <div className="flex gap-4">
                  <MapPin className="text-[#1a252f] flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <div className="font-medium text-[#1a252f]">Headquarters</div>
                    <div className="text-gray-600">Industriestraße 42<br />D-42897 Remscheid, Germany</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-[#1a252f] flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <div className="font-medium text-[#1a252f]">Phone</div>
                    <a href="tel:+492191567890" className="text-gray-600 hover:text-[#1a252f]">+49 2191 567 890</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="text-[#1a252f] flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <div className="font-medium text-[#1a252f]">Email</div>
                    <a href="mailto:sales@artitect-machinery.com" className="text-gray-600 hover:text-[#1a252f]">sales@artitect-machinery.com</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="text-[#1a252f] flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <div className="font-medium text-[#1a252f]">Business Hours</div>
                    <div className="text-gray-600">Mon–Fri: 7:30am – 5:00pm CET<br />Sat: By appointment only</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="text-emerald-600" size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#1a252f] mb-3">Thank you for reaching out.</h3>
                  <p className="text-gray-600">We've received your inquiry and will contact you within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1a252f] transition-colors text-sm"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1a252f] transition-colors text-sm"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1a252f] transition-colors text-sm"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1a252f] transition-colors text-sm"
                        placeholder="+1 555 123 4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">Product of Interest</label>
                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1a252f] transition-colors text-sm bg-white"
                    >
                      <option value="">Select a product...</option>
                      {products.map((p, i) => (
                        <option key={i} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1a252f] transition-colors text-sm resize-y"
                      placeholder="Tell us about your application, material types, production volume, or any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#1a252f] text-white font-medium rounded-lg hover:bg-[#2a3a47] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                    <Send size={16} />
                  </button>

                  <p className="text-xs text-center text-gray-500">
                    We typically respond within one business day. Your information is kept confidential.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
