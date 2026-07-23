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
    <section className="bg-[#2C2420] text-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#B8956A] mb-4">Join the Family</p>
          <h2 className="serif-heading text-3xl md:text-4xl font-light mb-4">
            10% Off Your First Order
          </h2>
          <p className="text-[#9B9590] text-sm mb-8">
            Subscribe for exclusive access to new collections, styling tips, and member-only offers.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-[#3D3430] text-[#FAF8F5] px-4 py-3 text-sm placeholder:text-[#6B6560] focus:outline-none focus:border-[#B8956A] transition-colors"
              required
            />
            <button type="submit" className="bg-[#B8956A] text-white px-8 py-3 text-sm tracking-wider uppercase hover:bg-[#A07D55] transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </form>

          <p className="text-xs text-[#6B6560] mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
