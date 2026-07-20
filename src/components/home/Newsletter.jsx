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
    <section className="bg-primary text-primary-foreground py-16 lg:py-20">
      <div className="section-padding">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="serif-heading text-3xl lg:text-4xl mb-4">Join for 10% Off</h2>
          <p className="text-primary-foreground/70 mb-8 text-sm leading-relaxed">
            Be the first to know about new collections, exclusive offers, and styling tips.
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
            <button
              type="submit"
              className="bg-accent text-accent-foreground px-8 py-3 text-sm tracking-widest uppercase hover:bg-primary-foreground hover:text-primary transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-primary-foreground/40 mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
