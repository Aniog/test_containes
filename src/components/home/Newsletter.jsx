import { useState } from 'react';

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
    <section className="py-20 lg:py-28 bg-gold">
      <div className="max-w-content mx-auto px-6 lg:px-12 text-center">
        <h2 className="font-serif text-h2 lg:text-h3 text-white">
          Join the Velmora Circle
        </h2>
        <p className="text-white/80 font-sans mt-4 max-w-md mx-auto">
          Subscribe to receive 10% off your first order, plus exclusive access to new collections and private sales.
        </p>

        {isSubmitted ? (
          <div className="mt-8 text-white font-sans animate-fade-in">
            <p className="text-lg">Thank you for subscribing!</p>
            <p className="text-white/70 text-sm mt-2">Check your inbox for your exclusive discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-white/50 font-sans focus:outline-none focus:border-white"
                required
              />
              <button 
                type="submit"
                className="px-8 py-4 bg-white text-gold font-sans font-medium text-sm tracking-wide hover:bg-white/90 transition-colors"
              >
                SUBSCRIBE
              </button>
            </div>
            <p className="text-white/60 text-xs mt-3 font-sans">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}