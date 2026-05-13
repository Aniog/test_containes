import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20" style={{ background: 'linear-gradient(135deg, #e8f5e9 0%, #f1f8e9 100%)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 bg-green-200 text-green-800 text-xs font-semibold rounded-full mb-3 uppercase tracking-wide">
            Get In Touch
          </span>
          <h2 className="text-4xl font-extrabold text-green-900 mb-4">
            We'd Love to Hear From You
          </h2>
          <p className="text-green-700 max-w-xl mx-auto">
            Have a question about a plant, an order, or just want to chat about greenery? Reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Info */}
          <div className="space-y-6">
            {[
              { icon: Mail, label: 'Email Us', value: 'hello@greennest.com' },
              { icon: Phone, label: 'Call Us', value: '+1 (555) 123-4567' },
              { icon: MapPin, label: 'Visit Us', value: '42 Garden Lane, Brooklyn, NY' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-green-600 uppercase tracking-wide">{label}</p>
                  <p className="text-sm font-medium text-green-900">{value}</p>
                </div>
              </div>
            ))}

            {/* Hours */}
            <div className="bg-white rounded-2xl p-5 shadow-sm mt-4">
              <p className="text-sm font-bold text-green-900 mb-3">Business Hours</p>
              <div className="space-y-1 text-sm text-green-700">
                <div className="flex justify-between"><span>Mon – Fri</span><span className="font-medium">9am – 6pm</span></div>
                <div className="flex justify-between"><span>Saturday</span><span className="font-medium">10am – 4pm</span></div>
                <div className="flex justify-between"><span>Sunday</span><span className="font-medium text-green-400">Closed</span></div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-8">
                <span className="text-5xl">🌿</span>
                <h3 className="text-xl font-bold text-green-900 mt-4 mb-2">Message Sent!</h3>
                <p className="text-green-700 text-sm">Thanks for reaching out. We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-5 py-2 bg-green-600 text-white text-sm font-semibold rounded-full hover:bg-green-700 transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-green-800 mb-1" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2.5 rounded-xl border border-green-200 bg-green-50 text-green-900 text-sm placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-green-800 mb-1" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-green-200 bg-green-50 text-green-900 text-sm placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-green-800 mb-1" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what you're looking for..."
                    className="w-full px-4 py-2.5 rounded-xl border border-green-200 bg-green-50 text-green-900 text-sm placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Send Message
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
