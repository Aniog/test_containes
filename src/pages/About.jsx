import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="pt-32 pb-20 bg-velmora-cream">
      <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
        <p className="section-subtitle mb-4">Our Story</p>
        <h1 className="section-title mb-8">About Velmora</h1>
        <div className="space-y-6 text-velmora-charcoal/70 leading-relaxed font-sans">
          <p>
            Velmora was born from a simple belief: that fine jewelry should be both beautiful and accessible. Founded in 2024, we set out to bridge the gap between fast fashion and luxury — creating demi-fine pieces that are designed to be worn, loved, and passed down.
          </p>
          <p>
            Every piece is crafted in 18K gold plating over brass, using ethically sourced materials. We work directly with skilled artisans who bring decades of expertise to each design. The result is jewelry that feels substantial, looks luxurious, and lasts.
          </p>
          <p>
            We believe in quiet luxury — pieces that whisper rather than shout. Our designs are timeless, versatile, and made for the modern woman who knows her worth.
          </p>
        </div>
        <Link to="/shop" className="btn-primary mt-10 inline-flex">Explore the Collection</Link>
      </div>
    </div>
  )
}