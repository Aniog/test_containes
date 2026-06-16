import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
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
    <section id="contact" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-widest uppercase">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-dark mt-3 mb-4">
            Request a Quote
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Tell us about your requirements and our team will get back to you
            within 24 hours with a tailored solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white rounded-lg p-12 text-center border border-gray-100 shadow-sm">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-2xl font-bold text-navy-dark mb-3">
                  Thank You!
                </h3>
                <p className="text-gray-600">
                  Your inquiry has been received. Our team will contact you
                  shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: '',
                      email: '',
                      company: '',
                      phone: '',
                      product: '',
                      message: '',
                    });
                  }}
                  className="mt-6 text-gold-dark font-semibold hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg p-8 md:p-10 border border-gray-100 shadow-sm"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-navy-dark mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-navy-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-navy-dark mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-navy-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold text-navy-dark mb-2"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-navy-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-navy-dark mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-navy-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="product"
                    className="block text-sm font-semibold text-navy-dark mb-2"
                  >
                    Product of Interest
                  </label>
                  <select
                    id="product"
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-navy-dark focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-200 bg-white"
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

                <div className="mt-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-navy-dark mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-navy-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-8 w-full bg-gold hover:bg-gold-light text-navy-dark font-semibold px-8 py-4 rounded-full transition-all duration-300 text-base"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div className="bg-navy-dark rounded-lg p-8">
              <h3 className="text-xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Headquarters</div>
                    <div className="text-gray-400 text-sm mt-1">
                      888 Industrial Park, Innovation District
                      <br />
                      Shanghai, China 200000
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Phone</div>
                    <div className="text-gray-400 text-sm mt-1">
                      +86 21 8888 6666
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <div className="text-gray-400 text-sm mt-1">
                      sales@artitect-machinery.com
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gold/10 border border-gold/30 rounded-lg p-8">
              <h3 className="text-lg font-bold text-navy-dark mb-3">
                Need Urgent Help?
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Our technical support team is available around the clock for
                emergency assistance.
              </p>
              <a
                href="tel:+862188886666"
                className="inline-flex items-center gap-2 text-gold-dark font-semibold text-sm hover:underline"
              >
                <Phone className="w-4 h-4" />
                +86 21 8888 6666
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
