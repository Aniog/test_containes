import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function QuoteForm({ compact = false }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    product: "",
    quantity: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 text-center">
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-slate-900 mb-2">Quote request received</h3>
        <p className="text-slate-600">
          Thank you. Our sourcing team will review your request and contact you within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-slate-200"
    >
      {!compact && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-1">Request a free sourcing quote</h3>
          <p className="text-slate-600 text-sm">Tell us what you need. No commitment required.</p>
        </div>
      )}

      <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none"
          />
        </div>
        <div>
          <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-1">
            Product category
          </label>
          <input
            id="product"
            name="product"
            type="text"
            required
            value={form.product}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none"
          />
        </div>
      </div>

      {!compact && (
        <>
          <div className="mt-4">
            <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-1">
              Estimated quantity
            </label>
            <input
              id="quantity"
              name="quantity"
              type="text"
              value={form.quantity}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
              Project details
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none resize-none"
            />
          </div>
        </>
      )}

      <button
        type="submit"
        className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-6 py-3 text-white font-semibold hover:bg-blue-800 transition-colors"
      >
        <Send className="w-4 h-4" />
        Get a Free Sourcing Quote
      </button>
      <p className="mt-3 text-xs text-slate-500 text-center">
        We respect your privacy and do not share your information.
      </p>
    </form>
  );
}
