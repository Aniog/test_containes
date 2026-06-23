import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { CalendarDays, User } from "lucide-react"

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const posts = [
    {
      id: 1,
      title: "How to Avoid Scams When Sourcing from Alibaba",
      excerpt: "Not all 'manufacturers' on platforms like Alibaba are real. Learn the red flags to spot trading companies posing as factories and how physical verification saves you money.",
      date: "May 15, 2026",
      author: "David Chen",
      category: "Sourcing Tips",
      image: "computer screen typing sourcing supplier ecommerce scam prevention"
    },
    {
      id: 2,
      title: "Understanding Incoterms 2020: FOB vs. EXW",
      excerpt: "Shipping terms dictate who pays for what and who bears the risk. We break down the most common Incoterms used in China sourcing, especially FOB, EXW, and DDP.",
      date: "May 02, 2026",
      author: "Sarah Lin",
      category: "Logistics",
      image: "cargo shipping port logistics containers crane"
    },
    {
      id: 3,
      title: "Why AQL Inspections are Crucial for Quality Control",
      excerpt: "Acceptable Quality Limit (AQL) is the international standard for product inspections. Discover how choosing the right AQL level protects your brand reputation.",
      date: "Apr 18, 2026",
      author: "Wei Wang",
      category: "Quality Control",
      image: "inspector quality control clipboard factory manufacturing"
    },
    {
      id: 4,
      title: "Negotiating with Chinese Suppliers: Do's and Don'ts",
      excerpt: "Cultural nuances play a huge role in business negotiations in China. Learn the concept of 'Guanxi' and how to secure better pricing without offending your supplier.",
      date: "Apr 05, 2026",
      author: "David Chen",
      category: "Business Culture",
      image: "business meeting handshake negotiation china business"
    }
  ]

  return (
    <div className="bg-white" ref={containerRef}>
      <div className="bg-blue-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Sourcing Insights</h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Expert advice, industry news, and practical guides on sourcing products from China.
            </p>
          </div>
        </div>
      </div>

      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 lg:gap-x-12">
            {posts.map((post) => (
              <article key={post.id} className="flex flex-col items-start justify-between">
                <div className="relative w-full">
                  <img
                    data-strk-img-id={`blog-post-${post.id}`}
                    data-strk-img={post.image}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <span className="flex items-center text-gray-500">
                      <CalendarDays className="mr-1.5 h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="relative z-10 rounded-full bg-blue-50 px-3 py-1.5 font-medium text-blue-600 hover:bg-blue-100">
                      {post.category}
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href="#">
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.excerpt}</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                      <User className="h-5 w-5 text-gray-500" />
                    </div>
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <a href="#">
                          <span className="absolute inset-0" />
                          {post.author}
                        </a>
                      </p>
                      <p className="text-gray-600">Sourcing Expert</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}