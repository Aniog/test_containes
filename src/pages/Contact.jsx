import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export default function Contact() {
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service_required: 'supplier_verification',
    message: ''
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
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Provide a valid email address'
    if (!v.message.trim()) return 'Message is required'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate(values)
    if (err) { setError(err); return }

    setStatus('submitting')

    try {
      // Insert ContactFormResponse
      const { data: response, error: responseError } = await client
        .from('ContactFormResponse')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            phone: values.phone,
            company: values.company,
            service_required: values.service_required,
            message: values.message,
          }
        })

      if (responseError || response?.success === false) {
        throw new Error(responseError?.message || 'Submission failed')
      }

      setStatus('success')
      setValues({ name: '', email: '', phone: '', company: '', service_required: 'supplier_verification', message: '' })

    } catch (err) {
      console.error(err)
      setError(err.message || 'Submission failed')
      setStatus('error')
    }
  }

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Get a Free Sourcing Quote</h1>
          <p className="text-xl text-slate-600">
            Provide details about your project and we'll get back to you within 24 hours with a customized plan.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Email</h4>
                    <p className="text-slate-600">info@ssourcingchina.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Phone / WhatsApp</h4>
                    <p className="text-slate-600">+86 18x xxxx xxxx</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Head Office</h4>
                    <p className="text-slate-600">Nanshan District,<br/>Shenzhen, Guangdong, China</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-2/3">
            <form onSubmit={onSubmit} className="bg-white p-8 lg:p-10 rounded-2xl border border-slate-100 shadow-sm" aria-busy={status === 'submitting'}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                  <input
                    id="name" name="name" type="text" value={values.name} onChange={onChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    required placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                  <input
                    id="email" name="email" type="email" value={values.email} onChange={onChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    required placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input
                    id="phone" name="phone" type="tel" value={values.phone} onChange={onChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    placeholder="+1 234 567 890"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                  <input
                    id="company" name="company" type="text" value={values.company} onChange={onChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    placeholder="Acme Corp"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="service_required" className="block text-sm font-medium text-slate-700 mb-2">Primary Service Included</label>
                <select
                  id="service_required" name="service_required" value={values.service_required} onChange={onChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white"
                >
                  <option value="supplier_verification">Supplier Verification & Audit</option>
                  <option value="quality_control">Quality Control & Inspection</option>
                  <option value="shipping_logistics">Shipping & Logistics</option>
                  <option value="end_to_end_sourcing">End-to-End Sourcing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Project Details *</label>
                <textarea
                  id="message" name="message" rows={5} value={values.message} onChange={onChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-y"
                  required placeholder="Please describe your product, quantity, target price, and any specific requirements..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full h-14 text-lg bg-blue-600 hover:bg-blue-700 text-white" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Submitting Request...' : 'Send Inquiry'}
              </Button>

              {status === 'success' && (
                <div className="mt-4 p-4 bg-green-50 text-green-800 rounded-lg border border-green-200 flex items-center">
                  Thanks! We've received your request and will contact you shortly.
                </div>
              )}
              {status === 'error' && !!error && (
                <div className="mt-4 p-4 bg-red-50 text-red-800 rounded-lg border border-red-200 flex items-center">
                  {error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
