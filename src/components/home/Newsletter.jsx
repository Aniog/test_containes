import { useState } from 'react';
import { Mail } from 'lucide-react';

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
    <section className="py-16 md:py-20 bg-velvet-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {isSubmitted ? (
          <div className="animate-fade-in">
            <div className="w-16 h-16 bg-champagne/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-champagne-dark" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-obsidian mb-3">
              Welcome to Velmora
            </h3>
            <p className="text-velvet-700 font-sans">
              Check your inbox for your 10% off code. We can't wait to have you!
            </p>
          </div>
        ) : (
          <>
            <p className="text-xs font-sans font-semibold tracking-ultra-wide text-champagne uppercase mb-3">
              Stay Connected
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-obsidian mb-4">
              Join for 10% off your first order
            </h2>
            <p className="text-velvet-600 font-sans mb-8">
              Be the first to know about new collections, exclusive offers, and styling inspiration.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-cream border border-velvet-300 rounded text-sm font-sans text-obsidian placeholder:text-velvet-400 focus:outline-none focus:border-champagne transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-obsidian text-cream font-sans font-medium text-sm tracking-wide rounded transition-colors hover:bg-velvet-800 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-xs text-velvet-500 mt-4 font-sans">
              By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
