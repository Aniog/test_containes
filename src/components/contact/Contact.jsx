import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    interest: 'general',
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (values) => {
    if (!values.name.trim()) return 'Name is required';
    if (!values.email.trim()) return 'Email is required';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please provide a valid email address';
    if (!values.message.trim()) return 'Message is required';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const err = validate(formData);
    if (err) {
      setError(err);
      return;
    }

    setStatus('submitting');

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        interest: 'general',
      });
    } catch (err) {
      console.error(err);
      setError(err.message || 'Submission failed. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-brand-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand-800 text-brand-200 text-sm font-semibold rounded-full mb-4 border border-brand-700">
            Contact Us
          </span>
          <h2 id="contact-title" className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p id="contact-subtitle" className="text-lg text-brand-300 leading-relaxed">
            Ready to discuss your sheet metal folding needs? Our team is here to help you find the perfect solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-brand-800 rounded-xl p-6 border border-brand-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email Us</h3>
                  <p className="text-brand-300 text-sm">info@artitect-machinery.com</p>
                  <p className="text-brand-300 text-sm">sales@artitect-machinery.com</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-800 rounded-xl p-6 border border-brand-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Call Us</h3>
                  <p className="text-brand-300 text-sm">+1 (555) 123-4567</p>
                  <p className="text-brand-300 text-sm">Mon-Fri, 8am-6pm EST</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-800 rounded-xl p-6 border border-brand-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Visit Us</h3>
                  <p className="text-brand-300 text-sm">
                    1234 Industrial Parkway<br />
                    Manufacturing District<br />
                    Detroit, MI 48201
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 sm:p-8 shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                    className="w-full px-4 py-3 bg-brand-50 border border-brand-200 rounded-lg text-brand-800 placeholder-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 bg-brand-50 border border-brand-200 rounded-lg text-brand-800 placeholder-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-brand-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full px-4 py-3 bg-brand-50 border border-brand-200 rounded-lg text-brand-800 placeholder-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-brand-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 bg-brand-50 border border-brand-200 rounded-lg text-brand-800 placeholder-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="interest" className="block text-sm font-medium text-brand-700 mb-2">
                  I'm Interested In
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-brand-50 border border-brand-200 rounded-lg text-brand-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                >
                  <option value="general">General Inquiry</option>
                  <option value="double-folding-machine">Double Folding Machine</option>
                  <option value="double-folder">Double Folder</option>
                  <option value="sheet-metal-folder">Sheet Metal Folder</option>
                  <option value="sheet-metal-folding-machine">Sheet Metal Folding Machine</option>
                  <option value="metal-folder">Metal Folder</option>
                  <option value="metal-folder-machine">Metal Folder Machine</option>
                  <option value="metal-folding-machine">Metal Folding Machine</option>
                  <option value="custom">Custom Solution</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-brand-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your project requirements..."
                  className="w-full px-4 py-3 bg-brand-50 border border-brand-200 rounded-lg text-brand-800 placeholder-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-700 font-medium">
                    Thank you for your inquiry! Our team will get back to you within 24 hours.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
