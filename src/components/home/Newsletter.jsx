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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-4">Join the Velmora Family</h2>
        <div className="w-16 h-px bg-gray-300 mx-auto mb-6" />
        
        <p className="text-gray-700 mb-8">
          Sign up for exclusive access to new collections, styling tips, and enjoy 10% off your first order.
        </p>

        {isSubmitted ? (
          <div className="bg-green-50 border border-green-200 p-4 rounded">
            <p className="text-green-800">
              Thank you for joining! Check your email for your 10% discount code.
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
              className="flex-grow px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
            />
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 text-sm tracking-widest hover:bg-gray-800 transition-colors"
            >
              SUBSCRIBE
            </button>
          </form>
        )}

        <p className="text-xs text-gray-500 mt-4">
          By subscribing, you agree to our Privacy Policy and Terms of Service.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;