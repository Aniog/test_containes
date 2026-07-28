import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productCategory: '',
    quantity: '',
    targetPrice: '',
    timeline: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission would connect to backend in production
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-emerald-600 text-2xl">✓</span>
        </div>
        <h1 className="text-3xl font-semibold mb-4">Inquiry Received</h1>
        <p className="text-slate-600 mb-8">Thank you for contacting SSourcing China. A member of our sourcing team will review your requirements and respond within 48 hours.</p>
        <Button onClick={() => { setSubmitted(false); setFormData({ name: '', company: '', email: '', phone: '', productCategory: '', quantity: '', targetPrice: '', timeline: '', message: '' }); }}>Submit Another Inquiry</Button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-5 gap-16">
        <div className="md:col-span-2">
          <h1 className="text-4xl font-semibold mb-6">Get a Free Sourcing Quote</h1>
          <p className="text-slate-600 mb-8">Provide details about your sourcing requirements. We'll review your specifications and respond with a preliminary sourcing plan.</p>
          
          <div className="space-y-6 text-sm">
            <div>
              <div className="font-medium mb-1">Email</div>
              <div className="text-slate-600">info@ssourcingchina.com</div>
            </div>
            <div>
              <div className="font-medium mb-1">Phone</div>
              <div className="text-slate-600">+86 21 5888 1234</div>
            </div>
            <div>
              <div className="font-medium mb-1">Office</div>
              <div className="text-slate-600">Room 1208, Tower B<br />88 Century Avenue<br />Shanghai 200120, China</div>
            </div>
            <div>
              <div className="font-medium mb-1">Business Hours</div>
              <div className="text-slate-600">Monday - Friday<br />8:30 AM - 6:00 PM (CST)</div>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <Input name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company *</label>
                <Input name="company" value={formData.company} onChange={handleChange} required />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <Input name="phone" value={formData.phone} onChange={handleChange} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Product Category *</label>
                <Input name="productCategory" placeholder="e.g., Consumer Electronics" value={formData.productCategory} onChange={handleChange} required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Estimated Annual Quantity</label>
                <Input name="quantity" placeholder="e.g., 5,000 units" value={formData.quantity} onChange={handleChange} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Target Unit Price (USD)</label>
                <Input name="targetPrice" placeholder="e.g., $12-15" value={formData.targetPrice} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Required Timeline</label>
                <Input name="timeline" placeholder="e.g., Q3 2026" value={formData.timeline} onChange={handleChange} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Additional Details *</label>
              <Textarea 
                name="message" 
                placeholder="Please describe your product requirements, specifications, quality standards, or any other relevant information."
                value={formData.message} 
                onChange={handleChange} 
                required 
              />
            </div>

            <Button type="submit" size="lg" className="w-full md:w-auto">Submit Inquiry</Button>
            <p className="text-xs text-slate-500">We typically respond within 48 business hours. All inquiries are confidential.</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;