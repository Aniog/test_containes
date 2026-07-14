import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Loader2 } from "lucide-react"

const STORAGE_KEY = "spark_contacts"

export function saveContact(contact) {
  const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
  const newContact = {
    ...contact,
    id: crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
  }
  existing.unshift(newContact)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing))
  return newContact
}

export function getContacts() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
}

const initialForm = { name: "", email: "", company: "", message: "" }

export default function ContactForm({ formRef }) {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = "Name is required"
    if (!form.email.trim()) errs.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email"
    if (!form.message.trim()) errs.message = "Message is required"
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitting(true)
    setTimeout(() => {
      saveContact(form)
      setSubmitting(false)
      setSubmitted(true)
      setForm(initialForm)
    }, 800)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Message received!</h3>
        <p className="text-slate-600 mb-6">Thanks for reaching out. We'll get back to you within 24 hours.</p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <Label htmlFor="name">Full name <span className="text-red-500">*</span></Label>
          <Input
            id="name"
            name="name"
            placeholder="Jane Smith"
            value={form.name}
            onChange={handleChange}
            className={errors.name ? "border-red-400 focus:ring-red-400" : ""}
          />
          {errors.name && <p className="text-xs text-red-600">{errors.name}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email address <span className="text-red-500">*</span></Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="jane@company.com"
            value={form.email}
            onChange={handleChange}
            className={errors.email ? "border-red-400 focus:ring-red-400" : ""}
          />
          {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="company">Company <span className="text-slate-400 font-normal">(optional)</span></Label>
        <Input
          id="company"
          name="company"
          placeholder="Acme Inc."
          value={form.company}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your project or what you'd like to discuss..."
          value={form.message}
          onChange={handleChange}
          className={errors.message ? "border-red-400 focus:ring-red-400" : ""}
          rows={4}
        />
        {errors.message && <p className="text-xs text-red-600">{errors.message}</p>}
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={submitting}>
        {submitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  )
}
