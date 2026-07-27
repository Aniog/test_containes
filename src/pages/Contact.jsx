import { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle } from 'lucide-react';

const productCategories = [
  'Electronics & Components',
  'Furniture & Home Goods',
  'Apparel & Textiles',
  'Industrial Machinery',
  'Packaging & Printing',
  'Health & Beauty',
  'Toys & Games',
  'Automotive Parts',
  'Sports & Outdoor',
  'Other',
];

const budgetRanges = [
  'Under $5,000',
  '$5,000 – $20,000',
  '$20,000 – $100,000',
  'Over $100,000',
  'Not sure yet',
];

const serviceTypes = [
  'Full Sourcing Service',
  'Supplier Identification Only',
  'Factory Audit / Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'General Inquiry',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    phone: '',
    service: '',
    category: '',
    budget: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    setSubmitted(true);
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-brand-dark py-16 md:py-20">
        <div className="container-xl">
          <div className="max-w-2xl">
            <span className="text-blue-300 text-sm font-semibold uppercase tracking-wider">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              Contact SSourcing China
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Tell us about your sourcing requirements. We'll review your brief and
              respond within 24 hours with a proposed approach.
            </p>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section id="quote" className="section-padding bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: contact info */}
            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-6">Contact Information</h2>

              <div className="flex flex-col gap-5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-brand-blue" />
                  </div>
                  <div>
                    <div className="font-medium text-brand-dark text-sm mb-0.5">Office Location</div>
                    <div className="text-brand-mid text-sm">
                      Guangzhou, Guangdong Province, China<br />
                      (Operations across major manufacturing hubs)
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-brand-blue" />
                  </div>
                  <div>
                    <div className="font-medium text-brand-dark text-sm mb-0.5">Email</div>
                    <a href="mailto:info@ssourcingchina.com" className="text-brand-blue text-sm hover:underline">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-brand-blue" />
                  </div>
                  <div>
                    <div className="font-medium text-brand-dark text-sm mb-0.5">Phone / WhatsApp</div>
                    <div className="text-brand-mid text-sm">+86 (0) 20 0000 0000</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-brand-blue" />
                  </div>
                  <div>
                    <div className="font-medium text-brand-dark text-sm mb-0.5">Response Time</div>
                    <div className="text-brand-mid text-sm">
                      We respond to all inquiries within 24 hours<br />
                      (China Standard Time, Mon–Fri)
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-light rounded-xl p-5">
                <h3 className="font-semibold text-brand-dark text-sm mb-2">What happens next?</h3>
                <ol className="flex flex-col gap-2">
                  {[
                    'We review your inquiry within 24 hours',
                    'We schedule a call or send a written response',
                    'We provide a fee estimate and proposed approach',
                    'You decide whether to proceed — no obligation',
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-2.5 text-sm text-brand-mid">
                      <span className="w-5 h-5 bg-brand-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-brand-border p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-brand-green" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark mb-2">Inquiry Received</h3>
                    <p className="text-brand-mid max-w-sm mx-auto">
                      Thank you for reaching out. We'll review your requirements and get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <h2 className="text-xl font-bold text-brand-dark">Send Us Your Requirements</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                          placeholder="Your name"
                          className="w-full border border-brand-border rounded-lg px-3.5 py-2.5 text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
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
                          placeholder="you@company.com"
                          className="w-full border border-brand-border rounded-lg px-3.5 py-2.5 text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-brand-dark mb-1.5">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Company name"
                          className="w-full border border-brand-border rounded-lg px-3.5 py-2.5 text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-dark mb-1.5">Country</label>
                        <input
                          type="text"
                          name="country"
                          value={form.country}
                          onChange={handleChange}
                          placeholder="Your country"
                          className="w-full border border-brand-border rounded-lg px-3.5 py-2.5 text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">
                        Service Required <span className="text-brand-red">*</span>
                      </label>
                      <select
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        className="w-full border border-brand-border rounded-lg px-3.5 py-2.5 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white"
                      >
                        <option value="">Select service type</option>
                        {serviceTypes.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-brand-dark mb-1.5">Product Category</label>
                        <select
                          name="category"
                          value={form.category}
                          onChange={handleChange}
                          className="w-full border border-brand-border rounded-lg px-3.5 py-2.5 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white"
                        >
                          <option value="">Select category</option>
                          {productCategories.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-dark mb-1.5">Estimated Budget</label>
                        <select
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          className="w-full border border-brand-border rounded-lg px-3.5 py-2.5 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white"
                        >
                          <option value="">Select range</option>
                          {budgetRanges.map((b) => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">
                        Describe Your Requirements <span className="text-brand-red">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about the product you want to source, quantity, quality requirements, certifications needed, and any other relevant details..."
                        className="w-full border border-brand-border rounded-lg px-3.5 py-2.5 text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full flex items-center justify-center gap-2 py-3"
                    >
                      <Send className="w-4 h-4" />
                      Submit Sourcing Inquiry
                    </button>

                    <p className="text-xs text-gray-400 text-center">
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
  );
}
