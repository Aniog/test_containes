import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-velmora-sand">
      <div className="section-container py-20 md:py-24">
        <div className="max-w-xl mx-auto text-center space-y-6">
          <p className="label-ui text-velmora-gold">Exclusive Access</p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-velmora-obsidian leading-tight">
            Join for 10% off<br />your first order
          </h2>
          <p className="font-inter text-sm text-velmora-text-secondary leading-relaxed">
            Be the first to know about new arrivals, exclusive offers, and styling inspiration. Unsubscribe anytime.
          </p>

          {submitted ? (
            <div className="py-4">
              <p className="font-cormorant text-2xl text-velmora-obsidian italic">
                Welcome to Velmora ✦
              </p>
              <p className="font-inter text-sm text-velmora-text-muted mt-2">
                Your 10% discount code is on its way to your inbox.
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
                className="flex-1 px-5 py-3.5 bg-velmora-cream border border-velmora-stone/30 font-inter text-sm text-velmora-obsidian placeholder:text-velmora-text-muted focus:outline-none focus:border-velmora-gold transition-colors"
              />
              <button
                type="submit"
                className="btn-primary flex items-center justify-center gap-2 sm:px-6"
              >
                <span>Subscribe</span>
                <ArrowRight size={14} strokeWidth={1.5} />
              </button>
            </form>
          )}

          <p className="font-inter text-[11px] text-velmora-text-muted">
            By subscribing you agree to our Privacy Policy. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  );
}
