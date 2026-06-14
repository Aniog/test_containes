import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    productInterest: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
      productInterest: '',
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'info@artitect-machinery.com',
      subDetail: 'We respond within 24 hours',
    },
    {
      icon: Phone,
      title: 'Call Us',
      detail: '+1 (555) 123-4567',
      subDetail: 'Mon-Fri, 8am-6pm EST',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      detail: '123 Industrial Parkway',
      subDetail: 'Detroit, MI 48201',
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Ready to discuss your sheet metal folding needs? Our team of experts is here to help you find the perfect solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-700">{item.detail}</p>
                  <p className="text-sm text-slate-500">{item.subDetail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-slate-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
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
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                    placeholder="Your Company"
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
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="productInterest" className="block text-sm font-medium text-slate-700 mb-2">
                  Product Interest
                </label>
                <select
                  id="productInterest"
                  name="productInterest"
                  value={formData.productInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all bg-white"
                >
                  <option value="">Select a product category</option>
                  <option value="double-folding-machine">Double Folding Machine</option>
                  <option value="double-folder">Double Folder</option>
                  <option value="sheet-metal-folder">Sheet Metal Folder</option>
                  <option value="sheet-metal-folding-machine">Sheet Metal Folding Machine</option>
                  <option value="metal-folder">Metal Folder</option>
                  <option value="metal-folder-machine">Metal Folder Machine</option>
                  <option value="metal-folding-machine">Metal Folding Machine</option>
                  <option value="other">Other / Multiple Products</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <p className="mt-4 text-green-600 font-medium">
                  Thank you for your message! We'll get back to you within 24 hours.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
