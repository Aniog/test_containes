import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

const inquiryTypes = [
  'New Machine Purchase',
  'Custom Solution',
  'Spare Parts & Tooling',
  'Technical Support',
  'Service & Maintenance',
  'General Inquiry',
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    inquiryType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-charcoal pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-accent" />
            <span className="text-amber text-sm font-semibold tracking-[0.2em] uppercase">
              Get in Touch
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-stone-300 text-lg max-w-2xl leading-relaxed">
            Whether you need a quote for a new double folding machine, technical support,
            or custom engineering, our team is ready to help.
          </p>
        </div>
      </section>

      {/* Form & Info */}
      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-xl border border-stone-200 p-12 text-center">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-3">
                    Thank You for Your Inquiry
                  </h3>
                  <p className="text-stone-500 mb-6 max-w-md mx-auto">
                    We have received your message and will respond within one business day.
                    For urgent inquiries, please call us directly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        phone: '',
                        inquiryType: '',
                        message: '',
                      });
                    }}
                    className="btn-secondary"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-stone-200 p-8 md:p-10">
                  <h2 className="text-2xl font-bold text-charcoal mb-2">Request a Quote</h2>
                  <p className="text-stone-400 text-sm mb-8">
                    Fill out the form below and our engineering team will get back to you.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-stone-200 rounded-lg px-4 py-3 text-sm text-charcoal placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-stone-200 rounded-lg px-4 py-3 text-sm text-charcoal placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-charcoal mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full border border-stone-200 rounded-lg px-4 py-3 text-sm text-charcoal placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition-all"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-stone-200 rounded-lg px-4 py-3 text-sm text-charcoal placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition-all"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-charcoal mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      required
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full border border-stone-200 rounded-lg px-4 py-3 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition-all bg-white"
                    >
                      <option value="" disabled>Select an inquiry type</option>
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full border border-stone-200 rounded-lg px-4 py-3 text-sm text-charcoal placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition-all resize-none"
                      placeholder="Tell us about your requirements: material type, thickness, bending length, production volume..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full md:w-auto">
                    <Send className="w-4 h-4 mr-2" />
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-stone-200 p-6">
                <h3 className="font-bold text-charcoal mb-5">Contact Information</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-charcoal font-medium text-sm">Headquarters</p>
                      <p className="text-stone-400 text-sm">Industriestrasse 42<br />70565 Stuttgart, Germany</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-amber mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-charcoal font-medium text-sm">Phone</p>
                      <p className="text-stone-400 text-sm">+49 711 555 0123</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-amber mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-charcoal font-medium text-sm">Email</p>
                      <p className="text-stone-400 text-sm">info@artitect-machinery.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-amber mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-charcoal font-medium text-sm">Business Hours</p>
                      <p className="text-stone-400 text-sm">Mon - Fri: 8:00 - 18:00 CET<br />Sat: 9:00 - 13:00 CET</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-charcoal rounded-xl p-6">
                <h3 className="font-bold text-white mb-3">Need Urgent Support?</h3>
                <p className="text-stone-400 text-sm mb-4">
                  Our technical support team is available 24/7 for existing customers with service contracts.
                </p>
                <a
                  href="tel:+497115550199"
                  className="inline-flex items-center text-amber font-semibold text-sm hover:text-amber-light transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +49 711 555 0199
                </a>
              </div>

              <div className="bg-amber/10 border border-amber/20 rounded-xl p-6">
                <h3 className="font-bold text-charcoal mb-2">Global Offices</h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  With service centers in over 60 countries, we provide local support wherever you are. Contact us for the nearest office.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
