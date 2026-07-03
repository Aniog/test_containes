import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-velmora-deep">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wider text-white mb-4">
            Join the Velmora Family
          </h2>
          <div className="w-16 h-[1px] bg-velmora-gold mx-auto mb-6" />
          <p className="font-sans text-base leading-relaxed text-white/80 mb-10">
            Sign up for our newsletter and receive 10% off your first order.
            Be the first to know about new collections, exclusive offers, and jewelry care tips.
          </p>

          {isSubmitted ? (
            <div className="bg-velmora-gold/20 text-white px-6 py-4 inline-block">
              Thank you for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-velmora-gold transition-colors duration-300"
              />
              <button
                type="submit"
                className="bg-velmora-gold hover:bg-velmora-gold-hover text-white px-8 py-3 tracking-[0.2em] text-sm uppercase transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
