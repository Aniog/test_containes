import React, { useState } from 'react';

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
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        productCategory: '',
        quantity: '',
        timeline: '',
        message: '',
      });
    }, 800);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-slate-900 mb-4">Contact Us</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Tell us about your sourcing requirements. We will respond within 48 hours with a preliminary proposal.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2">
          <h3 className="font-semibold text-lg text-slate-900 mb-4">Get in Touch</h3>
          <div className="space-y-4 text-slate-600">
            <p>
              <strong className="text-slate-900">Email:</strong><br />
              info@ssourcingchina.com
            </p>
            <p>
              <strong className="text-slate-900">Phone:</strong><br />
              +86 21 5888 0000
            </p>
            <p>
              <strong className="text-slate-900">Address:</strong><br />
              Room 1208, Building 3<br />
              1688 Changyang Road<br />
              Shanghai 200090, China
            </p>
            <p>
              <strong className="text-slate-900">Business Hours:</strong><br />
              Monday - Friday, 8:30am - 5:30pm (CST)
            </p>
          </div>
        </div>

        <div className="md:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 border border-slate-300 rounded focus:outline-none focus:border-blue-800"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">Company *</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 border border-slate-300 rounded focus:outline-none focus:border-blue-800"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 border border-slate-300 rounded focus:outline-none focus:border-blue-800"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full h-11 px-4 border border-slate-300 rounded focus:outline-none focus:border-blue-800"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="productCategory" className="block text-sm font-medium text-slate-700 mb-1.5">Product Category *</label>
                <input
                  type="text"
                  id="productCategory"
                  name="productCategory"
                  value={formData.productCategory}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Consumer Electronics, Textiles"
                  className="w-full h-11 px-4 border border-slate-300 rounded focus:outline-none focus:border-blue-800"
                />
              </div>
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-1.5">Estimated Annual Quantity</label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="e.g., 5,000 units"
                  className="w-full h-11 px-4 border border-slate-300 rounded focus:outline-none focus:border-blue-800"
                />
              </div>
            </div>

            <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-1.5">Target Timeline</label>
              <input
                type="text"
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                placeholder="e.g., First order within 3 months"
                className="w-full h-11 px-4 border border-slate-300 rounded focus:outline-none focus:border-blue-800"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">Additional Details *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Please describe your product requirements, quality standards, target price range, or any other relevant information."
                className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none focus:border-blue-800 resize-y"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full h-12 bg-blue-800 text-white font-medium rounded hover:bg-blue-900 transition-colors disabled:opacity-70"
            >
              {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
            </button>

            {status === 'success' && (
              <p className="text-center text-emerald-600 font-medium">Thank you. We will contact you within 48 hours.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
