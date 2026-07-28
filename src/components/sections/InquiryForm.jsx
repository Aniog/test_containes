import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

const productCategories = [
  "Consumer Electronics",
  "Apparel & Textiles",
  "Home & Kitchen",
  "Industrial Equipment",
  "Beauty & Personal Care",
  "Furniture & Home Decor",
  "Sports & Outdoors",
  "Packaging & Printing",
  "Other",
];

const orderSizes = [
  "Sample / prototype only",
  "1 – 100 units",
  "100 – 1,000 units",
  "1,000 – 10,000 units",
  "10,000+ units",
];

const InquiryForm = ({ compact = false }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    country: "",
    email: "",
    phone: "",
    category: productCategories[0],
    orderSize: orderSizes[1],
    details: "",
  });

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // Frontend-only: simulate a successful submission.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`rounded-2xl border border-ink-200 bg-white p-8 ${compact ? "" : "shadow-card"}`}>
        <div className="flex items-start gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-success-600/10 text-success-600 shrink-0">
            <CheckCircle2 className="h-6 w-6" />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-ink-900">
              Thanks — your inquiry is in.
            </h3>
            <p className="mt-1 text-sm text-ink-700 leading-relaxed">
              An English-speaking project manager will review your requirements
              and email you back within one business day (CST). For urgent
              sourcing, mention it in the message and we will prioritize.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setForm({
                  name: "",
                  company: "",
                  country: "",
                  email: "",
                  phone: "",
                  category: productCategories[0],
                  orderSize: orderSizes[1],
                  details: "",
                });
              }}
              className="mt-4 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              Submit another inquiry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`rounded-2xl border border-ink-200 bg-white p-6 md:p-8 ${
        compact ? "" : "shadow-card"
      }`}
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="inq-name" className="label">
            Full name
          </label>
          <input
            id="inq-name"
            type="text"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Jane Smith"
            className="input"
          />
        </div>
        <div>
          <label htmlFor="inq-company" className="label">
            Company
          </label>
          <input
            id="inq-company"
            type="text"
            required
            value={form.company}
            onChange={update("company")}
            placeholder="Company name"
            className="input"
          />
        </div>
        <div>
          <label htmlFor="inq-country" className="label">
            Country / Region
          </label>
          <input
            id="inq-country"
            type="text"
            required
            value={form.country}
            onChange={update("country")}
            placeholder="e.g. United States"
            className="input"
          />
        </div>
        <div>
          <label htmlFor="inq-email" className="label">
            Work email
          </label>
          <input
            id="inq-email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="you@company.com"
            className="input"
          />
        </div>
        <div>
          <label htmlFor="inq-phone" className="label">
            Phone / WhatsApp (optional)
          </label>
          <input
            id="inq-phone"
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="+1 555 123 4567"
            className="input"
          />
        </div>
        <div>
          <label htmlFor="inq-category" className="label">
            Product category
          </label>
          <select
            id="inq-category"
            value={form.category}
            onChange={update("category")}
            className="input"
          >
            {productCategories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="inq-size" className="label">
            Estimated order size
          </label>
          <select
            id="inq-size"
            value={form.orderSize}
            onChange={update("orderSize")}
            className="input"
          >
            {orderSizes.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="inq-details" className="label">
            Tell us about your product
          </label>
          <textarea
            id="inq-details"
            rows={4}
            required
            value={form.details}
            onChange={update("details")}
            placeholder="What are you sourcing? Target price, materials, certifications, any reference photos or links — the more detail, the faster we can quote."
            className="input"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <p className="text-xs text-ink-500 max-w-md leading-relaxed">
          By submitting, you agree to be contacted by SSourcing China about your
          inquiry. We respond within one business day (CST).
        </p>
        <button type="submit" className="btn-primary w-full md:w-auto">
          Get a Free Sourcing Quote
          <Send className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
};

export default InquiryForm;
