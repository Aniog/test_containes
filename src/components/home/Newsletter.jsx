import { useState } from 'react';
import { Mail } from 'lucide-react';

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
    <section className="bg-dark py-16 lg:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="w-8 h-8 text-accent mx-auto mb-4" />
        <h2 className="font-serif text-3xl sm:text-4xl text-dark-text mb-3">
          Join for 10% Off
        </h2>
        <div className="w-12 h-px bg-accent mx-auto mb-4" />
        <p className="text-dark-text/70 text-sm mb-8 max-w-md mx-auto">
          Subscribe to receive exclusive offers, early access to new collections, and styling tips.
        </p>

        {submitted ? (
          <div className="bg-accent/20 border border-accent/30 rounded-sm p-4">
            <p className="text-dark-text text-sm">
              Welcome to the Velmora family! Check your inbox for your 10% off code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-dark-text/10 border border-dark-text/20 text-dark-text placeholder:text-dark-text/40 px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              className="bg-accent hover:bg-accent-hover text-white px-8 py-3 text-sm tracking-widest uppercase transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
