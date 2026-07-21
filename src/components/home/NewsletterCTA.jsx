import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterCTA() {
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
    <section className="py-20 md:py-28 bg-velmora-charcoal">
      <div className="container-site max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Join the Inner Circle</h2>
        <p className="text-white/60 text-sm mb-8">Sign up and enjoy 10% off your first order, plus early access to new collections and restocks.</p>

        {submitted ? (
          <p className="text-velmora-gold font-serif text-lg animate-fade-in">Thank you. Your code will arrive shortly.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3 bg-white/10 border border-white/15 text-white placeholder-white/30 text-sm rounded-none focus:outline-none focus:border-velmora-gold/50 transition-colors"
            />
            <button type="submit" className="btn-primary">
              <span className="flex items-center gap-2">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </form>
        )}

        <p className="text-white/25 text-[11px] mt-4">No spam — we only send the good stuff. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
