import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    timeline: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission would connect to backend in production
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold mb-3">Thank You</h2>
          <p className="text-slate-600 mb-6">Your inquiry has been received. A member of our team will contact you within 48 hours with a detailed sourcing proposal.</p>
          <Button onClick={() => { setSubmitted(false); setFormData({ name: '', company: '', email: '', phone: '', product: '', quantity: '', timeline: '', message: '' }); }}>Submit Another Inquiry</Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-semibold tracking-tight mb-4">Contact Us</h1>
          <p className="text-xl text-slate-300">Request a free sourcing quote for your project.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <p className="text-slate-600 mb-8">Complete the form and we'll prepare a sourcing proposal tailored to your requirements.</p>
              
              <div className="space-y-6 text-sm">
                <div>
                  <div className="font-medium mb-1">Office</div>
                  <div className="text-slate-600">Shanghai, China<br />Room 1208, Tower B, 88 Century Avenue</div>
                </div>
                <div>
                  <div className="font-medium mb-1">Phone</div>
                  <div className="text-slate-600">+86 21 5888 1234</div>
                </div>
                <div>
                  <div className="font-medium mb-1">Email</div>
                  <div className="text-slate-600">info@ssourcingchina.com</div>
                </div>
                <div>
                  <div className="font-medium mb-1">Business Hours</div>
                  <div className="text-slate-600">Monday - Friday, 8:30am - 6:00pm (CST)</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input name="name" value={formData.name} onChange={handleChange} required placeholder="John Smith" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company *</label>
                    <Input name="company" value={formData.company} onChange={handleChange} required placeholder="Your Company" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 555 123 4567" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Product Category *</label>
                    <Input name="product" value={formData.product} onChange={handleChange} required placeholder="e.g., Kitchenware, Electronics" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Estimated Annual Quantity</label>
                    <Input name="quantity" value={formData.quantity} onChange={handleChange} placeholder="e.g., 5,000 units" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Target Timeline</label>
                  <Input name="timeline" value={formData.timeline} onChange={handleChange} placeholder="e.g., First order within 3 months" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Additional Details *</label>
                  <Textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Please describe your product requirements, target specifications, and any other relevant details..." />
                </div>

                <Button type="submit" className="w-full md:w-auto">Submit Inquiry</Button>
                <p className="text-xs text-slate-500">We typically respond within 48 business hours.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;