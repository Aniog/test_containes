import React, { useState } from 'react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    product_category: '',
    message: ''
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    if (!formData.name.trim()) return 'Name is required'
    if (!formData.company.trim()) return 'Company is required'
    if (!formData.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return 'Please enter a valid email'
    if (!formData.message.trim() || formData.message.length < 20) return 'Please provide more detail about your requirements (min 20 characters)'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const validationError = validate()
    if (validationError) {
      setError(validationError)
      return
    }

    setStatus('submitting')

    try {
      const { data: response, error: submitError } = await client
        .from('ContactInquiries')
        .insert({
          data: {
            ...formData,
            created_at: new Date().toISOString()
          }
        })

      if (submitError || response?.success === false) {
        throw new Error(response?.errors?.join(', ') || submitError?.message || 'Submission failed')
      }

      setSuccess(true)
      setFormData({
        name: '', company: '', email: '', phone: '', country: '', product_category: '', message: ''
      })
      setStatus('success')
    } catch (err) {
      setError(err.message || 'Failed to submit inquiry. Please try again.')
      setStatus('error')
    }
  }

  if (success) {
    return (
      <div className="pt-20 min-h-[60vh] flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-emerald-600 text-3xl">✓</span>
          </div>
          <h1 className="text-3xl font-bold mb-4">Thank You</h1>
          <p className="text-slate-600 mb-8">Your inquiry has been received. Our team will contact you within 1-2 business days.</p>
          <Button onClick={() => { setSuccess(false); setStatus('idle') }}>Submit Another Inquiry</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Get a Free Sourcing Quote</h1>
          <p className="text-xl text-slate-300">Tell us about your project. We'll respond within 1-2 business days.</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name *</label>
              <Input name="name" value={formData.name} onChange={handleChange} placeholder="John Smith" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Company *</label>
              <Input name="company" value={formData.company} onChange={handleChange} placeholder="Your Company Ltd" required />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Business Email *</label>
              <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 555 123 4567" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Country</label>
              <Input name="country" value={formData.country} onChange={handleChange} placeholder="United States" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Product Category</label>
              <Input name="product_category" value={formData.product_category} onChange={handleChange} placeholder="e.g., Electronics, Textiles" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Your Requirements *</label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Please describe the products you want to source, approximate quantities, target price range, timeline, and any specific requirements..."
              required
            />
            <p className="text-xs text-slate-500 mt-1">Minimum 20 characters</p>
          </div>

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}

          <Button type="submit" disabled={status === 'submitting'} className="w-full md:w-auto">
            {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
          </Button>

          <p className="text-xs text-slate-500">We respect your privacy. Your information will only be used to respond to your inquiry.</p>
        </form>
      </section>
    </div>
  )
}

export default Contact