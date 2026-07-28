import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Send, CheckCircle, Loader2 } from 'lucide-react'
import { submitInquiry } from '@/api/inquiries'

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [values, setValues] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    productCategory: '',
    productDescription: '',
    targetDelivery: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setSubmitting(true)

    const result = await submitInquiry(values, 'home')
    setSubmitting(false)

    if (result.success) {
      setSubmitted(true)
    } else {
      setError(result.error || 'Something went wrong. Please try again.')
    }
  }

  if (submitted) {
    return (
      <section className="py-20 bg-brand-slate">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-brand-navy mb-4">Thank You for Your Inquiry!</h2>
          <p className="text-gray-600">
            We have received your sourcing request. Our team will review your requirements and get back to you within 24 hours with a detailed quote.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-brand-slate">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <span className="text-sm font-semibold text-brand-orange uppercase tracking-wider">Get Started</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-navy">
              Get a Free Sourcing Quote
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Tell us about the products you need and we will provide a detailed quote within 24 hours. No obligation, no hidden fees.
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                <span className="text-sm text-gray-700">Free consultation and quote within 24 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                <span className="text-sm text-gray-700">No minimum order requirements for initial inquiry</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                <span className="text-sm text-gray-700">Transparent pricing with no hidden costs</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                <span className="text-sm text-gray-700">Dedicated account manager assigned to your project</span>
              </div>
            </div>
          </div>
          
          {/* Right Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                  <Input name="fullName" value={values.fullName} onChange={handleChange} placeholder="John Smith" required className="h-11" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Company Name</label>
                  <Input name="companyName" value={values.companyName} onChange={handleChange} placeholder="Your Company Ltd." className="h-11" />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                  <Input name="email" type="email" value={values.email} onChange={handleChange} placeholder="john@company.com" required className="h-11" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone / WhatsApp</label>
                  <Input name="phone" value={values.phone} onChange={handleChange} placeholder="+1 234 567 8900" className="h-11" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Product Category</label>
                <Input name="productCategory" value={values.productCategory} onChange={handleChange} placeholder="e.g., Electronics, Home Goods, Apparel" className="h-11" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Product Description *</label>
                <Textarea
                  name="productDescription"
                  value={values.productDescription}
                  onChange={handleChange}
                  placeholder="Describe the products you need, including specifications, quantity, target price, and any special requirements..."
                  rows={4}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Target Delivery Date</label>
                <Input name="targetDelivery" value={values.targetDelivery} onChange={handleChange} placeholder="e.g., Within 2 months" className="h-11" />
              </div>

              {error && (
                <div className="rounded-lg bg-red-50 border border-red-200 p-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}
              
              <Button type="submit" disabled={submitting} className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold h-12 text-base">
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Submit Sourcing Inquiry
                  </>
                )}
              </Button>
              
              <p className="text-xs text-center text-gray-500">
                By submitting this form, you agree to our privacy policy. We will never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
