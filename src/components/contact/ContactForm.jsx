import React, { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../../config.jsx';
import { toast } from 'sonner';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product_category: '', // will be string from select
    product_description: '',
    estimated_quantity: '',
    target_price: '',
    services_needed: [] // array of strings
  });

  const productCategories = [
    { value: '', label: 'Select a category' },
    { value: 'electronics', label: 'Consumer Electronics' },
    { value: 'toys', label: 'Toys & Hobbies' },
    { value: 'apparel', label: 'Apparel & Accessories' },
    { value: 'home_garden', label: 'Home & Garden' },
    { value: 'machinery', label: 'Machinery & Industrial' },
    { value: 'automotive', label: 'Automotive Parts' },
    { value: 'health_beauty', label: 'Health & Beauty' },
    { value: 'other', label: 'Other/Not Sure' }
  ];

  const serviceOptions = [
    { value: 'supplier_search', label: 'Supplier Search & Verification' },
    { value: 'factory_audit', label: 'On-site Factory Audit' },
    { value: 'sample_consolidation', label: 'Sample Consolidation' },
    { value: 'product_inspection', label: 'Quality Control / Inspection' },
    { value: 'shipping_logistics', label: 'Shipping & Logistics' }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => {
        const currentServices = [...prev.services_needed];
        if (checked) {
          currentServices.push(value);
        } else {
          const index = currentServices.indexOf(value);
          if (index > -1) currentServices.splice(index, 1);
        }
        return { ...prev, services_needed: currentServices };
      });
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) return "Valid email is required";
    if (!formData.product_category) return "Please select a product category";
    if (!formData.product_description.trim()) return "Please describe your product needs";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    
    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      toast.error(validationError);
      return;
    }

    setStatus('submitting');
    const loadToast = toast.loading('Submitting your inquiry...');

    try {
      // 1. In a real app we would use User.upsert but for this test we'll use a dummy ID
      const userRecord = { id: '00000000-0000-0000-0000-000000000000' };

      console.log('Inserting inquiry data...', formData);
      const { data: response, error: dbError } = await client
        .from('SourcingInquiries')
        .insert({
          data: {
            user_id: userRecord.id,
            name: formData.name,
            email: formData.email,
            company: formData.company || undefined,
            phone: formData.phone || undefined,
            product_category: formData.product_category,
            product_description: formData.product_description,
            estimated_quantity: formData.estimated_quantity || undefined,
            target_price: formData.target_price || undefined,
            services_needed: formData.services_needed.length > 0 ? formData.services_needed : undefined,
            status: 'new'
          }
        })
        .select()
        .single();
        
      console.log('Inquiry result:', response, dbError);

      if (dbError || response?.success === false) {
          throw new Error('Database error during submission');
      }

      setStatus('success');
      toast.success('Inquiry submitted successfully!', { id: loadToast });
      
      // Reset form
      setFormData({
        name: '', email: '', company: '', phone: '',
        product_category: '', product_description: '',
        estimated_quantity: '', target_price: '', services_needed: []
      });

    } catch (err) {
      console.error('Submission error:', err);
      // Don't show technical errors to user, just a friendly message
      const msg = "Failed to submit inquiry. Please try again or contact us directly.";
      setErrorMessage(msg);
      setStatus('error');
      toast.error(msg, { id: loadToast });
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center shadow-sm">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          Thank you for reaching out. One of our sourcing specialists will review your requirements and get back to you within 24 hours.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-primary font-medium hover:underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-8 sm:p-10">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Request a Free Quote</h2>
        <p className="text-slate-500 mt-2 text-sm">Fill out the details below and we'll reply within 24h.</p>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 bg-red-50 text-red-600 text-sm rounded-md border border-red-100">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
            <input
              type="text" id="name" name="name" required
              value={formData.name} onChange={handleChange}
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
            <input
              type="email" id="email" name="email" required
              value={formData.email} onChange={handleChange}
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="john@company.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
            <input
              type="text" id="company" name="company"
              value={formData.company} onChange={handleChange}
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Optional"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">WhatsApp / Phone</label>
            <input
              type="text" id="phone" name="phone"
              value={formData.phone} onChange={handleChange}
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="+1 234 567 8900"
            />
          </div>
        </div>

        <div className="border-t border-slate-100 pt-6">
            {/* Product Details */}
            <div className="mb-6">
                <label htmlFor="product_category" className="block text-sm font-medium text-slate-700 mb-1">Product Category *</label>
                <select
                    id="product_category" name="product_category" required
                    value={formData.product_category} onChange={handleChange}
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                    {productCategories.map(cat => (
                        <option key={cat.value} value={cat.value} disabled={!cat.value}>{cat.label}</option>
                    ))}
                </select>
            </div>

            <div className="mb-6">
                <label htmlFor="product_description" className="block text-sm font-medium text-slate-700 mb-1">Detailed Description *</label>
                <textarea
                    id="product_description" name="product_description" rows={4} required
                    value={formData.product_description} onChange={handleChange}
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Please describe the product you are looking for, material specs, target market, etc."
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label htmlFor="estimated_quantity" className="block text-sm font-medium text-slate-700 mb-1">Estimated Quantity</label>
                    <input
                    type="text" id="estimated_quantity" name="estimated_quantity"
                    value={formData.estimated_quantity} onChange={handleChange}
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="e.g. 500 pcs or 1x20' FCL"
                    />
                </div>
                <div>
                    <label htmlFor="target_price" className="block text-sm font-medium text-slate-700 mb-1">Target Price (Optional)</label>
                    <input
                    type="text" id="target_price" name="target_price"
                    value={formData.target_price} onChange={handleChange}
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="$ per unit"
                    />
                </div>
            </div>
        </div>

        <div className="border-t border-slate-100 pt-6 mb-8">
            <span className="block text-sm font-medium text-slate-700 mb-3">Services Required (Check all that apply)</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceOptions.map(option => (
                    <label key={option.value} className="flex items-start space-x-3 cursor-pointer">
                        <input
                            type="checkbox"
                            name="services"
                            value={option.value}
                            checked={formData.services_needed.includes(option.value)}
                            onChange={handleChange}
                            className="mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                        />
                        <span className="text-sm text-slate-600">{option.label}</span>
                    </label>
                ))}
            </div>
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
        >
          {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
        </button>
      </form>
    </div>
  );
}
