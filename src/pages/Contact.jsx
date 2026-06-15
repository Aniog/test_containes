import React, { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import Layout from '@/Layout';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product_interest: '',
    estimated_qty: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setError(null);

    const { data: response, error: createError } = await client
      .from('SourcingInquiry')
      .insert({
        data: {
          ...formData,
          created_at: new Date().toISOString()
        }
      })
      .select()
      .single();

    if (createError || response?.success === false) {
      const msg = createError?.message || 'Failed to submit inquiry. Please try again.';
      setError(msg);
      toast.error(msg);
      setStatus('error');
    } else {
      setStatus('success');
      toast.success('Inquiry submitted successfully!');
      setFormData({
        name: '',
        email: '',
        company: '',
        product_interest: '',
        estimated_qty: '',
        message: ''
      });
    }
  };

  return (
    <Layout>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact SSourcing China</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Get a free sourcing quote and professional advice from our experts.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-[#0F4C81] text-white p-10 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold mb-8">Our Contact Details</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-lg"><MapPin className="w-6 h-6" /></div>
                  <div>
                    <h3 className="font-bold mb-1">Office Address</h3>
                    <p className="text-gray-300">Room 802, Sourcing Plaza, Futian District, Shenzhen, Guangdong, China</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-lg"><Mail className="w-6 h-6" /></div>
                  <div>
                    <h3 className="font-bold mb-1">Email Inquiry</h3>
                    <p className="text-gray-300">info@ssourcing-china.com</p>
                    <p className="text-gray-300">sales@ssourcing-china.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-lg"><Phone className="w-6 h-6" /></div>
                  <div>
                    <h3 className="font-bold mb-1">Phone / WhatsApp</h3>
                    <p className="text-gray-300">+86 755 8888 9999</p>
                    <p className="text-gray-300">Monday - Saturday, 9AM - 6PM (CST)</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-white/10">
                <h3 className="font-bold mb-4 italic text-[#D97706]">"We bridge the gap between global buyers and Chinese manufacturers."</h3>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-10 h-10" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Inquiry Received!</h2>
                  <p className="text-gray-600 mb-8">Thank you for reaching out. One of our sourcing experts will review your requirements and contact you within 48 hours with a customized sourcing plan.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="bg-[#0F4C81] text-white px-8 py-3 rounded-md font-bold"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input 
                        type="text" required name="name" value={formData.name} onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0F4C81] outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input 
                        type="email" required name="email" value={formData.email} onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0F4C81] outline-none"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                      <input 
                        type="text" name="company" value={formData.company} onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0F4C81] outline-none"
                        placeholder="Acme Inc."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Product of Interest *</label>
                      <input 
                        type="text" required name="product_interest" value={formData.product_interest} onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0F4C81] outline-none"
                        placeholder="e.g. Camping Tents"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Quantity (MOQ)</label>
                    <input 
                      type="text" name="estimated_qty" value={formData.estimated_qty} onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0F4C81] outline-none"
                      placeholder="e.g. 500 units"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Sourcing Requirements *</label>
                    <textarea 
                      required name="message" value={formData.message} onChange={handleChange} rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0F4C81] outline-none"
                      placeholder="Please describe your requirements, specifications, and any challenges you are facing..."
                    />
                  </div>
                  {error && <p className="text-red-600 text-sm">{error}</p>}
                  <button 
                    disabled={status === 'submitting'}
                    type="submit" 
                    className="w-full bg-[#D97706] hover:bg-[#B45309] text-white py-4 rounded-md font-bold text-lg transition-all flex items-center justify-center disabled:opacity-50"
                  >
                    {status === 'submitting' ? <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Submitting...</> : 'Send Sourcing Inquiry'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
