import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const productCategories = [
  'Electronics & Components',
  'Furniture & Home Goods',
  'Apparel & Textiles',
  'Industrial Machinery & Tools',
  'Packaging & Printing',
  'Toys & Baby Products',
  'Health & Beauty',
  'Automotive Parts',
  'Sports & Outdoor',
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

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  productCategory: '',
  service: '',
  orderValue: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Enter a valid email';
    if (!form.message.trim()) newErrors.message = 'Please describe your sourcing needs';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log('Form submitted:', form);
    setSubmitted(true);
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-brand-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Tell us what you need. We'll review your requirements and respond within 24 business hours with a free assessment.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-28 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-brand-dark mb-2">Contact Information</h2>
                <p className="text-brand-mid text-sm leading-relaxed">
                  Reach out directly or fill in the form and we'll get back to you promptly.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: MapPin,
                    label: 'Office Location',
                    value: 'Guangzhou, Guangdong Province, China',
                    sub: 'Operations across all major manufacturing hubs',
                  },
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'info@ssourcingchina.com',
                    href: 'mailto:info@ssourcingchina.com',
                  },
                  {
                    icon: Phone,
                    label: 'Phone / WhatsApp',
                    value: '+86 (0) 20 0000 0000',
                  },
                  {
                    icon: Clock,
                    label: 'Business Hours',
                    value: 'Mon–Fri, 9:00 AM – 6:00 PM CST',
                    sub: 'We respond to all inquiries within 24 hours',
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex gap-4 bg-white rounded-xl p-5 border border-brand-border">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-brand-blue" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-1">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} className="text-brand-dark text-sm font-medium hover:text-brand-blue transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-brand-dark text-sm font-medium">{item.value}</div>
                        )}
                        {item.sub && <div className="text-brand-mid text-xs mt-0.5">{item.sub}</div>}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Trust note */}
              <div className="bg-brand-blue/10 border border-brand-blue/20 rounded-xl p-5">
                <h4 className="font-semibold text-brand-blue text-sm mb-2">What Happens Next?</h4>
                <ul className="space-y-2">
                  {[
                    'We review your inquiry within 24 hours',
                    'A sourcing specialist contacts you',
                    'We provide a free assessment and quote',
                    'No obligation to proceed',
                  ].map((step) => (
                    <li key={step} className="flex items-start gap-2 text-brand-mid text-xs">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-green flex-shrink-0 mt-0.5" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-2xl border border-brand-border p-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-brand-green" />
                  </div>
                  <h2 className="text-2xl font-bold text-brand-dark mb-3">Inquiry Received!</h2>
                  <p className="text-brand-mid mb-6 max-w-md mx-auto">
                    Thank you for contacting SSourcing China. A sourcing specialist will review your inquiry and get back to you within 24 business hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm(initialForm); }}
                    className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-brand-border p-8 md:p-10">
                  <h2 className="text-xl font-bold text-brand-dark mb-6">Sourcing Inquiry Form</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">
                        Full Name <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className={`w-full px-4 py-3 border rounded-lg text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-colors ${errors.name ? 'border-brand-red' : 'border-brand-border'}`}
                      />
                      {errors.name && <p className="text-brand-red text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your Company Ltd."
                        className="w-full px-4 py-3 border border-brand-border rounded-lg text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">
                        Business Email <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className={`w-full px-4 py-3 border rounded-lg text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-colors ${errors.email ? 'border-brand-red' : 'border-brand-border'}`}
                      />
                      {errors.email && <p className="text-brand-red text-xs mt-1">{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 555 000 0000"
                        className="w-full px-4 py-3 border border-brand-border rounded-lg text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      />
                    </div>

                    {/* Country */}
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">Country</label>
                      <input
                        type="text"
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        placeholder="United States"
                        className="w-full px-4 py-3 border border-brand-border rounded-lg text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      />
                    </div>

                    {/* Order Value */}
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">Estimated Order Value</label>
                      <select
                        name="orderValue"
                        value={form.orderValue}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-brand-border rounded-lg text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white"
                      >
                        <option value="">Select range</option>
                        <option>Under USD 5,000</option>
                        <option>USD 5,000 – 20,000</option>
                        <option>USD 20,000 – 100,000</option>
                        <option>Over USD 100,000</option>
                      </select>
                    </div>

                    {/* Product Category */}
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">Product Category</label>
                      <select
                        name="productCategory"
                        value={form.productCategory}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-brand-border rounded-lg text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white"
                      >
                        <option value="">Select category</option>
                        {productCategories.map((c) => <option key={c}>{c}</option>)}
                      </select>
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">Service Needed</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-brand-border rounded-lg text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white"
                      >
                        <option value="">Select service</option>
                        {services.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-brand-dark mb-1.5">
                      Describe Your Sourcing Needs <span className="text-brand-red">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Please describe the product you want to source, your target price, quantity, timeline, and any specific requirements (certifications, materials, etc.)."
                      className={`w-full px-4 py-3 border rounded-lg text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent resize-none transition-colors ${errors.message ? 'border-brand-red' : 'border-brand-border'}`}
                    />
                    {errors.message && <p className="text-brand-red text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
                  >
                    <Send className="w-5 h-5" />
                    Submit Sourcing Inquiry
                  </button>
                  <p className="text-brand-mid text-xs text-center mt-3">
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
