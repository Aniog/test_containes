import { Link } from 'react-router-dom'

export default function JournalPage() {
  return (
    <div className="pt-24 md:pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <h1 className="font-serif text-4xl md:text-5xl tracking-[0.05em] text-stone-900">
          The Journal
        </h1>
        <div className="w-12 h-px bg-gold mx-auto mt-4 mb-8" />
        <p className="text-sm md:text-base text-stone-500 font-sans leading-relaxed max-w-md mx-auto mb-10">
          Stories, styling guides, and behind-the-scenes looks at the world of Velmora. Coming soon.
        </p>
        <Link
          to="/shop"
          className="inline-block border border-gold text-gold hover:bg-gold hover:text-white text-xs tracking-[0.15em] uppercase font-sans font-medium px-8 py-3 transition-all duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </div>
  )
}
