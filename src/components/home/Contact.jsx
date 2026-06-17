import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { DataClient, User } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../../config.jsx';

const projectUrl = STRK_PROJECT_URL;
const projectAnonKey = STRK_PROJECT_ANON_KEY;
const client = new DataClient(projectUrl, projectAnonKey);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product_interest: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return 'Please provide a valid email address';
    if (!formData.message.trim()) return 'Message is required';
    if (formData.message.trim().length < 10) return 'Message must be at least 10 characters';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setStatus('submitting');

    try {
      // Upsert user record
      const userRecord = await User.upsert({
        email: formData.email,
        name: formData.name,
        phone: formData.phone || undefined,
        role: 'guest',
      });

      if (!userRecord || !userRecord.id) {
        throw new Error('Failed to process your inquiry. Please try again.');
      }

      // Insert contact inquiry
      const { error: insertError } = await client
        .from('ContactInquiry')
        .insert({
          data: {
            user_id: userRecord.id,
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            company: formData.company || null,
            product_interest: formData.product_interest || null,
            message: formData.message,
          },
        });

      if (insertError) throw insertError;

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        product_interest: '',
        message: '',
      });
    } catch (err) {
      console.error('Contact form error:', err);
      setError(err.message || 'Failed to send your inquiry. Please try again later.');
      setStatus('error');
    }
  };

  const productOptions = [
    'Double Folding Machine',
    'Double Folder',
    'Sheet Metal Folder',
    'Sheet Metal Folding Machine',
    'Metal Folder',
    'Metal Folder Machine',
    'Metal Folding Machine',
    'Other / Custom Solution',
  ];

  return (
    <section id="contact" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-safety-orange font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mt-3 mb-6">
            Get In Touch With Our Team
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Have questions about our machinery? Need a custom solution? Our team of experts is ready to help you 
            find the perfect folding solution for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-warm-gray rounded-2xl p-8 lg:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-2">
                    Full Name <span className="text-safety-orange">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-industrial-navy focus:ring-2 focus:ring-industrial-navy/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-2">
                    Email Address <span className="text-safety-orange">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-industrial-navy focus:ring-2 focus:ring-industrial-navy/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-charcoal mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (234) 567-890"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-industrial-navy focus:ring-2 focus:ring-industrial-navy/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-charcoal mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Ltd."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-industrial-navy focus:ring-2 focus:ring-industrial-navy/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="product_interest" className="block text-sm font-semibold text-charcoal mb-2">
                  Product Interest
                </label>
                <select
                  id="product_interest"
                  name="product_interest"
                  value={formData.product_interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-industrial-navy focus:ring-2 focus:ring-industrial-navy/20 outline-none transition-all bg-white"
                >
                  <option value="">Select a product (optional)</option>
                  {productOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-2">
                  Your Message <span className="text-safety-orange">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell us about your requirements, specifications, or any questions you have..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-industrial-navy focus:ring-2 focus:ring-industrial-navy/20 outline-none transition-all resize-none"
                ></textarea>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {error}
                </div>
              )}

              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                  Thank you for your inquiry! Our team will get back to you within 24 hours.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-safety-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {status === 'submitting' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Inquiry
                    <Send size={20} className="ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-industrial-navy rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <MapPin size={22} className="text-safety-orange mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Address</div>
                    <div className="text-gray-300 text-sm leading-relaxed">
                      Industrial Zone, Machinery District<br />
                      Manufacturing Hub, MH 400001
                    </div>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone size={22} className="text-safety-orange mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors text-sm">
                      +1 (234) 567-890
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail size={22} className="text-safety-orange mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:info@artitectmachinery.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                      info@artitectmachinery.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock size={22} className="text-safety-orange mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Business Hours</div>
                    <div className="text-gray-300 text-sm">
                      Mon - Fri: 8:00 AM - 6:00 PM<br />
                      Sat: 9:00 AM - 2:00 PM
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick Response Card */}
            <div className="bg-warm-gray rounded-2xl p-8">
              <h3 className="text-lg font-bold text-charcoal mb-3">Quick Response Guarantee</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                We respond to all inquiries within 24 hours. For urgent matters, please call us directly.
              </p>
              <div className="flex items-center text-safety-orange">
                <Clock size={18} className="mr-2" />
                <span className="text-sm font-semibold">Average response: 4 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
