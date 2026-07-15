import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
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
    <section className="py-16 md:py-24 bg-blush">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.16em] text-gold font-medium mb-3">
            The Velmora Circle
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-base mb-4">
            Join for 10% Off
          </h2>
          <p className="text-muted mb-8 md:mb-10">
            Be the first to know about new drops, styling notes, and member-only
            offers. Your first order ships with 10% off.
          </p>

          {submitted ? (
            <div className="bg-ivory p-6 md:p-8">
              <p className="font-serif text-xl text-base mb-2">Welcome to Velmora</p>
              <p className="text-sm text-muted">
                Check your inbox for your exclusive 10% off code.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-ivory border border-linen px-5 py-3.5 text-sm placeholder:text-muted/60 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-base text-ivory px-6 py-3.5 text-xs uppercase tracking-[0.16em] font-medium hover:bg-base-soft transition-colors inline-flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight size={14} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
