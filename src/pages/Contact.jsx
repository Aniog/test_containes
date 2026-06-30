import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import Button from "@/components/ui/button"
import { DataClient } from "@strikingly/sdk"
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config.jsx"

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const initialForm = {
  name: "",
  email: "",
  company: "",
  country: "",
  phone: "",
  product: "",
  quantity: "",
  budget: "",
  timeline: "",
  message: ""
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState("idle") // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg("")
    setStatus("submitting")

    try {
      const payload = {
        data: {
          name: form.name,
          email: form.email,
          company: form.company || null,
          country: form.country || null,
          phone: form.phone || null,
          product_description: form.product,
          estimated_quantity: form.quantity || null,
          target_budget: form.budget || null,
          timeline: form.timeline || null,
          additional_message: form.message || null
        }
      }

      const { data: response, error } = await client
        .from("SourcingInquiries")
        .insert(payload)
        .select()
        .single()

      if (error || response?.success === false) {
        const errMsg = Array.isArray(response?.errors) && response.errors.length > 0
          ? response.errors.join(", ")
          : error?.message || "Submission failed. Please try again."
        setErrorMsg(errMsg)
        setStatus("error")
        return
      }

      setStatus("success")
      setForm(initialForm)
    } catch (err) {
      console.error("Form submission error:", err)
      setErrorMsg(err.message || "An unexpected error occurred. Please try again.")
      setStatus("error")
    }
  }

  const contactInfo = [
    { icon: MapPin, label: "Office Address", value: "Guangzhou, Guangdong Province, China" },
    { icon: Mail, label: "Email", value: "info@ssourcingchina.com" },
    { icon: Phone, label: "Phone", value: "+86 20 1234 5678" },
    { icon: Clock, label: "Office Hours", value: "Monday - Friday, 9:00 AM - 6:00 PM (CST)" }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-brand-300 font-semibold text-sm uppercase tracking-widest mb-4">Contact Us</p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-lg text-surface-300 leading-relaxed">
              Tell us about your sourcing needs and we'll respond within 24 hours with a customized plan and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="bg-white rounded-xl p-5 border border-surface-100 shadow-sm">
                  <div className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-surface-400 font-medium uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm text-surface-800 font-medium mt-0.5">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-brand-50 rounded-xl p-6 border border-brand-100">
                <h3 className="font-semibold text-brand-800 mb-2">Prefer to email us directly?</h3>
                <p className="text-sm text-brand-700 mb-3">Send your inquiry and we'll respond promptly.</p>
                <a href="mailto:info@ssourcingchina.com" className="text-brand-500 font-semibold text-sm hover:text-accent-500 transition-colors">
                  info@ssourcingchina.com →
                </a>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm border border-surface-200 p-6 md:p-8">
                {status === "success" ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-brand-900 mb-2">Thank You!</h3>
                    <p className="text-surface-600 mb-6">
                      Your inquiry has been submitted successfully. Our team will review it and get back to you within 24 hours.
                    </p>
                    <Button variant="primary" onClick={() => setStatus("idle")}>
                      Submit Another Inquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-surface-700 mb-1.5">Full Name *</label>
                        <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required
                          className="w-full px-4 py-2.5 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                          placeholder="Your name" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-surface-700 mb-1.5">Email Address *</label>
                        <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required
                          className="w-full px-4 py-2.5 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                          placeholder="you@company.com" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-surface-700 mb-1.5">Company Name</label>
                        <input type="text" id="company" name="company" value={form.company} onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                          placeholder="Your company" />
                      </div>
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium text-surface-700 mb-1.5">Country</label>
                        <input type="text" id="country" name="country" value={form.country} onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                          placeholder="Your country" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-surface-700 mb-1.5">Phone Number</label>
                        <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                          placeholder="+1 234 567 8900" />
                      </div>
                      <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-surface-700 mb-1.5">Estimated Quantity</label>
                        <input type="text" id="quantity" name="quantity" value={form.quantity} onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                          placeholder="e.g. 1,000 units" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-surface-700 mb-1.5">Target Budget</label>
                        <input type="text" id="budget" name="budget" value={form.budget} onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                          placeholder="e.g. $5,000 - $10,000" />
                      </div>
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-surface-700 mb-1.5">Target Timeline</label>
                        <input type="text" id="timeline" name="timeline" value={form.timeline} onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                          placeholder="e.g. 3 months" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-surface-700 mb-1.5">Product Description *</label>
                      <textarea id="product" name="product" value={form.product} onChange={handleChange} required
                        rows={3}
                        className="w-full px-4 py-2.5 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        placeholder="Describe the product you want to source, including specifications, target price, and estimated quantity..." />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-surface-700 mb-1.5">Additional Details</label>
                      <textarea id="message" name="message" value={form.message} onChange={handleChange}
                        rows={2}
                        className="w-full px-4 py-2.5 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        placeholder="Any additional requirements, deadlines, or questions..." />
                    </div>

                    {status === "error" && errorMsg && (
                      <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                        <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <Button
                      type="submit"
                      variant="accent"
                      size="lg"
                      className="w-full"
                      disabled={status === "submitting"}
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Submit Sourcing Inquiry
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-surface-400 text-center">
                      We respect your privacy. Your information will not be shared with third parties.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}