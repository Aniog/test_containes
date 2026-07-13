import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 md:py-24" style={{ backgroundColor: '#2C2825' }}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: '#C9A96E' }}>
          Join the Circle
        </p>
        <h2 className="font-serif text-4xl md:text-5xl mb-4" style={{ color: '#F5F0E8' }}>
          10% off your first order
        </h2>
        <p className="font-sans text-sm mb-10 leading-relaxed" style={{ color: '#C8C0B5' }}>
          Subscribe for early access to new collections, styling inspiration, and an exclusive welcome offer.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="font-serif text-2xl italic" style={{ color: '#C9A96E' }}>Thank you for joining.</p>
            <p className="font-sans text-sm mt-2" style={{ color: '#C8C0B5' }}>Your 10% discount code is on its way.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent font-sans text-sm px-5 py-4 focus:outline-none transition-colors duration-200"
              style={{ border: '1px solid rgba(201,169,110,0.4)', color: '#F5F0E8' }}
            />
            <button
              type="submit"
              className="font-sans text-xs font-semibold uppercase tracking-widest px-6 py-4 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
              style={{ backgroundColor: '#C9A96E', color: '#1A1714' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#DFC08A'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C9A96E'}
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <p className="font-sans text-xs mt-4" style={{ color: 'rgba(200,192,181,0.5)' }}>
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
