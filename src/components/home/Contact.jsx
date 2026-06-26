import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card from '@/components/ui/Card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        product: '',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 5000);
    }, 500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[#c5a46e] font-semibold tracking-wider text-sm">GET IN TOUCH</span>
          <h2 className="text-4xl font-bold tracking-tight text-[#1a1f2e] mt-4 mb-4">
            Request a Quote
          </h2>
          <p className="text-xl text-[#4a5568]">
            Tell us about your requirements and we'll provide a customized solution.
          </p>
        </div>

        <Card>
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#1a1f2e] mb-2">Thank You!</h3>
              <p className="text-[#4a5568]">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#2d3748] mb-2">Full Name *</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2d3748] mb-2">Email Address *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#2d3748] mb-2">Company</label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Ltd."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2d3748] mb-2">Phone Number</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2d3748] mb-2">Product of Interest</label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] bg-white text-[#2d3748] focus:outline-none focus:ring-2 focus:ring-[#1a1f2e] focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select a product...</option>
                  <option value="Double Folding Machine Pro">Double Folding Machine Pro</option>
                  <option value="Double Folder Elite">Double Folder Elite</option>
                  <option value="Sheet Metal Folder HD">Sheet Metal Folder HD</option>
                  <option value="Sheet Metal Folding Machine Compact">Sheet Metal Folding Machine Compact</option>
                  <option value="Metal Folder Industrial">Metal Folder Industrial</option>
                  <option value="Metal Folding Machine Precision">Metal Folding Machine Precision</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2d3748] mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Please describe your requirements..."
                  className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] bg-white text-[#2d3748] placeholder:text-[#a0aec0] focus:outline-none focus:ring-2 focus:ring-[#1a1f2e] focus:border-transparent transition-all duration-200 resize-y"
                />
              </div>

              <Button type="submit" size="lg" className="w-full md:w-auto">
                Submit Request
              </Button>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
};

export default Contact;