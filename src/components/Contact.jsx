import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

const Contact = ({ preselectedProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: preselectedProduct || '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const products = [
    'Double Folding Machine',
    'Double Folder Pro',
    'Sheet Metal Folder',
    'Sheet Metal Folding Machine',
    'Metal Folder Elite',
    'Metal Folding Machine',
    'Custom Configuration'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        product: '',
        message: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 md:py-28 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 mb-8">
            <CheckCircle className="w-10 h-10 text-emerald-600" />
          </div>
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-4">Thank You</h2>
          <p className="text-xl text-slate-600">
            Your quote request has been received. A specialist will contact you within 4 business hours.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Contact Info */}
          <div>
            <div className="uppercase tracking-[3px] text-xs font-semibold text-slate-500 mb-4">GET IN TOUCH</div>
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-slate-900 leading-none mb-8">
              Let's discuss your next project.
            </h2>
            <p className="text-xl text-slate-600 mb-12">
              Our application engineers are ready to help you select the right machine and configure it for your specific needs.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">Call Us</div>
                  <a href="tel:+18005551234" className="text-slate-600 hover:text-slate-900">1-800-555-1234</a>
                  <div className="text-sm text-slate-500 mt-0.5">Mon–Fri, 7am–6pm EST</div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">Email</div>
                  <a href="mailto:sales@artitectmachinery.com" className="text-slate-600 hover:text-slate-900">sales@artitectmachinery.com</a>
                  <div className="text-sm text-slate-500 mt-0.5">Response within 4 hours</div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">Headquarters</div>
                  <div className="text-slate-600">1240 Industrial Parkway<br />Cleveland, OH 44114, USA</div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">Global Service</div>
                  <div className="text-slate-600">24/7 technical support in 40+ countries</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <div className="lg:pt-2">
            <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Request a Quote</h3>
              <p className="text-slate-600 mb-8">Fill out the form and we'll prepare a detailed proposal within one business day.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-slate-400 focus:ring-0 text-slate-900 placeholder:text-slate-400"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">Company *</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-slate-400 focus:ring-0 text-slate-900 placeholder:text-slate-400"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-slate-400 focus:ring-0 text-slate-900 placeholder:text-slate-400"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-slate-400 focus:ring-0 text-slate-900 placeholder:text-slate-400"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-1.5">Product of Interest</label>
                  <select
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-slate-400 focus:ring-0 text-slate-900"
                  >
                    <option value="">Select a product (optional)</option>
                    {products.map((p, idx) => (
                      <option key={idx} value={p}>{p}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-slate-400 focus:ring-0 text-slate-900 placeholder:text-slate-400 resize-y"
                    placeholder="Tell us about your application, material types, production volume, or any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 active:scale-[0.985] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting Request...' : 'Submit Quote Request'}
                </button>

                <p className="text-xs text-center text-slate-500 pt-2">
                  We respect your privacy. Your information will never be shared.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
