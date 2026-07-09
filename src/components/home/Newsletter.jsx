import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

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
    <section className="bg-velmora-charcoal">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-4">
            The Velmora Letter
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-light text-white tracking-wide">
            Join for 10% off your first order
          </h2>
          <p className="mt-3 text-velmora-stone font-sans text-sm leading-relaxed">
            Early access to new collections, styling inspiration, and stories from our atelier — 
            delivered to your inbox.
          </p>

          {submitted ? (
            <p className="mt-8 text-velmora-gold font-serif text-lg italic">
              Welcome to the family. Check your inbox for your 10% code.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-5 py-3 bg-white/10 border border-white/20 text-white placeholder:text-velmora-stone font-sans text-sm focus:outline-none focus:border-velmora-gold transition-colors"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}