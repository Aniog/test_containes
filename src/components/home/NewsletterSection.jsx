import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      console.log('Newsletter signup:', email);
      setSubmitted(true);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-4">Exclusive Access</p>
          <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light text-ivory tracking-wide mb-4">
            Join for 10% Off
          </h2>
          <p className="font-inter text-sm text-ivory/60 mb-8 leading-relaxed">
            Subscribe to receive your welcome discount, early access to new collections, and styling inspiration.
          </p>

          {submitted ? (
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-px bg-gold mx-auto" />
              <p className="font-cormorant text-xl italic text-ivory">
                Thank you for joining us.
              </p>
              <p className="font-inter text-xs text-ivory/50">
                Your 10% discount code is on its way.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border border-stone/40 text-ivory placeholder-stone/50 font-inter text-sm px-5 py-3.5 focus:outline-none focus:border-gold transition-colors duration-300"
              />
              <button
                type="submit"
                className="bg-gold text-ivory font-inter text-xs uppercase tracking-[0.12em] px-6 py-3.5 flex items-center justify-center gap-2 hover:bg-gold-light transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight size={14} strokeWidth={1.5} />
              </button>
            </form>
          )}

          <p className="font-inter text-[10px] text-stone/50 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
