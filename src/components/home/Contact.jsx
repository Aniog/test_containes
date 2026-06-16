import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight } from 'lucide-react';

const productOptions = [
  'Double Folding Machine',
  'Double Folder',
  'Sheet Metal Folder',
  'Sheet Metal Folding Machine',
  'Metal Folder',
  'Metal Folder Machine',
  'Metal Folding Machine',
  'Custom / Other',
];

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div>
      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-precision-blue to-iron-blue">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-heading font-bold text-white text-4xl md:text-5xl mb-4">
            Ready to Elevate Your Production?
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Talk to our engineering team today. We'll help you find the perfect folding machine solution for your specific requirements and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 bg-copper-gold hover:bg-light-gold text-white font-semibold px-8 py-4 rounded-lg transition-colors group"
            >
              Get a Free Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              <Phone size={18} />
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 md:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Info */}
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 bg-precision-blue/10 text-precision-blue text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase">
                Get In Touch
              </div>
              <h2 className="font-heading font-bold text-steel-navy text-4xl mb-4">
                Let's Build Something Precise
              </h2>
              <p className="text-mid-gray leading-relaxed mb-8">
                Whether you need a standard machine or a fully customized folding solution, our team is ready to help. Fill out the form and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-precision-blue/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone size={18} className="text-precision-blue" />
                  </div>
                  <div>
                    <div className="font-semibold text-dark-gray text-sm mb-0.5">Phone</div>
                    <a href="tel:+1234567890" className="text-mid-gray text-sm hover:text-precision-blue transition-colors">
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-precision-blue/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail size={18} className="text-precision-blue" />
                  </div>
                  <div>
                    <div className="font-semibold text-dark-gray text-sm mb-0.5">Email</div>
                    <a href="mailto:info@artitectmachinery.com" className="text-mid-gray text-sm hover:text-precision-blue transition-colors">
                      info@artitectmachinery.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-precision-blue/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={18} className="text-precision-blue" />
                  </div>
                  <div>
                    <div className="font-semibold text-dark-gray text-sm mb-0.5">Headquarters</div>
                    <div className="text-mid-gray text-sm">
                      123 Industrial Park Drive<br />
                      Manufacturing District, CA 90210<br />
                      United States
                    </div>
                  </div>
                </div>
              </div>

              {/* Business hours */}
              <div className="mt-8 bg-white border border-light-gray rounded-xl p-5">
                <div className="font-semibold text-dark-gray text-sm mb-3">Business Hours</div>
                <div className="space-y-1.5 text-sm text-mid-gray">
                  <div className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span className="text-dark-gray font-medium">8:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-dark-gray font-medium">9:00 AM – 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-mid-gray">Closed</span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-light-gray text-xs text-precision-blue font-medium">
                  24/7 Emergency Technical Support Available
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-light-gray rounded-2xl shadow-lg p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle size={32} className="text-green-600" />
                    </div>
                    <h3 className="font-heading font-bold text-steel-navy text-2xl mb-2">
                      Message Received!
                    </h3>
                    <p className="text-mid-gray max-w-sm">
                      Thank you for reaching out. One of our engineers will contact you within 24 hours with a tailored response.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', phone: '', product: '', message: '' }); }}
                      className="mt-6 text-precision-blue text-sm font-medium hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-dark-gray mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="John Smith"
                          className="w-full border border-light-gray rounded-lg px-4 py-3 text-sm text-dark-gray placeholder-mid-gray focus:outline-none focus:border-precision-blue focus:ring-2 focus:ring-precision-blue/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-gray mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="john@company.com"
                          className="w-full border border-light-gray rounded-lg px-4 py-3 text-sm text-dark-gray placeholder-mid-gray focus:outline-none focus:border-precision-blue focus:ring-2 focus:ring-precision-blue/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-dark-gray mb-1.5">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Your Company Ltd."
                          className="w-full border border-light-gray rounded-lg px-4 py-3 text-sm text-dark-gray placeholder-mid-gray focus:outline-none focus:border-precision-blue focus:ring-2 focus:ring-precision-blue/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-gray mb-1.5">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 (234) 567-8900"
                          className="w-full border border-light-gray rounded-lg px-4 py-3 text-sm text-dark-gray placeholder-mid-gray focus:outline-none focus:border-precision-blue focus:ring-2 focus:ring-precision-blue/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark-gray mb-1.5">
                        Product of Interest
                      </label>
                      <select
                        name="product"
                        value={form.product}
                        onChange={handleChange}
                        className="w-full border border-light-gray rounded-lg px-4 py-3 text-sm text-dark-gray focus:outline-none focus:border-precision-blue focus:ring-2 focus:ring-precision-blue/20 transition-all bg-white"
                      >
                        <option value="">Select a product...</option>
                        {productOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark-gray mb-1.5">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your requirements — material type, thickness, production volume, special features needed..."
                        className="w-full border border-light-gray rounded-lg px-4 py-3 text-sm text-dark-gray placeholder-mid-gray focus:outline-none focus:border-precision-blue focus:ring-2 focus:ring-precision-blue/20 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 bg-precision-blue hover:bg-sky-accent disabled:opacity-70 text-white font-semibold py-4 rounded-lg transition-colors"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-xs text-mid-gray text-center">
                      We respect your privacy. Your information will never be shared with third parties.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
