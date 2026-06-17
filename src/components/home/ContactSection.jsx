import { useState } from 'react';
import { Send, Mail, MapPin, Phone, Clock } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    machine: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  const contactInfo = [
    { icon: MapPin, label: 'Headquarters', value: 'Industriestrasse 42, 80339 München, Germany' },
    { icon: Phone, label: 'Phone', value: '+49 89 1234 5678' },
    { icon: Mail, label: 'Email', value: 'info@artitect-machinery.com' },
    { icon: Clock, label: 'Service Hours', value: 'Mon–Fri: 08:00 – 18:00 CET' },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-brand-gold" />
            <span className="text-brand-navy tracking-[0.3em] text-sm uppercase font-medium">
              Get in Touch
            </span>
            <div className="w-8 h-0.5 bg-brand-gold" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-navy mb-6">
            Let's Discuss Your Project
          </h2>
          <p className="text-[#5A6478] text-lg leading-relaxed">
            Tell us about your requirements and our team will recommend the
            ideal folding solution for your operation.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Contact form */}
          <div className="lg:w-3/5">
            {submitted ? (
              <div className="bg-brand-cream border border-[#E2E0DC] p-10 text-center">
                <div className="w-16 h-16 bg-brand-gold flex items-center justify-center mx-auto mb-6">
                  <Send size={28} className="text-white" />
                </div>
                <h3 className="font-serif text-2xl text-brand-navy mb-3">
                  Thank You
                </h3>
                <p className="text-[#5A6478] mb-6">
                  Your inquiry has been received. Our team will contact you
                  within 24 business hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', company: '', machine: '', message: '' });
                  }}
                  className="bg-brand-navy text-white px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-brand-gold transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-navy mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-[#E2E0DC] bg-brand-cream px-4 py-3 text-brand-navy focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-navy mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-[#E2E0DC] bg-brand-cream px-4 py-3 text-brand-navy focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-brand-navy mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full border border-[#E2E0DC] bg-brand-cream px-4 py-3 text-brand-navy focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="machine" className="block text-sm font-medium text-brand-navy mb-2">
                      Machine Interest
                    </label>
                    <select
                      id="machine"
                      name="machine"
                      value={formData.machine}
                      onChange={handleChange}
                      className="w-full border border-[#E2E0DC] bg-brand-cream px-4 py-3 text-brand-navy focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                    >
                      <option value="">Select a machine type</option>
                      <option value="double-folding-machine">Double Folding Machine</option>
                      <option value="double-folder">Double Folder</option>
                      <option value="sheet-metal-folder">Sheet Metal Folder</option>
                      <option value="sheet-metal-folding-machine">Sheet Metal Folding Machine</option>
                      <option value="metal-folder">Metal Folder</option>
                      <option value="metal-folder-machine">Metal Folder Machine</option>
                      <option value="metal-folding-machine">Metal Folding Machine</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-navy mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-[#E2E0DC] bg-brand-cream px-4 py-3 text-brand-navy focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="bg-brand-gold text-white px-8 py-3.5 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider hover:bg-brand-navy transition-all duration-300"
                >
                  <Send size={16} />
                  Send Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Contact info sidebar */}
          <div className="lg:w-2/5">
            <div className="bg-brand-cream border border-[#E2E0DC] p-8 md:p-10">
              <h3 className="font-serif text-xl text-brand-navy mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-10 h-10 bg-brand-navy flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-brand-gold" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#5A6478] mb-0.5">
                        {item.label}
                      </div>
                      <div className="text-brand-navy text-sm font-medium">
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#E2E0DC]">
                <h4 className="text-sm font-medium text-brand-navy mb-3 uppercase tracking-wider">
                  Quick Response
                </h4>
                <p className="text-[#5A6478] text-sm leading-relaxed">
                  Most inquiries receive a response within 4 hours during
                  business days. For urgent requests, please call our hotline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}