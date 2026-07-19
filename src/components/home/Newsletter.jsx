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
    <section className="bg-primary text-primary-foreground py-16 md:py-20">
      <div className="container-wide text-center">
        <h2 className="serif-heading text-3xl md:text-4xl mb-3">Join for 10% Off</h2>
        <p className="text-primary-foreground/60 mb-8 max-w-md mx-auto">
          Subscribe to receive exclusive offers, early access to new collections, and styling tips.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:border-accent transition-colors"
            required
          />
          <button type="submit" className="btn-accent whitespace-nowrap">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
