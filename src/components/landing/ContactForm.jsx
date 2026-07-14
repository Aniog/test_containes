import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Send } from "lucide-react"

const STORAGE_KEY = "reachly_contacts"

const ContactForm = () => {
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
      id: Date.now(),
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
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Message received!</h3>
        <p className="text-muted-foreground mb-6">
          Thanks for reaching out. Your contact has been saved.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="name">Full Name <span className="text-destructive">*</span></Label>
          <Input
            id="name"
            name="name"
            placeholder="Jane Smith"
            value={form.name}
            onChange={handleChange}
            className={errors.name ? "border-destructive focus-visible:ring-destructive" : ""}
          />
          {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="email">Email Address <span className="text-destructive">*</span></Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="jane@example.com"
            value={form.email}
            onChange={handleChange}
            className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
          />
          {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="phone">Phone Number <span className="text-muted-foreground text-xs font-normal">(optional)</span></Label>
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
        <Label htmlFor="message">Message <span className="text-destructive">*</span></Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us how we can help you..."
          rows={4}
          value={form.message}
          onChange={handleChange}
          className={errors.message ? "border-destructive focus-visible:ring-destructive" : ""}
        />
        {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
      </div>

      <Button type="submit" className="w-full gap-2" size="lg">
        <Send className="h-4 w-4" />
        Send Message
      </Button>
    </form>
  )
}

export default ContactForm
