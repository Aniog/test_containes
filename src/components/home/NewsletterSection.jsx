import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log('[Newsletter] Subscribing:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-20 lg:py-24" style={{ backgroundColor: '#1A1714' }}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-manrope text-xs tracking-[0.2em] uppercase mb-4" style={{ color: '#C9A96E' }}>Exclusive Access</p>
        <h2 className="font-cormorant text-4xl lg:text-5xl font-light leading-tight" style={{ color: '#FAF7F2' }}>
          Join for 10% off<br />
          <em className="italic">your first order</em>
        </h2>
        <p className="font-manrope text-sm mt-4 leading-relaxed" style={{ color: '#8C7B6B' }}>
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="mt-10 animate-fadeIn">
            <p className="font-cormorant text-2xl italic" style={{ color: '#C9A96E' }}>Thank you for joining us.</p>
            <p className="font-manrope text-sm mt-2" style={{ color: '#8C7B6B' }}>Your 10% discount code is on its way to your inbox.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 font-manrope text-sm px-5 py-4 focus:outline-none transition-colors duration-200"
              style={{
                backgroundColor: '#2E261E',
                border: '1px solid #4A3F35',
                color: '#FAF7F2',
              }}
            />
            <button
              type="submit"
              className="font-manrope text-xs tracking-wider uppercase px-8 py-4 transition-colors duration-200 font-medium flex items-center justify-center gap-2 whitespace-nowrap"
              style={{ backgroundColor: '#C9A96E', color: '#1A1714' }}
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="font-manrope text-xs mt-4" style={{ color: '#4A3F35' }}>
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
