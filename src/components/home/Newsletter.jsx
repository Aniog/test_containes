import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsLoading(false);
    setEmail('');
  };

  return (
    <section className="py-16 md:py-24 bg-[#3D3833]">
      <div className="container-wide">
        <div className="max-w-2xl mx-auto text-center">
          {isSubmitted ? (
            <div className="animate-fade-in">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#C9A66B] flex items-center justify-center">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-3">
                Welcome to Velmora
              </h3>
              <p className="text-[#C4B8A9]">
                Check your inbox for your 10% off code.
              </p>
            </div>
          ) : (
            <>
              <p className="text-sm font-sans font-medium tracking-[0.2em] text-[#C9A66B] uppercase mb-3">
                Join the Family
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
                Get 10% Off Your First Order
              </h2>
              <p className="text-[#C4B8A9] mb-8 max-w-md mx-auto">
                Subscribe for exclusive access to new collections, styling tips, 
                and special offers.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-5 py-4 bg-[#2A2520] border border-[#4D4843] text-white placeholder-[#9A8E82] focus:outline-none focus:border-[#C9A66B] transition-colors"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-4 bg-[#C9A66B] text-white font-sans font-medium text-sm tracking-wide hover:bg-[#A68B5B] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              <p className="text-xs text-[#9A8E82] mt-4">
                By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
