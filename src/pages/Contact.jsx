import { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productInterest: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setSubmitted(true);
    toast.success('Thank you! Your inquiry has been submitted. We will contact you shortly.');
  };

  return (
    <div>
      {/* Page Header */}
      <section className="pt-28 pb-12 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">
              Get In Touch
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
              Contact Us
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Have a question about our machines or need a custom quote? Our team is ready to help you find the perfect folding solution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-lg font-bold text-navy-900 mb-6">Contact Information</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-gold-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Phone</div>
                      <a href="tel:+15552345678" className="text-navy-900 font-medium hover:text-gold-600 transition-colors">
                        +1 (555) 234-5678
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-gold-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Email</div>
                      <a href="mailto:info@artitectmachinery.com" className="text-navy-900 font-medium hover:text-gold-600 transition-colors">
                        info@artitectmachinery.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-gold-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Address</div>
                      <p className="text-navy-900 font-medium">
                        1200 Industrial Way, Suite 400<br />
                        Detroit, MI 48207, USA
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-gold-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Business Hours</div>
                      <p className="text-navy-900 font-medium">
                        Mon - Fri: 8:00 AM - 6:00 PM EST<br />
                        Sat: 9:00 AM - 1:00 PM EST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h4 className="text-sm font-bold text-navy-900 mb-3">Emergency Support</h4>
                <p className="text-sm text-slate-500 leading-relaxed mb-3">
                  For urgent technical issues outside business hours, our 24/7 hotline is available for service contract holders.
                </p>
                <a href="tel:+15552345999" className="text-sm font-semibold text-gold-600 hover:text-gold-700">
                  +1 (555) 234-5999
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-sm">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy-900 mb-3">Thank You!</h3>
                    <p className="text-slate-500 max-w-md mx-auto leading-relaxed">
                      Your inquiry has been received. One of our sales engineers will contact you within 24 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-lg font-bold text-navy-900 mb-2">Send Us a Message</h3>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-navy-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-navy-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-navy-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company Ltd."
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-navy-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                        Product Interest
                      </label>
                      <select
                        name="productInterest"
                        value={formData.productInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                      >
                        <option value="">Select a product...</option>
                        <option value="double-folding-machine">Double Folding Machine</option>
                        <option value="double-folder">Double Folder</option>
                        <option value="sheet-metal-folder">Sheet Metal Folder</option>
                        <option value="sheet-metal-folding-machine">Sheet Metal Folding Machine</option>
                        <option value="metal-folder">Metal Folder</option>
                        <option value="metal-folder-machine">Metal Folder Machine</option>
                        <option value="metal-folding-machine">Metal Folding Machine</option>
                        <option value="other">Other / Custom</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your project, requirements, or questions..."
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-navy-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-8 py-4 rounded-lg transition-colors text-sm uppercase tracking-widest w-full sm:w-auto"
                    >
                      Send Message
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
