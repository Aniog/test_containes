import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      product: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Industrial Drive', 'Manufacturing District', 'Shanghai, China 200000'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+86 21 1234 5678', '+86 21 1234 5679'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@artitectmachinery.com', 'sales@artitectmachinery.com'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 9AM - 1PM'],
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-amber-600 font-semibold text-sm tracking-wider uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Ready to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">
              Transform Your Production
            </span>
          </h2>
          <p className="text-lg text-slate-600">
            Contact our team of experts today to discuss your requirements and find the perfect 
            folding machine solution for your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Message Sent!</h3>
                <p className="text-slate-600 mb-8">
                  Thank you for contacting us. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-amber-600 font-semibold hover:text-amber-700 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Request a Quote</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all outline-none"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all outline-none"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all outline-none"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all outline-none"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-2">
                    Interested Product
                  </label>
                  <select
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all outline-none bg-white"
                  >
                    <option value="">Select a product</option>
                    <option value="double-folding">Double Folding Machine</option>
                    <option value="sheet-metal-folding">Sheet Metal Folding Machine</option>
                    <option value="metal-folder">Metal Folder Machine</option>
                    <option value="heavy-duty">Heavy Duty Double Folder</option>
                    <option value="cnc-folding">CNC Metal Folding Machine</option>
                    <option value="manual">Manual Sheet Metal Folder</option>
                    <option value="other">Other / Custom Requirements</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all outline-none resize-none"
                    placeholder="Tell us about your requirements, production volume, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-xl hover:shadow-slate-800/25 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100 flex gap-5 hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">{info.title}</h4>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-slate-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl h-64 flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-2" />
                <p className="text-slate-500 font-medium">Shanghai, China</p>
              </div>
              <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%">
                  <defs>
                    <pattern id="mapGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#64748b" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#mapGrid)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;