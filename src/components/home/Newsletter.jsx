import React from 'react'

export default function Newsletter() {
  return (
    <section className="py-48 bg-foreground text-background text-center px-6">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-12">
        <h2 className="font-serif text-5xl md:text-6xl text-white italic">The Inner Circle</h2>
        <p className="text-[11px] uppercase tracking-[0.3em] opacity-60">Join for 10% off your first order & exclusive previews.</p>
        
        <form 
          className="w-full max-w-md flex flex-col md:flex-row gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input 
            type="email" 
            placeholder="ENTER YOUR EMAIL" 
            className="flex-1 bg-transparent border-b border-background/30 text-background py-4 text-[10px] tracking-[0.2em] outline-none focus:border-white transition-colors placeholder:text-background/40"
          />
          <button className="bg-white text-foreground px-12 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] hover:bg-background transition-colors">
            Join
          </button>
        </form>
      </div>
    </section>
  )
}
