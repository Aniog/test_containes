import { useRef, useEffect } from 'react';
import { ugcPosts } from '@/data/products';
import JewelryImage from '@/components/JewelryImage';

export default function UGCReel() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let isDown = false;
    let startX;
    let scrollLeft;

    const onMouseDown = (e) => {
      isDown = true;
      el.classList.add('cursor-grabbing');
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };
    const onMouseLeave = () => {
      isDown = false;
      el.classList.remove('cursor-grabbing');
    };
    const onMouseUp = () => {
      isDown = false;
      el.classList.remove('cursor-grabbing');
    };
    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5;
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener('mousedown', onMouseDown);
    el.addEventListener('mouseleave', onMouseLeave);
    el.addEventListener('mouseup', onMouseUp);
    el.addEventListener('mousemove', onMouseMove);
    return () => {
      el.removeEventListener('mousedown', onMouseDown);
      el.removeEventListener('mouseleave', onMouseLeave);
      el.removeEventListener('mouseup', onMouseUp);
      el.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <section className="py-14 md:py-20 bg-velmora-cream overflow-hidden">
      <div className="section-padding mb-6 md:mb-8">
        <h2 className="font-serif text-2xl md:text-3xl font-light">@velmora</h2>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-5 md:px-10 lg:px-16 xl:px-24 pb-4 cursor-grab select-none"
      >
        {ugcPosts.map((post, idx) => (
          <div key={post.id} className="flex-shrink-0 w-[260px] md:w-[300px]">
            <div className="relative aspect-[9/16] bg-velmora-ivory rounded-sm overflow-hidden">
              <JewelryImage
                id={`ugc-${post.id}`}
                query={`[ugc-cap-${idx}]`}
                ratio="9x16"
                width={400}
                alt={post.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <p
                id={`ugc-cap-${idx}`}
                className="absolute bottom-4 left-4 right-4 font-serif text-white text-sm md:text-base italic leading-snug"
              >
                {post.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
