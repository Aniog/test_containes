import { useState } from 'react';
import { toast } from 'sonner';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Welcome to Velmora! Check your inbox for 10% off.');
      setEmail('');
    }
  };

  return (
    <section className="bg-[#1a1a1a] py-16 md:py-20">
      <div className="container-padding text-center max-w-2xl mx-auto">
        <h2 className="serif-heading text-3xl md:text-4xl text-[#faf8f5] mb-3">
          Join for 10% Off
        </h2>
        <p className="text-sm text-[#9a9490] mb-8">
          Subscribe to receive exclusive offers, early access to new collections, and styling tips.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-4 py-3 bg-transparent border border-[#2a2a2a] text-[#faf8f5] text-sm placeholder:text-[#6b6560] focus:outline-none focus:border-primary transition-colors"
            required
          />
          <button type="submit" className="btn-primary whitespace-nowrap">
            Subscribe
          </button>
        </form>
        <p className="text-xs text-[#6b6560] mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
