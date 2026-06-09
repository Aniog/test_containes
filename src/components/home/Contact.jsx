import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
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
    value: '14 Industrial Park Drive, Suite 200, Detroit, MI 48201',
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-steel-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Get in Touch
          </span>
          <h2 className="font-serif font-bold text-white text-4xl md:text-5xl mb-4">
            Request a Quote
          </h2>
          <p className="text-steel-300 text-lg max-w-2xl mx-auto">
            Tell us about your project and our engineering team will respond
            within one business day with a tailored solution.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-16 h-1 bg-gold-500 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-steel-800 rounded-2xl p-8 border border-steel-700/50">
              <h3 className="font-serif font-semibold text-white text-xl mb-6">
                Contact Information
              </h3>
              <div className="flex flex-col gap-6">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <p className="text-steel-400 text-xs font-medium uppercase tracking-wider mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-steel-100 text-sm hover:text-gold-400 transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-steel-100 text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gold-500/10 border border-gold-500/25 rounded-2xl p-6">
              <p className="text-gold-300 text-sm font-medium leading-relaxed">
                <span className="font-bold text-gold-400">Fast Response Guarantee:</span>{' '}
                All quote requests are reviewed by our engineering team and
                responded to within 1 business day.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-steel-800 rounded-2xl p-8 border border-steel-700/50">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="w-16 h-16 text-gold-400 mb-4" />
                  <h3 className="font-serif font-bold text-white text-2xl mb-2">
                    Message Received!
                  </h3>
                  <p className="text-steel-300 text-base max-w-sm">
                    Thank you for reaching out. Our team will contact you within
                    one business day.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', phone: '', product: '', message: '' }); }}
                    className="mt-6 text-gold-400 hover:text-gold-300 text-sm font-semibold transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-steel-300 text-xs font-semibold uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full bg-steel-700 border border-steel-600 text-white placeholder-steel-400 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-steel-300 text-xs font-semibold uppercase tracking-wider mb-1.5">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Fabrication Ltd."
                        className="w-full bg-steel-700 border border-steel-600 text-white placeholder-steel-400 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-steel-300 text-xs font-semibold uppercase tracking-wider mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full bg-steel-700 border border-steel-600 text-white placeholder-steel-400 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-steel-300 text-xs font-semibold uppercase tracking-wider mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 555 000 0000"
                        className="w-full bg-steel-700 border border-steel-600 text-white placeholder-steel-400 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-steel-300 text-xs font-semibold uppercase tracking-wider mb-1.5">
                      Product of Interest
                    </label>
                    <select
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      className="w-full bg-steel-700 border border-steel-600 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-500 transition-colors"
                    >
                      <option value="">Select a product...</option>
                      <option>Double Folding Machine</option>
                      <option>Double Folder</option>
                      <option>Sheet Metal Folder</option>
                      <option>Sheet Metal Folding Machine</option>
                      <option>Metal Folder</option>
                      <option>Metal Folding Machine</option>
                      <option>Custom / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-steel-300 text-xs font-semibold uppercase tracking-wider mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your application, material thickness, bending length requirements..."
                      className="w-full bg-steel-700 border border-steel-600 text-white placeholder-steel-400 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-steel-900 font-bold py-4 rounded-lg text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    Send Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
