import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="section-padding bg-deep-brown">
      <div className="max-w-2xl mx-auto container-px text-center">
        <p className="text-overline text-gold-pale mb-4">Join the Velmora Circle</p>
        <h2 className="font-serif text-display-sm md:text-[3rem] text-white mb-4">
          Get 10% Off Your First Order
        </h2>
        <p className="font-sans text-body text-white/60 mb-8 max-w-md mx-auto">
          Be the first to discover new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="font-sans text-body-lg text-gold-light">
              Welcome to the Velmora Circle.
            </p>
            <p className="font-sans text-caption text-white/50 mt-2">
              Check your inbox for your 10% off code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 font-sans text-body py-3.5 px-5 focus:outline-none focus:border-gold transition-colors"
            />
            <button type="submit" className="btn-primary flex items-center justify-center gap-2">
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <p className="font-sans text-[11px] text-white/30 mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
