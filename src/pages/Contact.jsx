import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

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
      <div className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-semibold tracking-tight mb-4">Thank You</h2>
          <p className="text-slate-600 mb-8">We've received your inquiry and will respond within 1-2 business days.</p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '', company: '', email: '', phone: '', productCategory: '', quantity: '', timeline: '', message: '',
              });
            }}
            className="text-slate-900 font-medium hover:underline"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-semibold tracking-tight mb-6">Get a Free Sourcing Quote</h1>
          <p className="text-xl text-slate-300">Tell us about your project and we'll provide a detailed proposal within 48 hours.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h2 className="font-semibold text-2xl tracking-tight mb-8">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-slate-400 mt-1" />
                <div>
                  <div className="font-medium mb-1">Office Address</div>
                  <div className="text-slate-600 text-sm">Room 1208, Tower B, 388 Fenglin Road<br />Xuhui District, Shanghai 200032<br />China</div>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-slate-400 mt-1" />
                <div>
                  <div className="font-medium mb-1">Phone</div>
                  <a href="tel:+862162345678" className="text-slate-600 hover:text-slate-900">+86 21 6234 5678</a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-slate-400 mt-1" />
                <div>
                  <div className="font-medium mb-1">Email</div>
                  <a href="mailto:info@ssourcingchina.com" className="text-slate-600 hover:text-slate-900">info@ssourcingchina.com</a>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="w-5 h-5 text-slate-400 mt-1" />
                <div>
                  <div className="font-medium mb-1">Business Hours</div>
                  <div className="text-slate-600 text-sm">Monday - Friday: 8:30 AM - 6:00 PM (CST)<br />Saturday: 9:00 AM - 12:00 PM (CST)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-slate-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company *</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-slate-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-slate-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-slate-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Product Category *</label>
                  <select
                    name="productCategory"
                    value={formData.productCategory}
                    onChange={handleChange}
                    required
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-slate-500 bg-white"
                  >
                    <option value="">Select a category</option>
                    <option value="Consumer Electronics">Consumer Electronics</option>
                    <option value="Home & Garden">Home & Garden</option>
                    <option value="Industrial Equipment">Industrial Equipment</option>
                    <option value="Textiles & Apparel">Textiles & Apparel</option>
                    <option value="Automotive Parts">Automotive Parts</option>
                    <option value="Furniture & Furnishings">Furniture & Furnishings</option>
                    <option value="Tools & Hardware">Tools & Hardware</option>
                    <option value="Packaging Materials">Packaging Materials</option>
                    <option value="Medical & Healthcare">Medical & Healthcare</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Estimated Annual Quantity</label>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="e.g., 5,000 units"
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-slate-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Target Timeline</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-slate-500 bg-white"
                >
                  <option value="">Select timeline</option>
                  <option value="Within 1 month">Within 1 month</option>
                  <option value="1-3 months">1-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6+ months">6+ months</option>
                  <option value="Flexible">Flexible / Not urgent</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Project Details *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Please describe your product requirements, specifications, target price range, and any other relevant details..."
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-slate-500 resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-slate-900 text-white px-10 py-4 rounded-lg font-medium hover:bg-slate-800 transition-colors"
              >
                Submit Inquiry
              </button>

              <p className="text-sm text-slate-500">We typically respond within 1-2 business days. All inquiries are confidential.</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;