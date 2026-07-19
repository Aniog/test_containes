import React from "react"
import { Play } from "lucide-react"
import SectionHeading from "@/components/common/SectionHeading"
import { ugcPosts } from "@/data/products"
import { getStrkImageUrl } from "@/lib/strkImage"

export default function UgcReelSection() {
  return (
    <section id="journal" className="overflow-hidden bg-velmora-espresso px-5 py-16 text-velmora-ivory sm:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Seen in soft focus"
          title="Velmora in the wild"
          copy="A reel-style strip of ear stacks, necklace moments, and gold-hour details from our community."
        />
        <div className="mt-12 flex snap-x gap-4 overflow-x-auto pb-4 scrollbar-hide md:gap-6">
          {ugcPosts.map((post) => (
            <article key={post.id} className="group relative aspect-[9/16] w-64 shrink-0 snap-center overflow-hidden rounded-[2rem] bg-velmora-smoke shadow-glow md:w-72">
              <img
                alt={post.caption}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                data-strk-img-id={post.imageId}
                data-strk-img={`[${post.descId}] [${post.titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="520"
                src={getStrkImageUrl(post.imageId)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/80 via-velmora-espresso/10 to-transparent" />
              <div className="absolute left-5 top-5 rounded-full bg-velmora-ivory/18 p-3 text-velmora-ivory backdrop-blur-md">
                <Play className="h-4 w-4 fill-current" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p id={post.descId} className="sr-only">{post.detail}</p>
                <h3 id={post.titleId} className="font-serif text-3xl leading-none text-velmora-ivory">
                  {post.caption}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
