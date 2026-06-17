import { useState } from 'react';
import { MapPin, Mail, Phone, Clock, CheckCircle, Send } from 'lucide-react';

const productCategories = [
  'Electronics & Components',
  'Furniture & Home Goods',
  'Apparel & Textiles',
  'Industrial Equipment',
  'Packaging Materials',
  'Consumer Products',
  'Toys & Sporting Goods',
  'Auto Parts & Accessories',
  'Health & Beauty',
  'Other',
];

const services = [
  'Supplier Sourcing',
  'Factory Verification / Audit',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Full Project Management',
];

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  productCategory: '',
  serviceNeeded: '',
  orderQuantity: '',
  targetPrice: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1a2e4a] py-16 md:py-24">
        <div className="section-container text-center">
          <span className="inline-block bg-[#e85d26]/20 text-[#e85d26] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Tell us what you need and we'll respond within 24 hours with a tailored sourcing plan and cost estimate.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-white py-16 md:py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-[#1a2e4a] mb-6">Contact Information</h2>
              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#e85d26]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#e85d26]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a2e4a] text-sm mb-1">Office Location</p>
                    <p className="text-[#6b7280] text-sm">Guangzhou, Guangdong Province, China</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#e85d26]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#e85d26]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a2e4a] text-sm mb-1">Email</p>
                    <a href="mailto:info@ssourcing.cn" className="text-[#e85d26] text-sm hover:underline">
                      info@ssourcing.cn
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#e85d26]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#e85d26]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a2e4a] text-sm mb-1">Phone / WhatsApp</p>
                    <a href="tel:+8620123456789" className="text-[#e85d26] text-sm hover:underline">
                      +86 20 1234 5678
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#e85d26]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#e85d26]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a2e4a] text-sm mb-1">Response Time</p>
                    <p className="text-[#6b7280] text-sm">Within 24 hours (Mon–Fri)</p>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-[#f3f4f6] rounded-xl p-6">
                <h3 className="font-bold text-[#1a2e4a] mb-4">What Happens Next?</h3>
                <ul className="space-y-3">
                  {[
                    'We review your inquiry within 24 hours',
                    'A sourcing specialist contacts you to discuss your needs',
                    'We provide a tailored sourcing plan and cost estimate',
                    'You decide whether to proceed — no obligation',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#1f2937]">
                      <span className="w-5 h-5 bg-[#e85d26] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#1a2e4a] mb-3">Inquiry Received!</h2>
                  <p className="text-[#6b7280] max-w-md">
                    Thank you for reaching out. A member of our sourcing team will review your inquiry and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-bold text-[#1a2e4a] mb-6">Sourcing Inquiry Form</h2>

                  {/* Contact Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#1a2e4a] mb-1.5">
                        Full Name <span className="text-[#e85d26]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[#1f2937] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e85d26] focus:border-transparent text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1a2e4a] mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your Company Ltd."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[#1f2937] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e85d26] focus:border-transparent text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1a2e4a] mb-1.5">
                        Email Address <span className="text-[#e85d26]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[#1f2937] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e85d26] focus:border-transparent text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1a2e4a] mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 555 000 0000"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[#1f2937] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e85d26] focus:border-transparent text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1a2e4a] mb-1.5">
                        Country <span className="text-[#e85d26]">*</span>
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        required
                        placeholder="United States"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[#1f2937] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e85d26] focus:border-transparent text-sm"
                      />
                    </div>
                  </div>

                  {/* Sourcing Details */}
                  <div className="border-t border-gray-100 pt-6">
                    <h3 className="font-semibold text-[#1a2e4a] mb-4">Sourcing Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-[#1a2e4a] mb-1.5">
                          Product Category <span className="text-[#e85d26]">*</span>
                        </label>
                        <select
                          name="productCategory"
                          value={form.productCategory}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#e85d26] focus:border-transparent text-sm bg-white"
                        >
                          <option value="">Select a category</option>
                          {productCategories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#1a2e4a] mb-1.5">
                          Service Needed <span className="text-[#e85d26]">*</span>
                        </label>
                        <select
                          name="serviceNeeded"
                          value={form.serviceNeeded}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#e85d26] focus:border-transparent text-sm bg-white"
                        >
                          <option value="">Select a service</option>
                          {services.map((svc) => (
                            <option key={svc} value={svc}>{svc}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#1a2e4a] mb-1.5">
                          Estimated Order Quantity
                        </label>
                        <input
                          type="text"
                          name="orderQuantity"
                          value={form.orderQuantity}
                          onChange={handleChange}
                          placeholder="e.g. 500 units"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[#1f2937] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e85d26] focus:border-transparent text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#1a2e4a] mb-1.5">
                          Target Unit Price (USD)
                        </label>
                        <input
                          type="text"
                          name="targetPrice"
                          value={form.targetPrice}
                          onChange={handleChange}
                          placeholder="e.g. $15–$20"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[#1f2937] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e85d26] focus:border-transparent text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1a2e4a] mb-1.5">
                      Product Description & Requirements <span className="text-[#e85d26]">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Please describe your product, specifications, quality requirements, timeline, and any other relevant details..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[#1f2937] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e85d26] focus:border-transparent text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#e85d26] hover:bg-[#c94d1e] disabled:bg-gray-300 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Sourcing Inquiry
                      </>
                    )}
                  </button>
                  <p className="text-xs text-[#6b7280]">
                    We respect your privacy. Your information will not be shared with third parties.
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
