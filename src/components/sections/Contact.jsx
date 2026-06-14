import React, { useState } from "react";
import { DataClient } from "@strikingly/sdk";
import {
  STRK_PROJECT_URL,
  STRK_PROJECT_ANON_KEY,
} from "@/config.jsx";
import { Mail, MapPin, Phone, Clock, Check, ArrowUpRight } from "lucide-react";
import { BRAND, PRODUCTS } from "@/data/site";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const PRODUCT_OPTIONS = [
  ...PRODUCTS.map((p) => ({ value: p.id, label: p.name })),
  { value: "other", label: "Other / not sure yet" },
];

const TIMELINE_OPTIONS = [
  { value: "immediate", label: "Immediate" },
  { value: "1-3-months", label: "1 – 3 months" },
  { value: "3-6-months", label: "3 – 6 months" },
  { value: "6-12-months", label: "6 – 12 months" },
  { value: "researching", label: "Researching only" },
];

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(", ");
  }
  return error?.message || "Submission failed. Please try again.";
};

const initialValues = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  productInterest: "double-folding-machine",
  material: "",
  thickness: "",
  timeline: "1-3-months",
  message: "",
};

const Eyebrow = ({ children }) => (
  <p className="inline-flex items-center gap-3 text-xs font-medium tracking-eyebrow uppercase text-brand-brass">
    <span className="block w-8 h-px bg-brand-brass" />
    {children}
  </p>
);

const Field = ({ label, hint, children, required }) => (
  <label className="block">
    <span className="flex items-baseline justify-between">
      <span className="text-xs font-medium tracking-eyebrow uppercase text-brand-ink">
        {label}
        {required && <span className="text-brand-brass"> *</span>}
      </span>
      {hint && (
        <span className="text-[11px] text-brand-muted normal-case tracking-normal">
          {hint}
        </span>
      )}
    </span>
    <div className="mt-2">{children}</div>
  </label>
);

const inputClass =
  "w-full bg-white border border-brand-line rounded-lg px-4 py-3 text-sm text-brand-ink placeholder:text-brand-muted/70 focus:outline-none focus:border-brand-ink focus:ring-2 focus:ring-brand-brass/20 transition-colors";

