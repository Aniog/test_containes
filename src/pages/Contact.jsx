import { useState, useEffect, useRef } from "react"
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  Clock,
} from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function Contact() {
  const ref = useRef(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    product: "",
    quantity: "",
    budget: "",
    message: "",
  })
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setStatus("submitting")

    await new Promise((r) => setTimeout(r, 1000))
    setStatus("success")
  }

  return (
    <div ref={ref}>
      {/* Page Header */}
      <section className="bg-primary text-white py-20 md:py-24">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-white/80 max-w-2xl">
              Ready to start your sourcing project? Fill out the form below and we'll
              get back to you within 24 hours with a free, no-obligation assessment.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-bg">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Our Office</h3>
                    <p className="text-sm text-txt-secondary">
                      Room 808, Fortune Building<br />
                      No. 128 Tianhe Road<br />
                      Guangzhou, China 510620
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Phone</h3>
                    <p className="text-sm text-txt-secondary">
                      +86 186 2100 1234
                    </p>
                    <p className="text-xs text-txt-muted mt-1">Mon-Fri, 9:00-18:00 CST</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Email</h3>
                    <p className="text-sm text-txt-secondary">
                      info@ssourcingchina.com
                    </p>
                    <p className="text-xs text-txt-muted mt-1">We respond within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Response Time</h3>
                    <p className="text-sm text-txt-secondary">
                      We aim to respond to all inquiries within 24 hours on business days.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-primary text-white rounded-lg p-6">
                <h3 className="font-semibold text-white mb-3">Why Work With Us?</h3>
                <ul className="space-y-2.5">
                  {[
                    "On-the-ground team in China",
                    "15+ years of sourcing experience",
                    "500+ factory audits completed",
                    "98% on-time delivery rate",
                    "No-obligation free consultation",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-white/80">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              {status === "success" ? (
                <div className="card text-center py-16">
                  <CheckCircle className="w-20 h-20 text-success mx-auto mb-6" />
                  <h2 className="text-2xl font-semibold text-primary mb-3">Thank You!</h2>
                  <p className="text-txt-secondary max-w-md mx-auto">
                    We've received your inquiry and our team will review it within 24 hours.
                    You'll hear from us soon with a free sourcing assessment.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card">
                  <h2 className="text-2xl font-semibold text-primary mb-6">
                    Get a Free Sourcing Quote
                  </h2>

                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
                      {error}
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="form-label">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="form-label">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="form-label">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="product" className="form-label">
                        Product to Source *
                      </label>
                      <input
                        type="text"
                        id="product"
                        name="product"
                        required
                        value={formData.product}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Describe the product you want to source"
                      />
                    </div>
                    <div>
                      <label htmlFor="quantity" className="form-label">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="e.g. 500-1000 units"
                      />
                    </div>
                    <div>
                      <label htmlFor="budget" className="form-label">
                        Target Budget (USD)
                      </label>
                      <input
                        type="text"
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="e.g. $5,000 - $10,000"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="message" className="form-label">
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="form-input resize-none"
                        placeholder="Quality requirements, certifications needed, target market, timeline expectations, etc."
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="btn-primary text-base px-8 py-4 inline-flex items-center gap-2 disabled:opacity-60"
                    >
                      {status === "submitting" ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Inquiry <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-xs text-txt-muted">
                      We'll respond within 24 hours. No obligation, completely free.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location */}
      <section className="bg-white py-12">
        <div className="section-container text-center">
          <h2 className="text-2xl font-semibold text-primary mb-4">Our Location</h2>
          <p className="text-txt-secondary mb-6">
            Based in Guangzhou, the heart of China's manufacturing and trade hub.
            We're within driving distance of major factory clusters in Guangdong province.
          </p>
          <div className="rounded-lg overflow-hidden bg-gray-200 h-64 max-w-4xl mx-auto">
            <div
              className="w-full h-full bg-primary-dark/10"
              data-strk-bg-id="location-map-4f8d2a"
              data-strk-bg="[location-title]"
              data-strk-bg-ratio="16x9"
              data-strk-bg-width="1200"
            />
            <span id="location-title" className="hidden">Guangzhou China manufacturing trade hub map</span>
          </div>
        </div>
      </section>
    </div>
  )
}