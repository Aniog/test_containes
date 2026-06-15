import React, { useState, useEffect, useRef } from 'react';
import { DataClient, User } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product_interest: 'Double Folding Machine',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setError(null);

    try {
      // 1. Upsert User
      const userRecord = await User.upsert({
        email: formData.email,
        name: formData.name,
        role: 'guest',
      });

      if (!userRecord || !userRecord.id) {
        throw new Error('Failed to create user profile.');
      }

      // 2. Insert Contact Request
      const { data: response, error: insertError } = await client
        .from('ContactRequest')
        .insert({
          data: {
            ...formData,
            user_id: userRecord.id,
          },
        });

      if (insertError || (response && response.success === false)) {
        throw new Error(insertError?.message || 'Failed to submit request.');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        product_interest: 'Double Folding Machine',
        message: '',
      });
    } catch (err) {
      console.error(err);
      setError(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div ref={containerRef} className="bg-white">
      {/* Header */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="contact-title" className="text-4xl md:text-5xl font-bold tracking-tight">Contact Our Sales Team</h1>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl font-light">
            Have questions about our folding machines or need a custom quote? Our engineering and sales experts are ready to assist you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
              <p className="mt-4 text-lg text-gray-600">
                Whether you're looking for technical specifications, pricing information, or a live demonstration, we're here to help.
              </p>

              <div className="mt-12 space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Phone</h3>
                    <p className="mt-1 text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Fri: 8am - 6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Email</h3>
                    <p className="mt-1 text-gray-600">sales@artitectmachinery.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Global Headquarters</h3>
                    <p className="mt-1 text-gray-600">1230 Industrial Parkway, Suite 500<br />Engineering District, NY 10001</p>
                  </div>
                </div>
              </div>

              {/* Decorative Image */}
              <div className="mt-12 rounded-2xl overflow-hidden shadow-lg aspect-video bg-gray-100">
                <img
                  data-strk-img-id="contact-side-img"
                  data-strk-img="high tech industrial office meeting"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Our Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h3>
              
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-100 rounded-2xl p-8 text-center">
                  <div className="flex justify-center mb-4 text-green-600">
                    <Send className="h-12 w-12" />
                  </div>
                  <h4 className="text-xl font-bold text-green-900">Request Sent Successfully!</h4>
                  <p className="mt-2 text-green-700">
                    Thank you for your interest. One of our specialists will contact you shortly to discuss your requirements.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-green-700 font-bold hover:underline"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Work Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-1">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="ACME Corp"
                      />
                    </div>
                    <div>
                      <label htmlFor="product_interest" className="block text-sm font-semibold text-gray-700 mb-1">Product of Interest</label>
                      <select
                        id="product_interest"
                        name="product_interest"
                        value={formData.product_interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none"
                      >
                        <option>Double Folding Machine</option>
                        <option>Sheet Metal Folder</option>
                        <option>Metal Folding Machine</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">How can we help? *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Tell us about your production needs..."
                    ></textarea>
                  </div>

                  {error && (
                    <p className="text-red-600 text-sm font-medium">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center px-8 py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-800 disabled:bg-gray-400 transition-all shadow-lg"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="animate-spin mr-2 h-5 w-5" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        Send Request
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
