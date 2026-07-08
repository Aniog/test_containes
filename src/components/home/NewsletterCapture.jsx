import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterCapture() {
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
    <section className="py-20 md:py-24 bg-velmora-charcoal">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-sans text-[10px] tracking-widest3 uppercase text-velmora-gold mb-4">Exclusive Access</p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-ivory mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="font-sans text-sm text-velmora-sand leading-relaxed mb-10">
          Be the first to know about new collections, restocks, and members-only offers.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="font-serif text-lg italic text-velmora-gold">Thank you for joining us. ✦</p>
            <p className="font-sans text-xs text-velmora-sand mt-2">Check your inbox for your welcome gift.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-velmora-stone text-velmora-ivory placeholder-velmora-stone font-sans text-sm px-5 py-3.5 focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-velmora-black font-sans text-xs tracking-widest uppercase px-6 py-3.5 flex items-center justify-center gap-2 hover:bg-velmora-gold-light transition-colors flex-shrink-0"
            >
              Subscribe
              <ArrowRight size={13} strokeWidth={1.5} />
            </button>
          </form>
        )}

        <p className="font-sans text-[10px] text-velmora-stone mt-5">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
