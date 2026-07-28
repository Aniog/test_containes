import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'
import { toast } from '@/components/ui/sonner'

export default function Contact() {
  const [status, setStatus] = React.useState('idle')
  const [values, setValues] = React.useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productCategory: '',
    message: '',
  })

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required'
    if (!v.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Provide a valid email'
    if (!v.message.trim()) return 'Message is required'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const err = validate(values)
    if (err) {
      toast.error(err)
      return
    }

    setStatus('submitting')
    try {
      await new Promise((resolve) => setTimeout(resolve, 800))
      setStatus('success')
      toast.success('Inquiry received', "We'll review your request and respond within 1-2 business days.")
      setValues({ name: '', company: '', email: '', phone: '', productCategory: '', message: '' })
    } catch (error) {
      setStatus('error')
      toast.error('Submission failed', error?.message || 'Please try again later.')
    }
  }

  return (
    <div>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <Badge variant="secondary" className="mb-4">Contact</Badge>
          <h1 className="text-4xl font-bold text-slate-900">Get a Free Sourcing Quote</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Tell us what you need. We’ll review your requirements and respond with a practical plan and quote.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <Card>
              <CardHeader>
                <CardTitle>Inquiry form</CardTitle>
                <CardDescription>All fields marked with * are required.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={onSubmit} className="space-y-4" aria-busy={status === 'submitting'}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-900">Name *</label>
                      <Input id="name" name="name" value={values.name} onChange={onChange} required placeholder="Your full name" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-900">Company</label>
                      <Input id="company" name="company" value={values.company} onChange={onChange} placeholder="Company name" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-900">Email *</label>
                      <Input id="email" name="email" type="email" value={values.email} onChange={onChange} required placeholder="you@company.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-900">Phone</label>
                      <Input id="phone" name="phone" value={values.phone} onChange={onChange} placeholder="+1 555 0123" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="productCategory" className="block text-sm font-medium text-slate-900">Product category</label>
                    <Input id="productCategory" name="productCategory" value={values.productCategory} onChange={onChange} placeholder="e.g. consumer electronics, home goods" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-900">Project details *</label>
                    <Textarea id="message" name="message" value={values.message} onChange={onChange} required rows={6} placeholder="Share product specs, target price, quantity, timeline, and any special requirements." />
                  </div>
                  <Button type="submit" disabled={status === 'submitting'} className="w-full">
                    {status === 'submitting' ? 'Sending…' : 'Send inquiry'}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                  {status === 'success' && (
                    <div className="flex items-center gap-2 rounded-md border border-green-200 bg-green-50 p-3 text-sm text-green-800">
                      <CheckCircle2 className="h-4 w-4" />
                      Thanks! We received your inquiry and will respond within 1-2 business days.
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact details</CardTitle>
                  <CardDescription>Reach us directly or use the form.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@ssourcingchina.com</li>
                    <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +86 20 1234 5678</li>
                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Guangzhou, China</li>
                    <li className="flex items-center gap-2"><Clock className="h-4 w-4" /> Mon-Fri, 9:00-18:00 CST</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What happens next</CardTitle>
                  <CardDescription>A simple process after you submit your inquiry.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-2"><span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center">1</span> We review your requirements and confirm feasibility.</li>
                    <li className="flex items-start gap-2"><span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center">2</span> We prepare a practical sourcing plan and quote.</li>
                    <li className="flex items-start gap-2"><span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center">3</span> We share next steps and timelines with you.</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Before you contact us</CardTitle>
                  <CardDescription>Information that helps us respond faster.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>Product type and specifications</li>
                    <li>Target price range and quantity</li>
                    <li>Preferred shipping method or destination</li>
                    <li>Any quality standards or certifications required</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
