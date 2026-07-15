import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-velmora-soft-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-white mb-4 tracking-wide">
          Join the Velmora Family
        </h2>
        <p className="font-sans text-base text-velmora-warm-gray mb-8 leading-relaxed">
          Subscribe to receive 10% off your first order, plus exclusive access to new collections
          and private sales.
        </p>

        {isSubmitted ? (
          <div className="bg-velmora-gold/20 text-velmora-gold-light px-6 py-4 inline-block">
            <p className="font-sans text-sm tracking-wide">
              Thank you for subscribing! Check your email for your discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-3 bg-transparent border border-velmora-graphite text-white placeholder-velmora-warm-gray font-sans text-sm focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-velmora-gold hover:bg-velmora-gold-dark text-white px-8 py-3 font-sans text-sm tracking-widest uppercase transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="font-sans text-xs text-velmora-warm-gray/60 mt-6">
          By subscribing, you agree to our Privacy Policy and consent to receive marketing emails.
        </p>
      </div>
    </section>
  );
}
