import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const products = [
    'Double Folding Machine DF-2000',
    'Precision Sheet Metal Folder SF-1500',
    'Heavy-Duty Metal Folding Machine MF-3000',
    'Compact Metal Folder CF-1000',
    'Universal Sheet Metal Folding Machine UF-2500',
    'Custom Configuration',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!formData.name.trim()) return 'Please enter your name';
    if (!formData.email.trim()) return 'Please enter your email';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return 'Please enter a valid email address';
    if (!formData.message.trim()) return 'Please tell us about your requirements';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setStatus('submitting');

    // Simulate form submission (in production, this would connect to a backend)
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        product: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="uppercase tracking-[3px] text-xs font-medium text-[#B8860B] mb-4">GET IN TOUCH</div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#0A1628] mb-6 leading-tight">
              Let's discuss your next project.
            </h2>
            <p className="text-lg text-[#6B7280] mb-10">
              Our technical specialists are ready to help you select the right equipment and configure it for your specific needs.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0 border border-gray-200">
                  <MapPin className="w-5 h-5 text-[#B8860B]" />
                </div>
                <div>
                  <div className="font-medium text-[#0A1628]">Headquarters</div>
                  <div className="text-[#6B7280] text-sm leading-relaxed">
                    Industriestraße 42<br />
                    42897 Remscheid, Germany
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0 border border-gray-200">
                  <Phone className="w-5 h-5 text-[#B8860B]" />
                </div>
                <div>
                  <div className="font-medium text-[#0A1628]">Phone</div>
                  <a href="tel:+492191567890" className="text-[#6B7280] text-sm hover:text-[#B8860B] transition-colors">
                    +49 2191 567 890
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0 border border-gray-200">
                  <Mail className="w-5 h-5 text-[#B8860B]" />
                </div>
                <div>
                  <div className="font-medium text-[#0A1628]">Email</div>
                  <a href="mailto:sales@artitect-machinery.com" className="text-[#6B7280] text-sm hover:text-[#B8860B] transition-colors">
                    sales@artitect-machinery.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0 border border-gray-200">
                  <Clock className="w-5 h-5 text-[#B8860B]" />
                </div>
                <div>
                  <div className="font-medium text-[#0A1628]">Business Hours</div>
                  <div className="text-[#6B7280] text-sm">
                    Mon–Fri: 8:00–17:00 CET<br />
                    24/7 Emergency Support
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10">
              {status === 'success' ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#0A1628] mb-3">Thank you for your inquiry.</h3>
                  <p className="text-[#6B7280] max-w-sm mx-auto">
                    A member of our technical team will contact you within 4 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#1C2833] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#B8860B] transition-colors text-[#1C2833]"
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-[#1C2833] mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#B8860B] transition-colors text-[#1C2833]"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#1C2833] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#B8860B] transition-colors text-[#1C2833]"
                        placeholder="you@company.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#1C2833] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#B8860B] transition-colors text-[#1C2833]"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-[#1C2833] mb-2">
                      Product of Interest
                    </label>
                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#B8860B] transition-colors text-[#1C2833] bg-white"
                    >
                      <option value="">Select a product (optional)</option>
                      {products.map((p, i) => (
                        <option key={i} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#1C2833] mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#B8860B] transition-colors text-[#1C2833] resize-y"
                      placeholder="Tell us about your application, material types, production volume, or any specific requirements..."
                      required
                    />
                  </div>

                  {error && (
                    <div className="text-red-600 text-sm bg-red-50 px-4 py-3 rounded-lg">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-[#B8860B] text-white font-medium rounded-lg hover:bg-[#9A7209] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-xs text-center text-[#6B7280]">
                    We typically respond within 4 business hours. Your information is kept confidential.
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
