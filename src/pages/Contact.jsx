import { useState } from "react"
import { DataClient } from "@strikingly/sdk"
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config.jsx"
import { MapPin, Mail, Clock, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/Button"

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const categories = [
  "Electronics & Components", "Furniture & Home Décor", "Apparel & Textiles",
  "Industrial Equipment", "Toys & Baby Products", "Sports & Outdoor Gear",
  "Health & Beauty", "Packaging Materials", "Auto Parts", "LED Lighting",
  "Kitchen & Cookware", "Office Supplies", "Other",
]

const serviceOptions = [
  "Supplier Sourcing", "Factory Verification", "Quality Inspection",
  "Production Follow-up", "Shipping Coordination", "Private Label / OEM",
]

const initialForm = {
  full_name: "",
  email: "",
  company: "",
  country: "",
  phone: "",
  product_category: "",
  product_description: "",
  estimated_quantity: "",
  target_price: "",
  services_needed: [],
  message: "",
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleServiceToggle = (service) => {
    setForm((f) => ({
      ...f,
      services_needed: f.services_needed.includes(service)
        ? f.services_needed.filter((s) => s !== service)
        : [...f.services_needed, service],
    }))
  }

  const validate = () => {
    if (!form.full_name.trim()) return "Full name is required."
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) return "A valid email address is required."
    if (!form.product_description.trim()) return "Please describe the product you want to source."
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const validationError = validate()
    if (validationError) { setError(validationError); return }

    setStatus("submitting")

    try {
      const { data: response, error: insertError } = await client
        .from("Sourcing Inquiries")
        .insert({
          data: {
            full_name: form.full_name,
            email: form.email,
            company: form.company,
            country: form.country,
            phone: form.phone,
            product_category: form.product_category,
            product_description: form.product_description,
            estimated_quantity: form.estimated_quantity,
            target_price: form.target_price,
            services_needed: form.services_needed,
            message: form.message,
          },
        })
        .select()
        .single()

      if (insertError || response?.success === false) {
        const msg = Array.isArray(response?.errors) ? response.errors.join(", ") : insertError?.message || "Submission failed."
        setError(msg)
        setStatus("error")
        return
      }

      setStatus("success")
      setForm(initialForm)
    } catch (err) {
      console.error("Inquiry submission error:", err)
      setError(err.message || "Something went wrong. Please try again.")
      setStatus("error")
    }
  }

  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#1A1F2E] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#D4A017] mb-3">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get a Free Sourcing Quote</h1>
            <p className="text-lg text-[#9AAABB] leading-relaxed">
              Tell us what you need and we'll get back to you within 24 business hours with a tailored sourcing plan and transparent pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-[#1A1F2E] mb-6">Contact Information</h2>
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#EEF2F7] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#1A4B8C]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1F2E] text-sm">Office Locations</p>
                    <p className="text-[#6B7A8D] text-sm">Shenzhen & Yiwu, China</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#EEF2F7] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#1A4B8C]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1F2E] text-sm">Email</p>
                    <a href="mailto:info@ssourcing.cn" className="text-[#1A4B8C] text-sm hover:underline">info@ssourcing.cn</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#EEF2F7] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#1A4B8C]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1F2E] text-sm">Response Time</p>
                    <p className="text-[#6B7A8D] text-sm">Within 24 business hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F7F9FC] rounded-xl border border-[#D8E0EA] p-5">
                <h3 className="font-semibold text-[#1A1F2E] mb-3">What Happens Next?</h3>
                <ol className="space-y-3">
                  {[
                    "We review your inquiry within 24 hours",
                    "A sourcing specialist contacts you to discuss your needs",
                    "We provide a tailored sourcing plan and quote",
                    "You decide whether to proceed — no obligation",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#3D4A5C] text-sm">
                      <span className="w-5 h-5 bg-[#1A4B8C] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              {status === "success" ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                  <CheckCircle className="w-16 h-16 text-[#27AE60] mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-[#1A1F2E] mb-2">Inquiry Received!</h2>
                  <p className="text-[#3D4A5C] mb-6">
                    Thank you for your inquiry. A member of our sourcing team will review your request and get back to you within 24 business hours.
                  </p>
                  <Button variant="primary" size="md" onClick={() => setStatus("idle")}>
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-bold text-[#1A1F2E] mb-2">Sourcing Inquiry Form</h2>
                  <p className="text-[#6B7A8D] text-sm mb-6">Fields marked with * are required.</p>

                  {/* Contact Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#1A1F2E] mb-1">Full Name *</label>
                      <input
                        type="text"
                        name="full_name"
                        value={form.full_name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[#D8E0EA] text-[#1A1F2E] bg-white focus:outline-none focus:ring-2 focus:ring-[#1A4B8C] focus:border-transparent placeholder:text-[#9AAABB] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1A1F2E] mb-1">Business Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[#D8E0EA] text-[#1A1F2E] bg-white focus:outline-none focus:ring-2 focus:ring-[#1A4B8C] focus:border-transparent placeholder:text-[#9AAABB] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1A1F2E] mb-1">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        className="w-full px-4 py-3 rounded-lg border border-[#D8E0EA] text-[#1A1F2E] bg-white focus:outline-none focus:ring-2 focus:ring-[#1A4B8C] focus:border-transparent placeholder:text-[#9AAABB] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1A1F2E] mb-1">Country</label>
                      <input
                        type="text"
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        placeholder="Your country"
                        className="w-full px-4 py-3 rounded-lg border border-[#D8E0EA] text-[#1A1F2E] bg-white focus:outline-none focus:ring-2 focus:ring-[#1A4B8C] focus:border-transparent placeholder:text-[#9AAABB] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1A1F2E] mb-1">Phone / WhatsApp</label>
                      <input
                        type="text"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 8900"
                        className="w-full px-4 py-3 rounded-lg border border-[#D8E0EA] text-[#1A1F2E] bg-white focus:outline-none focus:ring-2 focus:ring-[#1A4B8C] focus:border-transparent placeholder:text-[#9AAABB] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1A1F2E] mb-1">Product Category</label>
                      <select
                        name="product_category"
                        value={form.product_category}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#D8E0EA] text-[#1A1F2E] bg-white focus:outline-none focus:ring-2 focus:ring-[#1A4B8C] focus:border-transparent text-sm"
                      >
                        <option value="">Select a category</option>
                        {categories.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Product Description */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1F2E] mb-1">Product Description *</label>
                    <textarea
                      name="product_description"
                      value={form.product_description}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe the product you want to source — include specifications, materials, dimensions, certifications needed, and any other relevant details."
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#D8E0EA] text-[#1A1F2E] bg-white focus:outline-none focus:ring-2 focus:ring-[#1A4B8C] focus:border-transparent placeholder:text-[#9AAABB] text-sm resize-none"
                    />
                  </div>

                  {/* Quantity & Price */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#1A1F2E] mb-1">Estimated Quantity</label>
                      <input
                        type="text"
                        name="estimated_quantity"
                        value={form.estimated_quantity}
                        onChange={handleChange}
                        placeholder="e.g. 500 units, 1 container"
                        className="w-full px-4 py-3 rounded-lg border border-[#D8E0EA] text-[#1A1F2E] bg-white focus:outline-none focus:ring-2 focus:ring-[#1A4B8C] focus:border-transparent placeholder:text-[#9AAABB] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1A1F2E] mb-1">Target Price</label>
                      <input
                        type="text"
                        name="target_price"
                        value={form.target_price}
                        onChange={handleChange}
                        placeholder="e.g. USD 5–8 per unit"
                        className="w-full px-4 py-3 rounded-lg border border-[#D8E0EA] text-[#1A1F2E] bg-white focus:outline-none focus:ring-2 focus:ring-[#1A4B8C] focus:border-transparent placeholder:text-[#9AAABB] text-sm"
                      />
                    </div>
                  </div>

                  {/* Services Needed */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1F2E] mb-2">Services Needed</label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => handleServiceToggle(service)}
                          className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                            form.services_needed.includes(service)
                              ? "bg-[#1A4B8C] text-white border-[#1A4B8C]"
                              : "bg-white text-[#3D4A5C] border-[#D8E0EA] hover:border-[#1A4B8C] hover:text-[#1A4B8C]"
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1F2E] mb-1">Additional Information</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any other details, questions, or context that would help us understand your needs."
                      className="w-full px-4 py-3 rounded-lg border border-[#D8E0EA] text-[#1A1F2E] bg-white focus:outline-none focus:ring-2 focus:ring-[#1A4B8C] focus:border-transparent placeholder:text-[#9AAABB] text-sm resize-none"
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-lg p-4">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}

                  {/* Submit */}
                  <Button
                    type="submit"
                    variant="cta"
                    size="lg"
                    disabled={status === "submitting"}
                    className="w-full"
                  >
                    {status === "submitting" ? "Submitting..." : "Submit Sourcing Inquiry"}
                  </Button>

                  <p className="text-[#9AAABB] text-xs text-center">
                    By submitting this form, you agree to be contacted by our team regarding your sourcing inquiry. We do not share your information with third parties.
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
