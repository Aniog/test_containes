import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const productOptions = [
  'Double Folding Machine',
  'Double Folder',
  'Sheet Metal Folder',
  'Sheet Metal Folding Machine',
  'Metal Folder',
  'Metal Folder Machine',
  'Metal Folding Machine',
  'Other / Not Sure',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    'w-full bg-white border border-gray-200 focus:border-gold focus:outline-none px-4 py-3 text-navy font-sans text-sm placeholder:text-navy/40 transition-colors duration-200';

  return (
    <section id="contact" className="bg-navy py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-widest uppercase font-sans font-semibold">Get in Touch</span>
            </div>
            <h2 className="font-serif text-surface text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Let's Talk
              <span className="block text-gold">Precision</span>
            </h2>
            <p className="text-surface/70 font-sans text-base lg:text-lg leading-relaxed mb-10">
              Whether you need a standard machine or a custom solution, our engineering team is ready to help you find the perfect fit for your production requirements.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-gold/40 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-surface/50 text-xs tracking-widest uppercase font-sans mb-1">Phone</p>
                  <p className="text-surface font-sans text-base">+1 (800) 278-4832</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-gold/40 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-surface/50 text-xs tracking-widest uppercase font-sans mb-1">Email</p>
                  <p className="text-surface font-sans text-base">info@artitectmachinery.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-gold/40 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-surface/50 text-xs tracking-widest uppercase font-sans mb-1">Address</p>
                  <p className="text-surface font-sans text-base">Industrial Park, Precision Ave,<br />Manufacturing District</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-surface p-8 lg:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <CheckCircle className="w-14 h-14 text-gold mb-5" />
                <h3 className="font-serif text-navy text-2xl font-bold mb-3">Thank You!</h3>
                <p className="text-navy/60 font-sans text-base leading-relaxed max-w-sm">
                  Your enquiry has been received. Our team will get back to you within 1 business day.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', phone: '', product: '', message: '' }); }}
                  className="mt-8 border border-navy text-navy text-xs font-semibold tracking-widest uppercase px-6 py-3 hover:bg-navy hover:text-surface transition-colors duration-200 font-sans"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <p className="font-serif text-navy text-xl font-bold mb-1">Request a Quote</p>
                  <p className="text-navy/50 font-sans text-sm">Fill in your details and we'll respond promptly.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-navy/60 text-xs tracking-widest uppercase font-sans mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-navy/60 text-xs tracking-widest uppercase font-sans mb-1.5">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-navy/60 text-xs tracking-widest uppercase font-sans mb-1.5">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-navy/60 text-xs tracking-widest uppercase font-sans mb-1.5">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (000) 000-0000"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-navy/60 text-xs tracking-widest uppercase font-sans mb-1.5">Product of Interest</label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="">Select a product...</option>
                    {productOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-navy/60 text-xs tracking-widest uppercase font-sans mb-1.5">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us about your requirements, sheet thickness, production volume, etc."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gold text-navy text-sm font-semibold tracking-widest uppercase px-8 py-4 hover:bg-gold-light transition-colors duration-200 font-sans flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Enquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
