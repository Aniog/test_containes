import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"

export default function HomeInquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    product: "",
    quantity: "",
    message: "",
  })
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setStatus("submitting")

    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1000))
    setStatus("success")
  }

  if (status === "success") {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-10 text-center">
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-white mb-2">Thank You!</h3>
        <p className="text-white/70">
          We've received your inquiry and will get back to you within 24 hours with a free sourcing assessment.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-10">
      {error && (
        <div className="mb-6 p-4 bg-red-500/20 border border-red-400/30 rounded-md text-white text-sm">
          {error}
        </div>
      )}
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="form-label text-white/80">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="form-label text-white/80">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
            placeholder="john@company.com"
          />
        </div>
        <div>
          <label htmlFor="company" className="form-label text-white/80">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
            placeholder="Your Company Ltd."
          />
        </div>
        <div>
          <label htmlFor="quantity" className="form-label text-white/80">
            Estimated Quantity
          </label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
            placeholder="e.g. 500-1000 pcs"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="product" className="form-label text-white/80">
            Product Description *
          </label>
          <input
            type="text"
            id="product"
            name="product"
            required
            value={formData.product}
            onChange={handleChange}
            className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
            placeholder="What product are you looking to source?"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="message" className="form-label text-white/80">
            Additional Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
            placeholder="Target price, quality requirements, certifications needed, etc."
          />
        </div>
      </div>
      <div className="mt-6">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary text-base px-8 py-4 inline-flex items-center gap-2 w-full md:w-auto justify-center disabled:opacity-60"
        >
          {status === "submitting" ? (
            "Sending..."
          ) : (
            <>
              Get a Free Sourcing Quote
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
      <p className="text-white/50 text-xs mt-3">
        We'll respond within 24 hours. No obligation, completely free.
      </p>
    </form>
  )
}