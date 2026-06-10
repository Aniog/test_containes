import { useEffect, useMemo, useRef, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { companyInfo, trustStats } from "@/data/company"
import { productById, products } from "@/data/products"
import { cn } from "@/lib/utils"

const topicOptions = [
  { id: "quote", label: "Request a quote" },
  { id: "demo", label: "Book a demo" },
  { id: "spec", label: "Compare specifications" },
  { id: "spare", label: "Spare parts" },
  { id: "service", label: "Service & support" },
  { id: "newsletter", label: "Newsletter" },
  { id: "legal", label: "Press & legal" },
]

const initialState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  country: "",
  topic: "quote",
  product: "",
  material: "",
  thickness: "",
  message: "",
  consent: false,
}

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = "Please tell us your name."
  if (!values.email.trim()) {
    errors.email = "An email address is required."
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "That email address does not look right."
  }
  if (!values.message.trim()) {
    errors.message = "Tell us a little about what you need."
  }
  if (!values.consent) {
    errors.consent = "We need your consent to reply to your enquiry."
  }
  return errors
}

export default function Contact() {
  const [params] = useSearchParams()
  const initialTopic = params.get("topic") ?? "quote"
  const initialProduct = params.get("model") ?? ""

  const [values, setValues] = useState({
    ...initialState,
    topic: topicOptions.some((t) => t.id === initialTopic)
      ? initialTopic
      : "quote",
    product: productById[initialProduct] ? initialProduct : "",
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle")

  const heroRef = useRef(null)
  useEffect(() => {
    if (!heroRef.current) return
    return ImageHelper.loadImages(strkImgConfig, heroRef.current)
  }, [])

  const onChange = (field) => (e) => {
    const value = e?.target?.type === "checkbox" ? e.target.checked : e.target.value
    setValues((v) => ({ ...v, [field]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const next = validate(values)
    setErrors(next)
    if (Object.keys(next).length > 0) {
      setStatus("error")
      return
    }
    setStatus("submitting")
    setTimeout(() => {
      setStatus("success")
    }, 600)
  }

  const reset = () => {
    setValues({ ...initialState, topic: initialTopic, product: initialProduct })
    setErrors({})
    setStatus("idle")
  }

  const fieldClass = (name) =>
    cn(
      "block w-full border bg-paper px-4 py-3 text-sm text-ink placeholder:text-steel-soft/70 transition-colors focus:outline-none focus:ring-2 focus:ring-brass/40",
      errors[name]
        ? "border-red-500/70 focus:border-red-500"
        : "border-hairline focus:border-ink",
    )

  const isQuote = values.topic === "quote" || values.topic === "demo"
  const isSpec = values.topic === "spec"

  const headline = useMemo(() => {
    switch (values.topic) {
      case "quote":
        return "Request a quote"
      case "demo":
        return "Book a demo"
      case "spec":
        return "Compare specifications"
      case "spare":
        return "Order spare parts"
      case "service":
        return "Service & support"
      case "newsletter":
        return "Subscribe to the newsletter"
      default:
        return "Get in touch"
    }
  }, [values.topic])

  return (
    <>
      <section
        ref={heroRef}
        className="relative isolate overflow-hidden bg-ink text-bone"
      >
        <div
          aria-hidden="true"
          data-strk-bg-id="contact-hero-bg"
          data-strk-bg="[contact-hero-eyebrow] [contact-hero-title] [contact-hero-sub]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
          className="absolute inset-0 opacity-40"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink"
        />

        <div className="container-content relative pt-40 pb-20 md:pt-48 md:pb-24">
          <div className="max-w-3xl">
            <span id="contact-hero-eyebrow" className="eyebrow-light">
              Get in touch
            </span>
            <h1
              id="contact-hero-title"
              className="mt-6 font-serif text-5xl font-medium leading-[1.05] text-bone md:text-6xl lg:text-7xl text-balance"
            >
              Tell us what you fold.
              <br />
              <span className="text-brass">We will reply in two days.</span>
            </h1>
            <p
              id="contact-hero-sub"
              className="mt-8 max-w-2xl text-base leading-relaxed text-bone/75 md:text-lg"
            >
              A real engineer reads every enquiry. Send a sample drawing, a
              material spec, and a rough volume — we will respond with a
              series, a configuration, and a fixed price.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bone section-pad-lg">
        <div className="container-content">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="eyebrow">Send a message</p>
              <h2 className="mt-4 font-serif text-3xl text-ink md:text-4xl">
                {headline}.
              </h2>
              <p className="mt-3 text-steel-soft">
                Fill in the form below and we will route your enquiry to the
                engineer who specialises in your region and machine series.
              </p>

              {status === "success" ? (
                <div className="mt-10 border border-brass/40 bg-paper p-8 md:p-10">
                  <div className="grid h-12 w-12 place-items-center bg-brass text-ink">
                    <CheckCircle2 className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl text-ink md:text-3xl">
                    Thanks — your message is on its way.
                  </h3>
                  <p className="mt-3 text-steel-soft">
                    We will reply from
                    <span className="text-ink"> {companyInfo.email} </span>
                    within two business days. For urgent service, call
                    <a
                      className="ml-1 underline decoration-brass underline-offset-4 hover:text-ink"
                      href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                    >
                      {companyInfo.phone}
                    </a>
                    .
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={reset}
                      className="btn-outline-dark"
                    >
                      Send another message
                    </button>
                    <Link to="/products" className="btn-primary">
                      Browse machines
                      <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                    </Link>
                  </div>
                </div>
              ) : (
                <form
                  noValidate
                  onSubmit={onSubmit}
                  className="mt-10 space-y-6"
                  aria-busy={status === "submitting"}
                >
                  <fieldset>
                    <legend className="text-xs font-semibold uppercase tracking-eyebrow text-steel-soft">
                      What can we help with?
                    </legend>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {topicOptions.map((opt) => (
                        <label
                          key={opt.id}
                          className={cn(
                            "cursor-pointer border px-3.5 py-2 text-xs font-medium uppercase tracking-eyebrow transition-colors",
                            values.topic === opt.id
                              ? "border-ink bg-ink text-bone"
                              : "border-hairline bg-paper text-steel-soft hover:border-ink hover:text-ink",
                          )}
                        >
                          <input
                            type="radio"
                            name="topic"
                            value={opt.id}
                            checked={values.topic === opt.id}
                            onChange={onChange("topic")}
                            className="sr-only"
                          />
                          {opt.label}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-xs font-semibold uppercase tracking-eyebrow text-steel-soft"
                      >
                        Full name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={values.name}
                        onChange={onChange("name")}
                        className={cn(fieldClass("name"), "mt-2")}
                        placeholder="Jane Müller"
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-600">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="text-xs font-semibold uppercase tracking-eyebrow text-steel-soft"
                      >
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={values.email}
                        onChange={onChange("email")}
                        className={cn(fieldClass("email"), "mt-2")}
                        placeholder="jane@yourcompany.com"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="text-xs font-semibold uppercase tracking-eyebrow text-steel-soft"
                      >
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        value={values.company}
                        onChange={onChange("company")}
                        className={cn(fieldClass("company"), "mt-2")}
                        placeholder="Acme Fabrication"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="text-xs font-semibold uppercase tracking-eyebrow text-steel-soft"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={values.phone}
                        onChange={onChange("phone")}
                        className={cn(fieldClass("phone"), "mt-2")}
                        placeholder="+49 ..."
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label
                        htmlFor="country"
                        className="text-xs font-semibold uppercase tracking-eyebrow text-steel-soft"
                      >
                        Country
                      </label>
                      <input
                        id="country"
                        name="country"
                        type="text"
                        autoComplete="country-name"
                        value={values.country}
                        onChange={onChange("country")}
                        className={cn(fieldClass("country"), "mt-2")}
                        placeholder="Germany"
                      />
                    </div>
                  </div>

                  {(isQuote || isSpec) && (
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      <div className="md:col-span-2">
                        <label
                          htmlFor="product"
                          className="text-xs font-semibold uppercase tracking-eyebrow text-steel-soft"
                        >
                          Machine of interest
                        </label>
                        <select
                          id="product"
                          name="product"
                          value={values.product}
                          onChange={onChange("product")}
                          className={cn(fieldClass("product"), "mt-2 appearance-none")}
                        >
                          <option value="">Select a model (optional)</option>
                          {products.map((p) => (
                            <option key={p.id} value={p.id}>
                              {p.series} — {p.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="material"
                          className="text-xs font-semibold uppercase tracking-eyebrow text-steel-soft"
                        >
                          Material
                        </label>
                        <input
                          id="material"
                          name="material"
                          type="text"
                          value={values.material}
                          onChange={onChange("material")}
                          className={cn(fieldClass("material"), "mt-2")}
                          placeholder="Mild steel, stainless, aluminium..."
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="thickness"
                          className="text-xs font-semibold uppercase tracking-eyebrow text-steel-soft"
                        >
                          Max thickness (mm)
                        </label>
                        <input
                          id="thickness"
                          name="thickness"
                          type="text"
                          inputMode="decimal"
                          value={values.thickness}
                          onChange={onChange("thickness")}
                          className={cn(fieldClass("thickness"), "mt-2")}
                          placeholder="2.0"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="message"
                      className="text-xs font-semibold uppercase tracking-eyebrow text-steel-soft"
                    >
                      How can we help? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={values.message}
                      onChange={onChange("message")}
                      className={cn(fieldClass("message"), "mt-2 resize-y")}
                      placeholder="Tell us about your part geometry, batch size, and timeline..."
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="flex items-start gap-3 text-sm text-steel-soft">
                      <input
                        type="checkbox"
                        checked={values.consent}
                        onChange={onChange("consent")}
                        className="mt-1 h-4 w-4 accent-brass"
                      />
                      <span>
                        I agree to be contacted by Artitect Machinery about my
                        enquiry. We will never share your details with third
                        parties.
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="mt-1.5 text-xs text-red-600">
                        {errors.consent}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="submit"
                      className="btn-primary"
                      disabled={status === "submitting"}
                    >
                      {status === "submitting" ? "Sending..." : "Send message"}
                      <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                    </button>
                    <p className="text-xs text-steel-soft">
                      Average reply time: 18 hours.
                    </p>
                  </div>
                </form>
              )}
            </div>

            <aside className="lg:col-span-5">
              <div className="border border-hairline bg-paper p-8 md:p-10">
                <h3 className="font-serif text-2xl text-ink">
                  Direct channels
                </h3>
                <p className="mt-2 text-sm text-steel-soft">
                  Prefer the old-fashioned way? Pick a channel and we will route
                  you to the right team.
                </p>

                <dl className="mt-8 space-y-6 text-sm">
                  <div className="flex items-start gap-3">
                    <Phone
                      className="mt-0.5 h-4 w-4 text-brass-deep"
                      strokeWidth={1.5}
                    />
                    <div>
                      <dt className="text-xs uppercase tracking-eyebrow text-steel-soft">
                        Sales & engineering
                      </dt>
                      <dd className="mt-1">
                        <a
                          href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                          className="font-serif text-xl text-ink hover:text-brass-deep"
                        >
                          {companyInfo.phone}
                        </a>
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail
                      className="mt-0.5 h-4 w-4 text-brass-deep"
                      strokeWidth={1.5}
                    />
                    <div>
                      <dt className="text-xs uppercase tracking-eyebrow text-steel-soft">
                        Email
                      </dt>
                      <dd className="mt-1">
                        <a
                          href={`mailto:${companyInfo.email}`}
                          className="font-serif text-xl text-ink hover:text-brass-deep break-all"
                        >
                          {companyInfo.email}
                        </a>
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin
                      className="mt-0.5 h-4 w-4 text-brass-deep"
                      strokeWidth={1.5}
                    />
                    <div>
                      <dt className="text-xs uppercase tracking-eyebrow text-steel-soft">
                        Headquarters
                      </dt>
                      <dd className="mt-1 text-ink">
                        {companyInfo.address}
                      </dd>
                    </div>
                  </div>
                </dl>

                <div className="hairline mt-8" />
                <p className="mt-6 text-xs text-steel-soft">
                  Stuttgart HQ open Mon – Fri, 07:30 – 17:30 CET. On-site
                  service available in 48 countries via regional partners.
                </p>
              </div>

              <div className="mt-6 border border-hairline bg-paper p-8">
                <p className="eyebrow">Why engineers choose us</p>
                <ul className="mt-5 space-y-3 text-sm text-steel-soft">
                  {trustStats.map((s) => (
                    <li
                      key={s.label}
                      className="flex items-baseline justify-between gap-4"
                    >
                      <span>{s.label}</span>
                      <span className="font-serif text-2xl text-ink num-tabular">
                        {s.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
