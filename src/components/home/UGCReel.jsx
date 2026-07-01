import React, { useRef } from 'react';

const UGCReel = () => {
    const reelRef = useRef(null);
    
    const ugcItems = [
        { id: 1, text: "The perfect everyday huggies" },
        { id: 2, text: "Obsessed with this shine" },
        { id: 3, text: "Golden hour essentials" },
        { id: 4, text: "Quiet luxury defined" },
        { id: 5, text: "My collection is growing" },
        { id: 6, text: "Timeless elegance" },
    ];

    return (
        <section className="py-24 bg-velmora-cream overflow-hidden">
            <div className="container mx-auto px-6 mb-12">
                <h3 className="text-xl uppercase tracking-widest font-serif">Seen on you</h3>
            </div>
            
            <div className="relative">
                <div 
                    ref={reelRef}
                    className="flex space-x-4 overflow-x-auto pb-8 scrollbar-hide px-6 cursor-grab active:cursor-grabbing"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {ugcItems.map((item) => (
                        <div key={item.id} className="relative min-w-[280px] aspect-[9/16] bg-velmora-sand group overflow-hidden">
                            <img 
                                data-strk-img-id={`ugc-img-${item.id}`}
                                data-strk-img="woman wearing gold jewelry lifestyle candid jewelry details"
                                data-strk-img-ratio="9x16"
                                data-strk-img-width="400"
                                className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-700 group-hover:scale-105"
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                                alt="UGC Content"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white font-serif italic text-lg leading-tight">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UGCReel;
