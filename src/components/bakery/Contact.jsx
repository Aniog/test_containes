import { useState } from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const hours = [
  { day: 'Monday – Friday', time: '7:00 AM – 7:00 PM' },
  { day: 'Saturday', time: '7:00 AM – 5:00 PM' },
  { day: 'Sunday', time: '8:00 AM – 3:00 PM' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-espresso">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-golden font-semibold text-sm uppercase tracking-widest mb-3">
            Get In Touch
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Visit Us or Say Hello
          </h2>
          <p className="text-tan text-lg max-w-xl mx-auto">
            We'd love to hear from you — whether it's a custom order, a question, or just to say hi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-8">
            <div className="bg-white/10 rounded-2xl p-7 border border-white/10">
              <h3 className="font-serif text-2xl font-bold text-white mb-6">Find Us</h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-golden/20 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={18} className="text-golden" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Address</p>
                    <p className="text-tan text-sm mt-1">42 Wheat Lane, Baker's Quarter<br />New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-golden/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone size={18} className="text-golden" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-tan text-sm mt-1">+1 (212) 555-0184</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-golden/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail size={18} className="text-golden" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-tan text-sm mt-1">hello@breadandbakery.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-2xl p-7 border border-white/10">
              <div className="flex items-center gap-3 mb-5">
                <Clock size={20} className="text-golden" />
                <h3 className="font-serif text-2xl font-bold text-white">Opening Hours</h3>
              </div>
              <div className="flex flex-col gap-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center border-b border-white/10 pb-3 last:border-0 last:pb-0">
                    <span className="text-tan text-sm">{h.day}</span>
                    <span className="text-white font-semibold text-sm">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-8 border border-white/10">
            <h3 className="font-serif text-2xl font-bold text-white mb-6">Send a Message</h3>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <div className="text-5xl mb-4">🍞</div>
                <p className="font-serif text-2xl font-bold text-white mb-2">Thank you!</p>
                <p className="text-tan">We'll get back to you as soon as the bread is out of the oven.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-golden underline text-sm bg-transparent border-0"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-tan text-sm font-medium mb-2" htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-golden transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-tan text-sm font-medium mb-2" htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-golden transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-tan text-sm font-medium mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your order or question..."
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-golden transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-golden text-white rounded-full px-8 py-4 font-semibold hover:bg-brown-700 transition-colors duration-200 w-full"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
