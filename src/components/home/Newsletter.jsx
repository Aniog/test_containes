import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

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
    <section className="py-16 md:py-24 bg-[#C8A45C]">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-white/70 font-medium mb-3">
          Newsletter
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-white font-light mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-sm text-white/70 mb-8 max-w-md mx-auto">
          Be the first to know about new collections, exclusive pieces, and
          private sales. Plus, enjoy 10% off your first purchase.
        </p>

        {submitted ? (
          <p className="text-white font-serif text-lg">
            Thank you! Check your inbox for your welcome code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex max-w-md mx-auto gap-0">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 text-sm text-[#1A1A1A] bg-white placeholder:text-[#999999] outline-none"
            />
            <button
              type="submit"
              className="bg-[#1A1A1A] text-white px-6 py-3.5 flex items-center gap-2 text-sm tracking-[0.15em] uppercase hover:bg-[#2A2A2A] transition-colors"
            >
              <span className="hidden md:inline">Subscribe</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}