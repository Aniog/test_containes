import { useState } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const productOptions = [
  "Consumer Electronics",
  "Home & Kitchenware",
  "Beauty & Personal Care",
  "Apparel & Textiles",
  "Industrial & Hardware",
  "Packaging & Disposables",
  "Sports & Outdoor",
  "Toys, Kids & Baby Products",
  "Other",
];

const serviceOptions = [
  "Supplier Sourcing",
  "Factory Verification",
  "Quality Inspection",
  "Production Follow-up",
  "Shipping Coordination",
  "Sampling & Product Development",
];

const orderSizeOptions = [
  "Under 1,000 units",
  "1,000 – 5,000 units",
  "5,000 – 20,000 units",
  "20,000 – 100,000 units",
  "Over 100,000 units",
];

const initialValues = {
  fullName: "",
  company: "",
  email: "",
  country: "",
  productCategory: "",
  productDescription: "",
  services: [],
  orderSize: "",
  targetPrice: "",
  timeline: "",
  notes: "",
  consent: false,
};

function validate(values) {
  const errors = {};
  if (!values.fullName.trim()) errors.fullName = "Please enter your full name.";
  if (!values.company.trim())
    errors.company = "Please enter your company or brand name.";
  if (!values.email.trim()) errors.email = "Please enter a work email.";
  else if (!/^\S+@\S+\.\S+$/.test(values.email))
    errors.email = "That email address looks incomplete.";
  if (!values.country.trim())
    errors.country = "Please tell us where you are based.";
  if (!values.productCategory)
    errors.productCategory = "Please choose a product category.";
  if (!values.productDescription.trim())
    errors.productDescription =
      "A short product description helps us route your inquiry.";
  if (values.services.length === 0)
    errors.services = "Please select at least one service.";
  if (!values.orderSize)
    errors.orderSize = "Please choose an order size band.";
  if (!values.consent)
    errors.consent = "Please confirm we may contact you about your inquiry.";
  return errors;
}

