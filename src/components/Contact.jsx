import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const hours = [
  { day: 'Monday – Friday', time: '7:00 AM – 9:00 PM' },
  { day: 'Saturday', time: '7:00 AM – 10:00 PM' },
  { day: 'Sunday', time: '8:00 AM – 8:00 PM' },
];

const Contact = () => (
  <section id="contact" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Find Us</p>
        <h2 className="font-serif font-bold text-4xl md:text-5xl text-dark mb-4">
          Visit or Get in Touch
        </h2>
        <p className="text-muted text-lg max-w-xl mx-auto">
          We'd love to see you. Stop by for a coffee and a pastry, or reach out to place a catering order.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Info */}
        <div className="flex flex-col gap-8">
          {/* Address */}
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-dark mb-1">Our Location</p>
              <p className="text-muted leading-relaxed">42 Via della Farina<br />Brooklyn, NY 11201</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-dark mb-1">Phone</p>
              <a href="tel:+17185550192" className="text-muted hover:text-primary transition-colors">
                +1 (718) 555-0192
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-dark mb-1">Email</p>
              <a href="mailto:hello@forno.com" className="text-muted hover:text-primary transition-colors">
                hello@forno.com
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-dark mb-3">Opening Hours</p>
              <div className="flex flex-col gap-2">
                {hours.map(({ day, time }) => (
                  <div key={day} className="flex justify-between gap-4 text-sm">
                    <span className="text-dark font-medium">{day}</span>
                    <span className="text-muted">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-cream rounded-2xl p-8 border border-warm">
          <h3 className="font-serif font-bold text-2xl text-dark mb-6">Send Us a Message</h3>
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-dark mb-1.5" htmlFor="fname">First Name</label>
                <input
                  id="fname"
                  type="text"
                  placeholder="Maria"
                  className="w-full bg-white border border-warm rounded-xl px-4 py-3 text-dark placeholder-muted/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-1.5" htmlFor="lname">Last Name</label>
                <input
                  id="lname"
                  type="text"
                  placeholder="Rossi"
                  className="w-full bg-white border border-warm rounded-xl px-4 py-3 text-dark placeholder-muted/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-dark mb-1.5" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full bg-white border border-warm rounded-xl px-4 py-3 text-dark placeholder-muted/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dark mb-1.5" htmlFor="subject">Subject</label>
              <select
                id="subject"
                className="w-full bg-white border border-warm rounded-xl px-4 py-3 text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
              >
                <option value="">Select a topic…</option>
                <option>Catering Inquiry</option>
                <option>Reservation</option>
                <option>Feedback</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-dark mb-1.5" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us how we can help…"
                className="w-full bg-white border border-warm rounded-xl px-4 py-3 text-dark placeholder-muted/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-white rounded-full py-3.5 font-semibold text-sm hover:bg-primary-dark transition-colors duration-200 mt-1"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
