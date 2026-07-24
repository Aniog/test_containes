import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-espresso via-night to-espresso border border-divider p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-transparent to-gold/20" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-t from-transparent to-gold/20" />

          <p className="text-xs tracking-[0.3em] uppercase text-gold font-sans font-light mb-4">
            Stay Connected
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-champagne mb-4">
            Join for 10% Off Your First Order
          </h2>
          <p className="text-sm text-champagne/50 font-sans font-light max-w-md mx-auto mb-8">
            Be the first to discover new collections, exclusive offers, and styling inspiration.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex border border-divider focus-within:border-gold/40 transition-colors duration-300">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-transparent px-4 py-3.5 text-sm text-champagne placeholder:text-muted focus:outline-none"
                required
              />
              <button
                type="submit"
                className="px-5 bg-gold hover:bg-gold-light text-velvet transition-colors duration-300 flex items-center"
                aria-label="Subscribe"
              >
                <Send size={16} strokeWidth={1.5} />
              </button>
            </div>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-sm text-gold animate-fade-in">
              Welcome to Velmora! Check your inbox for your discount code.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
