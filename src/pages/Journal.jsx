import { motion } from 'framer-motion'

const posts = [
  {
    id: 1,
    title: 'How to Layer Necklaces Like an Editor',
    excerpt: 'The simple rules we follow for effortless, tangle-free layering.',
  },
  {
    id: 2,
    title: 'The Complete Guide to Jewelry Care',
    excerpt: 'Keep your gold-plated pieces shining for years to come.',
  },
  {
    id: 3,
    title: '5 Pieces That Make the Perfect Gift',
    excerpt: 'Thoughtful demi-fine jewelry for every woman on your list.',
  },
]

export default function Journal() {
  return (
    <div className="bg-velmora-cream pt-28 md:pt-36 pb-20 md:pb-32 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-14">
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-deep">
            Journal
          </h1>
          <p className="mt-4 text-velmora-taupe">Style notes, care tips, and stories.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-velmora-ivory p-8 hover:shadow-product transition-shadow duration-300"
            >
              <p className="text-xs uppercase tracking-widest-xl text-velmora-gold font-medium mb-4">
                Style
              </p>
              <h2 className="font-serif text-2xl text-velmora-deep">
                {post.title}
              </h2>
              <p className="mt-3 text-velmora-taupe text-sm leading-relaxed">
                {post.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}
