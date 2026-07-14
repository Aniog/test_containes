import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2 } from "lucide-react"

const STORAGE_KEY = "saved_contacts"

const ContactForm = ({ formRef }) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = "Name is required."
    if (!form.email.trim()) {
      newErrors.email = "Email is required."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email."
    }
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

    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
    const newContact = {
      id: Date.now().toString(),
      ...form,
      submittedAt: new Date().toISOString(),
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify([newContact, ...existing]))
    console.log("Contact saved:", newContact)

    setSubmitted(true)
    setForm({ name: "", email: "", phone: "", message: "" })
    setErrors({})
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Message sent!</h3>
        <p className="text-gray-600 mb-6">
          Thanks for reaching out. We'll get back to you shortly.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <Label htmlFor="name">Full name *</Label>
          <Input
            id="name"
            name="name"
            placeholder="Jane Smith"
            value={form.name}
            onChange={handleChange}
            className={errors.name ? "border-red-400 focus:ring-red-400" : ""}
          />
          {errors.name && (
            <p className="text-xs text-red-600">{errors.name}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="jane@example.com"
            value={form.email}
            onChange={handleChange}
            className={errors.email ? "border-red-400 focus:ring-red-400" : ""}
          />
          {errors.email && (
            <p className="text-xs text-red-600">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="phone">Phone number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+1 (555) 000-0000"
          value={form.phone}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us how we can help..."
          value={form.message}
          onChange={handleChange}
          className={errors.message ? "border-red-400 focus:ring-red-400" : ""}
          rows={4}
        />
        {errors.message && (
          <p className="text-xs text-red-600">{errors.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" className="w-full">
        Send message
      </Button>
    </form>
  )
}

const ContactSection = ({ sectionRef }) => {
  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 md:py-28 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in touch
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Have a question or want to learn more? Fill out the form and our
              team will get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-lg">✉️</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Email us</p>
                  <p className="text-gray-600 text-sm">hello@yourcompany.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-lg">📞</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Call us</p>
                  <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-lg">🕐</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Business hours</p>
                  <p className="text-gray-600 text-sm">Mon–Fri, 9am–6pm EST</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
