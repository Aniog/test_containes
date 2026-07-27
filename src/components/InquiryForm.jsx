import { useState } from 'react'
import { Loader2, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectItem } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { createInquiry } from '@/api/inquiries'
import { toast } from '@/components/ui/sonner'

const serviceOptions = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Monitoring',
  'Shipping Coordination',
]

const initialState = {
  name: '',
  email: '',
  company: '',
  country: '',
  productCategory: '',
  quantity: '',
  servicesNeeded: [],
  message: '',
}

export default function InquiryForm({ embedded = false }) {
  const [values, setValues] = useState(initialState)
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const handleServiceToggle = (service) => {
    setValues((v) => {
      const current = new Set(v.servicesNeeded)
      if (current.has(service)) current.delete(service)
      else current.add(service)
      return { ...v, servicesNeeded: Array.from(current) }
    })
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required'
    if (!v.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email'
    if (!v.message.trim()) return 'Please describe your sourcing needs'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const error = validate(values)
    if (error) {
      toast.error(error)
      return
    }

    setStatus('submitting')
    try {
      await createInquiry(values)
      setStatus('success')
      setValues(initialState)
      toast.success('Inquiry submitted. Our team will contact you within 24 hours.')
    } catch (err) {
      setStatus('error')
      toast.error(err.message || 'Failed to submit inquiry. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-slate-100 bg-white p-12 text-center shadow-sm">
        <CheckCircle2 className="h-12 w-12 text-emerald-500" />
        <h3 className="mt-4 text-2xl font-bold text-slate-900">Thank You</h3>
        <p className="mt-2 max-w-md text-slate-600">
          We have received your inquiry. A sourcing specialist will review your requirements and reach out within 24 hours.
        </p>
        <Button className="mt-6" onClick={() => setStatus('idle')}>
          Submit Another Inquiry
        </Button>
      </div>
    )
  }

  return (
    <Card className={embedded ? 'border-slate-100 shadow-md' : ''}>
      <CardHeader>
        <CardTitle className="text-2xl">Get a Free Sourcing Quote</CardTitle>
        <CardDescription>
          Tell us what you are looking for and we will get back to you with next steps.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" name="name" value={values.name} onChange={handleChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" value={values.email} onChange={handleChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" name="company" value={values.company} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Input id="country" name="country" value={values.country} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="productCategory">Product Category</Label>
              <Select id="productCategory" name="productCategory" value={values.productCategory} onChange={handleChange}>
                <SelectItem value="">Select a category</SelectItem>
                <SelectItem value="Electronics">Electronics</SelectItem>
                <SelectItem value="Machinery">Machinery & Industrial</SelectItem>
                <SelectItem value="Home">Home & Garden</SelectItem>
                <SelectItem value="Apparel">Apparel & Textiles</SelectItem>
                <SelectItem value="Packaging">Packaging & Printing</SelectItem>
                <SelectItem value="Beauty">Beauty & Personal Care</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="quantity">Estimated Quantity</Label>
              <Input id="quantity" name="quantity" value={values.quantity} onChange={handleChange} placeholder="e.g. 1,000 units" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Services Needed</Label>
            <div className="flex flex-wrap gap-3">
              {serviceOptions.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => handleServiceToggle(service)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    values.servicesNeeded.includes(service)
                      ? 'border-primary bg-primary text-white'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-primary hover:text-primary'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Sourcing Requirements *</Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              value={values.message}
              onChange={handleChange}
              placeholder="Describe the product, specifications, target price, timeline, and any special requirements."
              required
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-accent hover:bg-accent/90 text-white"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting…
              </>
            ) : (
              'Get a Free Sourcing Quote'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
