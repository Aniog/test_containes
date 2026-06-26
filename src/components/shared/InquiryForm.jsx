import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

const INITIAL = {
  name: "",
  company: "",
  country: "",
  email: "",
  phone: "",
  productType: "",
  quantity: "",
  targetPrice: "",
  message: "",
};

export default function InquiryForm({ compact = false, light = false }) {
  const [values, setValues] = useState(INITIAL);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!values.name.trim() || !values.email.trim() || !values.productType.trim()) {
      setError("Please provide your name, email, and a short description of the product you need to source.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setStatus("submitting");
    // Simulate submission — this site does not persist inquiries.
    setTimeout(() => {
      setStatus("success");
    }, 900);
  };

  const labelClass = light
    ? "text-white/85"
    : "text-[#0F172A]";

  return (
    <div
      id="inquiry-form"
      className={`card p-6 md:p-8 ${light ? "!bg-white/5 !border-white/15 backdrop-blur-sm" : ""}`}
    >
      {status === "success" ? (
        <div className="text-center py-8">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-6 w-6 text-green-700" />
          </div>
          <h3 className={`mt-5 font-display text-2xl font-semibold ${light ? "text-white" : "text-[#0F172A]"}`}>
            Thank you — your inquiry has been received.
          </h3>
          <p className={`mt-3 text-[15px] ${light ? "text-white/80" : "text-[#475569]"}`}>
            Our sourcing team typically replies within one business day with supplier options, sample plans, and a clear next step.
          </p>
          <button
            type="button"
            onClick={() => {
              setValues(INITIAL);
              setStatus("idle");
            }}
            className={light ? "btn-ghost-light mt-6" : "btn-secondary mt-6"}
          >
            Submit another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate>
          {!compact && (
            <div className="mb-6">
              <h3 className={`font-display text-2xl font-semibold ${light ? "text-white" : "text-[#0F172A]"}`}>
                Request a Free Sourcing Quote
              </h3>
              <p className={`mt-2 text-[14.5px] ${light ? "text-white/75" : "text-[#475569]"}`}>
                Tell us what you need to source. We will reply with a shortlist of verified suppliers and a clear process.
              </p>
            </div>
          )}

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="name" className={`field-label ${labelClass}`}>Full name *</label>
              <input id="name" name="name" type="text" required value={values.name} onChange={onChange} className="input-base" placeholder="Jane Smith" />
            </div>
            <div>
              <label htmlFor="company" className={`field-label ${labelClass}`}>Company</label>
              <input id="company" name="company" type="text" value={values.company} onChange={onChange} className="input-base" placeholder="Your company name" />
            </div>
            <div>
              <label htmlFor="country" className={`field-label ${labelClass}`}>Country / Region</label>
              <input id="country" name="country" type="text" value={values.country} onChange={onChange} className="input-base" placeholder="e.g. United States" />
            </div>
            <div>
              <label htmlFor="email" className={`field-label ${labelClass}`}>Business email *</label>
              <input id="email" name="email" type="email" required value={values.email} onChange={onChange} className="input-base" placeholder="you@company.com" />
            </div>
            <div>
              <label htmlFor="phone" className={`field-label ${labelClass}`}>Phone / WhatsApp</label>
              <input id="phone" name="phone" type="tel" value={values.phone} onChange={onChange} className="input-base" placeholder="+1 555 0123" />
            </div>
            <div>
              <label htmlFor="productType" className={`field-label ${labelClass}`}>Product to source *</label>
              <input id="productType" name="productType" type="text" required value={values.productType} onChange={onChange} className="input-base" placeholder="e.g. stainless steel cookware" />
            </div>
            <div>
              <label htmlFor="quantity" className={`field-label ${labelClass}`}>Estimated quantity</label>
              <input id="quantity" name="quantity" type="text" value={values.quantity} onChange={onChange} className="input-base" placeholder="e.g. 1,000 pcs / MOQ" />
            </div>
            <div>
              <label htmlFor="targetPrice" className={`field-label ${labelClass}`}>Target price (optional)</label>
              <input id="targetPrice" name="targetPrice" type="text" value={values.targetPrice} onChange={onChange} className="input-base" placeholder="e.g. USD 8.50 / pc FOB" />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="message" className={`field-label ${labelClass}`}>Project details</label>
            <textarea
              id="message"
              name="message"
              value={values.message}
              onChange={onChange}
              className="input-base"
              placeholder="Specifications, materials, packaging, certifications needed, expected delivery time…"
            />
          </div>

          {error && (
            <p role="alert" className="mt-4 text-[13.5px] text-[#B44A33] font-medium">
              {error}
            </p>
          )}

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className={`text-[12.5px] ${light ? "text-white/60" : "text-[#64748B]"}`}>
              By submitting, you agree to be contacted by SSourcing China regarding your inquiry. We never share your information with third parties.
            </p>
            <button type="submit" disabled={status === "submitting"} className="btn-primary sm:w-auto w-full">
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Get a Free Sourcing Quote
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}