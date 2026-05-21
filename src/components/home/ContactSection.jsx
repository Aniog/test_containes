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
    label: 'Address',
    value: '142 Industrial Park Drive, Suite 300, Detroit, MI 48201',
    href: null,
  },
];

const ContactSection = () => {
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
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-charcoal py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-inter text-xs font-semibold tracking-[0.3em] text-gold uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-off-white gold-underline-center">
            Request a Quote
          </h2>
          <p className="font-inter text-base text-silver mt-8 max-w-2xl mx-auto leading-relaxed">
            Tell us about your project and our team will provide a tailored recommendation and competitive quote within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-playfair text-2xl font-semibold text-off-white mb-2">
                Contact Information
              </h3>
              <p className="font-inter text-sm text-silver leading-relaxed">
                Our sales engineers are ready to help you find the right machine for your application.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-iron-gray flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-inter text-xs font-semibold text-silver uppercase tracking-wider mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-inter text-sm text-platinum hover:text-gold transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-inter text-sm text-platinum">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Business hours */}
            <div className="border-t border-iron-gray pt-6">
              <p className="font-inter text-xs font-semibold text-silver uppercase tracking-wider mb-3">
                Business Hours
              </p>
              <p className="font-inter text-sm text-platinum">Mon – Fri: 8:00 AM – 6:00 PM EST</p>
              <p className="font-inter text-sm text-platinum">Sat: 9:00 AM – 1:00 PM EST</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-steel-black border border-gold rounded-lg p-12 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <CheckCircle size={56} className="text-gold mb-6" />
                <h3 className="font-playfair text-2xl font-semibold text-off-white mb-3">
                  Thank You!
                </h3>
                <p className="font-inter text-base text-silver max-w-sm leading-relaxed">
                  Your inquiry has been received. A member of our sales team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', phone: '', product: '', message: '' }); }}
                  className="mt-8 font-inter text-sm font-semibold border border-gold text-gold px-8 py-3 rounded hover:bg-gold hover:text-steel-black transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-steel-black border border-iron-gray rounded-lg p-8 lg:p-10"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  {[
                    { name: 'name', label: 'Full Name', type: 'text', placeholder: 'John Smith', required: true },
                    { name: 'company', label: 'Company', type: 'text', placeholder: 'Your Company Ltd.', required: false },
                    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@company.com', required: true },
                    { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+1 (555) 000-0000', required: false },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block font-inter text-xs font-semibold text-silver uppercase tracking-wider mb-2">
                        {field.label} {field.required && <span className="text-gold">*</span>}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={form[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required={field.required}
                        className="w-full bg-charcoal border border-iron-gray rounded px-4 py-3 font-inter text-sm text-platinum placeholder-iron-gray focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  ))}
                </div>

                {/* Product interest */}
                <div className="mb-6">
                  <label className="block font-inter text-xs font-semibold text-silver uppercase tracking-wider mb-2">
                    Product of Interest
                  </label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full bg-charcoal border border-iron-gray rounded px-4 py-3 font-inter text-sm text-platinum focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="">Select a product...</option>
                    <option>Double Folding Machine</option>
                    <option>Sheet Metal Folder</option>
                    <option>Metal Folding Machine</option>
                    <option>Double Folder</option>
                    <option>Metal Folder Machine</option>
                    <option>Sheet Metal Folding Machine (CNC)</option>
                    <option>Custom / Not Sure</option>
                  </select>
                </div>

                {/* Message */}
                <div className="mb-8">
                  <label className="block font-inter text-xs font-semibold text-silver uppercase tracking-wider mb-2">
                    Message / Requirements
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Describe your application, material thickness, folding length requirements, or any other details..."
                    className="w-full bg-charcoal border border-iron-gray rounded px-4 py-3 font-inter text-sm text-platinum placeholder-iron-gray focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center gap-3 font-inter font-semibold text-sm bg-gold text-steel-black px-10 py-4 rounded hover:bg-gold-light transition-colors duration-200 shadow-gold-glow"
                >
                  <Send size={16} />
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
