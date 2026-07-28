import { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle } from 'lucide-react';
import { SectionHeader } from '@/components/shared';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Office Location',
    value: 'Guangzhou, Guangdong, China',
    sub: 'Serving clients globally',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@ssourcingchina.com',
    sub: 'We respond within 24 hours',
  },
  {
    icon: Phone,
    label: 'Phone / WeChat',
    value: '+86 20 0000 0000',
    sub: 'Mon–Fri, 9am–6pm CST',
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 Hours',
    sub: 'For all sourcing inquiries',
  },
];

const serviceOptions = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Private Label / OEM',
  'Other',
];

const Contact = () => {
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', country: '',
    service: '', product: '', quantity: '', budget: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

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
      {/* Hero */}
      <section className="bg-blue-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-accent text-sm font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact SSourcing China</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Tell us about your sourcing needs. We'll review your requirements and respond with a tailored proposal within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-5">
              <div>
                <h2 className="text-xl font-bold text-blue-navy mb-2">Get in Touch</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Whether you have a specific product in mind or just want to explore your options, we're here to help. Fill out the form and our team will be in touch.
                </p>
              </div>

              {contactInfo.map(({ icon: Icon, label, value, sub }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-navy rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{label}</p>
                    <p className="text-blue-navy font-semibold text-sm">{value}</p>
                    <p className="text-gray-500 text-xs">{sub}</p>
                  </div>
                </div>
              ))}

              <div className="bg-blue-navy rounded-xl p-5 mt-6">
                <p className="text-white font-semibold mb-2 text-sm">Why Work With Us?</p>
                <ul className="space-y-1.5 text-gray-300 text-xs">
                  {[
                    'China-based team with local expertise',
                    'Transparent pricing, no hidden fees',
                    'Dedicated account manager',
                    'Regular updates throughout the process',
                    'Experience across 40+ countries',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-gold-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 text-center">
                  <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-blue-navy mb-2">Inquiry Received!</h3>
                  <p className="text-gray-600 text-sm max-w-md mx-auto">
                    Thank you for contacting SSourcing China. Our team will review your requirements and respond within 24 hours with a tailored proposal.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
                  <h2 className="text-lg font-bold text-blue-navy mb-5">Sourcing Inquiry Form</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input type="text" name="name" required value={form.name} onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-navy" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                      <input type="text" name="company" value={form.company} onChange={handleChange}
                        placeholder="Your Company Ltd."
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-navy" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input type="email" name="email" required value={form.email} onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-navy" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone / WhatsApp</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                        placeholder="+1 555 000 0000"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-navy" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                      <input type="text" name="country" value={form.country} onChange={handleChange}
                        placeholder="United States"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-navy" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
                      <select name="service" value={form.service} onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-navy bg-white">
                        <option value="">Select a service...</option>
                        {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Product / Category *</label>
                      <input type="text" name="product" required value={form.product} onChange={handleChange}
                        placeholder="e.g. Office Chairs, LED Lights"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-navy" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Quantity</label>
                      <input type="text" name="quantity" value={form.quantity} onChange={handleChange}
                        placeholder="e.g. 500 units"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-navy" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Target Budget (USD)</label>
                      <input type="text" name="budget" value={form.budget} onChange={handleChange}
                        placeholder="e.g. $5,000 – $10,000 per order"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-navy" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
                      <textarea name="message" rows={4} value={form.message} onChange={handleChange}
                        placeholder="Describe your product requirements, certifications needed, timeline, or any other relevant details..."
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-navy resize-none" />
                    </div>
                  </div>
                  <div className="mt-6">
                    <button type="submit"
                      className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-red-china hover:bg-[#a93226] text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                      <Send className="w-4 h-4" />
                      Submit Sourcing Inquiry
                    </button>
                    <p className="text-xs text-gray-500 mt-3">
                      We respond within 24 hours. Your information is kept strictly confidential.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
