import { ugcPosts } from '../../data/products';

export default function UGCStrip() {
  return (
    <section className="py-16 bg-[#FAF7F2]">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-sans font-medium tracking-[0.2em] text-[#C9A66B] uppercase mb-3">
            Real Women, Real Style
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#3D3833]">
            Styled by You
          </h2>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ width: 'max-content' }}>
          {ugcPosts.map(post => (
            <div
              key={post.id}
              className="relative flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <img
                src={post.image}
                alt={`Styled by ${post.username}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A2520]/80 via-transparent to-transparent" />

              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-lg text-white mb-1">
                  {post.caption}
                </p>
                <p className="text-xs text-[#C4B8A9]">
                  {post.username}
                </p>
              </div>

              {/* Instagram-style corner accent */}
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-white/40" />
            </div>
          ))}

          {/* "See More" Card */}
          <div className="relative flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] bg-[#F5F1EB] flex flex-col items-center justify-center overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-[#C9A66B]/10 group-hover:bg-[#C9A66B]/20 transition-colors" />
            <div className="relative text-center p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full border-2 border-[#C9A66B] flex items-center justify-center">
                <span className="text-[#C9A66B] text-xl">+</span>
              </div>
              <p className="font-serif text-lg text-[#3D3833] mb-1">
                Share Your Style
              </p>
              <p className="text-xs text-[#9A8E82]">
                Tag @velmorajewelry
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
