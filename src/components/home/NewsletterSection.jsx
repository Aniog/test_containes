import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="section bg-accent/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <span className="text-xs font-medium tracking-extra-wide uppercase text-accent mb-4 block">
            Stay Connected
          </span>
          
          <h2 className="font-serif text-3xl md:text-4xl text-text mb-4">
            Join the Velmora World
          </h2>
          
          <p className="text-text-muted mb-8">
            Subscribe for exclusive access to new collections, special offers, 
            and 10% off your first order.
          </p>

          {isSubmitted ? (
            <div className="py-4 animate-fade-up">
              <p className="text-lg text-text font-medium">
                Welcome to the family!
              </p>
              <p className="text-text-muted mt-2">
                Check your inbox for your 10% off code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-4 bg-white border border-border text-text text-sm focus:outline-none focus:border-accent transition-colors duration-200 placeholder:text-text-light"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-accent text-white text-sm font-medium tracking-extra-wide uppercase hover:bg-accent-dark transition-colors duration-200 whitespace-nowrap"
              >
                Get 10% Off
              </button>
            </form>
          )}

          <p className="text-xs text-text-light mt-4">
            By subscribing, you agree to receive marketing emails from Velmora.
          </p>
        </div>
      </div>
    </section>
  );
}
