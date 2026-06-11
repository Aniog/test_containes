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
  const [submittedEmail, setSubmittedEmail] = useState('')
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

    if (!client) {
      // Demo mode: simulate successful submission for preview/testing purposes
      setStatus('success')
      setSubmittedEmail(values.email.trim())
      toast.success('Thank you. Your inquiry has been received. (Demo mode — this is a simulation)')
      // In a real environment with valid credentials, this would be saved to the Sourcing Inquiries database.
      console.log('[Demo] Sourcing inquiry captured (not sent to database):', {
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
      })

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
      setSubmittedEmail(values.email.trim())
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

  const handleReset = () => {
    setStatus('idle')
    setError(null)
    setSubmittedEmail('')
  }

  // Success state UI
  if (status === 'success') {
    return (
      <Card className={compact ? "border-slate-200" : "border-slate-200 shadow-lg"}>
        <CardHeader>
          <CardTitle className="text-2xl text-green-700">Inquiry Received</CardTitle>
          <CardDescription>
            Thank you for contacting SSourcing China.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-green-50 border border-green-200 p-4 text-sm text-green-800">
            <p className="mb-2">Your inquiry has been submitted successfully.</p>
            <p>We will review your requirements and respond within one business day. A confirmation has been noted for <span className="font-medium">{submittedEmail}</span>.</p>
          </div>

          <div className="text-sm text-slate-600">
            In a live environment, this inquiry is saved to our database and our sourcing team is notified immediately.
          </div>

          <div className="pt-2">
            <Button type="button" variant="outline" onClick={handleReset}>
              Submit Another Inquiry
            </Button>
          </div>

          <p className="text-xs text-slate-500">Need urgent assistance? Email us at <a href="mailto:info@ssourcingchina.com" className="underline">info@ssourcingchina.com</a>.</p>
        </CardContent>
      </Card>
    )
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

          {!client && (
            <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded p-2">
              Demo mode: Submissions are simulated for preview. In production, inquiries are saved to our database and we respond within 24 hours.
            </p>
          )}

          <p className="text-xs text-slate-500">We respect your privacy. Your information will only be used to respond to your inquiry.</p>
        </form>
      </CardContent>
    </Card>
  )
}

export default InquiryForm