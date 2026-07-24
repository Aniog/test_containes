import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-brand-charcoal" />
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        data-strk-bg-id="newsletter-bg"
        data-strk-bg="gold jewelry texture pattern luxury background"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      <div className="relative container-narrow section-padding text-center">
        <p className="text-brand-gold text-xs tracking-widest-2xl uppercase font-medium mb-4">
          Join the Velmora Family
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-brand-ivory font-light mb-4">
          Get 10% Off Your First Order
        </h2>
        <p className="text-brand-sand/80 text-sm max-w-md mx-auto mb-8">
          Subscribe to receive exclusive offers, early access to new collections, 
          and styling tips delivered to your inbox.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="text-brand-gold font-serif text-xl italic">
              Welcome to Velmora!
            </p>
            <p className="text-brand-sand/70 text-sm mt-2">
              Check your inbox for your exclusive discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 py-3.5 bg-white/10 border border-brand-warmgray/30 text-brand-ivory placeholder:text-brand-warmgray/60 text-sm focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-brand-gold hover:bg-brand-gold-dark text-white px-8 py-3.5 text-xs tracking-widest-xl uppercase font-medium transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              Subscribe
            </button>
          </form>
        )}

        <p className="text-brand-warmgray/50 text-[11px] mt-6">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
