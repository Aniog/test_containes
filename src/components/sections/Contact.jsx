import { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (values) => {
    if (!values.name.trim()) return 'Name is required';
    if (!values.email.trim()) return 'Email is required';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please provide a valid email';
    if (!values.message.trim()) return 'Message is required';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const err = validate(formData);
    if (err) {
      setError(err);
      return;
    }

    setStatus('submitting');

    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        interest: '',
        message: '',
      });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      detail: '123 Industrial Park Drive, Manufacturing District, CA 90210',
    },
    {
      icon: Phone,
      title: 'Call Us',
      detail: '+1 (555) 123-4567',
    },
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'info@artitect-machinery.com',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      detail: 'Mon - Fri: 8:00 AM - 6:00 PM PST',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="contact-title" className="section-title">Get In Touch</h2>
          <p id="contact-subtitle" className="section-subtitle">
            Ready to discuss your sheet metal folding needs? Our team is here to
            help you find the perfect solution.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="card">
              <h3 className="text-lg font-semibold text-slate-900">
                Send us a message
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Fill out the form and we'll get back to you within 24 hours.
              </p>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                    className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="interest" className="block text-sm font-medium text-slate-700">
                    I'm interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  >
                    <option value="">Select a product category</option>
                    <option value="double-folding-machine">Double Folding Machine</option>
                    <option value="sheet-metal-folder">Sheet Metal Folder</option>
                    <option value="metal-folding-machine">Metal Folding Machine</option>
                    <option value="custom-solution">Custom Solution</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project requirements..."
                    className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                </div>
              </div>

              {error && (
                <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              {status === 'success' && (
                <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-700">
                  Thank you for your message! We'll get back to you within 24 hours.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-6 btn-primary w-full disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="card flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                      <Icon className="h-5 w-5 text-slate-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{item.title}</h4>
                      <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map placeholder */}
            <div className="mt-8 aspect-video overflow-hidden rounded-xl bg-slate-200">
              <img
                data-strk-img-id="contact-map-8f2a9c"
                data-strk-img="[about-subtitle] [about-title] industrial factory location map"
                data-strk-img-ratio="16x9"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="ARTITECT MACHINERY location"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
