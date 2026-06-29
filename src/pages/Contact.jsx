import React from 'react'
import { Mail, MessageSquare, Clock, MapPin } from 'lucide-react'
import { useState } from 'react'
import { createInquiry } from '@/api/inquiries'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', country: '', productCategory: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all required fields.')
      setStatus('error')
      return
    }
    setStatus('submitting')
    try {
      await createInquiry(form)
      setStatus('success')
      setForm({ name: '', email: '', company: '', country: '', productCategory: '', message: '' })
    } catch (err) {
      setError(err.message || 'Submission failed. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div className="bg-white">
      <section className="bg-slate-900 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">Tell us about your sourcing needs. We will reply within one business day with a clear plan and pricing.</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">Get in touch</h2>
              <p className="mt-3 text-slate-600">Fill out the form and our team will get back to you. For urgent requests, use the contact details below.</p>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-900">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Email</div>
                    <div className="text-sm text-slate-600">info@ssourcingchina.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-900">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">WeChat</div>
                    <div className="text-sm text-slate-600">ssourcing_china</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-900">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Response time</div>
                    <div className="text-sm text-slate-600">Within 24 hours on business days</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-900">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Office</div>
                    <div className="text-sm text-slate-600">Shenzhen, China</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-900">Full name *</label>
                    <Input id="name" name="name" value={form.name} onChange={onChange} required placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-900">Email *</label>
                    <Input id="email" name="email" type="email" value={form.email} onChange={onChange} required placeholder="you@company.com" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="company" className="mb-1 block text-sm font-medium text-slate-900">Company</label>
                    <Input id="company" name="company" value={form.company} onChange={onChange} placeholder="Company name" />
                  </div>
                  <div>
                    <label htmlFor="country" className="mb-1 block text-sm font-medium text-slate-900">Country</label>
                    <Input id="country" name="country" value={form.country} onChange={onChange} placeholder="Your country" />
                  </div>
                </div>
                <div>
                  <label htmlFor="productCategory" className="mb-1 block text-sm font-medium text-slate-900">Product category</label>
                  <Input id="productCategory" name="productCategory" value={form.productCategory} onChange={onChange} placeholder="e.g. home goods, electronics" />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-900">Project details *</label>
                  <Textarea id="message" name="message" value={form.message} onChange={onChange} required rows={6} placeholder="Describe what you want to source, target price, order volume, and timeline." />
                </div>
                {status === 'success' && (
                  <div className="rounded-md bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
                    Thank you. Your inquiry has been submitted. We will get back to you within 24 hours.
                  </div>
                )}
                {status === 'error' && error && (
                  <div className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-800">{error}</div>
                )}
                <Button type="submit" disabled={status === 'submitting'} className="w-full">
                  {status === 'submitting' ? 'Submitting…' : 'Send Inquiry'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
