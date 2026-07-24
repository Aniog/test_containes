import { useState } from 'react';
import { Mail } from 'lucide-react';

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
    <section className="bg-[var(--velmora-dark)] text-[var(--velmora-cream)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <Mail size={32} className="mx-auto mb-6 text-[var(--velmora-gold)]" strokeWidth={1.5} />
        <h2 className="serif-heading text-3xl md:text-4xl mb-4">
          Join for 10% Off
        </h2>
        <p className="text-[var(--velmora-warm-gray)] mb-8 max-w-md mx-auto">
          Be the first to know about new collections, exclusive offers, and styling tips.
        </p>

        {submitted ? (
          <div className="text-[var(--velmora-gold)] serif-heading text-xl">
            Welcome to Velmora! Check your inbox for your discount code.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-[var(--velmora-warm-gray)] text-sm focus:outline-none focus:border-[var(--velmora-gold)] transition-colors"
              required
            />
            <button type="submit" className="btn-accent whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
