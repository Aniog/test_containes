import React, { useState } from 'react';
import { Toaster, toast } from 'sonner';

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in required fields: Name, Email, and Message.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Thank you. Your inquiry has been received. We will respond within 24 hours.');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        product: '',
        quantity: '',
        timeline: '',
        message: '',
      });
    }, 800);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Toaster position="top-center" richColors />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-[#1E3A5F] mb-4">Contact Us</h1>
        <p className="text-xl text-[#6B7280]">
          Submit your sourcing requirements and receive a response within 24 hours.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#1F2937] mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1F2937] mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent"
                  placeholder="Company name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#1F2937] mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent"
                  placeholder="you@company.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1F2937] mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent"
                  placeholder="+1 555 123 4567"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#1F2937] mb-2">Product / Category</label>
                <input
                  type="text"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent"
                  placeholder="e.g., LED lighting components"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1F2937] mb-2">Estimated Quantity</label>
                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent"
                  placeholder="e.g., 5,000 units"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1F2937] mb-2">Target Timeline</label>
              <input
                type="text"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent"
                placeholder="e.g., First shipment in 8 weeks"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1F2937] mb-2">
                Message / Requirements <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent resize-y"
                placeholder="Describe your product requirements, specifications, or questions..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto bg-[#1E3A5F] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-[#162d4a] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
            </button>

            <p className="text-xs text-[#6B7280]">Required fields marked with *. We respond within one business day.</p>
          </form>
        </div>

        <div className="md:col-span-2">
          <div className="bg-[#F8FAFC] p-8 rounded-xl">
            <h3 className="font-semibold text-lg mb-6 text-[#1E3A5F]">Office</h3>
            <div className="space-y-4 text-sm text-[#1F2937]">
              <div>
                <div className="font-medium mb-1">Shanghai Headquarters</div>
                <div className="text-[#6B7280]">Room 1208, Tower B<br />No. 88 Century Avenue<br />Pudong, Shanghai 200120<br />China</div>
              </div>
              <div>
                <div className="font-medium mb-1">Email</div>
                <a href="mailto:info@ssourcingchina.com" className="text-[#1E3A5F] hover:underline">info@ssourcingchina.com</a>
              </div>
              <div>
                <div className="font-medium mb-1">Phone</div>
                <a href="tel:+862158881234" className="text-[#1E3A5F] hover:underline">+86 21 5888 1234</a>
              </div>
              <div>
                <div className="font-medium mb-1">Business Hours</div>
                <div className="text-[#6B7280]">Monday - Friday<br />9:00 AM - 6:00 PM (CST)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
