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
    <section className="py-20 lg:py-28 bg-espresso">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="font-sans text-xs tracking-widest3 uppercase text-sand mb-4">Join the Circle</p>
        <h2 className="font-serif text-4xl lg:text-5xl text-cream font-light mb-4">
          10% off your first order
        </h2>
        <p className="font-sans text-sm text-champagne/70 leading-relaxed mb-10">
          Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
        </p>

        {submitted ? (
          <div className="animate-fade-in-up">
            <p className="font-serif text-xl text-sand italic">Thank you for joining us.</p>
            <p className="font-sans text-sm text-champagne/60 mt-2">Your 10% discount code is on its way.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-sand/40 text-cream font-sans text-sm px-5 py-3.5 outline-none placeholder:text-stone focus:border-sand transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-cream font-sans text-xs tracking-widest2 uppercase px-8 py-3.5 hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap font-medium"
            >
              Subscribe <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <p className="font-sans text-xs text-stone/60 mt-5">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
