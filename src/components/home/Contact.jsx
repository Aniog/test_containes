import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

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
    setStatus('submitted');
  };

  return (
    <section id="contact" className="py-20 md:py-28 lg:py-32 bg-navy-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-5">
            Get in Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to find the perfect folding solution? Our team of experts is
            here to help you select the right machine for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          <div className="lg:col-span-3">
            <div className="bg-card-dark border border-navy-light rounded-xl p-6 md:p-10">
              {status === 'submitted' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center mx-auto mb-5">
                    <Send className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Thank You!
                  </h3>
                  <p className="text-gray-400">
                    Your inquiry has been received. Our team will contact you
                    within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        phone: '',
                        product: '',
                        message: '',
                      });
                    }}
                    className="mt-6 text-gold hover:text-gold-light text-sm font-medium transition-colors duration-300"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full bg-navy-dark border border-navy-light rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition-colors duration-300 text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full bg-navy-dark border border-navy-light rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition-colors duration-300 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="w-full bg-navy-dark border border-navy-light rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition-colors duration-300 text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-navy-dark border border-navy-light rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition-colors duration-300 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="product"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Product of Interest
                    </label>
                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full bg-navy-dark border border-navy-light rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition-colors duration-300 text-sm"
                    >
                      <option value="">Select a product</option>
                      <option value="double-folding-machine">
                        Double Folding Machine
                      </option>
                      <option value="double-folder">Double Folder</option>
                      <option value="sheet-metal-folder">
                        Sheet Metal Folder
                      </option>
                      <option value="sheet-metal-folding-machine">
                        Sheet Metal Folding Machine
                      </option>
                      <option value="metal-folder">Metal Folder</option>
                      <option value="metal-folder-machine">
                        Metal Folder Machine
                      </option>
                      <option value="metal-folding-machine">
                        Metal Folding Machine
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      className="w-full bg-navy-dark border border-navy-light rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition-colors duration-300 text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold-light text-navy-dark font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 flex items-center justify-center gap-2"
                  >
                    Send Inquiry
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card-dark border border-navy-light rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 border border-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Headquarters
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    888 Industrial Park, Innovation District
                    <br />
                    Shanghai, China 200000
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card-dark border border-navy-light rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 border border-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <p className="text-gray-400 text-sm">
                    +86 21 8888 6666
                    <br />
                    +1 (800) 555-0199 (US)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card-dark border border-navy-light rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 border border-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <p className="text-gray-400 text-sm">
                    sales@artitect.com
                    <br />
                    support@artitect.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/20 rounded-xl p-6">
              <h4 className="text-white font-semibold mb-2">
                Need Immediate Assistance?
              </h4>
              <p className="text-gray-400 text-sm mb-4">
                Our technical team is available 24/7 for urgent inquiries and
                support requests.
              </p>
              <a
                href="tel:+862188886666"
                className="inline-flex items-center gap-2 text-gold text-sm font-semibold hover:text-gold-light transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
