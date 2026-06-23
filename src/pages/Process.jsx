import React, { useRef, useEffect } from 'react';
import PageHeader from '../components/shared/PageHeader';
import HomeProcess from '../components/home/HomeProcess';
import { ImageHelper } from '@strikingly/sdk';

const mockStrkImgConfig = {};

export default function Process() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.ImageHelper && typeof window.ImageHelper.loadImages === 'function') {
        try {
            window.ImageHelper.loadImages(mockStrkImgConfig, containerRef.current);
        } catch (e) {
            console.log("Image load deferred");
        }
    }
  }, []);

  return (
    <div ref={containerRef}>
      <PageHeader 
        title="How It Works" 
        description="Our transparent, end-to-end process guarantees quality and protects your investment."
        bgImageId="bg-process-header"
        bgImageUrl="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=2070"
      />
      
      <HomeProcess />
      
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                     <h2 className="text-3xl font-bold mb-6">Why our process matters</h2>
                     <div className="space-y-6 text-slate-600">
                         <p>Most sourcing mistakes happen because buyers skip crucial verification steps to save time or money upfront. This often results in receiving substandard goods, delayed shipments, or dealing with scams.</p>
                         <p>At SSourcing China, we enforce a strict operating procedure. We do not skip factory audits, and we never authorize final payments without a passed QC inspection.</p>
                     </div>
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200">
                    <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                        alt="Quality Inspector at work"
                        className="w-full object-cover aspect-[4/3]" 
                    />
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
