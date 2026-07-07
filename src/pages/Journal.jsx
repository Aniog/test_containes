import { Link } from "react-router-dom"
import { Button } from "@/components/ui/Button"
import { useStrkImages } from "@/hooks/useStrkImages"
import { journalPosts as posts } from "@/data/journal"

export default function Journal() {
  const imgRef = useStrkImages([])

  return (
    <div className="pt-16 md:pt-20">
      <div className="border-b border-ink/10">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-16 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3">
            Notes
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-ink">The Journal</h1>
        </div>
      </div>

      <div ref={imgRef} className="mx-auto max-w-7xl px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden bg-sand mb-5">
                <img
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}] gold jewelry editorial`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h2 id={post.titleId} className="font-serif text-2xl text-ink leading-tight group-hover:text-gold transition-colors">
                {post.title}
              </h2>
              <p id={post.descId} className="mt-3 text-stone leading-relaxed text-sm">
                {post.excerpt}
              </p>
              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-ink border-b border-gold inline-block pb-1">
                Read More
              </p>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button as={Link} to="/shop">Shop the Collection</Button>
        </div>
      </div>
    </div>
  )
}
