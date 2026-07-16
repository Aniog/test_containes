import React from 'react';
import { Form, Info } from 'lucide-react'; // Placeholder icons if needed later
import { Link } from 'react-router-dom';

const Newsletter = () => {
    return (
        <section className="bg-velmora-stone py-24 md:py-32 border-t border-border/50">
            <div className="container mx-auto px-4 max-w-xl text-center">
                <h2 className="font-serif text-4xl text-velmora-charcoal mb-4">
                    Join the Inner Circle
                </h2>
                <p className="text-velmora-charcoal/70 mb-8 max-w-md mx-auto">
                    Sign up to receive 10% off your first order, early access to new collections, and styling inspiration.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative group">
                    <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="flex-1 bg-transparent border-b border-velmora-charcoal/30 py-3 px-2 text-velmora-charcoal placeholder:text-velmora-charcoal/50 focus:outline-none focus:border-velmora-charcoal transition-colors rounded-none"
                        required
                    />
                    <button 
                        type="submit" 
                        className="bg-velmora-charcoal text-white uppercase tracking-widest text-sm px-8 py-3 sm:py-0 hover:bg-velmora-charcoal/90 transition-colors"
                    >
                        Subscribe
                    </button>
                </form>
                <p className="text-xs text-velmora-charcoal/50 mt-6 tracking-wide uppercase">
                    By subscribing you agree to our <Link to="/terms" className="underline hover:text-velmora-gold">Terms</Link> & <Link to="/privacy" className="underline hover:text-velmora-gold">Privacy Policy</Link>.
                </p>
            </div>
        </section>
    );
};

export default Newsletter;