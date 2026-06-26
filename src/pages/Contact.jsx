import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    company: '',
    product: 'General Inquiry',
    message: ''
  });
  const [status, setStatus] = React.useState('idle');
  const [error, setError] = React.useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setError(null);

    try {
      // 1. Insert form response
      const { error: responseError } = await client
        .from('ContactFormResponse')
        .insert({
          data: {
            ...form
          }
        });

      if (responseError) throw responseError;

      setStatus('success');
      setForm({
        name: '',
        email: '',
        company: '',
        product: 'General Inquiry',
        message: ''
      });
    } catch (err) {
      console.error(err);
      setError(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div className="bg-secondary/30 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">Get in Touch</h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Have a specific technical requirement or need a custom quote? Our engineering consultants are ready to assist you.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-white p-4 rounded-xl shadow-sm text-accent">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary">Email Us</h4>
                  <p className="text-gray-500">sales@artitect-machinery.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-white p-4 rounded-xl shadow-sm text-accent">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary">Call Us</h4>
                  <p className="text-gray-500">+1 (555) 123-4567</p>
                  <p className="text-xs text-gray-400 mt-1">Mon - Fri, 9am - 6pm EST</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-white p-4 rounded-xl shadow-sm text-accent">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary">Headquarters</h4>
                  <p className="text-gray-500">123 Industrial Way, Tech City, ST 12345</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Name *</label>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Email *</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-primary mb-2">Company</label>
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  placeholder="Architectural Metal Inc."
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-primary mb-2">Product Interest</label>
                <select
                  name="product"
                  value={form.product}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent outline-none appearance-none"
                >
                  <option>Double Folder Pro</option>
                  <option>Sheet Metal Expert</option>
                  <option>Atlas Heavy Duty</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-primary mb-2">Message *</label>
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  minLength={10}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <button
                disabled={status === 'submitting'}
                className="w-full bg-accent text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-accent/90 transition-all shadow-lg disabled:opacity-50"
              >
                {status === 'submitting' ? 'Sending...' : (
                  <>Send Message <Send className="w-5 h-5" /></>
                )}
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 rounded-xl text-center font-medium animate-in fade-in slide-in-from-bottom-2">
                  Thank you! Your inquiry has been sent successfully.
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-xl text-center font-medium">
                  {error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
