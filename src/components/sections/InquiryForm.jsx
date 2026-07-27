import React, { useState } from "react"
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { DataClient } from "@strikingly/sdk"
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config.jsx"
import Input from "@/components/ui/Input"
import Textarea from "@/components/ui/Textarea"
import Select from "@/components/ui/Select"
import Button from "@/components/ui/Button"
import { cn } from "@/lib/utils"

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(", ")
  }
  return error?.message || "Submission failed. Please try again."
}

const initialValues = {
  full_name: "",
  company_name: "",
  email: "",
  phone: "",
  country: "",
  product_category: "",
  product_description: "",
  target_quantity: "",
  destination_port: "",
  service_required: "",
  timeline: "",
  additional_notes: "",
}

const validate = (values) => {
  const errors = {}
  if (!values.full_name.trim()) errors.full_name = "Please enter your name"
  if (!values.email.trim()) {
    errors.email = "Please enter your email"
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address"
  }
  if (!values.product_description.trim()) {
    errors.product_description = "Please describe the product you want to source"
  }
  return errors
}

const InquiryForm = ({
  sourcePage = "Home",
  variant = "light",
  className,
}) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle") // idle | submitting | success | error
  const [serverError, setServerError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setServerError(null)

    const validation = validate(values)
    setErrors(validation)
    if (Object.keys(validation).length > 0) return

    setStatus("submitting")

    const payload = {
      data: {
        ...values,
        source_page: sourcePage,
      },
    }

    const { data: response, error } = await client
      .from("Sourcing Inquiry")
      .insert(payload)
      .select()

    if (error) {
      const message = getErrorMessage(null, error)
      setServerError(message)
      setStatus("error")
      return
    }

    if (response && response.success === false) {
      const message = getErrorMessage(response, null)
      setServerError(message)
      setStatus("error")
      return
    }

    if (response && response.success === true) {
      setStatus("success")
      setValues(initialValues)
      return
    }

    // Fallback: treat any 2xx with no error as success
    setStatus("success")
    setValues(initialValues)
  }

  const isDark = variant === "dark"

  if (status === "success") {
    return (
      <div
        className={cn(
          "rounded-[6px] border p-8 md:p-10",
          isDark
            ? "bg-navy-800 border-navy-700 text-ink-onDark"
            : "bg-white border-warm-300 text-ink",
          className
        )}
      >
        <CheckCircle2 size={36} className="text-success" />
        <h3 className="mt-5 text-2xl font-semibold leading-tight">
          Thank you — we received your inquiry.
        </h3>
        <p
          className={cn(
            "mt-3 text-[15px] leading-relaxed",
            isDark ? "text-ink-onDarkMuted" : "text-ink-secondary"
          )}
        >
          A sourcing manager will review your brief and reply within one
          business day from hello@ssourcing.cn. If your request is urgent, you
          can reach us on WhatsApp at +86 138 0000 0188.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-teal hover:text-teal-hover underline underline-offset-4"
        >
          Submit another inquiry
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={cn(
        "rounded-[6px] border p-6 md:p-8",
        isDark
          ? "bg-navy-800 border-navy-700"
          : "bg-white border-warm-300",
        className
      )}
    >
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 gap-4",
          isDark && "text-ink-onDark"
        )}
      >
        <Input
          name="full_name"
          label="Full name"
          value={values.full_name}
          onChange={onChange}
          error={errors.full_name}
          required
          autoComplete="name"
          className={isDark ? "bg-navy-700 text-ink-onDark border-navy-700" : ""}
        />
        <Input
          name="company_name"
          label="Company / brand"
          value={values.company_name}
          onChange={onChange}
          autoComplete="organization"
          className={isDark ? "bg-navy-700 text-ink-onDark border-navy-700" : ""}
        />
        <Input
          name="email"
          type="email"
          label="Business email"
          value={values.email}
          onChange={onChange}
          error={errors.email}
          required
          autoComplete="email"
          className={isDark ? "bg-navy-700 text-ink-onDark border-navy-700" : ""}
        />
        <Input
          name="phone"
          type="tel"
          label="Phone (with country code)"
          value={values.phone}
          onChange={onChange}
          autoComplete="tel"
          className={isDark ? "bg-navy-700 text-ink-onDark border-navy-700" : ""}
        />
        <Input
          name="country"
          label="Country"
          value={values.country}
          onChange={onChange}
          autoComplete="country-name"
          className={isDark ? "bg-navy-700 text-ink-onDark border-navy-700" : ""}
        />
        <Select
          name="product_category"
          label="Product category"
          value={values.product_category}
          onChange={onChange}
          className={isDark ? "bg-navy-700 text-ink-onDark border-navy-700" : ""}
        >
          <option value="">Select a category</option>
          <option value="Consumer Goods">Consumer Goods</option>
          <option value="Apparel & Textiles">Apparel & Textiles</option>
          <option value="Electronics & Accessories">Electronics & Accessories</option>
          <option value="Industrial & Hardware">Industrial & Hardware</option>
          <option value="Packaging & Print">Packaging & Print</option>
          <option value="Furniture & Home Decor">Furniture & Home Decor</option>
          <option value="Other">Other</option>
        </Select>
        <Input
          name="target_quantity"
          label="Target quantity"
          placeholder="e.g. 5,000 units / 1 x 40HQ"
          value={values.target_quantity}
          onChange={onChange}
          className={isDark ? "bg-navy-700 text-ink-onDark border-navy-700" : ""}
        />
        <Input
          name="destination_port"
          label="Destination port or city"
          value={values.destination_port}
          onChange={onChange}
          className={isDark ? "bg-navy-700 text-ink-onDark border-navy-700" : ""}
        />
        <Select
          name="service_required"
          label="Service required"
          value={values.service_required}
          onChange={onChange}
          className={isDark ? "bg-navy-700 text-ink-onDark border-navy-700" : ""}
        >
          <option value="">Select a service</option>
          <option value="Full sourcing (sourcing + QC + shipping)">
            Full sourcing (sourcing + QC + shipping)
          </option>
          <option value="Sourcing only">Sourcing only</option>
          <option value="Quality inspection only">Quality inspection only</option>
          <option value="Factory audit only">Factory audit only</option>
          <option value="Production follow-up only">Production follow-up only</option>
          <option value="Not sure yet">Not sure yet</option>
        </Select>
        <Input
          name="timeline"
          label="Timeline"
          placeholder="e.g. need to ship by October"
          value={values.timeline}
          onChange={onChange}
          className={isDark ? "bg-navy-700 text-ink-onDark border-navy-700" : ""}
        />
      </div>

      <div className="mt-4">
        <Textarea
          name="product_description"
          label="Product description"
          placeholder="Tell us about the product, key specs, materials, target price, and any reference links."
          value={values.product_description}
          onChange={onChange}
          error={errors.product_description}
          required
          rows={5}
          className={isDark ? "bg-navy-700 text-ink-onDark border-navy-700" : ""}
        />
      </div>
      <div className="mt-4">
        <Textarea
          name="additional_notes"
          label="Additional notes (optional)"
          placeholder="Any specific certifications, compliance requirements, or context we should know."
          value={values.additional_notes}
          onChange={onChange}
          rows={3}
          className={isDark ? "bg-navy-700 text-ink-onDark border-navy-700" : ""}
        />
      </div>

      {serverError && (
        <div
          role="alert"
          className="mt-5 flex items-start gap-2 rounded-[4px] border border-warning/40 bg-warning/10 px-3 py-2.5 text-sm text-warning"
        >
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p
          className={cn(
            "text-xs leading-relaxed",
            isDark ? "text-ink-onDarkMuted" : "text-ink-muted"
          )}
        >
          We reply within one business day. Your information is used only to
          respond to your inquiry and is not shared with third parties.
        </p>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Sending…
            </>
          ) : (
            "Get a Free Sourcing Quote"
          )}
        </Button>
      </div>
    </form>
  )
}

export default InquiryForm
