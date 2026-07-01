import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const hours = [
  { day: 'Monday – Friday', time: '7:00 am – 9:00 pm' },
  { day: 'Saturday', time: '8:00 am – 10:00 pm' },
  { day: 'Sunday', time: '8:00 am – 3:00 pm' },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-wheat py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-inter text-sm uppercase tracking-widest text-crust mb-3">Find Us</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal">
            Visit & Contact
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-ember/10 rounded-xl flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-ember" />
              </div>
              <div>
                <p className="font-playfair font-semibold text-charcoal mb-1">Address</p>
                <p className="font-inter text-sm text-smoke leading-relaxed">
                  42 Via del Forno, Artisan Quarter<br />
                  New York, NY 10012
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-ember/10 rounded-xl flex items-center justify-center shrink-0">
                <Phone size={18} className="text-ember" />
              </div>
              <div>
                <p className="font-playfair font-semibold text-charcoal mb-1">Phone</p>
                <p className="font-inter text-sm text-smoke">+1 (212) 555-0187</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-ember/10 rounded-xl flex items-center justify-center shrink-0">
                <Mail size={18} className="text-ember" />
              </div>
              <div>
                <p className="font-playfair font-semibold text-charcoal mb-1">Email</p>
                <p className="font-inter text-sm text-smoke">hello@fornoandco.com</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-ember/10 rounded-xl flex items-center justify-center shrink-0">
                <Clock size={18} className="text-ember" />
              </div>
              <div className="flex-1">
                <p className="font-playfair font-semibold text-charcoal mb-3">Opening Hours</p>
                <div className="space-y-2">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between gap-4">
                      <span className="font-inter text-sm text-smoke">{h.day}</span>
                      <span className="font-inter text-sm font-medium text-charcoal">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map placeholder + CTA */}
          <div className="flex flex-col gap-6">
            <div className="bg-ash rounded-2xl overflow-hidden h-64 md:h-80 flex items-center justify-center border border-crust/20">
              <div className="text-center">
                <MapPin size={32} className="text-crust mx-auto mb-3" />
                <p className="font-inter text-sm text-smoke">42 Via del Forno, New York</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 font-inter text-sm font-semibold text-ember hover:underline"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            <div className="bg-ember rounded-2xl p-6 text-white">
              <h3 className="font-playfair text-xl font-bold mb-2">Ready to Order?</h3>
              <p className="font-inter text-sm text-white/80 mb-4 leading-relaxed">
                Call us or stop by — we take walk-ins and pre-orders for our bakery boxes.
              </p>
              <a
                href="tel:+12125550187"
                className="inline-block bg-white text-ember rounded-full px-6 py-2 font-semibold font-inter text-sm hover:bg-wheat transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
