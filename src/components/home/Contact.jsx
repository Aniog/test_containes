import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <span className="text-gold text-xs font-semibold tracking-wider uppercase">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-6">
              Ready to Upgrade Your Workshop?
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-10">
              Whether you need a single machine or a complete production line,
              our team is ready to help you find the perfect solution. Get a
              customized quote today.
            </p>

            <div className="space-y-6">
              {[
                {
                  label: 'Email',
                  value: 'info@artitectmachinery.com',
                },
                {
                  label: 'Phone',
                  value: '+1 (800) 555-0199',
                },
                {
                  label: 'Address',
                  value: 'Industrial Zone, Manufacturing District',
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm">{item.label}</div>
                    <div className="text-white font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-navy mb-2">
                  Thank You!
                </h3>
                <p className="text-slate-500">
                  We've received your inquiry and will get back to you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-navy mb-1.5"
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
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-navy text-sm focus:outline-none focus:ring-2 focus:ring-steel focus:border-transparent"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-navy mb-1.5"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-navy text-sm focus:outline-none focus:ring-2 focus:ring-steel focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-navy mb-1.5"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-navy text-sm focus:outline-none focus:ring-2 focus:ring-steel focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-navy mb-1.5"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-navy text-sm focus:outline-none focus:ring-2 focus:ring-steel focus:border-transparent"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="product"
                    className="block text-sm font-medium text-navy mb-1.5"
                  >
                    Product of Interest
                  </label>
                  <select
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-navy text-sm focus:outline-none focus:ring-2 focus:ring-steel focus:border-transparent bg-white"
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
                    className="block text-sm font-medium text-navy mb-1.5"
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
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-navy text-sm focus:outline-none focus:ring-2 focus:ring-steel focus:border-transparent resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-steel hover:bg-steel-dark text-white px-8 py-3.5 rounded-full font-semibold transition-colors duration-200"
                >
                  Send Inquiry
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
