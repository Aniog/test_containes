import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { CheckCircle2, Loader2 } from 'lucide-react'

const STORAGE_KEY = 'saved_contacts'

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!form.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('submitting')

    // Simulate a brief delay then save to localStorage
    setTimeout(() => {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
      const newContact = {
        id: Date.now().toString(),
        ...form,
        submittedAt: new Date().toISOString(),
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify([newContact, ...existing]))
      console.log('Contact saved:', newContact)
      setStatus('success')
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 800)
  }

  const handleReset = () => {
    setStatus('idle')
    setErrors({})
  }

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left column - copy */}
          <div className="lg:pt-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Get in touch
            </h2>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              Have a project in mind? We'd love to hear about it. Fill out the form and
              we'll get back to you within one business day.
            </p>

            <div className="space-y-6">
              {[
                { label: 'Response time', value: 'Within 24 hours' },
                { label: 'Availability', value: 'Mon – Fri, 9am – 6pm' },
                { label: 'Location', value: 'Remote & worldwide' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                    <p className="text-sm text-slate-500">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>All fields marked with * are required.</CardDescription>
            </CardHeader>
            <CardContent>
              {status === 'success' ? (
                <div className="flex flex-col items-center text-center py-8 gap-4">
                  <CheckCircle2 className="w-14 h-14 text-emerald-500" />
                  <h3 className="text-xl font-bold text-slate-900">Message received!</h3>
                  <p className="text-slate-500 text-sm max-w-xs">
                    Thanks for reaching out. We'll be in touch shortly.
                  </p>
                  <Button variant="outline" onClick={handleReset} className="mt-2">
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="name">Full name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Jane Smith"
                        value={form.name}
                        onChange={handleChange}
                        className={errors.name ? 'border-red-400 focus:ring-red-400' : ''}
                      />
                      {errors.name && <p className="text-xs text-red-600">{errors.name}</p>}
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
                        className={errors.email ? 'border-red-400 focus:ring-red-400' : ''}
                      />
                      {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Project inquiry"
                        value={form.subject}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project or question..."
                      value={form.message}
                      onChange={handleChange}
                      className={errors.message ? 'border-red-400 focus:ring-red-400' : ''}
                      rows={4}
                    />
                    {errors.message && <p className="text-xs text-red-600">{errors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send message'
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
