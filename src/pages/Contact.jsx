import { useState } from 'react';
import { MapPin, Mail, Phone, Clock, CheckCircle, Send } from 'lucide-react';

const productCategories = [
  'Electronics & Components',
  'Furniture & Home Goods',
  'Apparel & Textiles',
  'Hardware & Industrial',
  'Packaging',
  'Health & Beauty',
  'Toys & Sporting Goods',
  'Other',
];

const services = [
  'Supplier Sourcing',
  'Factory Verification / Audit',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Full Sourcing Management',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    productCategory: '',
    serviceNeeded: '',
    productDescription: '',
    targetQuantity: '',
    targetPrice: '',
    timeline: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Enter a valid email';
    if (!form.productDescription.trim()) newErrors.productDescription = 'Please describe your product';
    if (!form.serviceNeeded) newErrors.serviceNeeded = 'Please select a service';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Form submitted:', form);
    setSubmitted(true);
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-lg border text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-sky transition-colors ${
      errors[field] ? 'border-red-400 bg-red-50' : 'border-neutral-200 bg-white hover:border-neutral-300'
    }`;

  return (
    <div>
      {/* Page Header */}
      <section className="bg-brand-navy text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get a Free Sourcing Quote</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Tell us what you need and we will send you a free sourcing proposal within 24 hours.
              No commitment required.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-xl font-bold text-neutral-900 mb-4">Contact Information</h2>
                <div className="flex flex-col gap-4">
                  {[
                    { icon: MapPin, label: 'Office', value: 'Guangzhou, Guangdong, China\n(Operations across all major manufacturing hubs)' },
                    { icon: Mail, label: 'Email', value: 'info@ssourcingchina.com' },
                    { icon: Phone, label: 'Phone / WhatsApp', value: '+86 (0)20 1234 5678' },
                    { icon: Clock, label: 'Response Time', value: 'Within 24 business hours' },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-brand-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-brand-navy" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">{label}</p>
                        <p className="text-sm text-neutral-700 whitespace-pre-line">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="bg-brand-navy rounded-xl p-6 text-white">
                <h3 className="font-semibold mb-4">What Happens Next</h3>
                <ul className="flex flex-col gap-3">
                  {[
                    'We review your inquiry within 24 hours',
                    'A sourcing specialist contacts you to clarify requirements',
                    'We send a free sourcing proposal with supplier options',
                    'You decide whether to proceed — no obligation',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-brand-sky flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-xl border border-neutral-200 p-10 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-3">Inquiry Received</h2>
                  <p className="text-neutral-600 mb-2">
                    Thank you, <strong>{form.name}</strong>. We have received your sourcing inquiry.
                  </p>
                  <p className="text-neutral-600">
                    A member of our team will contact you at <strong>{form.email}</strong> within 24 business hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-xl border border-neutral-200 p-8"
                  noValidate
                >
                  <h2 className="text-xl font-bold text-neutral-900 mb-6">Sourcing Inquiry Form</h2>

                  {/* Contact Details */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-4">Your Details</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                          Full Name <span className="text-brand-red">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className={inputClass('name')}
                        />
                        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Your Company Ltd."
                          className={inputClass('company')}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                          Business Email <span className="text-brand-red">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className={inputClass('email')}
                        />
                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">Phone / WhatsApp</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 555 000 0000"
                          className={inputClass('phone')}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">Country</label>
                        <input
                          type="text"
                          name="country"
                          value={form.country}
                          onChange={handleChange}
                          placeholder="United States"
                          className={inputClass('country')}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Sourcing Details */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-4">Sourcing Details</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">Product Category</label>
                        <select
                          name="productCategory"
                          value={form.productCategory}
                          onChange={handleChange}
                          className={inputClass('productCategory')}
                        >
                          <option value="">Select a category</option>
                          {productCategories.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                          Service Needed <span className="text-brand-red">*</span>
                        </label>
                        <select
                          name="serviceNeeded"
                          value={form.serviceNeeded}
                          onChange={handleChange}
                          className={inputClass('serviceNeeded')}
                        >
                          <option value="">Select a service</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                        {errors.serviceNeeded && <p className="text-xs text-red-500 mt-1">{errors.serviceNeeded}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">Target Quantity</label>
                        <input
                          type="text"
                          name="targetQuantity"
                          value={form.targetQuantity}
                          onChange={handleChange}
                          placeholder="e.g. 500 units / month"
                          className={inputClass('targetQuantity')}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">Target Unit Price (USD)</label>
                        <input
                          type="text"
                          name="targetPrice"
                          value={form.targetPrice}
                          onChange={handleChange}
                          placeholder="e.g. $15–$20 per unit"
                          className={inputClass('targetPrice')}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">Timeline</label>
                        <input
                          type="text"
                          name="timeline"
                          value={form.timeline}
                          onChange={handleChange}
                          placeholder="e.g. First shipment in 3 months"
                          className={inputClass('timeline')}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Description */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Product Description <span className="text-brand-red">*</span>
                    </label>
                    <textarea
                      name="productDescription"
                      value={form.productDescription}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe your product in detail — materials, dimensions, specifications, certifications required, and any other relevant information."
                      className={`${inputClass('productDescription')} resize-none`}
                    />
                    {errors.productDescription && (
                      <p className="text-xs text-red-500 mt-1">{errors.productDescription}</p>
                    )}
                  </div>

                  {/* Additional Message */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Additional Notes</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any other information that would help us understand your requirements."
                      className={`${inputClass('message')} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-red text-white py-4 rounded-lg font-semibold text-base hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Submit Sourcing Inquiry
                  </button>
                  <p className="text-xs text-neutral-400 text-center mt-3">
                    We respond within 24 business hours. Your information is kept confidential.
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
