import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const productOptions = [
  'Double Folding Machine',
  'Double Folder',
  'Sheet Metal Folder',
  'Sheet Metal Folding Machine',
  'Metal Folder',
  'Metal Folding Machine',
  'Other / Not Sure',
];

export default function Contact() {
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
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-surface py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
              Get in Touch
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">
            Request a Quote
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Tell us about your project and our engineering team will recommend the
            ideal folding machine solution for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-navy font-bold text-xl mb-6">Contact Information</h3>
              <div className="space-y-5">
                {[
                  {
                    icon: Phone,
                    label: 'Phone',
                    value: '+1 (800) 278-4832',
                    href: 'tel:+18002784832',
                  },
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'sales@artitectmachinery.com',
                    href: 'mailto:sales@artitectmachinery.com',
                  },
                  {
                    icon: MapPin,
                    label: 'Headquarters',
                    value: '1200 Industrial Blvd, Suite 400\nDetroit, MI 48201, USA',
                    href: null,
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex gap-4">
                      <div className="w-10 h-10 bg-navy flex items-center justify-center flex-shrink-0">
                        <Icon size={16} className="text-gold" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-0.5">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-navy font-medium hover:text-steel transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-navy font-medium whitespace-pre-line">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-navy p-6">
              <h4 className="text-gold font-semibold text-sm uppercase tracking-wide mb-4">
                Business Hours
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-300">
                  <span>Monday – Friday</span>
                  <span className="text-white font-medium">8:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Saturday</span>
                  <span className="text-white font-medium">9:00 AM – 2:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Sunday</span>
                  <span className="text-gray-500">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white border border-gray-100 shadow-md p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <CheckCircle size={56} className="text-steel mb-5" />
                <h3 className="text-navy font-bold text-2xl mb-3">Thank You!</h3>
                <p className="text-gray-500 leading-relaxed max-w-sm">
                  Your enquiry has been received. Our team will get back to you
                  within 1 business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-steel text-sm font-semibold uppercase tracking-wide hover:text-sky-accent transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full border border-gray-200 px-4 py-3 text-navy text-sm focus:outline-none focus:border-steel transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full border border-gray-200 px-4 py-3 text-navy text-sm focus:outline-none focus:border-steel transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                      className="w-full border border-gray-200 px-4 py-3 text-navy text-sm focus:outline-none focus:border-steel transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full border border-gray-200 px-4 py-3 text-navy text-sm focus:outline-none focus:border-steel transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-2">
                    Product of Interest
                  </label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-4 py-3 text-navy text-sm focus:outline-none focus:border-steel transition-colors bg-white"
                  >
                    <option value="">Select a product...</option>
                    {productOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-2">
                    Message / Requirements <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your application, material thickness, working length requirements..."
                    className="w-full border border-gray-200 px-4 py-3 text-navy text-sm focus:outline-none focus:border-steel transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-steel text-white py-4 font-semibold tracking-wide uppercase text-sm hover:bg-sky-accent transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Send Enquiry
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
