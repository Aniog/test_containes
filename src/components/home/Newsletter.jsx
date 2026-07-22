import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Newsletter = () => {
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
    <section className="bg-primary text-primary-foreground section-padding">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="serif-heading text-3xl md:text-4xl lg:text-5xl mb-3">
          Join for 10% Off
        </h2>
        <p className="text-white/70 text-sm mb-8 max-w-md mx-auto">
          Be the first to know about new collections, exclusive offers, and styling tips.
        </p>

        {submitted ? (
          <div className="text-accent serif-heading text-xl">
            Welcome to Velmora. Check your inbox for your discount.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-white/30 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-accent text-accent-foreground px-8 py-3 text-sm tracking-widest uppercase flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              Subscribe
              <ArrowRight size={16} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
