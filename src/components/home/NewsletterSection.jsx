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
    <section className="bg-[#1a1714] text-[#faf8f5]">
      <div className="container-padding">
        <div className="py-16 md:py-20 text-center max-w-xl mx-auto">
          <h2 className="serif-heading text-3xl md:text-4xl mb-3">Join for 10% Off</h2>
          <p className="text-sm text-[#8a8178] mb-8">
            Your first order, on us. Plus early access to new collections and exclusive offers.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-[#2a2520] text-[#faf8f5] px-4 py-3 text-sm placeholder:text-[#8a8178] focus:outline-none focus:border-[#c9a96e] transition-colors"
              required
            />
            <button type="submit" className="bg-[#c9a96e] text-[#1a1714] px-8 py-3 text-xs uppercase tracking-widest font-medium hover:bg-[#b89555] transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-[10px] text-[#8a8178] mt-4">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
