import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Mail, Phone, MapPin } from "lucide-react"

const STORAGE_KEY = "saved_contacts"

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = "Name is required"
    if (!form.email.trim()) newErrors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Enter a valid email"
    if (!form.message.trim()) newErrors.message = "Message is required"
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }))
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
      id: Date.now(),
      ...form,
      submittedAt: new Date().toISOString(),
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify([newContact, ...existing]))
    console.log("Contact saved:", newContact)

    setSubmitted(true)
    setForm({ name: "", email: "", phone: "", message: "" })
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">Message received!</h3>
        <p className="text-gray-600 max-w-sm">
          Thanks for reaching out. We'll get back to you within 24 hours.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
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
          {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email address <span className="text-red-500">*</span></Label>
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
        <Label htmlFor="phone">Phone number <span className="text-gray-400 font-normal">(optional)</span></Label>
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
        <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your project or how we can help..."
          value={form.message}
          onChange={handleChange}
          rows={5}
          className={errors.message ? "border-red-400 focus:ring-red-400" : ""}
        />
        {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
      </div>

      <Button type="submit" size="lg" className="w-full">
        Send message
      </Button>
    </form>
  )
}

const ContactSection = () => {
  return (
    <section id="contact" className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-3">
              <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">Contact us</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Let's start a conversation</h2>
              <p className="text-gray-600 leading-relaxed">
                Have a project in mind? We'd love to hear about it. Fill out the form and we'll be in touch shortly.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Email</p>
                  <p className="text-sm text-gray-600">hello@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Phone</p>
                  <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Office</p>
                  <p className="text-sm text-gray-600">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-gray-50 rounded-3xl p-8 border border-gray-100">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