const Contact = () => {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = (v) => {
    if (!v.fullName.trim()) return "Please enter your full name.";
    if (!v.email.trim()) return "Please enter your email address.";
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return "Please use a valid email address.";
    if (!v.message.trim()) return "Please describe your application.";
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const err = validate(values);
    if (err) {
      setError(err);
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      // 1) ensure buyer exists in the system (skipped — @strikingly/sdk doesn't expose User in this build)
      // let linkedUser = null;
      // try {
      //   linkedUser = await User.upsert({
      //     email: values.email,
      //     name: values.fullName,
      //     phone: values.phone || undefined,
      //     role: "guest",
      //   });
      // } catch (userErr) {
      //   console.warn("User upsert skipped:", userErr?.message);
      // }

      // 2) build the inquiry payload (schema fields nested under `data`)
      const payload = {
        data: {
          fullName: values.fullName,
          company: values.company || undefined,
          email: values.email,
          phone: values.phone || undefined,
          country: values.country || undefined,
          productInterest: values.productInterest,
          material: values.material || undefined,
          thickness: values.thickness || undefined,
          timeline: values.timeline,
          message: values.message,
        },
      };

      // if (linkedUser?.id) {
      //   payload.data.user_id = linkedUser.id;
      // }

      const { data: response, error: submitError } = await client
        .from("Machinery Inquiry")
        .insert(payload)
        .select()
        .single();

      if (submitError || response?.success === false) {
        throw new Error(getErrorMessage(response, submitError));
      }

      setStatus("success");
      setValues(initialValues);
    } catch (caught) {
      console.error("Inquiry submission failed:", caught);
      setError(caught?.message || "Submission failed. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="bg-brand-mist"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: copy + contact details */}
          <div className="lg:col-span-5">
            <Eyebrow>Talk to engineering</Eyebrow>
            <h2 className="mt-5 font-display font-semibold text-brand-ink text-3xl md:text-4xl lg:text-5xl leading-[1.1]">
              Send us your sample
              <span className="text-brand-brass"> part. We'll fold it.</span>
            </h2>
            <p className="mt-5 text-brand-muted text-base lg:text-lg leading-relaxed max-w-md">
              Tell us about the part, the material, and the tolerance. An
              ARTITECT application engineer will reply within one business
              day with a recommended machine class and a bench-test plan.
            </p>

            <ul className="mt-10 space-y-5 text-sm text-brand-ink">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border border-brand-line text-brand-brass">
                  <Mail className="w-4 h-4" />
                </span>
                <div>
                  <div className="text-[11px] tracking-eyebrow uppercase text-brand-muted">
                    Email
                  </div>
                  <a
                    href={`mailto:${BRAND.contact.email}`}
                    className="font-medium hover:text-brand-brass transition-colors"
                  >
                    {BRAND.contact.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border border-brand-line text-brand-brass">
                  <Phone className="w-4 h-4" />
                </span>
                <div>
                  <div className="text-[11px] tracking-eyebrow uppercase text-brand-muted">
                    Phone
                  </div>
                  <span className="font-medium">{BRAND.contact.phone}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border border-brand-line text-brand-brass">
                  <MapPin className="w-4 h-4" />
                </span>
                <div>
                  <div className="text-[11px] tracking-eyebrow uppercase text-brand-muted">
                    HQ
                  </div>
                  <span className="font-medium">{BRAND.contact.address}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border border-brand-line text-brand-brass">
                  <Clock className="w-4 h-4" />
                </span>
                <div>
                  <div className="text-[11px] tracking-eyebrow uppercase text-brand-muted">
                    Hours
                  </div>
                  <span className="font-medium">{BRAND.contact.hours}</span>
                </div>
              </li>
            </ul>

            <a
              href={`mailto:${BRAND.contact.email}`}
              className="mt-10 hidden lg:inline-flex items-center gap-2 text-sm font-medium text-brand-ink hover:text-brand-brass transition-colors"
            >
              Or just email the engineering team
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              noValidate
              className="bg-white border border-brand-line rounded-3xl p-7 lg:p-10 shadow-card"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full name" required>
                  <input
                    name="fullName"
                    type="text"
                    value={values.fullName}
                    onChange={onChange}
                    required
                    placeholder="Jane Cooper"
                    className={inputClass}
                  />
                </Field>
                <Field label="Company">
                  <input
                    name="company"
                    type="text"
                    value={values.company}
                    onChange={onChange}
                    placeholder="Acme Fabrication"
                    className={inputClass}
                  />
                </Field>
                <Field label="Email" required>
                  <input
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={onChange}
                    required
                    placeholder="jane@acme.com"
                    className={inputClass}
                  />
                </Field>
                <Field label="Phone">
                  <input
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={onChange}
                    placeholder="+1 415 555 0142"
                    className={inputClass}
                  />
                </Field>
                <Field label="Country / region">
                  <input
                    name="country"
                    type="text"
                    value={values.country}
                    onChange={onChange}
                    placeholder="United States"
                    className={inputClass}
                  />
                </Field>
                <Field label="Product interest">
                  <select
                    name="productInterest"
                    value={values.productInterest}
                    onChange={onChange}
                    className={inputClass}
                  >
                    {PRODUCT_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Primary material">
                  <input
                    name="material"
                    type="text"
                    value={values.material}
                    onChange={onChange}
                    placeholder="Mild steel · stainless · aluminium"
                    className={inputClass}
                  />
                </Field>
                <Field label="Typical thickness">
                  <input
                    name="thickness"
                    type="text"
                    value={values.thickness}
                    onChange={onChange}
                    placeholder="e.g. 1.5 mm"
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Procurement timeline">
                  <div className="flex flex-wrap gap-2">
                    {TIMELINE_OPTIONS.map((t) => {
                      const selected = values.timeline === t.value;
                      return (
                        <button
                          type="button"
                          key={t.value}
                          onClick={() =>
                            setValues((v) => ({ ...v, timeline: t.value }))
                          }
                          className={[
                            "rounded-full px-4 py-2 text-xs font-medium border transition-colors",
                            selected
                              ? "bg-brand-ink text-white border-brand-ink"
                              : "bg-white text-brand-ink border-brand-line hover:border-brand-ink",
                          ].join(" ")}
                        >
                          {t.label}
                        </button>
                      );
                    })}
                  </div>
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Tell us about the part" required>
                  <textarea
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={onChange}
                    required
                    placeholder="Material, thickness, fold angles, tolerances, annual volume…"
                    className={`${inputClass} resize-none`}
                  />
                </Field>
              </div>

              {status === "error" && error && (
                <div
                  role="alert"
                  className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                  {error}
                </div>
              )}

              {status === "success" && (
                <div
                  role="status"
                  className="mt-5 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800 flex items-start gap-3"
                >
                  <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-600 text-white">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>
                    Thanks — your inquiry is in. An application engineer
                    will reply within one business day.
                  </span>
                </div>
              )}

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-xs text-brand-muted max-w-sm">
                  By submitting, you agree to be contacted by an ARTITECT
                  engineering representative about your application.
                </p>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center gap-2 bg-brand-ink text-white hover:bg-brand-steel disabled:opacity-60 disabled:cursor-not-allowed rounded-full px-7 py-3.5 text-sm font-semibold transition-colors"
                >
                  {status === "submitting"
                    ? "Sending…"
                    : "Send inquiry"}
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
