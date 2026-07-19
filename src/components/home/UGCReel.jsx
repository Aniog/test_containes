import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const UGCReel = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }, []);

    const ugcItems = [
        { id: 'ugc-1', caption: 'Morning Light' },
        { id: 'ugc-2', caption: 'The Perfect Stack' },
        { id: 'ugc-3', caption: 'Details of the Day' },
        { id: 'ugc-4', caption: 'Glow Up' },
        { id: 'ugc-5', caption: 'Golden Hour' },
        { id: 'ugc-6', caption: 'Minimalist Muse' },
    ];

    return (
        <section ref={containerRef} className="py-24 bg-velmora-sand/50 overflow-hidden">
            <div className="px-4 md:px-10 mb-12">
                <h2 id="ugc-title" className="text-2xl font-serif">As worn by you</h2>
            </div>
            
            <div className="flex gap-4 px-4 md:px-10 overflow-x-auto scrollbar-hide">
                {ugcItems.map((item) => (
                    <div key={item.id} className="relative min-w-[280px] md:min-w-[320px] aspect-[9/16] bg-stone-100 overflow-hidden group">
                        <img
                            data-strk-img-id={`ugc-img-${item.id}`}
                            data-strk-img={`[ugc-title] jewelry worn on ear neck model [ugc-caption-${item.id}]`}
                            data-strk-img-ratio="9x16"
                            data-strk-img-width="600"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                            alt="UGC"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                            <p id={`ugc-caption-${item.id}`} className="text-white font-serif text-lg italic opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {item.caption}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default UGCReel;
