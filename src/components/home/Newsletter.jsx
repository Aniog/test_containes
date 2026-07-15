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
    <section className="py-20 md:py-24 bg-gold">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="text-xs uppercase tracking-widest font-sans text-velvet/60 mb-3">
          Exclusive Access
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-velvet font-light mb-3">
          Join for 10% Off
        </h2>
        <p className="font-sans text-velvet/70 text-sm mb-8 leading-relaxed">
          Subscribe to receive your welcome discount, early access to new collections, and styling inspiration.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="font-serif text-velvet text-xl italic">
              Thank you for joining Velmora.
            </p>
            <p className="text-xs uppercase tracking-widest font-sans text-velvet/60 mt-2">
              Your 10% discount is on its way.
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
              className="flex-1 bg-transparent border border-velvet/40 text-velvet placeholder-velvet/50 text-sm font-sans px-5 py-3.5 focus:outline-none focus:border-velvet transition-colors"
            />
            <button
              type="submit"
              className="bg-velvet text-ivory text-xs uppercase tracking-widest font-sans font-medium px-6 py-3.5 flex items-center justify-center gap-2 hover:bg-charcoal transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </form>
        )}

        <p className="text-[10px] text-velvet/40 font-sans mt-4 uppercase tracking-widest">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
