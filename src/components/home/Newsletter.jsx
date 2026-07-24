import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
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
    <section className="py-20 md:py-28">
      <div className="max-w-[1100px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="bg-espresso text-cream p-10 md:p-16 lg:p-20 text-center">
          <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-gold mb-4">
            Join the Velmora Circle
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide mb-4">
            10% Off Your First Order
          </h2>
          <p className="text-cream/60 text-sm md:text-base mb-8 max-w-[400px] mx-auto leading-relaxed">
            Subscribe to receive early access to new collections, exclusive offers,
            and styling inspiration delivered to your inbox.
          </p>

          {submitted ? (
            <div className="text-cream/80 font-serif text-lg italic">
              Thank you! Check your inbox for your welcome code.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-[440px] mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border border-cream/20 text-cream px-5 py-3.5 text-sm placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors"
              />
              <button type="submit" className="btn-accent flex items-center gap-2">
                <Send size={14} />
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}