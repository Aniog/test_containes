import React, { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-velmora-charcoal text-white">
      <div className="max-w-4xl mx-auto text-center">
        <Mail size={48} className="mx-auto mb-6 text-velmora-gold" />

        <h2 className="text-4xl md:text-5xl font-serif mb-4">
          Join the Velmora Family
        </h2>

        <p className="text-lg text-white/80 mb-2">
          Sign up for our newsletter and receive
        </p>

        <p className="text-2xl font-serif text-velmora-gold mb-8">
          10% off your first order
        </p>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-velmora-gold transition-colors duration-300"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-velmora-gold hover:bg-velmora-gold-dark text-white px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
                <ArrowRight size={16} />
              </button>
            </div>
            <p className="text-sm text-white/60 mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive marketing emails.
            </p>
          </form>
        ) : (
          <div className="max-w-md mx-auto">
            <div className="bg-velmora-gold/20 border border-velmora-gold/50 p-6 rounded-sm">
              <p className="text-lg font-serif">
                Thank you for joining us! ✨
              </p>
              <p className="text-white/80 mt-2">
                Your 10% discount code will be sent to your email shortly.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
