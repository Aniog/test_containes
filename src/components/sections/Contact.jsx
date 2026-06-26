import { useState } from "react"
import { Phone, Mail, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react"
import { Container, Section, SectionHeading } from "@/components/ui"
import { Button } from "@/components/ui/button"
import { submitQuoteRequest } from "@/api/quote"
import { products } from "@/data/content"

const productOptions = [
  ...products.map((p) => p.name),
  "Not sure / Need advice",
]

const initialValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  product_interest: "Double Folding Machine",
  message: "",
}

export function Contact() {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState("idle") // idle | submitting | success | error
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return "Please enter your name."
    if (!v.email.trim()) return "Please enter your email."
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return "Please enter a valid email."
    if (!v.message.trim()) return "Please tell us about your project."
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate(values)
    if (err) {
      setError(err)
      setStatus("error")
      return
    }

    setStatus("submitting")
    try {
      await submitQuoteRequest(values)
      setStatus("success")
      setValues(initialValues)
    } catch (err) {
      setError(err.message || "Submission failed. Please try again.")
      setStatus("error")
    }
  }

  return (
    <Section id="contact" className="bg-cloud">
      <Container>
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left: info */}
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Get a Quote"
              title="Let's configure your folder"
              description="Tell us about your materials, volumes, and floor space. Our engineers will recommend the right machine and send a tailored quote."
            />

            <ul className="mt-10 space-y-6">
              <ContactInfo
                icon={<Phone className="h-5 w-5" />}
                label="Call us"
                value="+1 (800) 555-0142"
              />
              <ContactInfo
                icon={<Mail className="h-5 w-5" />}
                label="Email us"
                value="sales@artitectmachinery.com"
              />
              <ContactInfo
                icon={<MapPin className="h-5 w-5" />}
                label="Visit us"
                value={["1200 Industrial Parkway", "Suite 400, Cleveland, OH"]}
              />
            </ul>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="rounded-xl border border-line bg-white p-8 shadow-sm"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" htmlFor="name" required>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={onChange}
                    placeholder="Jane Doe"
                    className={inputClass}
                  />
                </Field>
                <Field label="Email" htmlFor="email" required>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={onChange}
                    placeholder="jane@company.com"
                    className={inputClass}
                  />
                </Field>
                <Field label="Phone" htmlFor="phone">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={onChange}
                    placeholder="+1 (555) 000-0000"
                    className={inputClass}
                  />
                </Field>
                <Field label="Company" htmlFor="company">
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={values.company}
                    onChange={onChange}
                    placeholder="Acme Fabrication"
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Product of interest" htmlFor="product_interest">
                  <select
                    id="product_interest"
                    name="product_interest"
                    value={values.product_interest}
                    onChange={onChange}
                    className={inputClass}
                  >
                    {productOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Project details" htmlFor="message" required>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={onChange}
                    placeholder="Tell us about your materials, bend lengths, volumes, and any special requirements."
                    className={inputClass}
                  />
                </Field>
              </div>

              {error && (
                <p
                  role="alert"
                  className="mt-5 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                  {error}
                </p>
              )}

              {status === "success" && (
                <div
                  role="status"
                  className="mt-5 flex items-center gap-3 rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />
                  Thank you — your request has been received. Our team will
                  respond within one business day.
                </div>
              )}

              <div className="mt-7">
                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Request Quote
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  )
}

const inputClass =
  "w-full rounded-md border border-line bg-cloud px-4 py-3 text-sm text-ink placeholder:text-silver focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 transition-colors"

function Field({ label, htmlFor, required, children }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-semibold text-ink"
      >
        {label}
        {required && <span className="ml-1 text-accent-dark">*</span>}
      </label>
      {children}
    </div>
  )
}

function ContactInfo({ icon, label, value }) {
  return (
    <li className="flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-ink text-accent">
        {icon}
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-silver">
          {label}
        </div>
        {Array.isArray(value) ? (
          value.map((line) => (
            <div key={line} className="text-sm font-medium text-ink">
              {line}
            </div>
          ))
        ) : (
          <div className="text-sm font-medium text-ink">{value}</div>
        )}
      </div>
    </li>
  )
}

export default Contact
