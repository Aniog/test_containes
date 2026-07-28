import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from 'sonner';
import { DataClient, User } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const InquiryForm = ({ title = "Get Your Free Sourcing Quote" }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // 1. Upsert User
      const userRecord = await User.upsert({
        email: formData.email,
        name: formData.name,
        role: 'guest',
      });

      // 2. Insert Inquiry
      const { error } = await client.from('SourcingInquiry').insert({
        data: {
          user_id: userRecord.id,
          name: formData.name,
          email: formData.email,
          company: formData.company,
          product_category: 'Other', // Simplified for demo
          message: `Product: ${formData.product}\nQuantity: ${formData.quantity}\n\n${formData.message}`,
          status: 'new'
        }
      });

      if (error) throw error;

      toast.success("Thank you! Your inquiry has been sent. We'll contact you within 24 hours.");
      setFormData({ name: '', email: '', company: '', product: '', quantity: '', message: '' });
    } catch (err) {
      console.error('Submission error:', err);
      toast.error('Failed to send inquiry. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      <div className="bg-primary p-8 text-white">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">Tell us your requirements and our experts will get back to you with a free quote.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="p-8 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input 
              required
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Business Email *</label>
            <input 
              required
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@company.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
            <input 
              type="text" 
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your Business Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Product You Need *</label>
            <input 
              required
              type="text" 
              name="product"
              value={formData.product}
              onChange={handleChange}
              placeholder="e.g. Wireless Headphones"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Target Quantity</label>
          <input 
            type="text" 
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="e.g. 1000 units"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Detailed Requirements</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Describe your product specifications, quality standards, packaging, etc."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
          ></textarea>
        </div>

        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-secondary hover:bg-secondary-dark text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <span>{isSubmitting ? 'Sending inquiry...' : 'Send Free Quote Request'}</span>
          <Send size={18} />
        </button>
        
        <p className="text-center text-xs text-gray-400">
          Your information is 100% secure and private.
        </p>
      </form>
    </div>
  );
};

export default InquiryForm;
