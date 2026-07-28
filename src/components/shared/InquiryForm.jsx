import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { submitSourcingInquiry } from "@/api/sourcingInquiries";
import { cn } from "@/lib/utils";

const initialValues = {
  name: "",
  company: "",
  email: "",
  country: "",
  productType: "",
  quantity: "",
  message: "",
};

function validate(values) {
  if (!values.name.trim()) return "Please tell us your name.";
  if (!values.email.trim()) return "Please share a work email so we can reply.";
  if (!/^\S+@\S+\.\S+$/.test(values.email.trim()))
    return "That email address does not look right.";
  return null;
}

export default function InquiryForm({
  variant = "light",
  title = "Get a Free Sourcing Quote",
  subtitle = "Tell us about your product and target specs. We reply within one business day with next steps and a clear plan.",
}) {
  const location = useLocation();
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const isDark = variant === "dark";

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const validation = validate(values);
    if (validation) {
      setError(validation);
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      await submitSourcingInquiry({
        values,
        sourcePage: location.pathname,
      });
      setStatus("success");
      setValues(initialValues);
    } catch (err) {
      setError(err?.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        id="inquiry-form"
        className={cn(
          "rounded-lg border p-8 shadow-card md:p-10",
          isDark
            ? "border-white/15 bg-white/5 text-white"
            : "border-line bg-surface text-ink"
        )}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10 text-success">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3
          className={cn(
            "mt-5 text-2xl font-bold tracking-tight",
            isDark ? "text-white" : "text-primary"
          )}
        >
          Inquiry received
        </h3>
        <p
          className={cn(
            "mt-3 text-base leading-relaxed",
            isDark ? "text-white/80" : "text-muted"
          )}
        >
          Thanks for the brief. A senior sourcing specialist will review it and
          reply to your inbox within one business day. In the meantime, feel
          free to reach us on WhatsApp for anything urgent.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-accent underline-offset-4 hover:underline"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      id="inquiry-form"
      onSubmit={onSubmit}
      noValidate
      className={cn(
        "rounded-lg border p-6 shadow-card md:p-8",
        isDark
          ? "border-white/15 bg-white/5 text-white"
          : "border-line bg-surface text-ink"
      )}
      aria-busy={status === "submitting"}
    >
      {(title || subtitle) && (
        <div className="mb-6">
          {title && (
            <h3
              className={cn(
                "text-xl font-bold tracking-tight md:text-2xl",
                isDark ? "text-white" : "text-primary"
              )}
            >
              {title}
            </h3>
          )}
          {subtitle && (
            <p
              className={cn(
                "mt-2 text-sm leading-relaxed",
                isDark ? "text-white/75" : "text-muted"
              )}
            >
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Your name"
          name="name"
          value={values.name}
          onChange={onChange}
          required
          variant={variant}
        />
        <Field
          label="Company"
          name="company"
          value={values.company}
          onChange={onChange}
          variant={variant}
        />
        <Field
          label="Work email"
          name="email"
          type="email"
          value={values.email}
          onChange={onChange}
          required
          variant={variant}
        />
        <Field
          label="Country / market"
          name="country"
          value={values.country}
          onChange={onChange}
          variant={variant}
        />
        <Field
          label="Product type"
          name="productType"
          value={values.productType}
          onChange={onChange}
          variant={variant}
        />
        <Field
          label="Estimated quantity"
          name="quantity"
          value={values.quantity}
          onChange={onChange}
          variant={variant}
        />
      </div>

      <div className="mt-4">
        <Field
          label="Project details"
          name="message"
          value={values.message}
          onChange={onChange}
          textarea
          placeholder="Target specs, certifications, timeline, and any other context that helps us reply usefully."
          variant={variant}
        />
      </div>

      {error && status === "error" && (
        <div
          role="alert"
          className={cn(
            "mt-5 flex items-start gap-2.5 rounded-md border px-4 py-3 text-sm",
            isDark
              ? "border-red-400/30 bg-red-500/10 text-red-100"
              : "border-red-200 bg-red-50 text-red-700"
          )}
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p
          className={cn(
            "text-xs",
            isDark ? "text-white/60" : "text-muted"
          )}
        >
          We respond within one business day. No spam, no sharing of your brief.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className={cn(
            "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-colors",
            "bg-accent text-white shadow-card hover:bg-accent/90",
            "disabled:cursor-not-allowed disabled:opacity-70"
          )}
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send inquiry
            </>
          )}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
  textarea,
  placeholder,
  variant = "light",
}) {
  const isDark = variant === "dark";
  const id = `inquiry-${name}`;
  const baseClass = cn(
    "mt-1.5 w-full rounded-md border bg-transparent px-3.5 py-2.5 text-sm transition-colors placeholder:text-current/40 focus:outline-none focus:ring-2",
    isDark
      ? "border-white/20 text-white placeholder:text-white/40 focus:border-accent focus:ring-accent/30"
      : "border-line text-ink placeholder:text-muted focus:border-accent focus:ring-accent/20"
  );
  const labelClass = cn(
    "text-sm font-medium",
    isDark ? "text-white" : "text-ink"
  );

  return (
    <label htmlFor={id} className="block">
      <span className={labelClass}>
        {label}
        {required && <span className="ml-0.5 text-accent">*</span>}
      </span>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={5}
          className={baseClass}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className={baseClass}
        />
      )}
    </label>
  );
}
