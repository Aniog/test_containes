import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import useStockImages from '@/lib/useStockImages'
import StockImage from '@/components/ui/StockImage'

const POSTS = [
  {
    id: 'caring-for-gold',
    title: 'How to care for gold-plated jewelry (so it lasts)',
    excerpt:
      'The three things our artisans never do — and the once-a-month ritual that keeps your pieces luminous.',
    category: 'Care',
    readTime: '4 min',
    imageQuery: 'gold jewelry on linen soft morning light care',
    textId: 'journal-care-title',
  },
  {
    id: 'story-of-the-ear-stack',
    title: 'A short history of the ear stack',
    excerpt:
      'From ancient Sumerian gold leaves to the curated lobe of today — how the multi-earring look became a modern signature.',
    category: 'Style',
    readTime: '6 min',
    imageQuery: 'woman ear stack gold earrings editorial',
    textId: 'journal-stack-title',
  },
  {
    id: 'meet-the-atelier',
    title: 'Meet the women of the atelier',
    excerpt:
      'Five artisans, one studio in Alfama. The hands — and stories — behind every Velmora piece.',
    category: 'Atelier',
    readTime: '8 min',
    imageQuery: 'woman artisan goldsmith hands at work warm light',
    textId: 'journal-atelier-title',
  },
  {
    id: 'gifting-guide',
    title: 'The unhurried gift guide',
    excerpt:
      'A short list for the people you actually love — and one small trick to make any piece feel personal.',
    category: 'Gifting',
    readTime: '3 min',
    imageQuery: 'gold jewelry gift box with cream ribbon',
    textId: 'journal-gifting-title',
  },
]

export default function Journal() {
  const ref = useRef(null)
  useStockImages(ref, [])

  return (
    <article ref={ref}>
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 bg-cream-2 border-b border-line">
        <div className="container-x">
          <p className="eyebrow mb-4">The Journal</p>
          <h1
            id="journal-title"
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-espresso leading-[1.05] max-w-3xl"
            style={{ fontWeight: 400 }}
          >
            Slow notes on <span className="italic">gold</span>, craft, and the everyday.
          </h1>
          <p
            id="journal-subtitle"
            className="mt-6 text-base md:text-lg text-ink/80 leading-relaxed font-light max-w-xl"
          >
            A quarterly journal. Care guides, styling, and the people behind the pieces.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {POSTS.map((post, i) => (
              <article
                key={post.id}
                className={`group ${i === 0 ? 'md:col-span-2' : ''}`}
              >
                <Link
                  to={`/journal/${post.id}`}
                  className="block relative overflow-hidden bg-espresso aspect-[4/3] md:aspect-[16/9]"
                >
                  <StockImage
                    imgId={`journal-${post.id}`}
                    query={`[${post.textId}] [journal-title] [journal-subtitle] ${post.imageQuery}`}
                    ratio={i === 0 ? '16x9' : '4x3'}
                    width={1200}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out-soft group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-espresso/0 to-transparent" />
                  <span className="absolute top-4 left-4 bg-bone/90 text-espresso text-[10px] uppercase tracking-widest-2 px-2.5 py-1 font-medium">
                    {post.category}
                  </span>
                </Link>
                <div className="mt-6 max-w-2xl">
                  <h2
                    id={post.textId}
                    className="font-serif text-2xl md:text-3xl text-espresso leading-tight group-hover:text-gold transition-colors duration-300"
                    style={{ fontWeight: 400 }}
                  >
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm md:text-base text-ink/75 leading-relaxed font-light">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-widest-2 text-muted">
                    <span>{post.readTime} read</span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1 text-ink group-hover:text-gold transition-colors">
                      Read
                      <ArrowUpRight
                        className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        strokeWidth={1.5}
                      />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 md:mt-24 text-center">
            <p className="font-serif italic text-2xl md:text-3xl text-espresso">
              More soon. We write slowly.
            </p>
            <Link
              to="/shop"
              className="mt-6 inline-flex items-center gap-3 text-xs uppercase tracking-widest-2 text-ink group"
            >
              <span className="link-underline">Shop the collection</span>
              <ArrowRight
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
