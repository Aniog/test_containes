import React from 'react';

const NewsletterSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-3">
            Join for 10% Off
          </h2>
          <p className="font-sans text-sm text-muted-foreground mb-8">
            Be the first to know about new collections, exclusive offers, and styling tips. Plus, get 10% off your first order.
          </p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-card border border-border text-foreground placeholder:text-muted-foreground font-sans text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-primary transition-colors"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Get 10% Off
            </button>
          </form>
          <p className="font-sans text-xs text-muted-foreground mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
