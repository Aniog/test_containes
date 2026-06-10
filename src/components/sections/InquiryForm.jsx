import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getErrorMessage = (response, error) => {
  if (response?.errors && Array.isArray(response.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Something went wrong. Please try again.'
}

const InquiryForm = ({ compact = false, source = 'Website' }) => {
  const [values, setValues] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    productDescription: '',
    quantity: '',
    timeline: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required'
    if (!v.company.trim()) return 'Company is required'
    if (!v.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email'
    if (!v.productDescription.trim()) return 'Product description is required'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate(values)
    if (err) {
      setError(err)
      return
    }

    setStatus('submitting')

    try {
      const payload = {
        name: values.name.trim(),
        company: values.company.trim(),
        email: values.email.trim(),
        phone: values.phone.trim() || null,
        country: values.country.trim() || null,
        productDescription: values.productDescription.trim(),
        quantity: values.quantity.trim() || null,
        timeline: values.timeline.trim() || null,
        source: source,
        createdAt: new Date().toISOString(),
      }

      const { data: response, error: submitError } = await client
        .from('Sourcing Inquiries')
        .insert({ data: payload })
        .select()
        .single()

      if (submitError || response?.success === false) {
        setError(getErrorMessage(response, submitError))
        setStatus('error')
        return
      }

      setSuccess(true)
      setStatus('success')
      setValues({
        name: '',
        company: '',
        email: '',
        phone: '',
        country: '',
        productDescription: '',
        quantity: '',
        timeline: '',
      })

      setTimeout(() => {
        setSuccess(false)
        setStatus('idle')
      }, 4000)
    } catch (err) {
      setError(err.message || 'Submission failed. Please try again.')
      setStatus('error')
    }
  }

  if (success) {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center">
        <div className="text-green-700 font-semibold text-lg mb-2">Thank you for your inquiry.</div>
        <p className="text-green-700 text-sm">Our sourcing team will contact you within 24 hours with a preliminary assessment and next steps.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" name="name" value={values.name} onChange={handleChange} placeholder="John Smith" required />
        </div>
        <div>
          <Label htmlFor="company">Company *</Label>
          <Input id="company" name="company" value={values.company} onChange={handleChange} placeholder="Your Company Ltd." required />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="email">Business Email *</Label>
          <Input id="email" name="email" type="email" value={values.email} onChange={handleChange} placeholder="you@company.com" required />
        </div>
        <div>
          <Label htmlFor="phone">Phone / WhatsApp</Label>
          <Input id="phone" name="phone" value={values.phone} onChange={handleChange} placeholder="+1 555 123 4567" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="country">Country</Label>
          <Input id="country" name="country" value={values.country} onChange={handleChange} placeholder="United States" />
        </div>
        <div>
          <Label htmlFor="quantity">Target Quantity / Volume</Label>
          <Input id="quantity" name="quantity" value={values.quantity} onChange={handleChange} placeholder="e.g. 5,000 units / 2 containers" />
        </div>
      </div>

      <div>
        <Label htmlFor="timeline">Expected Timeline</Label>
        <Select id="timeline" name="timeline" value={values.timeline} onChange={handleChange}>
          <option value="">Select timeline</option>
          <option value="Within 1 month">Within 1 month</option>
          <option value="1-3 months">1-3 months</option>
          <option value="3-6 months">3-6 months</option>
          <option value="6+ months">6+ months</option>
          <option value="Flexible">Flexible</option>
        </Select>
      </div>

      <div>
        <Label htmlFor="productDescription">Product Description *</Label>
        <Textarea
          id="productDescription"
          name="productDescription"
          value={values.productDescription}
          onChange={handleChange}
          placeholder="Describe the products you want to source (category, specifications, target price range, certifications needed, etc.)"
          required
        />
        <p className="text-xs text-slate-500 mt-1.5">Be as specific as possible. Include materials, dimensions, quality standards, or target markets if known.</p>
      </div>

      {error && (
        <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded p-3">{error}</div>
      )}

      <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Submitting...' : 'Get a Free Sourcing Quote'}
      </Button>

      <p className="text-xs text-slate-500">We respect your privacy. Your information will only be used to respond to your sourcing inquiry.</p>
    </form>
  )
}

export default InquiryForm
