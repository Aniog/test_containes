import React, { useState } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { submitInquiry } from "@/api/inquiries";

const initial = {
  name: "",
  company: "",
  email: "",
  country: "",
  product: "",
  quantity: "",
  timeline: "",
  message: "",
};

const InquiryForm = ({ idPrefix = "inquiry", accent = "ink" }) => {
  const [data, setData] = useState(initial);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  const update = (key) => (e) => {
    setData((d) => ({ ...d, [key]: e.target.value }));
    if (status === "error") {
      setStatus("idle");
      setError("");
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError("");

    try {
      await submitInquiry({
        values: data,
        source: {
          page:
            typeof window !== "undefined" ? window.location.pathname : "",
          referrer:
            typeof document !== "undefined" ? document.referrer || "" : "",
        },
      });
      setStatus("sent");
    } catch (err) {
      setError(err?.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div
        className="card flex flex-col items-start gap-3 p-8"
        id={`${idPrefix}-success`}
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-success-600/10 text-success-600">
          <CheckCircle2 className="h-5 w-5" />
        </span>
        <h3 className="text-[20px] font-semibold text-ink-900">
          Thank you — your inquiry is in.
        </h3>
        <p className="text-[15px] leading-relaxed text-ink-600">
          A project manager will read your brief and reply with a shortlist,
          a price range, and a sourcing plan within one business day. You can
          reach us directly at{" "}
          <a
            className="font-semibold text-accent-600 hover:underline"
            href="mailto:hello@ssourcing-china.com"
          >
            hello@ssourcing-china.com
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setData(initial);
            setStatus("idle");
            setError("");
          }}
          className="btn btn-ghost mt-1 text-[14.5px] font-semibold text-accent-600 hover:text-accent-700"
        >
          Send another inquiry →
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="card p-6 md:p-8"
      id={`${idPrefix}-form`}
      noValidate
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor={`${idPrefix}-name`} className="label">
            Full name
          </label>
          <input
            id={`${idPrefix}-name`}
            type="text"
            className="input"
            placeholder="Jane Carter"
            value={data.name}
            onChange={update("name")}
            required
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-company`} className="label">
            Company
          </label>
          <input
            id={`${idPrefix}-company`}
            type="text"
            className="input"
            placeholder="Acme Imports Ltd."
            value={data.company}
            onChange={update("company")}
            autoComplete="organization"
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-email`} className="label">
            Work email
          </label>
          <input
            id={`${idPrefix}-email`}
            type="email"
            className="input"
            placeholder="jane@acmeimports.com"
            value={data.email}
            onChange={update("email")}
            required
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-country`} className="label">
            Destination country
          </label>
          <input
            id={`${idPrefix}-country`}
            type="text"
            className="input"
            placeholder="United States"
            value={data.country}
            onChange={update("country")}
            autoComplete="country-name"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor={`${idPrefix}-product`} className="label">
            Product you want to source
          </label>
          <input
            id={`${idPrefix}-product`}
            type="text"
            className="input"
            placeholder="e.g. stainless steel cookware, Bluetooth speakers, cotton t-shirts"
            value={data.product}
            onChange={update("product")}
            required
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-quantity`} className="label">
            Estimated order quantity
          </label>
          <input
            id={`${idPrefix}-quantity`}
            type="text"
            className="input"
            placeholder="e.g. 1,000 units / 20' FCL"
            value={data.quantity}
            onChange={update("quantity")}
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-timeline`} className="label">
            Target delivery
          </label>
          <input
            id={`${idPrefix}-timeline`}
            type="text"
            className="input"
            placeholder="e.g. by end of Q3"
            value={data.timeline}
            onChange={update("timeline")}
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor={`${idPrefix}-message`} className="label">
            Anything else we should know?
          </label>
          <textarea
            id={`${idPrefix}-message`}
            className="textarea"
            placeholder="Specs, reference products, target FOB price, certifications, packaging requirements…"
            value={data.message}
            onChange={update("message")}
            rows={5}
          />
          <p className="helper">
            We sign NDAs on request. Your brief is shared only with verified
            factories that match your criteria.
          </p>
        </div>
      </div>

      {status === "error" && error && (
        <div
          role="alert"
          className="mt-5 flex items-start gap-2 rounded-md border border-danger-200 bg-danger-50 p-3 text-[14px] text-danger-700"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="mt-6 flex flex-col-reverse items-stretch gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-[13px] text-ink-500">
          By submitting, you agree to be contacted about your sourcing project.
        </p>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={status === "sending"}
        >
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            "Get a Free Sourcing Quote"
          )}
        </button>
      </div>
    </form>
  );
};

export default InquiryForm;
