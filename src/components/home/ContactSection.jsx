import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
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
    <section id="contact" className="bg-brand-green-pale py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-brand-green font-bold text-sm uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-brand-text font-black text-4xl md:text-5xl mt-2 mb-4">
            We Would Love to Hear From You
          </h2>
          <p className="text-brand-muted text-lg max-w-xl mx-auto leading-relaxed">
            Have a question about a plant, an order, or just want to say hello? Drop us a message.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-brand-green rounded-xl p-3 flex-shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-brand-text font-bold mb-1">Our Location</h4>
                <p className="text-brand-muted text-sm leading-relaxed">123 Garden Street, Green District, NY 10001</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-brand-green rounded-xl p-3 flex-shrink-0">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-brand-text font-bold mb-1">Phone</h4>
                <p className="text-brand-muted text-sm">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-brand-green rounded-xl p-3 flex-shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-brand-text font-bold mb-1">Email</h4>
                <p className="text-brand-muted text-sm">hello@leafyhome.com</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h4 className="text-brand-text font-bold mb-3">Store Hours</h4>
              <ul className="text-brand-muted text-sm space-y-1">
                <li className="flex justify-between"><span>Monday – Friday</span><span className="font-semibold text-brand-text">9am – 6pm</span></li>
                <li className="flex justify-between"><span>Saturday</span><span className="font-semibold text-brand-text">10am – 5pm</span></li>
                <li className="flex justify-between"><span>Sunday</span><span className="font-semibold text-brand-text">Closed</span></li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                <div className="bg-brand-green-pale rounded-full p-4">
                  <Send className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-brand-text font-bold text-xl">Message Sent!</h3>
                <p className="text-brand-muted text-sm">Thanks for reaching out. We will get back to you within 24 hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-brand-green font-semibold text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-brand-text font-semibold text-sm mb-1" htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-brand-text text-sm focus:outline-none focus:ring-2 focus:ring-brand-green placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-brand-text font-semibold text-sm mb-1" htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-brand-text text-sm focus:outline-none focus:ring-2 focus:ring-brand-green placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-brand-text font-semibold text-sm mb-1" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what you need..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-brand-text text-sm focus:outline-none focus:ring-2 focus:ring-brand-green placeholder-gray-400 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-brand-green text-white rounded-full px-6 py-3 font-bold hover:bg-brand-green-light transition-colors"
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

export default ContactSection;
