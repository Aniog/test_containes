import React, { useState } from 'react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.product.trim()) newErrors.product = 'Product description is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      toast.success('Thank you. Your inquiry has been received. We will respond within 48 hours.');
      setFormData({
        name: '', company: '', email: '', phone: '', product: '', quantity: '', message: '',
      });
      setErrors({});
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-[#1F2937] mb-4">Contact Us</h1>
        <p className="text-lg text-[#4B5563]">Request a free sourcing quote or ask us a question.</p>
      </div>

      <div className="grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1.5 text-[#1F2937]">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 border rounded focus:outline-none focus:ring-1 focus:ring-[#1E3A5F] ${errors.name ? 'border-red-400' : 'border-slate-300'}`}
                />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5 text-[#1F2937]">Company *</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 border rounded focus:outline-none focus:ring-1 focus:ring-[#1E3A5F] ${errors.company ? 'border-red-400' : 'border-slate-300'}`}
                />
                {errors.company && <p className="text-xs text-red-500 mt-1">{errors.company}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1.5 text-[#1F2937]">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 border rounded focus:outline-none focus:ring-1 focus:ring-[#1E3A5F] ${errors.email ? 'border-red-400' : 'border-slate-300'}`}
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5 text-[#1F2937]">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-[#1E3A5F]"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1.5 text-[#1F2937]">Product Description *</label>
                <input
                  type="text"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  placeholder="e.g., LED lighting fixtures"
                  className={`w-full px-4 py-2.5 border rounded focus:outline-none focus:ring-1 focus:ring-[#1E3A5F] ${errors.product ? 'border-red-400' : 'border-slate-300'}`}
                />
                {errors.product && <p className="text-xs text-red-500 mt-1">{errors.product}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5 text-[#1F2937]">Estimated Annual Quantity</label>
                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="e.g., 5,000 units"
                  className="w-full px-4 py-2.5 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-[#1E3A5F]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5 text-[#1F2937]">Additional Details *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell us about your sourcing requirements, timeline, or any specific questions..."
                className={`w-full px-4 py-2.5 border rounded resize-y focus:outline-none focus:ring-1 focus:ring-[#1E3A5F] ${errors.message ? 'border-red-400' : 'border-slate-300'}`}
              />
              {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-8 py-3 bg-[#1E3A5F] text-white font-semibold rounded hover:bg-[#2E5A8B] transition-colors disabled:opacity-60"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
            </button>
            <p className="text-xs text-[#6B7280]">We typically respond within 48 business hours.</p>
          </form>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-[#F3F4F6] p-8 rounded-lg">
            <h3 className="font-semibold text-lg mb-4 text-[#1F2937]">Get in Touch</h3>
            <div className="space-y-4 text-sm text-[#4B5563]">
              <div>
                <div className="font-medium text-[#1F2937] mb-1">Email</div>
                <a href="mailto:info@ssourcingchina.com" className="hover:text-[#1E3A5F]">info@ssourcingchina.com</a>
              </div>
              <div>
                <div className="font-medium text-[#1F2937] mb-1">Phone</div>
                <a href="tel:+862162345678" className="hover:text-[#1E3A5F]">+86 21 6234 5678</a>
              </div>
              <div>
                <div className="font-medium text-[#1F2937] mb-1">Office</div>
                <p>Shanghai, China</p>
              </div>
              <div>
                <div className="font-medium text-[#1F2937] mb-1">Business Hours</div>
                <p>Monday - Friday, 9:00 - 18:00 (CST)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
