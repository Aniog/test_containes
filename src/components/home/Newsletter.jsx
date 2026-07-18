import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#2C2825] text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="serif-heading text-4xl md:text-5xl mb-4">
          Join for 10% Off
        </h2>
        <p className="text-white/70 font-light mb-8">
          Subscribe to receive exclusive offers, styling tips, and early access to new collections
        </p>
        
        {isSubmitted ? (
          <div className="bg-white/10 rounded-sm p-6">
            <p className="serif-heading text-xl">Welcome to Velmora!</p>
            <p className="text-white/70 text-sm mt-2">Check your inbox for your 10% discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#B8860B] transition-colors"
              required
            />
            <button type="submit" className="btn-primary flex items-center justify-center gap-2">
              <Send className="w-4 h-4" />
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
