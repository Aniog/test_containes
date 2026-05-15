import { MapPin, Phone, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0d0400] border-t border-orange-900/30">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-orange-600 to-red-700 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Ready for the Best Fried Chicken of Your Life?
          </h2>
          <p className="text-orange-100/80 text-lg mb-6">
            Come in, order online, or call ahead. We'll have it hot and ready.
          </p>
          <a
            href="tel:+15551234567"
            className="inline-block bg-white text-orange-600 font-extrabold px-8 py-3 rounded-full text-lg hover:bg-orange-50 transition-colors shadow-lg"
          >
            Call to Order: (555) 123-4567
          </a>
        </div>
      </div>

      {/* Footer content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🍗</span>
              <span className="text-xl font-extrabold text-orange-400">Cluck & Crisp</span>
            </div>
            <p className="text-orange-100/50 text-sm leading-relaxed mb-6">
              Serving legendary fried chicken since 2004. Made with love, spice, and Grandma Mae's secret recipe.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Twitter, label: 'Twitter' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 hover:bg-orange-500 hover:text-white transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              {['Menu', 'Our Story', 'Reviews', 'Catering', 'Careers', 'Gift Cards'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-orange-100/50 hover:text-orange-400 text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Hours</h4>
            <ul className="space-y-2 text-sm">
              {[
                { day: 'Mon – Thu', hours: '11am – 10pm' },
                { day: 'Fri – Sat', hours: '11am – 12am' },
                { day: 'Sunday', hours: '12pm – 9pm' },
              ].map(({ day, hours }) => (
                <li key={day} className="flex items-center gap-2 text-orange-100/50">
                  <Clock size={13} className="text-orange-500 flex-shrink-0" />
                  <span className="text-orange-100/70">{day}:</span>
                  <span>{hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Find Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2 text-orange-100/50">
                <MapPin size={14} className="text-orange-500 flex-shrink-0 mt-0.5" />
                <span>123 Crispy Lane, Flavor Town, TX 78701</span>
              </li>
              <li className="flex gap-2 text-orange-100/50">
                <Phone size={14} className="text-orange-500 flex-shrink-0 mt-0.5" />
                <a href="tel:+15551234567" className="hover:text-orange-400 transition-colors">
                  (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-orange-900/30 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-orange-100/30">
          <span>© 2024 Cluck & Crisp. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
