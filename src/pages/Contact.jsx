import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/sonner'
import { Mail, Phone, MapPin, Clock, ShieldCheck, MessageSquare, Globe, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    timeline: '',
    message: '',
  })
  const [status, setStatus] = React.useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')

    setTimeout(() => {
      setStatus('success')
      toast('Inquiry received. We will reply within 1 business day.')
      setFormData({ name: '', email: '', company: '', phone: '', product: '', quantity: '', timeline: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    }, 800)
  }

  return (
    <div>
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-4">Contact</Badge>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Get a free sourcing quote</h1>
            <p className="mt-4 text-lg text-slate-600">Tell us about your product and requirements. We will reply within 1 business day with a tailored proposal.</p>
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Submit your inquiry</CardTitle>
                <CardDescription>Fields marked with * are required.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full name *</Label>
                      <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Work email *</Label>
                      <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required placeholder="you@company.com" />
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} placeholder="Company name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone / WeChat</Label>
                      <Input id="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+1 234 567 890" />
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="product">Product category *</Label>
                      <Input id="product" value={formData.product} onChange={(e) => setFormData({ ...formData, product: e.target.value })} required placeholder="e.g. electronics" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="quantity">Estimated quantity</Label>
                      <Input id="quantity" value={formData.quantity} onChange={(e) => setFormData({ ...formData, quantity: e.target.value })} placeholder="e.g. 5,000 pcs" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Target timeline</Label>
                    <Input id="timeline" value={formData.timeline} onChange={(e) => setFormData({ ...formData, timeline: e.target.value })} placeholder="e.g. 60 days" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Project details *</Label>
                    <Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required placeholder="Describe your product, target price, quality requirements, and any special needs." rows={5} />
                  </div>
                  <Button type="submit" className="w-full" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending…' : 'Send inquiry'}
                  </Button>
                  {status === 'success' && (
                    <p className="text-sm text-green-700">Thanks! We received your inquiry and will reply within 1 business day.</p>
                  )}
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact information</CardTitle>
                  <CardDescription>Reach us directly or visit our office.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4" />
                    <div>
                      <div className="font-medium text-slate-900">Email</div>
                      <div>info@ssourcingchina.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4" />
                    <div>
                      <div className="font-medium text-slate-900">Phone</div>
                      <div>+86 20 8888 6666</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4" />
                    <div>
                      <div className="font-medium text-slate-900">Office</div>
                      <div>Guangzhou, China</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4" />
                    <div>
                      <div className="font-medium text-slate-900">Response time</div>
                      <div>Within 1 business day</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What to expect</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="mt-0.5 h-4 w-4 text-green-600" />
                      Confidential handling of your product details
                    </li>
                    <li className="flex items-start gap-2">
                      <MessageSquare className="mt-0.5 h-4 w-4 text-green-600" />
                      Clear communication in English
                    </li>
                    <li className="flex items-start gap-2">
                      <Globe className="mt-0.5 h-4 w-4 text-green-600" />
                      Experience with global shipping and customs
                    </li>
                    <li className="flex items-start gap-2">
                      <Send className="mt-0.5 h-4 w-4 text-green-600" />
                      No commitment required for initial consultation
                    </li>
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
