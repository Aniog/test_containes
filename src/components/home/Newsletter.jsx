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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-velmora-charcoal text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">
          Join for 10% Off
        </h2>
        <p className="font-sans text-lg text-velmora-taupe mb-2">
          Your First Order
        </p>
        <div className="w-16 h-px bg-velmora-gold mx-auto mb-10" />

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 bg-transparent border border-velmora-taupe/50 
                         text-white placeholder-velmora-muted
                         font-sans text-sm
                         focus:outline-none focus:border-velmora-gold
                         transition-colors duration-300"
            />
            <button
              type="submit"
              className="px-10 py-4 bg-velmora-gold text-white 
                         font-sans text-sm uppercase tracking-wider
                         hover:bg-velmora-gold-light transition-colors duration-300
                         whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="max-w-lg mx-auto">
            <div className="bg-velmora-gold/20 border border-velmora-gold/50 p-6">
              <p className="font-serif text-2xl mb-2">Thank You!</p>
              <p className="font-sans text-sm text-velmora-taupe">
                Your discount code will be sent to your email shortly.
              </p>
            </div>
          </div>
        )}

        <p className="font-sans text-xs text-velmora-muted mt-6">
          By subscribing, you agree to our Privacy Policy and consent to receive marketing emails.
        </p>
      </div>
    </section>
  );
}
