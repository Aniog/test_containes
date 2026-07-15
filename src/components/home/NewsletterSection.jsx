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
    <section className="py-20 md:py-28 bg-[#1A1A1A]">
      <div className="container-custom text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4 font-medium">
          Join the Velmora Circle
        </p>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-light text-[#FAF8F5] leading-tight mb-4"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          10% Off Your First Order
        </h2>
        <p className="text-[#FAF8F5]/60 text-sm max-w-md mx-auto mb-8 leading-relaxed">
          Be the first to know about new collections, exclusive offers, and styling tips.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 bg-transparent border border-[#FAF8F5]/20 text-[#FAF8F5] placeholder:text-[#FAF8F5]/30 text-sm px-5 py-3.5 focus:outline-none focus:border-primary transition-colors"
            required
          />
          <button type="submit" className="btn-primary whitespace-nowrap">
            Subscribe
          </button>
        </form>

        <p className="text-[10px] text-[#FAF8F5]/30 mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
