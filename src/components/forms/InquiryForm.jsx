import React, { useState, useEffect, useRef } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product_details: '',
    estimated_quantity: '',
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setError(null);

    try {
      const { data: response, error: submitError } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            ...formData,
            status: 'new',
            created_at: new Date().toISOString(),
          },
        })
        .select()
        .single();

      if (submitError || response?.success === false) {
        throw new Error(submitError?.message || (response?.errors ? response.errors.join(', ') : 'Failed to submit inquiry'));
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        product_details: '',
        estimated_quantity: '',
      });
      toast.success('Inquiry submitted successfully! Our team will contact you within 24-48 hours.');
    } catch (err) {
      console.error(err);
      setError(err.message);
      setStatus('error');
      toast.error('Failed to submit inquiry. Please try again or contact us directly.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-green-100 text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Inquiry Received!</h2>
        <p className="text-slate-600 mb-8">
          Thank you for choosing SSourcing China. We have received your inquiry and our sourcing specialist will get back to you within 24-48 hours.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="bg-blue-600 text-white px-8 py-3 rounded-md font-bold hover:bg-blue-700 transition-all"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-slate-100">
      <h2 className="text-3xl font-bold text-slate-900 mb-2">Request a Sourcing Quote</h2>
      <p className="text-slate-500 mb-8 font-medium">Please provide as much detail as possible for an accurate quote.</p>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-8 flex items-center gap-3">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p className="text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700">Full Name *</label>
          <input
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700">Email Address *</label>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700">Company Name</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="ACME Corp"
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700">Estimated Quantity</label>
          <input
            type="text"
            name="estimated_quantity"
            value={formData.estimated_quantity}
            onChange={handleChange}
            placeholder="e.g. 1000 units"
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
        <div className="md:col-span-2 space-y-2">
          <label className="text-sm font-bold text-slate-700">Product Details & Requirements *</label>
          <textarea
            required
            name="product_details"
            value={formData.product_details}
            onChange={handleChange}
            rows={5}
            placeholder="Describe what you are looking for, target price, material, etc."
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
          />
        </div>
        <div className="md:col-span-2 pt-4">
          <button
            disabled={status === 'loading'}
            type="submit"
            className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
            Get Free Sourcing Quote
          </button>
        </div>
      </form>
    </div>
  );
};

export default InquiryForm;
