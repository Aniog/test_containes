import { useState } from "react";
import { DataClient } from "@strikingly/sdk";
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config.jsx";
import { toast } from "sonner";
import { Send, Loader2, CheckCircle } from "lucide-react";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const initialValues = {
  name: "",
  email: "",
  company: "",
  phone: "",
  product_category: "",
  product_details: "",
  quantity: "",
  country: "",
  source_url: "",
};

export default function InquiryForm({ embedded = false }) {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const errs = {};
    if (!values.name.trim()) errs.name = "Name is required";
    if (!values.email.trim()) errs.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(values.email))
      errs.email = "Please enter a valid email";
    if (!values.product_details.trim())
      errs.product_details = "Please describe the product you want to source";
    return errs;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus("submitting");
    setErrors({});

    try {
      const result = await client
        .from("Inquiry")
        .insert({ data: values })
        .select()
        .single();

      const response = result?.data ?? result;
      const error = result?.error;

      if (error || response?.success === false) {
        const msg = Array.isArray(response?.errors)
          ? response.errors.join(", ")
          : error?.message || error?.details || error?.hint || JSON.stringify(error) || "Submission failed";
        throw new Error(msg);
      }

      setStatus("success");
      setValues(initialValues);
      toast.success("Inquiry submitted! We will respond within 24 hours.");
    } catch (err) {
      setStatus("error");
      toast.error(err?.message || JSON.stringify(err) || "Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Inquiry Received
        </h3>
        <p className="text-slate-600 mb-6">
          Thank you for reaching out. Our team will review your request and
          respond within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="inline-flex items-center rounded-lg bg-brand-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-900"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5"
      aria-busy={status === "submitting"}
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="inq-name" className="block text-sm font-medium text-slate-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="inq-name"
            name="name"
            type="text"
            value={values.name}
            onChange={onChange}
            className={`w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-800 focus:border-brand-800 ${
              errors.name ? "border-red-300" : "border-slate-300"
            }`}
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="text-xs text-red-600 mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="inq-email" className="block text-sm font-medium text-slate-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="inq-email"
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            className={`w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-800 focus:border-brand-800 ${
              errors.email ? "border-red-300" : "border-slate-300"
            }`}
            placeholder="john@company.com"
          />
          {errors.email && (
            <p className="text-xs text-red-600 mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="inq-company" className="block text-sm font-medium text-slate-700 mb-1">
            Company
          </label>
          <input
            id="inq-company"
            name="company"
            type="text"
            value={values.company}
            onChange={onChange}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-800 focus:border-brand-800"
            placeholder="Your company name"
          />
        </div>
        <div>
          <label htmlFor="inq-phone" className="block text-sm font-medium text-slate-700 mb-1">
            Phone / WhatsApp
          </label>
          <input
            id="inq-phone"
            name="phone"
            type="text"
            value={values.phone}
            onChange={onChange}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-800 focus:border-brand-800"
            placeholder="+1 555 000 0000"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="inq-category" className="block text-sm font-medium text-slate-700 mb-1">
            Product Category
          </label>
          <input
            id="inq-category"
            name="product_category"
            type="text"
            value={values.product_category}
            onChange={onChange}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-800 focus:border-brand-800"
            placeholder="e.g. Electronics, Packaging"
          />
        </div>
        <div>
          <label htmlFor="inq-quantity" className="block text-sm font-medium text-slate-700 mb-1">
            Estimated Quantity
          </label>
          <input
            id="inq-quantity"
            name="quantity"
            type="text"
            value={values.quantity}
            onChange={onChange}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-800 focus:border-brand-800"
            placeholder="e.g. 1,000 units"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="inq-country" className="block text-sm font-medium text-slate-700 mb-1">
            Destination Country
          </label>
          <input
            id="inq-country"
            name="country"
            type="text"
            value={values.country}
            onChange={onChange}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-800 focus:border-brand-800"
            placeholder="e.g. United States"
          />
        </div>
        <div>
          <label htmlFor="inq-url" className="block text-sm font-medium text-slate-700 mb-1">
            Reference URL
          </label>
          <input
            id="inq-url"
            name="source_url"
            type="url"
            value={values.source_url}
            onChange={onChange}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-800 focus:border-brand-800"
            placeholder="https://..."
          />
        </div>
      </div>

      <div>
        <label htmlFor="inq-details" className="block text-sm font-medium text-slate-700 mb-1">
          Product Details <span className="text-red-500">*</span>
        </label>
        <textarea
          id="inq-details"
          name="product_details"
          rows={4}
          value={values.product_details}
          onChange={onChange}
          className={`w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-800 focus:border-brand-800 ${
            errors.product_details ? "border-red-300" : "border-slate-300"
          }`}
          placeholder="Describe the product, specifications, target price, and any requirements..."
        />
        {errors.product_details && (
          <p className="text-xs text-red-600 mt-1">{errors.product_details}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-800 px-6 py-3 text-base font-semibold text-white hover:bg-blue-900 transition-colors disabled:opacity-60 w-full sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            {embedded ? "Get a Free Sourcing Quote" : "Submit Inquiry"}
          </>
        )}
      </button>
    </form>
  );
}
