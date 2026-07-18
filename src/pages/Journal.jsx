import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'

const posts = [
  {
    id: '1',
    title: 'How to Style Huggies for Every Day',
    excerpt: 'The small hoops that go from coffee runs to candlelit dinners.',
  },
  {
    id: '2',
    title: 'The Art of the Gift Box',
    excerpt: 'Why packaging matters — and how we make unboxing unforgettable.',
  },
  {
    id: '3',
    title: 'Caring for Gold-Plated Jewelry',
    excerpt: 'Simple rituals to keep your pieces shining for years.',
  },
]

export default function Journal() {
  return (
    <div className="bg-paper pt-28">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <h1 className="text-center font-serif text-4xl md:text-5xl">Journal</h1>
        <p className="mx-auto mt-4 max-w-lg text-center text-sm text-stone">
          Styling notes, care guides, and stories from behind the collection.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="border border-ink/10 p-8 transition-shadow duration-300 hover:shadow-sm"
            >
              <h2 className="font-serif text-2xl">{post.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-stone">
                {post.excerpt}
              </p>
              <Link
                to="#"
                className="mt-4 inline-block text-xs uppercase tracking-[0.2em] text-ink underline-offset-4 hover:text-gold hover:underline"
              >
                Read More
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <Link to="/shop">Shop the Collection</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
