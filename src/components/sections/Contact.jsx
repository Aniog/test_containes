import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react"
import { DataClient } from "@strikingly/sdk"
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config.jsx"
import { products } from "@/data/content"
import { Eyebrow } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(", ")
  }
  return error?.message || "Submission failed. Please try again."
}

const contactInfo = [
  { icon: Mail, label: "Email", value: "sales@artitectmachinery.com" },
  { icon: Phone, label: "Phone", value: "+1 (800) 555-0142" },
  { icon: MapPin, label: "Headquarters", value: "1440 Industrial Blvd, Detroit, MI" },
]

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product_interest: "",
    message: "",
  })
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return "Please enter your name."
    if (!v.email.trim()) return "Please enter your email."
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return "Please enter a valid email."
    if (!v.message.trim()) return "Please tell us about your requirements."
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const err = validate(values)
    if (err) {
      setError(err)
      return
    }
    setError(null)
    setStatus("submitting")

    const { data: response, error: createError } = await client
      .from("QuoteRequests")
      .insert({
        data: {
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          company: values.company.trim(),
          product_interest: values.product_interest,
          message: values.message.trim(),
        },
      })
      .select()
      .single()

    if (createError || response?.success === false) {
      setError(getErrorMessage(response, createError))
      setStatus("error")
      return
    }

    setStatus("success")
    setValues({
      name: "",
      email: "",
      phone: "",
      company: "",
      product_interest: "",
      message: "",
    })
  }

  const inputClass =
    "w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
  const labelClass =
    "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted"

  return (
    <section id="contact" className="bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow light>Contact</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Request a quote
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
              Tell us about your fabrication needs and our engineers will
              recommend the right folding machine for your workshop.
            </p>

            <div className="mt-10 space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-white/5 text-accent-soft">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-white/50">
                        {item.label}
                      </div>
                      <div className="mt-1 text-sm font-medium text-white">
                        {item.value}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-xl shadow-black/20 md:p-8">
            {status === "success" ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <CheckCircle2 className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-ink">
                  Thank you for your request
                </h3>
                <p className="mt-2 max-w-sm text-sm text-muted">
                  Our team will review your requirements and get back to you
                  within one business day.
                </p>
                <Button
                  variant="dark"
                  className="mt-6"
                  onClick={() => setStatus("idle")}
                >
                  Send another request
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Full name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={onChange}
                      className={inputClass}
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={onChange}
                      className={inputClass}
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={values.phone}
                      onChange={onChange}
                      className={inputClass}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className={labelClass}>
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={values.company}
                      onChange={onChange}
                      className={inputClass}
                      placeholder="Acme Fabrication"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="product_interest" className={labelClass}>
                    Product of interest
                  </label>
                  <select
                    id="product_interest"
                    name="product_interest"
                    value={values.product_interest}
                    onChange={onChange}
                    className={inputClass}
                  >
                    <option value="">Select a product</option>
                    {products.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Your requirements *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={values.message}
                    onChange={onChange}
                    className={inputClass}
                    placeholder="Material type, thickness, folding length, expected volume..."
                  />
                </div>

                {error && (
                  <p
                    role="alert"
                    className="rounded-md bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                  >
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Submit request
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
