import { useState } from 'react';

export default function NewsletterSection() {
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
    <section className="bg-foreground text-background section-padding">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="serif-heading text-4xl md:text-5xl mb-3">Join the Inner Circle</h2>
        <div className="w-12 h-px bg-accent mx-auto mb-4" />
        <p className="text-muted-foreground mb-8">
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>
        {submitted ? (
          <div className="py-4">
            <p className="serif-heading text-2xl text-accent">Welcome to Velmora ✨</p>
            <p className="text-sm text-muted-foreground mt-2">Check your inbox for your discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-white/20 px-4 py-3 text-sm text-background placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
              required
            />
            <button type="submit" className="btn-accent whitespace-nowrap">
              Get 10% Off
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
