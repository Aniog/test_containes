import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="section-padding py-16 md:py-24">
      <div className="max-w-2xl mx-auto text-center bg-velmora-beige/50 border border-velmora-border px-8 py-14 md:px-16 md:py-20">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-velmora-taupe mb-4">
          Join Velmora
        </p>
        <h2 className="heading-md text-velmora-base mb-3">
          Get 10% Off Your First Order
        </h2>
        <p className="text-velmora-taupe text-sm mb-8 max-w-sm mx-auto">
          Sign up for early access to new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-lg text-velmora-gold italic">
              Welcome to the family. Check your inbox for your discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-3 bg-white border border-velmora-border text-sm font-sans text-velmora-base placeholder:text-velmora-taupe/50 focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}