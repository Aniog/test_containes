import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const InquiryForm = ({ compact = false, title = "Get a Free Sourcing Quote" }) => {
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '', country: '',
    productCategory: '', productDescription: '', estimatedQuantity: '',
    targetMarket: '', timeline: '', message: '',
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const productCategories = [
    'Consumer Electronics', 'Home & Kitchen', 'Fashion & Apparel', 'Beauty & Personal Care',
    'Industrial Equipment', 'Automotive Parts', 'Toys & Games', 'Sports & Outdoor',
    'Furniture & Home Decor', 'Packaging & Materials', 'Other',
  ];

  const timelines = ['Within 1 month', '1-3 months', '3-6 months', '6+ months', 'Just exploring options'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!formData.name.trim()) return 'Please enter your name';
    if (!formData.company.trim()) return 'Please enter your company name';
    if (!formData.email.trim()) return 'Please enter your email';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Please enter a valid email address';
    if (!formData.productDescription.trim()) return 'Please describe the product you want to source';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const validationError = validate();
    if (validationError) { setError(validationError); return; }
    setStatus('submitting');
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      console.log('Sourcing Inquiry Submitted:', formData);
      setStatus('success');
      setTimeout(() => {
        setFormData({ name: '', company: '', email: '', phone: '', country: '', productCategory: '', productDescription: '', estimatedQuantity: '', targetMarket: '', timeline: '', message: '' });
        setStatus('idle');
      }, 2800);
    } catch (err) {
      setStatus('error');
      setError('Something went wrong. Please try again or email us directly.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center">
        <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-9 h-9 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-semibold text-slate-900 mb-3">Thank you for your inquiry</h3>
        <p className="text-slate-600 max-w-md mx-auto">
          A sourcing specialist will review your requirements and contact you within 1 business day with a preliminary assessment and next steps.
        </p>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl border border-slate-200 ${compact ? 'p-6' : 'p-8 md:p-10'}`}>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm">Fill out the form below. All inquiries receive a response within 24 hours.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent" placeholder="John Smith" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Company Name *</label>
            <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent" placeholder="Your Company Ltd" required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Business Email *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent" placeholder="you@company.com" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone / WhatsApp</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent" placeholder="+1 555 123 4567" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Country / Region</label>
            <input type="text" name="country" value={formData.country} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent" placeholder="United States" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Product Category</label>
            <select name="productCategory" value={formData.productCategory} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-white">
              <option value="">Select a category</option>
              {productCategories.map((cat) => (<option key={cat} value={cat}>{cat}</option>))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Product Description *</label>
          <textarea name="productDescription" value={formData.productDescription} onChange={handleChange} rows={3} className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent resize-y" placeholder="E.g., Wireless earbuds with noise cancellation, custom packaging, target retail price $25-35" required />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Estimated Annual Quantity</label>
            <input type="text" name="estimatedQuantity" value={formData.estimatedQuantity} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent" placeholder="5,000 - 10,000 units" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Target Market</label>
            <input type="text" name="targetMarket" value={formData.targetMarket} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent" placeholder="USA, EU, Australia" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Project Timeline</label>
            <select name="timeline" value={formData.timeline} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-white">
              <option value="">Select timeline</option>
              {timelines.map((t) => (<option key={t} value={t}>{t}</option>))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Additional Details</label>
          <textarea name="message" value={formData.message} onChange={handleChange} rows={3} className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent resize-y" placeholder="Any specific requirements, certifications needed, or questions?" />
        </div>

        {error && (<div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">{error}</div>)}

        <button type="submit" disabled={status === 'submitting'} className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 disabled:opacity-70 disabled:cursor-not-allowed transition-colors">
          {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'} <Send size={16} />
        </button>

        <p className="text-xs text-slate-500 pt-1">Your information is kept confidential. We never share your details with suppliers without your permission.</p>
      </form>
    </div>
  );
};

export default InquiryForm;
