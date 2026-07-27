import React, { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';
import { toast } from 'sonner';
import { Send, Loader2 } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const InquiryForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product_category: 'Electronics',
    estimated_annual_volume: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            ...formData,
            status: 'new'
          }
        })
        .select()
        .single();

      if (error) throw error;

      toast.success("Inquiry sent successfully! Our team will contact you within 24-48 hours.");
      setFormData({
        name: '',
        email: '',
        company: '',
        product_category: 'Electronics',
        estimated_annual_volume: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      toast.error(error.message || "Failed to send inquiry. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
      <h3 className="text-2xl font-bold text-primary mb-6">Get a Free Sourcing Quote</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Full Name *</label>
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Work Email *</label>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              placeholder="john@company.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Company Name</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              placeholder="Your Business Ltd"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Product Category</label>
            <select
              name="product_category"
              value={formData.product_category}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            >
              <option>Electronics</option>
              <option>Furniture</option>
              <option>Textiles</option>
              <option>Machinery</option>
              <option>Home Decor</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Estimated Annual Volume</label>
          <input
            type="text"
            name="estimated_annual_volume"
            value={formData.estimated_annual_volume}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="e.g. 5,000 units or $50k USD"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Sourcing Requirements *</label>
          <textarea
            required
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="Please describe the products you want to source, specifications, target price, etc."
          ></textarea>
        </div>

        <button
          disabled={loading}
          type="submit"
          className="w-full btn-accent py-4 flex items-center justify-center font-bold text-lg group"
        >
          {loading ? (
            <Loader2 className="animate-spin mr-2" />
          ) : (
            <>
              Submit Sourcing Request <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
        <p className="text-xs text-slate-500 text-center italic">
          Your data is secure and will never be shared with third parties.
        </p>
      </form>
    </div>
  );
};

export default InquiryForm;
