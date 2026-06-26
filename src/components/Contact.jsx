import { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: '',
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
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <span className="text-accent text-sm font-semibold tracking-[0.3em] uppercase">
              Get in Touch
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-950 mt-4 mb-6">
              Let's Discuss Your Needs
            </h2>
            <p className="text-steel-600 text-lg leading-relaxed mb-10">
              Whether you need a standard metal folding machine or a custom-configured double folder, our team is ready to help you find the perfect solution.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-50 rounded-sm flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-brand-800" />
                </div>
                <div>
                  <div className="font-semibold text-brand-950 mb-1">Headquarters</div>
                  <div className="text-steel-500 text-sm">
                    Industriestrasse 42, 70565 Stuttgart, Germany
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-50 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-brand-800" />
                </div>
                <div>
                  <div className="font-semibold text-brand-950 mb-1">Phone</div>
                  <div className="text-steel-500 text-sm">+49 711 555 0123</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-50 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-brand-800" />
                </div>
                <div>
                  <div className="font-semibold text-brand-950 mb-1">Email</div>
                  <div className="text-steel-500 text-sm">sales@artitect-machinery.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-steel-50 rounded-sm p-8 lg:p-10 border border-steel-100">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-brand-950 mb-3">
                  Thank You
                </h3>
                <p className="text-steel-600">
                  We have received your inquiry. Our team will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-steel-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-steel-200 rounded-sm text-steel-900 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-steel-700 mb-1.5">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-steel-200 rounded-sm text-steel-900 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-steel-700 mb-1.5">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-steel-200 rounded-sm text-steel-900 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-steel-700 mb-1.5">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-steel-200 rounded-sm text-steel-900 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                      placeholder="+1 234 567 890"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-steel-700 mb-1.5">
                    Interested In
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-steel-200 rounded-sm text-steel-900 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors appearance-none"
                  >
                    <option value="">Select a product...</option>
                    <option value="double-folding-machine">Double Folding Machine</option>
                    <option value="double-folder">Double Folder</option>
                    <option value="sheet-metal-folder">Sheet Metal Folder</option>
                    <option value="metal-folder-machine">Metal Folder Machine</option>
                    <option value="custom">Custom Solution</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-steel-700 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-steel-200 rounded-sm text-steel-900 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-accent text-white font-semibold rounded-sm tracking-wide uppercase text-sm hover:bg-accent-dark transition-colors flex items-center justify-center gap-2"
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
}
