import { useState } from 'react';

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
    <section className="py-section-mobile lg:py-section bg-charcoal">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-cream">
            Join the Velmora Circle
          </h2>
          <p className="mt-4 text-taupe">
            Subscribe and receive 10% off your first order, plus early access to new collections and exclusive offers.
          </p>

          {isSubmitted ? (
            <div className="mt-8 p-6 bg-gold/10 border border-gold/30">
              <p className="text-gold font-serif text-lg">Welcome to Velmora!</p>
              <p className="text-taupe text-sm mt-2">Check your email for your 10% discount code.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-4 bg-transparent border border-taupe/50 text-cream placeholder-taupe focus:outline-none focus:border-gold transition-colors"
                  required
                />
                <button 
                  type="submit"
                  className="bg-gold hover:bg-gold-hover text-charcoal px-8 py-4 text-sm uppercase tracking-[0.1em] font-semibold transition-colors shadow-button whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-4 text-taupe text-xs">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;