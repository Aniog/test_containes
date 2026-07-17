import { Link } from 'react-router-dom'

const Journal = () => {
  const posts = [
    { 
      id: 1, 
      title: "How to Layer Necklaces", 
      excerpt: "A guide to creating effortless, dimensional looks with multiple chains.", 
      date: "July 2026",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=800&q=80"
    },
    { 
      id: 2, 
      title: "Caring for Your Gold Jewelry", 
      excerpt: "Simple rituals to keep your pieces radiant for years to come.", 
      date: "June 2026",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    },
    { 
      id: 3, 
      title: "Behind the Design: The Sphere Collection", 
      excerpt: "The story and inspiration behind our signature dome huggies.", 
      date: "May 2026",
      image: "https://images.unsplash.com/photo-1535632787350-7423ebd33c1f?w=800&q=80"
    },
  ]

  return (
    <div className="pt-20 max-w-[900px] mx-auto px-6 pb-20">
      <div className="py-12 text-center border-b border-[#E5DFD3]">
        <div className="text-xs tracking-[0.15em] uppercase text-[#6B665F] mb-2">Stories & Inspiration</div>
        <h1 className="font-serif text-5xl tracking-tight">The Journal</h1>
      </div>

      <div className="divide-y divide-[#E5DFD3] mt-4">
        {posts.map(post => (
          <article key={post.id} className="py-10 grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3">
              <div className="text-xs tracking-wider text-[#6B665F] mb-2">{post.date}</div>
              <h2 className="font-serif text-3xl tracking-tight mb-4">{post.title}</h2>
              <p className="text-[#6B665F] mb-4">{post.excerpt}</p>
              <a href="#" className="text-sm tracking-[0.08em] hover:text-[#B8976E] transition-colors">Read More →</a>
            </div>
            <div className="md:col-span-2 aspect-[16/10] bg-[#F5F2EB] overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
          </article>
        ))}
      </div>

      <div className="text-center pt-8">
        <Link to="/shop" className="btn-outline">Shop the Collection</Link>
      </div>
    </div>
  )
}

export default Journal