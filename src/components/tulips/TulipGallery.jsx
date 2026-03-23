import React, { useEffect, useState } from 'react';
import { supabase } from '@/api/postgrest-client.js';
import { Loader2, AlertCircle, Flower2 } from 'lucide-react';
import TulipCard from './TulipCard';
import AddTulipForm from './AddTulipForm';

const TulipGallery = () => {
  const [tulips, setTulips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTulips();
  }, []);

  const fetchTulips = async () => {
    try {
      setLoading(true);
      setError(null);

      console.log('Fetching tulips from database...');
      const { data: responseData, error: apiError } = await supabase
        .from('TulipFlower')
        .select('*');

      if (apiError) {
        console.error('API Error:', apiError);
        throw apiError;
      }

      console.log('Tulips response:', responseData);
      
      // Parse per API_INTEGRATION rules: responseData.data.list
      const dataPayload = responseData?.data || {};
      const tulipList = dataPayload.list || [];
      
      console.log('Parsed tulip list:', tulipList);
      setTulips(tulipList);

    } catch (err) {
      console.error('Fetch failed:', err);
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleTulipAdded = (newTulip) => {
    console.log('New tulip added:', newTulip);
    // Prepend the new tulip to the list
    setTulips(prev => [newTulip, ...prev]);
  };

  const handleFavorite = (tulip) => {
    console.log('Favorited tulip:', tulip.data?.name);
    // Could implement favorite functionality here
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-12">
        <div className="text-center">
          <Loader2 className="animate-spin w-8 h-8 text-pink-500 mx-auto mb-4" />
          <p className="text-gray-600">Loading beautiful tulips...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 flex gap-3 p-6 items-center bg-red-50 rounded-lg border border-red-100 mx-4">
        <AlertCircle size={24} />
        <div>
          <h3 className="font-semibold">Error loading tulips</h3>
          <p className="text-sm">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Flower2 className="w-8 h-8 text-pink-500" />
            <h2 className="text-4xl font-bold text-gray-900">My Tulip Collection</h2>
            <Flower2 className="w-8 h-8 text-pink-500" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the beauty and elegance of my carefully curated tulip flowers. 
            Each variety brings its own unique charm and vibrant colors to the garden.
          </p>
        </div>

        <AddTulipForm onTulipAdded={handleTulipAdded} />

        {tulips.length === 0 ? (
          <div className="text-center py-12">
            <Flower2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No tulips found</h3>
            <p className="text-gray-500">
              The tulip collection is currently empty. Add your first tulip using the form above!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {tulips.map((tulip) => (
              <TulipCard
                key={tulip.id}
                tulip={tulip}
                onFavorite={handleFavorite}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TulipGallery;