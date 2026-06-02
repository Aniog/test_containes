import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Visit Us',
    value: '1420 Canyon Blvd, Boulder, CO 80302',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@veloxbikes.com',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+1 (720) 555-0198',
  },
];

const Contact = () => {
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#1a1a2e] min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#e94560] text-sm font-semibold uppercase tracking-widest">Get in Touch</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-black text-white">Contact Us</h1>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-lg">
            Have a question about a bike, an order, or just want to talk cycling? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact info */}
          <div className="flex flex-col gap-6">
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-[#16213e] rounded-2xl p-6 border border-white/10 flex items-start gap-4">
                <div className="w-11 h-11 bg-[#e94560]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#e94560]" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-1">{label}</div>
                  <div className="text-white font-medium text-sm">{value}</div>
                </div>
              </div>
            ))}

            <div className="bg-[#0f3460] rounded-2xl p-6 border border-white/10 mt-2">
              <h3 className="text-white font-bold mb-2">Store Hours</h3>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between text-gray-300">
                  <span>Mon – Fri</span><span>9am – 6pm</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Saturday</span><span>10am – 5pm</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Sunday</span><span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-[#16213e] rounded-2xl p-8 border border-white/10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <CheckCircle className="w-16 h-16 text-[#e94560] mb-4" />
                <h2 className="text-2xl font-bold text-white mb-2">Message Sent!</h2>
                <p className="text-gray-400 max-w-sm">
                  Thanks for reaching out. We'll get back to you within one business day.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setValues({ name: '', email: '', subject: '', message: '' }); }}
                  className="mt-8 text-[#e94560] hover:underline font-medium text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={values.name}
                      onChange={onChange}
                      placeholder="Jane Doe"
                      className="w-full bg-[#1a1a2e] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#e94560] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={values.email}
                      onChange={onChange}
                      placeholder="jane@example.com"
                      className="w-full bg-[#1a1a2e] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#e94560] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={values.subject}
                    onChange={onChange}
                    className="w-full bg-[#1a1a2e] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#e94560] transition-colors"
                  >
                    <option value="" disabled className="text-gray-500">Select a topic…</option>
                    <option value="product">Product Question</option>
                    <option value="order">Order & Shipping</option>
                    <option value="service">Service & Warranty</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={values.message}
                    onChange={onChange}
                    placeholder="Tell us how we can help…"
                    className="w-full bg-[#1a1a2e] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#e94560] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#e94560] hover:bg-[#c73652] text-white font-semibold py-3.5 rounded-xl transition-colors"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
