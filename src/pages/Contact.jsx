import React, { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product_interest: '',
    estimated_quantity: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setError(null);

    try {
      // Insert Sourcing Inquiry
      const { error: inquiryError } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            product_interest: formData.product_interest,
            estimated_quantity: formData.estimated_quantity,
            message: formData.message,
            status: 'new'
          }
        });

      if (inquiryError) throw inquiryError;

      setStatus('success');
      toast.success('Inquiry submitted successfully! Our project manager will contact you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        company: '',
        product_interest: '',
        estimated_quantity: '',
        message: ''
      });
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setError(err.message || 'Failed to submit inquiry. Please try again or contact us directly.');
      toast.error('Submission failed. Please check the form and try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="py-24 bg-white flex items-center justify-center">
        <div className="max-w-xl mx-auto px-4 text-center space-y-8">
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 leading-tight">Thank You!</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Your inquiry has been received. One of our dedicated sourcing project managers will be in touch within 24 hours to discuss your requirements.
          </p>
          <button 
            onClick={() => setStatus('idle')}
            className="inline-block bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 py-16 md:py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Get your risk-free China sourcing consultation and quote today.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-8 underline decoration-yellow-500 underline-offset-8">Headquarters</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-200">
                      <MapPin className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Address</h4>
                      <p className="text-slate-600">123 Sourcing Plaza, Futian District, Shenzhen, China 518000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-200">
                      <Phone className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Phone</h4>
                      <p className="text-slate-600">+86 123 4567 8901</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-200">
                      <Mail className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Email</h4>
                      <p className="text-slate-600">contact@ssourcingchina.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 p-8 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-4 text-yellow-500">Working Hours:</h3>
                <p className="mb-2">Monday - Friday: 9:00 AM - 6:00 PM (CST)</p>
                <p className="text-slate-400 text-sm">We respond to urgent inquiries within 4 hours during business days.</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-200">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Request a Sourcing Quote</h2>
                <p className="text-slate-500 mb-10 italic">Your data is secure and will never be shared with third parties.</p>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Name *</label>
                      <input 
                        required
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:bg-white focus:ring-2 focus:ring-yellow-500 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address *</label>
                      <input 
                        required
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:bg-white focus:ring-2 focus:ring-yellow-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Company Name</label>
                      <input 
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Co."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:bg-white focus:ring-2 focus:ring-yellow-500 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Product Interest *</label>
                      <input 
                        required
                        type="text" 
                        name="product_interest"
                        value={formData.product_interest}
                        onChange={handleChange}
                        placeholder="e.g. Smart Watches"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:bg-white focus:ring-2 focus:ring-yellow-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Estimated Quantity</label>
                    <input 
                      type="text" 
                      name="estimated_quantity"
                      value={formData.estimated_quantity}
                      onChange={handleChange}
                      placeholder="e.g. 1000 pieces per month"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:bg-white focus:ring-2 focus:ring-yellow-500 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Additional Requirements</label>
                    <textarea 
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your target price, special specs, or shipping needs..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:bg-white focus:ring-2 focus:ring-yellow-500 outline-none transition-all"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm">
                      {error}
                    </div>
                  )}

                  <button 
                    disabled={status === 'submitting'}
                    type="submit" 
                    className="w-full bg-slate-900 text-white rounded-xl py-5 font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-3 disabled:bg-slate-400"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit My Sourcing Request
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
