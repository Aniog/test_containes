import { Link } from "react-router-dom"
import { scenes } from "../data/scenery.js"
import { ArrowRightIcon } from "../components/ui/Icons.jsx"

const entries = [
  {
    id: "how-we-plate",
    eyebrow: "Atelier Notes",
    title: "How we plate our 18K gold",
    excerpt: "A short film on the three-bath process that gives Velmora pieces their warm, lasting glow.",
    image: scenes.hero,
    date: "May 2026",
    readTime: "4 min",
  },
  {
    id: "five-ways-huggies",
    eyebrow: "Styling",
    title: "Five ways to wear the Golden Sphere huggies",
    excerpt: "From the office to a dinner that runs long, the huggies that go everywhere with you.",
    image: scenes.ugc2,
    date: "April 2026",
    readTime: "3 min",
  },
  {
    id: "gifts-by-her",
    eyebrow: "Gifting",
    title: "Gifts, by her, in three price points",
    excerpt: "A small edit for the people you remember everything by — under $50, under $100, and the heirloom set.",
    image: scenes.ugc5,
    date: "March 2026",
    readTime: "5 min",
  },
  {
    id: "caring-for-gold",
    eyebrow: "Care",
    title: "The case for keeping your gold in the dark",
    excerpt: "Why we include a velvet pouch with every order, and how to make a Velmora piece last a decade.",
    image: scenes.story,
    date: "February 2026",
    readTime: "3 min",
  },
]

export default function Journal() {
  return (
    <div className="bg-ivory pt-24 md:pt-28 pb-24">
      <div className="mx-auto max-w-editorial px-6 md:px-10 lg:px-16">
        <div className="max-w-2xl pb-12 md:pb-16">
          <p className="eyebrow">The Velmora Journal</p>
          <h1 className="display-serif text-[44px] md:text-[64px] mt-3 leading-[1.05]">
            Stories, slowly told.
          </h1>
          <p className="mt-4 text-[15px] text-ink/75 font-light max-w-md">
            Notes from the atelier, the art of layering, and the small
            reasons we make what we make.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {entries.map((entry, i) => (
            <article
              key={entry.id}
              className={`group ${i === 0 ? "md:col-span-2" : ""}`}
            >
              <Link to="#" className="block">
                <div className={`relative overflow-hidden bg-ivory-soft ${i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                  <img
                    src={entry.image}
                    alt={entry.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="pt-6">
                  <p className="eyebrow">{entry.eyebrow}</p>
                  <h2 className={`mt-2 display-serif leading-[1.1] ${i === 0 ? "text-[36px] md:text-[48px]" : "text-[26px] md:text-[30px]"} text-ink`}>
                    {entry.title}
                  </h2>
                  <p className="mt-3 text-[14px] text-ink/75 font-light max-w-prose">
                    {entry.excerpt}
                  </p>
                  <p className="mt-4 text-[10px] tracking-eyebrow uppercase text-muted inline-flex items-center gap-2">
                    {entry.date} · {entry.readTime} read
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
