import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) return;
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section className="bg-ink">
      <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white">
          Join for 10% Off
        </h2>
        <p className="mt-3 text-sm text-warm-400 font-sans max-w-md mx-auto">
          Be the first to know about new collections, exclusive previews, and receive 10% off your first order.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto">
          <div className="flex border border-warm-700 focus-within:border-gold-500 transition-colors">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-transparent text-white px-4 py-3 text-sm placeholder-warm-500 focus:outline-none font-sans"
            />
            <button
              type="submit"
              className="px-5 py-3 bg-gold-400 text-ink hover:bg-gold-500 transition-colors"
              aria-label="Subscribe"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          {status === 'success' && (
            <p className="mt-3 text-xs text-gold-400 font-sans">
              Thanks for subscribing! Check your inbox for your 10% off code.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}