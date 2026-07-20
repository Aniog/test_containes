import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
        <h2 className="text-3xl font-serif mb-6 leading-tight">
          Join the Velmora Inner Circle
        </h2>
        <p className="text-background/80 font-light mb-10 max-w-lg mx-auto">
          Subscribe to receive 10% off your first order, early access to new collections, and exclusive editorial content.
        </p>
        
        {isSubmitted ? (
          <div className="bg-primary/20 text-primary py-4 px-6 inline-block font-medium tracking-wide uppercase text-sm animate-in fade-in zoom-in duration-300">
            Welcome to the list. Check your email shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address" 
              required
              className="flex-1 bg-transparent border-b border-background/30 py-3 px-2 text-background placeholder:text-background/50 focus:outline-none focus:border-primary transition-colors"
            />
            <button 
              type="submit"
              className="bg-primary text-foreground px-8 py-3 text-sm font-medium tracking-widest uppercase hover:bg-primary-dark transition-colors duration-300 sm:w-auto w-full mt-4 sm:mt-0"
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
