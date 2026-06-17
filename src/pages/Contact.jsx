import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { DataClient, User } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { toast } from 'sonner';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Upsert user for CRM
      await User.upsert({
        email: formData.email,
        name: formData.name,
        role: 'guest'
      });

      // Submit inquiry
      const { data: response, error } = await client.from('SourcingInquiry').insert({
        data: {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          product: formData.product,
          quantity: formData.quantity,
          message: formData.message,
          status: 'new'
        }
      }).select().single();

      if (error || response?.success === false) {
        throw new Error(error?.message || response?.errors?.[0] || 'Failed to submit inquiry');
      }

      toast.success('Thank you! Your sourcing inquiry has been received.');
      setFormData({
        name: '',
        email: '',
        company: '',
        product: '',
        quantity: '',
        message: ''
      });
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Start Your China Sourcing Project</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Fill out the form below with your requirements, and one of our sourcing experts will get back to you within 24 hours.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-8">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2.5 rounded-lg">
                    <Mail className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 uppercase tracking-wider">Email Us</p>
                    <p className="text-slate-600">info@ssourcingchina.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2.5 rounded-lg">
                    <Phone className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 uppercase tracking-wider">Call Us</p>
                    <p className="text-slate-600">+86 138-xxxx-xxxx</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2.5 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 uppercase tracking-wider">Our Office</p>
                    <p className="text-slate-600">Level 28, IFC Two, 8 Finance Street, Central, Hong Kong</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-700 p-8 rounded-2xl shadow-lg text-white">
              <h4 className="text-xl font-bold mb-4">Why choose SSourcing China?</h4>
              <ul className="space-y-4 text-sm text-blue-100">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-300 rounded-full" />
                  <span>Verified reliable factories only</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-300 rounded-full" />
                  <span>Direct manufacturer pricing</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-300 rounded-full" />
                  <span>Strict Quality Control audits</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-300 rounded-full" />
                  <span>End-to-end logistics support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Business Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-slate-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    placeholder="Acme Inc."
                  />
                </div>
                <div>
                  <label htmlFor="product" className="block text-sm font-bold text-slate-700 mb-2">Product to Source *</label>
                  <input
                    type="text"
                    id="product"
                    name="product"
                    required
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    placeholder="e.g. Eco-friendly Packaging"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="quantity" className="block text-sm font-bold text-slate-700 mb-2">Target Quantity</label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  placeholder="e.g. 5,000 units"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Sourcing Requirements *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Tell us about your project, target price, or any specific requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto px-10 py-4 bg-blue-700 text-white rounded-lg font-bold text-lg hover:bg-blue-800 transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Inquiry
                  </>
                )}
              </button>
              <p className="text-xs text-slate-400 text-center">By clicking, you agree to our privacy policy and to be contacted by our sourcing specialists.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
