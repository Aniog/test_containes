import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const productCategories = [
  'Electronics & Components',
  'Furniture & Home Goods',
  'Apparel & Textiles',
  'Industrial Machinery',
  'Packaging & Printing',
  'Toys & Sporting Goods',
  'Health & Beauty',
  'Automotive Parts',
  'Other',
];

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', company: '', email: '', country: '',
    category: '', quantity: '', description: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Inquiry submitted:', form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="section-padding bg-brand-blue-light" id="inquiry">
        <div className="section-container">
          <div className="max-w-xl mx-auto text-center bg-white rounded-2xl p-10 border border-brand-border shadow-sm">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-brand-navy font-bold text-2xl mb-3">Inquiry Received</h3>
            <p className="text-brand-muted leading-relaxed">
              Thank you for reaching out. Our sourcing team will review your request and get back to you within 1 business day.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-brand-blue-light" id="inquiry">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Get Started</p>
            <h2 className="section-heading mb-4">Get a Free Sourcing Quote</h2>
            <p className="section-subheading max-w-xl mx-auto">
              Tell us what you need and we'll respond within 1 business day with a tailored sourcing plan and cost estimate.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-10 border border-brand-border shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-brand-text text-sm font-semibold mb-1.5">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-brand-text text-sm font-semibold mb-1.5">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Your Company Ltd."
                  className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-brand-text text-sm font-semibold mb-1.5">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-brand-text text-sm font-semibold mb-1.5">Country *</label>
                <input
                  type="text"
                  name="country"
                  required
                  value={form.country}
                  onChange={handleChange}
                  placeholder="United States"
                  className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-brand-text text-sm font-semibold mb-1.5">Product Category *</label>
                <select
                  name="category"
                  required
                  value={form.category}
                  onChange={handleChange}
                  className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition bg-white"
                >
                  <option value="">Select a category</option>
                  {productCategories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-brand-text text-sm font-semibold mb-1.5">Estimated Quantity</label>
                <input
                  type="text"
                  name="quantity"
                  value={form.quantity}
                  onChange={handleChange}
                  placeholder="e.g. 500 units / month"
                  className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-brand-text text-sm font-semibold mb-1.5">Product Description & Requirements *</label>
              <textarea
                name="description"
                required
                value={form.description}
                onChange={handleChange}
                rows={4}
                placeholder="Describe your product, specifications, target price, and any specific requirements..."
                className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition resize-none"
              />
            </div>

            <button type="submit" className="btn-primary w-full justify-center text-base py-4">
              <Send className="w-4 h-4" />
              Submit Sourcing Request
            </button>

            <p className="text-brand-muted text-xs text-center mt-4">
              We respond within 1 business day. Your information is kept confidential.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
