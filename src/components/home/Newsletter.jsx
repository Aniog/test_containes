import { useState } from 'react';
import { Mail } from 'lucide-react';

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
    <section className="bg-velvet-900 py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-serif text-2xl md:text-3xl tracking-wider text-white">
          Join for 10% Off Your First Order
        </h2>
        <p className="mt-3 text-velvet-400 text-sm font-light tracking-wide">
          New arrivals, exclusive offers, and styling inspiration — delivered with care.
        </p>

        {submitted ? (
          <p className="mt-8 text-gold font-serif text-lg tracking-wider">
            Thank you — check your inbox for your discount code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <div className="relative flex-1 max-w-md">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-velvet-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full bg-white/5 border border-velvet-700 text-white placeholder:text-velvet-500 text-sm py-3.5 pl-11 pr-4 focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <button type="submit" className="btn-primary whitespace-nowrap">
              Get 10% Off
            </button>
          </form>
        )}

        <p className="mt-4 text-[10px] text-velvet-600 tracking-wider">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
