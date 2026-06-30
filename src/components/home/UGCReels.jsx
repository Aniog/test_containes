import { ugcPosts } from '../../data/products';

export default function UGCReels() {
  return (
    <section className="bg-warm-900 py-12 overflow-hidden">
      <div className="mb-8 text-center">
        <p className="text-gold-400 text-xs uppercase tracking-extra-wide mb-2">
          Community
        </p>
        <h2 className="font-serif text-2xl md:text-3xl text-white">
          Styled by You
        </h2>
      </div>

      {/* Horizontal scroll container */}
      <div className="relative">
        <div className="flex gap-4 px-4 md:px-8 overflow-x-auto hide-scrollbar pb-4 snap-x snap-mandatory">
          {ugcPosts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-48 md:w-56 snap-start"
            >
              <div className="relative aspect-[9/16] overflow-hidden group cursor-pointer">
                {/* Image */}
                <img
                  src={post.image}
                  alt={`Styled look by ${post.handle}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-warm-900/80 via-transparent to-transparent" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-white text-sm italic leading-relaxed mb-2">
                    "{post.caption}"
                  </p>
                  <p className="text-gold-300 text-xs">
                    {post.handle}
                  </p>
                </div>

                {/* Play indicator */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fade edges on mobile */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-warm-900 to-transparent pointer-events-none md:hidden" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-warm-900 to-transparent pointer-events-none md:hidden" />
      </div>

      {/* Instagram CTA */}
      <div className="text-center mt-6">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-warm-400 hover:text-gold-400 transition-colors text-sm"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
          </svg>
          Follow @velmorajewels
        </a>
      </div>
    </section>
  );
}
