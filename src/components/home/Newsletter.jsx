import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log('Newsletter signup:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-espresso py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-inter text-xs uppercase tracking-widest2 text-gold mb-4">
          Exclusive Access
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ivory mb-4">
          Join for 10% Off
        </h2>
        <p className="font-inter text-sm text-ivory/60 mb-10 leading-relaxed">
          Subscribe to receive your welcome discount, early access to new collections, and styling inspiration — straight to your inbox.
        </p>

        {submitted ? (
          <div className="animate-fadeIn">
            <div className="w-10 h-px bg-gold mx-auto mb-5" />
            <p className="font-cormorant text-2xl font-light text-ivory italic">
              Thank you for joining us.
            </p>
            <p className="font-inter text-xs text-ivory/50 mt-3">
              Your 10% discount code is on its way.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-ivory/20 text-ivory placeholder-ivory/30 font-inter text-xs px-5 py-4 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-espresso font-inter text-xs uppercase tracking-widest2 px-7 py-4 hover:bg-gold-dark transition-colors flex items-center justify-center gap-2 font-medium whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={12} strokeWidth={2} />
            </button>
          </form>
        )}

        <p className="font-inter text-[10px] text-ivory/25 mt-5">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
