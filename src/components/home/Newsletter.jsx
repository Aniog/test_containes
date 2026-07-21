import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 md:py-32 bg-[rgb(var(--color-foreground))] text-white">
      <div className="container-velmora max-w-2xl">
        <div className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">
            Join the Velmora Family
          </h2>
          <div className="hairline w-24 mx-auto mb-6 opacity-30" />
          <p className="font-sans text-lg mb-10 text-white/70">
            Sign up for 10% off your first order. Be the first to know about new collections,
            exclusive offers, and jewelry care tips.
          </p>

          {isSubmitted ? (
            <div className="bg-white/10 p-6 border border-white/20">
              <p className="font-sans text-lg">
                Thank you for joining us! Check your email for your 10% discount code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 font-sans text-sm bg-transparent border border-white/30 focus:border-white focus:outline-none placeholder:text-white/40"
              />
              <button
                type="submit"
                className="bg-white text-[rgb(var(--color-foreground))] px-8 py-4 font-sans text-sm uppercase tracking-wider hover:bg-[rgb(var(--color-accent))] hover:text-white transition-all duration-300"
              >
                Get 10% Off
              </button>
            </form>
          )}

          <p className="font-sans text-xs text-white/40 mt-6">
            By signing up, you agree to our Privacy Policy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
