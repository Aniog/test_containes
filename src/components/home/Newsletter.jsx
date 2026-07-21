import { useState } from 'react';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for joining Velmora!");
      setEmail('');
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto bg-[#F9F7F2] p-12 md:p-20 text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-4 italic">Join the Collection</h2>
        <p className="text-sm font-sans tracking-[0.1em] text-[#555555] mb-10 max-w-sm">
          Be the first to hear about new launches and receive 10% off your first order.
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col md:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Email Address" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white border border-[#E5E2DA] px-6 py-4 text-xs font-sans tracking-[0.1em] focus:outline-none focus:border-[#A68A56] transition-colors"
          />
          <button 
            type="submit"
            className="bg-[#A68A56] text-white px-10 py-4 text-xs uppercase tracking-[0.2em] font-sans font-medium hover:bg-[#8D7446] transition-colors shadow-lg shadow-[#A68A56]/10"
          >
            Join
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
