import React from 'react'

const Newsletter = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white border-t border-base/5">
      <div className="max-w-3xl mx-auto p-12 lg:p-20 bg-accent/5 flex flex-col items-center text-center space-y-10">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif">Join the Inner Circle</h2>
          <p className="text-[10px] uppercase tracking-[0.4em] opacity-40">Enjoy 10% off your first treasures</p>
        </div>
        
        <form className="w-full max-w-sm flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-grow px-6 py-4 bg-white border border-base/10 text-xs uppercase tracking-widest focus:outline-none focus:border-accent transition-colors"
          />
          <button 
            type="submit" 
            className="px-8 py-4 bg-base text-white text-xs uppercase tracking-widest hover:bg-zinc-800 transition-colors"
          >
            Subscribe
          </button>
        </form>

        <p className="text-[9px] uppercase tracking-widest opacity-30 leading-relaxed">
          By signing up, you agree to our Terms of Service <br className="hidden md:block" /> and Privacy Policy.
        </p>
      </div>
    </section>
  )
}

export default Newsletter
