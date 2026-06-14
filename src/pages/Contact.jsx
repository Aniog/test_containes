import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import { toast } from 'sonner'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    productCategory: '',
    estimatedVolume: '',
    targetPrice: '',
    timeline: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in your name, email, and message.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address.')
      return
    }

    setIsSubmitting(true)

    // Simulate API call / form submission
    await new Promise(resolve => setTimeout(resolve, 900))

    // In a real implementation, this would POST to a backend or CRM
    console.log('Sourcing inquiry submitted:', formData)

    setIsSubmitting(false)
    setSubmitted(true)
    toast.success('Thank you. We will respond within 24 hours.')

    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      country: '',
      productCategory: '',
      estimatedVolume: '',
      targetPrice: '',
      timeline: '',
      message: '',
    })

    // Reset success state after a delay
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <div>
      <section className="bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="text-sm tracking-[2px] text-slate-400 mb-4">GET STARTED</div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Get a Free Sourcing Quote</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Tell us about your product requirements. We will review your inquiry and respond with 
            initial supplier options and next steps within 24 hours.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                  <Input name="name" value={formData.name} onChange={handleChange} placeholder="Jane Smith" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Company</label>
                  <Input name="company" value={formData.company} onChange={handleChange} placeholder="Your Company Ltd" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                  <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone / WhatsApp</label>
                  <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 555 123 4567" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Country</label>
                  <Input name="country" value={formData.country} onChange={handleChange} placeholder="United States" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Product Category</label>
                  <Select name="productCategory" value={formData.productCategory} onChange={handleChange}>
                    <option value="">Select a category</option>
                    <option value="Consumer Electronics">Consumer Electronics & Accessories</option>
                    <option value="Home & Kitchen">Home & Kitchen Appliances</option>
                    <option value="Textiles & Apparel">Textiles, Apparel & Accessories</option>
                    <option value="Industrial Components">Industrial Components & Tools</option>
                    <option value="Packaging">Packaging Materials & Supplies</option>
                    <option value="Furniture">Furniture & Home Furnishings</option>
                    <option value="Automotive">Automotive Parts & Accessories</option>
                    <option value="Toys & Sporting">Toys, Games & Sporting Goods</option>
                    <option value="Other">Other / Not Listed</option>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Estimated Annual Volume</label>
                  <Input name="estimatedVolume" value={formData.estimatedVolume} onChange={handleChange} placeholder="e.g., 5,000 units" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Target Unit Price</label>
                  <Input name="targetPrice" value={formData.targetPrice} onChange={handleChange} placeholder="e.g., USD 4.50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Required Timeline</label>
                  <Input name="timeline" value={formData.timeline} onChange={handleChange} placeholder="e.g., 10 weeks" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Product Description & Requirements *</label>
                <Textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Please describe the product you want to source, including key specifications, quality requirements, target market, and any certifications needed. The more detail you provide, the more accurately we can assess feasibility."
                  required 
                />
                <p className="text-xs text-slate-500 mt-2">We treat all inquiries as confidential. We will not share your information with suppliers without your permission.</p>
              </div>

              <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
                {isSubmitting ? 'Submitting...' : 'Submit Sourcing Inquiry'}
              </Button>

              {submitted && (
                <div className="text-sm text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-3">
                  Your inquiry has been received. We will contact you within 24 hours.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 sticky top-24">
              <h3 className="font-semibold text-lg tracking-tight text-slate-900 mb-6">Direct Contact</h3>
              
              <div className="space-y-6 text-sm">
                <div>
                  <div className="text-slate-500 text-xs tracking-widest mb-1">EMAIL</div>
                  <a href="mailto:info@ssourcingchina.com" className="text-slate-900 hover:underline">info@ssourcingchina.com</a>
                </div>
                <div>
                  <div className="text-slate-500 text-xs tracking-widest mb-1">PHONE / WECHAT</div>
                  <a href="tel:+862162345678" className="text-slate-900 hover:underline">+86 21 6234 5678</a>
                </div>
                <div>
                  <div className="text-slate-500 text-xs tracking-widest mb-1">OFFICE</div>
                  <div className="text-slate-900 leading-relaxed">
                    Room 1208, Tower B<br />
                    88 Century Avenue<br />
                    Pudong, Shanghai 200120<br />
                    China
                  </div>
                </div>
                <div>
                  <div className="text-slate-500 text-xs tracking-widest mb-1">BUSINESS HOURS</div>
                  <div className="text-slate-900">Monday – Friday, 8:30am – 6:00pm China Standard Time</div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200 text-xs text-slate-500 leading-relaxed">
                We respond to all qualified inquiries within one business day. If you do not hear from us, 
                please check your spam folder or follow up directly.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
