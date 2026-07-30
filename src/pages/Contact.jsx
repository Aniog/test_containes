import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const CATEGORIES = [
  'Electronics & Components',
  'Furniture & Home Decor',
  'Clothing & Textiles',
  'Machinery & Industrial',
  'Toys & Baby Products',
  'Health & Beauty',
  'Sports & Outdoor',
  'Packaging & Printing',
  'Auto Parts',
  'Other',
]

const SERVICES = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Private Label / OEM',
]

const INITIAL = {
  full_name: '',
  email: '',
  company: '',
  country: '',
  phone: '',
  product_category: '',
  product_description: '',
  estimated_quantity: '',
  target_price: '',
  services_needed: [],
  message: '',
}

export default function Contact() {
  const [values, setValues] = useState(INITIAL)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const toggleService = (svc) => {
    setValues((v) => ({
      ...v,
      services_needed: v.services_needed.includes(svc)
        ? v.services_needed.filter((s) => s !== svc)
        : [...v.services_needed, svc],
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    if (!values.full_name.trim()) { setError('Please enter your full name.'); return }
    if (!values.email.trim() || !/^\S+@\S+\.\S+$/.test(values.email)) { setError('Please enter a valid email address.'); return }
    if (!values.product_description.trim()) { setError('Please describe the product you want to source.'); return }

    setStatus('submitting')

    const payload = {
      full_name: values.full_name.trim(),
      email: values.email.trim(),
      company: values.company.trim() || undefined,
      country: values.country.trim() || undefined,
      phone: values.phone.trim() || undefined,
      product_category: values.product_category || undefined,
      product_description: values.product_description.trim(),
      estimated_quantity: values.estimated_quantity.trim() || undefined,
      target_price: values.target_price.trim() || undefined,
      services_needed: values.services_needed.length > 0 ? values.services_needed : undefined,
      message: values.message.trim() || undefined,
      status: 'new',
    }

    const { data: response, error: submitError } = await client
      .from('Sourcing Inquiries')
      .insert({ data: payload })
      .select()
      .single()

    if (submitError || response?.success === false) {
      const msg = Array.isArray(response?.errors) && response.errors.length > 0
        ? response.errors.join(', ')
        : submitError?.message || 'Submission failed. Please try again.'
      setError(msg)
      setStatus('error')
      return
    }

    setStatus('success')
    setValues(INITIAL)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-accent-500 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Tell us what you need. We'll review your inquiry and respond within 24 hours with a tailored sourcing plan.
            </p>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Sidebar */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              <div className="bg-white rounded-xl border border-neutral-200 p-6">
                <h3 className="font-semibold text-neutral-900 mb-4">Contact Information</h3>
                <div className="flex flex-col gap-4">
                  <a href="mailto:info@ssourcing.cn" className="flex items-start gap-3 text-sm text-neutral-700 hover:text-brand-700 transition-colors">
                    <Mail className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-neutral-500">info@ssourcing.cn</p>
                    </div>
                  </a>
                  <a href="https://wa.me/8613800000000" className="flex items-start gap-3 text-sm text-neutral-700 hover:text-brand-700 transition-colors">
                    <Phone className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">WhatsApp / Phone</p>
                      <p className="text-neutral-500">+86 138 0000 0000</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3 text-sm text-neutral-700">
                    <MapPin className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-neutral-500">Shenzhen, Guangdong, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-neutral-700">
                    <Clock className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-neutral-500">Within 24 hours (Mon–Fri)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-700 rounded-xl p-6 text-white">
                <h3 className="font-semibold mb-3">What Happens Next?</h3>
                <ol className="flex flex-col gap-3">
                  {[
                    'We review your inquiry within 24 hours',
                    'A sourcing specialist contacts you to discuss your needs',
                    'We provide a tailored sourcing plan and cost estimate',
                    'You decide whether to proceed — no obligation',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-brand-100">
                      <span className="w-5 h-5 rounded-full bg-white/20 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-white rounded-xl border border-neutral-200 p-10 text-center">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-2">Inquiry Received!</h2>
                  <p className="text-neutral-600 mb-6">
                    Thank you for your inquiry. One of our sourcing specialists will review your request and contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-sm font-semibold text-brand-700 hover:text-brand-900 transition-colors"
                  >
                    Submit another inquiry →
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="bg-white rounded-xl border border-neutral-200 p-8">
                  <h2 className="text-xl font-bold text-neutral-900 mb-6">Sourcing Inquiry Form</h2>

                  {/* Contact Info */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">Your Contact Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="full_name" className="text-neutral-700 font-medium mb-1.5 block">
                          Full Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="full_name"
                          name="full_name"
                          value={values.full_name}
                          onChange={onChange}
                          placeholder="Your full name"
                          className="border-neutral-300 text-neutral-900"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-neutral-700 font-medium mb-1.5 block">
                          Business Email <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={values.email}
                          onChange={onChange}
                          placeholder="you@company.com"
                          className="border-neutral-300 text-neutral-900"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="company" className="text-neutral-700 font-medium mb-1.5 block">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          value={values.company}
                          onChange={onChange}
                          placeholder="Your company"
                          className="border-neutral-300 text-neutral-900"
                        />
                      </div>
                      <div>
                        <Label htmlFor="country" className="text-neutral-700 font-medium mb-1.5 block">Country</Label>
                        <Input
                          id="country"
                          name="country"
                          value={values.country}
                          onChange={onChange}
                          placeholder="e.g. United States"
                          className="border-neutral-300 text-neutral-900"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <Label htmlFor="phone" className="text-neutral-700 font-medium mb-1.5 block">Phone / WhatsApp</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={values.phone}
                          onChange={onChange}
                          placeholder="+1 555 000 0000"
                          className="border-neutral-300 text-neutral-900"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="mb-6 pt-6 border-t border-neutral-100">
                    <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">Product Details</h3>
                    <div className="flex flex-col gap-4">
                      <div>
                        <Label htmlFor="product_category" className="text-neutral-700 font-medium mb-1.5 block">Product Category</Label>
                        <select
                          id="product_category"
                          name="product_category"
                          value={values.product_category}
                          onChange={onChange}
                          className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm text-neutral-900 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        >
                          <option value="">Select a category</option>
                          {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="product_description" className="text-neutral-700 font-medium mb-1.5 block">
                          Product Description <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                          id="product_description"
                          name="product_description"
                          value={values.product_description}
                          onChange={onChange}
                          placeholder="Describe the product you want to source — materials, dimensions, specifications, certifications needed, etc."
                          rows={4}
                          className="border-neutral-300 text-neutral-900 resize-none"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="estimated_quantity" className="text-neutral-700 font-medium mb-1.5 block">Estimated Quantity</Label>
                          <Input
                            id="estimated_quantity"
                            name="estimated_quantity"
                            value={values.estimated_quantity}
                            onChange={onChange}
                            placeholder="e.g. 500 units/month"
                            className="border-neutral-300 text-neutral-900"
                          />
                        </div>
                        <div>
                          <Label htmlFor="target_price" className="text-neutral-700 font-medium mb-1.5 block">Target Unit Price</Label>
                          <Input
                            id="target_price"
                            name="target_price"
                            value={values.target_price}
                            onChange={onChange}
                            placeholder="e.g. USD 5–8 per unit"
                            className="border-neutral-300 text-neutral-900"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-6 pt-6 border-t border-neutral-100">
                    <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">Services Needed</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {SERVICES.map((svc) => (
                        <button
                          key={svc}
                          type="button"
                          onClick={() => toggleService(svc)}
                          className={`text-xs font-medium px-3 py-2 rounded-lg border transition-all text-left ${
                            values.services_needed.includes(svc)
                              ? 'bg-brand-700 border-brand-700 text-white'
                              : 'bg-white border-neutral-300 text-neutral-700 hover:border-brand-400'
                          }`}
                        >
                          {svc}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-6 pt-6 border-t border-neutral-100">
                    <Label htmlFor="message" className="text-neutral-700 font-medium mb-1.5 block">Additional Information</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={values.message}
                      onChange={onChange}
                      placeholder="Any other details, questions, or requirements..."
                      rows={3}
                      className="border-neutral-300 text-neutral-900 resize-none"
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <div className="mb-4 flex items-start gap-2 bg-red-50 border border-red-200 rounded-lg p-3">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-700">{error}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-brand-700 hover:bg-brand-800 text-white font-semibold py-3 text-base rounded-lg transition-colors"
                  >
                    {status === 'submitting' ? 'Submitting…' : 'Submit Sourcing Inquiry'}
                  </Button>
                  <p className="text-xs text-neutral-400 text-center mt-3">
                    No commitment required. We'll respond within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
