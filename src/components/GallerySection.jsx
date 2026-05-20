import React, { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'gal-mc010',
    titleId: 'gal-title-mc010',
    descId: 'gal-desc-mc010',
    title: 'Diatom Geometry',
    desc: 'Silica shells of diatoms under polarized light microscopy',
    category: 'Algae',
    ratio: '1x1',
    width: 600,
    span: 'col-span-1',
  },
  {
    id: 'gal-mc011',
    titleId: 'gal-title-mc011',
    descId: 'gal-desc-mc011',
    title: 'Tardigrade Water Bear',
    desc: 'Tardigrade microscopic animal extreme survival organism',
    category: 'Micro-animal',
    ratio: '4x3',
    width: 800,
    span: 'col-span-1 md:col-span-2',
  },
  {
    id: 'gal-mc012',
    titleId: 'gal-title-mc012',
    descId: 'gal-desc-mc012',
    title: 'Pollen Grains',
    desc: 'Colorful pollen grains electron microscope close-up',
    category: 'Botany',
    ratio: '1x1',
    width: 600,
    span: 'col-span-1',
  },
  {
    id: 'gal-mc013',
    titleId: 'gal-title-mc013',
    descId: 'gal-desc-mc013',
    title: 'Neuron Network',
    desc: 'Fluorescent neurons brain cells neural network microscopy',
    category: 'Neuroscience',
    ratio: '1x1',
    width: 600,
    span: 'col-span-1',
  },
  {
    id: 'gal-mc014',
    titleId: 'gal-title-mc014',
    descId: 'gal-desc-mc014',
    title: 'Bacteria Colony',
    desc: 'Colorful bacteria colony petri dish culture growth',
    category: 'Microbiology',
    ratio: '4x3',
    width: 800,
    span: 'col-span-1 md:col-span-2',
  },
  {
    id: 'gal-mc015',
    titleId: 'gal-title-mc015',
    descId: 'gal-desc-mc015',
    title: 'Snowflake Crystal',
    desc: 'Snowflake ice crystal macro photography close-up',
    category: 'Crystallography',
    ratio: '1x1',
    width: 600,
    span: 'col-span-1',
  },
  {
    id: 'gal-mc016',
    titleId: 'gal-title-mc016',
    descId: 'gal-desc-mc016',
    title: 'Paramecium',
    desc: 'Paramecium single cell organism swimming pond water',
    category: 'Protist',
    ratio: '3x4',
    width: 400,
    span: 'col-span-1',
  },
  {
    id: 'gal-mc017',
    titleId: 'gal-title-mc017',
    descId: 'gal-desc-mc017',
    title: 'Butterfly Wing Scale',
    desc: 'Butterfly wing scales iridescent microscope magnification',
    category: 'Entomology',
    ratio: '3x4',
    width: 400,
    span: 'col-span-1',
  },
  {
    id: 'gal-mc018',
    titleId: 'gal-title-mc018',
    descId: 'gal-desc-mc018',
    title: 'Red Blood Cells',
    desc: 'Red blood cells erythrocytes scanning electron microscope',
    category: 'Hematology',
    ratio: '3x4',
    width: 400,
    span: 'col-span-1',
  },
];

const GalleryCard = ({ item }) => (
  <div className={`group relative rounded-2xl overflow-hidden bg-[#0d1f3c] border border-slate-800 hover:border-[#00d4c8]/40 transition-all duration-300 ${item.span}`}>
    <div className="relative overflow-hidden">
      <img
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        data-strk-img-id={item.id}
        data-strk-img={`[${item.descId}] [${item.titleId}]`}
        data-strk-img-ratio={item.ratio}
        data-strk-img-width={item.width}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        style={{ minHeight: '200px' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <div className="p-4">
      <span className="text-xs font-semibold tracking-widest uppercase text-[#00d4c8] mb-1 block">
        {item.category}
      </span>
      <h3 id={item.titleId} className="text-base font-bold text-slate-50 mb-1">
        {item.title}
      </h3>
      <p id={item.descId} className="text-sm text-slate-400 leading-snug">
        {item.desc}
      </p>
    </div>
  </div>
);

const GallerySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="bg-[#0a1628] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-semibold tracking-widest uppercase text-[#00d4c8] mb-4 text-center">
          Visual Collection
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-50 text-center mb-4">
          Gallery of the Invisible
        </h2>
        <p className="text-slate-400 text-lg text-center max-w-2xl mx-auto mb-14 leading-relaxed">
          Stunning imagery captured through electron microscopes, confocal lasers, and polarized light — revealing the hidden artistry of nature.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {galleryItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
