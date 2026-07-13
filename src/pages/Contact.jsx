import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { SectionHeader, Badge } from '@/components/ui/index.jsx';

const productCategories = [
  'Electronics & Tech',
  'Furniture & Home',
  'Apparel & Textiles',
  'Machinery & Industrial',
  'Health & Beauty',
  'Toys & Baby Products',
  'Automotive Parts',
  'Sports & Outdoor',
  'Other',
];

const orderVolumes = [
  'Under $5,000',
  '$5,000 – $20,000',
  '$20,000 – $100,000',
  'Over $100,000',
  'Not sure yet',
];

const services = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Full Sourcing Package',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    product: '',
    category: '',
    volume: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    setSubmitted(true);
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-[#1a4f8a] py-16 md:py-20">
        <div className="section-container">
          <Badge variant="gold" className="mb-4">Get in Touch</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Tell us about your product and sourcing requirements. We'll respond within 24 hours with a tailored plan and cost estimate.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brand-bg">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-brand-dark mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#1a4f8a]" />
                    </div>
                    <div>
                      <div className="font-semibold text-brand-dark text-sm">Office Address</div>
                      <div className="text-brand-body text-sm mt-0.5">Tianhe District, Guangzhou<br />Guangdong Province, China</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#1a4f8a]" />
                    </div>
                    <div>
                      <div className="font-semibold text-brand-dark text-sm">Email</div>
                      <a href="mailto:info@ssourcingchina.com" className="text-[#1a4f8a] text-sm hover:underline mt-0.5 block">
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#1a4f8a]" />
                    </div>
                    <div>
                      <div className="font-semibold text-brand-dark text-sm">Phone / WhatsApp</div>
                      <a href="tel:+8620123456789" className="text-[#1a4f8a] text-sm hover:underline mt-0.5 block">
                        +86 20 1234 5678
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#1a4f8a]" />
                    </div>
                    <div>
                      <div className="font-semibold text-brand-dark text-sm">Business Hours (CST)</div>
                      <div className="text-brand-body text-sm mt-0.5">Monday – Friday<br />9:00 AM – 6:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-brand-border p-5">
                <h3 className="font-bold text-brand-dark mb-3">What happens next?</h3>
                <ol className="space-y-3">
                  {[
                    'We review your inquiry within 24 hours',
                    'We send you a tailored sourcing plan',
                    'We schedule a call to discuss your requirements',
                    'We begin supplier research at no upfront cost',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-brand-body">
                      <span className="w-5 h-5 bg-[#1a4f8a] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-brand-dark rounded-xl p-5 text-white">
                <div className="text-[#d4a017] font-bold text-lg mb-1">Free Initial Consultation</div>
                <p className="text-gray-300 text-sm">No commitment required. We'll assess your requirements and let you know if we can help before any fees are discussed.</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-2xl border border-brand-border p-10 text-center">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-brand-dark mb-3">Inquiry Received</h2>
                  <p className="text-brand-body mb-6 max-w-md mx-auto">
                    Thank you for your inquiry. Our team will review your requirements and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[#1a4f8a] font-semibold text-sm hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-brand-border p-8 md:p-10">
                  <h2 className="text-xl font-bold text-brand-dark mb-6">Sourcing Inquiry Form</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 border border-brand-border rounded-lg text-brand-dark placeholder-brand-muted focus:outline-none focus:border-[#1a4f8a] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-1.5">Company Name *</label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your Company Ltd"
                        className="w-full px-4 py-3 border border-brand-border rounded-lg text-brand-dark placeholder-brand-muted focus:outline-none focus:border-[#1a4f8a] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-1.5">Business Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 border border-brand-border rounded-lg text-brand-dark placeholder-brand-muted focus:outline-none focus:border-[#1a4f8a] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-1.5">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 555 000 0000"
                        className="w-full px-4 py-3 border border-brand-border rounded-lg text-brand-dark placeholder-brand-muted focus:outline-none focus:border-[#1a4f8a] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-1.5">Country *</label>
                      <input
                        type="text"
                        name="country"
                        required
                        value={form.country}
                        onChange={handleChange}
                        placeholder="United States"
                        className="w-full px-4 py-3 border border-brand-border rounded-lg text-brand-dark placeholder-brand-muted focus:outline-none focus:border-[#1a4f8a] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-1.5">Product Category *</label>
                      <select
                        name="category"
                        required
                        value={form.category}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-brand-border rounded-lg text-brand-dark focus:outline-none focus:border-[#1a4f8a] text-sm bg-white"
                      >
                        <option value="">Select a category</option>
                        {productCategories.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-1.5">Estimated Order Value</label>
                      <select
                        name="volume"
                        value={form.volume}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-brand-border rounded-lg text-brand-dark focus:outline-none focus:border-[#1a4f8a] text-sm bg-white"
                      >
                        <option value="">Select a range</option>
                        {orderVolumes.map((v) => (
                          <option key={v} value={v}>{v}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-1.5">Service Required</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-brand-border rounded-lg text-brand-dark focus:outline-none focus:border-[#1a4f8a] text-sm bg-white"
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="block text-sm font-semibold text-brand-dark mb-1.5">Product Description *</label>
                    <input
                      type="text"
                      name="product"
                      required
                      value={form.product}
                      onChange={handleChange}
                      placeholder="e.g. Solid oak dining table, 180cm x 90cm, natural finish"
                      className="w-full px-4 py-3 border border-brand-border rounded-lg text-brand-dark placeholder-brand-muted focus:outline-none focus:border-[#1a4f8a] text-sm"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-brand-dark mb-1.5">Additional Details</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Include any specifications, target price, quantity, compliance requirements, or other relevant details..."
                      className="w-full px-4 py-3 border border-brand-border rounded-lg text-brand-dark placeholder-brand-muted focus:outline-none focus:border-[#1a4f8a] text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#c0392b] text-white px-8 py-4 rounded-lg font-bold text-base hover:bg-[#a93226] transition-colors"
                  >
                    <Send className="w-5 h-5" />
                    Submit Sourcing Inquiry
                  </button>
                  <p className="text-brand-muted text-xs text-center mt-3">
                    We respond within 24 hours. Your information is kept confidential.
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
