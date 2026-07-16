import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Newsletter = () => {
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
    <section className="py-20 md:py-28 bg-brand-warm-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white tracking-wide">
            Join for 10% Off
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4 mb-4" />
          <p className="text-sm text-gray-400 font-sans mb-8">
            Subscribe to receive exclusive access to new collections, special offers, and 10% off your first order.
          </p>

          {submitted ? (
            <div className="py-4">
              <p className="font-serif text-lg text-brand-gold">Welcome to Velmora</p>
              <p className="text-sm text-gray-400 font-sans mt-2">
                Check your inbox for your 10% discount code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border border-gray-600 text-white text-sm font-sans px-5 py-3 placeholder:text-gray-500 focus:outline-none focus:border-brand-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-brand-gold text-white text-xs tracking-ultra-wide uppercase font-sans font-medium px-8 py-3 hover:bg-brand-gold-light transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          <p className="text-[11px] text-gray-600 font-sans mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
