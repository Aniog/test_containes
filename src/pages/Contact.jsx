import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Mail, Phone, MapPin, Check, AlertCircle } from "lucide-react"
import { DataClient } from "@strikingly/sdk"
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config.jsx"

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const machineOptions = [
  "DF-4000 Double Folding Machine",
  "DF-3200 Double Folder",
  "SF-2500 Sheet Metal Folder",
  "MF Pro Metal Folder Machine",
  "Not sure yet",
]

const initialValues = {
  name: "",
  email: "",
  company: "",
  phone: "",
  country: "",
  machine_interest: "Not sure yet",
  message: "",
}

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(", ")
  }
  return error?.message || "Could not send your inquiry. Please try again."
}

const Contact = () => {
  const location = useLocation()
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState(null)

  useEffect(() => {
    const preferred = location.state?.machine
    if (!preferred) return
    const match = machineOptions.find((m) => m.includes(preferred.replace("Artitect ", "")))
    if (match) {
      setValues((v) => ({ ...v, machine_interest: match }))
    }
  }, [location.state])

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
      setError("Please complete name, email and message.")
      return
    }
    if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      setError("Please provide a valid email address.")
      return
    }

    setStatus("submitting")

    const { data: response, error: insertError } = await client
      .from("ContactInquiry")
      .insert({
        data: {
          name: values.name.trim(),
          email: values.email.trim(),
          company: values.company.trim(),
          phone: values.phone.trim(),
          country: values.country.trim(),
          machine_interest: values.machine_interest,
          message: values.message.trim(),
        },
      })
      .select()
      .single()

    if (insertError || response?.success === false) {
      setError(getErrorMessage(response, insertError))
      setStatus("error")
      return
    }

    setStatus("success")
    setValues(initialValues)
  }

  return (
    <div>
      <section className="bg-graphite text-bone">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-accent" />
            <p className="text-xs uppercase tracking-[0.35em] text-accent">Contact</p>
          </div>
          <h1 className="font-serif font-light text-5xl md:text-7xl leading-[1.05] tracking-tight max-w-4xl">
            Let's plan your <span className="italic text-accent">folding line.</span>
          </h1>
          <p className="mt-8 text-bone/70 leading-relaxed max-w-2xl">
            Send us a few details about your shop and the parts you fold. We'll
            return with a tailored Artitect machine proposal within two working days.
          </p>
        </div>
      </section>

      <section className="bg-bone">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4 space-y-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent">Headquarters</p>
              <p className="mt-3 font-serif text-2xl text-graphite leading-snug">
                Industriestrasse 14<br />
                8854 Galgenen<br />
                Switzerland
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-accent">Direct</p>
              <ul className="space-y-3 text-sm text-graphite">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-accent" />
                  <a href="tel:+41552501800" className="hover:text-accent transition-colors">+41 55 250 18 00</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-accent" />
                  <a href="mailto:hello@artitect.com" className="hover:text-accent transition-colors">hello@artitect.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent mt-0.5" />
                  <span>Mon — Fri · 08:00 – 18:00 CET</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-hairline pt-8">
              <p className="text-xs uppercase tracking-[0.3em] text-accent">Service Worldwide</p>
              <p className="mt-3 text-sm text-muted-ink leading-relaxed">
                Authorised Artitect service partners in 40+ countries. Tell us
                your location and we'll connect you to the nearest team.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <form
              onSubmit={onSubmit}
              className="border border-hairline bg-cloud p-8 md:p-12 space-y-6"
              aria-busy={status === "submitting"}
              noValidate
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="Full name" name="name" value={values.name} onChange={onChange} required />
                <Field label="Email" type="email" name="email" value={values.email} onChange={onChange} required />
                <Field label="Company" name="company" value={values.company} onChange={onChange} />
                <Field label="Phone" name="phone" value={values.phone} onChange={onChange} />
                <Field label="Country" name="country" value={values.country} onChange={onChange} />

                <div className="flex flex-col gap-2">
                  <label htmlFor="machine_interest" className="text-xs uppercase tracking-[0.25em] text-muted-ink">
                    Machine of interest
                  </label>
                  <select
                    id="machine_interest"
                    name="machine_interest"
                    value={values.machine_interest}
                    onChange={onChange}
                    className="bg-bone border border-hairline rounded-sm px-4 py-3 text-graphite focus:outline-none focus:border-graphite transition-colors"
                  >
                    {machineOptions.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs uppercase tracking-[0.25em] text-muted-ink">
                  Tell us about your project <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={values.message}
                  onChange={onChange}
                  placeholder="What do you fold? Typical sheet sizes, materials, and daily volume help us recommend the right machine."
                  className="bg-bone border border-hairline rounded-sm px-4 py-3 text-graphite placeholder:text-muted-ink/60 focus:outline-none focus:border-graphite transition-colors resize-y"
                />
              </div>

              {error && (
                <div className="flex items-start gap-3 border border-red-300 bg-red-50 text-red-800 px-4 py-3 rounded-sm text-sm">
                  <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {status === "success" && (
                <div className="flex items-start gap-3 border border-hairline bg-bone text-graphite px-4 py-3 rounded-sm text-sm">
                  <Check className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                  <span>
                    Thank you. Your inquiry has reached Artitect — an engineer will be in
                    touch within two working days.
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between gap-4 pt-2">
                <p className="text-xs text-muted-ink max-w-md">
                  By submitting this form you agree to be contacted about your
                  inquiry. We never share your details.
                </p>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="bg-graphite text-bone px-7 py-4 text-xs uppercase tracking-[0.25em] rounded-sm hover:bg-steel transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending…" : "Send Inquiry"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

const Field = ({ label, name, type = "text", value, onChange, required }) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={name} className="text-xs uppercase tracking-[0.25em] text-muted-ink">
      {label} {required && <span className="text-accent">*</span>}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      className="bg-bone border border-hairline rounded-sm px-4 py-3 text-graphite focus:outline-none focus:border-graphite transition-colors"
    />
  </div>
)

export default Contact
