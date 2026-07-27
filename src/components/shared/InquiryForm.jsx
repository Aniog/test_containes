import { useState } from "react";
import { DataClient } from "@strikingly/sdk";
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config.jsx";
import { Send, CheckCircle, Loader2 } from "lucide-react";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const categories = [
  "Electronics",
  "Textiles & Apparel",
  "Machinery & Tools",
  "Home & Garden",
  "Packaging",
  "Consumer Goods",
  "Industrial",
  "Other",
];

const budgets = [
  "Under $5,000",
  "$5,000 - $20,000",
  "$20,000 - $100,000",
  "$100,000+",
  "Not sure yet",
];

export default function InquiryForm({ compact = false }) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    country: "",
    product_category: "",
    budget_range: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = (v) => {
    if (!v.name.trim()) return "Name is required";
    if (!v.email.trim()) return "Email is required";
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return "Please enter a valid email";
    if (!v.message.trim()) return "Please describe your sourcing needs";
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const err = validate(values);
    if (err) {
      setError(err);
      return;
    }
    setStatus("submitting");

    try {
      const { data: response, error: submitError } = await client
        .from("Inquiry")
        .insert({ data: values })
        .select()
        .single();

      if (submitError || response?.success === false) {
        const msg =
          Array.isArray(response?.errors) && response.errors.length > 0
            ? response.errors.join(", ")
            : submitError?.message || "Submission failed";
        setError(msg);
        setStatus("error");
        return;
      }

      setStatus("success");
      setValues({
        name: "",
        email: "",
        company: "",
        phone: "",
        country: "",
        product_category: "",
        budget_range: "",
        message: "",
      });
    } catch (err) {
      setError(err.message || "Something went wrong");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-12 h-12 text-teal-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-navy-900 mb-2">Thank You!</h3>
        <p className="text-slate-600">
          We have received your inquiry. Our team will review it and get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" aria-busy={status === "submitting"}>
      <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={onChange}
            className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none text-sm"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none text-sm"
            placeholder="john@company.com"
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
            value={values.company}
            onChange={onChange}
            className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none text-sm"
            placeholder="Your Company Ltd."
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={onChange}
            className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none text-sm"
            placeholder="+1 234 567 8900"
          />
        </div>
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-1">
            Country
          </label>
          <input
            id="country"
            name="country"
            type="text"
            value={values.country}
            onChange={onChange}
            className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none text-sm"
            placeholder="United States"
          />
        </div>
        <div>
          <label htmlFor="product_category" className="block text-sm font-medium text-slate-700 mb-1">
            Product Category
          </label>
          <select
            id="product_category"
            name="product_category"
            value={values.product_category}
            onChange={onChange}
            className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none text-sm bg-white"
          >
            <option value="">Select category</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className={compact ? "" : "md:col-span-2"}>
          <label htmlFor="budget_range" className="block text-sm font-medium text-slate-700 mb-1">
            Estimated Budget
          </label>
          <select
            id="budget_range"
            name="budget_range"
            value={values.budget_range}
            onChange={onChange}
            className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none text-sm bg-white"
          >
            <option value="">Select budget range</option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
          Sourcing Requirements <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={compact ? 3 : 5}
          value={values.message}
          onChange={onChange}
          className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none text-sm"
          placeholder="Describe the products you need, quantities, target price, and any specific requirements..."
        />
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-600 bg-red-50 px-4 py-2 rounded-md">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full md:w-auto bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white font-semibold px-8 py-3 rounded-md transition-colors flex items-center justify-center gap-2"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Get a Free Sourcing Quote
          </>
        )}
      </button>
    </form>
  );
}
