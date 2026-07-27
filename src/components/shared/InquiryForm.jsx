import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { Select } from "@/components/ui/Select"
import { Alert } from "@/components/ui/Alert"
import { submitInquiry } from "@/api/inquiries"

const initial = {
  name: "",
  email: "",
  company: "",
  phone: "",
  product_interest: "",
  quantity: "",
  message: "",
}

export function InquiryForm({ sourcePage = "website", compact = false }) {
  const [values, setValues] = useState(initial)
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return "Name is required"
    if (!v.email.trim()) return "Email is required"
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return "Please provide a valid email"
    if (!v.message.trim()) return "Please tell us what you need to source"
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate(values)
    if (err) {
      setError(err)
      return
    }
    setStatus("submitting")
    try {
      await submitInquiry({ ...values, source_page: sourcePage })
      setStatus("success")
      setValues(initial)
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.")
      setStatus("error")
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {status === "success" && (
        <Alert variant="success">
          Thank you. We have received your request and will reply within one
          business day.
        </Alert>
      )}
      {error && <Alert variant="error">{error}</Alert>}

      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          name="name"
          value={values.name}
          onChange={onChange}
          placeholder="Your name *"
          required
        />
        <Input
          name="email"
          type="email"
          value={values.email}
          onChange={onChange}
          placeholder="Work email *"
          required
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          name="company"
          value={values.company}
          onChange={onChange}
          placeholder="Company name"
        />
        <Input
          name="phone"
          value={values.phone}
          onChange={onChange}
          placeholder="Phone / WhatsApp"
        />
      </div>

      {!compact && (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <Select
              name="product_interest"
              value={values.product_interest}
              onChange={onChange}
            >
              <option value="">Product category</option>
              <option value="Electronics">Electronics</option>
              <option value="Machinery & Industrial">Machinery & Industrial</option>
              <option value="Apparel & Textiles">Apparel & Textiles</option>
              <option value="Home & Furniture">Home & Furniture</option>
              <option value="Beauty & Personal Care">Beauty & Personal Care</option>
              <option value="Packaging">Packaging</option>
              <option value="Other">Other</option>
            </Select>
            <Input
              name="quantity"
              value={values.quantity}
              onChange={onChange}
              placeholder="Estimated quantity"
            />
          </div>
          <Textarea
            name="message"
            value={values.message}
            onChange={onChange}
            rows={4}
            placeholder="Tell us what you are sourcing, target price, timeline, and any requirements. *"
            required
          />
        </>
      )}

      {compact && (
        <Textarea
          name="message"
          value={values.message}
          onChange={onChange}
          rows={3}
          placeholder="What do you need to source? *"
          required
        />
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Get a Free Sourcing Quote"}
      </Button>
    </form>
  )
}
