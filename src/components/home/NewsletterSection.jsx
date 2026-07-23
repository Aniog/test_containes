import { useState } from 'react';
import { toast } from 'sonner';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Welcome to Velmora! Check your inbox for 10% off.');
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#1A1A1A] text-[#FAF9F7]">
      <div className="container-velmora text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-4">Stay Connected</p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
          Join for 10% Off<br />Your First Order
        </h2>
        <p className="text-sm text-[#9B9590] mb-8 max-w-md mx-auto">
          Be the first to know about new collections, exclusive offers, and styling tips.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 bg-transparent border border-[#333333] text-[#FAF9F7] placeholder-[#6B6560] px-4 py-3.5 text-sm focus:outline-none focus:border-[#C9A96E] transition-colors"
            required
          />
          <button type="submit" className="btn-accent whitespace-nowrap">
            Subscribe
          </button>
        </form>

        <p className="text-[10px] text-[#6B6560] mt-4">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
