import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Send } from "lucide-react"

const STORAGE_KEY = "saved_contacts"

const ContactForm = ({ formRef }) => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = "Name is required."
    if (!form.email.trim()) newErrors.email = "Email is required."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Enter a valid email address."
    if (!form.message.trim()) newErrors.message = "Message is required."
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    const contact = {
      id: Date.now().toString(),
      ...form,
      submittedAt: new Date().toISOString(),
    }

    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
    localStorage.setItem(STORAGE_KEY, JSON.stringify([contact, ...existing]))
    console.log("Contact saved:", contact)

    setSubmitted(true)
    setForm({ name: "", email: "", subject: "", message: "" })
    setErrors({})
  }

  const handleReset = () => setSubmitted(false)

  return (
    <section ref={formRef} id="contact" className="bg-white py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Send Us a Message</h2>
          <p className="text-slate-600">Fill out the form below and we'll be in touch soon.</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
          {submitted ? (
            <div className="flex flex-col items-center text-center py-8 gap-4">
              <CheckCircle className="w-14 h-14 text-emerald-500" />
              <h3 className="text-xl font-semibold text-slate-900">Message Received!</h3>
              <p className="text-slate-600 max-w-sm">
                Thanks for reaching out. We've saved your message and will get back to you within 24 hours.
              </p>
              <Button variant="outline" onClick={handleReset} className="mt-2">
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={handleChange}
                    className={errors.name ? "border-red-400 focus:ring-red-400" : ""}
                  />
                  {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={errors.email ? "border-red-400 focus:ring-red-400" : ""}
                  />
                  {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us what's on your mind..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className={errors.message ? "border-red-400 focus:ring-red-400" : ""}
                />
                {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
              </div>

              <Button type="submit" size="lg" className="w-full gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default ContactForm
