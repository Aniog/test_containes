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
    <section className="bg-[#1a1714] py-16 md:py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="serif-heading text-3xl md:text-4xl text-[#e8e2d9] mb-3">
          Join for 10% Off
        </h2>
        <p className="text-[#a8a29e] text-sm mb-8">
          Your first order, on us. Plus early access to new collections.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 bg-transparent border border-[#2a2520] text-[#e8e2d9] px-5 py-3 text-sm placeholder:text-[#6b6560] focus:outline-none focus:border-primary transition-colors"
            required
          />
          <button
            type="submit"
            className="bg-primary text-primary-foreground px-8 py-3 text-sm tracking-widest uppercase hover:bg-opacity-90 transition-all duration-300 whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
