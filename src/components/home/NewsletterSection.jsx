import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
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
    <section className="py-20 md:py-28 bg-[#c9a96e]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#1a1714]/60 mb-3">
            Join the Circle
          </p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light text-[#1a1714] mb-4">
            10% Off Your First Order
          </h2>
          <p className="font-sans text-sm text-[#1a1714]/70 mb-8 leading-relaxed">
            Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
          </p>

          {submitted ? (
            <div className="py-4">
              <p className="font-serif text-xl italic text-[#1a1714]">
                Welcome to Velmora. ✦
              </p>
              <p className="font-sans text-sm text-[#1a1714]/70 mt-2">
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
                className="flex-1 px-5 py-3.5 bg-[#1a1714] text-[#e8d5b0] placeholder-[#7a6f66] font-sans text-sm border-0 outline-none focus:ring-1 focus:ring-[#e8d5b0]/30"
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-[#1a1714] text-[#c9a96e] font-sans text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#2c2825] transition-colors duration-300 flex items-center justify-center gap-2 border-l border-[#2c2825]"
              >
                Subscribe
                <ArrowRight size={14} strokeWidth={1.5} />
              </button>
            </form>
          )}

          <p className="font-sans text-[11px] text-[#1a1714]/50 mt-4">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
