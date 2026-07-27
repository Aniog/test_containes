import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { submitSourcingInquiry } from "@/api/inquiries.js";

const SERVICE_OPTIONS = [
  { value: "supplier_sourcing", label: "Supplier Sourcing" },
  { value: "factory_verification", label: "Factory Verification" },
  { value: "quality_inspection", label: "Quality Inspection" },
  { value: "production_follow_up", label: "Production Follow-up" },
  { value: "shipping_logistics", label: "Shipping & Logistics" },
  { value: "sample_consolidation", label: "Sample Consolidation" },
];

const initialValues = {
  full_name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  product_category: "",
  product_description: "",
  target_quantity: "",
  target_unit_price: "",
  services_needed: [],
  additional_notes: "",
};

export default function InquiryForm({ sourcePage, title, description }) {
  const [values, setValues] = useState(initialValues);
  const [fieldErrors, setFieldErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const toggleService = (value) => {
    setValues((prev) => {
      const exists = prev.services_needed.includes(value);
      return {
        ...prev,
        services_needed: exists
          ? prev.services_needed.filter((v) => v !== value)
          : [...prev.services_needed, value],
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    setFieldErrors({});

    try {
      await submitSourcingInquiry({
        ...values,
        source_page: sourcePage,
      });
      setStatus("success");
      setValues(initialValues);
    } catch (err) {
      if (err.fieldErrors) {
        setFieldErrors(err.fieldErrors);
      }
      setErrorMessage(err.message || "Submission failed. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div className="rounded-xl border border-brand-line bg-white p-6 sm:p-8 shadow-sm">
      {title && (
        <h2 className="text-2xl font-bold tracking-tight text-brand-ink">{title}</h2>
      )}
      {description && (
        <p className="mt-2 text-sm leading-relaxed text-brand-muted">{description}</p>
      )}

      {status === "success" ? (
        <div className="mt-6 rounded-md border border-green-200 bg-green-50 p-5" role="status">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-green-900">Inquiry received.</p>
              <p className="mt-1 text-sm text-green-800">
                Thank you. Our sourcing team will review your request and reply within one
                business day. For urgent projects, mention it in the message and we will
                prioritize it.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-3 text-sm font-semibold text-green-800 underline-offset-4 hover:underline"
              >
                Submit another inquiry
              </button>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2" noValidate>
          <div>
            <label htmlFor="full_name" className="label-base">Full name *</label>
            <input
              id="full_name"
              name="full_name"
              type="text"
              value={values.full_name}
              onChange={handleChange}
              className="input-base"
              placeholder="Jane Smith"
              required
            />
            {fieldErrors.full_name && (
              <p className="helper-text text-red-600">{fieldErrors.full_name}</p>
            )}
          </div>

          <div>
            <label htmlFor="company" className="label-base">Company</label>
            <input
              id="company"
              name="company"
              type="text"
              value={values.company}
              onChange={handleChange}
              className="input-base"
              placeholder="Acme Imports Ltd."
            />
          </div>

          <div>
            <label htmlFor="email" className="label-base">Business email *</label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              className="input-base"
              placeholder="jane@acme.com"
              required
            />
            {fieldErrors.email && (
              <p className="helper-text text-red-600">{fieldErrors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="label-base">Phone / WhatsApp</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={values.phone}
              onChange={handleChange}
              className="input-base"
              placeholder="+1 555 123 4567"
            />
          </div>

          <div>
            <label htmlFor="country" className="label-base">Country</label>
            <input
              id="country"
              name="country"
              type="text"
              value={values.country}
              onChange={handleChange}
              className="input-base"
              placeholder="United States"
            />
          </div>

          <div>
            <label htmlFor="product_category" className="label-base">Product category</label>
            <input
              id="product_category"
              name="product_category"
              type="text"
              value={values.product_category}
              onChange={handleChange}
              className="input-base"
              placeholder="e.g. Home textiles, Consumer electronics"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="product_description" className="label-base">
              Product details & specifications *
            </label>
            <textarea
              id="product_description"
              name="product_description"
              rows={5}
              value={values.product_description}
              onChange={handleChange}
              className="input-base"
              placeholder="Describe the product: materials, dimensions, packaging, certifications, reference links or SKUs. The more specific, the faster we can quote."
              required
            />
            {fieldErrors.product_description && (
              <p className="helper-text text-red-600">{fieldErrors.product_description}</p>
            )}
          </div>

          <div>
            <label htmlFor="target_quantity" className="label-base">Target quantity</label>
            <input
              id="target_quantity"
              name="target_quantity"
              type="text"
              value={values.target_quantity}
              onChange={handleChange}
              className="input-base"
              placeholder="e.g. 1,000 units / 1× 40HQ"
            />
          </div>

          <div>
            <label htmlFor="target_unit_price" className="label-base">Target unit price</label>
            <input
              id="target_unit_price"
              name="target_unit_price"
              type="text"
              value={values.target_unit_price}
              onChange={handleChange}
              className="input-base"
              placeholder="e.g. USD 3.50 – 4.20 / unit FOB"
            />
          </div>

          <div className="sm:col-span-2">
            <p className="label-base">Services you need</p>
            <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {SERVICE_OPTIONS.map((opt) => {
                const checked = values.services_needed.includes(opt.value);
                return (
                  <label
                    key={opt.value}
                    className={`flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2.5 text-sm transition-colors ${
                      checked
                        ? "border-brand-primary bg-brand-surface text-brand-ink"
                        : "border-brand-line bg-white text-brand-text hover:border-brand-primary/50"
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-brand-line text-brand-primary focus:ring-brand-primary"
                      checked={checked}
                      onChange={() => toggleService(opt.value)}
                    />
                    <span className="font-medium">{opt.label}</span>
                  </label>
                );
              })}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="additional_notes" className="label-base">Additional notes</label>
            <textarea
              id="additional_notes"
              name="additional_notes"
              rows={3}
              value={values.additional_notes}
              onChange={handleChange}
              className="input-base"
              placeholder="Timeframe, certifications, packaging requirements, anything we should know."
            />
          </div>

          {status === "error" && errorMessage && (
            <div className="sm:col-span-2 flex items-start gap-2 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              <AlertCircle className="h-4 w-4 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-brand-muted">
              By submitting, you agree to be contacted by SSourcing China about your inquiry.
              We never share your data with third parties.
            </p>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn-primary sm:w-auto w-full"
            >
              {status === "submitting" ? (
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
      )}
    </div>
  );
}
