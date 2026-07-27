import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const productCategories = [
  'Electronics & Components',
  'Furniture & Home Goods',
  'Apparel & Textiles',
  'Industrial Machinery',
  'Packaging & Printing',
  'Health & Beauty',
  'Toys & Games',
  'Automotive Parts',
  'Other',
];

const budgetRanges = [
  'Under $5,000',
  '$5,000 – $20,000',
  '$20,000 – $100,000',
  'Over $100,000',
  'Not sure yet',
];

export default function HomeInquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    category: '',
    budget: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Inquiry submitted:', form);
    setSubmitted(true);
  };

  return (
    <section id="quote" className="section-padding bg-brand-navy">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: copy */}
          <div>
            <span className="text-blue-300 text-sm font-semibold uppercase tracking-wider">
              Start Sourcing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Get a Free Sourcing Quote
            </h2>
            <p className="text-blue-200 text-lg leading-relaxed mb-8">
              Tell us what you need. We'll review your requirements and respond within 24 hours
              with a proposed approach and fee estimate — no obligation.
            </p>

            <ul className="flex flex-col gap-3">
              {[
                'Free initial consultation',
                'Response within 24 hours',
                'No commitment required',
                'Confidential and professional',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-blue-200">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">Inquiry Received</h3>
                <p className="text-brand-mid">
                  Thank you for reaching out. We'll review your requirements and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-1.5">
                      Full Name <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full border border-brand-border rounded-lg px-3.5 py-2.5 text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-1.5">
                      Email Address <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full border border-brand-border rounded-lg px-3.5 py-2.5 text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-1.5">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className="w-full border border-brand-border rounded-lg px-3.5 py-2.5 text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-1.5">Country</label>
                    <input
                      type="text"
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                      placeholder="Your country"
                      className="w-full border border-brand-border rounded-lg px-3.5 py-2.5 text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-1.5">
                      Product Category <span className="text-brand-red">*</span>
                    </label>
                    <select
                      name="category"
                      required
                      value={form.category}
                      onChange={handleChange}
                      className="w-full border border-brand-border rounded-lg px-3.5 py-2.5 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white"
                    >
                      <option value="">Select category</option>
                      {productCategories.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-1.5">Estimated Budget</label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full border border-brand-border rounded-lg px-3.5 py-2.5 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white"
                    >
                      <option value="">Select range</option>
                      {budgetRanges.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-1.5">
                    Describe Your Requirements <span className="text-brand-red">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about the product you want to source, quantity, quality requirements, and any other relevant details..."
                    className="w-full border border-brand-border rounded-lg px-3.5 py-2.5 text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2 py-3"
                >
                  <Send className="w-4 h-4" />
                  Submit Sourcing Inquiry
                </button>

                <p className="text-xs text-gray-400 text-center">
                  We respect your privacy. Your information will not be shared with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