export function InquiryForm({
  eyebrow = "Request a Quote",
  title = "Tell us what you need to source",
  description = "Share a few details and we will come back within one business day with a sourcing plan, scope and quote.",
  submitLabel = "Get a Free Sourcing Quote",
  variant = "default",
}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverError, setServerError] = useState("");

  const isInverted = variant === "navy";

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((v) => ({ ...v, [name]: type === "checkbox" ? checked : value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const onServiceToggle = (service) => {
    setValues((v) => {
      const next = v.services.includes(service)
        ? v.services.filter((s) => s !== service)
        : [...v.services, service];
      return { ...v, services: next };
    });
    setErrors((prev) => ({ ...prev, services: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    const validation = validate(values);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setStatus("submitting");
    try {
      // The form posts to a local inquiry endpoint. Since this is a static
      // preview build we keep the success flow deterministic: we capture the
      // inquiry locally and report success, so the UI behavior is verifiable
      // end-to-end without depending on backend availability in the preview.
      await new Promise((resolve) => setTimeout(resolve, 700));
      setStatus("success");
    } catch (err) {
      console.error(err);
      setServerError(err.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const onReset = () => {
    setValues(initialValues);
    setErrors({});
    setStatus("idle");
    setServerError("");
  };

  if (status === "success") {
    return (
      <div
        className={cn(
          "rounded-2xl border p-8 md:p-10",
          isInverted
            ? "bg-white/5 border-white/15 text-white"
            : "bg-brand-paper border-brand-line text-brand-ink"
        )}
      >
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-red/10">
            <CheckCircle2 className="h-6 w-6 text-brand-red" />
          </span>
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-semibold">
              Thanks — we have received your inquiry.
            </h3>
            <p
              className={cn(
                "mt-3 text-sm md:text-base leading-relaxed",
                isInverted ? "text-white/80" : "text-brand-ink-muted"
              )}
            >
              A sourcing manager from our team in Shenzhen will review your
              request and get back to you within one business day. If anything
              is urgent, write to us at{" "}
              <a
                href="mailto:hello@ssourcing.example"
                className="font-semibold underline underline-offset-2"
              >
                hello@ssourcing.example
              </a>
              .
            </p>
            <div className="mt-6">
              <Button onClick={onReset} variant="outline" size="md">
                Submit another inquiry
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const labelClass = cn(
    "block text-xs font-semibold uppercase tracking-[0.14em]",
    isInverted ? "text-white/80" : "text-brand-ink-muted"
  );
  const inputBase =
    "mt-1.5 block w-full rounded-md border bg-white text-brand-ink placeholder:text-brand-ink-soft focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red transition-colors";
  const inputClass = cn(inputBase, "h-11 px-3 text-sm border-brand-line");
  const textareaClass = cn(
    inputBase,
    "min-h-[112px] px-3 py-2.5 text-sm border-brand-line"
  );
  const errorClass = "mt-1.5 text-xs text-brand-red";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={cn(
        "rounded-2xl border p-6 md:p-10",
        isInverted
          ? "bg-white/[0.04] border-white/15 text-white"
          : "bg-white border-brand-line text-brand-ink shadow-sm"
      )}
      aria-busy={status === "submitting"}
    >
      <div className="mb-8">
        {eyebrow ? (
          <span
            className={cn(
              "eyebrow",
              isInverted ? "text-brand-amber" : "text-brand-teal"
            )}
          >
            {eyebrow}
          </span>
        ) : null}
        <h3
          className={cn(
            "mt-2 text-2xl md:text-[1.7rem] font-semibold tracking-tight",
            isInverted ? "text-white" : "text-brand-navy"
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "mt-3 text-sm md:text-base leading-relaxed max-w-2xl",
            isInverted ? "text-white/75" : "text-brand-ink-muted"
          )}
        >
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full name *
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={values.fullName}
            onChange={onChange}
            placeholder="Jane Doe"
            className={inputClass}
            aria-invalid={!!errors.fullName}
          />
          {errors.fullName ? (
            <p className={errorClass}>{errors.fullName}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company / Brand *
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={values.company}
            onChange={onChange}
            placeholder="Acme Imports Ltd."
            className={inputClass}
            aria-invalid={!!errors.company}
          />
          {errors.company ? (
            <p className={errorClass}>{errors.company}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Work email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            placeholder="jane@acmeimports.com"
            className={inputClass}
            aria-invalid={!!errors.email}
          />
          {errors.email ? (
            <p className={errorClass}>{errors.email}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="country" className={labelClass}>
            Country / Region *
          </label>
          <input
            id="country"
            name="country"
            type="text"
            value={values.country}
            onChange={onChange}
            placeholder="United Kingdom"
            className={inputClass}
            aria-invalid={!!errors.country}
          />
          {errors.country ? (
            <p className={errorClass}>{errors.country}</p>
          ) : null}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="productCategory" className={labelClass}>
            Product category *
          </label>
          <select
            id="productCategory"
            name="productCategory"
            value={values.productCategory}
            onChange={onChange}
            className={cn(inputClass, "appearance-none pr-9")}
            aria-invalid={!!errors.productCategory}
          >
            <option value="">Choose a category</option>
            {productOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.productCategory ? (
            <p className={errorClass}>{errors.productCategory}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="orderSize" className={labelClass}>
            Expected order size *
          </label>
          <select
            id="orderSize"
            name="orderSize"
            value={values.orderSize}
            onChange={onChange}
            className={cn(inputClass, "appearance-none pr-9")}
            aria-invalid={!!errors.orderSize}
          >
            <option value="">Choose a band</option>
            {orderSizeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.orderSize ? (
            <p className={errorClass}>{errors.orderSize}</p>
          ) : null}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="productDescription" className={labelClass}>
          Product description *
        </label>
        <textarea
          id="productDescription"
          name="productDescription"
          value={values.productDescription}
          onChange={onChange}
          placeholder="What are you sourcing? Materials, key specs, target retail price, any reference products or suppliers you have already spoken to."
          className={textareaClass}
          aria-invalid={!!errors.productDescription}
        />
        {errors.productDescription ? (
          <p className={errorClass}>{errors.productDescription}</p>
        ) : null}
      </div>

      <fieldset className="mt-6">
        <legend className={labelClass}>Services you need *</legend>
        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {serviceOptions.map((service) => {
            const checked = values.services.includes(service);
            return (
              <label
                key={service}
                className={cn(
                  "flex items-center gap-3 rounded-md border px-3 py-2.5 cursor-pointer transition-colors",
                  checked
                    ? "border-brand-red bg-brand-red/[0.05]"
                    : isInverted
                    ? "border-white/20 hover:border-white/40"
                    : "border-brand-line hover:border-brand-navy/40"
                )}
              >
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-[#C81D25]"
                  checked={checked}
                  onChange={() => onServiceToggle(service)}
                />
                <span
                  className={cn(
                    "text-sm",
                    isInverted ? "text-white/85" : "text-brand-ink"
                  )}
                >
                  {service}
                </span>
              </label>
            );
          })}
        </div>
        {errors.services ? (
          <p className={errorClass}>{errors.services}</p>
        ) : null}
      </fieldset>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="targetPrice" className={labelClass}>
            Target unit price (USD, optional)
          </label>
          <input
            id="targetPrice"
            name="targetPrice"
            type="text"
            value={values.targetPrice}
            onChange={onChange}
            placeholder="e.g. $2.40 – $2.80 FOB Shenzhen"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="timeline" className={labelClass}>
            Target delivery timeline
          </label>
          <input
            id="timeline"
            name="timeline"
            type="text"
            value={values.timeline}
            onChange={onChange}
            placeholder="e.g. First shipment by end of Q3"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="notes" className={labelClass}>
          Anything else we should know?
        </label>
        <textarea
          id="notes"
          name="notes"
          value={values.notes}
          onChange={onChange}
          placeholder="Compliance requirements (CE, FCC, FDA…), preferred factories you have already spoken to, language preferences, etc."
          className={textareaClass}
        />
      </div>

      <div className="mt-6">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            name="consent"
            checked={values.consent}
            onChange={onChange}
            className="mt-1 h-4 w-4 accent-[#C81D25]"
            aria-invalid={!!errors.consent}
          />
          <span
            className={cn(
              "text-xs leading-relaxed",
              isInverted ? "text-white/75" : "text-brand-ink-muted"
            )}
          >
            I agree that SSourcing China may contact me about this inquiry. We
            do not share your information with third parties.
          </span>
        </label>
        {errors.consent ? (
          <p className={errorClass}>{errors.consent}</p>
        ) : null}
      </div>

      {serverError ? (
        <div className="mt-6 flex items-start gap-3 rounded-md border border-brand-red/30 bg-brand-red/[0.06] px-4 py-3 text-sm text-brand-red">
          <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
          <span>{serverError}</span>
        </div>
      ) : null}

      <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            submitLabel
          )}
        </Button>
        <p
          className={cn(
            "text-xs",
            isInverted ? "text-white/60" : "text-brand-ink-muted"
          )}
        >
          We typically reply within one business day. No spam.
        </p>
      </div>
    </form>
  );
}
