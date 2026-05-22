import { MapPin, Phone, Clock } from 'lucide-react';

const ContactSection = () => (
  <section id="contact" className="bg-cream py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-warm-orange text-xs tracking-widest uppercase font-semibold mb-3">
          Come Visit Us
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-dark-brown mb-4">
          Find Us & Order
        </h2>
        <p className="text-warm-gray text-lg max-w-xl mx-auto leading-relaxed">
          Dine in, take out, or order delivery. We're here to bring a little
          piece of Naples to your table.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Info cards */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-2xl p-7 shadow-md flex gap-5 items-start">
            <div className="w-11 h-11 bg-pizza-red/10 rounded-xl flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-pizza-red" />
            </div>
            <div>
              <h3 className="font-semibold text-dark-brown mb-1">Location</h3>
              <p className="text-warm-gray text-sm leading-relaxed">
                142 Via Napoli Street<br />
                Little Italy, New York, NY 10013
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-7 shadow-md flex gap-5 items-start">
            <div className="w-11 h-11 bg-pizza-red/10 rounded-xl flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-pizza-red" />
            </div>
            <div>
              <h3 className="font-semibold text-dark-brown mb-1">Hours</h3>
              <p className="text-warm-gray text-sm leading-relaxed">
                Mon – Thu: 11:30am – 10:00pm<br />
                Fri – Sat: 11:30am – 11:30pm<br />
                Sunday: 12:00pm – 9:00pm
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-7 shadow-md flex gap-5 items-start">
            <div className="w-11 h-11 bg-pizza-red/10 rounded-xl flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-pizza-red" />
            </div>
            <div>
              <h3 className="font-semibold text-dark-brown mb-1">Reservations & Orders</h3>
              <p className="text-warm-gray text-sm leading-relaxed">
                (212) 555-0192<br />
                hello@napolispizza.com
              </p>
            </div>
          </div>
        </div>

        {/* Order form */}
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <h3 className="font-display text-2xl font-bold text-dark-brown mb-6">
            Make a Reservation
          </h3>
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-dark-brown mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-dark-brown placeholder-warm-gray/60 focus:outline-none focus:ring-2 focus:ring-pizza-red/30"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-brown mb-1">Phone</label>
                <input
                  type="tel"
                  placeholder="Your phone"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-dark-brown placeholder-warm-gray/60 focus:outline-none focus:ring-2 focus:ring-pizza-red/30"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-dark-brown mb-1">Date</label>
                <input
                  type="date"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-dark-brown focus:outline-none focus:ring-2 focus:ring-pizza-red/30"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-brown mb-1">Guests</label>
                <select className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-dark-brown focus:outline-none focus:ring-2 focus:ring-pizza-red/30">
                  {[1, 2, 3, 4, 5, 6, '7+'].map((n) => (
                    <option key={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-dark-brown mb-1">Special Requests</label>
              <textarea
                rows={3}
                placeholder="Allergies, celebrations, seating preferences..."
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-dark-brown placeholder-warm-gray/60 focus:outline-none focus:ring-2 focus:ring-pizza-red/30 resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-pizza-red text-white py-3 rounded-full font-semibold hover:bg-deep-red transition mt-1"
            >
              Reserve My Table
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
