import { useState } from 'react';
import NewsSection from '../components/NewsSection';

export default function News({ activePlatform, searchQuery }) {
  return (
    <div>
      <NewsSection activePlatform={activePlatform} searchQuery={searchQuery} />
    </div>
  );
}
