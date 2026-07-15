import { useState } from 'react';
import { Mail } from 'lucide-react';

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
    <section className="py-16 md:py-24 bg-charcoal">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <Mail className="w-8 h-8 text-gold mx-auto mb-4" />
        <h2 className="font-serif text-3xl md:text-4xl text-white font-light mb-3">
          Join the Velmora World
        </h2>
        <p className="text-white/60 text-sm mb-8">
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <div className="bg-white/10 border border-white/20 p-6">
            <p className="text-white font-serif text-lg">Welcome to Velmora ✦</p>
            <p className="text-white/60 text-sm mt-2">Check your inbox for your 10% discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3.5 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-gold transition-colors rounded-none"
              required
            />
            <button
              type="submit"
              className="bg-gold text-white px-6 py-3.5 uppercase tracking-widest text-xs font-medium hover:bg-gold-dark transition-colors border-none rounded-none whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
