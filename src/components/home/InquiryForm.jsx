import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { toast } from 'sonner'
import { Send, Mail, Phone, MapPin, Clock, Loader2 } from 'lucide-react'
import { submitInquiry } from '@/api/inquiries'

export function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    phone: '',
    product: '',
    quantity: '',
    budget: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await submitInquiry(formData)
      toast.success('Thank you! We will review your inquiry and respond within 24 hours.')
      setFormData({ name: '', email: '', company: '', country: '', phone: '', product: '', quantity: '', budget: '', message: '' })
    } catch (err) {
      toast.error(err.message || 'Failed to submit inquiry. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Get a Free Sourcing Quote
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tell us what you need, and we will get back to you within 24 hours with a sourcing plan and quotation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">Sourcing Inquiry Form</CardTitle>
                <CardDescription>Fill in your requirements below. All fields are optional, but more details help us provide a better quote.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" name="name" placeholder="John Smith" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" name="email" type="email" placeholder="john@company.com" value={formData.email} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" name="company" placeholder="Your Company Ltd." value={formData.company} onChange={handleChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Input id="country" name="country" placeholder="United States" value={formData.country} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="product">Product Description</Label>
                      <Input id="product" name="product" placeholder="e.g., Bluetooth speakers, custom t-shirts" value={formData.product} onChange={handleChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="quantity">Estimated Quantity</Label>
                      <Input id="quantity" name="quantity" placeholder="e.g., 1,000 units" value={formData.quantity} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone / WhatsApp</Label>
                      <Input id="phone" name="phone" placeholder="+1 XXX XXX XXXX" value={formData.phone} onChange={handleChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Target Budget</Label>
                      <Input id="budget" name="budget" placeholder="e.g., $10,000" value={formData.budget} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your requirements: specifications, target price, timeline, quality standards, or any other details..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <Button type="submit" className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Submit Inquiry
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-slate-200">
              <CardContent className="p-6 space-y-5">
                <h3 className="text-lg font-semibold text-slate-900">Contact Information</h3>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-blue-700 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">Email</p>
                    <a href="mailto:info@ssourcingchina.com" className="text-sm text-blue-700 hover:underline">info@ssourcingchina.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-blue-700 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">Phone / WhatsApp</p>
                    <p className="text-sm text-slate-600">+86 XXX XXXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-blue-700 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">Office</p>
                    <p className="text-sm text-slate-600">Shenzhen, Guangdong, China</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-blue-700 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">Working Hours</p>
                    <p className="text-sm text-slate-600">Mon - Fri, 9:00 AM - 6:00 PM (CST)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Why Submit an Inquiry?</h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">&#10003;</span>
                    Free sourcing consultation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">&#10003;</span>
                    No obligation to proceed
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">&#10003;</span>
                    Response within 24 hours
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">&#10003;</span>
                    Transparent pricing upfront
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
