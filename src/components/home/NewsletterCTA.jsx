import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="section-padding py-20 md:py-28">
      <div className="max-w-2xl mx-auto text-center bg-sand/20 border border-sand/50 px-8 md:px-16 py-14">
        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-2xl text-charcoal mb-3">Thank You</p>
            <p className="text-taupe text-sm">Check your inbox — your 10% off code is on its way.</p>
          </div>
        ) : (
          <>
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold mb-4">Join Us</p>
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-3">
              Get 10% Off Your First Order
            </h2>
            <p className="text-taupe text-sm mb-8">
              Sign up for early access to new drops, exclusive offers, and styling inspiration.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border-b border-sand px-2 py-3 text-sm text-charcoal placeholder:text-taupe/60 focus:outline-none focus:border-charcoal transition-colors"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Sign Up
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
