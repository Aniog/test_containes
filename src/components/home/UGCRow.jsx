import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcContent } from '../../data/products';
import './UGCRow.css';

export default function UGCRow() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 280;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="ugc-row section">
      <div className="ugc-row__container">
        <div className="ugc-row__header">
          <h2 className="ugc-row__title">As Seen On You</h2>
          <p className="ugc-row__subtitle">
            Tag @velmora to be featured
          </p>
        </div>

        <div className="ugc-row__nav">
          <button 
            className="ugc-row__nav-btn" 
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>
          <button 
            className="ugc-row__nav-btn" 
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>

        <div className="ugc-row__scroll" ref={scrollRef}>
          {ugcContent.map((item) => (
            <div key={item.id} className="ugc-card">
              <div className="ugc-card__image">
                <img src={item.image} alt={item.caption} />
              </div>
              <p className="ugc-card__caption">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}