import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '@/components/shared/PageHero';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const productCategories = [
  'Electronics', 'Textiles & Apparel', 'Home & Garden', 'Machinery & Parts',
  'Auto Parts', 'Consumer Goods', 'Packaging & Printing', 'Building Materials',
  'Medical & Health', 'Other'
];

const serviceOptions = [
  'Supplier Sourcing', 'Factory Verification', 'Quality Inspection',
  'Production Follow-up', 'Shipping Coordination', 'Full Service'
];

const timelineOptions = [
  'Urgent (within 2 weeks)', 'Standard (2-4 weeks)', 'Flexible (1-2 months)', 'Just exploring'
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    phone: '',
    product_category: '',
    product_description: '',
    estimated_quantity: '',
    target_price: '',
    timeline: '',
    services_needed: [],
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service) => {
    setForm((prev) => {
      const services = prev.services_needed || [];
      if (services.includes(service)) {
        return { ...prev, services_needed: services.filter((s) => s !== service) };
      }
      return { ...prev, services_needed: [...services, service] };
    });
  };

  const validate = () => {
    if (!form.name.trim()) return 'Name is required';
    if (!form.email.trim()) return 'Email is required';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return 'Please enter a valid email';
    if (!form.product_description.trim()) return 'Please describe the product you want to source';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    const err = validate();
    if (err) {
      setErrorMsg(err);
      return;
    }

    setStatus('submitting');

    try {
      const { DataClient } = await import('@strikingly/sdk');
      const { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } = await import('@/config.jsx');
      const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

      const { error: createError } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            name: form.name,
            email: form.email,
            company: form.company,
            country: form.country,
            phone: form.phone,
            product_category: form.product_category,
            product_description: form.product_description,
            estimated_quantity: form.estimated_quantity,
            target_price: form.target_price,
            timeline: form.timeline,
            services_needed: form.services_needed,
            message: form.message,
          }
        });

      if (createError) throw createError;

      setStatus('success');
      setForm({
        name: '', email: '', company: '', country: '', phone: '',
        product_category: '', product_description: '', estimated_quantity: '',
        target_price: '', timeline: '', services_needed: [], message: '',
      });
    } catch (err) {
      console.error('Form submission error:', err);
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div>
      <PageHero
        title="Get a Free Sourcing Quote"
        subtitle="Tell us about your sourcing needs and our team will respond within 24 hours with a tailored proposal."
        breadcrumb="Contact"
      />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-900">Email</div>
                    <a href="mailto:info@ssourcingchina.com" className="text-sm text-blue-600 hover:text-blue-700">info@ssourcingchina.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-900">Phone</div>
                    <a href="tel:+8613800138000" className="text-sm text-blue-600 hover:text-blue-700">+86 138 0013 8000</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-900">Office</div>
                    <div className="text-sm text-slate-600">Guangzhou, Guangdong, China</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-900">Response Time</div>
                    <div className="text-sm text-slate-600">Within 24 hours on business days</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-100">
                <h3 className="font-semibold text-slate-900 mb-3">What happens next?</h3>
                <ol className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">1</span>
                    We review your requirements
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">2</span>
                    A sourcing specialist responds within 24 hours
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">3</span>
                    We propose a sourcing plan and quote
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">4</span>
                    You decide — no obligation
                  </li>
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Thank You!</h3>
                  <p className="text-slate-600 mb-6">
                    Your sourcing inquiry has been submitted. Our team will review your requirements and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@company.com"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">Company Name</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-1.5">Country</label>
                      <input
                        id="country"
                        name="country"
                        type="text"
                        value={form.country}
                        onChange={handleChange}
                        placeholder="Your country"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 8900"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="product_category" className="block text-sm font-medium text-slate-700 mb-1.5">Product Category</label>
                      <select
                        id="product_category"
                        name="product_category"
                        value={form.product_category}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      >
                        <option value="">Select a category</option>
                        {productCategories.map((cat) => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="product_description" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Product Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="product_description"
                      name="product_description"
                      value={form.product_description}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Describe the product you want to source, including specifications, materials, and any special requirements."
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="estimated_quantity" className="block text-sm font-medium text-slate-700 mb-1.5">Estimated Quantity</label>
                      <input
                        id="estimated_quantity"
                        name="estimated_quantity"
                        type="text"
                        value={form.estimated_quantity}
                        onChange={handleChange}
                        placeholder="e.g., 1,000 units"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="target_price" className="block text-sm font-medium text-slate-700 mb-1.5">Target Price (per unit)</label>
                      <input
                        id="target_price"
                        name="target_price"
                        type="text"
                        value={form.target_price}
                        onChange={handleChange}
                        placeholder="e.g., $5-10"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-1.5">Timeline</label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={form.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      >
                        <option value="">Select timeline</option>
                        {timelineOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3">Services Needed</label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((svc) => (
                        <button
                          key={svc}
                          type="button"
                          onClick={() => handleServiceToggle(svc)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                            form.services_needed.includes(svc)
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'bg-white text-slate-600 border-slate-300 hover:border-blue-300 hover:text-blue-600'
                          }`}
                        >
                          {svc}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">Additional Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any additional requirements, questions, or information you'd like to share."
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
                    />
                  </div>

                  {errorMsg && (
                    <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 px-4 py-3 rounded-lg border border-red-200">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-colors"
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Inquiry
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-400">
                    By submitting this form, you agree to our privacy policy. We will not share your information with third parties.
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
