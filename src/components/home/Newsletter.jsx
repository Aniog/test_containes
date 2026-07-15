import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
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
    <section className="bg-espresso py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-widest text-gold font-sans mb-4">Exclusive Access</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-ivory mb-4">
            Join for 10% Off Your First Order
          </h2>
          <p className="text-sm text-ivory/50 font-sans leading-relaxed mb-8">
            Be the first to know about new collections, exclusive offers, and styling inspiration. No spam, ever.
          </p>

          {submitted ? (
            <div className="py-4">
              <p className="font-serif text-xl text-gold italic">Thank you for joining us.</p>
              <p className="text-xs text-ivory/50 font-sans mt-2">Your 10% discount code is on its way.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border border-ivory/20 text-ivory placeholder-ivory/30 px-5 py-3.5 text-xs font-sans focus:outline-none focus:border-gold transition-colors duration-300"
              />
              <button
                type="submit"
                className="bg-gold text-espresso px-6 py-3.5 text-xs uppercase tracking-widest font-sans font-medium hover:bg-gold-dark transition-colors duration-300 flex items-center justify-center gap-2 flex-shrink-0"
              >
                Subscribe
                <ArrowRight size={12} />
              </button>
            </form>
          )}

          <p className="text-[10px] text-ivory/25 font-sans mt-4">
            By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
