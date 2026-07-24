import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // Here you would typically send the email to your backend
      console.log('Newsletter subscription:', email);
    }
  };
  
  return (
    <section className="section-padding bg-gradient-to-br from-gold-500 to-gold-600">
      <div className="container-wide">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-cream-50/20 rounded-full mb-6">
            <Mail className="w-8 h-8 text-cream-50" />
          </div>
          
          <h2 className="text-heading text-cream-50 mb-4">
            Join for 10% off your first order
          </h2>
          <p className="font-sans text-body text-cream-100 mb-8">
            Subscribe to our newsletter for exclusive offers, new arrivals, and styling tips.
          </p>
          
          {isSubscribed ? (
            <div className="bg-cream-50/20 rounded-lg p-6">
              <p className="font-sans text-lg text-cream-50">
                Thank you for subscribing! Check your email for your discount code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md bg-cream-50/20 border border-cream-50/30 text-cream-50 placeholder-cream-200 focus:outline-none focus:ring-2 focus:ring-cream-50/50"
                required
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-cream-50 text-gold-600 rounded-md font-sans text-sm font-medium uppercase tracking-wider hover:bg-cream-100 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
          
          <p className="font-sans text-xs text-cream-200/70 mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
