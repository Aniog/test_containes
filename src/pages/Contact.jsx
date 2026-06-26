import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product_category: '',
    product_description: '',
    estimated_quantity: '',
    budget_range: '',
    timeline: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setStatus('submitting')

    try {
      const { data, error: insertError } = await client
        .from('Sourcing Inquiries')
        .insert({
          data: {
            ...formData,
            id: crypto.randomUUID(),
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          },
        })
        .select()
        .single()

      if (insertError || data?.success === false) {
        const message = data?.errors?.join(', ') || insertError?.message || 'Failed to submit inquiry'
        throw new Error(message)
      }

      setStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        country: '',
        product_category: '',
        product_description: '',
        estimated_quantity: '',
        budget_range: '',
        timeline: '',
        message: '',
      })
    } catch (err) {
      setError(err.message)
      setStatus('error')
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Get a Free Sourcing Quote
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Tell us about your sourcing needs and we'll provide a customized plan with verified suppliers within 48 hours. No obligation, no hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Email</p>
                    <a href="mailto:info@ssourcingchina.com" className="text-sm text-blue-600 hover:text-blue-700">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Phone / WeChat</p>
                    <a href="tel:+8610-1234-5678" className="text-sm text-blue-600 hover:text-blue-700">
                      +86 10-1234-5678
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Office Location</p>
                    <p className="text-sm text-slate-600">
                      Tianhe District<br />
                      Guangzhou, China
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Business Hours</p>
                    <p className="text-sm text-slate-600">
                      Monday - Friday: 9:00 AM - 6:00 PM (CST)<br />
                      Saturday: 9:00 AM - 1:00 PM (CST)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-2xl bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Why Buyers Choose Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span className="text-sm text-slate-600">Free initial consultation with no obligation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span className="text-sm text-slate-600">Response within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span className="text-sm text-slate-600">Customized sourcing plan within 48 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span className="text-sm text-slate-600">Transparent pricing with no hidden fees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span className="text-sm text-slate-600">English-speaking support throughout</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Sourcing Inquiry Form</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Ltd."
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Country
                      </label>
                      <Input
                        id="country"
                        name="country"
                        type="text"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="United States"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="product_category" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Product Category <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="product_category"
                      name="product_category"
                      type="text"
                      required
                      value={formData.product_category}
                      onChange={handleChange}
                      placeholder="e.g., Electronics, Textiles, Home Goods, Auto Parts"
                    />
                  </div>

                  <div>
                    <label htmlFor="product_description" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Product Description <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="product_description"
                      name="product_description"
                      required
                      rows={4}
                      value={formData.product_description}
                      onChange={handleChange}
                      placeholder="Please describe your product requirements in detail: materials, specifications, certifications needed, target price range, etc."
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="estimated_quantity" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Estimated Order Quantity
                      </label>
                      <Input
                        id="estimated_quantity"
                        name="estimated_quantity"
                        type="text"
                        value={formData.estimated_quantity}
                        onChange={handleChange}
                        placeholder="e.g., 1,000 - 5,000 units"
                      />
                    </div>
                    <div>
                      <label htmlFor="budget_range" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Budget Range
                      </label>
                      <Input
                        id="budget_range"
                        name="budget_range"
                        type="text"
                        value={formData.budget_range}
                        onChange={handleChange}
                        placeholder="e.g., $5-15 per unit"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Expected Timeline
                    </label>
                    <Input
                      id="timeline"
                      name="timeline"
                      type="text"
                      value={formData.timeline}
                      onChange={handleChange}
                      placeholder="e.g., Need first shipment in 3 months"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Additional Information
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any other requirements, questions, or details that would help us understand your needs better..."
                    />
                  </div>

                  {status === 'success' && (
                    <div className="rounded-lg bg-green-50 p-4 flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-green-800">Inquiry Submitted Successfully!</p>
                        <p className="text-sm text-green-700 mt-1">
                          Thank you for your inquiry. Our team will review your requirements and get back to you within 48 hours with a customized sourcing plan.
                        </p>
                      </div>
                    </div>
                  )}

                  {status === 'error' && error && (
                    <div className="rounded-lg bg-red-50 p-4">
                      <p className="text-sm text-red-800">{error}</p>
                    </div>
                  )}

                  <Button type="submit" size="lg" className="w-full" disabled={status === 'submitting'}>
                    {status === 'submitting' ? (
                      'Submitting...'
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Submit Inquiry
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-slate-500 text-center">
                    By submitting this form, you agree to our privacy policy. We'll never share your information with third parties.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Our Office Location
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Based in Guangzhou, China's major trading hub, with easy access to all major manufacturing regions.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Guangzhou Office</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <p className="text-sm text-slate-600">
                      Tianhe District<br />
                      Guangzhou, Guangdong<br />
                      China, 510630
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <p className="text-sm text-slate-600">+86 10-1234-5678</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <p className="text-sm text-slate-600">info@ssourcingchina.com</p>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="text-sm font-medium text-slate-900 mb-2">Nearby Manufacturing Hubs:</h4>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li>• Dongguan (1 hour drive) - Electronics & Hardware</li>
                    <li>• Shenzhen (2 hours drive) - Electronics & Tech</li>
                    <li>• Foshan (30 min drive) - Furniture & Home Goods</li>
                    <li>• Zhongshan (1 hour drive) - Lighting & Appliances</li>
                  </ul>
                </div>
              </div>
              <div className="rounded-xl bg-slate-100 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-slate-400 mx-auto mb-2" />
                  <p className="text-sm text-slate-500">Map placeholder</p>
                  <p className="text-xs text-slate-400">Guangzhou, China</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}