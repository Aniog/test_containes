import { useState } from "react"
import { CheckCircle, Send } from "lucide-react"
import { DataClient } from "@strikingly/sdk"
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config"
import { Button } from "@/components/ui/Button"
import { Input, Textarea } from "@/components/ui/Input"
import { Card } from "@/components/ui/Card"

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

async function saveContact(contact) {
  const { data: response, error } = await client
    .from("Contact Form Responses")
    .insert({ data: { name: contact.name, email: contact.email, phone: contact.phone || undefined, message: contact.message } })
    .select()
    .single()

  if (error) throw error
  if (response?.success === false) throw new Error((response.errors || []).join(", ") || "Failed to save contact")
  console.log("Contact saved to DB:", response?.data)
  return response?.data
}

const initialForm = { name: "", email: "", phone: "", message: "" }

export default function ContactForm({ sectionRef }) {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function validate() {
    const errs = {}
    if (!form.name.trim()) errs.name = "Name is required"
    if (!form.email.trim()) errs.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email"
    if (!form.message.trim()) errs.message = "Message is required"
    return errs
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setLoading(true)
    try {
      await saveContact(form)
      setSubmitted(true)
    } catch (err) {
      console.error("Failed to save contact:", err)
      setErrors({ submit: err.message || "Something went wrong. Please try again." })
    } finally {
      setLoading(false)
    }
  }

  function handleReset() {
    setForm(initialForm)
    setErrors({})
    setSubmitted(false)
  }

  return (
    <section ref={sectionRef} id="contact" className="bg-slate-50 py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Get in Touch</h2>
          <p className="text-slate-500 text-lg">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </div>

        <Card className="p-8">
          {submitted ? (
            <div className="flex flex-col items-center text-center py-8 gap-4">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Message Sent!</h3>
              <p className="text-slate-500 max-w-sm">
                Thanks for reaching out, <span className="font-medium text-slate-700">{form.name}</span>. We've saved your message and will be in touch soon.
              </p>
              <Button variant="outline" onClick={handleReset} className="mt-2">
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input
                  id="name"
                  name="name"
                  label="Full Name *"
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  label="Email Address *"
                  placeholder="jane@example.com"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                />
              </div>
              <Input
                id="phone"
                name="phone"
                type="tel"
                label="Phone Number (optional)"
                placeholder="+1 (555) 000-0000"
                value={form.phone}
                onChange={handleChange}
              />
              <Textarea
                id="message"
                name="message"
                label="Message *"
                placeholder="Tell us how we can help you..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                error={errors.message}
              />
              <Button type="submit" size="lg" className="w-full" disabled={loading}>
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </span>
                )}
              </Button>
              {errors.submit && (
                <p className="text-sm text-red-600 text-center">{errors.submit}</p>
              )}
            </form>
          )}
        </Card>
      </div>
    </section>
  )
}
