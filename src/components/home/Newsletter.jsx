import React, { useState } from 'react';

const Newsletter = () => {
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
    <section className="py-20 md:py-32 bg-velmora-charcoal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Gold accent line */}
        <div className="w-16 h-px bg-velmora-gold mx-auto mb-8" />

        <h2 className="font-serif text-4xl md:text-5xl text-velmora-ivory mb-6">
          Join the Velmora Family
        </h2>

        <p className="text-velmora-warm/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Subscribe to receive exclusive offers, early access to new collections,
          and styling inspiration. Get <span className="text-velmora-gold font-medium">10% off</span> your first order.
        </p>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 bg-velmora-graphite/50 border border-velmora-graphite/50 rounded-none text-velmora-ivory placeholder-velmora-mist focus:outline-none focus:border-velmora-gold transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-velmora-gold text-white font-medium tracking-wider uppercase hover:bg-velmora-gold-dark transition-all duration-300"
              >
                Subscribe
              </button>
            </div>
          </form>
        ) : (
          <div className="max-w-md mx-auto">
            <div className="bg-velmora-gold/20 border border-velmora-gold/50 p-6 rounded-lg">
              <p className="text-velmora-ivory font-medium">
                Thank you for joining us! Check your email for your 10% discount code.
              </p>
            </div>
          </div>
        )}

        <p className="text-xs text-velmora-mist mt-6">
          By subscribing, you agree to our Privacy Policy and Terms of Service.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
