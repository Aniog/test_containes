import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-charcoal rounded-2xl overflow-hidden">
          <div className="relative px-6 py-16 sm:py-20 lg:py-24 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#B8965E15_0%,_transparent_70%)]" />
            <div className="relative z-10 max-w-lg mx-auto">
              <p className="text-xs text-gold-light tracking-widest uppercase mb-4 font-sans">
                Join the Velmora Circle
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-wide mb-4">
                Unlock 10% Off
              </h2>
              <p className="text-taupe text-sm mb-8 leading-relaxed">
                Join for 10% off your first order, plus early access to new
                collections and exclusive member-only offers.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 bg-white/10 border border-white/20 rounded px-4 py-3 text-sm text-white placeholder:text-taupe focus:outline-none focus:border-gold transition-colors"
                />
                <button
                  type="submit"
                  className="bg-gold hover:bg-gold-deep text-white text-sm font-medium tracking-wider uppercase px-8 py-3 rounded transition-colors duration-300 whitespace-nowrap"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}