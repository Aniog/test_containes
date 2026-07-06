import { useImageLoader } from "@/hooks/useImageLoader";
import { ugcPosts } from "@/data/testimonials";

export function UGCReel() {
  const containerRef = useImageLoader();

  return (
    <section ref={containerRef} className="bg-cream py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <p className="mb-2 text-center text-[10px] uppercase tracking-[0.25em] text-gold">
          @velmorajewelry
        </p>
        <h2 className="mb-10 text-center font-serif text-3xl md:text-4xl">
          Styled by You
        </h2>
      </div>

      <div className="relative">
        <div className="flex gap-4 overflow-x-auto px-4 pb-4 scrollbar-hide md:gap-5 md:px-6 lg:px-8">
          {ugcPosts.map((post, idx) => (
            <div
              key={post.id}
              className="relative h-[360px] w-[200px] flex-shrink-0 overflow-hidden bg-linen md:h-[440px] md:w-[250px]"
            >
              <img
                data-strk-img-id={post.id}
                data-strk-img={`[${post.captionId}] gold jewelry ear neck`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`Customer photo ${idx + 1}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-cream">
                <p id={post.captionId} className="font-serif text-lg italic leading-snug">
                  {post.caption}
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-widest text-cream/80">
                  {post.handle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
