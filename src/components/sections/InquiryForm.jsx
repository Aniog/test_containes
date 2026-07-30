import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { CheckCircle, Loader2 } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const initialValues = {
  name: '',
  company: '',
  email: '',
  phone: '',
  product: '',
  quantity: '',
  message: '',
}

function validate(values) {
  if (!values.name.trim()) return 'Name is required'
  if (!values.company.trim()) return 'Company name is required'
  if (!values.email.trim()) return 'Email is required'
  if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email'
  if (!values.product.trim()) return 'Product description is required'
  if (!values.quantity.trim()) return 'Estimated quantity is required'
  if (!values.message.trim()) return 'Please tell us more about your request'
  return null
}

export default function InquiryForm() {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
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

    const { data: response, error: createError } = await client
      .from('SourcingInquiry')
      .insert({
        data: {
          id: crypto.randomUUID(),
          name: values.name,
          company: values.company,
          email: values.email,
          phone: values.phone,
          product_description: values.product,
          estimated_quantity: values.quantity,
          message: values.message,
          status: 'new',
        },
      })
      .select()
      .single()

    if (createError || response?.success === false) {
      setError(response?.errors?.join(', ') || createError?.message || 'Submission failed. Please try again.')
      setStatus('error')
      return
    }

    setStatus('success')
    setValues(initialValues)
  }

  if (status === 'success') {
    return (
      <div className="card p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-700" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Thank you for your inquiry</h3>
        <p className="text-slate-600">
          We have received your request and will get back to you within 1-2 business days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 lg:p-8 space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" name="name" value={values.name} onChange={onChange} placeholder="John Smith" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company Name *</Label>
          <Input id="company" name="company" value={values.company} onChange={onChange} placeholder="Your Company Ltd." />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">Business Email *</Label>
          <Input id="email" name="email" type="email" value={values.email} onChange={onChange} placeholder="john@company.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone / WhatsApp</Label>
          <Input id="phone" name="phone" value={values.phone} onChange={onChange} placeholder="+1 555 123 4567" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="product">Product You Want to Source *</Label>
          <Input id="product" name="product" value={values.product} onChange={onChange} placeholder="e.g. Bluetooth headphones" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="quantity">Estimated Quantity *</Label>
          <Input id="quantity" name="quantity" value={values.quantity} onChange={onChange} placeholder="e.g. 1,000 units" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Project Details *</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={onChange}
          placeholder="Tell us about specifications, target price, packaging, shipping terms, or any special requirements."
        />
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-600 bg-red-50 px-4 py-3 rounded-lg">
          {error}
        </p>
      )}

      <Button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full btn-primary py-4 text-lg"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Sending…
          </>
        ) : (
          'Get a Free Sourcing Quote'
        )}
      </Button>

      <p className="text-xs text-slate-500 text-center">
        By submitting this form, you agree to our privacy policy and terms of service.
      </p>
    </form>
  )
}
