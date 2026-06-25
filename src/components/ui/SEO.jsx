import React from 'react';

const SEO = ({
  title = 'China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China',
  description = 'SSourcing China is your trusted China sourcing agent. We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping.',
  keywords = 'China sourcing agent, supplier verification, quality inspection, factory audit, shipping from China, procurement China',
  canonical,
}) => {
  const fullTitle = title.includes('SSourcing China') 
    ? title 
    : `${title} | SSourcing China`;
  
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {canonical && <meta property="og:url" content={canonical} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      
      {canonical && <link rel="canonical" href={canonical} />}
    </>
  );
};

export default SEO;
