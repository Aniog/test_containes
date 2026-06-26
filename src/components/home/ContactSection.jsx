import React, { useState } from "react";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const PRODUCT_OPTIONS = [
  "Double Folding Machine",
  "Double Folder",
  "Sheet Metal Folder",
  "Sheet Metal Folding Machine",
  "Metal Folder",
  "Metal Folder Machine",
  "Metal Folding Machine",
  "Not sure yet — please advise",
];

const initialValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  product: "",
  message: "",
};

export default function ContactSection() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const validate = (v) => {
    const e = {};
    if (!v.name.trim()) e.name = "Please enter your full name.";
    if (!v.company.trim()) e.company = "Please enter your company.";
    if (!v.email.trim()) e.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = "That email looks invalid.";
    if (!v.product) e.product = "Please choose a machine.";
    if (!v.message.trim() || v.message.trim().length < 10)
      e.message = "Please describe your application (10+ characters).";
    return e;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const eMap = validate(values);
    setErrors(eMap);
    if (Object.keys(eMap).length > 0) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setValues(initialValues);
    }, 900);
  };

  return (
    <section
      id="contact"
      className="bg-paper py-24 md:py-32 border-t border-mist"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <span className="eyebrow">Start a conversation</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] mt-6 text-ink">
              Talk to an
              <br />
              application engineer.
            </h2>
            <p className="mt-6 text-base md:text-lg text-smoke leading-relaxed">
              Tell us about your material, tolerances, and throughput. We will
              respond within one business day with a written recommendation and
              indicative pricing for the machine that fits your shop floor.
            </p>

            <dl className="mt-12 space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-brass-deep shrink-0 mt-1" />
                <div>
                  <dt className="text-xs uppercase tracking-[0.3em] text-smoke">
                    Headquarters
                  </dt>
                  <dd className="mt-1 text-sm text-ink leading-relaxed">
                    No. 88 Precision Avenue, Hangzhou 310018, China
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-brass-deep shrink-0 mt-1" />
                <div>
                  <dt className="text-xs uppercase tracking-[0.3em] text-smoke">
                    Sales &amp; Service
                  </dt>
                  <dd className="mt-1 text-sm text-ink">+86 571 8888 0123</dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-brass-deep shrink-0 mt-1" />
                <div>
                  <dt className="text-xs uppercase tracking-[0.3em] text-smoke">
                    Email
                  </dt>
                  <dd className="mt-1 text-sm text-ink">
                    sales@artitect-machinery.com
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-5 w-5 text-brass-deep shrink-0 mt-1" />
                <div>
                  <dt className="text-xs uppercase tracking-[0.3em] text-smoke">
                    Support
                  </dt>
                  <dd className="mt-1 text-sm text-ink leading-relaxed">
                    24 / 7 remote diagnostics &amp; 48-hour spare-parts dispatch
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              noValidate
              className="bg-sand border border-mist p-8 md:p-10"
              aria-busy={status === "submitting"}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <Field
                  label="Full name"
                  name="name"
                  value={values.name}
                  onChange={onChange}
                  error={errors.name}
                  autoComplete="name"
                  required
                />
                <Field
                  label="Company"
                  name="company"
                  value={values.company}
                  onChange={onChange}
                  error={errors.company}
                  autoComplete="organization"
                  required
                />
                <Field
                  label="Work email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={onChange}
                  error={errors.email}
                  autoComplete="email"
                  required
                />
                <Field
                  label="Phone (optional)"
                  name="phone"
                  type="tel"
                  value={values.phone}
                  onChange={onChange}
                  error={errors.phone}
                  autoComplete="tel"
                />
                <Field
                  label="Country"
                  name="country"
                  value={values.country}
                  onChange={onChange}
                  error={errors.country}
                  autoComplete="country-name"
                />
                <SelectField
                  label="Machine of interest"
                  name="product"
                  value={values.product}
                  onChange={onChange}
                  error={errors.product}
                  options={PRODUCT_OPTIONS}
                  required
                />
              </div>

              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="text-xs uppercase tracking-[0.3em] text-smoke"
                >
                  Tell us about your application <span className="text-brass-deep">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={onChange}
                  required
                  aria-invalid={!!errors.message}
                  className={cn(
                    "mt-2 w-full bg-paper border px-4 py-3 text-sm text-ink placeholder:text-smoke/70 focus:outline-none focus:border-brass-deep transition-colors",
                    errors.message ? "border-red-400" : "border-mist"
                  )}
                  placeholder="Material, thickness, tolerances, annual volume, current machine…"
                />
                {errors.message && (
                  <p className="mt-2 text-xs text-red-600">{errors.message}</p>
                )}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-xs text-smoke">
                  By submitting, you agree to our processing your enquiry per
                  our privacy notice.
                </p>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center gap-3 bg-ink text-paper px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] hover:bg-brass-deep hover:text-ink disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                >
                  {status === "submitting" ? "Sending…" : "Send enquiry"}
                  <Send className="h-4 w-4" />
                </button>
              </div>

              {status === "success" && (
                <div
                  role="status"
                  className="mt-6 border-l-2 border-brass bg-paper p-4 text-sm text-ink"
                >
                  Thank you — your enquiry has been received. An ARTITECT
                  application engineer will reply within one business day.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, error, type = "text", required, ...rest }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-xs uppercase tracking-[0.3em] text-smoke"
      >
        {label} {required && <span className="text-brass-deep">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        aria-invalid={!!error}
        className={cn(
          "mt-2 w-full bg-paper border px-4 py-3 text-sm text-ink placeholder:text-smoke/70 focus:outline-none focus:border-brass-deep transition-colors",
          error ? "border-red-400" : "border-mist"
        )}
        {...rest}
      />
      {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
    </div>
  );
}

function SelectField({ label, name, value, onChange, error, options, required }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-xs uppercase tracking-[0.3em] text-smoke"
      >
        {label} {required && <span className="text-brass-deep">*</span>}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        aria-invalid={!!error}
        className={cn(
          "mt-2 w-full bg-paper border px-4 py-3 text-sm text-ink focus:outline-none focus:border-brass-deep transition-colors appearance-none",
          error ? "border-red-400" : "border-mist"
        )}
      >
        <option value="">Select a machine…</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
    </div>
  );
}
