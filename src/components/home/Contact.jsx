import { useState } from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-stone-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p
            className="text-orange-400 text-sm font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Find Us
          </p>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Come Hungry, Leave Happy
          </h2>
          <p
            className="text-stone-400 max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Reservations recommended on weekends. Walk-ins always welcome.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            {[
              {
                icon: <MapPin className="w-5 h-5 text-orange-400" />,
                title: 'Address',
                lines: ['123 Little Italy Lane', 'New York, NY 10013'],
              },
              {
                icon: <Phone className="w-5 h-5 text-orange-400" />,
                title: 'Phone',
                lines: ['(212) 555-0192'],
              },
              {
                icon: <Mail className="w-5 h-5 text-orange-400" />,
                title: 'Email',
                lines: ['hello@napolispizza.com'],
              },
              {
                icon: <Clock className="w-5 h-5 text-orange-400" />,
                title: 'Hours',
                lines: [
                  'Mon–Thu: 11am – 10pm',
                  'Fri–Sat: 11am – 11pm',
                  'Sunday: 12pm – 9pm',
                ],
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="mt-1 shrink-0">{item.icon}</div>
                <div>
                  <div
                    className="text-white font-semibold mb-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.title}
                  </div>
                  {item.lines.map((line) => (
                    <div
                      key={line}
                      className="text-stone-400 text-sm"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="bg-stone-800 rounded-2xl p-8">
            {sent ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🍕</div>
                <h3
                  className="text-2xl font-bold text-white mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Message Received!
                </h3>
                <p
                  className="text-stone-400"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  We'll get back to you faster than our oven heats up.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-orange-400 hover:text-orange-300 text-sm font-semibold"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3
                  className="text-xl font-bold text-white mb-6"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Send Us a Message
                </h3>
                {[
                  { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Mario Rossi' },
                  { name: 'email', label: 'Email Address', type: 'email', placeholder: 'mario@example.com' },
                ].map((field) => (
                  <div key={field.name}>
                    <label
                      className="block text-stone-300 text-sm font-medium mb-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="w-full bg-stone-700 border border-stone-600 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-orange-400 transition-colors text-sm"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>
                ))}
                <div>
                  <label
                    className="block text-stone-300 text-sm font-medium mb-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Reservation request, question, or just say ciao!"
                    required
                    rows={4}
                    className="w-full bg-stone-700 border border-stone-600 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-orange-400 transition-colors text-sm resize-none"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-3.5 rounded-xl transition-colors text-base"
                  style={{ fontFamily: "'Inter', sans-serif" }}
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
};

export default Contact;
