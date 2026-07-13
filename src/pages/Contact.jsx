import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle, Send } from 'lucide-react';

const productCategories = [
  'Electronics & Components',
  'Furniture & Home Goods',
  'Apparel & Textiles',
  'Industrial Machinery & Tools',
  'Packaging & Printing',
  'Toys & Sporting Goods',
  'Health, Beauty & Personal Care',
  'Automotive Parts',
  'Other',
];

const services = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Full Sourcing Service',
];

const initialForm = {
  name: '',
  email: '',
  company: '',
  country: '',
  phone: '',
  productCategory: '',
  serviceNeeded: '',
  productDescription: '',
  targetPrice: '',
  quantity: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email is required';
    if (!form.productDescription.trim()) e.productDescription = 'Please describe your product';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) {
      setErrors(e2);
      return;
    }
    console.log('Sourcing inquiry submitted:', form);
    setSubmitted(true);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-brand-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 tracking-tight">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-slate-300 text-lg mt-4 leading-relaxed">
              Tell us what you need to source and we'll get back to you within 24 hours with a
              tailored plan and quote.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-brand-blue" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-0.5">Email</p>
                      <a href="mailto:info@ssourcingchina.com" className="text-slate-800 text-sm hover:text-brand-blue transition-colors">
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-brand-blue" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-0.5">Phone / WhatsApp</p>
                      <p className="text-slate-800 text-sm">+86 (0) 20 0000 0000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-brand-blue" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-0.5">Location</p>
                      <p className="text-slate-800 text-sm">Guangzhou, China</p>
                      <p className="text-slate-500 text-xs mt-0.5">Operations across all major manufacturing hubs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-brand-blue" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-0.5">Response Time</p>
                      <p className="text-slate-800 text-sm">Within 24 hours (business days)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-navy rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3">What Happens Next?</h3>
                <ul className="space-y-3">
                  {[
                    'We review your inquiry within 24 hours',
                    'We ask any clarifying questions',
                    'We send you a tailored sourcing plan and quote',
                    'You decide whether to proceed — no obligation',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-blue-200 text-sm">
                      <span className="w-5 h-5 rounded-full bg-brand-blue/30 text-blue-300 text-xs flex items-center justify-center shrink-0 mt-0.5 font-semibold">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-xl border border-slate-200 p-10 text-center">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Inquiry Received</h2>
                  <p className="text-slate-600 max-w-md mx-auto">
                    Thank you for your inquiry. Our team will review your requirements and get back to you
                    within 24 business hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm(initialForm); }}
                    className="mt-6 text-brand-blue font-semibold text-sm hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 space-y-6"
                >
                  <h2 className="text-xl font-bold text-slate-900">Sourcing Inquiry Form</h2>

                  {/* Contact Details */}
                  <div>
                    <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-4">
                      Your Details
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className={`w-full border rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors ${
                            errors.name ? 'border-red-400' : 'border-slate-300'
                          }`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className={`w-full border rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors ${
                            errors.email ? 'border-red-400' : 'border-slate-300'
                          }`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Your company"
                          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Country</label>
                        <input
                          type="text"
                          name="country"
                          value={form.country}
                          onChange={handleChange}
                          placeholder="Your country"
                          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Sourcing Details */}
                  <div>
                    <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-4">
                      Sourcing Requirements
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Product Category</label>
                        <select
                          name="productCategory"
                          value={form.productCategory}
                          onChange={handleChange}
                          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors bg-white"
                        >
                          <option value="">Select a category</option>
                          {productCategories.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Service Needed</label>
                        <select
                          name="serviceNeeded"
                          value={form.serviceNeeded}
                          onChange={handleChange}
                          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors bg-white"
                        >
                          <option value="">Select a service</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Target Unit Price (USD)</label>
                        <input
                          type="text"
                          name="targetPrice"
                          value={form.targetPrice}
                          onChange={handleChange}
                          placeholder="e.g. $5–$10 per unit"
                          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Order Quantity</label>
                        <input
                          type="text"
                          name="quantity"
                          value={form.quantity}
                          onChange={handleChange}
                          placeholder="e.g. 500 units"
                          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Product Description <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="productDescription"
                        value={form.productDescription}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Describe the product you want to source — materials, dimensions, specifications, certifications needed, etc."
                        className={`w-full border rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors resize-none ${
                          errors.productDescription ? 'border-red-400' : 'border-slate-300'
                        }`}
                      />
                      {errors.productDescription && (
                        <p className="text-red-500 text-xs mt-1">{errors.productDescription}</p>
                      )}
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Additional Information
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any other details, questions, or context that would help us understand your project."
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-brand-blue hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-lg text-sm transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Submit Sourcing Inquiry
                  </button>
                  <p className="text-slate-400 text-xs text-center">
                    We respond within 24 business hours. No spam, no obligation.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
