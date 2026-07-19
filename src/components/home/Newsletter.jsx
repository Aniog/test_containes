import React, { useState } from 'react';
import { toast } from 'sonner';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Welcome to Velmora! Your discount code is on the way.');
        setEmail('');
    };

    return (
        <section className="py-24 bg-velmora-black text-white px-4 md:px-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <h2 id="news-title" className="text-3xl md:text-4xl font-serif">Join the Inner Circle</h2>
                <p id="news-desc" className="text-white/60 text-xs uppercase tracking-widest max-w-md mx-auto leading-relaxed">
                    Be the first to shop new collections and enjoy 10% off your first order.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto mt-10">
                    <input
                        type="email"
                        placeholder="EMAIL ADDRESS"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 bg-transparent border border-white/20 px-6 py-4 text-xs tracking-widest outline-none focus:border-white transition-colors"
                    />
                    <button
                        type="submit"
                        className="bg-white text-velmora-black px-10 py-4 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-velmora-sand transition-colors"
                    >
                        Join
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
