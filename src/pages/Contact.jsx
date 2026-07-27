import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    product: '',
    quantity: '',
    timeline: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', company: '', email: '', phone: '', country: '', product: '', quantity: '', timeline: '', message: '' });
    }, 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-semibold text-[#0F172A] mb-4">Contact Us</h1>
        <p className="text-xl text-[#64748B]">Tell us about your sourcing needs. We'll respond within 24 hours.</p>
      </div>

      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <div className="bg-[#F8FAFC] rounded-xl p-8">
            <h3 className="font-semibold text-lg mb-6">Get in Touch</h3>
            <div className="space-y-4 text-sm">
              <div>
                <div className="text-[#64748B]">Email</div>
                <div className="text-[#0F172A]">info@ssourcingchina.com</div>
              </div>
              <div>
                <div className="text-[#64748B]">Phone</div>
                <div className="text-[#0F172A]">+86 21 5888 9999</div>
              </div>
              <div>
                <div className="text-[#64748B]">Office</div>
                <div className="text-[#0F172A]">Shanghai, China</div>
              </div>
              <div>
                <div className="text-[#64748B]">Hours</div>
                <div className="text-[#0F172A]">Mon-Fri, 9:00-18:00 CST</div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-[#E2E8F0] text-sm text-[#64748B]">
              We work with buyers worldwide and are experienced in cross-border communication across time zones.
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          {submitted ? (
            <div className="text-center py-16 bg-[#F8FAFC] rounded-xl">
              <CheckCircle className="w-16 h-16 text-[#059669] mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Inquiry Received</h3>
              <p className="text-[#64748B]">Thank you. A member of our team will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 focus:border-[#1E40AF] focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company *</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} required className="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 focus:border-[#1E40AF] focus:outline-none" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 focus:border-[#1E40AF] focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 focus:border-[#1E40AF] focus:outline-none" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Country *</label>
                  <input type="text" name="country" value={formData.country} onChange={handleChange} required className="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 focus:border-[#1E40AF] focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Product Category *</label>
                  <input type="text" name="product" value={formData.product} onChange={handleChange} required placeholder="e.g., Electronics, Textiles" className="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 focus:border-[#1E40AF] focus:outline-none" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Estimated Quantity</label>
                  <input type="text" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="e.g., 500-1000 units" className="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 focus:border-[#1E40AF] focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Target Timeline</label>
                  <input type="text" name="timeline" value={formData.timeline} onChange={handleChange} placeholder="e.g., Within 3 months" className="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 focus:border-[#1E40AF] focus:outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Project Details *</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={6} placeholder="Describe your product requirements, specifications, target price range, and any other relevant details..." className="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 focus:border-[#1E40AF] focus:outline-none resize-y" />
              </div>

              <button type="submit" className="w-full md:w-auto px-10 py-4 bg-[#0F172A] text-white font-medium rounded-lg hover:bg-[#1E293B] transition-colors">
                Submit Inquiry
              </button>
              <p className="text-xs text-[#64748B]">Your information is confidential and will only be used to respond to your inquiry.</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
