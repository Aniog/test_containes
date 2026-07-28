import { useState } from 'react';
import { Mail, MapPin, Globe, Clock, Send, CheckCircle } from 'lucide-react';

const productCategories = [
  'Electronics & Components',
  'Furniture & Home Goods',
  'Apparel & Textiles',
  'Machinery & Equipment',
  'Packaging & Printing',
  'Toys & Sporting Goods',
  'Health & Beauty',
  'Food & Agriculture',
  'Other',
];

const services = [
  'Supplier Sourcing',
  'Factory Audit',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Compliance Support',
  'Full-Service Sourcing',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', country: '',
    category: '', service: '', quantity: '', budget: '', description: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3 block">Contact</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get a Free Sourcing Quote</h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            Tell us about your sourcing project. We'll review your requirements and respond within 24 business hours.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
              <div className="flex flex-col gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm mb-1">Email</p>
                    <a href="mailto:info@ssourcing.cn" className="text-blue-600 hover:text-blue-700 text-sm transition-colors">
                      info@ssourcing.cn
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm mb-1">Location</p>
                    <p className="text-slate-600 text-sm">Guangzhou, China</p>
                    <p className="text-slate-500 text-xs mt-1">Operations in Shenzhen, Yiwu & Ningbo</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm mb-1">Response Time</p>
                    <p className="text-slate-600 text-sm">Within 24 business hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm mb-1">Languages</p>
                    <p className="text-slate-600 text-sm">English · Français · Español · Deutsch</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h4 className="font-semibold text-slate-900 mb-3 text-sm">What Happens After You Submit?</h4>
                <ol className="flex flex-col gap-2">
                  {[
                    'We review your inquiry within 24 hours',
                    'We send you an initial assessment and proposed scope',
                    'We schedule a call to discuss your project',
                    'We provide a detailed service proposal and quote',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
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
              {submitted ? (
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-12 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Inquiry Received</h3>
                  <p className="text-slate-600 leading-relaxed max-w-md mx-auto">
                    Thank you for reaching out to SSourcing China. Our team will review your request and get back to you within 24 business hours.
                  </p>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Sourcing Inquiry Form</h3>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                        <input type="text" name="name" required value={form.name} onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Company Name</label>
                        <input type="text" name="company" value={form.company} onChange={handleChange}
                          placeholder="Your Company Ltd."
                          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
                        <input type="email" name="email" required value={form.email} onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone / WhatsApp</label>
                        <input type="text" name="phone" value={form.phone} onChange={handleChange}
                          placeholder="+1 555 000 0000"
                          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Country *</label>
                        <input type="text" name="country" required value={form.country} onChange={handleChange}
                          placeholder="United States"
                          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Service Needed</label>
                        <select name="service" value={form.service} onChange={handleChange}
                          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                          <option value="">Select a service</option>
                          {services.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Product Category *</label>
                        <select name="category" required value={form.category} onChange={handleChange}
                          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                          <option value="">Select a category</option>
                          {productCategories.map((c) => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Estimated Quantity</label>
                        <input type="text" name="quantity" value={form.quantity} onChange={handleChange}
                          placeholder="e.g. 500 units"
                          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Target Budget (USD)</label>
                      <input type="text" name="budget" value={form.budget} onChange={handleChange}
                        placeholder="e.g. $5,000 – $10,000"
                        className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Product Description & Requirements *</label>
                      <textarea name="description" required rows={5} value={form.description} onChange={handleChange}
                        placeholder="Describe the product you need to source — specifications, materials, certifications required, target price, timeline, and any other relevant details."
                        className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" />
                    </div>
                    <button type="submit"
                      className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm mt-2">
                      <Send className="w-4 h-4" />
                      Submit Sourcing Inquiry
                    </button>
                    <p className="text-slate-400 text-xs text-center">
                      We respond within 24 business hours. Your information is kept strictly confidential.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
