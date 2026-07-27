import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle, Send, Globe } from 'lucide-react';

const productCategories = [
  'Electronics & Components',
  'Furniture & Home Goods',
  'Apparel & Textiles',
  'Industrial Equipment',
  'Toys & Baby Products',
  'Health & Beauty',
  'Sports & Outdoor',
  'Packaging & Labels',
  'Auto Parts',
  'Building Materials',
  'Food & Agriculture',
  'Pet Products',
  'Other',
];

const services = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Price Negotiation',
  'Full Sourcing Service',
];

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  productCategory: '',
  productDescription: '',
  targetQuantity: '',
  targetPrice: '',
  servicesNeeded: [],
  timeline: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleServiceToggle = (svc) => {
    setForm((prev) => ({
      ...prev,
      servicesNeeded: prev.servicesNeeded.includes(svc)
        ? prev.servicesNeeded.filter((s) => s !== svc)
        : [...prev.servicesNeeded, svc],
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Enter a valid email';
    if (!form.productDescription.trim()) newErrors.productDescription = 'Please describe your product';
    return newErrors;
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

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center bg-white rounded-2xl border border-slate-200 p-10 shadow-sm">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Inquiry Received</h2>
          <p className="text-slate-600 mb-6">
            Thank you for your inquiry. Our team will review your requirements and get back to you within <strong>1 business day</strong>.
          </p>
          <div className="bg-slate-50 rounded-xl p-4 text-left mb-6">
            <p className="text-sm text-slate-600"><strong className="text-slate-900">Name:</strong> {form.name}</p>
            <p className="text-sm text-slate-600 mt-1"><strong className="text-slate-900">Email:</strong> {form.email}</p>
            {form.productCategory && (
              <p className="text-sm text-slate-600 mt-1"><strong className="text-slate-900">Category:</strong> {form.productCategory}</p>
            )}
          </div>
          <button
            onClick={() => { setSubmitted(false); setForm(initialForm); }}
            className="text-blue-600 hover:text-blue-700 text-sm font-semibold"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Page Header */}
      <section className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Get a Free Sourcing Quote</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Tell us about your product and sourcing needs. We'll respond within 1 business day with a tailored proposal.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-900 text-lg mb-5">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium mb-0.5">Office Location</p>
                      <p className="text-slate-700 text-sm">Guangzhou, Guangdong, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium mb-0.5">Email</p>
                      <a href="mailto:info@ssourcing.cn" className="text-blue-600 hover:text-blue-700 text-sm">info@ssourcing.cn</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium mb-0.5">Phone / WhatsApp</p>
                      <a href="tel:+8620XXXXXXXX" className="text-blue-600 hover:text-blue-700 text-sm">+86 20 XXXX XXXX</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium mb-0.5">Business Hours (CST)</p>
                      <p className="text-slate-700 text-sm">Mon–Fri: 9:00 AM – 6:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium mb-0.5">Response Time</p>
                      <p className="text-slate-700 text-sm">Within 1 business day</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-600 rounded-xl p-6 text-white">
                <h4 className="font-bold text-lg mb-2">What Happens Next?</h4>
                <ol className="space-y-3 text-sm text-blue-100">
                  <li className="flex gap-2.5">
                    <span className="font-bold text-white flex-shrink-0">1.</span>
                    We review your inquiry and requirements
                  </li>
                  <li className="flex gap-2.5">
                    <span className="font-bold text-white flex-shrink-0">2.</span>
                    Our team contacts you within 1 business day
                  </li>
                  <li className="flex gap-2.5">
                    <span className="font-bold text-white flex-shrink-0">3.</span>
                    We provide a tailored sourcing proposal
                  </li>
                  <li className="flex gap-2.5">
                    <span className="font-bold text-white flex-shrink-0">4.</span>
                    You decide if you'd like to proceed — no obligation
                  </li>
                </ol>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8">
                <h3 className="font-bold text-slate-900 text-xl mb-6">Sourcing Inquiry Form</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Contact Details */}
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Your Details</p>
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
                          placeholder="John Smith"
                          className={`w-full px-4 py-2.5 rounded-lg border text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-400' : 'border-slate-300'}`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Your Company Ltd."
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                          Business Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className={`w-full px-4 py-2.5 rounded-lg border text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-400' : 'border-slate-300'}`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone / WhatsApp</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 555 000 0000"
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Country</label>
                        <input
                          type="text"
                          name="country"
                          value={form.country}
                          onChange={handleChange}
                          placeholder="United States"
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Product Details</p>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Product Category</label>
                        <select
                          name="productCategory"
                          value={form.productCategory}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                        >
                          <option value="">Select a category...</option>
                          {productCategories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                          Product Description <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="productDescription"
                          value={form.productDescription}
                          onChange={handleChange}
                          rows={3}
                          placeholder="Describe your product: materials, dimensions, specifications, certifications required, etc."
                          className={`w-full px-4 py-2.5 rounded-lg border text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${errors.productDescription ? 'border-red-400' : 'border-slate-300'}`}
                        />
                        {errors.productDescription && <p className="text-red-500 text-xs mt-1">{errors.productDescription}</p>}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">Target Quantity</label>
                          <input
                            type="text"
                            name="targetQuantity"
                            value={form.targetQuantity}
                            onChange={handleChange}
                            placeholder="e.g. 500 units"
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">Target Unit Price (USD)</label>
                          <input
                            type="text"
                            name="targetPrice"
                            value={form.targetPrice}
                            onChange={handleChange}
                            placeholder="e.g. $15–$20"
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Services Needed */}
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Services Needed</p>
                    <div className="flex flex-wrap gap-2">
                      {services.map((svc) => (
                        <button
                          key={svc}
                          type="button"
                          onClick={() => handleServiceToggle(svc)}
                          className={`px-3.5 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                            form.servicesNeeded.includes(svc)
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'bg-white text-slate-600 border-slate-300 hover:border-blue-400'
                          }`}
                        >
                          {svc}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timeline & Message */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Required Timeline</label>
                      <select
                        name="timeline"
                        value={form.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      >
                        <option value="">Select timeline...</option>
                        <option>ASAP (within 1 month)</option>
                        <option>1–3 months</option>
                        <option>3–6 months</option>
                        <option>6+ months</option>
                        <option>Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Additional Notes</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any other details, questions, or context that would help us understand your needs..."
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-lg text-base transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Submit Sourcing Inquiry
                  </button>
                  <p className="text-xs text-slate-500 text-center">
                    We respond within 1 business day. Your information is kept confidential.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
