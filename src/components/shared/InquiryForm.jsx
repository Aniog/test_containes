import { useState } from "react"
import { useLocation } from "react-router-dom"
import { CheckCircle2, ChevronDown, Send, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { submitInquiry } from "@/api/inquiries"

const productTypes = [
  "Consumer Electronics & Accessories",
  "Home & Kitchen Goods",
  "Apparel & Textile Products",
  "Beauty & Personal Care",
  "Industrial & Hardware",
  "Packaging & Print",
  "Outdoor & Sports",
  "Other / Not sure yet",
]

export function InquiryForm({
  variant = "default",
  showProductType = true,
  title = "Get a Free Sourcing Quote",
  subtitle = "Tell us what you need. We'll come back with a sourcing plan and supplier shortlist within 1–3 business days.",
}) {
  const location = useLocation()
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    setErrorMsg("")
    setSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const fields = {
      name: formData.get("name") || "",
      company: formData.get("company") || "",
      email: formData.get("email") || "",
      country: formData.get("country") || "",
      productType: formData.get("productType") || "",
      quantity: formData.get("quantity") || "",
      requirements: formData.get("requirements") || "",
      sourcePage: location?.pathname || "",
    }

    try {
      await submitInquiry(fields)
      setSubmitted(true)
    } catch (err) {
      console.error("Inquiry submit failed", err)
      setErrorMsg(err?.message || "Submission failed. Please try again or email sourcing@ssourcingchina.com.")
    } finally {
      setSubmitting(false)
    }
  }

  const isInvert = variant === "invert"

  if (submitted) {
    return (
      <div
        className={`rounded-xl border p-8 md:p-10 text-center ${
          isInvert
            ? "bg-navy-800/60 border-navy-700 text-white"
            : "bg-white border-slate-200"
        }`}
      >
        <CheckCircle2 className="w-10 h-10 text-accent-500 mx-auto" />
        <h3
          className={`mt-4 text-xl md:text-2xl font-bold ${
            isInvert ? "text-white" : "text-slate-900"
          }`}
        >
          Inquiry received.
        </h3>
        <p
          className={`mt-2 ${
            isInvert ? "text-navy-100" : "text-slate-600"
          }`}
        >
          A sourcing specialist will review your requirements and reply within
          1 business day. For urgent projects, message us directly at{" "}
          <a
            href="mailto:sourcing@ssourcingchina.com"
            className={`font-semibold underline-offset-4 ${
              isInvert
                ? "text-accent-300 hover:text-white"
                : "text-navy-900 hover:text-accent-600"
            } underline`}
          >
            sourcing@ssourcingchina.com
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-xl border p-6 md:p-8 ${
        isInvert
          ? "bg-navy-800/60 border-navy-700"
          : "bg-white border-slate-200"
      }`}
    >
      <h3
        className={`text-xl md:text-2xl font-bold ${
          isInvert ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-2 text-sm md:text-base ${
          isInvert ? "text-navy-100" : "text-slate-600"
        }`}
      >
        {subtitle}
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Full name" name="name" required invert={isInvert} />
        <Field
          label="Company"
          name="company"
          required
          invert={isInvert}
        />
        <Field
          label="Business email"
          name="email"
          type="email"
          required
          invert={isInvert}
        />
        <Field
          label="Country / Region"
          name="country"
          required
          invert={isInvert}
        />
        <Field
          label="Product type"
          name="productType"
          required={showProductType}
          select={productTypes}
          invert={isInvert}
        />
        <Field
          label="Estimated order quantity"
          name="quantity"
          placeholder="e.g. 500 units / trial order"
          invert={isInvert}
        />
        <div className="md:col-span-2">
          <Field
            label="Product requirements"
            name="requirements"
            required
            textarea
            placeholder="Describe the product, target price, materials, packaging, certifications needed, and any reference links."
            invert={isInvert}
          />
        </div>
      </div>

      {errorMsg && (
        <div
          role="alert"
          className={`mt-6 flex items-start gap-2 rounded-md border p-3 text-sm ${
            isInvert
              ? "border-red-400/50 bg-red-500/10 text-red-100"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
        >
          <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p
          className={`text-xs ${
            isInvert ? "text-navy-200" : "text-slate-500"
          }`}
        >
          By submitting, you agree to be contacted about your sourcing project.
          We do not share your details with third parties.
        </p>
        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={submitting}
          className="sm:w-auto w-full"
        >
          {submitting ? "Sending..." : "Send Inquiry"}
          {!submitting && <Send className="w-4 h-4" />}
        </Button>
      </div>
    </form>
  )
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  textarea,
  select,
  invert = false,
}) {
  const baseInput =
    "mt-1.5 w-full rounded-md border bg-white text-slate-900 placeholder-slate-400 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 border-slate-300"
  return (
    <label className="block">
      <span
        className={`text-xs font-semibold uppercase tracking-wider ${
          invert ? "text-navy-100" : "text-slate-700"
        }`}
      >
        {label}
        {required && <span className="text-accent-500"> *</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={5}
          placeholder={placeholder}
          className={baseInput}
        />
      ) : select ? (
        <div className="relative mt-1.5">
          <select
            name={name}
            required={required}
            defaultValue=""
            className={`${baseInput} appearance-none pr-9`}
          >
            <option value="" disabled>
              Select a category
            </option>
            {select.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={baseInput}
        />
      )}
    </label>
  )
}

export default InquiryForm
