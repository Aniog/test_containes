import { useState } from "react";
import { CheckCircle2, Send, AlertCircle, Loader2 } from "lucide-react";
import {
  createInquiry,
  PRODUCT_CATEGORIES,
  ORDER_SIZES,
} from "@/api/inquiries.js";

const initialForm = () => ({
  name: "",
  company: "",
  country: "",
  email: "",
  phone: "",
  category: PRODUCT_CATEGORIES[0],
  orderSize: ORDER_SIZES[1],
  details: "",
});

const InquiryForm = ({ compact = false }) => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errors, setErrors] = useState([]);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const update = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const reset = () => {
    setForm(initialForm());
    setStatus("idle");
    setErrors([]);
    setSubmittedEmail("");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setErrors([]);

    const result = await createInquiry({
      ...form,
      sourcePage:
        typeof window !== "undefined" ? window.location.pathname : "",
    });

    if (!result.success) {
      setErrors(result.errors || ["Submission failed. Please try again."]);
      setStatus("error");
      return;
    }

    setSubmittedEmail(form.email);
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div
        className={`rounded-2xl border border-ink-200 bg-white p-8 ${
          compact ? "" : "shadow-card"
        }`}
      >
        <div className="flex items-start gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-success-600/10 text-success-600 shrink-0">
            <CheckCircle2 className="h-6 w-6" />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-ink-900">
              Thanks — your inquiry is in.
            </h3>
            <p className="mt-1 text-sm text-ink-700 leading-relaxed">
              We have received your details
              {submittedEmail ? (
                <>
                  {" "}
                  and sent a confirmation to{" "}
                  <span className="font-semibold text-ink-900">
                    {submittedEmail}
                  </span>
                </>
              ) : null}
              . An English-speaking project manager based in China will review
              your requirements and email you back within one business day
              (CST). For urgent sourcing, mention it in the message and we will
              prioritize.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-4 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              Submit another inquiry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={`rounded-2xl border border-ink-200 bg-white p-6 md:p-8 ${
        compact ? "" : "shadow-card"
      }`}
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="inq-name" className="label">
            Full name
          </label>
          <input
            id="inq-name"
            type="text"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Jane Smith"
            className="input"
            disabled={status === "submitting"}
          />
        </div>
        <div>
          <label htmlFor="inq-company" className="label">
            Company
          </label>
          <input
            id="inq-company"
            type="text"
            required
            value={form.company}
            onChange={update("company")}
            placeholder="Company name"
            className="input"
            disabled={status === "submitting"}
          />
        </div>
        <div>
          <label htmlFor="inq-country" className="label">
            Country / Region
          </label>
          <input
            id="inq-country"
            type="text"
            required
            value={form.country}
            onChange={update("country")}
            placeholder="e.g. United States"
            className="input"
            disabled={status === "submitting"}
          />
        </div>
        <div>
          <label htmlFor="inq-email" className="label">
            Work email
          </label>
          <input
            id="inq-email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="jane@yourcompany.com"
            className="input"
            disabled={status === "submitting"}
          />
        </div>
        <div>
          <label htmlFor="inq-phone" className="label">
            Phone / WhatsApp <span className="text-ink-500">(optional)</span>
          </label>
          <input
            id="inq-phone"
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="+1 555 123 4567"
            className="input"
            disabled={status === "submitting"}
          />
        </div>
        <div>
          <label htmlFor="inq-category" className="label">
            Product category
          </label>
          <select
            id="inq-category"
            value={form.category}
            onChange={update("category")}
            className="input"
            disabled={status === "submitting"}
          >
            {PRODUCT_CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="inq-orderSize" className="label">
            Estimated order size
          </label>
          <select
            id="inq-orderSize"
            value={form.orderSize}
            onChange={update("orderSize")}
            className="input"
            disabled={status === "submitting"}
          >
            {ORDER_SIZES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="inq-details" className="label">
            Tell us about your product
          </label>
          <textarea
            id="inq-details"
            rows={5}
            required
            minLength={10}
            value={form.details}
            onChange={update("details")}
            placeholder="Product, key specs, target quantity, target price (FOB), destination port, timeline, any certifications required…"
            className="input resize-y"
            disabled={status === "submitting"}
          />
        </div>
      </div>

      {status === "error" && errors.length > 0 && (
        <div
          role="alert"
          className="mt-4 flex items-start gap-2 rounded-lg border border-danger-200 bg-danger-50 p-3 text-sm text-danger-700"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <div>
            <p className="font-semibold">We could not submit your inquiry.</p>
            <ul className="mt-1 list-disc pl-5">
              {errors.map((err, i) => (
                <li key={i}>{err}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="mt-5 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-600">
          By submitting, you agree to be contacted by SSourcing China about
          your inquiry. We respond within one business day (CST).
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary inline-flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Submitting…
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
