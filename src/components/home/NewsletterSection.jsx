import { useState } from 'react';
import { toast } from 'sonner';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Welcome to Velmora! Check your inbox for 10% off.');
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-20 bg-foreground text-background">
      <div className="container-padding text-center">
        <h2 className="serif-heading text-3xl md:text-4xl font-light mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-background/60 text-sm mb-8 max-w-md mx-auto">
          Be the first to know about new collections, exclusive offers, and styling tips.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-4 py-3 bg-transparent border border-background/20 text-sm text-background placeholder:text-background/40 focus:outline-none focus:border-background/40 transition-colors"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-background text-foreground text-sm tracking-widest uppercase hover:bg-background/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
