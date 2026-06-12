import { useState } from "react";
import { DataClient } from "@strikingly/sdk";
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config.jsx";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const PRODUCT_CATEGORIES = [
  { value: "consumer_electronics", label: "Consumer Electronics" },
  { value: "home_kitchen", label: "Home &amp; Kitchen" },
  { value: "apparel_textiles", label: "Apparel &amp; Textiles" },
  { value: "promotional_gifts", label: "Promotional Gifts" },
  { value: "industrial_machinery", label: "Industrial Machinery" },
  { value: "beauty_personal_care", label: "Beauty &amp; Personal Care" },
  { value: "outdoor_sports", label: "Outdoor &amp; Sports" },
  { value: "furniture_decor", label: "Furniture &amp; Decor" },
  { value: "other", label: "Other / Not sure yet" },
];

const SERVICES_OPTIONS = [
  { value: "supplier_sourcing", label: "Supplier Sourcing" },
  { value: "factory_audit", label: "Factory Audit" },
  { value: "sample_handling", label: "Sample Handling" },
  { value: "production_follow_up", label: "Production Follow-up" },
  { value: "quality_inspection", label: "Quality Inspection" },
  { value: "shipping_logistics", label: "Shipping &amp; Logistics" },
  { value: "private_label_oem", label: "Private Label / OEM" },
];

const TIMELINE_OPTIONS = [
  { value: "urgent_under_30_days", label: "Urgent (under 30 days)" },
  { value: "1_to_3_months", label: "1 – 3 months" },
  { value: "3_to_6_months", label: "3 – 6 months" },
  { value: "exploring", label: "Just exploring" },
];

const initialValues = {
  name: "",
  email: "",
  company: "",
  country: "",
  phone: "",
  product_category: "",
  product_description: "",
  target_quantity: "",
  target_budget: "",
  services_needed: [],
  timeline: "",
};

const inputCls =
  "w-full rounded-lg border border-border-soft bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors";
const labelCls = "block text-sm font-medium text-brand mb-1.5";

const InquiryForm = ({ compact = false }) => {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const toggleService = (val) => {
    setValues((v) => {
      const has = v.services_needed.includes(val);
      return {
        ...v,
        services_needed: has
          ? v.services_needed.filter((s) => s !== val)
          : [...v.services_needed, val],
      };
    });
  };

  const validate = (v) => {
    if (!v.name.trim()) return "Please enter your name.";
    if (!v.email.trim()) return "Please enter your email.";
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return "Please enter a valid email.";
    if (!v.product_description.trim())
      return "Please describe the product you want to source.";
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const err = validate(values);
    if (err) {
      setError(err);
      setStatus("error");
      return;
    }

    setStatus("submitting");

    const payload = {
      ...values,
      status: "new",
    };

    // Strip empty optional strings to keep payload clean
    Object.keys(payload).forEach((key) => {
      if (payload[key] === "") delete payload[key];
    });
    if (Array.isArray(payload.services_needed) && payload.services_needed.length === 0) {
      delete payload.services_needed;
    }

    const { data: response, error: createError } = await client
      .from("SourcingInquiry")
      .insert({ data: payload })
      .select()
      .single();

    if (createError || response?.success === false) {
      const msg =
        (Array.isArray(response?.errors) && response.errors.join(", ")) ||
        createError?.message ||
        "We couldn't submit your inquiry. Please try again.";
      setError(msg);
      setStatus("error");
      return;
    }

    setStatus("success");
    setValues(initialValues);
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border border-border-soft bg-white p-8 md:p-10 text-center">
        <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-brand">
          Thanks — your inquiry has been received.
        </h3>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          A sourcing manager from SSourcing China will review your request and
          reply within one business day with next steps and a free initial
          quote.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-white text-brand border border-border-soft font-semibold px-5 py-2.5 text-sm hover:border-accent hover:text-accent transition-colors"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border border-border-soft bg-white p-6 md:p-8 shadow-sm"
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        <div>
          <label htmlFor="name" className={labelCls}>Full name *</label>
          <input id="name" name="name" type="text" value={values.name} onChange={onChange} required placeholder="e.g. Sarah Johnson" className={inputCls} />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>Business email *</label>
          <input id="email" name="email" type="email" value={values.email} onChange={onChange} required placeholder="you@company.com" className={inputCls} />
        </div>
        <div>
          <label htmlFor="company" className={labelCls}>Company</label>
          <input id="company" name="company" type="text" value={values.company} onChange={onChange} placeholder="Your company or brand" className={inputCls} />
        </div>
        <div>
          <label htmlFor="country" className={labelCls}>Country</label>
          <input id="country" name="country" type="text" value={values.country} onChange={onChange} placeholder="e.g. United States" className={inputCls} />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>Phone / WhatsApp</label>
          <input id="phone" name="phone" type="text" value={values.phone} onChange={onChange} placeholder="Optional" className={inputCls} />
        </div>
        <div>
          <label htmlFor="product_category" className={labelCls}>Product category</label>
          <select id="product_category" name="product_category" value={values.product_category} onChange={onChange} className={inputCls}>
            <option value="">Select a category</option>
            {PRODUCT_CATEGORIES.map((c) => (
              <option key={c.value} value={c.value} dangerouslySetInnerHTML={{ __html: c.label }} />
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="product_description" className={labelCls}>
            Product description *
          </label>
          <textarea
            id="product_description"
            name="product_description"
            value={values.product_description}
            onChange={onChange}
            required
            rows={compact ? 4 : 5}
            placeholder="Describe the product, target specs, materials, certifications, packaging, target market…"
            className={inputCls}
          />
        </div>

        <div>
          <label htmlFor="target_quantity" className={labelCls}>Target quantity</label>
          <input id="target_quantity" name="target_quantity" type="text" value={values.target_quantity} onChange={onChange} placeholder="e.g. 5,000 units / month" className={inputCls} />
        </div>
        <div>
          <label htmlFor="target_budget" className={labelCls}>Target unit cost / budget</label>
          <input id="target_budget" name="target_budget" type="text" value={values.target_budget} onChange={onChange} placeholder="e.g. USD 8 – 10 / unit FOB" className={inputCls} />
        </div>

        <div className="md:col-span-2">
          <label className={labelCls}>Services needed</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {SERVICES_OPTIONS.map((opt) => {
              const active = values.services_needed.includes(opt.value);
              return (
                <label
                  key={opt.value}
                  className={`flex items-center gap-2.5 rounded-lg border px-3 py-2.5 cursor-pointer text-sm transition-colors ${
                    active
                      ? "border-accent bg-accent/5 text-brand"
                      : "border-border-soft bg-white text-slate-700 hover:border-accent/50"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={active}
                    onChange={() => toggleService(opt.value)}
                    className="h-4 w-4 rounded border-slate-300 text-accent focus:ring-accent/30"
                  />
                  <span dangerouslySetInnerHTML={{ __html: opt.label }} />
                </label>
              );
            })}
          </div>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="timeline" className={labelCls}>Timeline</label>
          <select id="timeline" name="timeline" value={values.timeline} onChange={onChange} className={inputCls}>
            <option value="">Select a timeline</option>
            {TIMELINE_OPTIONS.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </div>
      </div>

      {status === "error" && error && (
        <div className="mt-5 flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 px-3.5 py-3 text-sm text-red-700">
          <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between">
        <p className="text-xs text-muted">
          We respond within one business day. Your information stays
          confidential.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent text-white font-semibold px-6 py-3 text-sm hover:bg-accent-600 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Get a Free Sourcing Quote
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default InquiryForm;
