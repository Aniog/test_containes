import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, Globe, MapPin, CheckCircle2 } from 'lucide-react'

const Contact = () => {
  const [status, setStatus] = React.useState('idle')
  const [error, setError] = React.useState(null)
  const [values, setValues] = React.useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
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
    if (!v.product.trim()) return 'Product or category is required'
    if (!v.message.trim()) return 'Please describe your sourcing needs'
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
      // In a real implementation, this would send to a backend API.
      // For now, simulate a successful submission.
      await new Promise((resolve) => setTimeout(resolve, 800))
      setStatus('success')
      setValues({ name: '', company: '', email: '', phone: '', product: '', quantity: '', message: '' })
    } catch (err) {
      console.error(err)
      setError(err.message || 'Submission failed')
      setStatus('error')
    }
  }

  return (
    <div className="bg-white">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Contact Us</h1>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Tell us about your sourcing needs and we will prepare a tailored quote and plan.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8">
            <form onSubmit={onSubmit} className="lg:col-span-3 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm" aria-busy={status === 'submitting'}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-900">Full name *</label>
                  <Input id="name" name="name" type="text" value={values.name} onChange={onChange} required placeholder="Your name" className="mt-1" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-900">Company</label>
                  <Input id="company" name="company" type="text" value={values.company} onChange={onChange} placeholder="Company name" className="mt-1" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-900">Email *</label>
                  <Input id="email" name="email" type="email" value={values.email} onChange={onChange} required placeholder="you@company.com" className="mt-1" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-900">Phone</label>
                  <Input id="phone" name="phone" type="tel" value={values.phone} onChange={onChange} placeholder="+1 234 567 890" className="mt-1" />
                </div>
                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-slate-900">Product / Category *</label>
                  <Input id="product" name="product" type="text" value={values.product} onChange={onChange} required placeholder="e.g. wireless chargers" className="mt-1" />
                </div>
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-slate-900">Estimated quantity</label>
                  <Input id="quantity" name="quantity" type="text" value={values.quantity} onChange={onChange} placeholder="e.g. 5,000 pcs" className="mt-1" />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="block text-sm font-medium text-slate-900">Sourcing requirements *</label>
                <Textarea id="message" name="message" rows="5" value={values.message} onChange={onChange} required placeholder="Describe product specs, target price, quality requirements, and timeline." className="mt-1" />
              </div>
              {error && <p role="alert" className="mt-3 text-sm text-red-600">{error}</p>}
              {status === 'success' && (
                <div className="mt-4 flex items-center gap-2 rounded-md border border-green-200 bg-green-50 p-3 text-sm text-green-800">
                  <CheckCircle2 className="h-4 w-4" />
                  Thanks! We received your inquiry and will respond within 1 business day.
                </div>
              )}
              <div className="mt-6">
                <Button type="submit" size="lg" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending…' : 'Send Inquiry'}
                </Button>
              </div>
            </form>

            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-base font-semibold text-slate-900">Contact details</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4" /> info@ssourcingchina.com</li>
                  <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4" /> +86 20 1234 5678</li>
                  <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" /> Guangzhou, China</li>
                  <li className="flex items-start gap-2"><Globe className="mt-0.5 h-4 w-4" /> Serving buyers worldwide</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">What happens next?</h3>
                <ol className="mt-4 space-y-3 text-sm text-slate-700 list-decimal list-inside">
                  <li>We review your requirements within 1 business day.</li>
                  <li>We prepare a tailored sourcing plan and quote.</li>
                  <li>We share next steps, timeline, and transparent fees.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
