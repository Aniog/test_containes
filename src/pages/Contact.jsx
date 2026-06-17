import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    product_category: 'Electronics',
    estimated_annual_volume: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const { data: response, error } = await client
        .from('SourcingInquiry')
        .insert({
          data: formState
        })
        .select()
        .single();

      if (error || response?.success === false) {
        throw new Error(error?.message || response?.errors?.[0] || 'Failed to submit inquiry');
      }

      setSubmitStatus('success');
      setFormState({
        name: '',
        email: '',
        company: '',
        product_category: 'Electronics',
        estimated_annual_volume: '',
        message: ''
      });
    } catch (err) {
      setSubmitStatus('error');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-24 pb-24">
      <section className="bg-slate-900 py-20 text-white mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact SSourcing China</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Have questions or ready to get a quote? Our team reaches back within 12-24 business hours.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Email Us</p>
                    <a href="mailto:contact@ssourcingchina.com" className="text-lg text-slate-900 font-medium hover:text-primary transition-colors">contact@ssourcingchina.com</a>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Call Us</p>
                    <p className="text-lg text-slate-900 font-medium">+86 571 8888 8888</p>
                    <p className="text-sm text-slate-500">Mon-Fri: 9:00 AM - 6:00 PM (GMT+8)</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Office Location</p>
                    <p className="text-lg text-slate-900 font-medium">Binjiang District, Hangzhou,<br />Zhejiang Province, China</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
               <h4 className="font-bold text-slate-900 mb-4">Why work with us?</h4>
               <ul className="space-y-3 text-slate-600 text-sm">
                 <li className="flex gap-2">
                   <span className="text-primary font-bold">✓</span>
                   Native experience with local suppliers
                 </li>
                 <li className="flex gap-2">
                   <span className="text-primary font-bold">✓</span>
                   Transparent pricing with no hidden costs
                 </li>
                 <li className="flex gap-2">
                   <span className="text-primary font-bold">✓</span>
                   Rigorous quality control standards
                 </li>
                 <li className="flex gap-2">
                   <span className="text-primary font-bold">✓</span>
                   Direct factory communication
                 </li>
               </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="bg-primary px-8 py-6 text-white">
              <h3 className="text-xl font-bold">Request a Free Sourcing Quote</h3>
              <p className="text-primary-foreground/80 text-sm">Fill out the form below and our sourcing experts will review your request.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700">Business Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-semibold text-slate-700">Company Name</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="Acme Corp"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="product_category" className="text-sm font-semibold text-slate-700">Product Category *</label>
                  <select
                    id="product_category"
                    name="product_category"
                    value={formState.product_category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white"
                  >
                    <option>Electronics</option>
                    <option>Furniture</option>
                    <option>Textiles</option>
                    <option>Machinery</option>
                    <option>Home Goods</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="estimated_annual_volume" className="text-sm font-semibold text-slate-700">Estimated Annual Volume ($)</label>
                <input
                  id="estimated_annual_volume"
                  name="estimated_annual_volume"
                  type="text"
                  value={formState.estimated_annual_volume}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="e.g. $50,000"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700">Tell us what you need *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                  placeholder="Describe the product, required quantity, certifications needed, etc."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending Inquiry...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Sourcing Request
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm font-medium animate-in fade-in slide-in-from-top-2">
                  Inquiry submitted successfully! We will contact you shortly.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm font-medium animate-in fade-in slide-in-from-top-2">
                  Something went wrong. Please try again.
                </div>
              )}

              <p className="text-center text-xs text-slate-400">By submitting this form, you agree to our privacy policy and data processing terms.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
