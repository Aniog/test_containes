import React, { useState, forwardRef } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import Button from "./Button";
import { QUOTE_INTERESTS } from "@/data/site";

const initial = {
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  product: "",
  category: "",
  quantity: "",
  target_price: "",
  details: "",
};

const InquiryForm = forwardRef(function InquiryForm(
  { compact = false, heading = "Get a Free Sourcing Quote", subheading = "Tell us about your project. We reply within one working day." },
  ref
) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [serverError, setServerError] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: "" }));
  };

  const validate = (v) => {
    const e = {};
    if (!v.name.trim()) e.name = "Please enter your name";
    if (!v.company.trim()) e.company = "Please enter your company";
    if (!v.email.trim()) e.email = "Please enter your email";
    else if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = "Please enter a valid email";
    if (!v.country.trim()) e.country = "Please enter your country";
    if (!v.product.trim()) e.product = "Please describe the product";
    if (!v.quantity.trim()) e.quantity = "Please enter an estimated quantity";
    return e;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    const v = validate(values);
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    setStatus("submitting");

    // Simulated submission. In production, this would POST to a backend or CRM.
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      setValues(initial);
    } catch (err) {
      setStatus("error");
      setServerError("Something went wrong. Please try again or email us directly.");
    }
  };

  if (status === "success") {
    return (
      <div
        ref={ref}
        id="quote"
        className="rounded-lg border border-line bg-white p-8 md:p-10 shadow-card"
      >
        <div className="flex items-start gap-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-trust-soft text-trust shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-ink-900">
              Thanks — your inquiry is in.
            </h3>
            <p className="mt-2 text-ink-700 leading-relaxed">
              A sourcing manager will review your project and reply within one
              working day, usually faster. If your project is urgent, email us
              directly at{" "}
              <a className="text-ink-900 font-semibold underline" href="mailto:hello@ssourcingchina.com">
                hello@ssourcingchina.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      ref={ref}
      id="quote"
      onSubmit={onSubmit}
      noValidate
      className={`rounded-lg border border-line bg-white ${compact ? "p-6 md:p-8" : "p-7 md:p-10"} shadow-card`}
    >
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-ink-900">{heading}</h3>
        <p className="mt-1.5 text-sm md:text-base text-ink-700">{subheading}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Full name" name="name" value={values.name} onChange={onChange} error={errors.name} required />
        <Field label="Company" name="company" value={values.company} onChange={onChange} error={errors.company} required />
        <Field label="Work email" name="email" type="email" value={values.email} onChange={onChange} error={errors.email} required />
        <Field label="Phone (optional)" name="phone" value={values.phone} onChange={onChange} />
        <Field label="Country / Region" name="country" value={values.country} onChange={onChange} error={errors.country} required />
        <SelectField
          label="Product category"
          name="category"
          value={values.category}
          onChange={onChange}
          options={QUOTE_INTERESTS}
          placeholder="Select a category"
        />
      </div>

      <div className="mt-4">
        <Field
          label="Product description"
          name="product"
          value={values.product}
          onChange={onChange}
          error={errors.product}
          required
          placeholder="e.g. stainless steel insulated water bottle, 500ml, with silicone sleeve"
          multiline
          rows={3}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <Field
          label="Estimated quantity"
          name="quantity"
          value={values.quantity}
          onChange={onChange}
          error={errors.quantity}
          required
          placeholder="e.g. 1,000 units for first order"
        />
        <Field
          label="Target unit price (optional)"
          name="target_price"
          value={values.target_price}
          onChange={onChange}
          placeholder="e.g. USD 3.50 / unit FOB Shanghai"
        />
      </div>

      <div className="mt-4">
        <Field
          label="Additional details (optional)"
          name="details"
          value={values.details}
          onChange={onChange}
          placeholder="Packaging, certifications, target delivery date, Incoterms preference, etc."
          multiline
          rows={3}
        />
      </div>

      {serverError && (
        <p role="alert" className="mt-4 text-sm text-accent">
          {serverError}
        </p>
      )}

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-xs text-ink-600 max-w-md">
          By submitting this form you agree to be contacted by SSourcing China about your project.
          We never share your information with third parties.
        </p>
        <Button
          type="submit"
          size="lg"
          disabled={status === "submitting"}
          className="sm:w-auto w-full"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              <Send className="w-4 h-4" /> Get a Free Sourcing Quote
            </>
          )}
        </Button>
      </div>
    </form>
  );
});

function Field({ label, name, value, onChange, error, required, type = "text", placeholder, multiline, rows }) {
  const id = `f-${name}`;
  const baseInput =
    "w-full rounded-md border bg-white px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-600/70 focus:outline-none focus:ring-2 focus:ring-ink-700 focus:border-ink-700 transition-colors";
  const borderClass = error ? "border-accent" : "border-line";
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold text-ink-900 mb-1.5">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows || 3}
          className={`${baseInput} ${borderClass} resize-y`}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-err` : undefined}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${baseInput} ${borderClass}`}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-err` : undefined}
        />
      )}
      {error && (
        <p id={`${id}-err`} className="mt-1 text-xs text-accent">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({ label, name, value, onChange, options, placeholder }) {
  const id = `f-${name}`;
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold text-ink-900 mb-1.5">
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-md border border-line bg-white px-3.5 py-2.5 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-ink-700 focus:border-ink-700"
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InquiryForm;