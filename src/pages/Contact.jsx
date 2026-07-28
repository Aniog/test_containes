import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, ChevronRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    quantity: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div>
      <section className="bg-navy py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Tell us about your sourcing needs and get a free quote within 24 hours. No commitment required.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-charcoal mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal text-sm">Email</h4>
                    <p className="text-body text-sm">info@ssourcingchina.com</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal text-sm">Phone</h4>
                    <p className="text-body text-sm">+86 755 8888 0000</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal text-sm">Office</h4>
                    <p className="text-body text-sm">Shenzhen, Guangdong, China</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal text-sm">Business Hours</h4>
                    <p className="text-body text-sm">Mon–Fri, 9:00–18:00 (CST, UTC+8)</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-surface rounded-xl">
                <h4 className="font-semibold text-charcoal mb-2">What happens next?</h4>
                <ol className="space-y-2 text-sm text-body">
                  <li className="flex gap-2">
                    <span className="font-semibold text-navy">1.</span>
                    We review your requirements within 24 hours
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-navy">2.</span>
                    A dedicated project manager is assigned
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-navy">3.</span>
                    We provide a free sourcing proposal and quote
                  </li>
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-2">Thank You!</h3>
                  <p className="text-body mb-4">
                    We've received your inquiry and will respond within 24 hours with a free sourcing quote.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', company: '', country: '', product: '', quantity: '', message: '' });
                    }}
                    className="text-navy font-semibold hover:text-navy-light transition-colors"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-bold text-charcoal mb-2">Get a Free Sourcing Quote</h2>
                  <p className="text-body mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-charcoal mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-charcoal mb-1.5">
                        Country <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                        placeholder="Your country"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-charcoal mb-1.5">
                        Product Description <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="product"
                        name="product"
                        required
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                        placeholder="What product are you looking to source?"
                      />
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-charcoal mb-1.5">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                        placeholder="e.g., 1,000 units"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors resize-vertical"
                      placeholder="Tell us more about your requirements — target price, quality standards, timeline, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                  >
                    Submit Inquiry
                    <ChevronRight className="w-5 h-5" />
                  </button>
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
