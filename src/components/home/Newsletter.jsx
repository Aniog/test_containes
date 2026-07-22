import React, { useState } from 'react';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Welcome to Velmora', {
        description: 'Your 10% off code has been sent to your email.',
      });
      setEmail('');
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <section className="newsletter py-16 md:py-20">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="heading-serif text-3xl md:text-4xl text-white mb-3">Join for 10% Off</h2>
        <p className="text-white/70 mb-8 text-sm tracking-wide">
          Be the first to know about new collections, styling tips, and exclusive offers.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="input flex-1"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary whitespace-nowrap disabled:opacity-70"
          >
            {isSubmitting ? 'Joining...' : 'Subscribe'}
          </button>
        </form>
        
        <p className="text-white/50 text-xs mt-4 tracking-wide">
          We respect your inbox. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
