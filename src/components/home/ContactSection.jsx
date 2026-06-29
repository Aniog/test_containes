import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', product: '', message: '' });
    }, 4000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@artitectmachinery.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 234-5678',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '1200 Industrial Parkway, Suite 400, Cleveland, OH 44114',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-bg-light">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-[0.15em] mb-3 inline-block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand tracking-tight mb-4">
            Request a Quote
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            Tell us about your project and our team will recommend the right metal folding solution for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-surface rounded-lg border border-border p-8 md:p-10 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-brand mb-2">Thank You!</h3>
                  <p className="text-text-secondary">We have received your inquiry and will be in touch shortly.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded border border-border bg-bg-light text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded border border-border bg-bg-light text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded border border-border bg-bg-light text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-text-primary mb-2">
                      Product of Interest
                    </label>
                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded border border-border bg-bg-light text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    >
                      <option value="">Select a product</option>
                      <option value="double-folding-machine">Double Folding Machine</option>
                      <option value="double-folder">Double Folder</option>
                      <option value="sheet-metal-folder">Sheet Metal Folder</option>
                      <option value="sheet-metal-folding-machine">Sheet Metal Folding Machine</option>
                      <option value="metal-folder">Metal Folder</option>
                      <option value="metal-folder-machine">Metal Folder Machine</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded border border-border bg-bg-light text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 bg-accent text-brand px-8 py-3.5 rounded font-semibold uppercase tracking-[0.05em] hover:bg-accent-hover transition-all hover:scale-[1.02] w-full md:w-auto"
                    >
                      <Send className="w-4 h-4" />
                      Send Inquiry
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {contactInfo.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text-muted uppercase tracking-[0.05em] mb-1">
                      {item.label}
                    </h4>
                    <p className="text-text-primary font-medium leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-lg bg-brand text-white">
              <h4 className="text-lg font-bold mb-3">Business Hours</h4>
              <div className="space-y-2 text-white/80 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 2:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
