import { useState, useCallback, useEffect, useRef } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { submitInquiry } from '@/api/inquiries'

const productCategories = [
  'Electronics & Electrical',
  'Machinery & Industrial Parts',
  'Home & Furniture',
  'Apparel & Textiles',
  'Packaging & Printing',
  'Beauty & Personal Care',
  'Hardware & Tools',
  'Other',
]

const sourcingStages = [
  'Just researching',
  'Have specifications',
  'Ready to sample',
  'Ready to order',
]

const serviceOptions = [
  'Supplier sourcing',
  'Factory verification',
  'Quality inspection',
  'Production follow-up',
  'Shipping coordination',
  'Other',
]

const initialValues = {
  name: '',
  email: '',
  company: '',
  phone: '',
  country: '',
  productCategory: '',
  productDescription: '',
  quantity: '',
  sourcingStage: '',
  servicesNeeded: [],
  message: '',
}

export default function QuoteForm({ compact = false, id = 'quote-form' }) {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})
  const formRef = useRef(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('quote') === 'true' && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  const onChange = useCallback((field, value) => {
    setValues((v) => ({ ...v, [field]: value }))
    setErrors((e) => ({ ...e, [field]: undefined }))
  }, [])

  const toggleService = useCallback((service) => {
    setValues((v) => {
      const next = v.servicesNeeded.includes(service)
        ? v.servicesNeeded.filter((s) => s !== service)
        : [...v.servicesNeeded, service]
      return { ...v, servicesNeeded: next }
    })
  }, [])

  const validate = useCallback(() => {
    const nextErrors = {}
    if (!values.name.trim()) nextErrors.name = 'Name is required'
    if (!values.email.trim()) {
      nextErrors.email = 'Email is required'
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      nextErrors.email = 'Please enter a valid email address'
    }
    if (!values.productCategory) nextErrors.productCategory = 'Please select a category'
    if (!values.productDescription.trim()) nextErrors.productDescription = 'Please describe the product you want to source'
    return nextErrors
  }, [values])

  const onSubmit = useCallback(async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      toast.error('Please fill in the required fields')
      return
    }

    setStatus('submitting')
    setErrors({})

    try {
      await submitInquiry(values)
      setStatus('success')
      setValues(initialValues)
      toast.success('Thank you. Your sourcing inquiry has been received. We will reply within 24 hours.')
    } catch (err) {
      setStatus('error')
      toast.error(err?.message || 'Something went wrong. Please try again.')
    }
  }, [values, validate])

  if (status === 'success' && !compact) {
    return (
      <div className="rounded-xl border border-blue-100 bg-blue-50 p-8 text-center">
        <h3 className="text-xl font-semibold text-slate-900 mb-2">Inquiry Received</h3>
        <p className="text-slate-600 mb-6">
          Our team will review your request and contact you within one business day.
        </p>
        <Button type="button" onClick={() => setStatus('idle')} variant="outline">
          Submit another inquiry
        </Button>
      </div>
    )
  }

  return (
    <form
      id={id}
      ref={formRef}
      onSubmit={onSubmit}
      className="rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm"
      noValidate
    >
      {!compact && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-slate-900">Get a Free Sourcing Quote</h3>
          <p className="text-sm text-slate-500">Tell us what you need. We will reply within 24 hours.</p>
        </div>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`${id}-name`}>Full name *</Label>
          <Input
            id={`${id}-name`}
            value={values.name}
            onChange={(e) => onChange('name', e.target.value)}
            placeholder="John Smith"
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="text-xs text-red-600">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor={`${id}-email`}>Business email *</Label>
          <Input
            id={`${id}-email`}
            type="email"
            value={values.email}
            onChange={(e) => onChange('email', e.target.value)}
            placeholder="john@company.com"
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor={`${id}-company`}>Company</Label>
          <Input
            id={`${id}-company`}
            value={values.company}
            onChange={(e) => onChange('company', e.target.value)}
            placeholder="Your company name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor={`${id}-phone`}>Phone / WhatsApp</Label>
          <Input
            id={`${id}-phone`}
            value={values.phone}
            onChange={(e) => onChange('phone', e.target.value)}
            placeholder="+1 234 567 8900"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor={`${id}-country`}>Country</Label>
          <Input
            id={`${id}-country`}
            value={values.country}
            onChange={(e) => onChange('country', e.target.value)}
            placeholder="United States"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor={`${id}-category`}>Product category *</Label>
          <Select value={values.productCategory} onValueChange={(v) => onChange('productCategory', v)}>
            <SelectTrigger id={`${id}-category`} aria-invalid={!!errors.productCategory}>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {productCategories.map((c) => (
                <SelectItem key={c} value={c}>{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.productCategory && <p className="text-xs text-red-600">{errors.productCategory}</p>}
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor={`${id}-description`}>Product description *</Label>
          <Textarea
            id={`${id}-description`}
            value={values.productDescription}
            onChange={(e) => onChange('productDescription', e.target.value)}
            placeholder="What product do you want to source? Include specifications, materials, target price, and any requirements."
            rows={4}
            aria-invalid={!!errors.productDescription}
          />
          {errors.productDescription && <p className="text-xs text-red-600">{errors.productDescription}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor={`${id}-quantity`}>Estimated quantity</Label>
          <Input
            id={`${id}-quantity`}
            value={values.quantity}
            onChange={(e) => onChange('quantity', e.target.value)}
            placeholder="e.g. 1,000 units / year"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor={`${id}-stage`}>Sourcing stage</Label>
          <Select value={values.sourcingStage} onValueChange={(v) => onChange('sourcingStage', v)}>
            <SelectTrigger id={`${id}-stage`}>
              <SelectValue placeholder="Select your stage" />
            </SelectTrigger>
            <SelectContent>
              {sourcingStages.map((s) => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label>Services needed</Label>
          <div className="flex flex-wrap gap-2">
            {serviceOptions.map((service) => {
              const active = values.servicesNeeded.includes(service)
              return (
                <button
                  key={service}
                  type="button"
                  onClick={() => toggleService(service)}
                  className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                    active
                      ? 'border-blue-600 bg-blue-600 text-white'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600'
                  }`}
                >
                  {service}
                </button>
              )
            })}
          </div>
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor={`${id}-message`}>Additional details</Label>
          <Textarea
            id={`${id}-message`}
            value={values.message}
            onChange={(e) => onChange('message', e.target.value)}
            placeholder="Any other information that will help us understand your project."
            rows={3}
          />
        </div>
      </div>

      <div className="mt-6">
        <Button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 h-auto"
        >
          {status === 'submitting' ? 'Sending inquiry…' : 'Get a Free Sourcing Quote'}
        </Button>
      </div>
    </form>
  )
}
