import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    console.log('Newsletter signup:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: '#1A1714' }}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-champagne/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-champagne/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-manrope text-xs uppercase tracking-widest mb-4" style={{ color: '#C9A96E' }}>
          Join the Inner Circle
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-4 leading-tight" style={{ color: '#FAF7F2' }}>
          10% off your first order
        </h2>
        <div className="w-12 h-px bg-champagne mx-auto mb-6" />
        <p className="font-manrope text-sm leading-relaxed mb-10" style={{ color: 'rgba(250,247,242,0.50)' }}>
          Subscribe for early access to new collections, exclusive offers, and styling inspiration delivered to your inbox.
        </p>

        {submitted ? (
          <div className="animate-fadeIn">
            <p className="font-cormorant text-2xl font-light italic mb-2" style={{ color: '#E8D5A3' }}>
              Welcome to Velmora ✦
            </p>
            <p className="font-manrope text-xs" style={{ color: 'rgba(250,247,242,0.50)' }}>
              Your 10% discount code is on its way to your inbox.
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
              className="flex-1 font-manrope text-sm px-5 py-4 focus:outline-none transition-colors"
              style={{
                backgroundColor: 'rgba(250,247,242,0.10)',
                border: '1px solid rgba(250,247,242,0.20)',
                color: '#FAF7F2',
              }}
            />
            <button
              type="submit"
              className="bg-champagne font-manrope text-xs uppercase tracking-widest px-6 py-4 hover:bg-champagne-dark transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
              style={{ color: '#1A1714' }}
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="font-manrope text-[10px] mt-5" style={{ color: 'rgba(250,247,242,0.25)' }}>
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
