import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Toaster, Toast } from '@/components/ui/sonner'
import { Mail, MessageSquare, Globe2, Factory } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const Contact = () => {
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    message: '',
  })
  const [status, setStatus] = React.useState('idle')
  const [error, setError] = React.useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required'
    if (!v.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Provide a valid email'
    if (!v.product.trim()) return 'Product or category is required'
    if (!v.message.trim()) return 'Please share your sourcing needs'
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
      const { error: responseError } = await client
        .from('contactFormResponses')
        .insert({
          data: {
            email: values.email,
            name: values.name,
            company: values.company,
            country: values.country,
            product: values.product,
            message: values.message,
          },
        })

      if (responseError) throw responseError

      setStatus('success')
      setValues({ name: '', email: '', company: '', country: '', product: '', message: '' })
    } catch (err) {
      console.error(err)
      setError(err.message || 'Submission failed')
      setStatus('error')
    }
  }

  return (
    <div>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Badge className="mb-3">Contact</Badge>
          <h1 className="text-4xl font-bold text-slate-900">Get a Free Sourcing Quote</h1>
          <p className="mt-3 max-w-3xl text-lg text-slate-600">
            Tell us what you need. We will review your requirements and send a tailored sourcing plan and quote.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <form onSubmit={onSubmit} className="space-y-4" aria-busy={status === 'submitting'}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-900">Name</label>
                    <Input id="name" name="name" value={values.name} onChange={onChange} required placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-900">Email</label>
                    <Input id="email" name="email" type="email" value={values.email} onChange={onChange} required placeholder="you@company.com" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="company" className="mb-1 block text-sm font-medium text-slate-900">Company</label>
                    <Input id="company" name="company" value={values.company} onChange={onChange} placeholder="Company name" />
                  </div>
                  <div>
                    <label htmlFor="country" className="mb-1 block text-sm font-medium text-slate-900">Country</label>
                    <Input id="country" name="country" value={values.country} onChange={onChange} placeholder="Your country" />
                  </div>
                </div>
                <div>
                  <label htmlFor="product" className="mb-1 block text-sm font-medium text-slate-900">Product or Category</label>
                  <Input id="product" name="product" value={values.product} onChange={onChange} required placeholder="e.g. electronics, home goods" />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-900">Sourcing Needs</label>
                  <Textarea id="message" name="message" value={values.message} onChange={onChange} required placeholder="Share quantity targets, specs, timeline, and any special requirements." />
                </div>
                <Button type="submit" disabled={status === 'submitting'} className="w-full sm:w-auto">
                  {status === 'submitting' ? 'Sending…' : 'Send Inquiry'}
                </Button>
                {status === 'success' && (
                  <p role="status" className="text-sm text-green-700">Thanks! We received your inquiry and will respond shortly.</p>
                )}
                {status === 'error' && !!error && (
                  <p role="alert" className="text-sm text-red-700">{error}</p>
                )}
              </form>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>What happens next</CardTitle>
                  <CardDescription>A simple, low-pressure process.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-slate-900" /> We review your requirements within 1 business day.</li>
                    <li className="flex items-start gap-2"><MessageSquare className="mt-0.5 h-4 w-4 text-slate-900" /> We may ask a few clarifying questions by email.</li>
                    <li className="flex items-start gap-2"><Factory className="mt-0.5 h-4 w-4 text-slate-900" /> We prepare a sourcing plan and quote.</li>
                    <li className="flex items-start gap-2"><Globe2 className="mt-0.5 h-4 w-4 text-slate-900" /> You decide how to proceed.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Contact details</CardTitle>
                  <CardDescription>Reach us directly if preferred.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>Email: info@ssourcingchina.com</li>
                    <li>WeChat: ssourcing_china</li>
                    <li>Location: Shenzhen, China</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Toaster>
        <Toast title="Inquiry received" description="We will get back to you shortly." />
      </Toaster>
    </div>
  )
}

export default Contact
