import * as React from "react"
import { useState } from "react"
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { Button } from "@/components/ui/Button"
import { useToast } from "@/components/ui/Toaster"

const interests = [
  "Double Folding Machine",
  "Sheet Metal Folding Machine",
  "Metal Folder Machine",
  "Metal Folding Machine",
  "Compact Double Folder",
  "Not sure yet",
]

export function Contact({ variant = "home" }) {
  const { success } = useToast()
  const [values, setValues] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: interests[0],
    message: "",
  })
  const [submitting, setSubmitting] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
      return
    }
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 700))
    setSubmitting(false)
    success({
      title: "Request received",
      description:
        "An ARTITECT engineer will reply within one business day. Thank you.",
    })
    setValues({
      name: "",
      company: "",
      email: "",
      phone: "",
      interest: interests[0],
      message: "",
    })
  }

  return (
    <section
      id="contact"
      className={
        variant === "page"
          ? "bg-ink py-24 md:py-32"
          : "bg-ink py-24 md:py-32 border-t border-line"
      }
    >
      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Request a quote"
            title={
              <span>
                Talk to an engineer, not a sales rep.
              </span>
            }
            subtitle="Tell us what you're folding and we'll come back with a machine spec, a price and a delivery date — usually within 48 hours."
          />

          <ul className="mt-10 space-y-5 text-sm text-text-muted">
            <li className="flex items-start gap-4">
              <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-md border border-line bg-slate-850 text-copper-400">
                <MapPin className="w-4 h-4" strokeWidth={1.5} />
              </span>
              <div>
                <p className="text-text font-medium">Headquarters</p>
                <p>2240 Foundry Road, Bay 14 — Pittsburgh, PA 15222</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-md border border-line bg-slate-850 text-copper-400">
                <Phone className="w-4 h-4" strokeWidth={1.5} />
              </span>
              <div>
                <p className="text-text font-medium">Sales</p>
                <p>+1 (800) 555-0199 · +44 161 555 0142 (EU)</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-md border border-line bg-slate-850 text-copper-400">
                <Mail className="w-4 h-4" strokeWidth={1.5} />
              </span>
              <div>
                <p className="text-text font-medium">Email</p>
                <p>sales@artitect-machinery.com</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-md border border-line bg-slate-850 text-copper-400">
                <Clock className="w-4 h-4" strokeWidth={1.5} />
              </span>
              <div>
                <p className="text-text font-medium">Service</p>
                <p>24/7 emergency dispatch — parts stocked globally</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={onSubmit}
            className="rounded-md border border-line bg-slate-850 p-6 md:p-8"
            aria-busy={submitting}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs tracking-eyebrow uppercase text-text-muted mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={onChange}
                  required
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-xs tracking-eyebrow uppercase text-text-muted mb-2">
                  Company
                </label>
                <Input
                  id="company"
                  name="company"
                  value={values.company}
                  onChange={onChange}
                  placeholder="Where you work"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs tracking-eyebrow uppercase text-text-muted mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={onChange}
                  required
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs tracking-eyebrow uppercase text-text-muted mb-2">
                  Phone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={values.phone}
                  onChange={onChange}
                  placeholder="+1 555 000 0000"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="interest" className="block text-xs tracking-eyebrow uppercase text-text-muted mb-2">
                  I'm interested in
                </label>
                <div className="relative">
                  <select
                    id="interest"
                    name="interest"
                    value={values.interest}
                    onChange={onChange}
                    className="flex h-11 w-full appearance-none rounded-md border border-line bg-ink px-4 py-2 pr-10 text-sm text-text focus:outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500/40"
                  >
                    {interests.map((i) => (
                      <option key={i} value={i} className="bg-ink text-text">
                        {i}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text-dim">
                    ▾
                  </span>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-xs tracking-eyebrow uppercase text-text-muted mb-2">
                  Tell us about your application *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={values.message}
                  onChange={onChange}
                  required
                  rows={5}
                  placeholder="Material, thickness, part dimensions, annual volume…"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-xs text-text-dim max-w-md">
                By submitting, you agree to be contacted by an ARTITECT engineer.
                We never share your details with third parties.
              </p>
              <Button type="submit" size="lg" disabled={submitting} className="group">
                {submitting ? "Sending…" : "Send request"}
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
