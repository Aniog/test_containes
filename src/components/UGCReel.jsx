import React from 'react';

export default function UGCReel() {
  const ugcItems = [
    { id: 1, caption: 'Golden hour essentials', username: '@sarahj' },
    { id: 2, caption: 'Everyday elegance', username: '@emilyrose' },
    { id: 3, caption: 'Stacked to perfection', username: '@aishwarya' },
    { id: 4, caption: 'Gifted myself today', username: '@chloem' },
    { id: 5, caption: 'Minimal & timeless', username: '@natasha' },
    { id: 6, caption: 'My daily rotation', username: '@isabella' },
  ];

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#faf0e3' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <h2 
            className="font-serif text-charcoal mb-2"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
          >
            #VelmoraMoments
          </h2>
          <p className="text-charcoal-500 text-sm uppercase tracking-wider">
            Shop real looks from our community
          </p>
        </div>

        {/* UGC Reel Strip */}
        <div className="ugc-reel">
          {ugcItems.map((item) => (
            <div key={item.id} className="ugc-card">
              {/* Placeholder for vertical image */}
              <div 
                className="w-full h-full bg-cream-200 flex items-center justify-center"
                style={{ 
                  background: `linear-gradient(135deg, #fae8c4 0%, #f4e2c9 100%)`,
                }}
              >
                <div className="text-center p-6">
                  <div 
                    className="w-16 h-16 rounded-full bg-cream-100 mx-auto mb-4 flex items-center justify-center"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem' }}
                  >
                    {item.username.charAt(1).toUpperCase()}
                  </div>
                  <p className="font-serif text-charcoal text-lg mb-2" style={{ fontStyle: 'italic' }}>
                    "{item.caption}"
                  </p>
                  <p className="text-charcoal-500 text-xs uppercase tracking-wider">
                    {item.username}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
