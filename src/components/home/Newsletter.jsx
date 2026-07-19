import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      console.log('Newsletter signup:', email);
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-charcoal py-20 lg:py-24">
      <div className="max-w-2xl mx-auto px-6 lg:px-10 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4 font-medium">
          Exclusive Access
        </p>
        <h2 className="font-serif text-4xl lg:text-5xl text-cream font-light mb-4">
          Join for 10% Off
        </h2>
        <p className="text-base text-cream/60 mb-10 leading-relaxed">
          Subscribe to receive your welcome discount, early access to new collections, and styling inspiration.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center">
              <span className="text-gold text-xl">✓</span>
            </div>
            <p className="font-serif text-xl text-cream">Thank you for joining.</p>
            <p className="text-sm text-cream/50">Check your inbox for your 10% discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-cream/20 text-cream placeholder-cream/30 px-5 py-4 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-white text-xs tracking-widest uppercase px-8 py-4 hover:bg-gold-light transition-colors duration-300 font-medium flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="text-[10px] text-cream/30 mt-5 tracking-wide">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
