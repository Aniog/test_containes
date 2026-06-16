import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', company: '', phone: '', product: '', message: '' });
    }, 1000);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-navy-900 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Ready to discuss your sheet metal folding needs? Our team of experts is here to help you find the right solution.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-navy-900 mb-1">Phone</h3>
                    <p className="text-slate-600 text-sm">+1 (555) 123-4567</p>
                    <p className="text-slate-600 text-sm">+1 (555) 123-4568</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-navy-900 mb-1">Email</h3>
                    <p className="text-slate-600 text-sm">info@artitectmachinery.com</p>
                    <p className="text-slate-600 text-sm">sales@artitectmachinery.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-navy-900 mb-1">Address</h3>
                    <p className="text-slate-600 text-sm">
                      1250 Industrial Parkway<br />
                      Suite 400<br />
                      Milwaukee, WI 53202
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-accent-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-navy-900 mb-1">Business Hours</h3>
                    <p className="text-slate-600 text-sm">Mon – Fri: 8:00 AM – 6:00 PM</p>
                    <p className="text-slate-600 text-sm">Sat: 9:00 AM – 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-slate-200 p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-navy-900 mb-2">Request a Quote</h2>
                <p className="text-slate-600 text-sm mb-6">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-7 h-7 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-600">Thank you for your inquiry. Our team will contact you shortly.</p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 text-accent-600 hover:text-accent-500 font-semibold text-sm"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-navy-900 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-colors"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-navy-900 mb-1.5">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-colors"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-navy-900 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-colors"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-navy-900 mb-1.5">
                        Product of Interest
                      </label>
                      <select
                        id="product"
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-colors bg-white"
                      >
                        <option value="">Select a product...</option>
                        <option value="double-folding-machine">Double Folding Machine</option>
                        <option value="double-folder">Double Folder</option>
                        <option value="sheet-metal-folder">Sheet Metal Folder</option>
                        <option value="sheet-metal-folding-machine">Sheet Metal Folding Machine</option>
                        <option value="metal-folder">Metal Folder</option>
                        <option value="metal-folding-machine">Metal Folding Machine</option>
                        <option value="custom">Custom Solution</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-1.5">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-colors resize-none"
                        placeholder="Tell us about your requirements, material types, production volume, etc."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full sm:w-auto bg-accent-500 hover:bg-accent-600 disabled:opacity-60 text-navy-900 font-semibold rounded-lg px-8 py-3 transition-colors flex items-center justify-center gap-2"
                    >
                      {status === 'sending' ? 'Sending...' : 'Send Message'}
                      {status !== 'sending' && <Send className="w-4 h-4" />}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
