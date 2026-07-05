import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // Here you would typically send the email to your API
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal text-ivory">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Join the Velmora Family</h2>
        <p className="text-lg mb-2 font-light">Get 10% off your first order</p>
        <p className="text-sm text-stone mb-8">
          Subscribe to receive updates, access to exclusive deals, and more.
        </p>

        {isSubmitted ? (
          <div className="bg-green-900 bg-opacity-30 border border-green-700 p-4 rounded">
            <p className="text-green-300">Thank you for subscribing! Check your email for your discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-3 bg-transparent border border-stone text-ivory placeholder-stone focus:outline-none focus:border-gold transition-colors"
            />
            <button 
              type="submit"
              className="bg-gold hover:bg-gold-dark text-white px-8 py-3 text-sm tracking-wider uppercase transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-xs text-stone mt-4">
          By subscribing, you agree to our Privacy Policy and consent to receive updates from Velmora.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;