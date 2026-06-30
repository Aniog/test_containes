export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-24 bg-cream min-h-screen">
      <div className="container-narrow py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-super-wide uppercase text-gold-dark font-sans mb-4">Our Story</p>
          <h1 className="font-serif text-3xl md:text-5xl text-warm-dark tracking-wider leading-tight">
            Jewelry That Tells Your Story
          </h1>
          <div className="mt-10 space-y-6 text-warm-gray text-sm leading-relaxed font-sans">
            <p>
              Velmora was born from a belief that fine jewelry should be both beautiful and accessible. 
              Founded in 2024, we set out to bridge the gap between fast fashion and traditional luxury — 
              creating demi-fine pieces that feel precious without the inaccessible price tag.
            </p>
            <p>
              Each piece is designed in our New York atelier, crafted with 18K gold plating on ethically 
              sourced brass, and finished by hand. We work directly with skilled artisans, eliminating 
              middlemen and traditional retail markups so you get exceptional quality at a fair price.
            </p>
            <p>
              Our designs are inspired by architecture, nature, and the quiet confidence of the modern 
              woman. Every curve, every facet, every clasp is considered — because jewelry should feel 
              as good as it looks.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20 text-center">
          {[
            { title: 'Ethically Made', desc: 'All materials are responsibly sourced and our production partners meet rigorous ethical standards.' },
            { title: 'Designed to Last', desc: '18K gold plating over brass with a protective coating ensures your pieces stay beautiful for years.' },
            { title: 'Direct to You', desc: 'No wholesale, no retail markup. You get luxury quality at demi-fine prices — always.' },
          ].map((v) => (
            <div key={v.title}>
              <h3 className="font-serif text-xl tracking-wider text-warm-dark">{v.title}</h3>
              <p className="mt-3 text-sm text-warm-gray font-sans leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}