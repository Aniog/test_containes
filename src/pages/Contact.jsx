import { useEffect, useRef, useState } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { CheckCircle2, AlertCircle, Mail, Phone, MapPin } from "lucide-react"
import { dataClient, getErrorMessage } from "@/api/dataClient"

const interestOptions = [
  { value: "", label: "Select a product (optional)" },
  { value: "double-folding-machine", label: "Double Folding Machine" },
  { value: "double-folder", label: "Double Folder" },
  { value: "sheet-metal-folder", label: "Sheet Metal Folder" },
  { value: "sheet-metal-folding-machine", label: "Sheet Metal Folding Machine" },
  { value: "metal-folder", label: "Metal Folder" },
  { value: "metal-folder-machine", label: "Metal Folder Machine" },
  { value: "metal-folding-machine", label: "Metal Folding Machine" },
  { value: "other", label: "Other / not sure yet" },
]

const initialValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  country: "",
  interest: "",
  message: "",
}

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = "Please tell us your name."
  if (!values.email.trim()) errors.email = "Please provide an email address."
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = "That email address doesn't look right."
  if (!values.message.trim()) errors.message = "A short message helps us quote accurately."
  return errors
}

export default function Contact() {
  const heroRef = useRef(null)
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle")
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, heroRef.current)
  }, [])

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage(null)
    const v = validate(values)
    setErrors(v)
    if (Object.keys(v).length > 0) {
      setStatus("error")
      return
    }

    setStatus("submitting")
    try {
      const { data: response, error } = await dataClient
        .from("Contact Form Response")
        .insert({
          data: {
            name: values.name.trim(),
            email: values.email.trim(),
            phone: values.phone.trim() || null,
            company: values.company.trim() || null,
            country: values.country.trim() || null,
            interest: values.interest || null,
            message: values.message.trim(),
            status: "new",
          },
        })
        .select()
        .maybeSingle()

      if (error || response?.success === false) {
        throw new Error(getErrorMessage(response, error))
      }

      setStatus("success")
      setValues(initialValues)
    } catch (err) {
      console.error("Contact form submission failed:", err)
      setErrorMessage(err.message || "We could not send your message. Please try again.")
      setStatus("error")
    }
  }

  const fieldClass = (name) =>
    `w-full bg-paper border ${errors[name] ? "border-red-400" : "border-hairline"} px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-ink transition-colors`

  return (
    <>
      <section ref={heroRef} className="relative overflow-hidden bg-ink text-cream">
        <div
          className="absolute inset-0 opacity-25"
          data-strk-bg-id="contact-hero-bg-a1b6d2"
          data-strk-bg="[contact-hero-subtitle] [contact-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-ink/85" aria-hidden="true" />
        <div className="container-page relative z-10 py-24 md:py-32 max-w-4xl">
          <p className="eyebrow text-gold">Get in touch</p>
          <h1
            id="contact-hero-title"
            className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl text-cream"
          >
            Let&apos;s configure your machine.
          </h1>
          <p
            id="contact-hero-subtitle"
            className="mt-8 text-base md:text-lg text-cream/70 leading-relaxed max-w-2xl"
          >
            Tell us a little about your shop, the parts you make, and the
            tolerances you need. Most quotes are returned within 48 hours.
          </p>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-page grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Reach us directly</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl text-ink">
              We answer every message.
            </h2>
            <p className="mt-6 text-base text-steel leading-relaxed">
              Our sales engineers reply personally — usually within one
              business day, often within a few hours.
            </p>

            <ul className="mt-10 space-y-6 text-sm">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-ink">Headquarters</p>
                  <p className="text-steel mt-1">Industrial Park, Building 14<br/>Shanghai, China</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-ink">Sales hotline</p>
                  <a href="tel:+862168880000" className="text-steel mt-1 block hover:text-ink">+86 21 6888 0000</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-ink">Email</p>
                  <a href="mailto:sales@artitect-machinery.com" className="text-steel mt-1 block hover:text-ink">
                    sales@artitect-machinery.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="card p-8 md:p-10">
              {status === "success" ? (
                <div className="py-10 text-center" role="status" aria-live="polite">
                  <CheckCircle2 className="w-12 h-12 text-gold mx-auto" strokeWidth={1.5} />
                  <h3 className="mt-6 font-display text-3xl text-ink">Thank you.</h3>
                  <p className="mt-4 text-base text-steel max-w-md mx-auto">
                    Your message is on its way to our sales team. We&apos;ll be
                    in touch within one business day with a recommended machine
                    and a quote.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-8 btn-outline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate aria-busy={status === "submitting"}>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium uppercase tracking-eyebrow text-steel mb-2">
                        Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={onChange}
                        required
                        className={fieldClass("name")}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-medium uppercase tracking-eyebrow text-steel mb-2">
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={onChange}
                        required
                        className={fieldClass("email")}
                        placeholder="you@company.com"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium uppercase tracking-eyebrow text-steel mb-2">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={values.phone}
                        onChange={onChange}
                        className={fieldClass("phone")}
                        placeholder="+1 555 0123"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-xs font-medium uppercase tracking-eyebrow text-steel mb-2">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={values.company}
                        onChange={onChange}
                        className={fieldClass("company")}
                        placeholder="Workshop or company name"
                      />
                    </div>

                    <div>
                      <label htmlFor="country" className="block text-xs font-medium uppercase tracking-eyebrow text-steel mb-2">
                        Country
                      </label>
                      <input
                        id="country"
                        name="country"
                        type="text"
                        value={values.country}
                        onChange={onChange}
                        className={fieldClass("country")}
                        placeholder="Where are you based?"
                      />
                    </div>

                    <div>
                      <label htmlFor="interest" className="block text-xs font-medium uppercase tracking-eyebrow text-steel mb-2">
                        Product of interest
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={values.interest}
                        onChange={onChange}
                        className={fieldClass("interest")}
                      >
                        {interestOptions.map((o) => (
                          <option key={o.value} value={o.value}>{o.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="message" className="block text-xs font-medium uppercase tracking-eyebrow text-steel mb-2">
                      How can we help? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={values.message}
                      onChange={onChange}
                      required
                      className={fieldClass("message")}
                      placeholder="Tell us about the parts you make, the materials, the tolerances, and your timeline."
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-600">{errors.message}</p>
                    )}
                  </div>

                  {errorMessage && (
                    <div
                      className="mt-6 flex items-start gap-3 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                      role="alert"
                    >
                      <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "submitting" ? "Sending…" : "Send message"}
                    </button>
                    <p className="text-xs text-muted">
                      We&apos;ll reply within one business day.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
