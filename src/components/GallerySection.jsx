import React from 'react';

const GallerySection = ({ id, title, subtitle, items, dark = false }) => {
  const bgClass = dark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900';
  const cardBgClass = dark ? 'bg-gray-800' : 'bg-white';
  const textClass = dark ? 'text-gray-300' : 'text-gray-600';
  const titleClass = dark ? 'text-white' : 'text-gray-900';

  return (
    <section id={id} className={`py-24 px-4 sm:px-6 lg:px-8 ${bgClass}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 id={`${id}-title`} className={`text-4xl font-bold mb-4 ${titleClass}`}>
            {title}
          </h2>
          <p id={`${id}-subtitle`} className={`text-lg max-w-2xl mx-auto ${textClass}`}>
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <article 
              key={item.id} 
              className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBgClass}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden group">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [${id}-subtitle] [${id}-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-6">
                <h3 id={item.titleId} className={`text-xl font-bold mb-2 ${titleClass}`}>
                  {item.title}
                </h3>
                <p id={item.descId} className={textClass}>
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
