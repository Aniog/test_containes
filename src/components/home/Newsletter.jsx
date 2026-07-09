import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
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
    <section className="relative py-20 md:py-28 bg-velvet-900 overflow-hidden">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(212,160,58,0.3) 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative velmora-container">
        <div className="max-w-2xl mx-auto text-center">
          <p className="velmora-overline mb-3 text-gold-400">
            Join the Inner Circle
          </p>
          <h2 className="font-serif text-heading-2 md:text-heading-1 text-cream mb-4">
            10% Off Your First Order
          </h2>
          <p className="font-sans text-base text-velvet-300 mb-8">
            Subscribe for exclusive access to new arrivals, styling tips, and special offers.
          </p>

          {submitted ? (
            <div className="animate-fade-in">
              <p className="font-serif text-lg text-gold mb-2">Welcome to Velmora</p>
              <p className="text-sm text-velvet-300">Check your inbox for your exclusive discount code.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-velvet-800/50 border border-velvet-700 text-cream placeholder-velvet-500 px-5 py-3.5 text-sm font-sans focus:outline-none focus:border-gold/50 transition-colors"
              />
              <button
                type="submit"
                className="velmora-btn-primary flex items-center justify-center gap-2"
              >
                Subscribe
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}

          <p className="text-xs text-velvet-500 mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
