import { MapPin, Clock, Phone } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-[#C0392B]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-white/70 font-semibold uppercase tracking-widest text-sm mb-3">Come Visit Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            We're Always Open for Pizza
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 rounded-2xl p-8 text-center border border-white/20">
            <MapPin className="w-8 h-8 text-white mx-auto mb-4" />
            <h3 className="text-white font-bold text-lg mb-2">Location</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              42 Via Napoli<br />
              Little Italy, New York<br />
              NY 10013
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl p-8 text-center border border-white/20">
            <Clock className="w-8 h-8 text-white mx-auto mb-4" />
            <h3 className="text-white font-bold text-lg mb-2">Hours</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Mon – Thu: 11am – 10pm<br />
              Fri – Sat: 11am – 11pm<br />
              Sunday: 12pm – 9pm
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl p-8 text-center border border-white/20">
            <Phone className="w-8 h-8 text-white mx-auto mb-4" />
            <h3 className="text-white font-bold text-lg mb-2">Reservations</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Walk-ins welcome.<br />
              Call ahead for groups of 6+.
            </p>
            <a
              href="tel:+12125550199"
              className="inline-block bg-white text-[#C0392B] font-semibold rounded-full px-6 py-2 text-sm hover:bg-[#FFF8F0] transition"
            >
              (212) 555-0199
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
