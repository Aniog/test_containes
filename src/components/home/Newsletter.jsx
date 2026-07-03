import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-velmora-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mb-4">
            Join the Velmora Circle
          </h2>
          <p className="text-velmora-charcoal/70 mb-6">
            Subscribe for 10% off your first order and be the first to know about new collections.
          </p>

          {submitted ? (
            <div className="py-4 text-velmora-charcoal animate-fade-in">
              <p className="font-serif text-xl">Thank you for joining!</p>
              <p className="text-sm mt-2">Check your email for your exclusive discount code.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 bg-velmora-cream text-velmora-charcoal placeholder:text-velmora-taupe focus:outline-none focus:ring-2 focus:ring-velmora-charcoal"
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-velmora-charcoal text-velmora-cream text-sm tracking-widest hover:bg-velmora-goldDark transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          )}
          
          <p className="text-xs text-velmora-charcoal/60 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
}
