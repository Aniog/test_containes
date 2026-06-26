import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitInquiry } from "@/api/inquiries";
import { INDUSTRIES } from "@/data/site";

const initialValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  industry: "",
  product: "",
  quantity: "",
  message: "",
};

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email.";
  }
  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = "Please share a few sentences about your project.";
  }
  return errors;
}

export default function InquiryForm({ sourcePage = "contact" }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverError, setServerError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setServerError("");
    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setStatus("submitting");
    try {
      await submitInquiry({ ...values, source_page: sourcePage });
      setStatus("success");
      setValues(initialValues);
    } catch (err) {
      setServerError(err.message || "Submission failed. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-emerald-900">
          Thank you — your inquiry has been received.
        </h3>
        <p className="mt-2 text-sm text-emerald-800">
          A sourcing manager will review your request and reply within one
          business day with an initial assessment and supplier shortlist.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center justify-center rounded-md border border-emerald-300 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-100"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  const isSubmitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid grid-cols-1 gap-5 sm:grid-cols-2"
      aria-busy={isSubmitting}
    >
      <Field
        label="Full name"
        name="name"
        value={values.name}
        onChange={handleChange}
        error={errors.name}
        required
        autoComplete="name"
      />
      <Field
        label="Company"
        name="company"
        value={values.company}
        onChange={handleChange}
        autoComplete="organization"
      />
      <Field
        label="Business email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        error={errors.email}
        required
        autoComplete="email"
      />
      <Field
        label="Phone (with country code)"
        name="phone"
        type="tel"
        value={values.phone}
        onChange={handleChange}
        autoComplete="tel"
      />
      <Field
        label="Country / region"
        name="country"
        value={values.country}
        onChange={handleChange}
        autoComplete="country-name"
      />
      <SelectField
        label="Product category"
        name="industry"
        value={values.industry}
        onChange={handleChange}
        options={INDUSTRIES}
        placeholder="Select a category"
      />
      <Field
        label="Product description"
        name="product"
        value={values.product}
        onChange={handleChange}
        placeholder="e.g. stainless steel cookware set"
      />
      <Field
        label="Target quantity"
        name="quantity"
        value={values.quantity}
        onChange={handleChange}
        placeholder="e.g. 1,000 units / first order"
      />
      <div className="sm:col-span-2">
        <TextareaField
          label="Project details"
          name="message"
          value={values.message}
          onChange={handleChange}
          error={errors.message}
          required
          placeholder="Tell us about specs, materials, target price, timeline, certifications needed, etc."
        />
      </div>

      <div className="sm:col-span-2 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-500">
          We respond within one business day. Your information is kept
          confidential.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-700 disabled:cursor-not-allowed disabled:bg-accent-400"
        >
          {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </button>
      </div>

      {serverError && (
        <div className="sm:col-span-2 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {serverError}
        </div>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  required,
  autoComplete,
  placeholder,
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-brand-900">
        {label}
        {required && <span className="ml-0.5 text-red-600">*</span>}
      </span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className={`rounded-md border bg-white px-3.5 py-2.5 text-sm text-brand-900 placeholder:text-ink-400 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 ${
          error ? "border-red-400" : "border-ink-300"
        }`}
      />
      {error && <span className="text-xs text-red-600">{error}</span>}
    </label>
  );
}

function SelectField({ label, name, value, onChange, options, placeholder }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-brand-900">{label}</span>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="rounded-md border border-ink-300 bg-white px-3.5 py-2.5 text-sm text-brand-900 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextareaField({
  label,
  name,
  value,
  onChange,
  error,
  required,
  placeholder,
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-brand-900">
        {label}
        {required && <span className="ml-0.5 text-red-600">*</span>}
      </span>
      <textarea
        name={name}
        rows={5}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={`rounded-md border bg-white px-3.5 py-2.5 text-sm text-brand-900 placeholder:text-ink-400 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 ${
          error ? "border-red-400" : "border-ink-300"
        }`}
      />
      {error && <span className="text-xs text-red-600">{error}</span>}
    </label>
  );
}