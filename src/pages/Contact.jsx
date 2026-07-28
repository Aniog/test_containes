import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const containerRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-400 font-semibold text-sm uppercase tracking-wider">Contact Us</p>
          <h1 id="contact-page-title" className="mt-3 text-4xl sm:text-5xl font-extrabold text-white">
            Get a Free Sourcing Quote
          </h1>
          <p id="contact-page-subtitle" className="mt-4 text-lg text-steel-400 max-w-2xl mx-auto leading-relaxed">
            Tell us about your sourcing needs and we will respond within 24 hours with a free quote and supplier recommendations.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-12 text-center">
                  <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-extrabold text-emerald-800">Thank You for Your Inquiry!</h2>
                  <p className="mt-3 text-emerald-700 max-w-md mx-auto leading-relaxed">
                    We have received your sourcing request. Our team will review your requirements and get back to you within 24 hours with a free quote and initial supplier recommendations.
                  </p>
                  <p className="mt-2 text-sm text-emerald-600">
                    If you need immediate assistance, call us at +86 20 8888 6666.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="rounded-2xl border border-steel-200 p-8 sm:p-10">
                  <h2 className="text-2xl font-extrabold text-steel-900 mb-2">Tell Us About Your Project</h2>
                  <p className="text-sm text-steel-500 mb-8">Fill out the form below and we will get back to you within 24 hours.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-steel-700 mb-1.5">Full Name *</label>
                      <input
                        id="name"
                        type="text"
                        required
                        className="w-full rounded-lg border border-steel-300 px-4 py-3 text-sm text-steel-900 placeholder:text-steel-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-steel-700 mb-1.5">Company Name *</label>
                      <input
                        id="company"
                        type="text"
                        required
                        className="w-full rounded-lg border border-steel-300 px-4 py-3 text-sm text-steel-900 placeholder:text-steel-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-steel-700 mb-1.5">Email Address *</label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="w-full rounded-lg border border-steel-300 px-4 py-3 text-sm text-steel-900 placeholder:text-steel-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-steel-700 mb-1.5">Phone Number</label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full rounded-lg border border-steel-300 px-4 py-3 text-sm text-steel-900 placeholder:text-steel-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-steel-700 mb-1.5">Your Country *</label>
                      <input
                        id="country"
                        type="text"
                        required
                        className="w-full rounded-lg border border-steel-300 px-4 py-3 text-sm text-steel-900 placeholder:text-steel-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition"
                        placeholder="United States"
                      />
                    </div>
                    <div>
                      <label htmlFor="product-category" className="block text-sm font-medium text-steel-700 mb-1.5">Product Category *</label>
                      <select
                        id="product-category"
                        required
                        className="w-full rounded-lg border border-steel-300 px-4 py-3 text-sm text-steel-900 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition bg-white"
                      >
                        <option value="">Select a category</option>
                        <option value="electronics">Electronics & Components</option>
                        <option value="consumer-electronics">Consumer Electronics</option>
                        <option value="machinery">Industrial Machinery & Parts</option>
                        <option value="textiles">Textiles, Apparel & Accessories</option>
                        <option value="home">Home, Kitchen & Furniture</option>
                        <option value="hardware">Hardware, Tools & Building Materials</option>
                        <option value="sports">Sports, Fitness & Outdoor</option>
                        <option value="baby">Baby, Kids & Toys</option>
                        <option value="medical">Medical Devices & Supplies</option>
                        <option value="auto">Automotive Parts & Accessories</option>
                        <option value="packaging">Packaging & Printing</option>
                        <option value="lighting">Lighting & Electrical</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="product-desc" className="block text-sm font-medium text-steel-700 mb-1.5">Product Description *</label>
                    <textarea
                      id="product-desc"
                      rows={4}
                      required
                      className="w-full rounded-lg border border-steel-300 px-4 py-3 text-sm text-steel-900 placeholder:text-steel-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition resize-y"
                      placeholder="Please describe your product in as much detail as possible: materials, dimensions, functions, target price, order quantity, certifications required, etc."
                    />
                  </div>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-steel-700 mb-1.5">Estimated Order Quantity</label>
                      <input
                        id="quantity"
                        type="text"
                        className="w-full rounded-lg border border-steel-300 px-4 py-3 text-sm text-steel-900 placeholder:text-steel-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition"
                        placeholder="e.g., 1,000 units"
                      />
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-steel-700 mb-1.5">Target Unit Price (USD)</label>
                      <input
                        id="budget"
                        type="text"
                        className="w-full rounded-lg border border-steel-300 px-4 py-3 text-sm text-steel-900 placeholder:text-steel-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition"
                        placeholder="e.g., $5.00 - $8.00"
                      />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="additional" className="block text-sm font-medium text-steel-700 mb-1.5">Additional Information</label>
                    <textarea
                      id="additional"
                      rows={3}
                      className="w-full rounded-lg border border-steel-300 px-4 py-3 text-sm text-steel-900 placeholder:text-steel-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition resize-y"
                      placeholder="Anything else we should know? Timeline, special requirements, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-8 inline-flex items-center justify-center w-full sm:w-auto rounded-lg bg-brand-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-brand-700 transition-colors"
                  >
                    Submit Inquiry
                    <Send className="ml-2 h-5 w-5" />
                  </button>

                  <p className="mt-4 text-xs text-steel-400">
                    By submitting this form, you agree to our privacy policy. We will never share your information.
                  </p>
                </form>
              )}
            </div>

            <div>
              <div className="rounded-2xl bg-steel-50 p-8 sticky top-24">
                <h3 className="text-lg font-semibold text-steel-900 mb-6">Contact Information</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-brand-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-steel-900">Office Address</p>
                      <p className="text-sm text-steel-500">Room 1208, CITIC Plaza, 233 Tianhe North Road, Guangzhou, Guangdong, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-brand-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-steel-900">Email</p>
                      <p className="text-sm text-steel-500">info@ssourcingchina.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-brand-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-steel-900">Phone</p>
                      <p className="text-sm text-steel-500">+86 20 8888 6666</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-brand-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-steel-900">Business Hours</p>
                      <p className="text-sm text-steel-500">Monday – Friday: 9:00 AM – 6:00 PM (CST)<br />Saturday: 10:00 AM – 2:00 PM (CST)</p>
                    </div>
                  </div>
                </div>

                <hr className="my-6 border-steel-200" />

                <h3 className="text-lg font-semibold text-steel-900 mb-4">Why Contact Us?</h3>
                <ul className="space-y-3">
                  {[
                    'Free consultation with no obligation',
                    'Response within 24 hours',
                    '100% confidential—your project details are safe',
                    'On-the-ground team in China\'s manufacturing hubs',
                    'English, Chinese, and bilingual support',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-steel-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
