import { useEffect, useRef, useState } from "react";
import { ImageHelper, DataClient } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config.jsx";
import PageHeader from "@/components/PageHeader";
import { Mail, Phone, MapPin, MessageCircle, CheckCircle2, AlertTriangle, Send } from "lucide-react";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const SERVICE_OPTIONS = [
  { value: "supplier_sourcing", label: "Supplier Sourcing" },
  { value: "factory_verification", label: "Factory Verification" },
  { value: "quality_inspection", label: "Quality Inspection" },
  { value: "production_follow_up", label: "Production Follow-up" },
  { value: "shipping_logistics", label: "Shipping & Logistics" },
  { value: "full_service", label: "Full Service (end-to-end)" },
];

const TIMELINE_OPTIONS = [
  { value: "urgent", label: "Urgent (this month)" },
  { value: "1_3_months", label: "1–3 months" },
  { value: "3_6_months", label: "3–6 months" },
  { value: "exploring", label: "Just exploring" },
];

const initialValues = {
  full_name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  service_type: "supplier_sourcing",
  product_category: "",
  product_description: "",
  estimated_quantity: "",
  target_budget: "",
  timeline: "1_3_months",
};

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(", ");
  }
  return error?.message || "Something went wrong. Please try again or email us directly.";
};

export default function Contact() {
  const containerRef = useRef(null);
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), []);

  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = (v) => {
    if (!v.full_name.trim()) return "Please enter your name.";
    if (!v.email.trim()) return "Please enter your business email.";
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return "Please enter a valid email address.";
    if (!v.product_description.trim() || v.product_description.trim().length < 10)
      return "Please describe your product or sourcing requirement (at least a sentence).";
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

    const { data: response, error: createError } = await client
      .from("SourcingInquiry")
      .insert({
        data: {
          ...values,
          status: "new",
        },
      })
      .select()
      .single();

    if (createError || response?.success === false) {
      setError(getErrorMessage(response, createError));
      setStatus("error");
      return;
    }

    setStatus("success");
    setValues(initialValues);
  };

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Get a Free Sourcing Quote"
        title="Tell us what you need to source"
        description="Send your product details and we will reply within 1–2 business days with feasibility, target factory profile, and indicative pricing."
        bgId="contact-page-bg"
        bgQuery="[contact-page-bg-title] [contact-page-bg-desc]"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Contact info */}
            <aside className="lg:col-span-4">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">Talk to our team</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Based in Yiwu and Shenzhen. Our team replies in English within
                one working day on weekdays.
              </p>

              <ul className="mt-8 space-y-5">
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-sky-50 text-sky-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="text-slate-900 font-medium">contact@ssourcingchina.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-sky-50 text-sky-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-sm text-slate-500">Phone / WhatsApp</p>
                    <p className="text-slate-900 font-medium">+86 138 0000 0000</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-sky-50 text-sky-600 shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-sm text-slate-500">WeChat ID</p>
                    <p className="text-slate-900 font-medium">ssourcing-cn</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-sky-50 text-sky-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-sm text-slate-500">Office</p>
                    <p className="text-slate-900 font-medium">Yiwu, Zhejiang Province, China</p>
                    <p className="text-sm text-slate-500 mt-0.5">Branch: Shenzhen, Guangdong</p>
                  </div>
                </li>
              </ul>

              <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-semibold text-slate-900">Working hours (China time, GMT+8)</h3>
                <p className="mt-2 text-sm text-slate-600">Mon – Fri: 09:00 – 18:30</p>
                <p className="text-sm text-slate-600">Sat: 10:00 – 14:00 (urgent QC only)</p>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-8">
              <form
                onSubmit={onSubmit}
                className="rounded-2xl border border-slate-200 bg-white p-6 md:p-10 shadow-sm"
                aria-busy={status === "submitting"}
              >
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  Free sourcing quote
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  All fields marked * are required. We treat your information as confidential and will not share it with factories until you approve.
                </p>

                <div className="mt-6 grid md:grid-cols-2 gap-5">
                  <Field label="Full name *" name="full_name" value={values.full_name} onChange={onChange} placeholder="Your full name" required />
                  <Field label="Company" name="company" value={values.company} onChange={onChange} placeholder="Company name" />
                  <Field label="Business email *" name="email" type="email" value={values.email} onChange={onChange} placeholder="you@company.com" required />
                  <Field label="Phone / WhatsApp" name="phone" value={values.phone} onChange={onChange} placeholder="+1 555 ..." />
                  <Field label="Country / Region" name="country" value={values.country} onChange={onChange} placeholder="United States, Germany, ..." />

                  <div>
                    <label className="block text-sm font-medium text-slate-800 mb-1.5">Service needed *</label>
                    <select
                      name="service_type"
                      value={values.service_type}
                      onChange={onChange}
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500"
                    >
                      {SERVICE_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                  </div>

                  <Field label="Product category" name="product_category" value={values.product_category} onChange={onChange} placeholder="e.g. Home & Kitchen, Electronics" />

                  <div>
                    <label className="block text-sm font-medium text-slate-800 mb-1.5">Timeline</label>
                    <select
                      name="timeline"
                      value={values.timeline}
                      onChange={onChange}
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500"
                    >
                      {TIMELINE_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                  </div>

                  <Field label="Estimated quantity" name="estimated_quantity" value={values.estimated_quantity} onChange={onChange} placeholder="e.g. 5,000 units" />
                  <Field label="Target unit price / budget" name="target_budget" value={values.target_budget} onChange={onChange} placeholder="e.g. USD 6 / unit" />
                </div>

                <div className="mt-5">
                  <label className="block text-sm font-medium text-slate-800 mb-1.5">
                    Product or sourcing requirements *
                  </label>
                  <textarea
                    name="product_description"
                    value={values.product_description}
                    onChange={onChange}
                    rows={6}
                    required
                    placeholder="Describe the product, key specs, materials, target market (e.g. EU/US), required certifications, and any reference links or images."
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500"
                  />
                </div>

                {status === "error" && error && (
                  <div className="mt-5 flex items-start gap-3 rounded-lg border border-rose-200 bg-rose-50 p-4 text-rose-800">
                    <AlertTriangle className="w-5 h-5 mt-0.5 shrink-0" />
                    <p className="text-sm">{error}</p>
                  </div>
                )}

                {status === "success" && (
                  <div className="mt-5 flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-emerald-800">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" />
                    <p className="text-sm">
                      Thank you. Your inquiry has been received. Our team will reply within 1–2 business days from a real email address (please check your spam folder if you don’t see it).
                    </p>
                  </div>
                )}

                <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <p className="text-xs text-slate-500">
                    By submitting, you agree to be contacted about your sourcing inquiry. We do not share your data with third parties without your approval.
                  </p>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex items-center justify-center rounded-lg bg-amber-500 hover:bg-amber-600 disabled:opacity-60 disabled:cursor-not-allowed text-slate-900 font-semibold px-6 py-3 transition-colors"
                  >
                    {status === "submitting" ? "Sending..." : (
                      <>
                        Send inquiry <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, value, onChange, type = "text", placeholder, required }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-slate-800 mb-1.5">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500"
      />
    </div>
  );
}
