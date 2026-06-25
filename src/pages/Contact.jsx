import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle, Send } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

const productCategories = [
  'Electronics & Components',
  'Furniture & Home Goods',
  'Apparel & Textiles',
  'Hardware & Tools',
  'Packaging & Printing',
  'Plastics & Rubber',
  'Sporting & Outdoor',
  'Medical & Safety',
  'Other',
];

const services = [
  'Supplier Sourcing',
  'Factory Verification / Audit',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Full Project Management',
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
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus('submitting');
    // Simulate submission
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', company: '', country: '', product: '', category: '', service: '', quantity: '', budget: '', message: '' });
    }, 1200);
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-lg border text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a4f8a] bg-white transition-colors ${
      errors[field] ? 'border-red-400' : 'border-slate-300'
    }`;

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0d2b4e] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#e8621a] text-sm font-semibold uppercase tracking-wider">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">Get a Free Sourcing Quote</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Tell us about your sourcing project. We'll review your inquiry and respond within one business day with a tailored plan and quote.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-[#0d2b4e] mb-6">Contact Information</h2>
              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#1a4f8a]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0d2b4e] text-sm">Office Location</p>
                    <p className="text-gray-600 text-sm mt-0.5">Guangzhou, Guangdong, China</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#1a4f8a]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0d2b4e] text-sm">Email</p>
                    <a href="mailto:info@ssourcingchina.com" className="text-[#1a4f8a] text-sm mt-0.5 hover:underline">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#1a4f8a]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0d2b4e] text-sm">Phone / WeChat</p>
                    <a href="tel:+8620XXXXXXXX" className="text-[#1a4f8a] text-sm mt-0.5 hover:underline">
                      +86 20 XXXX XXXX
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#1a4f8a]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0d2b4e] text-sm">Response Time</p>
                    <p className="text-gray-600 text-sm mt-0.5">Within 1 business day</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f4f6f9] rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-[#0d2b4e] mb-4">What Happens Next?</h3>
                <ol className="space-y-3">
                  {[
                    'We review your inquiry within 1 business day',
                    'We send you a tailored sourcing plan and quote',
                    'We schedule a call to discuss your project',
                    'We begin sourcing once you approve the plan',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="w-5 h-5 bg-[#1a4f8a] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-6" />
                  <h2 className="text-2xl font-bold text-[#0d2b4e] mb-3">Inquiry Received!</h2>
                  <p className="text-gray-600 max-w-md">
                    Thank you for your sourcing inquiry. Our team will review your project details and get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#0d2b4e] mb-1.5">Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" className={inputClass('name')} />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0d2b4e] mb-1.5">Email Address *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@company.com" className={inputClass('email')} />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0d2b4e] mb-1.5">Company Name</label>
                      <input name="company" value={form.company} onChange={handleChange} placeholder="Your company" className={inputClass('company')} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0d2b4e] mb-1.5">Country</label>
                      <input name="country" value={form.country} onChange={handleChange} placeholder="Your country" className={inputClass('country')} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0d2b4e] mb-1.5">Product Description *</label>
                    <input name="product" value={form.product} onChange={handleChange} placeholder="e.g. Upholstered office chairs, 3-seater sofas, LED strip lights..." className={inputClass('product')} />
                    {errors.product && <p className="text-red-500 text-xs mt-1">{errors.product}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#0d2b4e] mb-1.5">Product Category</label>
                      <select name="category" value={form.category} onChange={handleChange} className={inputClass('category')}>
                        <option value="">Select a category</option>
                        {productCategories.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0d2b4e] mb-1.5">Service Required</label>
                      <select name="service" value={form.service} onChange={handleChange} className={inputClass('service')}>
                        <option value="">Select a service</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0d2b4e] mb-1.5">Estimated Quantity</label>
                      <input name="quantity" value={form.quantity} onChange={handleChange} placeholder="e.g. 500 units, 1 container" className={inputClass('quantity')} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0d2b4e] mb-1.5">Target Budget (USD)</label>
                      <input name="budget" value={form.budget} onChange={handleChange} placeholder="e.g. $5,000 – $10,000" className={inputClass('budget')} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0d2b4e] mb-1.5">Additional Details *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us more about your project — specifications, certifications needed, timeline, or any specific requirements..."
                      className={inputClass('message')}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#e8621a] hover:bg-[#c9521a] disabled:opacity-60 text-white font-semibold px-10 py-4 rounded-lg text-base transition-colors border-0"
                  >
                    <Send className="w-4 h-4" />
                    {status === 'submitting' ? 'Sending...' : 'Submit Sourcing Inquiry'}
                  </button>
                  <p className="text-gray-500 text-xs mt-2">
                    We respond within 1 business day. Your information is kept confidential.
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
