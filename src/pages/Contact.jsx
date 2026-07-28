import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="bg-navy-950 text-white">
        <div className="section-container py-20 lg:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Get a Free Sourcing Quote
            </h1>
            <p className="mt-4 text-lg text-slate-300 max-w-xl leading-relaxed">
              Tell us about your product and requirements. Our team will respond with a customized sourcing plan within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 rounded-2xl p-10 border border-green-200 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-navy-950 mb-2">Thank You for Your Inquiry</h2>
                  <p className="text-slate-600 max-w-md mx-auto leading-relaxed">
                    We've received your sourcing request. Our team will review your requirements and get back to you within 24 hours with a customized sourcing plan.
                  </p>
                  <p className="text-sm text-slate-500 mt-4">
                    For urgent inquiries, call us at <a href="tel:+861234567890" className="text-brand-600 font-medium">+86 123 4567 890</a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-shadow"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-shadow"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-shadow"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-shadow"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Product Description *</label>
                      <input
                        type="text"
                        name="product"
                        required
                        value={form.product}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-shadow"
                        placeholder="What product are you looking to source?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Estimated Order Quantity</label>
                      <select
                        name="quantity"
                        value={form.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-shadow bg-white"
                      >
                        <option value="">Select quantity range</option>
                        <option value="0-500">0 - 500 units</option>
                        <option value="500-2000">500 - 2,000 units</option>
                        <option value="2000-10000">2,000 - 10,000 units</option>
                        <option value="10000+">10,000+ units</option>
                        <option value="not-sure">Not sure yet</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-5">
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Additional Details</label>
                    <textarea
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-shadow resize-y"
                      placeholder="Tell us more about your requirements: target price, materials, certifications needed, timeline, etc."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full mt-6 gap-2 text-base">
                    <Send className="w-4 h-4" />
                    Send Inquiry
                  </button>
                  <p className="text-xs text-slate-400 mt-4 text-center">
                    We'll respond within 24 hours. Your information is kept confidential and never shared.
                  </p>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-navy-900 mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-slate-800">Office Address</p>
                      <p className="text-sm text-slate-500">Shenzhen, Guangdong, China</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-slate-800">Phone</p>
                      <a href="tel:+861234567890" className="text-sm text-brand-600 hover:text-brand-700">+86 123 4567 890</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-slate-800">Email</p>
                      <a href="mailto:info@ssourcingchina.com" className="text-sm text-brand-600 hover:text-brand-700">info@ssourcingchina.com</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-slate-800">Business Hours</p>
                      <p className="text-sm text-slate-500">Mon - Fri: 9:00 AM - 6:00 PM (CST)</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-brand-50 rounded-xl p-6 border border-brand-100">
                <h3 className="text-lg font-semibold text-navy-900 mb-3">What Happens Next?</h3>
                <ol className="space-y-3">
                  {[
                    'We review your inquiry within 24 hours.',
                    'We schedule a call to discuss your requirements in detail.',
                    'We prepare a customized sourcing plan and quote.',
                    'Upon approval, we begin supplier identification within 48 hours.',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-brand-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-sm text-slate-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
