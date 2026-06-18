import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+1 (555) 234-5678' },
  { icon: Mail, label: 'Email', value: 'hello@sweetcrumbs.com' },
  { icon: MapPin, label: 'Location', value: '42 Baker Street, New York, NY' },
  { icon: Clock, label: 'Hours', value: 'Mon–Sat: 8am – 7pm' },
];

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', occasion: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Order inquiry submitted:', form);
    setSubmitted(true);
    setForm({ name: '', email: '', occasion: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#fce4ec] text-[#c2185b] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#2d1b0e] mb-4">
            Order Your Dream Cake
          </h2>
          <p className="text-[#9e7b6b] max-w-xl mx-auto leading-relaxed">
            Ready to place an order or have a question? Fill out the form and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="flex flex-col justify-center gap-6">
            <div className="bg-[#fdf6f0] rounded-2xl p-8 border border-[#f0ddd4]">
              <h3 className="font-playfair text-2xl font-bold text-[#2d1b0e] mb-6">
                Visit or Call Us
              </h3>
              <div className="flex flex-col gap-5">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#fce4ec] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-[#c2185b]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#9e7b6b] uppercase tracking-wide mb-0.5">{label}</p>
                      <p className="text-sm font-medium text-[#2d1b0e]">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#c2185b] rounded-2xl p-8 text-white">
              <h3 className="font-playfair text-xl font-bold mb-2">Free Tasting Session</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Book a free 30-minute tasting session to sample flavors before placing your order. Available by appointment.
              </p>
              <a
                href="mailto:hello@sweetcrumbs.com"
                className="inline-block mt-4 bg-white text-[#c2185b] px-5 py-2 rounded-full text-xs font-semibold hover:bg-[#fce4ec] transition-colors"
              >
                Book a Tasting
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#fdf6f0] rounded-2xl p-8 border border-[#f0ddd4]">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#fce4ec] flex items-center justify-center mb-4">
                  <span className="text-3xl">🎂</span>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-[#2d1b0e] mb-2">
                  Thank You!
                </h3>
                <p className="text-[#9e7b6b] text-sm leading-relaxed">
                  We've received your inquiry and will be in touch within 24 hours to discuss your perfect cake.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[#c2185b] text-sm font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#5c3d2e] uppercase tracking-wide mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      required
                      placeholder="Jane Smith"
                      className="w-full bg-white border border-[#f0ddd4] rounded-xl px-4 py-3 text-sm text-[#2d1b0e] placeholder-[#c9a99a] focus:outline-none focus:border-[#c2185b] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#5c3d2e] uppercase tracking-wide mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      required
                      placeholder="jane@example.com"
                      className="w-full bg-white border border-[#f0ddd4] rounded-xl px-4 py-3 text-sm text-[#2d1b0e] placeholder-[#c9a99a] focus:outline-none focus:border-[#c2185b] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#5c3d2e] uppercase tracking-wide mb-1.5">
                    Occasion
                  </label>
                  <select
                    name="occasion"
                    value={form.occasion}
                    onChange={onChange}
                    required
                    className="w-full bg-white border border-[#f0ddd4] rounded-xl px-4 py-3 text-sm text-[#2d1b0e] focus:outline-none focus:border-[#c2185b] transition-colors"
                  >
                    <option value="">Select an occasion…</option>
                    <option>Birthday</option>
                    <option>Wedding</option>
                    <option>Anniversary</option>
                    <option>Corporate Event</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#5c3d2e] uppercase tracking-wide mb-1.5">
                    Tell Us About Your Cake
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    required
                    rows={5}
                    placeholder="Flavors, size, design ideas, delivery date…"
                    className="w-full bg-white border border-[#f0ddd4] rounded-xl px-4 py-3 text-sm text-[#2d1b0e] placeholder-[#c9a99a] focus:outline-none focus:border-[#c2185b] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#c2185b] text-white px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-[#ad1457] transition-colors"
                >
                  Send My Order Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
