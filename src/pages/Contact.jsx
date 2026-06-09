import React, { useState } from 'react';
import { ArrowRight, MapPin, Mail, Phone } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productCategory: '',
    annualVolume: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Thank you. We will contact you within 24 hours.');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        productCategory: '',
        annualVolume: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">Contact Us</h1>
          <p className="text-xl text-slate-300">
            Request a free sourcing consultation. We respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-6 text-sm">
              <div className="flex gap-4">
                <MapPin className="text-slate-400 flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <div className="font-medium text-slate-900 mb-1">Shanghai Office</div>
                  <div className="text-slate-600">
                    Suite 1208, Tower B<br />
                    1288 Pudong Avenue<br />
                    Shanghai 200120, China
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="text-slate-400 flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <div className="font-medium text-slate-900 mb-1">Email</div>
                  <a href="mailto:info@ssourcingchina.com" className="text-slate-600 hover:text-slate-900">
                    info@ssourcingchina.com
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="text-slate-400 flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <div className="font-medium text-slate-900 mb-1">Phone</div>
                  <div className="text-slate-600">+86 21 5888 0000</div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <h3 className="font-medium mb-3">What to Expect</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>Response within 24 business hours</li>
                <li>Initial consultation call to understand requirements</li>
                <li>Customized sourcing proposal within 5 business days</li>
                <li>No obligation to proceed</li>
              </ul>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-slate-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-1.5">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-slate-500"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-slate-500"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-slate-500"
                    placeholder="+1 555 000 0000"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="productCategory" className="block text-sm font-medium mb-1.5">
                    Product Category *
                  </label>
                  <select
                    id="productCategory"
                    name="productCategory"
                    value={formData.productCategory}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-slate-500 bg-white"
                  >
                    <option value="">Select a category</option>
                    <option value="Consumer Electronics">Consumer Electronics</option>
                    <option value="Home & Kitchen">Home & Kitchen</option>
                    <option value="Industrial Equipment">Industrial Equipment</option>
                    <option value="Textiles & Apparel">Textiles & Apparel</option>
                    <option value="Automotive Parts">Automotive Parts</option>
                    <option value="Building Materials">Building Materials</option>
                    <option value="Packaging & Printing">Packaging & Printing</option>
                    <option value="Medical & Healthcare">Medical & Healthcare</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="annualVolume" className="block text-sm font-medium mb-1.5">
                    Estimated Annual Volume
                  </label>
                  <select
                    id="annualVolume"
                    name="annualVolume"
                    value={formData.annualVolume}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-slate-500 bg-white"
                  >
                    <option value="">Select volume range</option>
                    <option value="Under $50,000">Under $50,000</option>
                    <option value="$50,000 - $200,000">$50,000 - $200,000</option>
                    <option value="$200,000 - $500,000">$200,000 - $500,000</option>
                    <option value="$500,000 - $1,000,000">$500,000 - $1,000,000</option>
                    <option value="Over $1,000,000">Over $1,000,000</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-slate-500 resize-y"
                  placeholder="Please describe your product requirements, target pricing, quality standards, timeline, and any other relevant details."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors disabled:opacity-70"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'} <ArrowRight size={18} />
              </button>

              <p className="text-xs text-slate-500">
                By submitting this form, you agree to be contacted regarding your sourcing inquiry.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;