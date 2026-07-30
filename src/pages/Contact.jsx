import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const categories = [
  'Electronics & Components',
  'Furniture & Home Decor',
  'Apparel & Textiles',
  'Machinery & Industrial',
  'Toys & Baby Products',
  'Health & Beauty',
  'Sports & Outdoor',
  'Packaging & Printing',
  'Auto Parts',
  'Other',
]

const serviceOptions = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Private Label / OEM',
  'Sample Procurement',
]

const initialValues = {
  full_name: '',
  company_name: '',
  email: '',
  phone: '',
  country: '',
  product_category: '',
  product_description: '',
  estimated_quantity: '',
  target_price: '',
  services_needed: [],
  message: '',
}

export default function Contact() {
  const [values, setValues] = useState(initialValues)
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

  const validate = () => {
    if (!values.full_name.trim()) return 'Full name is required.'
    if (!values.email.trim()) return 'Email address is required.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.'
    if (!values.product_description.trim()) return 'Product description is required.'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate()
    if (err) { setError(err); return }

    setStatus('submitting')

    const payload = {
      full_name: values.full_name,
      email: values.email,
      product_description: values.product_description,
    }
    if (values.company_name) payload.company_name = values.company_name
    if (values.phone) payload.phone = values.phone
    if (values.country) payload.country = values.country
    if (values.product_category) payload.product_category = values.product_category
    if (values.estimated_quantity) payload.estimated_quantity = values.estimated_quantity
    if (values.target_price) payload.target_price = values.target_price
    if (values.services_needed.length > 0) payload.services_needed = values.services_needed
    if (values.message) payload.message = values.message
    payload.status = 'new'

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
    setValues(initialValues)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent-500/20 text-accent-400 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-neutral-300 text-lg leading-relaxed max-w-2xl">
              Tell us about your product and sourcing requirements. We'll review your inquiry and respond within 24 hours with a tailored plan and transparent pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-neutral-800 mb-6">Contact Information</h2>
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-brand-700" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-0.5">Email</p>
                    <a href="mailto:info@ssourcingchina.com" className="text-neutral-700 hover:text-brand-700 text-sm transition-colors">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-brand-700" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-0.5">Phone / WhatsApp</p>
                    <a href="tel:+8618000000000" className="text-neutral-700 hover:text-brand-700 text-sm transition-colors">
                      +86 180 0000 0000
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-brand-700" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-0.5">Location</p>
                    <p className="text-neutral-700 text-sm">Guangzhou, Guangdong, China</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-brand-700" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-0.5">Response Time</p>
                    <p className="text-neutral-700 text-sm">Within 24 hours (business days)</p>
                  </div>
                </div>
              </div>

              <div className="bg-brand-50 border border-brand-100 rounded-xl p-5">
                <h3 className="text-brand-700 font-semibold mb-3 text-sm">What Happens Next?</h3>
                <ol className="space-y-2">
                  {[
                    'We review your inquiry within 24 hours',
                    'We schedule a call or email to clarify requirements',
                    'We provide a tailored sourcing plan and quote',
                    'You decide whether to proceed — no obligation',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                      <span className="w-5 h-5 bg-brand-700 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-white border border-neutral-200 rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-800 mb-3">Inquiry Received!</h2>
                  <p className="text-neutral-600 mb-6 max-w-md mx-auto">
                    Thank you for your inquiry. We'll review your requirements and get back to you within 24 hours with a tailored sourcing plan.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-brand-700 font-semibold hover:text-brand-600 transition-colors text-sm"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="bg-white border border-neutral-200 rounded-2xl p-8 md:p-10">
                  <h2 className="text-xl font-bold text-neutral-800 mb-6">Sourcing Inquiry Form</h2>

                  {error && (
                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg px-4 py-3 mb-6">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}

                  {/* Contact Details */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">Your Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="full_name" className="text-neutral-700 text-sm font-medium mb-1.5 block">
                          Full Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="full_name"
                          name="full_name"
                          value={values.full_name}
                          onChange={onChange}
                          placeholder="Your full name"
                          className="border-neutral-300 text-neutral-800 placeholder:text-neutral-400"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="company_name" className="text-neutral-700 text-sm font-medium mb-1.5 block">
                          Company Name
                        </Label>
                        <Input
                          id="company_name"
                          name="company_name"
                          value={values.company_name}
                          onChange={onChange}
                          placeholder="Your company"
                          className="border-neutral-300 text-neutral-800 placeholder:text-neutral-400"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-neutral-700 text-sm font-medium mb-1.5 block">
                          Email Address <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={values.email}
                          onChange={onChange}
                          placeholder="you@company.com"
                          className="border-neutral-300 text-neutral-800 placeholder:text-neutral-400"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-neutral-700 text-sm font-medium mb-1.5 block">
                          Phone / WhatsApp
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={values.phone}
                          onChange={onChange}
                          placeholder="+1 555 000 0000"
                          className="border-neutral-300 text-neutral-800 placeholder:text-neutral-400"
                        />
                      </div>
                      <div>
                        <Label htmlFor="country" className="text-neutral-700 text-sm font-medium mb-1.5 block">
                          Country
                        </Label>
                        <Input
                          id="country"
                          name="country"
                          value={values.country}
                          onChange={onChange}
                          placeholder="Your country"
                          className="border-neutral-300 text-neutral-800 placeholder:text-neutral-400"
                        />
                      </div>
                      <div>
                        <Label htmlFor="product_category" className="text-neutral-700 text-sm font-medium mb-1.5 block">
                          Product Category
                        </Label>
                        <select
                          id="product_category"
                          name="product_category"
                          value={values.product_category}
                          onChange={onChange}
                          className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm text-neutral-800 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        >
                          <option value="">Select a category</option>
                          {categories.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">Product Details</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="product_description" className="text-neutral-700 text-sm font-medium mb-1.5 block">
                          Product Description <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                          id="product_description"
                          name="product_description"
                          value={values.product_description}
                          onChange={onChange}
                          placeholder="Describe the product(s) you want to source — include materials, dimensions, features, quality standards, and any certifications required."
                          rows={4}
                          className="border-neutral-300 text-neutral-800 placeholder:text-neutral-400 resize-none"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="estimated_quantity" className="text-neutral-700 text-sm font-medium mb-1.5 block">
                            Estimated Quantity
                          </Label>
                          <Input
                            id="estimated_quantity"
                            name="estimated_quantity"
                            value={values.estimated_quantity}
                            onChange={onChange}
                            placeholder="e.g. 500 units / month"
                            className="border-neutral-300 text-neutral-800 placeholder:text-neutral-400"
                          />
                        </div>
                        <div>
                          <Label htmlFor="target_price" className="text-neutral-700 text-sm font-medium mb-1.5 block">
                            Target Unit Price
                          </Label>
                          <Input
                            id="target_price"
                            name="target_price"
                            value={values.target_price}
                            onChange={onChange}
                            placeholder="e.g. USD 5–8 per unit"
                            className="border-neutral-300 text-neutral-800 placeholder:text-neutral-400"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">Services Needed</h3>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((svc) => {
                        const selected = values.services_needed.includes(svc)
                        return (
                          <button
                            key={svc}
                            type="button"
                            onClick={() => toggleService(svc)}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                              selected
                                ? 'bg-brand-700 text-white border-brand-700'
                                : 'bg-white text-neutral-700 border-neutral-300 hover:border-brand-400'
                            }`}
                          >
                            {svc}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div className="mb-8">
                    <Label htmlFor="message" className="text-neutral-700 text-sm font-medium mb-1.5 block">
                      Additional Notes
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={values.message}
                      onChange={onChange}
                      placeholder="Any other requirements, questions, or context that would help us understand your project."
                      rows={3}
                      className="border-neutral-300 text-neutral-800 placeholder:text-neutral-400 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-accent-500 hover:bg-accent-400 text-white font-semibold py-3 text-base rounded-lg transition-colors"
                  >
                    {status === 'submitting' ? 'Submitting…' : 'Submit Sourcing Inquiry'}
                  </Button>

                  <p className="text-xs text-neutral-400 text-center mt-4">
                    We respond within 24 hours. No spam, no obligation.
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
