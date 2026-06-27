import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-velmora-charcoal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-velmora-gold text-xs font-medium tracking-editorial uppercase mb-3">
            Join the List
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-velmora-white tracking-wide mb-4">
            Get 10% off your first order
          </h2>
          <p className="text-velmora-sand/80 text-sm sm:text-base mb-8 leading-relaxed">
            Sign up for early access to new collections, styling inspiration, and exclusive offers.
          </p>

          {submitted ? (
            <div className="bg-velmora-gold/10 border border-velmora-gold/30 rounded-sm px-6 py-4">
              <p className="font-serif text-lg text-velmora-gold">Welcome to Velmora ✨</p>
              <p className="text-sm text-velmora-sand/80 mt-1">Check your inbox for your 10% off code.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-4 py-3 bg-velmora-white/10 border border-velmora-warm/40 text-velmora-white placeholder:text-velmora-muted text-sm focus:outline-none focus:border-velmora-gold transition-colors rounded-sm"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-velmora-gold text-velmora-charcoal text-xs font-semibold tracking-editorial uppercase hover:bg-velmora-gold-light transition-colors rounded-sm whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-velmora-muted text-[11px] mt-4">
            By signing up, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
}
