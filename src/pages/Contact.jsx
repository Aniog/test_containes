import React, { useState } from 'react'
import { Mail, Phone, MapPin, Globe, Clock, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)
  const [values, setValues] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    product: '',
    quantity: '',
    budget: '',
    timeline: '',
    message: '',
  })

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required'
    if (!v.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Provide a valid email'
    if (!v.product.trim()) return 'Product category is required'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate(values)
    if (err) {
      setError(err)
      return
    }

    setStatus('submitting')

    try {
      // Simulate submission for demo purposes
      await new Promise((resolve) => setTimeout(resolve, 1200))
      setStatus('success')
      setValues({ name: '', company: '', email: '', phone: '', country: '', product: '', quantity: '', budget: '', timeline: '', message: '' })
    } catch (err) {
      console.error(err)
      setError(err.message || 'Submission failed')
      setStatus('error')
    }
  }

  return (
    <div className="flex flex-col">
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 id="contact-page-title" className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Contact Us
            </h1>
            <p id="contact-page-subtitle" className="mt-4 text-lg text-slate-600">
              Tell us about your sourcing needs and we will respond within 1 business day with a tailored plan and transparent pricing.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <form onSubmit={onSubmit} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-slate-900">Full name *</label>
                    <Input id="name" name="name" value={values.name} onChange={onChange} required placeholder="Your name" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="company" className="text-sm font-medium text-slate-900">Company</label>
                    <Input id="company" name="company" value={values.company} onChange={onChange} placeholder="Company name" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-slate-900">Email *</label>
                    <Input id="email" name="email" type="email" value={values.email} onChange={onChange} required placeholder="you@company.com" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-900">Phone / WhatsApp</label>
                    <Input id="phone" name="phone" value={values.phone} onChange={onChange} placeholder="+1 234 567 890" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="country" className="text-sm font-medium text-slate-900">Country</label>
                    <Input id="country" name="country" value={values.country} onChange={onChange} placeholder="Your country" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="product" className="text-sm font-medium text-slate-900">Product category *</label>
                    <Input id="product" name="product" value={values.product} onChange={onChange} required placeholder="e.g. electronics, home goods" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="quantity" className="text-sm font-medium text-slate-900">Estimated quantity</label>
                    <Input id="quantity" name="quantity" value={values.quantity} onChange={onChange} placeholder="e.g. 5,000 units" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="budget" className="text-sm font-medium text-slate-900">Target budget (per unit)</label>
                    <Input id="budget" name="budget" value={values.budget} onChange={onChange} placeholder="e.g. $2.50 USD" />
                  </div>
                  <div className="space-y-1.5 sm:col-span-2">
                    <label htmlFor="timeline" className="text-sm font-medium text-slate-900">Target timeline</label>
                    <Input id="timeline" name="timeline" value={values.timeline} onChange={onChange} placeholder="e.g. 3 months" />
                  </div>
                  <div className="space-y-1.5 sm:col-span-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-900">Project details</label>
                    <Textarea id="message" name="message" value={values.message} onChange={onChange} rows={5} placeholder="Tell us about your sourcing needs, target price, quality requirements, and any specific questions." />
                  </div>
                </div>
                <Button type="submit" className="mt-6 w-full" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Submitting…' : 'Submit Inquiry'}
                </Button>
                {status === 'success' && (
                  <p className="mt-3 text-sm text-green-700">Thanks! We will get back to you within 1 business day.</p>
                )}
                {status === 'error' && !!error && (
                  <p className="mt-3 text-sm text-red-600">{error}</p>
                )}
              </form>
            </div>

            <div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <h3 id="contact-info-title" className="text-lg font-semibold text-slate-900">Contact information</h3>
                <div className="mt-4 space-y-4 text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                    <div>
                      <p className="font-medium">Office</p>
                      <p className="text-slate-600">Shenzhen, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:info@ssourcingchina.com" className="text-slate-900 hover:underline">info@ssourcingchina.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                    <div>
                      <p className="font-medium">Phone / WhatsApp</p>
                      <a href="tel:+8675512345678" className="text-slate-900 hover:underline">+86 755 1234 5678</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                    <div>
                      <p className="font-medium">Response time</p>
                      <p className="text-slate-600">Within 1 business day</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                    <div>
                      <p className="font-medium">Languages</p>
                      <p className="text-slate-600">English, Mandarin</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 id="contact-guarantees-title" className="text-lg font-semibold text-slate-900">Our guarantees</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  {[
                    'Free initial consultation with no obligation',
                    'Clear fee structure with no hidden charges',
                    'Dedicated sourcing specialist for your project',
                    'Regular progress updates and transparent reporting',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
