import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // Here you would typically send to your API
    }
  };

  return (
    <section className="section-padding bg-velmora-charcoal text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Heading */}
          <div>
            <h2 className="heading-lg mb-4">
              Join the Velmora Family
            </h2>
            <div className="w-16 h-px bg-velmora-gold mx-auto mb-6" />
          </div>

          {/* Offer */}
          <p className="font-serif text-2xl md:text-3xl italic text-velmora-gold-light">
            Get 10% off your first order
          </p>

          <p className="font-sans text-base text-white/80 max-w-xl mx-auto">
            Subscribe to our newsletter for exclusive access to new collections, 
            styling tips, and special offers.
          </p>

          {/* Form */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-grow px-6 py-4 bg-white/10 border border-white/20 
                             text-white placeholder:text-white/50 font-sans text-sm
                             focus:outline-none focus:border-velmora-gold transition-colors
                             backdrop-blur-sm"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="bg-velmora-gold text-white px-8 py-4 font-sans text-sm 
                             uppercase tracking-ultra-wide hover:bg-velmora-gold-dark 
                             transition-all duration-300 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </form>
          ) : (
            <div className="animate-fade-in">
              <p className="font-serif text-xl text-velmora-gold-light">
                Thank you for joining us! Check your email for your discount code.
              </p>
            </div>
          )}

          {/* Trust Note */}
          <p className="font-sans text-xs text-white/50 uppercase tracking-wider">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
