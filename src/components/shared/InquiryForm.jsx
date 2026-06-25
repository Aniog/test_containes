import React, { useState } from "react";
import { DataClient } from "@strikingly/sdk";
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "../../config.jsx";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const productCategories = [
  "Consumer Electronics",
  "Home & Kitchen",
  "Apparel & Textiles",
  "Furniture",
  "Industrial & Machinery",
  "Beauty & Personal Care",
  "Toys & Baby",
  "Sports & Outdoors",
  "Packaging & Printing",
  "Other",
];

const serviceOptions = [
  "Supplier Sourcing",
  "Factory Verification",
  "Sample Management",
  "Quality Inspection",
  "Production Follow-up",
  "Shipping & Logistics",
  "Private Label / OEM",
  "Amazon FBA Prep",
];

const timelineOptions = [
  "Within 2 weeks",
  "Within 1 month",
  "1-3 months",
  "Flexible / Just exploring",
];

const initialValues = {
  full_name: "",
  company_name: "",
  email: "",
  phone: "",
  country: "",
  product_category: "",
  product_description: "",
  target_quantity: "",
  target_budget: "",
  services_needed: [],
  timeline: "",
};

const labelClass = "block text-sm font-semibold text-[#0B2545] mb-1.5";
const inputClass =
  "w-full px-4 py-2.5 rounded-md border border-[#D9E2EC] bg-white text-[#0B2545] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#1F4E79] focus:border-transparent transition-colors";

const InquiryForm = ({ compact = false }) => {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const toggleService = (service) => {
    setValues((prev) => {
      const exists = prev.services_needed.includes(service);
      return {
        ...prev,
        services_needed: exists
          ? prev.services_needed.filter((s) => s !== service)
          : [...prev.services_needed, service],
      };
    });
  };

  const validate = () => {
    if (!values.full_name.trim()) return "Please enter your full name.";
    if (!values.email.trim()) return "Please enter your email address.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return "Please enter a valid email address.";
    if (!values.product_description.trim())
      return "Please describe the product you would like to source.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      setStatus("error");
      return;
    }

    setStatus("submitting");

    const payload = {
      full_name: values.full_name.trim(),
      company_name: values.company_name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      country: values.country.trim(),
      product_category: values.product_category,
      product_description: values.product_description.trim(),
      target_quantity: values.target_quantity.trim(),
      target_budget: values.target_budget.trim(),
      services_needed: values.services_needed,
      timeline: values.timeline,
      status: "new",
    };

    const { data: response, error: insertError } = await client
      .from("SourcingInquiry")
      .insert({ data: payload })
      .select()
      .single();

    if (insertError || response?.success === false) {
      const message = Array.isArray(response?.errors) && response.errors.length > 0
        ? response.errors.join(", ")
        : insertError?.message || "Unable to send your inquiry. Please try again.";
      setError(message);
      setStatus("error");
      return;
    }

    setStatus("success");
    setValues(initialValues);
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border border-[#D9E2EC] bg-white p-8 md:p-10 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#0F766E]/10 text-[#0F766E] mb-4">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-2xl font-bold text-[#0B2545] mb-2">Thank you. Your request has been received.</h3>
        <p className="text-[#475569] max-w-xl mx-auto">
          A member of our sourcing team will review your requirements and reply within one business day with next steps and questions.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center px-5 py-2.5 rounded-md bg-[#0B2545] hover:bg-[#13315C] text-white text-sm font-semibold"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-[#D9E2EC] bg-white p-6 md:p-8 shadow-sm"
      noValidate
    >
      <div className={`grid grid-cols-1 ${compact ? "md:grid-cols-2" : "md:grid-cols-2"} gap-5`}>
        <div>
          <label htmlFor="full_name" className={labelClass}>Full name <span className="text-[#C8102E]">*</span></label>
          <input id="full_name" name="full_name" type="text" required value={values.full_name} onChange={handleChange} className={inputClass} placeholder="Jane Smith" />
        </div>
        <div>
          <label htmlFor="company_name" className={labelClass}>Company</label>
          <input id="company_name" name="company_name" type="text" value={values.company_name} onChange={handleChange} className={inputClass} placeholder="Acme Trading Ltd." />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Business email <span className="text-[#C8102E]">*</span></label>
          <input id="email" name="email" type="email" required value={values.email} onChange={handleChange} className={inputClass} placeholder="jane@company.com" />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone / WhatsApp / WeChat</label>
          <input id="phone" name="phone" type="tel" value={values.phone} onChange={handleChange} className={inputClass} placeholder="+1 555 123 4567" />
        </div>
        <div>
          <label htmlFor="country" className={labelClass}>Country</label>
          <input id="country" name="country" type="text" value={values.country} onChange={handleChange} className={inputClass} placeholder="United States" />
        </div>
        <div>
          <label htmlFor="product_category" className={labelClass}>Product category</label>
          <select id="product_category" name="product_category" value={values.product_category} onChange={handleChange} className={inputClass}>
            <option value="">Select a category</option>
            {productCategories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="target_quantity" className={labelClass}>Target quantity</label>
          <input id="target_quantity" name="target_quantity" type="text" value={values.target_quantity} onChange={handleChange} className={inputClass} placeholder="e.g. 500 pcs / 1 x 20ft container" />
        </div>
        <div>
          <label htmlFor="target_budget" className={labelClass}>Target budget (USD)</label>
          <input id="target_budget" name="target_budget" type="text" value={values.target_budget} onChange={handleChange} className={inputClass} placeholder="e.g. $3-5 per unit FOB" />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="product_description" className={labelClass}>
          Product description <span className="text-[#C8102E]">*</span>
        </label>
        <textarea
          id="product_description"
          name="product_description"
          required
          rows={5}
          value={values.product_description}
          onChange={handleChange}
          className={inputClass}
          placeholder="Describe the product, specifications, materials, packaging requirements, and reference links if available."
        />
      </div>

      <div className="mt-5">
        <span className={labelClass}>Services you are interested in</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {serviceOptions.map((service) => {
            const checked = values.services_needed.includes(service);
            return (
              <label
                key={service}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-md border cursor-pointer text-sm ${
                  checked
                    ? "border-[#1F4E79] bg-[#EEF2F7] text-[#0B2545]"
                    : "border-[#D9E2EC] bg-white text-[#475569] hover:border-[#1F4E79]"
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleService(service)}
                  className="w-4 h-4 accent-[#1F4E79]"
                />
                <span>{service}</span>
              </label>
            );
          })}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="timeline" className={labelClass}>Timeline</label>
        <select id="timeline" name="timeline" value={values.timeline} onChange={handleChange} className={inputClass}>
          <option value="">Select a timeline</option>
          {timelineOptions.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {status === "error" && error && (
        <div className="mt-5 flex items-start gap-2.5 p-3.5 rounded-md bg-[#C8102E]/8 border border-[#C8102E]/30 text-[#A30D26]">
          <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
          <p className="text-sm">{error}</p>
        </div>
      )}

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-xs text-[#64748B]">
          We typically reply within one business day. Your information is kept confidential.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#C8102E] hover:bg-[#A30D26] disabled:opacity-70 disabled:cursor-not-allowed text-white text-sm font-semibold transition-colors"
        >
          {status === "submitting" && <Loader2 className="w-4 h-4 animate-spin" />}
          {status === "submitting" ? "Sending..." : "Get a Free Sourcing Quote"}
        </button>
      </div>
    </form>
  );
};

export default InquiryForm;
