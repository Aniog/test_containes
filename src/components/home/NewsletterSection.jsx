import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
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
    <section className="py-20 lg:py-28 bg-[#1a1a1a]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="velmora-heading text-3xl sm:text-4xl lg:text-5xl text-[#faf8f5] mb-4">
          Join for 10% Off
        </h2>
        <p className="text-[#8a8178] mb-8">
          Your first order, on us. Plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <div className="text-[#c9a96e] velmora-heading text-xl">
            Welcome to Velmora. Check your inbox for your code.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-[#333333] text-[#faf8f5] px-4 py-3 text-sm placeholder:text-[#8a8178] focus:outline-none focus:border-[#c9a96e] transition-colors"
              required
            />
            <button type="submit" className="velmora-btn-primary flex items-center justify-center gap-2 whitespace-nowrap">
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <p className="text-xs text-[#8a8178] mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
