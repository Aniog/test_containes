import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // In production, this would send to your email service
    }
  };

  return (
    <section className="section-padding bg-[hsl(var(--velmora-charcoal))] text-white">
      <div className="container-responsive max-w-2xl text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
          Join the Velmora Family
        </h2>
        <p className="text-gray-400 mb-8 uppercase tracking-wider text-sm">
          Get 10% off your first order
        </p>

        {isSubmitted ? (
          <div className="space-y-4">
            <div className="w-16 h-16 bg-[hsl(var(--velmora-gold))] rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-lg">Thank you for subscribing!</p>
            <p className="text-sm text-gray-400">
              Your discount code will be sent to your email shortly.
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
              className="newsletter-input flex-1"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}

        <p className="text-xs text-gray-500 mt-6">
          By subscribing, you agree to our Privacy Policy and consent to receive marketing emails. 
          You can unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
