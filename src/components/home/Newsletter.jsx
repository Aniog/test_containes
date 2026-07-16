import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-velvet-950 py-20 md:py-24">
      <div className="max-w-xl mx-auto text-center px-6">
        {submitted ? (
          <div className="animate-fade-in">
            <h2 className="font-serif text-2xl md:text-3xl text-cream mb-4">Thank You</h2>
            <p className="font-sans text-sm text-warmgray-400">
              Check your inbox for your 10% welcome discount.
            </p>
          </div>
        ) : (
          <>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-sand-400 mb-4">The Velmora Edit</p>
            <h2 className="font-serif text-2xl md:text-3xl text-cream mb-3">
              Join for 10% off your first order
            </h2>
            <p className="font-sans text-sm text-warmgray-400 mb-8">
              Early access to new collections, exclusive offers, and styling inspiration.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-0 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-4 py-3 bg-transparent border border-warmgray-700 text-cream text-sm placeholder:text-warmgray-500 focus:outline-none focus:border-warmgray-400 transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-cream text-noir hover:bg-sand-200 transition-colors flex items-center justify-center"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}