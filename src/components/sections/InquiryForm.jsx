import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from 'sonner'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const isConfigured =
  STRK_PROJECT_ANON_KEY &&
  STRK_PROJECT_ANON_KEY !== 'xx' &&
  STRK_PROJECT_ANON_KEY.length > 8

const client = isConfigured ? new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY) : null

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed. Please try again.'
}

const servicesOptions = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Monitoring',
  'Shipping Coordination',
]

const InquiryForm = ({ compact = false }) => {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)
  const [values, setValues] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    country: '',
    productCategory: '',
    productDescription: '',
    targetQuantity: '',
    targetPrice: '',
    timeline: '',
    servicesNeeded: [],
    additionalNotes: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const handleServiceToggle = (service) => {
    setValues((v) => {
      const current = v.servicesNeeded
      if (current.includes(service)) {
        return { ...v, servicesNeeded: current.filter((s) => s !== service) }
      } else {
        return { ...v, servicesNeeded: [...current, service] }
      }
    })
  }

  const validate = () => {
    if (!values.companyName.trim()) return 'Company name is required'
    if (!values.contactName.trim()) return 'Contact name is required'
    if (!values.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address'
    if (!values.country.trim()) return 'Country is required'
    if (!values.productCategory.trim()) return 'Product category is required'
    if (!values.productDescription.trim()) return 'Product description is required'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    const validationError = validate()
    if (validationError) {
      setError(validationError)
      toast.error(validationError)
      return
    }

    setStatus('submitting')

    try {
      const { data: response, error: submitError } = await client
        .from('Sourcing Inquiries')
        .insert({
          data: {
            companyName: values.companyName.trim(),
            contactName: values.contactName.trim(),
            email: values.email.trim(),
            phone: values.phone.trim() || null,
            country: values.country.trim(),
            productCategory: values.productCategory.trim(),
            productDescription: values.productDescription.trim(),
            targetQuantity: values.targetQuantity.trim() || null,
            targetPrice: values.targetPrice.trim() || null,
            timeline: values.timeline.trim() || null,
            servicesNeeded: values.servicesNeeded.length > 0 ? values.servicesNeeded : null,
            additionalNotes: values.additionalNotes.trim() || null,
            status: 'new',
          },
        })
        .select()
        .single()

      if (submitError || response?.success === false) {
        const msg = getErrorMessage(response, submitError)
        setError(msg)
        toast.error(msg)
        setStatus('error')
        return
      }

      setStatus('success')
      toast.success('Thank you. Your inquiry has been received. We will contact you within 24 hours.')

      setValues({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        country: '',
        productCategory: '',
        productDescription: '',
        targetQuantity: '',
        targetPrice: '',
        timeline: '',
        servicesNeeded: [],
        additionalNotes: '',
      })
    } catch (err) {
      const msg = err?.message || 'Submission failed. Please try again.'
      setError(msg)
      toast.error(msg)
      setStatus('error')
    }
  }

  return (
    <Card className={compact ? "border-slate-200" : "border-slate-200 shadow-lg"}>
      <CardHeader className={compact ? "pb-4" : ""}>
        <CardTitle className="text-2xl">Request a Free Sourcing Quote</CardTitle>
        <CardDescription>
          Tell us about your sourcing needs. We typically respond within one business day.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Company Name *</label>
              <Input name="companyName" value={values.companyName} onChange={handleChange} placeholder="Your company" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Contact Name *</label>
              <Input name="contactName" value={values.contactName} onChange={handleChange} placeholder="Full name" required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Business Email *</label>
              <Input type="email" name="email" value={values.email} onChange={handleChange} placeholder="you@company.com" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
              <Input name="phone" value={values.phone} onChange={handleChange} placeholder="+1 555 123 4567" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Country *</label>
              <Input name="country" value={values.country} onChange={handleChange} placeholder="United States" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Product Category *</label>
              <Input name="productCategory" value={values.productCategory} onChange={handleChange} placeholder="e.g., Electronics, Textiles, Machinery" required />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Product Description *</label>
            <Textarea
              name="productDescription"
              value={values.productDescription}
              onChange={handleChange}
              placeholder="Describe the product(s) you need to source, including specifications, materials, or target market."
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Target Quantity</label>
              <Input name="targetQuantity" value={values.targetQuantity} onChange={handleChange} placeholder="e.g., 5,000 units" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Target Price Range</label>
              <Input name="targetPrice" value={values.targetPrice} onChange={handleChange} placeholder="e.g., $2.50 - $3.50/unit" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Timeline</label>
              <Input name="timeline" value={values.timeline} onChange={handleChange} placeholder="e.g., Q3 2026" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Services Needed</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {servicesOptions.map((service) => (
                <label key={service} className="flex items-center gap-2.5 cursor-pointer text-sm text-slate-700">
                  <Checkbox
                    checked={values.servicesNeeded.includes(service)}
                    onChange={() => handleServiceToggle(service)}
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Additional Notes</label>
            <Textarea
              name="additionalNotes"
              value={values.additionalNotes}
              onChange={handleChange}
              placeholder="Any specific requirements, certifications, or questions?"
            />
          </div>

          {error && (
            <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded p-3">{error}</div>
          )}

          <Button type="submit" className="w-full md:w-auto" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
          </Button>

          <p className="text-xs text-slate-500">We respect your privacy. Your information will only be used to respond to your inquiry.</p>
        </form>
      </CardContent>
    </Card>
  )
}

export default InquiryForm