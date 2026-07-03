import { useState } from "react"
import { Mail, Instagram, MapPin, Check } from "lucide-react"

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "General",
    message: "",
  })

  function onChange(e) {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
  }

  function onSubmit(e) {
    e.preventDefault()
    if (!values.name || !values.email || !values.message) return
    setSent(true)
    setValues({ name: "", email: "", subject: "General", message: "" })
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <main className="pt-24 md:pt-28">
      <header className="container-site pb-10 border-b border-line">
        <p className="eyebrow">Contact</p>
        <h1
          id="contact-title"
          className="display text-4xl md:text-5xl mt-3"
        >
          We'd love to hear from you
        </h1>
        <p
          id="contact-subtitle"
          className="mt-3 text-ink-secondary max-w-xl"
        >
          Questions about a piece, your order, or a custom request? Drop us a
          line — we reply within a few hours.
        </p>
      </header>

      <div className="container-site py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <form
            onSubmit={onSubmit}
            className="md:col-span-7 space-y-4"
            aria-label="Contact form"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                name="name"
                value={values.name}
                onChange={onChange}
                type="text"
                placeholder="Name"
                className="input-base w-full"
                required
              />
              <input
                name="email"
                value={values.email}
                onChange={onChange}
                type="email"
                placeholder="Email"
                className="input-base w-full"
                required
              />
            </div>
            <select
              name="subject"
              value={values.subject}
              onChange={onChange}
              className="input-base w-full"
            >
              <option className="bg-base">General</option>
              <option className="bg-base">Order</option>
              <option className="bg-base">Returns</option>
              <option className="bg-base">Wholesale</option>
              <option className="bg-base">Press</option>
            </select>
            <textarea
              name="message"
              value={values.message}
              onChange={onChange}
              rows={6}
              placeholder="Your message"
              className="input-base w-full resize-none"
              required
            />
            <button type="submit" className="btn-primary w-full sm:w-auto">
              {sent ? (
                <span className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4" strokeWidth={1.5} /> Message sent
                </span>
              ) : (
                "Send message"
              )}
            </button>
          </form>

          <aside className="md:col-span-5 space-y-6">
            <div className="bg-surface border border-line p-6">
              <p className="eyebrow text-ink-secondary">Studio</p>
              <p className="mt-3 text-ink-primary">Velmora Fine Jewelry</p>
              <p className="text-sm text-ink-secondary mt-1 flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-accent" strokeWidth={1.5} />
                Rua das Flores 12, Lisbon, Portugal
              </p>
              <p className="text-sm text-ink-secondary mt-2 flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-accent" strokeWidth={1.5} />
                hello@velmora.com
              </p>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm text-ink-secondary hover:text-ink-primary"
              >
                <Instagram className="h-3.5 w-3.5 text-accent" strokeWidth={1.5} />
                @velmora
              </a>
            </div>
            <p className="text-[11px] text-ink-muted tracking-wider2">
              Mon — Fri, 9am — 6pm WET. We typically reply within a few hours.
            </p>
          </aside>
        </div>
      </div>
    </main>
  )
}
