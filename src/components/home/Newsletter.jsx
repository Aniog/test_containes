import { useState } from 'react';
import { toast } from 'sonner';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }
    toast.success('Welcome to Velmora! Check your inbox for 10% off.');
    setEmail('');
  };

  return (
    <section className="section-padding py-16 lg:py-20 bg-foreground text-background">
      <div className="container-max max-w-2xl text-center">
        <h2 className="serif-heading text-3xl sm:text-4xl lg:text-5xl mb-3">Join the Velmora World</h2>
        <p className="text-sm text-white/60 tracking-wide mb-8">
          Get 10% off your first order, plus early access to new collections
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-5 py-3.5 text-sm tracking-wide focus:outline-none focus:border-primary transition-colors"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="bg-primary text-primary-foreground px-8 py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-opacity-90 transition-colors flex-shrink-0"
          >
            Subscribe
          </button>
        </form>

        <p className="text-[10px] text-white/40 mt-4 tracking-wide">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
