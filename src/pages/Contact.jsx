import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productCategory: '',
    quantity: '',
    timeline: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission would connect to backend in production
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div>
        <section className="bg-[#1a365d] text-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl font-semibold">Thank You</h1>
          </div>
        </section>
        <section className="py-20">
          <div className="max-w-xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">Your Inquiry Has Been Received</h2>
            <p className="text-[#4a5568] mb-8">
              A member of our team will review your requirements and respond within 1-2 business days with initial supplier recommendations or clarifying questions.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: '', company: '', email: '', phone: '', productCategory: '', quantity: '', timeline: '', message: '',
                });
              }}
              className="text-[#3182ce] font-medium hover:underline"
            >
              Submit another inquiry
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-[#1a365d] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-semibold mb-4">Contact Us</h1>
          <p className="text-xl text-[#a0aec0]">Request a sourcing consultation and supplier recommendations</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-6">Get a Free Sourcing Quote</h2>
              <p className="text-[#4a5568] mb-8">
                Provide details about your sourcing requirements. We'll respond with initial supplier options and next steps.
              </p>
              <div className="space-y-4 text-sm">
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <a href="mailto:info@ssourcingchina.com" className="text-[#3182ce]">info@ssourcingchina.com</a>
                </div>
                <div>
                  <div className="font-semibold mb-1">Phone</div>
                  <a href="tel:+862112345678" className="text-[#3182ce]">+86 21 1234 5678</a>
                </div>
                <div>
                  <div className="font-semibold mb-1">Office</div>
                  <span className="text-[#4a5568]">Shanghai, China</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#e2e8f0] rounded-md focus:outline-none focus:border-[#3182ce]"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">Company Name *</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#e2e8f0] rounded-md focus:outline-none focus:border-[#3182ce]"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#e2e8f0] rounded-md focus:outline-none focus:border-[#3182ce]"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#e2e8f0] rounded-md focus:outline-none focus:border-[#3182ce]"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="productCategory" className="block text-sm font-medium mb-2">Product Category *</label>
                    <select
                      id="productCategory"
                      name="productCategory"
                      required
                      value={formData.productCategory}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#e2e8f0] rounded-md focus:outline-none focus:border-[#3182ce] bg-white"
                    >
                      <option value="">Select a category</option>
                      <option value="Consumer Electronics">Consumer Electronics</option>
                      <option value="Home & Garden">Home & Garden</option>
                      <option value="Apparel & Textiles">Apparel & Textiles</option>
                      <option value="Industrial Components">Industrial Components</option>
                      <option value="Promotional Products">Promotional Products</option>
                      <option value="Furniture & Furnishings">Furniture & Furnishings</option>
                      <option value="Packaging Materials">Packaging Materials</option>
                      <option value="Automotive Parts">Automotive Parts</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium mb-2">Estimated Order Quantity</label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      placeholder="e.g., 500 units, 1 container"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#e2e8f0] rounded-md focus:outline-none focus:border-[#3182ce]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium mb-2">Target Timeline</label>
                  <input
                    type="text"
                    id="timeline"
                    name="timeline"
                    placeholder="e.g., Need samples in 4 weeks, production start Q3"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#e2e8f0] rounded-md focus:outline-none focus:border-[#3182ce]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Product Details / Requirements *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your product specifications, quality requirements, target price range, or any other relevant details..."
                    className="w-full px-4 py-3 border border-[#e2e8f0] rounded-md focus:outline-none focus:border-[#3182ce] resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#3182ce] text-white px-8 py-3 rounded-md font-medium hover:bg-[#2b6cb0] transition-colors"
                >
                  Submit Inquiry <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-[#4a5568]">We typically respond within 1-2 business days.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
