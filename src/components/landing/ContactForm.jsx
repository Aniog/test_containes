import { useState } from "react"
import { CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"

const STORAGE_KEY = "saved_contacts"

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = "Name is required"
  if (!form.email.trim()) errors.email = "Email is required"
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Enter a valid email address"
  if (!form.message.trim()) errors.message = "Message is required"
  return errors
}

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle") // idle | submitting | success

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus("submitting")

    // Simulate a brief save delay for UX
    setTimeout(() => {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
      const newContact = {
        id: Date.now().toString(),
        ...form,
        submittedAt: new Date().toISOString(),
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify([newContact, ...existing]))
      console.log("Contact saved:", newContact)
      setStatus("success")
      setForm({ name: "", email: "", phone: "", message: "" })
    }, 800)
  }

  const handleReset = () => setStatus("idle")

  return (
    <section id="contact" className="bg-white py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-slate-600">
            Have a question or want to work together? Fill out the form and we'll get back to you soon.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
          {status === "success" ? (
            <div className="flex flex-col items-center text-center py-8 gap-4">
              <CheckCircle className="w-14 h-14 text-emerald-500" />
              <h3 className="text-xl font-semibold text-slate-900">Message Sent!</h3>
              <p className="text-slate-600 max-w-sm">
                Thanks for reaching out. Your message has been saved and we'll be in touch shortly.
              </p>
              <Button variant="outline" onClick={handleReset} className="mt-2">
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
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
                placeholder="Tell us how we can help..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                error={errors.message}
              />
              <Button
                type="submit"
                size="lg"
                className="w-full mt-1"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
