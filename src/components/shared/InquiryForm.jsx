import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { submitSourcingInquiry } from '@/api/inquiries'

export default function InquiryForm({ compact = false, title = "Get a Free Sourcing Quote" }) {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setStatus('submitting')

    try {
      await submitSourcingInquiry(formData)
      setStatus('success')
      setFormData({ name: '', email: '', company: '', product: '', quantity: '', message: '' })
      setTimeout(() => setStatus('idle'), 6000)
    } catch (err) {
      setError(err.message || 'Submission failed. Please try again.')
      setStatus('error')
    }
  }

  return (
    <Card className={compact ? '' : 'shadow-lg'}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          Tell us what you need and we will respond within one business day.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {status === 'success' ? (
          <div className="rounded-lg bg-secondary-light p-6 text-center">
            <h4 className="mb-2 text-lg font-semibold text-secondary-dark">Thank You</h4>
            <p className="text-sm text-secondary-dark">
              We have received your inquiry. Our team will review your requirements and get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Business Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company Ltd"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="product">Product Category</Label>
                <Input
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  placeholder="e.g. Electronics, Home Goods"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="quantity">Estimated Order Quantity</Label>
              <Input
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="e.g. 1,000 units"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Project Details</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe the product, specifications, target price, timeline, and any special requirements."
                required
              />
            </div>

            {error && (
              <div className="rounded-md bg-red-50 p-3 text-sm text-red-700" role="alert">
                {error}
              </div>
            )}

            <Button
              type="submit"
              variant="cta"
              size="lg"
              className="w-full"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Submitting…' : 'Get a Free Sourcing Quote'}
            </Button>

            <p className="text-center text-xs text-gray-500">
              No obligation. We respect your privacy and will never share your information.
            </p>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
