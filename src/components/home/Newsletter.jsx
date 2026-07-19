import { useState } from 'react';
import { Button } from '@/components/ui/Button';

export default function Newsletter() {
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
    <section className="py-16 md:py-20 bg-foreground text-background">
      <div className="container-padding text-center max-w-2xl mx-auto">
        <h2 className="serif-heading text-3xl md:text-4xl mb-3">
          Join for 10% Off
        </h2>
        <p className="text-background/70 mb-8">
          Subscribe to receive exclusive offers, early access to new collections, and styling inspiration.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="serif-heading text-xl text-primary">Welcome to Velmora!</p>
            <p className="text-background/60 text-sm mt-2">Check your inbox for your 10% off code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-background/30 px-4 py-3 text-sm placeholder:text-background/40 focus:outline-none focus:border-primary transition-colors"
              required
            />
            <Button variant="primary" type="submit">
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
