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
    <section className="bg-gold-muted" style={{backgroundColor: '#E8D9B8', borderTop: '1px solid #EDE8DF', borderBottom: '1px solid #EDE8DF'}}>
      <div className="section-container py-16 md:py-20">
        <div className="max-w-xl mx-auto text-center">
          <p className="section-label mb-4">Join the Inner Circle</p>
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-ink mb-3">
            10% off your first order
          </h2>
          <p className="font-manrope text-sm text-ink-muted mb-8 leading-relaxed">
            Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
          </p>

          {submitted ? (
            <div className="animate-fadeIn">
              <p className="font-cormorant text-xl text-ink italic">
                Welcome to Velmora. Your code is on its way ✦
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
                className="flex-1 bg-cream border border-linen border-r-0 px-5 py-3.5 font-manrope text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-gold text-cream font-manrope text-xs tracking-widest uppercase px-6 py-3.5 hover:bg-gold-dark transition-colors flex items-center gap-2 justify-center flex-shrink-0"
              >
                Subscribe
                <ArrowRight size={13} />
              </button>
            </form>
          )}

          <p className="font-manrope text-xs text-ink-faint mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
