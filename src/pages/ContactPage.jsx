import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { toast } from 'sonner'
import { Send, Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react'

export function ContactPage() {
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success('Thank you! We will review your inquiry and respond within 24 hours.')
    setFormData({ name: '', email: '', company: '', country: '', phone: '', product: '', quantity: '', budget: '', message: '' })
  }

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 border border-blue-400/30 rounded-full px-3 py-1 text-sm mb-6">
              <MessageSquare className="h-4 w-4" />
              Contact Us
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Get in Touch with Our Sourcing Team
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              Whether you have a specific product in mind or just want to explore sourcing from China, we are here to help. Reach out and we will respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                        <Label htmlFor="name">Your Name *</Label>
                        <Input id="name" name="name" placeholder="John Smith" value={formData.name} onChange={handleChange} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" name="email" type="email" placeholder="john@company.com" value={formData.email} onChange={handleChange} required />
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

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone / WhatsApp</Label>
                      <Input id="phone" name="phone" placeholder="+1 XXX XXX XXXX" value={formData.phone} onChange={handleChange} />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="product">Product Description</Label>
                        <Input id="product" name="product" placeholder="e.g., Bluetooth speakers" value={formData.product} onChange={handleChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="quantity">Estimated Quantity</Label>
                        <Input id="quantity" name="quantity" placeholder="e.g., 1,000 units" value={formData.quantity} onChange={handleChange} />
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
                        placeholder="Tell us more about your requirements: specifications, target price, timeline, quality standards, certifications needed, or any other details..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <Button type="submit" className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800">
                      <Send className="mr-2 h-4 w-4" />
                      Submit Inquiry
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
    </div>
  )
}
