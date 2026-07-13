import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Submission failed'
}

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product_category: '',
    estimated_quantity: '',
    budget_range: '',
    timeline: '',
    message: '',
    source: 'website',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required'
    if (!v.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Provide a valid email'
    if (!v.company.trim()) return 'Company is required'
    if (!v.product_category.trim()) return 'Product category is required'
    if (!v.message.trim()) return 'Message is required'
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
      const { data: response, error: createError } = await client
        .from('Sourcing Inquiries')
        .insert({
          data: {
            name: values.name.trim(),
            email: values.email.trim(),
            company: values.company.trim(),
            phone: values.phone.trim(),
            product_category: values.product_category.trim(),
            estimated_quantity: values.estimated_quantity.trim(),
            budget_range: values.budget_range.trim(),
            timeline: values.timeline.trim(),
            message: values.message.trim(),
            source: values.source.trim() || 'website',
          },
        })
        .select()
        .single()

      if (createError || response?.success === false) {
        const message = getErrorMessage(response, createError)
        setError(message)
        setStatus('error')
        toast.error(message)
        return
      }

      setStatus('success')
      toast.success('Inquiry submitted. We will reply within 1 business day.')
      setValues({
        name: '',
        email: '',
        company: '',
        phone: '',
        product_category: '',
        estimated_quantity: '',
        budget_range: '',
        timeline: '',
        message: '',
        source: 'website',
      })
    } catch (err) {
      console.error(err)
      const message = err?.message || 'Submission failed'
      setError(message)
      setStatus('error')
      toast.error(message)
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">Contact</h1>
          <p className="mt-3 text-slate-600">
            Tell us what you want to source, your target quantity, budget, and timeline. We will reply with a practical plan and transparent pricing.
          </p>
          <div className="mt-8 space-y-4 text-sm text-slate-700">
            <p>Typical response time: within 1 business day.</p>
            <p>We support most product categories. If your item is unusual, we will confirm feasibility before proceeding.</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm" aria-busy={status === 'submitting'}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" value={values.name} onChange={onChange} required placeholder="Your full name" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" value={values.email} onChange={onChange} required placeholder="you@company.com" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="company">Company</Label>
              <Input id="company" name="company" value={values.company} onChange={onChange} required placeholder="Company name" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" value={values.phone} onChange={onChange} placeholder="+1 555 0123 456" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="product_category">Product Category</Label>
              <Input id="product_category" name="product_category" value={values.product_category} onChange={onChange} required placeholder="e.g. home organization" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="estimated_quantity">Estimated Quantity</Label>
              <Input id="estimated_quantity" name="estimated_quantity" value={values.estimated_quantity} onChange={onChange} placeholder="e.g. 5,000 units" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="budget_range">Budget Range</Label>
              <Input id="budget_range" name="budget_range" value={values.budget_range} onChange={onChange} placeholder="e.g. $2-$4 per unit" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="timeline">Timeline</Label>
              <Input id="timeline" name="timeline" value={values.timeline} onChange={onChange} placeholder="e.g. 6-8 weeks" />
            </div>
          </div>
          <div className="mt-4 space-y-1">
            <Label htmlFor="message">Project Details</Label>
            <Textarea id="message" name="message" value={values.message} onChange={onChange} required rows={5} placeholder="Describe product specs, target market, certifications, and any special requirements." />
          </div>
          <div className="mt-6">
            <Button type="submit" disabled={status === 'submitting'} className="w-full">
              {status === 'submitting' ? 'Submitting…' : 'Get a Free Sourcing Quote'}
            </Button>
          </div>
          {status === 'success' && <p className="mt-3 text-sm text-green-700" role="status">Thanks! We received your inquiry and will reply shortly.</p>}
          {status === 'error' && !!error && <p className="mt-3 text-sm text-red-600" role="alert">{error}</p>}
        </form>
      </div>
    </div>
  )
}
