import { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle } from 'lucide-react';

const productCategories = [
  'Electronics & Gadgets',
  'Furniture & Home Décor',
  'Apparel & Textiles',
  'Industrial Equipment',
  'Toys & Baby Products',
  'Health & Beauty',
  'Sports & Outdoor',
  'Packaging & Labels',
  'Kitchenware & Cookware',
  'Automotive Accessories',
  'Pet Products',
  'Stationery & Office',
  'Other',
];

const services = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Full Sourcing Service',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    category: '',
    service: '',
    quantity: '',
    budget: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Inquiry submitted:', form);
    setSubmitted(true);
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-navy-dark to-brand-navy text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Tell us what you need. We'll review your inquiry and respond within 24 hours
              with a tailored sourcing plan and transparent pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-brand-dark mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-brand-blue-tint rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-brand-navy" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-brand-dark">Office Location</div>
                      <div className="text-brand-mid text-sm">Shenzhen, Guangdong, China</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-brand-blue-tint rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-brand-navy" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-brand-dark">Email</div>
                      <a href="mailto:info@ssourcingchina.com" className="text-brand-navy text-sm hover:underline">
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-brand-blue-tint rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-brand-navy" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-brand-dark">Phone / WhatsApp</div>
                      <div className="text-brand-mid text-sm">+86 755 0000 0000</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-brand-blue-tint rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-brand-navy" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-brand-dark">Response Time</div>
                      <div className="text-brand-mid text-sm">Within 24 hours (Mon–Fri)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-brand-border p-5">
                <h3 className="text-sm font-semibold text-brand-dark mb-3">What Happens Next?</h3>
                <ol className="space-y-3">
                  {[
                    'We review your inquiry within 24 hours',
                    'We ask any clarifying questions',
                    'We send a sourcing plan and quote',
                    'You decide whether to proceed',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-brand-navy text-white rounded-full text-xs flex items-center justify-center flex-shrink-0 font-semibold mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-brand-mid text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-brand-blue-tint rounded-xl border border-blue-200 p-5">
                <p className="text-brand-navy text-sm font-medium">
                  No commitment required. Our initial consultation and quote are completely free.
                </p>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-2xl border border-brand-border p-10 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-brand-dark mb-3">Inquiry Received</h2>
                  <p className="text-brand-mid text-lg mb-2">
                    Thank you for reaching out to SSourcing China.
                  </p>
                  <p className="text-brand-mid">
                    We'll review your inquiry and respond within 24 hours with a sourcing plan and quote.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-brand-border p-8 space-y-5">
                  <h2 className="text-xl font-bold text-brand-dark mb-1">Sourcing Inquiry Form</h2>
                  <p className="text-brand-mid text-sm mb-4">
                    Fill in as much detail as possible to help us provide an accurate quote.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">
                        Full Name <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-brand-dark placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-navy text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">
                        Email Address <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-brand-dark placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-navy text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-brand-dark placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-navy text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">
                        Country <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="text"
                        name="country"
                        required
                        value={form.country}
                        onChange={handleChange}
                        placeholder="Your country"
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-brand-dark placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-navy text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-1.5">
                      Product Description <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="product"
                      required
                      value={form.product}
                      onChange={handleChange}
                      placeholder="e.g. Stainless steel water bottles, 500ml, custom logo"
                      className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-brand-dark placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-navy text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">
                        Product Category
                      </label>
                      <select
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-navy text-sm bg-white"
                      >
                        <option value="">Select a category</option>
                        {productCategories.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">
                        Service Needed
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-navy text-sm bg-white"
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={form.quantity}
                        onChange={handleChange}
                        placeholder="e.g. 500 units"
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-brand-dark placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-navy text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">
                        Target Unit Price (USD)
                      </label>
                      <input
                        type="text"
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        placeholder="e.g. $3–5 per unit"
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-brand-dark placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-navy text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-1.5">
                      Additional Details
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Any specific requirements, certifications needed, delivery timeline, or other details..."
                      className="w-full px-4 py-2.5 rounded-lg border border-brand-border text-brand-dark placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-navy text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-light text-white font-semibold px-6 py-3.5 rounded-lg transition-colors text-base"
                  >
                    <Send className="w-4 h-4" />
                    Submit Sourcing Inquiry
                  </button>

                  <p className="text-brand-muted text-xs text-center">
                    By submitting this form, you agree to be contacted by SSourcing China regarding your inquiry.
                    We do not share your information with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
