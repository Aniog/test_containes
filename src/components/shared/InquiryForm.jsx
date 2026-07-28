import { useState } from "react";
import { Send, CheckCircle2, Mail, Phone, MessageSquare } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const initial = {
  name: "",
  company: "",
  email: "",
  country: "",
  productType: "",
  quantity: "",
  message: "",
};

export default function InquiryForm({
  variant = "default",
  title = "Get a Free Sourcing Quote",
  subtitle = "Tell us about your product and target specs. We reply within one business day with next steps and a clear plan.",
  id = "inquiry-form",
}) {
  const [form, setForm] = useState(initial);
  const [submitted, setSubmitted] = useState(false);

  const isDark = variant === "dark";

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    // Frontend-only: simulate a successful submission.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        id={id}
        className={cn(
          "rounded-lg border p-8 md:p-10",
          isDark
            ? "border-white/15 bg-white/5 text-white"
            : "border-line bg-surface text-ink shadow-card"
        )}
      >
        <div className="flex items-start gap-4">
          <div
            className={cn(
              "flex h-12 w-12 shrink-0 items-center justify-center rounded-full",
              isDark ? "bg-accent/20 text-accent" : "bg-accent-100 text-accent"
            )}
          >
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <div>
            <h3
              className={cn(
                "text-xl font-semibold",
                isDark ? "text-white" : "text-primary"
              )}
            >
              Inquiry received
            </h3>
            <p
              className={cn(
                "mt-2 text-base leading-relaxed",
                isDark ? "text-white/80" : "text-muted"
              )}
            >
              Thank you, {form.name || "we have your details"}. A sourcing
              specialist will review your brief and reply within one business
              day. For urgent requests, write to us at{" "}
              <span className="font-medium">hello@ssourcing.cn</span>.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      id={id}
      className={cn(
        "rounded-lg border p-8 md:p-10",
        isDark
          ? "border-white/15 bg-white/5 text-white"
          : "border-line bg-surface text-ink shadow-card"
      )}
    >
      <div className="mb-6">
        <h3
          className={cn(
            "text-2xl md:text-3xl font-bold tracking-tight",
            isDark ? "text-white" : "text-primary"
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "mt-2 text-base leading-relaxed",
            isDark ? "text-white/80" : "text-muted"
          )}
        >
          {subtitle}
        </p>
      </div>

      <form onSubmit={onSubmit} className="grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <Field
            label="Your name"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Jane Cooper"
            isDark={isDark}
          />
          <Field
            label="Company"
            value={form.company}
            onChange={update("company")}
            placeholder="Acme Imports Ltd."
            isDark={isDark}
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Field
            label="Work email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="you@company.com"
            isDark={isDark}
          />
          <Field
            label="Country / market"
            value={form.country}
            onChange={update("country")}
            placeholder="United States"
            isDark={isDark}
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Field
            label="Product type"
            value={form.productType}
            onChange={update("productType")}
            placeholder="e.g. Bluetooth speakers, cotton tote bags"
            isDark={isDark}
          />
          <Field
            label="Estimated quantity"
            value={form.quantity}
            onChange={update("quantity")}
            placeholder="e.g. 1,000 units / first order"
            isDark={isDark}
          />
        </div>
        <TextareaField
          label="Project details"
          value={form.message}
          onChange={update("message")}
          placeholder="Target specs, target price, sample requirements, timeline, certification needs…"
          isDark={isDark}
        />

        <div className="mt-2 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p
            className={cn(
              "text-xs",
              isDark ? "text-white/60" : "text-muted"
            )}
          >
            We respond within one business day. No spam, no sharing of your
            brief.
          </p>
          <Button type="submit" variant="accent" size="md">
            Send inquiry
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>

      <div
        className={cn(
          "mt-6 grid gap-3 border-t pt-6 text-sm sm:grid-cols-3",
          isDark ? "border-white/10" : "border-line"
        )}
      >
        <ContactLine
          icon={<Mail className="h-4 w-4" />}
          label="Email"
          value="hello@ssourcing.cn"
          isDark={isDark}
        />
        <ContactLine
          icon={<MessageSquare className="h-4 w-4" />}
          label="WhatsApp / WeChat"
          value="+86 138 0000 0000"
          isDark={isDark}
        />
        <ContactLine
          icon={<Phone className="h-4 w-4" />}
          label="Office hours"
          value="Mon–Fri, 09:00–18:00 CST"
          isDark={isDark}
        />
      </div>
    </div>
  );
}

function Field({
  label,
  type = "text",
  required,
  value,
  onChange,
  placeholder,
  isDark,
}) {
  return (
    <label className="block">
      <span
        className={cn(
          "mb-1.5 block text-sm font-medium",
          isDark ? "text-white/90" : "text-ink"
        )}
      >
        {label} {required && <span className="text-accent">*</span>}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          "w-full rounded-md border bg-transparent px-4 py-3 text-base placeholder:text-muted focus:outline-none focus:ring-2",
          isDark
            ? "border-white/20 text-white placeholder:text-white/40 focus:border-white/50 focus:ring-white/10"
            : "border-line text-ink focus:border-primary focus:ring-primary/20"
        )}
      />
    </label>
  );
}

function TextareaField({ label, value, onChange, placeholder, isDark }) {
  return (
    <label className="block">
      <span
        className={cn(
          "mb-1.5 block text-sm font-medium",
          isDark ? "text-white/90" : "text-ink"
        )}
      >
        {label}
      </span>
      <textarea
        rows={5}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          "w-full resize-y rounded-md border bg-transparent px-4 py-3 text-base placeholder:text-muted focus:outline-none focus:ring-2",
          isDark
            ? "border-white/20 text-white placeholder:text-white/40 focus:border-white/50 focus:ring-white/10"
            : "border-line text-ink focus:border-primary focus:ring-primary/20"
        )}
      />
    </label>
  );
}

function ContactLine({ icon, label, value, isDark }) {
  return (
    <div className="flex items-start gap-2.5">
      <span
        className={cn(
          "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
          isDark ? "bg-white/10 text-white" : "bg-primary-100 text-primary"
        )}
      >
        {icon}
      </span>
      <div className="min-w-0">
        <div
          className={cn(
            "text-xs font-medium uppercase tracking-wider",
            isDark ? "text-white/60" : "text-muted"
          )}
        >
          {label}
        </div>
        <div
          className={cn(
            "truncate text-sm font-medium",
            isDark ? "text-white" : "text-ink"
          )}
        >
          {value}
        </div>
      </div>
    </div>
  );
}
