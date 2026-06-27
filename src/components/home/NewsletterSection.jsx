import React, { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1000);
  };
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-velmora-black text-velmora-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Mail className="w-12 h-12 text-velmora-gold mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl mb-4">
            Join the Velmora Circle
          </h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto mb-6"></div>
          <p className="text-velmora-warm-gray text-lg max-w-2xl mx-auto">
            Subscribe for exclusive access to new collections, styling inspiration, 
            and <span className="text-velmora-gold font-medium">10% off your first order</span>.
          </p>
        </div>
        
        {isSubmitted ? (
          <div className="fade-in">
            <div className="bg-velmora-charcoal rounded-sm p-8 max-w-md mx-auto">
              <h3 className="font-serif text-2xl mb-2 text-velmora-gold">
                Welcome to Velmora
              </h3>
              <p className="text-velmora-warm-gray">
                Thank you for joining us! Check your inbox for your 10% discount code.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 bg-velmora-charcoal border border-velmora-warm-gray/30 
                         text-velmora-white placeholder:text-velmora-warm-gray/60
                         focus:outline-none focus:border-velmora-gold transition-colors"
                aria-label="Email address"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="btn-gold inline-flex items-center justify-center space-x-2 
                         disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isLoading ? 'Subscribing...' : 'Get 10% Off'}</span>
                {!isLoading && <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-xs text-velmora-warm-gray/60 mt-4">
              By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
