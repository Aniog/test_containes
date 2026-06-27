import { useImageLoader } from "@/hooks/useImageLoader"

export default function About() {
  const containerRef = useImageLoader()

  return (
    <div ref={containerRef} className="min-h-screen bg-ivory pt-24 md:pt-32">
      <div className="mx-auto max-w-3xl px-5 pb-20 text-center md:px-8">
        <p className="text-xs uppercase tracking-[0.2em] text-gold">About Velmora</p>
        <h1 className="mt-3 font-serif text-4xl text-charcoal md:text-5xl">Jewelry for the Way You Live</h1>
        <p className="mt-6 leading-relaxed text-warm-gray">
          Velmora creates demi-fine jewelry for modern women who want luxury without the ceremony.
          Each piece is designed in-house, crafted with 18K gold-plated finishes, and finished by
          hand to ensure it feels as special as it looks.
        </p>
        <p className="mt-4 leading-relaxed text-warm-gray">
          We believe in slow, intentional design — silhouettes that outlast trends, materials that
          keep their warmth, and packaging worth unboxing.
        </p>
        <img
          data-strk-img-id="about-atelier"
          data-strk-img="[about-title] [about-body]"
          data-strk-img-ratio="3x2"
          data-strk-img-width="900"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt="Velmora atelier"
          className="mt-12 aspect-[3/2] w-full object-cover bg-linen"
          loading="lazy"
        />
      </div>
    </div>
  )
}
