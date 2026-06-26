import React, { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config';
import { toast } from 'sonner';
import { Loader2, Send } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
    product_interest: 'Double Folding Machine'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: response, error } = await client.from('ContactRequest').insert({
        data: formData
      });

      if (error || response?.success === false) {
        throw new Error(error?.message || 'Failed to send message');
      }

      toast.success('Message sent successfully! We will contact you soon.');
      setFormData({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: '',
        product_interest: 'Double Folding Machine'
      });
    } catch (err) {
      toast.error(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-900 uppercase tracking-wider" htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="John Doe"
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all font-medium"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-900 uppercase tracking-wider" htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@example.com"
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all font-medium"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-900 uppercase tracking-wider" htmlFor="product_interest">Product of Interest</label>
        <select
          id="product_interest"
          name="product_interest"
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all font-medium appearance-none"
          value={formData.product_interest}
          onChange={handleChange}
        >
          <option>Double Folding Machine</option>
          <option>Double Folder</option>
          <option>Sheet Metal Folder</option>
          <option>Sheet Metal Folding Machine</option>
          <option>Metal Folder</option>
          <option>Metal Folding Machine</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-900 uppercase tracking-wider" htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your requirements..."
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all font-medium resize-none"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-slate-900 text-white font-black py-4 rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-xl shadow-slate-900/20 disabled:opacity-50"
      >
        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
        {loading ? 'Sending Message...' : 'Send Inquiry'}
      </button>
    </form>
  );
};

export default ContactForm;
