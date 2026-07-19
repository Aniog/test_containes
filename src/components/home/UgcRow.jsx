import React from 'react';

const UgcRow = () => {
  const items = [
    { id: 1, handle: '@sophia.m', text: 'Everyday luxury.' },
    { id: 2, handle: '@emma.looks', text: 'Layered perfection.' },
    { id: 3, handle: '@olivia.style', text: 'Gift-ready elegance.' },
    { id: 4, handle: '@chloe.w', text: 'Quiet confidence.' },
    { id: 5, handle: '@amelia.j', text: 'Worth every penny.' },
  ];

  return (
    <section className="bg-brand-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-brand-bg text-center">As Seen On</h2>
        <p className="mt-2 text-xs uppercase tracking-widest text-brand-bg/70 text-center">@velmorajewelry</p>

        <div className="mt-8 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide">
          {items.map(item => (
            <div key={item.id} className="relative h-[420px] w-[220px] flex-shrink-0 snap-center overflow-hidden rounded-md bg-brand-bg/10">
              <img
                src={`https://images.unsplash.com/photo-${['1611591437281-460bfbe1220a','1608042314453-ae338d80c427','1630019852942-f89202989a59','1589128777073-263566ae5e4d','1602173574767-37ac01994b2a'][item.id - 1]}?w=600&q=80`}
                alt="UGC"
                className="h-full w-full object-cover opacity-90"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80';
                }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="font-serif text-sm text-white/90">{item.text}</p>
                <p className="mt-1 text-[11px] text-white/70">{item.handle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UgcRow;
