import { useState } from 'react';
import { Mail, Check } from 'lucide-react';

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
    <section className="py-20 lg:py-28 bg-velmora-gold/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="w-10 h-10 mx-auto text-velmora-gold mb-6" />
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal">
          Join the Velmora Circle
        </h2>
        <p className="mt-4 text-velmora-charcoal/70 max-w-md mx-auto">
          Subscribe to our newsletter and receive 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {isSubmitted ? (
          <div className="mt-8 flex items-center justify-center gap-2 text-velmora-gold">
            <Check className="w-5 h-5" />
            <span className="font-medium">Thank you for subscribing!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-4 bg-velmora-cream border border-velmora-sand text-velmora-charcoal placeholder:text-velmora-taupe focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-velmora-charcoal text-velmora-cream text-sm tracking-widest uppercase hover:bg-velmora-gold hover:text-velmora-charcoal transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="mt-4 text-xs text-velmora-taupe">
          By subscribing, you agree to our Privacy Policy and consent to receive updates from Velmora.
        </p>
      </div>
    </section>
  );
}