import { useState } from 'react';
import { MapPin, Mail, Phone, Clock, CheckCircle, Send } from 'lucide-react';

const productCategories = [
  'Electronics & Gadgets',
  'Furniture & Home Décor',
  'Apparel & Textiles',
  'Hardware & Tools',
  'Packaging & Printing',
  'Home & Kitchen',
  'Toys & Baby Products',
  'Sports & Outdoor',
  'Beauty & Personal Care',
  'Automotive Accessories',
  'Pet Products',
  'Industrial & B2B',
  'Other',
];

const services = [
  'Supplier Sourcing',
  'Factory Verification / Audit',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Full Sourcing Service',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    category: '',
    service: '',
    quantity: '',
    budget: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.product.trim()) e.product = 'Please describe your product';
    if (!form.message.trim()) e.message = 'Please add a message';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) {
      setErrors(e2);
      return;
    }
    setStatus('submitting');
    // Simulate submission
    setTimeout(() => {
      setStatus('success');
      setForm({
        name: '', email: '', company: '', country: '',
        product: '', category: '', service: '',
        quantity: '', budget: '', message: '',
      });
    }, 1200);
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 border rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a4f8a] transition-colors ${
      errors[field] ? 'border-red-400 bg-red-50' : 'border-slate-300 bg-white'
    }`;

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0d2340] py-20 md:py-28">
        <div className="section-container text-center">
          <p className="text-[#e8621a] font-semibold text-sm uppercase tracking-wider mb-3">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get a Free Sourcing Quote</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Tell us what you need. We'll review your inquiry and respond with a sourcing plan and quote within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28 bg-[#f4f6f9]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-[#0d2340] mb-6">Contact Information</h2>

              <div className="flex flex-col gap-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1a4f8a] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0d2340] text-sm mb-1">Office Locations</p>
                    <p className="text-gray-600 text-sm">Shenzhen, Guangdong, China</p>
                    <p className="text-gray-600 text-sm">Yiwu, Zhejiang, China</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1a4f8a] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0d2340] text-sm mb-1">Email</p>
                    <a href="mailto:info@ssourcingchina.com" className="text-[#1a4f8a] text-sm hover:underline">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1a4f8a] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0d2340] text-sm mb-1">Phone / WhatsApp</p>
                    <p className="text-gray-600 text-sm">+86 755 0000 0000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1a4f8a] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0d2340] text-sm mb-1">Response Time</p>
                    <p className="text-gray-600 text-sm">Within 24 hours (Mon–Fri)</p>
                    <p className="text-gray-500 text-xs mt-1">China Standard Time (UTC+8)</p>
                  </div>
                </div>
              </div>

              {/* What Happens Next */}
              <div className="bg-white border border-slate-200 rounded-xl p-5">
                <h3 className="font-semibold text-[#0d2340] text-sm mb-4">What Happens After You Submit</h3>
                <div className="flex flex-col gap-3">
                  {[
                    'We review your inquiry within 24 hours',
                    'A sourcing specialist contacts you to clarify requirements',
                    'We send a sourcing plan and quote within 2–3 business days',
                    'You decide whether to proceed — no obligation',
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#1a4f8a] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <p className="text-gray-600 text-sm">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-[#0d2340] mb-6">Sourcing Inquiry Form</h2>

                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0d2340] mb-2">Inquiry Received!</h3>
                    <p className="text-gray-600 max-w-sm mx-auto">
                      Thank you for your inquiry. A sourcing specialist will contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className={inputClass('name')}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className={inputClass('email')}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Your company (optional)"
                          className={inputClass('company')}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Country</label>
                        <input
                          type="text"
                          name="country"
                          value={form.country}
                          onChange={handleChange}
                          placeholder="Your country"
                          className={inputClass('country')}
                        />
                      </div>
                    </div>

                    {/* Product */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Product Description <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="product"
                        value={form.product}
                        onChange={handleChange}
                        placeholder="e.g. Bluetooth speaker with USB-C charging, 10W output"
                        className={inputClass('product')}
                      />
                      {errors.product && <p className="text-red-500 text-xs mt-1">{errors.product}</p>}
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Product Category</label>
                        <select
                          name="category"
                          value={form.category}
                          onChange={handleChange}
                          className={inputClass('category')}
                        >
                          <option value="">Select a category</option>
                          {productCategories.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Service Needed</label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className={inputClass('service')}
                        >
                          <option value="">Select a service</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 4 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Estimated Quantity</label>
                        <input
                          type="text"
                          name="quantity"
                          value={form.quantity}
                          onChange={handleChange}
                          placeholder="e.g. 500 units / month"
                          className={inputClass('quantity')}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Target Budget (USD)</label>
                        <input
                          type="text"
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          placeholder="e.g. $5,000 – $10,000"
                          className={inputClass('budget')}
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Additional Details <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us more about your requirements — certifications needed, timeline, any existing supplier issues, etc."
                        className={inputClass('message')}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="bg-[#e8621a] hover:bg-[#c9521a] disabled:opacity-60 text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-base"
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Submit Sourcing Inquiry
                        </>
                      )}
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      No commitment required. We'll review your inquiry and respond within 24 hours.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
