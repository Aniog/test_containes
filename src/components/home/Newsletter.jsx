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
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-ivory-200">
      <div className="max-w-screen-xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-3">Join the Circle</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velvet-900 mb-4">
            10% off your first order
          </h2>
          <p className="font-sans text-sm text-velvet-700 mb-8 leading-relaxed">
            Subscribe for early access to new collections, styling inspiration, and exclusive offers. No spam — ever.
          </p>

          {submitted ? (
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <ArrowRight size={16} className="text-gold" />
              </div>
              <p className="font-serif text-xl font-light text-velvet-900">
                Welcome to Velmora.
              </p>
              <p className="font-sans text-sm text-stone-warm">
                Your 10% discount code is on its way to your inbox.
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
                className="flex-1 px-5 py-4 bg-ivory-100 border border-ivory-300 font-sans text-sm text-velvet-900 placeholder:text-stone-warm focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-velvet-900 text-ivory-100 px-8 py-4 font-sans text-xs tracking-widest2 uppercase font-medium hover:bg-velvet-800 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="font-sans text-[10px] text-stone-warm mt-4 tracking-wide">
            By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
