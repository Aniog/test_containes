import React, { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { Button } from './ui/button';
import { toast } from 'sonner';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const InquiryForm = ({ buttonText = "Send Inquiry", className = "" }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data: response, error } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            ...formData,
            created_at: new Date().toISOString()
          }
        })
        .select()
        .single();

      if (error || response?.success === false) {
        throw new Error(error?.message || response?.errors?.[0] || 'Failed to submit inquiry');
      }

      toast.success('Inquiry submitted successfully! Our team will contact you soon.');
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
      toast.error(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white border border-slate-200 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent transition outline-none"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white border border-slate-200 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent transition outline-none"
            placeholder="john@example.com"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-slate-700">Company Name</label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white border border-slate-200 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent transition outline-none"
            placeholder="Your Company Ltd."
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="product" className="text-sm font-medium text-slate-700">Product to Source *</label>
          <input
            id="product"
            name="product"
            type="text"
            required
            value={formData.product}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white border border-slate-200 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent transition outline-none"
            placeholder="e.g. Electric Bicycles"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="quantity" className="text-sm font-medium text-slate-700">Estimated Order Quantity</label>
        <input
          id="quantity"
          name="quantity"
          type="text"
          value={formData.quantity}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-white border border-slate-200 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent transition outline-none"
          placeholder="e.g. 500 units"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-slate-700">Message / Requirements</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-white border border-slate-200 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent transition outline-none"
          placeholder="Tell us more about your sourcing needs..."
        />
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-6 rounded-lg transition-all shadow-md active:scale-[0.98]"
      >
        {isSubmitting ? 'Sending inquiry...' : buttonText}
      </Button>
      <p className="text-xs text-slate-500 text-center">We typically respond within 12-24 hours.</p>
    </form>
  );
};

export default InquiryForm;
