import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // In production, this would connect to a newsletter service
      console.log('Newsletter signup:', email);
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-velmora-cream">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">
          Join for 10% Off
        </h2>
        <p className="text-velmora-gray-600 mb-8 text-lg">
          Subscribe to our newsletter and receive exclusive access to new collections,
          styling tips, and a special discount on your first order.
        </p>

        {isSubmitted ? (
          <div className="bg-green-50 border border-green-200 p-6">
            <p className="text-green-800 font-medium">
              Thank you for subscribing! Check your email for your 10% discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 border border-velmora-gray-300 focus:outline-none focus:border-velmora-black text-base"
              required
            />
            <button
              type="submit"
              className="btn-premium btn-premium-solid whitespace-nowrap"
            >
              Get 10% Off
            </button>
          </form>
        )}

        <p className="text-sm text-velmora-gray-400 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
