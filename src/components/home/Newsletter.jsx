import { useState } from 'react';
import Button from '../ui/Button';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) return;
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section className="bg-foreground py-20 md:py-24">
      <div className="max-w-8xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white">
            Join for <span className="text-[#E8D48B]">10% Off</span>
          </h2>
          <p className="text-stone-light text-sm md:text-base mt-3">
            Be the first to know about new collections, exclusive drops, and insider access. Plus, enjoy 10% off your first order.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3 bg-white/10 border border-white/20 text-white text-sm rounded-none placeholder:text-stone-light focus:outline-none focus:border-accent transition-colors"
            />
            <Button
              type="submit"
              variant="primary"
              className="bg-accent hover:bg-[#B8943B] text-white whitespace-nowrap"
            >
              Subscribe
            </Button>
          </form>

          {status === 'success' && (
            <p className="text-[#E8D48B] text-sm mt-4 animate-fade-in">
              Thank you! Check your inbox for your 10% off code.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}